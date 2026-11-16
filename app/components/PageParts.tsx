import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { breadcrumbSchema, faqSchema, type Crumb, type Faq } from '@/lib/seo';

/** Renders one JSON-LD block. Pass schema.org nodes (without @context). */
export function StructuredData({ nodes }: { nodes: object[] }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <StructuredData nodes={[breadcrumbSchema(crumbs)]} />
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500">
          {crumbs.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3 h-3" />}
              {i === crumbs.length - 1 ? (
                <span className="text-slate-300">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-cyan-400 transition">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function PageHeader({ eyebrow, title, lead, cta }: { eyebrow: string; title: string; lead: string; cta?: { href: string; label: string } }) {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      <div className="max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">{eyebrow}</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4 leading-tight">{title}</h1>
        <p className="text-slate-400 text-lg leading-relaxed">{lead}</p>
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-6 py-3.5 rounded-xl transition shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            {cta.label} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </header>
  );
}

export function FaqSection({ faqs, title = 'Frequently asked questions' }: { faqs: Faq[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <StructuredData nodes={[faqSchema(faqs)]} />
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4">
            <summary className="cursor-pointer font-semibold text-slate-100 list-none flex justify-between gap-4">
              {f.q}
              <span className="text-cyan-400 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title = 'Have a part to mould?', text = 'Send your 3D CAD (STEP) file or drawing for a moldability review and tooling quote.' }: { title?: string; text?: string }) {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-20">
      <div className="p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-slate-400 text-sm mb-6">{text}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl transition">
            Request a Quote
          </Link>
          <Link href="/tools/instant-quote" className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold px-8 py-3.5 rounded-xl border border-slate-700 transition">
            Instant Estimate from STL
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5 text-sm text-slate-300">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
