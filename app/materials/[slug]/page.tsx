import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MATERIALS, findMaterial } from '@/lib/catalog';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, CheckList, CtaBand, FaqSection, PageHeader } from '../../components/PageParts';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return MATERIALS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = findMaterial((await params).slug);
  if (!m) return {};
  return pageMeta({ title: m.title, description: m.description, path: `/materials/${m.slug}` });
}

export default async function MaterialPage({ params }: Props) {
  const m = findMaterial((await params).slug);
  if (!m) notFound();
  const path = `/materials/${m.slug}`;
  const proc: [string, string][] = [
    ['Melt temperature', m.processing.melt],
    ['Mould temperature', m.processing.mould],
    ['Mould shrinkage', m.processing.shrinkage],
    ['Drying', m.processing.drying],
  ];
  return (
    <main>
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Materials', path: '/materials' }, { name: m.short, path }]} />
      <PageHeader eyebrow={m.category} title={m.title} lead={m.intro} cta={{ href: '/contact', label: `Quote ${m.short} Parts` }} />
      <section className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Key properties</h2>
          <CheckList items={m.properties} />
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Typical applications</h2>
          <CheckList items={m.applications} />
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Processing data</h2>
          <dl className="space-y-3 text-sm">
            {proc.map(([k, v]) => (
              <div key={k}><dt className="text-slate-500 text-xs uppercase tracking-wider">{k}</dt><dd className="text-slate-200">{v}</dd></div>
            ))}
          </dl>
          <p className="text-[11px] text-slate-500 mt-4">Typical ranges; follow the grade datasheet.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Other materials</h2>
        <div className="flex flex-wrap gap-2">
          {MATERIALS.filter((o) => o.slug !== m.slug).map((o) => (
            <Link key={o.slug} href={`/materials/${o.slug}`} className="text-xs font-mono px-3 py-1.5 rounded-md border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400">{o.short}</Link>
          ))}
          <Link href="/tools/instant-quote" className="text-xs font-mono px-3 py-1.5 rounded-md border border-cyan-500/30 text-cyan-400">Estimate a {m.short} part &rarr;</Link>
        </div>
      </section>
      <FaqSection faqs={m.faqs} />
      <CtaBand />
    </main>
  );
}
