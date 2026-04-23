# Analytics Findings

## Verdict

**Judgment:** analytics are present and valuable, but the tracking layer needs a cleanup pass to become reliable as a product decision tool.

## Confirmed Problems

### 1. Event typing is too weak
- `ga.ts` uses `any` for core boundaries.
- This allows silent payload drift over time.

### 2. Pageview semantics need refinement
- Pageview logic is path-driven and may not fully represent language/content state.
- Reporting quality suffers if content changes without URL changes.

### 3. Download tracking is not fully centralized
- Because downloads are sometimes manual, consistency of event emission is at risk.

### 4. Important UX paths are not uniformly instrumented
- Some key service navigation and discovery interactions were flagged as potentially undertracked.

### 5. Analytics and SEO concerns intersect
- Wrong title timing, language ambiguity, or duplicated content can damage interpretation of traffic quality.

## Recommended Direction

1. Create typed GA event contracts.
2. Audit all critical conversions/events.
3. Centralize PDF/download tracking through shared hooks.
4. Define how language should be represented in analytics.
5. Align pageview timing with metadata/content readiness.

## Files Frequently Mentioned

- `src/analytics/ga.ts`
- `src/analytics/events.ts`
- `src/hooks/usePageView.ts`
- `src/hooks/useDownloadPdf.ts`
- `src/components/ServiceCardList.tsx`
- `src/components/FloatingNavigation.tsx`
