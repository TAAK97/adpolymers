import Link from 'next/link';
import { pageMeta, webAppSchema, type Faq } from '@/lib/seo';
import { EST } from '@/lib/estimator';
import { Breadcrumbs, FaqSection, PageHeader, StructuredData } from '../../components/PageParts';
import TonnageCalculator from '../../components/TonnageCalculator';

const DESC = 'Free clamping force calculator for injection moulding. Enter projected area, material and cavities to get the tonnage and machine size you need.';

export const metadata = pageMeta({
  title: 'Injection Moulding Tonnage Calculator – Clamping Force',
  description: DESC,
  path: '/tools/clamping-force-calculator',
});

const faqs: Faq[] = [
  { q: 'How do you calculate clamping force for injection moulding?', a: 'Clamping force (tonnes) = projected area of the part (cm²) × number of cavities × clamping factor of the material (tonnes per cm²). Add a 10–25% safety margin, then choose the next standard machine size above the result.' },
  { q: 'What is projected area in injection moulding?', a: 'Projected area is the area of the part’s shadow seen from the direction the mould opens, including the runner system. Injection pressure acts on this area and tries to push the mould open.' },
  { q: 'What happens if the clamping force is too low?', a: 'The mould halves separate slightly under injection pressure and plastic escapes at the parting line, causing flash. Excess tonnage wastes energy and can crush mould vents.' },
  { q: 'How many tonnes per square inch do I need?', a: 'Typical values range from about 2 to 5 tonnes per square inch (0.3–0.8 t/cm²) depending on material, wall thickness and flow length. Thin walls and stiff engineering plastics such as PC or glass-filled nylon need the higher end.' },
];

export default function TonnagePage() {
  return (
    <main>
      <StructuredData nodes={[webAppSchema('Injection Moulding Clamping Force Calculator', DESC, '/tools/clamping-force-calculator')]} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools' }, { name: 'Tonnage Calculator', path: '/tools/clamping-force-calculator' }]} />
      <PageHeader eyebrow="Free Tool" title="Injection Moulding Clamping Force (Tonnage) Calculator" lead="Calculate the clamping force your part needs and the injection moulding machine size to choose — by material, projected area and number of cavities." />
      <section className="max-w-7xl mx-auto px-6 pb-8"><TonnageCalculator /></section>
      <section className="max-w-4xl mx-auto px-6 pt-12 text-slate-400 text-sm leading-relaxed space-y-4">
        <h2 className="text-2xl font-bold text-white">Clamping force formula</h2>
        <p className="font-mono text-cyan-300 bg-slate-900/60 border border-slate-800 rounded-lg p-4">Clamping force (T) = Projected area (cm²) × Cavities × Material factor (T/cm²) × Safety factor</p>
        <p>Include the runner area for cold-runner moulds. For a rectangular part the projected area is simply length × width; for complex shapes, use the outline seen from the mould-opening direction — or let our <Link className="text-cyan-400 hover:underline" href="/tools/instant-quote">instant estimator</Link> calculate it from your STL file.</p>
        <h2 className="text-2xl font-bold text-white pt-4">Clamping factors by material</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead><tr className="text-slate-200 border-b border-slate-700"><th className="py-2 pr-4">Material</th><th className="py-2 pr-4">T/cm²</th><th className="py-2">T/in²</th></tr></thead>
            <tbody>
              {EST.materials.map((m) => (
                <tr key={m.id} className="border-b border-slate-800"><td className="py-2 pr-4 text-slate-300">{m.name}</td><td className="py-2 pr-4">{m.clamp.toFixed(2)}</td><td className="py-2">{(m.clamp * 6.4516).toFixed(1)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">Typical starting values; thin walls, long flow paths and high-gloss finishes may need more.</p>
      </section>
      <FaqSection faqs={faqs} />
    </main>
  );
}
