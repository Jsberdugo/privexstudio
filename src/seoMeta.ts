import { SERVICES } from './data';

/** Fallback production domain; override with VITE_SITE_URL when building. */
export const DEFAULT_SITE_URL = 'https://privexstudio.com';

export const BRAND = 'Privéx Studio';
export const DEFAULT_IMAGE = '/images/hero-natural-nails.jpg';

type PageMeta = { title: string; description: string; image?: string };

/** One entry per indexable route. Titles stay under ~60 characters, descriptions under ~160. */
export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: `${BRAND} | Russian Manicure & Dry Pedicure in Birmingham, AL`,
    description:
      'Russian manicure, Builder Gel and waterless dry pedicures in Birmingham, Alabama. Natural nail care with hospital-grade sterilization. By appointment only.',
  },
  '/manicures': {
    title: `Russian Manicures & Builder Gel in Birmingham, AL | ${BRAND}`,
    description:
      'Russian dry manicure, Builder Gel, Gel Russian Manicure and Gel-X extensions in Birmingham, AL. Precise cuticle work and long-lasting, natural results.',
    image: '/images/gel-russian-manicure.png',
  },
  '/pedicures': {
    title: `Dry Pedicures in Birmingham, AL | ${BRAND}`,
    description:
      '100% waterless pedicures in Birmingham, AL: Signature Gel, Russian and Classic dry pedicures with steam, warm towels and no shared basins.',
    image: '/images/russian-pedicure.png',
  },
  '/add-ons': {
    title: `Nail Art & Add-Ons | ${BRAND} Birmingham`,
    description: 'Chrome, cat eye, French, baby boomer and intricate nail art add-ons, plus extensions and repairs at Privéx Studio in Birmingham, AL.',
    image: '/images/addon-chrome.png',
  },
  '/bridal': {
    title: `Bridal & Engagement Nails in Birmingham, AL | ${BRAND}`,
    description: 'Elegant bridal and engagement manicures with soft nude tones, delicate French tips and timeless natural finishes in Birmingham, Alabama.',
    image: '/images/bridal-2.png',
  },
  '/about': {
    title: `About Arianne Márquez | ${BRAND}`,
    description: 'Meet Arianne Márquez, founder of Privéx Studio, and our team of Russian manicure and dry pedicure specialists in Birmingham, AL.',
    image: '/images/ari-meiby-equipo.jpg',
  },
  '/policies': {
    title: `Booking & Cancellation Policies | ${BRAND}`,
    description: 'Deposits, 48-hour cancellation, late arrival and studio etiquette policies for appointments at Privéx Studio in Birmingham, AL.',
  },
  '/faq': {
    title: `FAQ: Russian Manicure & Dry Pedicure | ${BRAND}`,
    description: 'Answers about Russian manicures, Builder Gel, waterless pedicures, deposits and booking at Privéx Studio in Birmingham, Alabama.',
  },
};

for (const s of SERVICES) {
  PAGE_META[`/services/${s.id}`] = {
    title: `${s.title} in Birmingham, AL | ${BRAND}`,
    description: `${s.shortDescription} ${s.priceFormatted} · ${s.durationFormatted}.`.slice(0, 160),
    image: s.image,
  };
}

/** Normalizes a path to the key used in PAGE_META; unknown paths fall back to home. */
export function canonicalPath(path: string) {
  const clean = path.replace(/\/$/, '') || '/';
  const upper = clean.replace(/^\/services\/([a-z])$/i, (_, id: string) => `/services/${id.toUpperCase()}`);
  return PAGE_META[upper] ? upper : '/';
}
