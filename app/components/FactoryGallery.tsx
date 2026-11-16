import { GALLERY } from '@/lib/gallery';

/** "From our shop floor" photo grid — renders nothing until lib/gallery.ts lists photos. */
export default function FactoryGallery() {
  if (!GALLERY.length) return null;
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">From our shop floor</span>
        <h2 className="text-3xl font-bold text-white mt-2">Inside AD Polymers, Parwanoo</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY.map((g, i) => (
          <figure key={g.src} className={`relative overflow-hidden rounded-2xl border border-slate-800 ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
            <figcaption className="absolute bottom-0 inset-x-0 p-3 text-xs font-mono text-slate-200 bg-gradient-to-t from-slate-950/90 to-transparent">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
