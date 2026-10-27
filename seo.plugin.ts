import type { HtmlTagDescriptor, Plugin } from 'vite';
import { BRAND, DEFAULT_IMAGE, DEFAULT_SITE_URL, PAGE_META } from './src/seoMeta';
import { SERVICES } from './src/data';

/**
 * Build-time SEO for Privéx:
 * - LocalBusiness (NailSalon) structured data + static social tags in index.html,
 *   so crawlers that don't run JavaScript still see them.
 * - sitemap.xml and robots.txt generated from the same route list as the app.
 */
export function privexSeo(): Plugin {
  const siteUrl = (process.env.VITE_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, '');
  const home = PAGE_META['/'];
  const abs = (p: string) => `${siteUrl}${p}`;

  const business = {
    '@context': 'https://schema.org',
    '@type': 'NailSalon',
    '@id': `${siteUrl}/#business`,
    name: BRAND,
    url: `${siteUrl}/`,
    hasMap: 'https://maps.google.com/?q=300+Lorna+Square+Suite+312+Hoover+AL+35216',
    image: abs(DEFAULT_IMAGE),
    logo: abs('/images/logo-privex.png'),
    description: home.description,
    telephone: '+1-863-257-8841',
    priceRange: '$$',
    founder: { '@type': 'Person', name: 'Arianne Márquez' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '300 Lorna Square, Suite 312',
      addressLocality: 'Hoover',
      addressRegion: 'AL',
      postalCode: '35216',
      addressCountry: 'US',
    },
    areaServed: ['Birmingham, AL', 'Hoover, AL', 'Vestavia Hills, AL', 'Mountain Brook, AL'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: ['https://instagram.com/privexstudio', 'https://www.tiktok.com/@privexstudio'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nail services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        url: abs(`/services/${s.id}`),
        price: s.basePrice,
        priceCurrency: 'USD',
        itemOffered: { '@type': 'Service', name: s.title, description: s.shortDescription },
      })),
    },
  };

  const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'meta', attrs, injectTo: 'head' });

  return {
    name: 'privex-seo',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        // The site config injects a generic title; replace it with the home title.
        const withTitle = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${home.title}</title>`);
        const tags: HtmlTagDescriptor[] = [
          meta({ name: 'theme-color', content: '#4A0D1A' }),
          { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
          meta({ property: 'og:type', content: 'website' }),
          meta({ property: 'og:site_name', content: BRAND }),
          meta({ property: 'og:locale', content: 'en_US' }),
          meta({ property: 'og:url', content: `${siteUrl}/` }),
          meta({ property: 'og:image', content: abs(DEFAULT_IMAGE) }),
          meta({ property: 'og:image:alt', content: 'Short, natural manicure by Privéx Studio' }),
          meta({ name: 'twitter:card', content: 'summary_large_image' }),
          meta({ name: 'twitter:title', content: home.title }),
          meta({ name: 'twitter:description', content: home.description }),
          meta({ name: 'twitter:image', content: abs(DEFAULT_IMAGE) }),
          meta({ name: 'geo.region', content: 'US-AL' }),
          meta({ name: 'geo.placename', content: 'Birmingham' }),
          { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(business), injectTo: 'head' },
        ];
        return { html: withTitle, tags };
      },
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const urls = Object.keys(PAGE_META)
        .map((p) => {
          const priority = p === '/' ? '1.0' : p.startsWith('/services/') ? '0.7' : '0.8';
          return `  <url><loc>${abs(p)}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
        })
        .join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
    },
  };
}
