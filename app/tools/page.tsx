import Link from 'next/link';
import { Calculator, Box } from 'lucide-react';
import { pageMeta, webAppSchema } from '@/lib/seo';
import { Breadcrumbs, PageHeader, StructuredData } from '../components/PageParts';

const TOOLS = [
  { href: '/tools/instant-quote', icon: Box, name: 'Instant Quote Estimator', desc: 'Upload an STL file and get part weight, clamping tonnage, cycle time, an indicative unit price and tooling cost in seconds.' },
  { href: '/tools/clamping-force-calculator', icon: Calculator, name: 'Clamping Force (Tonnage) Calculator', desc: 'Work out the clamping force and machine size your moulded part needs, by material, projected area and cavities.' },
];

export const metadata = pageMeta({
  title: 'Free Injection Moulding Calculators & Cost Estimator',
  description: 'Free tools for plastic part designers and buyers: instant injection moulding cost estimate from an STL file and a clamping tonnage calculator.',
  path: '/tools',
});

export default function ToolsPage() {
  return (
    <main>
      <StructuredData nodes={TOOLS.map((t) => webAppSchema(t.name, t.desc, t.href))} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools' }]} />
      <PageHeader eyebrow="Free Engineering Tools" title="Injection Moulding Calculators" lead="Estimate part cost, machine size and clamping force before you send an RFQ — free, instant, and your CAD never leaves your device." />
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">
        {TOOLS.map((t) => (
          <Link key={t.href} href={t.href} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400"><t.icon className="w-6 h-6" /></div>
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">{t.name}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
            <span className="inline-block mt-6 text-cyan-400 text-xs font-bold font-mono">Open tool &rarr;</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
