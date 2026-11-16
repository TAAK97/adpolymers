import Link from 'next/link';
import { Cpu, Cog, Layers, Wrench, Boxes, FlaskConical, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/lib/catalog';
import { pageMeta, serviceSchema } from '@/lib/seo';
import { Breadcrumbs, CtaBand, PageHeader, StructuredData } from '../components/PageParts';

const ICONS = {
  'plastic-injection-moulding': Cpu,
  'insert-moulding': Layers,
  overmoulding: Boxes,
  'tooling-and-mould-design': Wrench,
  'rapid-prototyping': FlaskConical,
  'secondary-operations': Cog,
} as const;

export const metadata = pageMeta({
  title: 'Injection Moulding Services – Insert Moulding, Tooling & Assembly',
  description: 'Custom plastic injection moulding, insert moulding, overmoulding, in-house mould tooling, rapid prototyping and assembly for OEMs. AD Polymers, Himachal Pradesh.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <main>
      <StructuredData nodes={SERVICES.map((s) => serviceSchema(s.name, s.description, `/services/${s.slug}`))} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />
      <PageHeader
        eyebrow="Capabilities"
        title="Injection Moulding Services"
        lead="From rapid prototype sampling to high-volume production runs for automotive, water-filtration and hardware tier-1 supply chains."
      />
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.slug as keyof typeof ICONS] ?? Cpu;
          return (
            <Link key={s.slug} href={`/services/${s.slug}`} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition group block">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">{s.name}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.intro}</p>
              <ul className="space-y-2 border-t border-slate-800/80 pt-6">
                {s.points.slice(0, 3).map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <span className="inline-block mt-6 text-cyan-400 text-xs font-bold font-mono">Learn more &rarr;</span>
            </Link>
          );
        })}
      </section>
      <CtaBand />
    </main>
  );
}
