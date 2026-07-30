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

**Type — five faces, five jobs.**
- **Bodoni Moda** — headings, and statements short enough to take in at a
  glance (one or two lines, ≥20px). Never a paragraph: a seven-line block of
  Bodoni is elegant and tiring, so lead paragraphs stay in the reading face and
  get their emphasis from size. A didone chosen for construction, not fashion —
  Bodoni built letters mathematically, which is the right ancestor for an
  engineer's page. Optical sizing on.
- **Fragment Mono** — everything else that is read: body copy, interface, and
  the page's own voice (title-block fields, dates, stage labels, figure
  numbers). Reading text and metadata share a face on purpose — the page reads
  as something typed into a log rather than published at you. They stay
  distinguishable by case, tracking and size: metadata is uppercase, tracked
  and smaller; prose is sentence case at the ruling pitch.

  **It ships one weight.** Nothing in this system may lean on `font-weight` for
  emphasis. `font-synthesis: none` is set on `body` so a stray `600` renders at
  its real weight instead of being smeared into a fake bold. Emphasis is plum
  ink; labels and buttons are uppercase with wide tracking. `<strong>` and
  `<b>` are plum at weight 400.

  It also sets about 28% wider than a proportional face, so every measure
  defined in `rem` was widened to compensate — reading columns land near 59
  characters on desktop and 38 on a phone. Measures written in `ch` need no
  adjustment; prefer `ch`.

  *Reverting:* `--font-sans` is a separate token from `--font-mono` precisely so
  body can go back to `--font-reading-fallback` (Libre Franklin) without
  touching metadata. The measures and the weight rules would need undoing too.
- **Kalam** — the everyday hand. Margin annotations, sketch labels, crossed-out
  thoughts, diagram notes. Small, plum, under about a dozen words. Never body
  copy, never navigation, never at display size — it is a marker hand with no
  stroke contrast and it falls apart when enlarged.
- **La Belle Aurore** — the pen, and the rarest thing on the site: **one line,
  on one page.** The second line of the homepage thesis is written and then
  underlined, so a printed statement gets a handwritten answer. A fine-nib hand
  written at speed — slanted, quick, personal. Not calligraphy: a formal
  pointed-pen script (Corinthia, Italianno) reads as an invitation card and
  fights the engineering register. Not a marker hand either (Kalam) — that has
  no stroke contrast and falls apart large.

  **It must never wrap.** A handwritten line that breaks over two lines stops
  looking written and starts looking like a text box. The sentence sets 9.31x
  its own font-size in this face, so the line is sized in container units
  against the heading block — `min(9.7cqw, 4.4rem)`, with `white-space: nowrap`
  and about 10% headroom for the fallback face during the font swap. It re-fits
  itself at every viewport rather than being tuned for one width. The `4.4rem`
  cap stops it outgrowing the serif when the block is wide.

  Size and leading come from measurement, never from eye. This pen's x-height
  is 45 against Bodoni's 48, so the two match optically at the same size — no
  correction needed. Its descender is two and a half times deeper, so the room
  goes into leading instead. **Any replacement pen must be re-measured:
  normalise on x-height, never on total ink height**, or every script measures
  the same and none of them look right. The multiplier and the `cqw` figure are
  both specific to this face.

  If a second use of the pen is ever proposed, it stops being handwriting and
  becomes a font. One line.

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

**Photographs are never load-bearing on a published page.** No published layout
reserves a box for an image that does not exist; the caption carries the meaning
either way. Templates are the deliberate exception — see the plate below.

## THE EDITORIAL SYSTEM

Three layers, each knowing only the one below it. Defined in `styles/blocks.css`,
catalogued at `patterns.html`, assembled end to end at `entry-template.html`.

**Entry types** — essay, photo essay, field note, project log, collection, case
study. Six editorial formats on one grid. A type sets two numbers, the reading
measure and the margin width, and the composition follows: an essay gets the
longest line and quiet margins, a photo essay a short line and wide ones so
pictures dominate by geometry rather than by exception. Everything else is
shared. Set `data-entry` on the article and the page re-tunes; nothing else
changes. Each type declares its own masthead fields, because a collection has a
span and a project log has a phase and neither has a duration.

**Blocks** — observation, evidence + reflection, before/after, screenshot
insight, gallery strip, notebook spread, process timeline, quote, artifact grid,
photo essay. Arrangements of evidence and text, drawn on by every entry type.
A block never restyles the plates inside it, so any artifact can go in any block.

**Plate** — the one slot every artifact goes in. `data-artifact` does three jobs
at once: labels the empty slot, picks the default proportion for that kind of
artifact, and decides whether the asset is cropped or shown whole. Line art and
paper are shown whole; a receipt with its edges cut off is not evidence of
anything.

**Three width tiers on one grid.** Text sits in the reading column; `.u-wide` and
`.u-full` break a block out without leaving the flow or needing a wrapper. This
is what lets an entry run 70% visual with no layout rebuilt for it. Below 900px
the margin columns convert to reading width — at 390px they were taking 400 of
350 available pixels — and all three tier names survive, so no block needs to
know.

**For-position-only is an authoring state, not a design element.** An empty slot
draws a keyline cross and names the artifact it is waiting for: the mark a
publication designer leaves where a picture is going to sit. It is scoped to
`:not(:has(img, picture, video, svg, iframe))`, so it removes itself the moment
real media arrives and can never survive into a published page. Adding an asset
is one line of markup: no class to change, no layout to rebuild, no dimensions to
work out.

**Text explains artifacts, not the other way round.** A block may be almost
entirely plates; that is a supported composition, not an edge case.

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
