import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://adpolymers.com';

  // Core Landing Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Core Service Capabilities Pages
  const services = [
    'plastic-injection-moulding',
    'insert-moulding',
    'overmoulding',
    'rapid-prototyping',
    'tooling-and-mould-design',
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Resin & Material Specification Pages
  const materials = [
    'polycarbonate-pc',
    'abs-injection-moulding',
    'nylon-pa6',
    'polypropylene-pp',
    'acetal-pom',
    'peek-moulding',
  ];

  const materialRoutes: MetadataRoute.Sitemap = materials.map((slug) => ({
    url: `${baseUrl}/materials/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Industry Vertical Landing Pages
  const industries = [
    'medical-device-moulding',
    'automotive-plastic-components',
    'electronics-enclosures',
    'consumer-goods',
  ];

  const industryRoutes: MetadataRoute.Sitemap = industries.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...materialRoutes,
    ...industryRoutes,
  ];
}