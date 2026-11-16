import type { Metadata } from 'next';
import { SITE, ORG_ID } from './site';

/**
 * Per-page metadata with a self-referencing canonical URL.
 * Every page MUST use this (or set alternates.canonical itself) — otherwise
 * Google may treat it as a duplicate of the homepage.
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  images?: string[];
  noindex?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${SITE.url}${opts.path === '/' ? '' : opts.path}`;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      locale: 'en_IN',
      type: opts.type ?? 'website',
      images: opts.images ?? ['/og-image.png'],
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path === '/' ? '' : c.path}`,
    })),
  };
}

export type Faq = { q: string; a: string };

export function faqSchema(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@type': 'Service',
    name,
    serviceType: name,
    description,
    url: `${SITE.url}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: [{ '@type': 'Country', name: 'India' }, 'Worldwide'],
  };
}

export function webAppSchema(name: string, description: string, path: string) {
  return {
    '@type': 'WebApplication',
    name,
    description,
    url: `${SITE.url}${path}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any (web browser)',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    provider: { '@id': ORG_ID },
  };
}
