import Link from 'next/link';
import { ArrowRight, Layers, ShieldCheck, Zap, Box, Calculator } from 'lucide-react';
import { INDUSTRIES, MATERIALS, SERVICES } from '@/lib/catalog';
import { pageMeta, type Faq } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { FaqSection } from './components/PageParts';
import HeroPart from './components/HeroPart';
import ProcessTimeline from './components/ProcessTimeline';
import FactoryGallery from './components/FactoryGallery';

export const metadata = pageMeta({
  title: 'Plastic Injection Moulding Manufacturer in Parwanoo, Himachal Pradesh | AD Polymers',
  description:
    'Precision small-part plastic injection moulding in Parwanoo, HP since 2009: glass-filled nylon, POM, PC & SAN parts, insert moulding and in-house tooling for Maruti Suzuki, Aquaguard & Ozone supply chains.',
  path: '/',
  absoluteTitle: true,
});

const faqs: Faq[] = [
  { q: 'What does AD Polymers manufacture?', a: `AD Polymers manufactures precision small plastic components (${SITE.shotRange} shot weight) by injection moulding — clips, fasteners, bushings, filter housings, fittings and insert-moulded parts in engineering plastics such as PA66-GF, POM, PC, ABS, PP and SAN.` },
  { q: 'Where is AD Polymers located?', a: `Our moulding plant and toolroom are in ${SITE.city}, ${SITE.state}, India, alongside our own corrugated box unit for custom packaging. We supply OEMs and tier suppliers across India.` },
  { q: 'Which industries do you supply?', a: 'Automotive (Maruti Suzuki supply chains), water filtration (Aquaguard), architectural hardware (Ozone), electrical components and consumer products.' },
  { q: 'How do I get a quote for injection moulded parts?', a: 'Upload your STEP/CAD file on our Request a Quote page, or try the free Instant Quote tool with an STL file for an immediate estimate of part weight, machine tonnage and indicative price.' },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* Hero: message left, live 3D part right */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/25 to-cyan-400/20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid bg-radial-mask opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/90 border border-cyan-500/30 rounded-full mb-6 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
                Parwanoo, HP &bull; Since {SITE.founded} &bull; Tier-1 Supplier
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
              Precision Small-Part{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]">
                Injection Moulding.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Engineering-grade plastic components, insert moulding and in-house tooling, made in {SITE.city} for India&apos;s leading automotive, water-filtration and hardware OEMs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.4)] transition flex items-center justify-center gap-2"
              >
                Upload CAD &amp; Request Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/tools/instant-quote"
                className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-8 py-4 rounded-xl border border-slate-700/80 transition text-center"
              >
                Instant Estimate (STL)
              </Link>
            </div>
          </div>

          <div className="max-w-md w-full mx-auto lg:max-w-none">
            <HeroPart />
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-b border-slate-800/80 bg-slate-900/30">
        <dl className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6">
          {[
            { k: 'In business since', v: SITE.founded },
            { k: 'Injection moulding machines', v: String(SITE.machines) },
            { k: 'Part size range', v: SITE.shotRange },
            { k: 'Mould building', v: 'In-house toolroom' },
            { k: 'Packaging', v: 'Own box unit' },
          ].map((f) => (
            <div key={f.k} className="text-center md:text-left md:border-l md:border-slate-800 md:pl-6 md:first:border-l-0 md:first:pl-0">
              <dd className="text-2xl sm:text-3xl font-black text-white">{f.v}</dd>
              <dt className="mt-1 text-xs font-mono uppercase tracking-widest text-slate-400">{f.k}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* OEM Client Trust Banner */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-mono font-bold uppercase tracking-widest text-slate-300 mb-10">
            Contracted & Tier-1 Manufacturing Partner For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition">
              <div className="text-xl font-black text-white tracking-wider mb-1">MARUTI SUZUKI</div>
              <p className="text-sm text-cyan-400 font-mono mb-2">Automotive Components</p>
              <p className="text-sm text-slate-300 leading-relaxed">Under-hood wire harness enclosures, structural clips, and high-tolerance interior trim fasteners.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition">
              <div className="text-xl font-black text-white tracking-wider mb-1">AQUAGUARD</div>
              <p className="text-sm text-cyan-400 font-mono mb-2">Water Filtration Systems</p>
              <p className="text-sm text-slate-300 leading-relaxed">Pressure-tested food-grade filter cartridges, fluid connectors, and clear SAN resin housings.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition">
              <div className="text-xl font-black text-white tracking-wider mb-1">OZONE</div>
              <p className="text-sm text-cyan-400 font-mono mb-2">Architectural Hardware</p>
              <p className="text-sm text-slate-300 leading-relaxed">High-durability POM acetal wear bushings, glass fittings, and heavy-duty polymer accessories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">Core Capabilities</span>
          <h2 className="text-3xl font-bold text-white mt-2">Built for Strict Tolerances</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="reveal p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Rapid Tooling</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              In-house CNC and EDM steel mould fabrication ensuring quick turnaround from 3D CAD design to production-ready tooling.
            </p>
          </div>

          <div className="reveal p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Insert Moulding</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Direct encapsulation of brass inserts, threaded fasteners, and electrical terminals with high bonding strength.
            </p>
          </div>

          <div className="reveal p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ISO Quality Testing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automated optical inspection, burst pressure testing for fluidics, and CMM dimensional reporting.
            </p>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <FactoryGallery />

      {/* Instant Quote tools band */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-10 md:p-14">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-cyan-500/20 blur-[120px] pointer-events-none" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">New · Free Engineering Tools</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4 max-w-2xl">Upload your 3D part. Get an instant estimate.</h2>
          <p className="text-slate-400 max-w-2xl mb-8">Drop an STL file to see part weight, the machine tonnage it needs, cycle time and an indicative unit price in seconds. Your CAD never leaves your device.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tools/instant-quote" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black px-7 py-3.5 rounded-xl">
              <Box className="w-5 h-5" /> Try Instant Quote
            </Link>
            <Link href="/tools/clamping-force-calculator" className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-700 text-slate-200 font-bold px-7 py-3.5 rounded-xl">
              <Calculator className="w-5 h-5" /> Tonnage Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links: services, industries, materials */}
      <section className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-3 gap-8">
        {[
          { title: 'Services', base: '/services', items: SERVICES.map((x) => ({ slug: x.slug, name: x.name })) },
          { title: 'Industries', base: '/industries', items: INDUSTRIES.map((x) => ({ slug: x.slug, name: `${x.name} components` })) },
          { title: 'Materials', base: '/materials', items: MATERIALS.map((x) => ({ slug: x.slug, name: `${x.short} injection moulding` })) },
        ].map((col) => (
          <div key={col.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              <Link href={col.base} className="hover:text-cyan-400">{col.title}</Link>
            </h2>
            <ul className="space-y-2 text-sm">
              {col.items.map((it) => (
                <li key={it.slug}><Link href={`${col.base}/${it.slug}`} className="text-slate-400 hover:text-cyan-400 transition">{it.name}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <FaqSection faqs={faqs} />
    </main>
  );
}