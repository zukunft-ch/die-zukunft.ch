/**
 * Form Handler Worker
 *
 * Accepts contact form and newsletter subscriptions via POST,
 * stores them in KV, sends email notification via Cloudflare Email Routing.
 *
 * KV key format:
 *   contact:<timestamp>:<random>  → { name, email, message, lang, ts }
 *   sub:<timestamp>:<random>      → { email, lang, ts }
 *
 * Spam protection: honeypot field + rate limiting per IP.
 */

import { EmailMessage } from 'cloudflare:email';

const ALLOWED_ORIGINS = [
  'https://die-zukunft.ch',
  'https://le-futur.ch',
  'https://il-futuro.ch',
  'https://www.die-zukunft.ch',
  'https://www.le-futur.ch',
  'https://www.il-futuro.ch',
];

const RATE_LIMIT_SECONDS = 60;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return corsResponse(origin, 204);
    }

    // Admin endpoints
    if (url.pathname === '/admin/contacts' || url.pathname === '/admin/subscribers') {
      return handleAdmin(request, env, url.pathname);
    }

    // Only accept POST for form endpoints
    if (request.method !== 'POST') {
      return corsResponse(origin, 405, { error: 'Method not allowed' });
    }

    // Validate origin
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return corsResponse(origin, 403, { error: 'Forbidden' });
    }

    // Rate limiting by IP
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const rateKey = `rate:${ip}`;
    const lastSubmit = await env.FORMS.get(rateKey);
    if (lastSubmit) {
      const elapsed = Date.now() - parseInt(lastSubmit, 10);
      if (elapsed < RATE_LIMIT_SECONDS * 1000) {
        return corsResponse(origin, 429, { error: 'Too many requests. Please wait.' });
      }
    }

    try {
      if (url.pathname === '/contact') {
        return await handleContact(request, env, origin, ip, rateKey);
      }
      if (url.pathname === '/subscribe') {
        return await handleSubscribe(request, env, origin, ip, rateKey);
      }
      return corsResponse(origin, 404, { error: 'Not found' });
    } catch {
      return corsResponse(origin, 500, { error: 'Internal error' });
    }
  },
};

async function handleContact(request, env, origin, ip, rateKey) {
  const data = await request.json();
  const { name, email, message, lang } = data;

  // Honeypot — if "website" field is filled, it's a bot
  if (data.website) {
    // Pretend success so bots don't retry
    return corsResponse(origin, 200, { ok: true });
  }

  // Validate required fields
  if (!name || !email || !message) {
    return corsResponse(origin, 400, { error: 'Missing required fields' });
  }
  if (!isValidEmail(email)) {
    return corsResponse(origin, 400, { error: 'Invalid email' });
  }
  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return corsResponse(origin, 400, { error: 'Input too long' });
  }

  const ts = Date.now();
  const key = `contact:${ts}:${crypto.randomUUID().slice(0, 8)}`;
  const value = JSON.stringify({
    name: sanitize(name),
    email: sanitize(email),
    message: sanitize(message),
    lang: sanitize(lang || 'de'),
    // IP intentionally not persisted (data minimization / FADP). Abuse throttling uses
    // the ephemeral `rate:<ip>` key below, which expires after RATE_LIMIT_SECONDS.
    ts: new Date(ts).toISOString(),
  });

  await env.FORMS.put(key, value, { expirationTtl: 86400 * 365 });
  await env.FORMS.put(rateKey, String(ts), { expirationTtl: RATE_LIMIT_SECONDS });

  await sendNotification(env, 'New contact form submission', [
    `Name: ${sanitize(name)}`,
    `Email: ${sanitize(email)}`,
    `Language: ${sanitize(lang || 'de')}`,
    '',
    sanitize(message),
  ].join('\n'));

  return corsResponse(origin, 200, { ok: true });
}

async function handleSubscribe(request, env, origin, ip, rateKey) {
  const data = await request.json();
  const { email, lang } = data;

  // Honeypot
  if (data.website) {
    return corsResponse(origin, 200, { ok: true });
  }

  if (!email) {
    return corsResponse(origin, 400, { error: 'Missing email' });
  }
  if (!isValidEmail(email)) {
    return corsResponse(origin, 400, { error: 'Invalid email' });
  }

  const ts = Date.now();
  const key = `sub:${ts}:${crypto.randomUUID().slice(0, 8)}`;
  const value = JSON.stringify({
    email: sanitize(email),
    lang: sanitize(lang || 'de'),
    // IP intentionally not persisted (data minimization / FADP). See handleContact.
    ts: new Date(ts).toISOString(),
  });

  await env.FORMS.put(key, value, { expirationTtl: 86400 * 365 });
  await env.FORMS.put(rateKey, String(ts), { expirationTtl: RATE_LIMIT_SECONDS });

  await sendNotification(env, 'New newsletter subscriber', [
    `Email: ${sanitize(email)}`,
    `Language: ${sanitize(lang || 'de')}`,
  ].join('\n'));

  return corsResponse(origin, 200, { ok: true });
}

async function handleAdmin(request, env, pathname) {
  const token = request.headers.get('Authorization');
  const expected = env.ADMIN_TOKEN;
  if (!expected || token !== `Bearer ${expected}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const prefix = pathname === '/admin/contacts' ? 'contact:' : 'sub:';
  const list = await env.FORMS.list({ prefix, limit: 500 });
  const entries = [];

  for (const key of list.keys) {
    const val = await env.FORMS.get(key.name);
    if (val) {
      entries.push({ key: key.name, ...JSON.parse(val) });
    }
  }

  return new Response(JSON.stringify(entries, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}

function corsResponse(origin, status, body) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  const headers = {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };
  return new Response(
    body ? JSON.stringify(body) : null,
    { status, headers }
  );
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 320;
}

function sanitize(str) {
  return String(str).trim().slice(0, 5000);
}

async function sendNotification(env, subject, body) {
  try {
    const msgId = `<${Date.now()}.${crypto.randomUUID().slice(0, 8)}@die-zukunft.ch>`;
    const msg = [
      `From: Die Zukunft Forms <${env.NOTIFY_FROM}>`,
      `To: ${env.NOTIFY_TO}`,
      `Subject: [Die Zukunft] ${subject}`,
      `Message-ID: ${msgId}`,
      `Date: ${new Date().toUTCString()}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=utf-8',
      '',
      body,
    ].join('\r\n');

    const email = new EmailMessage(env.NOTIFY_FROM, env.NOTIFY_TO, msg);
    await env.EMAIL.send(email);
  } catch {
    // Email failure should not break form submission
  }
}
