---
title: "Glass-Filled Nylon Warpage: Why Parts Warp and How to Prevent It"
date: "2026-11-23"
category: "Design"
author: "harish-kumar"
excerpt: "Glass-filled nylon shrinks less along the fibres than across them, and that difference is behind most warped PA6-GF and PA66-GF parts. Here is how design, gating, mould temperature and packing keep them flat."
metaDescription: "Why glass-filled nylon warps: fibre orientation and uneven shrinkage. Practical fixes in part design, gating, mould temperature, packing and grade."
keywords: ["glass filled nylon warpage", "PA66 GF30 warpage", "fibre orientation shrinkage", "nylon injection moulding warpage", "how to reduce warpage"]
faqs:
  - q: "Why does glass-filled nylon warp more than unfilled nylon?"
    a: "Glass fibres line up with the melt flow and stop the plastic shrinking along their length, so the part shrinks much less in the flow direction than across it. That uneven shrinkage bends the part. Unfilled nylon shrinks more evenly in all directions."
  - q: "Can I fix a warped glass-filled nylon part by changing machine settings?"
    a: "Sometimes partly. Better packing and a uniform mould temperature reduce warpage, but they do not change which way the fibres point. If the warpage comes from fibre orientation, the lasting fixes are gate location, wall thickness and rib design, or a lower-warp grade."
  - q: "Does longer cooling time stop glass-filled parts warping?"
    a: "Usually not by much. Once the part is stiff enough to eject cleanly, extra cooling time does little for fibre-orientation warpage. Very short cooling, where the part is still hot at ejection, does make warpage worse."
  - q: "What mould temperature should glass-filled PA66 run at?"
    a: "Resin makers typically recommend a warm mould for reinforced nylon, for example 80–90 °C for BASF Ultramid A3WG8 and a preferred 100 °C in DuPont's Zytel guide. Always use the range on the datasheet for your exact grade."
---

**Short answer:** glass-filled nylon warps because the fibres line up with the melt flow and stop the part shrinking along them, while it still shrinks freely across them. A PA66 with 40% glass can shrink roughly three times more across the flow than along it. You prevent warpage mainly at the design and tooling stage — uniform walls, careful ribs and a gate that controls fibre direction — and then hold it with a uniform, warm mould and good packing.

Glass-filled PA6 and PA66 are the workhorses for brackets, clips, housings and covers that need stiffness and heat resistance. They are also the materials we most often see come back from a first trial bowed, twisted or with corners that close in. The causes are well understood, and most of them can be designed out before steel is cut.

## Why glass fibres make nylon warp

Unfilled nylon shrinks fairly evenly in every direction. Add short glass fibres and that changes. The fibres do not shrink as the plastic cools, so the part shrinks much less in the direction the fibres point — which is the direction the melt flowed.

BASF's datasheet for Ultramid A3WG8, a PA66 with 40% glass, shows how big the difference can be:

| Property (PA66-GF40, typical) | Along flow | Across flow |
| --- | --- | --- |
| Moulding shrinkage (ISO 294-4) | 0.35% | 1.02% |
| Thermal expansion, 23–55 °C | 23 × 10⁻⁶/K | 86 × 10⁻⁶/K |

*Typical values for one grade; check the datasheet of the grade you are using.*

Older design literature quotes cross-flow shrinkage as about 50% greater than in-flow shrinkage for fibre-reinforced nylon. The exact ratio depends on grade, glass content and wall thickness, but the direction is always the same: **less shrinkage along the fibres, more across them.** When one area of a part has fibres running one way and another area has them running another, the two areas shrink by different amounts and the part bends.

Three other effects add to this:

- **Uneven wall thickness.** Thick areas cool more slowly and shrink more than thin ones. Thick corners can pull walls inwards.
- **Uneven mould temperature.** If one half of the mould runs hotter than the other, the hot side shrinks more and the part bows towards it.
- **Packing.** Areas near the gate are packed harder and shrink less than areas at the end of flow.

## Wall thickness also controls fibre direction

Fibre orientation is not just about flow direction — it depends heavily on thickness. In an experiment described in *Plastics Today*, an end-gated part 1.27 mm thick had 90% of its fibres aligned with the flow; at 6.35 mm, only 5% were. Thin walls are therefore the most strongly anisotropic, and the same article suggests about 3.2 mm (0.125 in) as a good minimum wall for fibre-reinforced parts where the design allows it.

## Design rules that prevent warpage

1. **Keep walls uniform.** DuPont's design guide states plainly that non-uniform wall thickness can cause serious warpage. Core out thick sections and use gradual transitions where thickness must change.
2. **Radius the corners.** An outside radius keeps the wall thickness constant around a corner, and sharp corners also break fibres and disturb flow.
3. **Be careful with ribs.** Ribs stiffen a part, but in fibre-filled materials they also create a strongly oriented layer along the rib edge that can bow the part. DuPont warns that ribs added "as an extra factor of safety" often produce warpage — leave off ribs you are not sure you need.
4. **Allow enough draft.** DuPont gives ¼–½° for reinforced nylon in shallow draws under 25 mm, and ½–1° for deeper draws. Parts that stick and distort on ejection warp more.
5. **Decide the gate location with the designer, not after.** The gate sets the fibre pattern (see below).
6. **Prove it in a steel tool.** A machined prototype will not show fibre-orientation warpage. A pre-production steel tool with production-style cooling will.

## Gate location: the biggest single lever

Machine settings have limited effect on which way the fibres point. Autodesk Moldflow lists three ways to influence orientation: moulding conditions, gate location or type (end gate, fan gate or multiple gates) and part thickness. Solvay's warpage guide for its glass-filled Ixef compounds goes further, saying that injection speed and mould and melt temperature do not contribute significantly to fibre orientation — the filling pattern does.

Practical points for glass-filled nylon:

- **Gate into the thickest section** so it can be packed properly, as DuPont recommends.
- **Consider end-gating long parts.** Many moulders prefer to gate fibre-filled parts at one end so the fibres run predictably along the length.
- **Size the gate generously.** DuPont's Zytel moulding guide allows gate thickness up to 75% of the wall for reinforced nylon, against 50% for unfilled.
- **Keep weld lines out of loaded areas.** A weld line in fibre-reinforced nylon may have only about 60% of the material's tensile strength.

A flow and warpage simulation before the tool is built is the cheapest way to compare gate options.

## Processing: keeping a good design flat

Processing cannot fully fix a poor fibre pattern, but it can make warpage much better or worse.

**Dry the material.** BASF recommends pre-drying Ultramid A3WG8 at 80 °C for 4 hours. Wet nylon gives splay and inconsistent parts.

**Run a warm, uniform mould.** Typical recommendations for reinforced PA66 are 80–90 °C (BASF A3WG8) and a range of 70–120 °C with 100 °C preferred (DuPont Zytel guide). Just as important is uniformity: DuPont suggests keeping the difference between coolant in and out ideally below 5 °C, and controlling cores and slides on separate circuits where possible.

**Melt temperature.** BASF gives 280–300 °C for A3WG8, with 290 °C recommended.

**Fill fast.** DuPont recommends fast injection, typically 1–3 s, for glass-reinforced nylon, especially in thin sections.

**Pack well and evenly.** Packing does not change fibre direction, but it lowers overall shrinkage, which reduces the stress the fibres fight against. Solvay describes better packing — pressure, time, gate size — as one of the most efficient ways to reduce warpage in fibre-filled crystalline materials. Moldflow likewise lists packing profiles and reducing thickness variation as the main levers on differential shrinkage.

**Don't rely on cooling time.** Extra cooling time does little once ejection is clean; very short cooling with a hot part at ejection makes warpage worse.

## A quick diagnosis on the shop floor

Before changing the tool, find out what kind of warpage you have:

1. **Mould a part that is almost full with no packing.** If it is already warped the same way, fibre orientation is the main cause — look at gate location and design.
2. **Then add packing.** If warpage drops but keeps its shape, keep optimising pressure and time.
3. **Check ejection.** Spray release agent and mould a few parts. If warpage improves, sticking during ejection is part of the problem — look at draft and polish.
4. **Measure mould surface temperatures** on both halves. A hot core or cavity side bends the part towards it.

## When to change the material

If the part cannot be redesigned, a different grade may solve the problem. BASF lists glass-bead and mineral-filled Ultramid grades as "low warpage" options. They are generally less stiff than high-glass-fibre grades, so check the load case first. Remember too that freshly moulded nylon is dry and absorbs moisture afterwards; in the fibre direction glass-filled grades grow less than 0.1% per 1% of absorbed water, against 0.2–0.3% for unfilled grades, but final dimensions should be checked on conditioned parts.

## How AD Polymers can help

AD Polymers moulds small precision parts from 0.5 to 250 g in glass-filled PA6 and PA66, POM and other engineering plastics at our plant in Parwanoo, Himachal Pradesh. Because our tooling is designed in-house, gate position, wall thickness and cooling are decided together with the part design rather than fixed afterwards. See our [nylon PA6/PA66 material page](/materials/nylon-pa6), read about our [tooling and mould design](/services/tooling-and-mould-design) service, get a first estimate from the [Instant Quote tool](/tools/instant-quote), or [send us your drawing](/contact) for a design-for-moulding review.

## Sources

- [Ultramid A3WG8 BK20560 product information](https://download.basf.com/p1/8a8082587fd4b608017fd647fc533aa2/en/Ultramid%25C2%25AE_A3WG8_BLACK_20560) — BASF
- [Ultramid (PA) product brochure](https://www.basf.com/cn/documents/en/chinaplas/Ultramid_brochure.pdf) — BASF
- [Zytel and Minlon Molding Guide](https://dupont.materialdatacenter.com/links/processing/Zytel.pdf) — DuPont
- [General Design Principles for DuPont Engineering Polymers](https://academic.sun.ac.za/mad/catalogs/dfmguidelines/dupontgeneraldesignprinciples.pdf) — DuPont
- [Ixef PARA: Design and Processing for Lowest Warpage](https://www.solvay.com/sites/g/files/srpend221/files/2018-07/Ixef-PARA-Design-and-Processing-for-Lowest-Warpage.pdf) — Solvay
- [By Design: Designing with nylon, Part 3](https://www.plasticstoday.com/plastics-processing/by-design-designing-with-nylon-part-3) — Plastics Today
- [Reducing warpage due to differential shrinkage](https://help.autodesk.com/cloudhelp/2017/ENU/MoldflowComm-UsersGuide/files/GUID-60968C3D-3F9E-442D-9123-C8285D50F1F7.htm) — Autodesk Moldflow
- [Warpage indicator, orientation effects result](https://help.autodesk.com/cloudhelp/2015/ENU/MoldflowComm/files/GUID-488DBDA4-ADCA-4A7D-885F-3C41FA8D5776.htm) — Autodesk Moldflow
- [Injection Molding: The Causes of Warpage](https://ptonline.com/articles/injection-molding-the-causes-of-warpage) — Plastics Technology
