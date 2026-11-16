import Link from 'next/link';
import { INDUSTRIES } from '@/lib/catalog';
import { getAllProjects } from '@/lib/projects';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { Breadcrumbs, CtaBand, PageHeader, StructuredData } from '../components/PageParts';
import ProjectCard from '../components/ProjectCard';

export const metadata = pageMeta({
  title: 'Injection Moulding Projects & Case Studies',
  description: 'Case studies of precision plastic components moulded by AD Polymers — automotive clips, water filter housings, POM hardware bushings and insert-moulded parts.',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <main>
      {projects.length > 0 && (
        <StructuredData
          nodes={[{
            '@type': 'ItemList',
            itemListElement: projects.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE.url}/projects/${p.slug}`, name: p.title })),
          }]}
        />
      )}
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }]} />
      <PageHeader eyebrow="Case Studies" title="Injection Moulding Projects" lead="A selection of precision plastic components we have developed and manufactured for OEM customers — the problem, our solution and the result." />
      <section className="max-w-7xl mx-auto px-6 pb-16 space-y-12">
        {projects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <p className="text-slate-300">New case studies are being added.</p>
            <p className="text-sm text-slate-500 mt-2">
              Meanwhile, see the parts we make for <Link className="text-cyan-400 hover:underline" href="/industries">our OEM partners</Link>.
            </p>
          </div>
        ) : (
          INDUSTRIES.map((ind) => {
            const list = projects.filter((p) => p.industry === ind.slug);
            if (!list.length) return null;
            return (
              <div key={ind.slug}>
                <h2 className="text-2xl font-bold text-white mb-6"><Link href={`/industries/${ind.slug}`} className="hover:text-cyan-400">{ind.name}</Link></h2>
                <div className="grid md:grid-cols-3 gap-6">{list.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
              </div>
            );
          })
        )}
      </section>
      <CtaBand />
    </main>
  );
}
