import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { INDUSTRIES, SERVICES, findService } from '@/lib/catalog';
import { pageMeta, serviceSchema } from '@/lib/seo';
import { Breadcrumbs, CheckList, CtaBand, FaqSection, PageHeader, StructuredData } from '../../components/PageParts';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = findService((await params).slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.description, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const s = findService((await params).slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  return (
    <main>
      <StructuredData nodes={[serviceSchema(s.name, s.description, path)]} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: s.name, path }]} />
      <PageHeader eyebrow="Service" title={s.h1} lead={s.intro} cta={{ href: '/contact', label: 'Request a Quote' }} />
      <section className="max-w-7xl mx-auto px-6 pb-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-5">What we offer</h2>
            <CheckList items={s.points} />
          </div>
          {s.process && (
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-5">How a project runs</h2>
              <ol className="grid sm:grid-cols-2 gap-4">
                {s.process.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-slate-300">
                    <span className="w-7 h-7 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
        <aside className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Industries served</h2>
            <ul className="space-y-2 text-sm">
              {INDUSTRIES.map((i) => <li key={i.slug}><Link className="text-slate-300 hover:text-cyan-400" href={`/industries/${i.slug}`}>{i.name} components</Link></li>)}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Other services</h2>
            <ul className="space-y-2 text-sm">
              {SERVICES.filter((o) => o.slug !== s.slug).map((o) => <li key={o.slug}><Link className="text-slate-300 hover:text-cyan-400" href={`/services/${o.slug}`}>{o.name}</Link></li>)}
            </ul>
          </div>
        </aside>
      </section>
      <FaqSection faqs={s.faqs} />
      <CtaBand />
    </main>
  );
}
