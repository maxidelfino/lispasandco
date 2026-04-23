# Refactor Plan — SEO

## Objective

Move from a fragile SPA SEO setup to a stable, explicit, and maintainable SEO foundation.

## Main Decisions

1. Define a real multilingual strategy.
2. Unify route SEO metadata under one manifest.
3. Derive sitemap and structured data from that manifest.
4. Add explicit handling for 404/not-found SEO.
5. Give `/podcast` dedicated SEO treatment.

## Proposed Steps

### Step 1 — Multilingual URL strategy
- Decide whether to adopt path-based localized URLs.
- If localized URLs are not implemented immediately, remove invalid `hreflang` claims.

### Step 2 — Route metadata manifest
- Replace distributed title/description/keywords ownership with a typed manifest.

### Step 3 — Schema alignment
- Refactor `StructuredData.tsx` to consume the same route manifest.

### Step 4 — Sitemap governance
- Generate sitemap from the shared route manifest.
- Ensure build/release flow cannot drift.

### Step 5 — Podcast SEO
- Add podcast-specific schema and internal links.
- Align real content availability with localized metadata.

### Step 6 — 404 behavior
- Make soft-404 behavior explicit and non-indexable.

## Dependencies

- Architecture refactor for route manifest
- Podcast content decisions

## Done Criteria

- No fake same-URL `hreflang`
- `/podcast` appears in sitemap and internal linking
- Route metadata/schema/sitemap come from the same canonical definition
- 404 state is clearly non-indexable
