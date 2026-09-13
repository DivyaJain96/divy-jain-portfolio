import { useEffect } from 'react';
import { profile } from '@/data/portfolio';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    el = document.createElement(selector.startsWith('link') || attrs.rel ? 'link' : 'meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el?.setAttribute(key, value));
}

export default function Seo() {
  useEffect(() => {
    const origin = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || window.location.origin;
    const url = `${origin}/`;
    const image = `${origin}/og-image.png`;

    document.title = 'Divy Jain | Java & Spring Boot Software Developer';
    upsertMeta('link[rel="canonical"]', { rel: 'canonical', href: url });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    upsertMeta('meta[name="geo.placename"]', { name: 'geo.placename', content: profile.location });
  }, []);

  return null;
}
