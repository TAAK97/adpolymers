import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { INDUSTRIES } from '@/lib/catalog';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, CtaBand, PageHeader } from '../components/PageParts';

export const metadata = pageMeta({
  title: 'Industries & OEM Partners – Automotive, Water Filtration, Hardware',
  description: 'Injection moulded plastic components for Maruti Suzuki automotive supply chains, Aquaguard water filtration, Ozone architectural hardware, electrical and consumer OEMs.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <main>
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }]} />
      <PageHeader
        eyebrow="Industries & OEM Partners"
        title="Industries We Supply"
        lead="Trusted tier-1 manufacturer of precision plastic components for automotive, water-treatment, architectural hardware, electrical and consumer product leaders."
      />
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-8">
        {INDUSTRIES.map((ind) => (
          <Link key={ind.slug} href={`/industries/${ind.slug}`} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition grid md:grid-cols-3 gap-6 items-center group">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">{ind.name}</span>
              <h2 className="text-3xl font-black text-white mt-1 group-hover:text-cyan-400 transition">{ind.client ?? ind.h1}</h2>
              <p className="text-xs text-slate-400 mt-2">{ind.parts.slice(0, 3).join(', ')}.</p>
            </div>
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Materials:</strong> {ind.materials.join(', ')}.</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Quality control:</strong> {ind.quality.join(' · ')}.</span>
              </div>
              <span className="inline-block text-cyan-400 text-xs font-bold font-mono">View {ind.name.toLowerCase()} capabilities &rarr;</span>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}
