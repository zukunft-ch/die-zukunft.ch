/**
 * Multi-Domain Language Proxy
 *
 * Proxies le-futur.ch → die-zukunft.ch/fr/ and il-futuro.ch → die-zukunft.ch/it/
 * so each language community gets a native domain experience without the /fr/ or /it/ prefix.
 *
 * EN stays at die-zukunft.ch/en/.
 */

const ORIGIN = 'die-zukunft.ch';

const DOMAIN_CONFIG = {
  'le-futur.ch': { lang: 'fr', prefix: '/fr' },
  'il-futuro.ch': { lang: 'it', prefix: '/it' },
};

// All language domains for cross-domain rewriting
const LANG_DOMAINS = {
  de: 'die-zukunft.ch',
  fr: 'le-futur.ch',
  it: 'il-futuro.ch',
  en: 'die-zukunft.ch',
};

// File extensions that indicate static assets (no prefix needed)
const STATIC_EXT = /\.(?:css|js|woff2?|ttf|eot|otf|svg|png|jpe?g|gif|webp|avif|ico|webmanifest|json|xml|txt|wasm|map)$/i;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const hostname = url.hostname.replace(/^www\./, '');

    // www → apex redirect
    if (url.hostname.startsWith('www.')) {
      const target = new URL(url);
      target.hostname = hostname;
      return Response.redirect(target.toString(), 301);
    }

    const config = DOMAIN_CONFIG[hostname];
    if (!config) {
      // Not a language domain — pass through (shouldn't happen with route config)
      return fetch(request);
    }

    const { lang, prefix } = config;
    const path = url.pathname;

    // --- Special endpoints ---

    // robots.txt — generate dynamically
    if (path === '/robots.txt') {
      return new Response(
        `User-agent: *\nAllow: /\n\nSitemap: https://${hostname}/sitemap.xml\n`,
        { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=86400' } }
      );
    }

    // sitemap.xml — fetch origin sitemap, filter to own-language URLs, rewrite domain
    if (path === '/sitemap.xml') {
      return handleSitemap(hostname, prefix, lang);
    }

    // --- Determine origin URL ---
    const originUrl = new URL(url);
    originUrl.hostname = ORIGIN;

    const isStatic = STATIC_EXT.test(path);

    if (!isStatic) {
      // Page request: prepend language prefix
      originUrl.pathname = prefix + path;
    }
    // Static assets: keep path as-is (CSS, JS, fonts, images are at root)

    // Fetch from origin
    let response = await fetch(originUrl.toString(), {
      method: request.method,
      headers: request.headers,
      redirect: 'manual',
    });

    // 404 fallback: if prefixed path not found and this wasn't a static asset,
    // retry without prefix (e.g. /favicon.ico requested as page)
    if (response.status === 404 && !isStatic) {
      const fallbackUrl = new URL(url);
      fallbackUrl.hostname = ORIGIN;
      const fallback = await fetch(fallbackUrl.toString(), {
        method: request.method,
        headers: request.headers,
        redirect: 'manual',
      });
      if (fallback.status !== 404) {
        response = fallback;
      }
    }

    // Handle redirects from origin — rewrite Location header
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (location) {
        const rewritten = rewriteUrl(location, hostname, prefix, lang);
        return new Response(null, {
          status: response.status,
          headers: { ...Object.fromEntries(response.headers), location: rewritten },
        });
      }
    }

    const contentType = response.headers.get('content-type') || '';

    // Only rewrite HTML and XML responses
    if (contentType.includes('text/html') || contentType.includes('text/xml') || contentType.includes('application/xml')) {
      let body = await response.text();
      body = rewriteBody(body, hostname, prefix, lang);

      const headers = new Headers(response.headers);
      headers.delete('content-length');
      headers.delete('content-encoding');

      return new Response(body, {
        status: response.status,
        headers,
      });
    }

    // Non-HTML: pass through unchanged
    return response;
  },
};

/**
 * Rewrite all URLs in HTML/XML body.
 */
function rewriteBody(body, hostname, prefix, selfLang) {
  // 1. Rewrite absolute URLs for self-language: die-zukunft.ch/fr/path → le-futur.ch/path
  //    Must come before the generic static-asset rewrite.
  body = body.replaceAll(`https://${ORIGIN}${prefix}/`, `https://${hostname}/`);
  body = body.replaceAll(`https://${ORIGIN}${prefix}"`, `https://${hostname}"`);

  // 2. Rewrite other language domains
  for (const [lang, domain] of Object.entries(LANG_DOMAINS)) {
    if (lang === selfLang || lang === 'de' || lang === 'en') continue;
    const langPrefix = `/${lang}`;
    body = body.replaceAll(`https://${ORIGIN}${langPrefix}/`, `https://${domain}/`);
    body = body.replaceAll(`https://${ORIGIN}${langPrefix}"`, `https://${domain}"`);
  }

  // 3. Rewrite remaining absolute die-zukunft.ch URLs (static assets, DE pages, EN pages)
  //    Static assets: die-zukunft.ch/main.css, die-zukunft.ch/fonts/... → hostname/...
  //    But NOT die-zukunft.ch/ (homepage) or die-zukunft.ch/vision/ (DE pages) — those should stay
  //    We rewrite static asset URLs (with file extensions) to use the current domain
  body = body.replace(
    new RegExp(`https://${escapeRegex(ORIGIN)}/([^"'\\s]*\\.(?:css|js|woff2?|ttf|svg|png|jpe?g|gif|webp|avif|ico|webmanifest|json))`, 'g'),
    `https://${hostname}/$1`
  );

  // 4. Rewrite relative prefix links: href="/fr/" → href="/"  and  href="/fr/vision/" → href="/vision/"
  body = body.replaceAll(`href="${prefix}/"`, 'href="/"');
  body = body.replace(
    new RegExp(`href="${escapeRegex(prefix)}/([^"]*)"`, 'g'),
    'href="/$1"'
  );

  // 5. Same for hreflang/canonical with relative URLs
  body = body.replaceAll(`hreflang="${selfLang}" href="https://${ORIGIN}${prefix}/`, `hreflang="${selfLang}" href="https://${hostname}/`);

  // 6. Rewrite hreflang tags for other language domains
  for (const [lang, domain] of Object.entries(LANG_DOMAINS)) {
    if (lang === 'de' || lang === 'en') continue;
    const langPrefix = `/${lang}`;
    body = body.replaceAll(
      `hreflang="${lang}" href="https://${ORIGIN}${langPrefix}/`,
      `hreflang="${lang}" href="https://${domain}/`
    );
  }

  return body;
}

/**
 * Rewrite a single URL (used for Location headers).
 */
function rewriteUrl(location, hostname, prefix, lang) {
  try {
    const u = new URL(location);
    if (u.hostname === ORIGIN && u.pathname.startsWith(prefix + '/')) {
      u.hostname = hostname;
      u.pathname = u.pathname.slice(prefix.length) || '/';
      return u.toString();
    }
    // Rewrite other language domains in redirects
    for (const [l, domain] of Object.entries(LANG_DOMAINS)) {
      if (l === 'de' || l === 'en') continue;
      const lp = `/${l}`;
      if (u.hostname === ORIGIN && u.pathname.startsWith(lp + '/')) {
        u.hostname = domain;
        u.pathname = u.pathname.slice(lp.length) || '/';
        return u.toString();
      }
    }
  } catch {
    // Not an absolute URL, return as-is
  }
  return location;
}

/**
 * Fetch origin sitemap, filter to own-language URLs, rewrite domains.
 */
async function handleSitemap(hostname, prefix, lang) {
  const res = await fetch(`https://${ORIGIN}/sitemap.xml`);
  if (!res.ok) {
    return new Response('Sitemap not available', { status: 502 });
  }

  let xml = await res.text();

  // Zola generates one sitemap with all language URLs.
  // Filter to only keep <url> blocks containing the language prefix.
  // Simple string-based approach: split on <url>, keep matching blocks.
  const parts = xml.split('<url>');
  const header = parts[0]; // XML declaration + <urlset>
  const footer = '</urlset>';

  const filtered = parts.slice(1).filter(block => {
    // Keep entries that contain our language prefix path
    return block.includes(`${ORIGIN}${prefix}/`);
  });

  if (filtered.length === 0) {
    // Fallback: return full sitemap rewritten
    xml = rewriteBody(xml, hostname, prefix, lang);
    return new Response(xml, {
      headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
    });
  }

  // Reassemble and rewrite URLs
  let sitemap = header + filtered.map(b => '<url>' + b).join('') ;
  // Ensure closing tag
  if (!sitemap.trimEnd().endsWith('</urlset>')) {
    sitemap = sitemap.trimEnd();
    if (sitemap.endsWith('</url>')) {
      sitemap += '\n</urlset>';
    }
  }

  sitemap = rewriteBody(sitemap, hostname, prefix, lang);

  return new Response(sitemap, {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
