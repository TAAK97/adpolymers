# Weekly blog playbook

Instructions for the weekly blog task (and for anyone writing a post by hand).
The goal is one genuinely useful article a week for engineers and buyers of moulded plastic parts —
never filler. Nothing is published until a person merges the pull request.

## Steps
1. Read `content/blog-plan.md` and take the FIRST unchecked topic. Read `content/blog/` so the new post
   does not repeat or contradict an existing one.
2. Research it on the web. Open the pages you take facts from — prefer resin makers' datasheets and guides
   (BASF, Celanese, DuPont, Covestro, SABIC), Autodesk Moldflow material pages, standards bodies and
   recognised engineering references. Every number in the article must come from a page you opened.
3. Write `content/blog/<slug>.md` (lowercase, hyphens, built from the main keyword) using the front matter below.
4. Tick the topic in `content/blog-plan.md` and append `→ \`<slug>\`` to its line.
5. Commit on a new branch `blog/<slug>`, push, and open a pull request titled `Blog: <title>`. In the PR
   description list: the main keyword, a 3-line summary, the sources, and anything the reviewer should check
   or add from shop-floor experience.

## Front matter
```
---
title: "…"                 # 50–65 characters, main keyword near the start
date: "YYYY-MM-DD"         # publish date (today)
category: "Material Selection" | "Design" | "Process" | "Cost & Buying" | "Quality"
author: "harish-kumar"
excerpt: "…"               # 1–2 sentences shown on the blog index
metaDescription: "…"       # 140–155 characters
keywords: ["…", "…"]
faqs:                      # 2–4 real questions a buyer would type into Google
  - q: "…"
    a: "…"
---
```

## Writing rules
- Open with a bold **Short answer:** paragraph that answers the title in 2–3 sentences.
- 900–1,500 words. `##` sections, short paragraphs, plain English for Indian OEM buyers and engineers.
- Use a table when comparing options, a numbered checklist for decisions or steps.
- Give ranges with units (°C, %, mm, MPa), say they are typical, and point to the exact grade datasheet.
- Link 2–4 site pages from the topic line (e.g. `/materials/acetal-pom`, `/tools/instant-quote`).
- End with a short section on how AD Polymers can help (Parwanoo, Himachal Pradesh; small precision parts
  0.5–250 g; insert moulding; in-house tooling; own corrugated box unit), then `## Sources` listing every page used.
- Never invent customers, projects, test results, certifications or numbers about AD Polymers. Real clients
  that may be named: Maruti Suzuki, Aquaguard, Ozone supply chains.
- No keyword stuffing, no "In today's fast-paced world" openings, no fluff conclusions.
- Use British/Indian spelling: moulding, mould, colour.

## Checks before opening the PR
- Front matter parses (quotes around strings containing colons).
- Every link to the site points to a page that exists (see `lib/catalog.ts` for slugs).
- The article reads as written by an experienced moulding engineer, not as a template.
