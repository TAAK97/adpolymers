import Link from 'next/link';
import { ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';
import { INDUSTRIES } from '@/lib/catalog';
import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4 md:col-span-1">
          {/* Option 2 Logo - Matching Navbar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className="text-lg font-black text-white tracking-wider flex items-center gap-1">
              AD <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">POLYMERS</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            High-precision injection moulding, insert tooling, and engineering plastics for leading Indian automotive and water purification OEMs.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-md border border-cyan-500/20">
            <ShieldCheck className="w-4 h-4" /> ISO Quality Compliant
          </div>
        </div>

        <div>
          <p className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Navigation</p>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/services" className="hover:text-cyan-400 transition">Services & Capabilities</Link></li>
            <li><Link href="/materials" className="hover:text-cyan-400 transition">Engineering Polymers</Link></li>
            <li><Link href="/projects" className="hover:text-cyan-400 transition">Projects & Case Studies</Link></li>
            <li><Link href="/tools/instant-quote" className="hover:text-cyan-400 transition">Instant Quote (STL)</Link></li>
            <li><Link href="/tools/clamping-force-calculator" className="hover:text-cyan-400 transition">Tonnage Calculator</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-400 transition">Technical Journal</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Industries</p>
          <ul className="space-y-2.5 text-xs">
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="hover:text-cyan-400 transition">
                  {i.client ? <><span className="text-slate-300">{i.client}</span> — {i.name}</> : i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Manufacturing Unit</p>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <a href={SITE.mapsUrl} rel="noopener" className="hover:text-cyan-400 transition">{SITE.state}, India<br /><span className="text-cyan-400">View on Google Maps</span></a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-cyan-400 transition">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={SITE.phoneHref} className="hover:text-cyan-400 transition">{SITE.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900 py-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} AD Polymers. All Rights Reserved. Est. {SITE.founded}. Precision Small-Part Moulding Division.
        </div>
      </div>
    </footer>
  );
}