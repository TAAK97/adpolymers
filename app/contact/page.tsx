import RFQForm from '../components/RFQForm';
import { pageMeta } from '@/lib/seo';
import { SITE, waLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Request a Quote – Upload CAD for Injection Moulding',
  description: 'Request a quote for precision plastic injection moulded parts. Upload your STEP/CAD file or contact AD Polymers by phone, WhatsApp or email.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="sr-only">Request a Quote from AD Polymers</h1>
      <RFQForm />
      <div className="mx-auto max-w-4xl mt-8 grid sm:grid-cols-3 gap-4 text-sm">
        <a href={SITE.phoneHref} className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50">
          <span className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">Call</span>{SITE.phone}
        </a>
        <a href={waLink()} rel="nofollow" className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50">
          <span className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">WhatsApp</span>Chat with our team
        </a>
        <a href={SITE.mapsUrl} rel="noopener" className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50">
          <span className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">Factory</span>{SITE.city}, {SITE.state} · Directions &rarr;
        </a>
      </div>
    </main>
  );
}
