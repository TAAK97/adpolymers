import Link from 'next/link';
import { Phone, MessageCircle, FileUp } from 'lucide-react';
import { SITE, waLink } from '@/lib/site';

/** Bottom bar on phones and tablets: call, WhatsApp or request a quote in one tap. */
export default function MobileActionBar() {
  const item = 'flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold';
  return (
    <nav aria-label="Quick contact" className="lg:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-slate-800 bg-slate-950/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <a href={SITE.phoneHref} className={`${item} text-slate-200`}>
        <Phone className="w-5 h-5 text-cyan-400" /> Call
      </a>
      <a href={waLink()} rel="nofollow" className={`${item} text-slate-200`}>
        <MessageCircle className="w-5 h-5 text-emerald-400" /> WhatsApp
      </a>
      <Link href="/contact" className={`${item} bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950`}>
        <FileUp className="w-5 h-5" /> Get a Quote
      </Link>
    </nav>
  );
}
