import { SITE_URL, profile } from '@/data/portfolio';

const IMAGE = `${SITE_URL}/og-image.svg`;

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    const isLink = selector.startsWith('link') || Boolean(attrs.rel);
    el = document.createElement(isLink ? 'link' : 'meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el?.setAttribute(key, value));
}

export function applyPageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const canonical = `${SITE_URL}${path}`;

  document.title = title;
  upsertMeta('link[rel="canonical"]', { rel: 'canonical', href: canonical });
  upsertMeta('meta[name="description"]', { name: 'description', content: description });
  upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: profile.name });
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: IMAGE });
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: IMAGE });

  document.getElementById('person-jsonld')?.remove();
}
