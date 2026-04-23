# Architecture Findings

## Verdict

**Judgment:** the app works, but the current structure does not scale cleanly for V2 growth.

## Confirmed Problems

### 1. `src/App.tsx` is overloaded
- It owns route declarations, route metadata maps, lazy imports, and page wrapping concerns.
- Adding or changing routes requires edits in multiple disconnected sections.

### 2. Multiple sources of truth
- Routing lives in `App.tsx`.
- SEO metadata is split between `App.tsx` and some pages.
- Structured data lives in `StructuredData.tsx`.
- Sitemap routes live in `scripts/generate-sitemap.js`.
- This increases drift risk for every new page.

### 3. Large page/content files
- Several page/content modules mix content, translation objects, feature modeling, modal state, diagram/UI composition, and CTA behavior.
- This inflates maintenance cost and makes refactors fragile.

### 4. Inconsistent SEO ownership
- Some pages still render `SEOHead` directly while the app also centralizes metadata.
- This creates unclear precedence and future drift.

### 5. Weak typing in analytics boundary
- `src/analytics/ga.ts` uses `any` where the project otherwise aims for stronger TypeScript discipline.

### 6. Language initialization issue
- Language state starts with Spanish, then corrects from localStorage.
- This can create wrong-language first paint and side-effect mismatch.

### 7. Content architecture is code-heavy
- The podcast catalog and some service/program content are too code-bound.
- As the product grows, content should move toward typed registries/manifests.

## Recommended Direction

1. Introduce a single route manifest.
2. Generate metadata/schema/sitemap from that manifest.
3. Move page content into typed data modules.
4. Normalize per-page responsibilities.
5. Tighten analytics types and boundaries.

## Files Frequently Mentioned

- `src/App.tsx`
- `src/components/StructuredData.tsx`
- `src/components/SEOHead.tsx`
- `src/contexts/LanguageContext.tsx`
- `src/analytics/ga.ts`
- `src/assets/podcast/podcast.ts`
- `src/pages/*Page.tsx`
