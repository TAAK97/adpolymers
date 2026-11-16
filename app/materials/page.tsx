import Link from 'next/link';
import { Beaker } from 'lucide-react';
import { MATERIALS } from '@/lib/catalog';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, CtaBand, PageHeader } from '../components/PageParts';

export const metadata = pageMeta({
  title: 'Engineering Plastics for Injection Moulding – PA66, PC, POM, ABS, PP, SAN',
  description: 'Compare the engineering polymers we mould: glass-filled nylon PA6/PA66, polycarbonate, POM acetal, ABS, polypropylene and SAN — properties, uses and processing data.',
  path: '/materials',
});

export default function MaterialsPage() {
  return (
    <main>
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Materials', path: '/materials' }]} />
      <PageHeader
        eyebrow="Resin Specifications"
        title="Engineering Polymers We Mould"
        lead="We process virgin engineering resins with custom additives including glass fibre, UV stabilisers and flame retardants. Choose a material for properties, applications and processing data."
      />
      <section className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-3 gap-6">
        {MATERIALS.map((m) => (
          <Link key={m.slug} href={`/materials/${m.slug}`} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/20 rounded-md">{m.category}</span>
                <Beaker className="w-4 h-4 text-slate-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">{m.name}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{m.applications.slice(0, 3).join(', ')}.</p>
            </div>
            <span className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-cyan-400 font-mono">Properties &amp; processing data &rarr;</span>
          </Link>
        ))}
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-16 overflow-x-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Processing comparison</h2>
        <table className="w-full min-w-[640px] text-left text-sm border-collapse">
          <thead><tr className="text-slate-200 border-b border-slate-700"><th className="py-3 pr-4">Material</th><th className="py-3 pr-4">Melt temp</th><th className="py-3 pr-4">Mould temp</th><th className="py-3 pr-4">Shrinkage</th><th className="py-3">Drying</th></tr></thead>
          <tbody className="text-slate-400">
            {MATERIALS.map((m) => (
              <tr key={m.slug} className="border-b border-slate-800">
                <td className="py-3 pr-4"><Link href={`/materials/${m.slug}`} className="text-slate-200 hover:text-cyan-400">{m.short}</Link></td>
                <td className="py-3 pr-4">{m.processing.melt}</td><td className="py-3 pr-4">{m.processing.mould}</td>
                <td className="py-3 pr-4">{m.processing.shrinkage}</td><td className="py-3">{m.processing.drying}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-3">Typical ranges — always follow the resin supplier’s datasheet for the specific grade.</p>
      </section>
      <CtaBand />
    </main>
  );
}
