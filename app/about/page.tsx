import Link from 'next/link';
import { Factory, Package, Users, MapPin } from 'lucide-react';
import { AUTHORS, personSchema } from '@/lib/authors';
import { INDUSTRIES } from '@/lib/catalog';
import { pageMeta } from '@/lib/seo';
import { ORG_ID, SITE } from '@/lib/site';
import { Breadcrumbs, CtaBand, PageHeader, StructuredData } from '../components/PageParts';

export const metadata = pageMeta({
  title: 'About AD Polymers – Injection Moulding in Parwanoo Since 2009',
  description: `AD Polymers started in ${SITE.founded} in Parwanoo, Himachal Pradesh with one injection moulding machine. Today: ${SITE.machines} machines, in-house tooling and our own corrugated box unit, supplying Maruti Suzuki, Aquaguard and Ozone supply chains.`,
  path: '/about',
});

export default function AboutPage() {
  const facts = [
    { icon: MapPin, label: 'Location', value: `${SITE.city}, ${SITE.state}` },
    { icon: Factory, label: 'Moulding machines', value: `${SITE.machines} injection moulding machines` },
    { icon: Package, label: 'Packaging', value: 'Own corrugated box unit' },
    { icon: Users, label: 'Since', value: SITE.founded },
  ];
  return (
    <main>
      <StructuredData
        nodes={[
          { '@type': 'AboutPage', url: `${SITE.url}/about`, name: 'About AD Polymers', mainEntity: { '@id': ORG_ID } },
          ...AUTHORS.map(personSchema),
        ]}
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <PageHeader
        eyebrow={`Since ${SITE.founded} · ${SITE.city}, Himachal Pradesh`}
        title="About AD Polymers"
        lead={`From a single injection moulding machine in ${SITE.founded} to a ${SITE.machines}-machine precision moulding plant with its own corrugated box unit — supplying small, high-tolerance plastic components to some of India's best-known OEM supply chains.`}
      />

      <section className="max-w-7xl mx-auto px-6 pb-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {facts.map((f) => (
          <div key={f.label} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <f.icon className="w-5 h-5 text-cyan-400 mb-3" />
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">{f.label}</p>
            <p className="text-lg font-bold text-white mt-1">{f.value}</p>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12 prose-ad">
        <h2>Our story</h2>
        <p>
          AD Polymers started in {SITE.founded} in {SITE.city}, Himachal Pradesh, with one injection moulding machine. We grew one machine at a time,
          on the strength of consistent quality and on-time delivery to demanding customers.
        </p>
        <p>
          Today we run {SITE.machines} injection moulding machines specialising in small precision parts ({SITE.shotRange} shot weight), an in-house
          toolroom for mould building and maintenance, and an attached corrugated box unit that makes custom boxes — so parts leave our plant
          protected, in packaging sized for them.
        </p>
        <h2>Who we supply</h2>
        <p>
          Our components go into automotive, water-filtration and architectural hardware products, including supply chains for{' '}
          {SITE.clients.join(', ')}. See the{' '}
          <Link href="/industries">industries we serve</Link>, our <Link href="/services">services</Link> and the{' '}
          <Link href="/materials">engineering plastics</Link> we mould.
        </p>
        <ul>
          {INDUSTRIES.map((i) => (
            <li key={i.slug}>
              <Link href={`/industries/${i.slug}`}>{i.h1}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Our team</h2>
        {AUTHORS.map((a) => (
          <div key={a.slug} id={a.slug} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 scroll-mt-28">
            <p className="text-lg font-bold text-white">{a.name}</p>
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">{a.role}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{a.bio}</p>
            <Link href="/blog" className="inline-block mt-4 text-cyan-400 text-xs font-bold font-mono">Articles by {a.name} &rarr;</Link>
          </div>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}
