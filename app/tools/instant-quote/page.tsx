import Link from 'next/link';
import { pageMeta, webAppSchema, type Faq } from '@/lib/seo';
import { Breadcrumbs, FaqSection, PageHeader, StructuredData } from '../../components/PageParts';
import InstantQuote from '../../components/InstantQuote';

const DESC = 'Free instant injection moulding quote: upload an STL to get part weight, clamping tonnage, cycle time, indicative unit price & mould cost. AD Polymers, India.';

export const metadata = pageMeta({
  title: 'Instant Injection Moulding Cost Estimator (Upload STL)',
  description: DESC,
  path: '/tools/instant-quote',
});

const faqs: Faq[] = [
  { q: 'How accurate is the instant injection moulding estimate?', a: 'It is an indicative range based on your part’s volume, projected area, material and wall thickness. Final pricing depends on tolerances, finish, inserts, mould design and volume, so every estimate is confirmed with a formal quotation after drawing review.' },
  { q: 'Is my 3D file uploaded to your server?', a: 'No. The STL file is read and analysed inside your browser and never leaves your device. Only the summary numbers are sent to us when you request your price estimate.' },
  { q: 'Can I use STEP or IGES files?', a: 'The instant estimator reads STL, which every CAD program can export. For STEP, IGES or 2D drawings, use our Request a Quote form — it accepts any CAD format.' },
  { q: 'How is the clamping tonnage calculated?', a: 'Tonnage = projected area of the part × number of cavities × a clamping factor for the material, plus a safety margin. Our clamping force calculator explains the formula in detail.' },
];

export default function InstantQuotePage() {
  return (
    <main>
      <StructuredData nodes={[webAppSchema('Instant Injection Moulding Cost Estimator', DESC, '/tools/instant-quote')]} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools' }, { name: 'Instant Quote', path: '/tools/instant-quote' }]} />
      <PageHeader
        eyebrow="Free Tool"
        title="Instant Injection Moulding Cost Estimator"
        lead="Upload your 3D part (STL) to instantly see its weight, the machine tonnage it needs, cycle time, an indicative unit price and tooling cost. Your file is processed in your browser and never uploaded."
      />
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <InstantQuote />
      </section>
      <section className="max-w-4xl mx-auto px-6 pt-12 text-slate-400 text-sm leading-relaxed space-y-4">
        <h2 className="text-2xl font-bold text-white">How the estimate works</h2>
        <p>We read the triangle mesh of your STL file to calculate the part’s volume and its projected area in the mould-opening direction. Volume × material density gives part weight. Projected area × cavities × the material’s clamping factor gives the clamping force, which decides the machine size. Cooling time scales with the square of wall thickness, which drives cycle time and output per hour. Material cost, machine-hour rate and cycle time together give the indicative unit price.</p>
        <p>Want to check tonnage by hand? Use the <Link className="text-cyan-400 hover:underline" href="/tools/clamping-force-calculator">clamping force calculator</Link> or compare resins in our <Link className="text-cyan-400 hover:underline" href="/materials">materials guide</Link>.</p>
      </section>
      <FaqSection faqs={faqs} />
    </main>
  );
}
