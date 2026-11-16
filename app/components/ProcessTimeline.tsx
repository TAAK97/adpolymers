import { FileUp, SearchCheck, Wrench, PackageCheck, Factory, Truck } from 'lucide-react';

const STEPS = [
  { icon: FileUp, title: 'Share your part', text: 'STEP file, drawing or sample, with material, colour and annual quantity.' },
  { icon: SearchCheck, title: 'DFM review & quote', text: 'We check wall thickness, draft and gating, and send a detailed quotation.' },
  { icon: Wrench, title: 'Mould build', text: 'Our in-house toolroom builds the mould, or trials your existing tool.' },
  { icon: PackageCheck, title: 'Sample approval', text: 'First samples with a dimensional report, corrected until approved.' },
  { icon: Factory, title: 'Production', text: 'Series moulding with in-process checks on every batch.' },
  { icon: Truck, title: 'Packed & dispatched', text: 'Packed in boxes from our own unit and shipped across India.' },
];

export default function ProcessTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">How we work</span>
        <h2 className="text-3xl font-bold text-white mt-2">From drawing to dispatch, under one roof</h2>
      </div>
      <div className="relative">
      <div aria-hidden className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0" />
      <ol className="relative grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {STEPS.map((s, i) => (
          <li key={s.title} className="reveal relative text-center lg:px-1">
            <div className="mx-auto w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <s.icon className="w-5 h-5" />
            </div>
            <p className="mt-4 text-[11px] font-mono text-slate-500">STEP {i + 1}</p>
            <h3 className="mt-1 font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
