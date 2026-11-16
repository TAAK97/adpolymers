import { ORG_ID, SITE } from '@/lib/site';

// Site-wide Organization / LocalBusiness + WebSite schema (rendered in the root layout).
export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': ORG_ID,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/logo.png`,
        image: `${SITE.url}/og-image.png`,
        description:
          'AD Polymers is a precision small-part plastic injection moulding manufacturer in Himachal Pradesh, India, supplying engineering plastic components, insert moulding and tooling to automotive, water-filtration and hardware OEMs.',
        foundingDate: SITE.founded,
        telephone: SITE.phone,
        email: SITE.email,
        hasMap: SITE.mapsUrl,
        address: {
          '@type': 'PostalAddress',
          ...(SITE.city ? { addressLocality: SITE.city } : {}),
          addressRegion: SITE.state,
          addressCountry: SITE.country,
        },
        areaServed: [{ '@type': 'Country', name: 'India' }, 'Worldwide'],
        knowsAbout: [
          'Plastic injection moulding',
          'Insert moulding',
          'Overmoulding',
          'Injection mould design and tooling',
          'Glass-filled nylon PA66 moulding',
          'POM acetal moulding',
          'Polycarbonate moulding',
          'SAN food-grade moulding',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.phone,
          email: SITE.email,
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: 'en-IN',
        publisher: { '@id': ORG_ID },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
