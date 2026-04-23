# Refactor Plan — Architecture

## Objective

Reduce coordination cost and drift by introducing clearer ownership boundaries.

## Main Decisions

1. Shrink `src/App.tsx` responsibilities.
2. Create one route manifest.
3. Move content/config out of giant page files.
4. Remove duplicated SEO ownership.
5. Strengthen TypeScript boundaries in analytics and shared models.

## Proposed Steps

### Step 1 — Route manifest
- Create a typed route registry containing route path, component, SEO metadata, and optional schema hints.

### Step 2 — `App.tsx` simplification
- Convert `App.tsx` into composition/orchestration only.
- Remove giant parallel metadata maps.

### Step 3 — Page responsibility cleanup
- Remove page-level `SEOHead` usage where central routing already owns metadata.

### Step 4 — Content extraction
- Move page/program content into typed data modules.

### Step 5 — Analytics type cleanup
- Replace `any` with explicit event contracts.

### Step 6 — Language bootstrap cleanup
- Initialize language state synchronously to avoid wrong-language first paint.

## Dependencies

- SEO manifest work
- Component extraction work

## Done Criteria

- `App.tsx` no longer acts as the metadata database
- Route onboarding is predictable
- Page content files shrink materially
- Analytics boundary is typed
- Language bootstraps without visual mismatch
