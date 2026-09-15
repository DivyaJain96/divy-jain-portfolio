import { useEffect } from 'react';
import { SITE_URL, profile } from '@/data/portfolio';

const TITLE = 'Divy Jain | Java & Spring Boot Software Developer';
const DESCRIPTION =
  'Divy Jain is a Software Developer in Ahmedabad developing enterprise software and web applications with Java, Spring Boot, frontend/UI development, backend development, REST APIs, microservices, and system integrations.';
const CANONICAL = `${SITE_URL}/`;
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

function upsertJsonLd() {
  const id = 'person-jsonld';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: CANONICAL,
    image: `${SITE_URL}${profile.photo}`,
    description: DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    sameAs: profile.linkedin ? [profile.linkedin] : undefined,
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Backend Development',
      'Frontend Development',
      'REST APIs',
      'Microservices',
      'System Integrations',
      'SQL',
      'PostgreSQL',
      'Enterprise Software',
      'Web Application Development',
    ],
  });
}

export default function Seo() {
  useEffect(() => {
    document.title = TITLE;
    upsertMeta('link[rel="canonical"]', { rel: 'canonical', href: CANONICAL });
    upsertMeta('meta[name="description"]', { name: 'description', content: DESCRIPTION });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: TITLE });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: DESCRIPTION });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: CANONICAL });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: IMAGE });
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: 'Divy Jain — Software Developer, Java and Spring Boot',
    });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: TITLE });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: DESCRIPTION });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: IMAGE });
    upsertMeta('meta[name="geo.placename"]', { name: 'geo.placename', content: profile.location });
    upsertJsonLd();
  }, []);

  return null;
}
