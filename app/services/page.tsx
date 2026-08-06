import Link from 'next/link';
import { Cpu, Cog, Layers, Wrench, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const capabilities = [
    {
      icon: Cpu,
      title: 'Custom Injection Moulding',
      desc: 'High-speed automated injection molding machines handling shot capacities from 0.5 grams up to 250 grams for precision small parts.',
      features: ['Automated robot arm extraction', 'Multi-cavity high volume molds', 'Strict cycle-time optimization']
    },
    {
      icon: Layers,
      title: 'Insert & Overmoulding',
      desc: 'Precision moulding around metal inserts, electrical terminals, and secondary polymers to produce composite functional components.',
      features: ['Threaded brass insert moulding', 'Terminal block encapsulation', 'TPE soft-touch overmoulding']
    },
    {
      icon: Wrench,
      title: 'In-House Mould Tooling',
      desc: 'Dedicated toolroom with CNC machining centers, EDM spark erosion, and surface grinders for mold maintenance and new mold builds.',
      features: ['P20, H13 & Hardened Steel Dies', 'Hot runner system integration', 'Rapid prototype tooling']
    },
    {
      icon: Cog,
      title: 'Secondary Operations',
      desc: 'Post-moulding assembly, ultrasonic plastic welding, pad printing, and custom packaging for ready-to-line OEM delivery.',
      features: ['Ultrasonic component welding', 'Automated leak & pressure testing', 'Custom kitting & barcoding']
    }
  ];

  return (
    <main className="py-20 max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">Capabilities</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">Manufacturing Services</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          From rapid prototype sampling to high-volume continuous production runs for automotive and industrial tier-1 supply chains.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              
              <ul className="space-y-2 border-t border-slate-800/80 pt-6">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-20 p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-2">Have a New Part Design?</h3>
        <p className="text-slate-400 text-sm mb-6">Send us your 3D CAD step files for a detailed moldability and tooling quote.</p>
        <Link href="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl transition">
          Submit STEP File
        </Link>
      </div>
    </main>
  );
}