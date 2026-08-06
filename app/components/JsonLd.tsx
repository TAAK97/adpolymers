export default function JsonLd() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ManufacturingBusiness',
      name: 'AD Polymers',
      image: 'https://www.adpolymers.in/logo.png',
      '@id': 'https://www.adpolymers.in/#organization',
      url: 'https://www.adpolymers.in',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
      knowsAbout: [
        'Plastic Injection Moulding',
        'Insert Moulding',
        'Overmoulding',
        'Rapid Prototyping',
        'Tooling and Mould Design',
        'Polycarbonate Processing',
        'ABS Injection Moulding',
      ],
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }