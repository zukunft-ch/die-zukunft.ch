/**
 * Form Handler Worker
 *
 * Accepts contact form and newsletter subscriptions via POST,
 * stores them in KV, sends email notification via Cloudflare Email Routing.
 *
 * KV key format:
 *   contact:<timestamp>:<random>  → { name, email, message, lang, ts }
 *   sub:<timestamp>:<random>      → { email, lang, ts }
 *   member:<timestamp>:<random>   → membership application (see handleJoin);
 *                                   stored WITHOUT expiry: it is the member register.
 *
 * Spam protection: honeypot field + rate limiting per IP.
 *
 * Also serves the-future.world (international site): records from there carry
 * site: "world", optional `country` and, for contact, an optional `topic`
 * (e.g. "chapter" for people who want to start a national chapter).
 */

import { EmailMessage } from 'cloudflare:email';

const ALLOWED_ORIGINS = [
  'https://die-zukunft.ch',
  'https://le-futur.ch',
  'https://il-futuro.ch',
  'https://www.die-zukunft.ch',
  'https://www.le-futur.ch',
  'https://www.il-futuro.ch',
  'https://the-future.world',
  'https://www.the-future.world',
];

const TOPICS = ['general', 'chapter'];

function siteOf(origin) {
  return origin.includes('the-future.world') ? 'world' : 'ch';
}

function optional(value, max) {
  return value ? sanitize(value).slice(0, max) : undefined;
}

const RATE_LIMIT_SECONDS = 60;

// Membership is with the Swiss Verein: only the Swiss sites may submit applications.
const JOIN_ORIGINS = ALLOWED_ORIGINS.filter((o) => !o.includes('the-future.world'));
const LANGS = ['de', 'fr', 'it', 'en'];
const FEES = ['regular', 'reduced'];
const HELP = ['video', 'design', 'events', 'research', 'community', 'translation'];
const MEMBER_STATUSES = ['pending', 'admitted', 'rejected', 'left'];

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
    if (url.pathname === '/admin/members' || url.pathname.startsWith('/admin/members/')) {
      return handleAdminMembers(request, env, url.pathname);
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
      if (url.pathname === '/join') {
        if (!JOIN_ORIGINS.includes(origin)) {
          return corsResponse(origin, 403, { error: 'Forbidden' });
        }
        return await handleJoin(request, env, origin, ip, rateKey);
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
  const site = siteOf(origin);
  const country = optional(data.country, 100);
  const topic = TOPICS.includes(data.topic) ? data.topic : undefined;

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
    site,
    country,
    topic,
    // IP intentionally not persisted (data minimization / FADP). Abuse throttling uses
    // the ephemeral `rate:<ip>` key below, which expires after RATE_LIMIT_SECONDS.
    ts: new Date(ts).toISOString(),
  });

  await env.FORMS.put(key, value, { expirationTtl: 86400 * 365 });
  await env.FORMS.put(rateKey, String(ts), { expirationTtl: RATE_LIMIT_SECONDS });

  await sendNotification(env, site, topic === 'chapter' ? 'New chapter enquiry' : 'New contact form submission', [
    `Name: ${sanitize(name)}`,
    `Email: ${sanitize(email)}`,
    `Language: ${sanitize(lang || 'de')}`,
    ...(country ? [`Country: ${country}`] : []),
    ...(topic ? [`Topic: ${topic}`] : []),
    '',
    sanitize(message),
  ].join('\n'));

  return corsResponse(origin, 200, { ok: true });
}

async function handleSubscribe(request, env, origin, ip, rateKey) {
  const data = await request.json();
  const { email, lang } = data;
  const site = siteOf(origin);
  const country = optional(data.country, 100);

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
    site,
    country,
    // IP intentionally not persisted (data minimization / FADP). See handleContact.
    ts: new Date(ts).toISOString(),
  });

  await env.FORMS.put(key, value, { expirationTtl: 86400 * 365 });
  await env.FORMS.put(rateKey, String(ts), { expirationTtl: RATE_LIMIT_SECONDS });

  await sendNotification(env, site, 'New newsletter subscriber', [
    `Email: ${sanitize(email)}`,
    `Language: ${sanitize(lang || 'de')}`,
    ...(country ? [`Country: ${country}`] : []),
  ].join('\n'));

  return corsResponse(origin, 200, { ok: true });
}

/**
 * Membership application. Political party membership reveals a political opinion
 * (sensitive personal data, Art. 5 lit. c FADP), so:
 *   - records are kept without expiry (they form the member register) and are only
 *     readable via the admin endpoints;
 *   - the notification email contains NO personal data, only the record key.
 */
async function handleJoin(request, env, origin, ip, rateKey) {
  const data = await request.json();

  if (data.website) {
    return corsResponse(origin, 200, { ok: true });
  }

  const required = ['first_name', 'last_name', 'email', 'street', 'zip_city', 'country'];
  for (const field of required) {
    if (!data[field] || !String(data[field]).trim()) {
      return corsResponse(origin, 400, { error: 'Missing required fields' });
    }
  }
  if (!isValidEmail(String(data.email).trim())) {
    return corsResponse(origin, 400, { error: 'Invalid email' });
  }
  // Declarations required by the statutes (Art. 3) and the FADP consent.
  if (data.age16 !== true || data.statutes !== true || data.consent !== true) {
    return corsResponse(origin, 400, { error: 'Missing declarations' });
  }
  if (!FEES.includes(data.fee)) {
    return corsResponse(origin, 400, { error: 'Invalid fee category' });
  }
  const tooLong = [
    ['first_name', 100], ['last_name', 100], ['email', 320], ['street', 200],
    ['zip_city', 200], ['country', 100], ['phone', 50], ['help_other', 500],
  ].some(([field, max]) => data[field] && String(data[field]).length > max);
  if (tooLong) {
    return corsResponse(origin, 400, { error: 'Input too long' });
  }

  const lang = LANGS.includes(data.lang) ? data.lang : 'de';
  const help = Array.isArray(data.help) ? [...new Set(data.help.filter((h) => HELP.includes(h)))] : [];

  const ts = Date.now();
  const key = `member:${ts}:${crypto.randomUUID().slice(0, 8)}`;
  const record = {
    status: 'pending',
    first_name: sanitize(data.first_name),
    last_name: sanitize(data.last_name),
    email: sanitize(data.email),
    street: sanitize(data.street),
    zip_city: sanitize(data.zip_city),
    country: sanitize(data.country),
    phone: optional(data.phone, 50),
    lang,
    fee: data.fee,
    help,
    help_other: optional(data.help_other, 500),
    // Declarations as given, with the time they were given (proof of joining).
    declarations: {
      age16: true,
      statutes: true,
      consent: true,
      no_other_party: data.no_other_party === true,
    },
    newsletter: data.newsletter === true,
    // IP intentionally not persisted (data minimization / FADP).
    ts: new Date(ts).toISOString(),
  };

  await env.FORMS.put(key, JSON.stringify(record));

  if (record.newsletter) {
    const subKey = `sub:${ts}:${crypto.randomUUID().slice(0, 8)}`;
    await env.FORMS.put(subKey, JSON.stringify({
      email: record.email, lang, site: 'ch', ts: record.ts,
    }), { expirationTtl: 86400 * 365 });
  }

  await env.FORMS.put(rateKey, String(ts), { expirationTtl: RATE_LIMIT_SECONDS });

  await sendNotification(env, 'ch', 'Neuer Mitgliedschaftsantrag', [
    'Ein neuer Mitgliedschaftsantrag ist eingegangen.',
    '',
    `Referenz: ${key}`,
    '',
    'Die Angaben stehen bewusst nicht in dieser E-Mail (besonders schützenswerte Daten).',
    'Abrufen: GET https://api.die-zukunft.ch/admin/members (Authorization: Bearer <ADMIN_TOKEN>)',
  ].join('\n'));

  return corsResponse(origin, 200, { ok: true });
}

/**
 * Member register administration (Authorization: Bearer <ADMIN_TOKEN>):
 *   GET    /admin/members          → all records (follows KV pagination)
 *   GET    /admin/members/<key>    → one record
 *   PATCH  /admin/members/<key>    → { status, decided?, note? } records the board's decision
 *   DELETE /admin/members/<key>    → erases the record (right to erasure)
 */
async function handleAdminMembers(request, env, pathname) {
  const token = request.headers.get('Authorization');
  const expected = env.ADMIN_TOKEN;
  if (!expected || token !== `Bearer ${expected}`) {
    return new Response('Unauthorized', { status: 401 });
  }
  const json = (body, status = 200) => new Response(JSON.stringify(body, null, 2), {
    status, headers: { 'Content-Type': 'application/json' },
  });

  const key = pathname === '/admin/members' ? null : decodeURIComponent(pathname.slice('/admin/members/'.length));
  if (key !== null && !/^member:\d+:[0-9a-f]{8}$/.test(key)) {
    return json({ error: 'Invalid key' }, 400);
  }

  if (request.method === 'GET' && key === null) {
    const entries = [];
    let cursor;
    do {
      const list = await env.FORMS.list({ prefix: 'member:', cursor });
      for (const k of list.keys) {
        const val = await env.FORMS.get(k.name);
        if (val) entries.push({ key: k.name, ...JSON.parse(val) });
      }
      cursor = list.list_complete ? undefined : list.cursor;
    } while (cursor);
    return json(entries);
  }

  if (key === null) {
    return json({ error: 'Method not allowed' }, 405);
  }

  const current = await env.FORMS.get(key);
  if (!current) {
    return json({ error: 'Not found' }, 404);
  }

  if (request.method === 'GET') {
    return json({ key, ...JSON.parse(current) });
  }

  if (request.method === 'PATCH') {
    const body = await request.json();
    if (!MEMBER_STATUSES.includes(body.status)) {
      return json({ error: `status must be one of ${MEMBER_STATUSES.join(', ')}` }, 400);
    }
    const record = JSON.parse(current);
    record.status = body.status;
    record.decided = optional(body.decided, 10) || new Date().toISOString().slice(0, 10);
    if (body.note !== undefined) record.note = optional(body.note, 1000);
    await env.FORMS.put(key, JSON.stringify(record));
    return json({ key, ...record });
  }

  if (request.method === 'DELETE') {
    await env.FORMS.delete(key);
    return json({ key, deleted: true });
  }

  return json({ error: 'Method not allowed' }, 405);
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

async function sendNotification(env, site, subject, body) {
  const brand = site === 'world' ? 'The Future' : 'Die Zukunft';
  try {
    const msgId = `<${Date.now()}.${crypto.randomUUID().slice(0, 8)}@die-zukunft.ch>`;
    const msg = [
      `From: ${brand} Forms <${env.NOTIFY_FROM}>`,
      `To: ${env.NOTIFY_TO}`,
      `Subject: [${brand}] ${subject}`,
      `Message-ID: ${msgId}`,
      `Date: ${new Date().toUTCString()}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=utf-8',
      '',
      body,
    ].join('\r\n');

    const email = new EmailMessage(env.NOTIFY_FROM, env.NOTIFY_TO, msg);
    await env.EMAIL.send(email);
  } catch (err) {
    // Email failure should not break form submission, but must be visible in the logs
    // (`npx wrangler tail form-handler`). The record is stored in KV either way.
    console.error('notification failed:', err && err.message ? err.message : String(err));
  }
}
