// Single source of truth for company details. Keep name / address / phone identical
// on Google Business Profile, IndiaMART, JustDial etc. (NAP consistency = local SEO).
export const SITE = {
  name: 'AD Polymers',
  url: 'https://www.adpolymers.in',
  tagline: 'Precision Small-Part Injection Moulding',
  founded: '2009',
  city: 'Parwanoo',
  state: 'Himachal Pradesh',
  country: 'IN',
  mapsUrl: 'https://maps.app.goo.gl/RCUiEoTmuPRRo6c17',
  phone: '+91 92185 34113',
  phoneHref: 'tel:+919218534113',
  whatsapp: '919218534113',
  email: 'info@adpolymers.in',
  shotRange: '0.5 g – 250 g',
  machines: 5,
  clients: ['Maruti Suzuki', 'Aquaguard', 'Ozone'],
} as const;

/** "Baddi, Himachal Pradesh" when a city is set, otherwise "Himachal Pradesh". */
export const LOCATION = SITE.city ? `${SITE.city}, ${SITE.state}` : SITE.state;

export const ORG_ID = `${SITE.url}/#organization`;

export function waLink(text = 'Hello AD Polymers, I would like a quote for moulded parts.') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
