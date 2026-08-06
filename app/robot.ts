import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://adpolymers.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/*?*', // Disallow URL query parameters to avoid duplicate canonical content issues
        ],
      },
      {
        userAgent: 'GPTBot', // Explicitly allow or configure AI crawlers if needed
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}