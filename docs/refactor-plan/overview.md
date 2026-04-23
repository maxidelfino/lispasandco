# Refactor Plan — Overview

## Goal

Stabilize LYSPAS & CO V2 so the project can scale with confidence before expanding the podcast surface and other V2 enhancements.

## Refactor Principles

1. **One source of truth per concern**
2. **Prefer typed registries over duplicated inline config**
3. **Separate content from rendering where repetition is obvious**
4. **Keep tracking centralized and typed**
5. **Clarify information architecture before polishing visuals**

## Execution Order

### Phase 1 — Critical foundations
1. SEO architecture
2. Route/metadata/schema/source-of-truth refactor
3. PDF download and analytics consistency

### Phase 2 — Reusable surfaces
4. Program page/component extraction
5. Service browsing and modal consolidation

### Phase 3 — Product and experience refinement
6. Podcast IA/productization
7. Design system normalization
8. Homepage narrative cleanup

## Workstreams

- `seo.md`
- `architecture.md`
- `reusable-components.md`
- `analytics.md`
- `design-ux.md`
- `podcast.md`
- `roadmap.md`

## Definition of Success

- New routes require one obvious place to be registered.
- Metadata/schema/sitemap remain synchronized.
- Program pages stop duplicating the same modal/card/download patterns.
- Analytics become typed, centralized, and trustworthy.
- The homepage and podcast page have clear, non-overlapping jobs.
