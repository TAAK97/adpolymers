import Link from 'next/link';
import { findIndustry } from '@/lib/catalog';
import type { Project } from '@/lib/projects';

export default function ProjectCard({ p }: { p: Project }) {
  const img = p.images[0];
  return (
    <Link href={`/projects/${p.slug}`} className="rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition group block">
      <div className="aspect-[4/3] bg-slate-900 bg-tech-grid flex items-center justify-center">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs font-mono text-slate-600">Photo coming soon</span>
        )}
      </div>
      <div className="p-5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">{findIndustry(p.industry)?.name ?? p.industry}</span>
        <h3 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-400 transition">{p.title}</h3>
        <p className="text-xs text-slate-400 mt-1">{p.material}</p>
      </div>
    </Link>
  );
}
