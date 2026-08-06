import Link from 'next/link';
import { ArrowRight, Layers, ShieldCheck, Zap, Factory, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* High-Tech Dark Hero Section */}
      <section className="relative py-28 lg:py-36 overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/25 to-cyan-400/20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid bg-radial-mask opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/90 border border-cyan-500/30 rounded-full mb-6 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
                Himachal Pradesh, India &bull; Tier-1 Contract Supplier
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.1] text-white mb-6">
              Precision Small-Part <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]">
                Injection Moulding.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Engineering-grade thermoplastics, metal insert moulding, and rapid tooling. Supplying zero-defect components to India&apos;s leading automotive, filtration, and architectural OEMs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.4)] transition flex items-center justify-center gap-2"
              >
                Upload CAD & Request Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/industries" 
                className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-8 py-4 rounded-xl border border-slate-700/80 transition text-center"
              >
                View OEM Contract Partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Client Trust Banner */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-10">
            Contracted & Tier-1 Manufacturing Partner For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition">
              <div className="text-xl font-black text-white tracking-wider mb-1">MARUTI SUZUKI</div>
              <p className="text-xs text-cyan-400 font-mono mb-2">Automotive Components</p>
              <p className="text-xs text-slate-400">Under-hood wire harness enclosures, structural clips, and high-tolerance interior trim fasteners.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition">
              <div className="text-xl font-black text-white tracking-wider mb-1">AQUAGUARD</div>
              <p className="text-xs text-cyan-400 font-mono mb-2">Water Filtration Systems</p>
              <p className="text-xs text-slate-400">Pressure-tested food-grade filter cartridges, fluid connectors, and clear SAN resin housings.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition">
              <div className="text-xl font-black text-white tracking-wider mb-1">OZONE</div>
              <p className="text-xs text-cyan-400 font-mono mb-2">Architectural Hardware</p>
              <p className="text-xs text-slate-400">High-durability POM acetal wear bushings, glass fittings, and heavy-duty polymer accessories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">Core Capabilities</span>
          <h2 className="text-3xl font-bold text-white mt-2">Built for Strict Tolerances</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Rapid Tooling</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              In-house CNC and EDM steel mould fabrication ensuring quick turnaround from 3D CAD design to production-ready tooling.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Insert Moulding</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Direct encapsulation of brass inserts, threaded fasteners, and electrical terminals with high bonding strength.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ISO Quality Testing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automated optical inspection, burst pressure testing for fluidics, and CMM dimensional reporting.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}