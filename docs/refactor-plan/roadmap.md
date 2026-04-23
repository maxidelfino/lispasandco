# Refactor Roadmap — Chronological Phases

## Purpose

This roadmap translates the topic-based findings, plans, and tickets into a chronological execution order for a solo developer workflow.

## How to Use This Roadmap

- Treat each phase as a focused batch.
- Finish the foundation decisions of one phase before opening the next one.
- Use the ticket IDs as the execution checklist.
- If a phase reveals a new dependency, update the relevant ticket before continuing.

---

## Phase 0 — Alignment and Rule Setting

### Objective

Lock the decisions that affect all later work.

### Why this phase exists

If multilingual SEO, route ownership, and podcast IA are not defined first, the rest of the refactor gets rebuilt twice.

### Tickets

- `SEO-001` — Define multilingual URL strategy
- `POD-001` — Define homepage teaser vs dedicated podcast page

### Outputs

- Documented decision for language URL strategy
- Documented decision for homepage vs `/podcast` responsibilities

### Exit Criteria

- No open ambiguity around multilingual URLs
- No open ambiguity around podcast IA

---

## Phase 1 — Core Source of Truth

### Objective

Create the structural backbone that will govern routing, metadata, schema, and future page growth.

### Why this phase exists

Right now the app duplicates route knowledge across `App.tsx`, `SEOHead`, `StructuredData`, and sitemap generation. This is the main coordination failure in the repo.

### Tickets

- `ARCH-001` — Create typed route manifest
- `ARCH-002` — Break down `src/App.tsx`
- `ARCH-003` — Normalize page-level SEO ownership
- `SEO-002` — Unify route metadata, schema, and sitemap sources

### Outputs

- Route manifest introduced
- `App.tsx` reduced to app composition
- Metadata ownership normalized
- Schema/sitemap governance aligned with routing

### Exit Criteria

- A new route can be introduced from one canonical definition
- `App.tsx` is no longer the metadata database
- SEO/schema/sitemap no longer drift independently

---

## Phase 2 — Search and Indexing Safety

### Objective

Fix the search-specific risks that remain once the source-of-truth layer exists.

### Why this phase exists

Once route ownership is centralized, SEO fixes become safer and cleaner to implement.

### Tickets

- `SEO-003` — Add explicit 404 / noindex behavior
- `SEO-004` — Give podcast a first-class SEO implementation

### Outputs

- Safer 404 behavior
- Valid route-level SEO signals
- Podcast route treated as a real discoverable destination

### Exit Criteria

- Unknown URLs are not accidentally indexable
- `/podcast` is internally linked, represented in sitemap, and semantically modeled

---

## Phase 3 — Analytics Reliability

### Objective

Make measurement trustworthy before continuing product iteration.

### Why this phase exists

The business value of V2 depends on understanding traffic, CTA clicks, WhatsApp clicks, form submissions, and downloads.

### Tickets

- `GA-001` — Type the analytics boundary
- `GA-002` — Centralize conversion/download tracking
- `GA-003` — Clarify pageview semantics for language/content state
- `COMP-004` — Centralize PDF download behavior

### Outputs

- Typed analytics layer
- Reliable download tracking
- Clear pageview semantics
- Shared event paths for important interactions

### Exit Criteria

- GA boundary no longer uses `any`
- Downloads always flow through the same behavior and tracking path
- Language/content reporting is understandable in analytics

---

## Phase 4 — Reusable Program Surfaces

### Objective

Eliminate the heaviest copy-paste patterns in the service/program pages.

### Why this phase exists

This is the part of the app most likely to grow with new services, refinements, and content updates.

### Tickets

- `COMP-001` — Extract `ProgramFeature` shared model
- `COMP-002` — Build reusable feature grid and modal primitives
- `COMP-003` — Introduce `ProgramPageLayout`
- `ARCH-004` — Extract content/config from giant page files

### Outputs

- Shared typed program feature model
- Reusable grid/modal behavior
- Reusable program page shell
- Smaller page/content modules

### Exit Criteria

- Program pages stop re-implementing the same interaction model
- Content and rendering are materially more separated

---

## Phase 5 — Podcast Productization

### Objective

Turn the podcast into a coherent feature instead of a duplicated demo surface.

### Why this phase exists

Podcast decisions depend on routing, SEO, analytics, and page structure work already being stabilized.

### Tickets

- `POD-002` — Move podcast data to a scalable typed content model
- `POD-003` — Add podcast-specific SEO and analytics coverage

### Outputs

- Scalable podcast content model
- Distinct homepage teaser and dedicated podcast page
- Better product/SEO/analytics alignment for podcast growth

### Exit Criteria

- Homepage does not duplicate the full podcast experience
- `/podcast` behaves as the clear primary destination

---

## Phase 6 — Design System Consolidation

### Objective

Clean up the visual system after the product structure is stable.

### Why this phase exists

Polishing before structural cleanup would waste effort and likely be reworked.

### Tickets

- `DESIGN-001` — Normalize palette/token usage
- `DESIGN-003` — Remove global transition strategy and scope motion

### Outputs

- Stronger token usage in real UI
- Reduced motion noise
- Better consistency between design intent and implementation

### Exit Criteria

- Hardcoded visual styling is reduced in critical surfaces
- Motion rules feel deliberate instead of global

---

## Phase 7 — Homepage Narrative and Conversion Refinement

### Objective

Use the stabilized system to improve how the homepage sells and guides users.

### Why this phase exists

This is the highest-leverage polish layer once the foundation is no longer fragile.

### Tickets

- `DESIGN-002` — Reduce homepage CTA repetition and tighten narrative

### Outputs

- Cleaner homepage flow
- Clearer conversion hierarchy
- Better separation between proof, services, and final CTA moments

### Exit Criteria

- Homepage rhythm feels deliberate and easier to scan
- Repeated CTA noise is reduced

---

## Recommended First Batch

If work resumes after a pause, start here:

1. `SEO-001`
2. `POD-001`
3. `ARCH-001`
4. `ARCH-002`
5. `ARCH-003`
6. `SEO-002`

That batch defines the rules of the system before deeper implementation.

## Recommended Second Batch

1. `SEO-003`
2. `SEO-004`
3. `GA-001`
4. `COMP-004`
5. `GA-002`
6. `GA-003`

## Recommended Third Batch

1. `COMP-001`
2. `COMP-002`
3. `ARCH-004`
4. `COMP-003`
5. `POD-002`
6. `POD-003`

## Recommended Final Batch

1. `DESIGN-001`
2. `DESIGN-003`
3. `DESIGN-002`
