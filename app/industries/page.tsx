import { Factory, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function IndustriesPage() {
  return (
    <main className="py-20 max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">Client Portfolio</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">OEM Supply Partners</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Trusted tier-1 manufacturer supplying key components for automotive, water treatment, and architectural hardware leaders.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Automotive Tier-1</span>
            <h2 className="text-3xl font-black text-white mt-1">Maruti Suzuki</h2>
            <p className="text-xs text-slate-400 mt-2">Supplying high-tolerance interior fasteners, wire harness clips, and under-hood components.</p>
          </div>
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Component Focus:</strong> Nylon PA66 heat-stabilized clips, automotive trim rivets, and relay sockets.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Quality Control:</strong> Zero-defect POKA-YOKE inspection standards and batch traceability.</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Water Purification</span>
            <h2 className="text-3xl font-black text-white mt-1">Aquaguard</h2>
            <p className="text-xs text-slate-400 mt-2">Food-grade plastic fluidics, filter cartridges, and high-pressure connector elbows.</p>
          </div>
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Component Focus:</strong> Clear SAN resin filter bodies and Polypropylene quick-connect fittings.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Quality Control:</strong> 100% pneumatic pressure-burst testing to ensure leak-free operation.</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Architectural Hardware</span>
            <h2 className="text-3xl font-black text-white mt-1">Ozone</h2>
            <p className="text-xs text-slate-400 mt-2">Heavy-duty wear bushings, door fittings, and glass hardware accessories.</p>
          </div>
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Component Focus:</strong> POM Acetal self-lubricating sleeve bearings and structural polymer pads.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Quality Control:</strong> High cyclic load testing for long-term wear resistance.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}