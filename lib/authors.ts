import { ORG_ID, SITE } from './site';

// Article authors. Blog posts set `author: <slug>` in their front matter (defaults to the first author).
// TODO(owner): extend each bio with real experience (years in moulding, areas of expertise).
export const AUTHORS = [
  {
    slug: 'harish-kumar',
    name: 'Harish Kumar',
    role: 'Senior Analyst',
    bio: 'Harish Kumar is a Senior Analyst at AD Polymers in Parwanoo, Himachal Pradesh. He writes about engineering plastics, injection moulding processes and quality for OEM buyers and design engineers.',
  },
] as const;

export type Author = (typeof AUTHORS)[number];

export const findAuthor = (slug?: string): Author => AUTHORS.find((a) => a.slug === slug) ?? AUTHORS[0];

export function personSchema(a: Author) {
  return {
    '@type': 'Person',
    '@id': `${SITE.url}/about#${a.slug}`,
    name: a.name,
    jobTitle: a.role,
    description: a.bio,
    url: `${SITE.url}/about#${a.slug}`,
    worksFor: { '@id': ORG_ID },
  };
}
