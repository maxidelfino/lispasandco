# Reusable Components Findings

## Verdict

**Judgment:** strong opportunity for consolidation. The app already has useful primitives, but repeated patterns still dominate the program surfaces.

## Confirmed Problems

### 1. Feature card + modal pattern is heavily duplicated
- Multiple program content files implement the same selection state, hover behavior, modal open/close flow, and visual card rendering.
- This is the biggest reuse gap in the codebase.

### 2. Program content sections are too bespoke
- Many `ContentSection.tsx` files behave like local mini-apps rather than data-driven uses of shared primitives.

### 3. `useDownloadPdf` is underused
- PDF download behavior is repeated inline across multiple pages/components.
- Tracking and behavior consistency are harder to guarantee.

### 4. Shared components have rigid or leaky APIs
- `ContentSection` is sometimes used with empty heading props just to get layout.
- `ProgramModal` relies on string conventions/prefixes and mixed rendering paths.

### 5. CTA components mix UI and behavior
- Presentation, navigation, footer scrolling, and download behavior are too entangled.

### 6. Service exploration logic is duplicated
- `ServiceCardList` and `ServicesModal` duplicate service registry and navigation behavior.

### 7. Accessibility suffers from structural duplication
- Repeated clickable `div` patterns should be semantic buttons/links.
- Shared modal behavior needs stronger focus management.

## Recommended Direction

1. Create a typed `ProgramFeature` model.
2. Extract `ProgramFeatureGrid` + `ProgramFeatureModal`.
3. Create a `ProgramPageLayout` shell.
4. Route all download behavior through `useDownloadPdf`.
5. Split section wrappers from section headers.
6. Standardize semantic interaction primitives.

## Files Frequently Mentioned

- `src/components/shared/ContentSection.tsx`
- `src/components/shared/ProgramModal.tsx`
- `src/hooks/useDownloadPdf.ts`
- `src/components/ServiceCardList.tsx`
- `src/components/ServicesModal.tsx`
- `src/components/*/ContentSection.tsx`
- `src/pages/*Page.tsx`
