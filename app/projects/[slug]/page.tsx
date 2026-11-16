import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findIndustry } from '@/lib/catalog';
import { markdownToHtml } from '@/lib/markdown';
import { getAllProjects, getProject } from '@/lib/projects';
import { pageMeta } from '@/lib/seo';
import { ORG_ID, SITE } from '@/lib/site';
import { Breadcrumbs, CtaBand, StructuredData } from '../../components/PageParts';
import ProjectCard from '../../components/ProjectCard';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return pageMeta({
    title: p.title,
    description: p.metaDescription,
    path: `/projects/${p.slug}`,
    type: 'article',
    images: p.images[0] ? [p.images[0].src] : undefined,
  });
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const ind = findIndustry(p.industry);
  const path = `/projects/${p.slug}`;
  const facts: [string, string][] = [
    ['Client', p.client], ['Material', p.material], ['Process', p.process],
    ['Part weight', p.partWeight], ['Volume', p.volume], ['Tolerance / spec', p.tolerance],
  ];
  const related = getAllProjects().filter((q) => q.slug !== p.slug && q.industry === p.industry).slice(0, 3);
  return (
    <main>
      <StructuredData
        nodes={[{
          '@type': 'Article',
          headline: p.title,
          description: p.metaDescription,
          datePublished: p.date,
          image: p.images.length ? p.images.map((i) => `${SITE.url}${i.src}`) : [`${SITE.url}/og-image.png`],
          author: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: `${SITE.url}${path}`,
          keywords: p.keywords.join(', '),
        }]}
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: p.title, path }]} />
      <article className="max-w-7xl mx-auto px-6 pt-8 pb-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">Case study · {ind?.name ?? p.industry}</span>
          <h1 className="text-4xl font-black text-white mt-2 mb-4 leading-tight">{p.title}</h1>
          <p className="text-lg text-slate-300 mb-8">{p.summary}</p>
          {p.images[0] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.images[0].src} alt={p.images[0].alt} className="rounded-2xl border border-slate-800 mb-8 w-full" />
          )}
          <div className="prose-ad" dangerouslySetInnerHTML={{ __html: markdownToHtml(p.content) }} />
          {p.images.length > 1 && (
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {p.images.slice(1).map((im) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={im.src} src={im.src} alt={im.alt} loading="lazy" className="rounded-xl border border-slate-800" />
              ))}
            </div>
          )}
        </div>
        <aside className="lg:sticky lg:top-24 self-start p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Project facts</h2>
          <dl className="space-y-3 text-sm">
            {ind && <div><dt className="text-slate-500 text-xs uppercase">Industry</dt><dd><Link className="text-cyan-400" href={`/industries/${ind.slug}`}>{ind.name}</Link></dd></div>}
            {facts.filter(([, v]) => v).map(([k, v]) => <div key={k}><dt className="text-slate-500 text-xs uppercase">{k}</dt><dd className="text-slate-200">{v}</dd></div>)}
          </dl>
          <Link href="/contact" className="mt-6 block text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold py-3 rounded-xl transition">Need a similar part?</Link>
        </aside>
      </article>
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related projects</h2>
          <div className="grid md:grid-cols-3 gap-6">{related.map((q) => <ProjectCard key={q.slug} p={q} />)}</div>
        </section>
      )}
      <CtaBand />
    </main>
  );
}
