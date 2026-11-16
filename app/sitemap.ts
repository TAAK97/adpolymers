import type { MetadataRoute } from 'next';
import { INDUSTRIES, MATERIALS, SERVICES } from '@/lib/catalog';
import { getAllPosts } from '@/lib/blog';
import { getAllProjects } from '@/lib/projects';
import { SITE } from '@/lib/site';

// Only list URLs that really exist — every entry here must return HTTP 200.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' = 'monthly', lastModified: Date = now) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });
  const date = (d: string) => (isNaN(Date.parse(d)) ? now : new Date(d));
  return [
    u('', 1, 'weekly'),
    u('/services', 0.9),
    ...SERVICES.map((s) => u(`/services/${s.slug}`, 0.8)),
    u('/industries', 0.9),
    ...INDUSTRIES.map((i) => u(`/industries/${i.slug}`, 0.8)),
    u('/materials', 0.8),
    ...MATERIALS.map((m) => u(`/materials/${m.slug}`, 0.7)),
    u('/projects', 0.8, 'weekly'),
    ...getAllProjects().map((p) => u(`/projects/${p.slug}`, 0.7, 'monthly', date(p.date))),
    u('/tools', 0.7),
    u('/tools/instant-quote', 0.9),
    u('/tools/clamping-force-calculator', 0.8),
    u('/blog', 0.7, 'weekly'),
    ...getAllPosts().map((p) => u(`/blog/${p.slug}`, 0.6, 'monthly', date(p.date))),
    u('/about', 0.7),
    u('/contact', 0.9),
  ];
}
