# DESIGN.md — Josa Elegado

**Status:** replacement visual world, adopted 2026-07-28. Supersedes the collage /
scrapbook system (tape, polaroids, torn edges, rotation, wear levels, fake grain).
Migration is section-by-section; legacy tokens stay aliased until each section lands.

---

## THESIS

The notebook is the interface, not a picture inside it. This site refuses the
personal-brand landing page (portrait, tagline, logo wall) and the digital-garden
wiki. It is one continuous ruled page on which ideas are worked out in public —
so the paper, the margin, and the ink *are* the chrome. Nothing depicts a
notebook; the page already is one.

## OWN-WORLD

**Material.** Warm white paper `#FAF8F4`, ruled with horizontal hairlines at a
1.75rem pitch at ~5% ink — legible only on close inspection. One faint plum
vertical margin rule at the content edge (≥1024px), defining the column where
annotations live. Surfaces that sit *on* the paper are lighter, never beige,
never kraft. No noise overlays, no grain, no distress, no torn edges, no
rotation, no tape. Elevation is a single warm down-and-right shadow set; things
rest, nothing floats.

**Ink.** Graphite `#22242A` for text. Deep plum `#5C2E6B` is signature and rare:
one primary action, links, diagram strokes, annotation ink, nav hover. Soft
lavender `#B9A5CE` is non-text only — secondary connectors, highlight washes.
Everything else is neutral. If plum is doing more than one job in a viewport,
remove one.

**Type — four faces, four jobs.**
- **Bodoni Moda** — headings, and statements short enough to take in at a
  glance (one or two lines, ≥20px). Never a paragraph: a seven-line block of
  Bodoni is elegant and tiring, so lead paragraphs stay in the reading face and
  get their emphasis from size. A didone chosen for construction, not fashion —
  Bodoni built letters mathematically, which is the right ancestor for an
  engineer's page. Optical sizing on.
- **Libre Franklin** — body and interface. Franklin Gothic lineage: the American
  editorial and technical-drawing workhorse. Confident, invisible.
- **Fragment Mono** — the page's own voice: title-block fields, dates, stage
  labels, figure numbers, page marks. Measurement and metadata only, never a
  costume for "technical."
- **Kalam** — the hand. Margin annotations, sketch labels, crossed-out thoughts.
  Never body copy, never navigation, never more than ~12 words, at most one or
  two per viewport.

**Notation, not doodles.** Diagrams are engineering notation drawn directly on
the page — no frame, no card, no drop shadow. Squares for stages, thin plum
arrows, mono labels, dimension brackets where the drawing needs to state what a
span means, one revision mark or crossed-out word where the thinking actually
changed. Geometry carries deliberate hand imperfection **authored into the path
coordinates** (corners overshoot, verticals lean a fraction). Never an SVG
turbulence/displacement filter — simulated roughness is the fake-distress this
world rejects.

A drawing wider than about 1.6:1 cannot hold legible labels on a phone. Those
get **two authored variants**, horizontal and vertical, swapped by media query —
never one drawing scaled down until its type disappears, and never a horizontal
scroll.

**Title block.** Engineering-drawing furniture: a hairline row of labeled mono
fields opening a page or a case. This is the system's kicker; it replaces the
tracked uppercase eyebrow stacked over every section.

**Tipped-in sheet.** The one licensed exception to "drawn straight on the page":
a document that genuinely came from somewhere else — a case-file excerpt, a
printed page. Paper-raised, one hairline, one low shadow. Never rotated, never
taped, never used for a diagram.

## NOTEBOOK BEHAVIOURS

These carry information; none is ornament. A margin note explains the specific
paragraph beside it (it is a grid sibling, so it stays on its paragraph's row
rather than drifting on absolute coordinates). A revision shows what the
thinking used to be. A box marks the one sentence a passage turns on. A
cross-reference — `see fig. 02`, `revisit later`, `still unresolved` — points
somewhere real. Metadata stamps state kind, date, place, condition; the middot
separator trails its field so a wrapped line never opens with an orphan.

**Placement is authored.** If one of these lands anywhere a different one would
have done just as well, it is decoration and comes out.

## STRUCTURE

Every section answers exactly one question, and the question is visible. A
section answering two gets split; a section answering none gets deleted, not
polished. No two consecutive sections share a format or a density: an editorial
passage, a ledger of rows, a dominant figure, a tipped-in case file, a staggered
spread, a dated index, a quiet handwritten close. Card grids are not a page
structure here.

**Photographs are never load-bearing.** No layout reserves a box for an image
that does not exist. A photo slot renders nothing until there is a photograph;
the caption carries the meaning either way.

**Nothing is invented.** No figures, dates, capacities, counts, or outcomes
appear unless Josa has supplied them. Where data is pending, the page says so in
a cross-reference rather than showing a plausible number.

## STORY

A visitor understands within one viewport: this person works on getting ideas
adopted, documents the process rigorously, and has done real fieldwork. They
believe it because the page *shows* the thinking (a real framework, a real
revision mark) rather than claiming depth. They read on, or go to the story.

## FIRST VIEWPORT (home)

Title block across the content width. Left 7 of 12: the thesis set large in
Bodoni across two lines, "adopted" in plum; a lede at 48ch; one plum button plus
one plain link. Right 5 of 12: the concept-to-adoption framework drawn on the
paper, five stages down a spine with plum arrows, plus the
Technology + People + Policy = Adoption line beneath. One handwritten margin
annotation with a tiny arrow. Primary action sits directly under the lede, left
column.

## MOTION

One verb: *drawing*. A pen makes a mark — an underline pulled under a word, an
arrow drawn from one box to the next, a note appearing, a correction struck
through. The opening figure draws on load; figures further down draw when you
reach them, armed by JS so that without JS they simply render complete.

**Nothing fades in because it scrolled into view.** Prose is never hidden from a
reader, and one identical entrance on every section is a tic, not a design.
Nothing loops, bounces, or parallaxes. `prefers-reduced-motion` renders the
finished state instantly.

Sequenced SVG marks are interleaved siblings — arrows on the odd paths, heads on
the even ones. Count them as separate sequences and the later delays silently
drop to zero, which looks like a working animation and is not one.

## PHOTOGRAPHY

Real photographs only, supplied by Josa: solar sites, farms, whiteboards,
prototypes, desks, field work. Hands, backs, and objects over faces. Presented
at their own proportions with a mono caption underneath — no frame-as-ornament,
no rotation, no wash. **The page must be complete and beautiful with every
photograph removed;** any layout that collapses without imagery is wrong.

## RESPONSIVE

Notebook *principles*, never notebook *proportions*. No two-page spread, no
book-fold, no page-turn. Mobile is the same paper, same rules, same ink, one
column. The margin rule and margin annotations drop below 1024px rather than
being crushed into the gutter.

## ACCESSIBILITY FLOOR

Text ≥4.5:1 on paper (graphite 14.5:1, ink-soft 6.7:1, ink-faint 4.7:1, plum
9.6:1). Lavender never carries text. Every diagram has a real `<title>` and
`role="img"`. Focus is a 2px plum ring, offset 3px.
