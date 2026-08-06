import { ShieldCheck, Beaker } from 'lucide-react';

export default function MaterialsPage() {
  const materials = [
    { name: 'Nylon PA6 / PA66 (Glass-Filled)', category: 'Engineering Polymer', application: 'Automotive under-hood brackets, wire harness clips, mechanical gears.' },
    { name: 'Polycarbonate (PC)', category: 'Optical & Impact Grade', application: 'High-impact housings, transparent window plates, electrical enclosures.' },
    { name: 'POM Acetal (Delrin)', category: 'High-Wear Polymer', application: 'Ozone door hardware bushings, low-friction sliders, precision gears.' },
    { name: 'ABS (Acrylonitrile Butadiene Styrene)', category: 'Structural Grade', application: 'Automotive interior trim, dashboard components, consumer housings.' },
    { name: 'Polypropylene (PP)', category: 'Chemical Resistant', application: 'Aquaguard water filter caps, fluidic valves, living-hinge components.' },
    { name: 'SAN / Food-Grade Acrylic', category: 'Clear Fluidic Grade', application: 'Food-safe water purification filter bowls, clear viewing chambers.' },
  ];

  return (
    <main className="py-20 max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">Resin Specifications</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">Engineering Polymers</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          We process a wide range of virgin engineering resins with custom additives including glass fiber, UV stabilizers, and flame retardants.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {materials.map((mat, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/20 rounded-md">
                  {mat.category}
                </span>
                <Beaker className="w-4 h-4 text-slate-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{mat.name}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{mat.application}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Quality Tested Batch
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}