import { useEffect } from 'react';
import { DEFAULT_IMAGE, DEFAULT_SITE_URL, PAGE_META, canonicalPath } from './seoMeta';

/** Production domain for canonical URLs and social tags. */
export const SITE_URL = ((import.meta.env.VITE_SITE_URL as string | undefined) ?? DEFAULT_SITE_URL).replace(/\/$/, '');

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Keeps title, description, canonical and social tags in sync with the current route. */
export function useSeo(path: string) {
  useEffect(() => {
    const key = canonicalPath(path);
    const meta = PAGE_META[key];
    const url = `${SITE_URL}${key === '/' ? '/' : key}`;
    const image = `${SITE_URL}${meta.image ?? DEFAULT_IMAGE}`;

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setCanonical(url);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', image);
  }, [path]);
}
