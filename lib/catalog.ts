// Page content for /services/[slug], /industries/[slug] and /materials/[slug].
// Slugs match the URLs already submitted to Google Search Console — don't rename them.
import type { Faq } from './seo';

export type Service = {
  slug: string; name: string; title: string; description: string; h1: string;
  intro: string; points: string[]; process?: string[]; faqs: Faq[];
};

export const SERVICES: Service[] = [
  {
    slug: 'plastic-injection-moulding',
    name: 'Custom Plastic Injection Moulding',
    title: 'Custom Plastic Injection Moulding Manufacturer in Parwanoo, HP',
    description: 'Precision small-part plastic injection moulding (0.5–250 g) in engineering plastics — PA66-GF, PC, POM, ABS, PP, SAN. Tier-1 supplier to Indian OEMs since 2009.',
    h1: 'Custom Plastic Injection Moulding',
    intro: 'AD Polymers moulds high-tolerance small plastic components — from 0.5 g clips to 250 g housings — for automotive, water-filtration and hardware OEMs. We run multi-cavity tools on automated machines with robotic part extraction, so every batch is consistent from the first shot to the millionth.',
    points: [
      'Shot weights from 0.5 g to 250 g — specialists in small, tight-tolerance parts',
      'Engineering polymers: glass-filled PA6/PA66, PC, POM, ABS, PP, SAN and more',
      'Multi-cavity and family moulds for high-volume, low unit cost',
      'Robotic extraction and cycle-time optimisation on every job',
      'Colour matching with masterbatch to RAL, Pantone or your sample',
      'First-article inspection and dimensional reports before bulk release',
    ],
    process: ['Share drawing / STEP file', 'DFM review & quotation', 'Mould build or trial on your tool', 'Sample approval (PPAP-style reports on request)', 'Series production with in-process QC', 'Packing & dispatch across India'],
    faqs: [
      { q: 'What size of plastic parts does AD Polymers mould?', a: 'We specialise in small precision components with shot weights from about 0.5 g up to 250 g — clips, fasteners, bushings, connectors, caps, filter parts and small housings.' },
      { q: 'What do you need to quote an injection moulded part?', a: 'A 3D CAD file (STEP/IGES preferred) or 2D drawing, the material grade, colour, annual quantity and any critical tolerances. You can also try our free Instant Quote tool with an STL file for a first estimate.' },
      { q: 'Can you run production on my existing mould?', a: 'Yes. Share the mould dimensions, tonnage requirement and ejection details and we will confirm machine compatibility and run trial samples.' },
    ],
  },
  {
    slug: 'insert-moulding',
    name: 'Insert Moulding',
    title: 'Insert Moulding Services – Brass Inserts & Terminals | India',
    description: 'Insert moulding of brass threaded inserts, metal terminals and pins into engineering plastics. High pull-out strength, consistent positioning, OEM quality. AD Polymers, HP.',
    h1: 'Insert Moulding Services',
    intro: 'Insert moulding encapsulates a metal component — a threaded brass insert, an electrical terminal, a pin or a bushing — directly inside the plastic part during moulding. The result is a single, stronger component with no post-assembly step and excellent pull-out and torque strength.',
    points: [
      'Threaded brass inserts (M2–M8) moulded in, not heat-staked',
      'Electrical terminals, pins and bus bars encapsulated in PA66, PBT and PC',
      'Precise insert location with fixture-loaded tooling',
      'Pull-out and torque testing on sample lots',
      'Eliminates secondary press-fit or ultrasonic insertion steps',
    ],
    faqs: [
      { q: 'What is the difference between insert moulding and heat staking?', a: 'In insert moulding the metal part is placed in the mould and the plastic flows around it, locking it in completely. Heat staking presses an insert into an already-moulded hole. Insert moulding usually gives higher pull-out strength and removes a separate assembly step.' },
      { q: 'Which materials work best for insert moulding?', a: 'Glass-filled nylon (PA6/PA66-GF), PBT and PC are common because they hold inserts firmly and resist cracking around the metal. We advise on grade and knurl design during the DFM review.' },
    ],
  },
  {
    slug: 'overmoulding',
    name: 'Overmoulding',
    title: 'Overmoulding Services – TPE Soft-Touch & Two-Material Parts',
    description: 'Overmoulding of TPE soft-touch grips, seals and two-material plastic components on rigid PP, ABS, PC and PA substrates. Custom overmoulded parts from AD Polymers.',
    h1: 'Overmoulding Services',
    intro: 'Overmoulding moulds a second material over a first — typically a soft TPE over a rigid substrate — to add grip, sealing, vibration damping or a premium feel without adhesives or assembly.',
    points: [
      'TPE soft-touch grips and handles on PP, ABS, PC and PA substrates',
      'Integrated seals and gaskets for fluid and enclosure parts',
      'Material-compatibility guidance for strong chemical bonding',
      'Two-shot style results using substrate transfer tooling',
    ],
    faqs: [
      { q: 'Which plastics bond well in overmoulding?', a: 'Bond strength depends on chemical compatibility. TPE grades are formulated to bond to specific substrates such as PP, ABS, PC or nylon — we match the TPE grade to your substrate during development.' },
    ],
  },
  {
    slug: 'tooling-and-mould-design',
    name: 'Tooling & Mould Design',
    title: 'Injection Mould Design & Tooling – In-House Toolroom, Parwanoo',
    description: 'In-house injection mould design and toolroom: CNC, EDM, P20/H13 steel moulds, multi-cavity and hot-runner tools, mould maintenance. AD Polymers, Parwanoo, HP.',
    h1: 'Injection Mould Design & Tooling',
    intro: 'Our in-house toolroom designs, builds and maintains the moulds that run on our machines — so tooling, trials and corrections happen under one roof, and production starts sooner.',
    points: [
      'Design-for-manufacturing (DFM) review: draft, wall thickness, gates, ribs',
      'CNC machining, EDM spark erosion and surface grinding in-house',
      'P20, H13 and hardened steel moulds',
      'Single-cavity, multi-cavity, family and hot-runner tools',
      'T0/T1 trials with dimensional reports and corrections',
      'Preventive maintenance and refurbishment of customer moulds',
    ],
    faqs: [
      { q: 'How long does it take to build an injection mould?', a: 'Simple single-cavity tools typically take a few weeks; multi-cavity or hot-runner tools take longer. We confirm a firm timeline after the DFM review of your part.' },
      { q: 'Who owns the mould?', a: 'When you pay for tooling, the mould is your property. We store and maintain it at our facility for your production runs.' },
    ],
  },
  {
    slug: 'rapid-prototyping',
    name: 'Rapid Prototyping & Sampling',
    title: 'Rapid Prototype Tooling & Sample Moulding for Plastic Parts',
    description: 'Validate plastic parts before mass production: rapid prototype tooling, sample moulding in production-grade resin, material trials and pilot batches.',
    h1: 'Rapid Prototyping & Sample Moulding',
    intro: 'Test fit, function and finish in the real production material before you commit to full tooling. We build rapid prototype tools and mould sample lots and pilot batches for validation and customer approvals.',
    points: [
      'Rapid prototype tooling for early sample parts',
      'Samples in production-grade resins — not printed look-alikes',
      'Material and colour trials to compare grades',
      'Pilot batches for line trials and customer approval',
      'Dimensional inspection report with every sample submission',
    ],
    faqs: [
      { q: 'Why mould prototypes instead of 3D printing them?', a: '3D-printed parts cannot reproduce the strength, shrinkage and surface of a moulded part. Moulded samples in the actual resin give reliable fit, function and test results before you invest in production tooling.' },
    ],
  },
  {
    slug: 'secondary-operations',
    name: 'Assembly & Secondary Operations',
    title: 'Plastic Part Assembly, Ultrasonic Welding & Secondary Operations',
    description: 'Ready-to-line plastic components: ultrasonic welding, pad printing, leak and pressure testing, sub-assembly, kitting and barcoded packing for OEM supply.',
    h1: 'Assembly & Secondary Operations',
    intro: 'Reduce your vendor count and receive line-ready parts. We finish, test, assemble and pack moulded components to your specification.',
    points: [
      'Ultrasonic plastic welding',
      'Automated leak and pneumatic burst-pressure testing for fluid parts',
      'Pad printing, hot stamping and labelling',
      'Insert fitting and sub-assembly',
      'Custom kitting, barcoding and packing for OEM lines',
    ],
    faqs: [
      { q: 'Can you supply moulded parts as finished assemblies?', a: 'Yes. Tell us the assembly and test requirements and we will quote moulding, assembly and testing together.' },
    ],
  },
  {
    // TODO(owner): confirm ply options (3/5/7-ply), printing and minimum order, then add them to `points`.
    slug: 'custom-corrugated-boxes',
    name: 'Custom Corrugated Boxes',
    title: 'Custom Corrugated Box Manufacturer in Parwanoo, Himachal Pradesh',
    description: 'Custom-size corrugated boxes and cartons made in our own box unit in Parwanoo, HP — for packing moulded components and for other manufacturers in the region.',
    h1: 'Custom Corrugated Boxes & Packaging',
    intro: 'Alongside our moulding plant, AD Polymers runs its own corrugated box unit in Parwanoo. We make boxes to the exact size your parts need — so moulded components ship protected, and you deal with one supplier for parts and packaging.',
    points: [
      'Corrugated boxes and cartons made to your dimensions',
      'Packaging designed around the moulded parts we make for you',
      'Boxes supplied to other manufacturers in the Parwanoo–Baddi–Solan region',
      'One supplier and one invoice for parts and their packaging',
    ],
    faqs: [
      { q: 'Do you make corrugated boxes for other companies?', a: 'Yes. Our box unit in Parwanoo makes custom-size corrugated boxes for other manufacturers as well as for packing our own moulded parts. Share the box size and quantity for a quote.' },
      { q: 'Can you pack moulded parts in custom boxes?', a: 'Yes. Because the box unit is on site, we size and make the cartons for your parts and ship them packed, ready for your line or warehouse.' },
    ],
  },
];

export type Industry = {
  slug: string; name: string; title: string; description: string; h1: string;
  intro: string; client?: string; parts: string[]; materials: string[]; quality: string[]; faqs: Faq[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: 'automotive-plastic-components',
    name: 'Automotive',
    title: 'Automotive Plastic Components Manufacturer – Clips, Fasteners, Trims',
    description: 'Tier-1 supplier of injection moulded automotive plastic parts: PA66-GF clips, trim fasteners, wire harness clips, relay sockets and under-hood parts for Maruti Suzuki.',
    h1: 'Automotive Plastic Components',
    intro: 'We supply high-tolerance automotive plastic components to Maruti Suzuki supply chains — interior trim fasteners, wire harness clips and under-hood parts in heat-stabilised, glass-filled nylon and other engineering grades.',
    client: 'Maruti Suzuki',
    parts: ['Trim clips and rivets', 'Wire harness clips and holders', 'Relay and fuse sockets', 'Under-hood brackets and covers', 'Insert-moulded threaded parts', 'Interior fasteners and retainers'],
    materials: ['PA66 30% GF (heat-stabilised)', 'PA6', 'POM', 'PP', 'ABS', 'PBT'],
    quality: ['POKA-YOKE zero-defect inspection', 'Batch traceability', 'Dimensional reports on every lot', 'Scheduled deliveries to OEM line plans'],
    faqs: [
      { q: 'Do you mould glass-filled nylon automotive clips?', a: 'Yes — PA66 30% glass-filled, heat-stabilised clips and fasteners are one of our core products for automotive supply chains.' },
      { q: 'Can you supply tier-1 and tier-2 automotive suppliers?', a: 'Yes. We work to OEM quality documentation and inspection requirements and can supply directly to tier suppliers.' },
    ],
  },
  {
    slug: 'water-filtration-components',
    name: 'Water Filtration',
    title: 'Water Purifier & Filter Housing Plastic Parts Manufacturer',
    description: 'Food-grade injection moulded water filtration components: clear SAN filter housings, PP quick-connect fittings, elbows and cartridge parts with 100% burst-pressure testing.',
    h1: 'Water Filtration Plastic Components',
    intro: 'For Aquaguard water purification systems we mould food-grade fluidic components — clear filter bowls, cartridge parts and quick-connect fittings — and pressure-test them for leak-free performance.',
    client: 'Aquaguard',
    parts: ['Clear filter housings and bowls', 'Filter cartridge end caps', 'Quick-connect fittings and elbows', 'Valve and connector bodies', 'Viewing chambers'],
    materials: ['SAN (food-grade, clear)', 'PP', 'ABS', 'POM'],
    quality: ['100% pneumatic burst-pressure testing', 'Food-grade virgin resins', 'Leak-tight sealing surfaces', 'Clean handling and packing'],
    faqs: [
      { q: 'Are your water purifier parts made from food-grade plastic?', a: 'Yes. Fluid-contact parts are moulded in food-grade virgin resins such as SAN and PP, with supplier material certificates available.' },
      { q: 'How do you check filter housings for leaks?', a: 'Housings and fluid parts are pneumatically pressure and burst tested to confirm leak-free performance before dispatch.' },
    ],
  },
  {
    slug: 'architectural-hardware-components',
    name: 'Architectural Hardware',
    title: 'POM Bushings & Plastic Parts for Architectural Hardware',
    description: 'Injection moulded POM acetal bushings, sleeve bearings, glass-fitting pads and door hardware components for architectural hardware brands such as Ozone.',
    h1: 'Architectural Hardware Plastic Components',
    intro: 'Door and glass hardware needs plastic parts that survive years of cyclic loads. For Ozone architectural hardware we mould self-lubricating POM bushings, sleeve bearings and polymer pads with high dimensional stability.',
    client: 'Ozone',
    parts: ['POM sleeve bearings and bushings', 'Glass fitting pads and gaskets', 'Door closer and hinge components', 'Sliding system rollers and guides', 'Polymer spacers and washers'],
    materials: ['POM (acetal)', 'PA6 / PA66', 'PP', 'TPE'],
    quality: ['High cyclic-load wear testing', 'Tight bore and OD tolerances', 'Low-friction, dimensionally stable grades'],
    faqs: [
      { q: 'Why is POM used for hardware bushings?', a: 'POM (acetal) has low friction, high stiffness and excellent dimensional stability, so bushings and sliders run smoothly for many cycles without lubrication.' },
    ],
  },
  {
    slug: 'electronics-enclosures',
    name: 'Electrical & Electronics',
    title: 'Electrical & Electronic Plastic Enclosures and Components',
    description: 'Injection moulded electrical plastic parts: small enclosures, connector housings, terminal blocks and insert-moulded terminals in PC, FR-ABS, PBT and PA66.',
    h1: 'Electrical & Electronic Plastic Components',
    intro: 'Small electrical parts need tight dimensions for snap-fits and terminals, clean surfaces and the right flame-retardant grade. We mould enclosures, connector bodies and insert-moulded terminal parts.',
    parts: ['Small enclosures and covers', 'Connector and terminal housings', 'Terminal blocks with insert-moulded contacts', 'Switch and socket parts', 'LED and sensor housings'],
    materials: ['PC / PC-FR', 'ABS / ABS-FR', 'PBT (glass-filled)', 'PA66'],
    quality: ['Flame-retardant grades as specified', 'Snap-fit and terminal tolerances verified', 'Insert pull-out testing'],
    faqs: [
      { q: 'Can you mould flame-retardant (UL94 V-0) plastic parts?', a: 'Yes, we mould flame-retardant grades of PC, ABS, PBT and nylon as specified. Certification comes from the raw material supplier for the chosen grade.' },
    ],
  },
  {
    slug: 'consumer-goods',
    name: 'Consumer Goods',
    title: 'Consumer Product Plastic Parts – Contract Injection Moulding',
    description: 'Contract injection moulding of small consumer and household product parts: caps, knobs, appliance components and accessories, with finishing and packing.',
    h1: 'Consumer Product Plastic Parts',
    intro: 'Brands rely on us for small consumer and household product parts that need a good finish and consistent fit — moulded, finished and packed ready for assembly or retail.',
    parts: ['Caps, knobs and buttons', 'Appliance components', 'Accessories and clips', 'Personal care product parts', 'Toy and leisure components'],
    materials: ['PP', 'ABS', 'PC', 'SAN', 'TPE'],
    quality: ['Cosmetic surface inspection', 'Colour consistency checks', 'Retail-ready packing'],
    faqs: [
      { q: 'Do you offer contract manufacturing for consumer brands?', a: 'Yes. We mould parts to your design under your brand and can handle finishing, assembly and packing.' },
    ],
  },
];

export type Material = {
  slug: string; name: string; short: string; title: string; description: string; category: string;
  intro: string; properties: string[]; applications: string[];
  processing: { melt: string; mould: string; shrinkage: string; drying: string };
  faqs: Faq[];
};

export const MATERIALS: Material[] = [
  {
    slug: 'nylon-pa6',
    name: 'Nylon PA6 / PA66 (incl. Glass-Filled)', short: 'PA6 / PA66', category: 'Engineering Polymer',
    title: 'Nylon PA6 & PA66 Glass-Filled Injection Moulding',
    description: 'PA6 and PA66 nylon injection moulding, including 30% glass-filled heat-stabilised grades for automotive clips, brackets and insert-moulded parts.',
    intro: 'Nylon (polyamide) is the workhorse engineering plastic for strong, tough, heat-resistant parts. Adding 30% glass fibre (PA66-GF30) greatly increases stiffness and heat resistance — ideal for automotive clips, brackets and insert-moulded components.',
    properties: ['High strength and toughness', 'Good heat resistance (higher with glass fibre)', 'Excellent wear and fatigue resistance', 'Absorbs moisture — affects dimensions, must be dried before moulding'],
    applications: ['Automotive trim clips and fasteners', 'Wire harness clips', 'Brackets and under-hood parts', 'Gears and bushings', 'Insert-moulded threaded parts'],
    processing: { melt: 'PA6: 230–280 °C · PA66: 270–300 °C', mould: '70–95 °C', shrinkage: 'Unfilled 1.0–2.0 % · GF30 0.3–1.0 % (anisotropic)', drying: '80 °C for 2–4 h to below 0.2 % moisture' },
    faqs: [
      { q: 'What is the difference between PA6 and PA66?', a: 'PA66 has a higher melting point and slightly higher stiffness and heat resistance; PA6 is a little tougher and easier to process. Both are available glass-filled.' },
      { q: 'Why must nylon be dried before injection moulding?', a: 'Nylon absorbs moisture from the air. Moulding wet nylon causes splay marks and reduces strength through hydrolysis, so it is dried to below about 0.2 % moisture first.' },
    ],
  },
  {
    slug: 'polycarbonate-pc',
    name: 'Polycarbonate (PC)', short: 'PC', category: 'Optical & Impact Grade',
    title: 'Polycarbonate (PC) Injection Moulding – Clear & Impact Parts',
    description: 'Polycarbonate injection moulding for transparent, high-impact parts: housings, covers, lenses and electrical enclosures, including flame-retardant PC grades.',
    intro: 'Polycarbonate combines glass-like transparency with very high impact strength and good heat resistance, making it the go-to material for clear covers, housings and electrical enclosures.',
    properties: ['Very high impact strength', 'Transparent grades available', 'Good heat resistance and dimensional stability', 'Flame-retardant (FR) grades available'],
    applications: ['Electrical enclosures and covers', 'Transparent windows and lenses', 'Impact-resistant housings', 'LED and lighting parts'],
    processing: { melt: '280–320 °C', mould: '80–110 °C', shrinkage: '0.5–0.7 %', drying: '120 °C for 3–4 h to below 0.02 % moisture' },
    faqs: [
      { q: 'Is polycarbonate stronger than ABS?', a: 'PC has much higher impact strength and heat resistance than ABS and can be transparent; ABS is easier to process and lower in cost. PC-ABS blends sit in between.' },
    ],
  },
  {
    slug: 'acetal-pom',
    name: 'POM Acetal (Delrin)', short: 'POM', category: 'High-Wear Polymer',
    title: 'POM Acetal Injection Moulding – Bushings, Gears & Precision Parts',
    description: 'POM (acetal, Delrin-type) injection moulding for low-friction, dimensionally stable parts: bushings, sleeve bearings, gears, clips and sliders.',
    intro: 'POM (polyoxymethylene, also called acetal or Delrin-type) is a stiff, low-friction, dimensionally stable plastic — the first choice for moving parts such as bushings, gears, rollers and snap clips.',
    properties: ['Low friction and excellent wear resistance', 'High stiffness and dimensional stability', 'Low moisture absorption', 'Good fatigue and creep resistance'],
    applications: ['Sleeve bearings and bushings', 'Gears and rollers', 'Door and glass hardware parts', 'Precision clips and snap fits'],
    processing: { melt: '190–230 °C', mould: '60–100 °C', shrinkage: '1.8–2.5 %', drying: 'Usually not required; 80 °C for 2 h if moisture is present' },
    faqs: [
      { q: 'Is POM the same as Delrin?', a: 'Delrin is a trade name for POM homopolymer. POM is also available as copolymer grades; both are called acetal.' },
    ],
  },
  {
    slug: 'abs-injection-moulding',
    name: 'ABS', short: 'ABS', category: 'Structural Grade',
    title: 'ABS Injection Moulding – Housings, Trims & Consumer Parts',
    description: 'ABS plastic injection moulding for rigid housings, interior trims and consumer parts with a good surface finish. Flame-retardant ABS grades available.',
    intro: 'ABS (acrylonitrile butadiene styrene) is a rigid, tough plastic with an excellent surface finish that is easy to colour, paint and print — widely used for housings and visible parts.',
    properties: ['Good rigidity and impact strength', 'Excellent surface finish and colourability', 'Easy to paint, print and ultrasonic weld', 'FR grades available'],
    applications: ['Automotive interior trims', 'Appliance and electronics housings', 'Consumer product parts', 'Knobs and buttons'],
    processing: { melt: '220–260 °C', mould: '50–80 °C', shrinkage: '0.4–0.7 %', drying: '80 °C for 2–4 h' },
    faqs: [
      { q: 'When should I choose ABS over PP?', a: 'Choose ABS for rigid parts that need a good cosmetic finish, painting or printing. PP is better for chemical resistance, living hinges and lower cost.' },
    ],
  },
  {
    slug: 'polypropylene-pp',
    name: 'Polypropylene (PP)', short: 'PP', category: 'Chemical Resistant',
    title: 'Polypropylene (PP) Injection Moulding – Caps, Fittings & Hinges',
    description: 'Polypropylene injection moulding for chemical-resistant, food-grade parts: caps, fluid fittings, living hinges and filter components.',
    intro: 'Polypropylene is light, tough, chemically resistant and food-safe — the most economical choice for caps, fluid fittings, containers and living-hinge parts.',
    properties: ['Excellent chemical and moisture resistance', 'Food-grade grades available', 'Supports living hinges', 'Low density and cost'],
    applications: ['Water filter caps and quick-connect fittings', 'Fluidic valves', 'Living-hinge closures', 'Automotive and appliance parts'],
    processing: { melt: '200–250 °C', mould: '20–60 °C', shrinkage: '1.0–2.5 %', drying: 'Not normally required' },
    faqs: [
      { q: 'Is polypropylene food safe?', a: 'Food-contact grades of PP are widely used for food and water applications. We use food-grade virgin resin for such parts, with supplier certificates.' },
    ],
  },
  {
    slug: 'san-moulding',
    name: 'SAN (Styrene Acrylonitrile)', short: 'SAN', category: 'Clear Fluidic Grade',
    title: 'SAN Injection Moulding – Clear Food-Grade Filter Housings',
    description: 'SAN (styrene acrylonitrile) injection moulding for clear, rigid, food-grade parts such as water purifier filter bowls and viewing chambers.',
    intro: 'SAN is a clear, rigid, chemically resistant plastic used where transparency and food contact matter — such as water purifier filter bowls and viewing chambers.',
    properties: ['High clarity and gloss', 'Rigid with good chemical resistance', 'Food-contact grades available', 'Better heat and chemical resistance than GPPS'],
    applications: ['Water filter housings and bowls', 'Viewing chambers', 'Clear covers', 'Household containers'],
    processing: { melt: '200–260 °C', mould: '50–80 °C', shrinkage: '0.3–0.6 %', drying: '80 °C for 2–4 h' },
    faqs: [
      { q: 'Why is SAN used for water filter housings?', a: 'SAN is clear, rigid and food-safe, so users can see the filter while the housing withstands water pressure. Housings are pressure tested to confirm they are leak-free.' },
    ],
  },
];

export const findService = (s: string) => SERVICES.find((x) => x.slug === s);
export const findIndustry = (s: string) => INDUSTRIES.find((x) => x.slug === s);
export const findMaterial = (s: string) => MATERIALS.find((x) => x.slug === s);
