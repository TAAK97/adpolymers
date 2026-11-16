import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { INDUSTRIES, findIndustry } from '@/lib/catalog';
import { getAllProjects } from '@/lib/projects';
import { pageMeta, serviceSchema } from '@/lib/seo';
import { Breadcrumbs, CheckList, CtaBand, FaqSection, PageHeader, StructuredData } from '../../components/PageParts';
import ProjectCard from '../../components/ProjectCard';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i = findIndustry((await params).slug);
  if (!i) return {};
  return pageMeta({ title: i.title, description: i.description, path: `/industries/${i.slug}` });
}

export default async function IndustryPage({ params }: Props) {
  const ind = findIndustry((await params).slug);
  if (!ind) notFound();
  const path = `/industries/${ind.slug}`;
  const projects = getAllProjects().filter((p) => p.industry === ind.slug);
  return (
    <main>
      <StructuredData nodes={[serviceSchema(`${ind.name} plastic injection moulding`, ind.description, path)]} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }, { name: ind.name, path }]} />
      <PageHeader eyebrow={ind.client ? `${ind.name} · Supplying ${ind.client}` : ind.name} title={ind.h1} lead={ind.intro} cta={{ href: '/contact', label: `Quote for ${ind.name} Parts` }} />
      <section className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Parts we manufacture</h2>
          <CheckList items={ind.parts} />
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Typical materials</h2>
          <CheckList items={ind.materials} />
          <Link href="/materials" className="inline-block mt-5 text-cyan-400 text-xs font-bold font-mono">Materials guide &rarr;</Link>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Quality control</h2>
          <CheckList items={ind.quality} />
        </div>
      </section>
      {projects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{ind.name} case studies</h2>
          <div className="grid md:grid-cols-3 gap-6">{projects.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
        </section>
      )}
      <FaqSection faqs={ind.faqs} />
      <CtaBand />
    </main>
  );
}
