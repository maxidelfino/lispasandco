# Judgment Day — Summary

## Context

This folder consolidates the findings from the adversarial review performed on LYSPAS & CO V2.

## Main Conclusions

1. **SEO is not ready to scale**
   - Multilingual SEO is modeled incorrectly for crawling/indexing.
   - `/podcast` is not consistently represented in sitemap/discovery flows.
   - Metadata, canonical logic, and JSON-LD depend too heavily on client-side injection.

2. **Architecture has too many sources of truth**
   - Routing, SEO metadata, structured data, sitemap generation, and some page-level SEO concerns are split across multiple files.
   - `src/App.tsx` is carrying too much responsibility.

3. **Reusable component strategy is incomplete**
   - The codebase already has good shared primitives, but repeated patterns still live in many program pages/components.
   - Feature cards, modal flows, CTA behavior, and PDF download logic are repeated.

4. **Design system and information architecture need consolidation**
   - Palette/tokens exist, but hardcoded styles still dominate many sections.
   - The podcast experience is duplicated between the homepage and `/podcast` with weak IA.

5. **Analytics need a dedicated refinement pass**
   - GA4 exists, but event typing, pageview semantics, and content/language reporting need to be tightened.

## Priority Order

1. SEO foundation
2. Architecture/source-of-truth refactor
3. Reusable component extraction
4. Analytics consistency
5. Design system + podcast productization

## Related Docs

- `docs/findings/seo.md`
- `docs/findings/architecture.md`
- `docs/findings/reusable-components.md`
- `docs/findings/design-ux.md`
- `docs/findings/analytics.md`
- `docs/refactor-plan/overview.md`
