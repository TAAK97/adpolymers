import type { NextConfig } from "next";

// Old URLs that were removed: send visitors and Google to the closest live page (permanent 308).
const RETIRED_BLOG_POSTS = [
  'optimizing-injection-pressure-pa66-automotive-clips',
  'hydrostatic-burst-pressure-san-filter-housings',
  'wear-lifecycle-pom-acetal-architectural-bushings',
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.0.0.218', 'localhost:3000'],
  async redirects() {
    return [
      // One canonical host: send adpolymers.in (no www) to www.adpolymers.in so Google sees a single site.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'adpolymers.in' }],
        destination: 'https://www.adpolymers.in/:path*',
        permanent: true,
      },
      { source: '/journal', destination: '/blog', permanent: true },
      ...RETIRED_BLOG_POSTS.map((slug) => ({ source: `/blog/${slug}`, destination: '/blog', permanent: true })),
    ];
  },
};

export default nextConfig;
