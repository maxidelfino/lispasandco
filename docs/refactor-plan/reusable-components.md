# Refactor Plan — Reusable Components

## Objective

Turn repeated page-level patterns into stable, typed primitives.

## Main Decisions

1. Standardize the program feature interaction model.
2. Standardize program page layout.
3. Centralize download behavior.
4. Split rigid shared components into clearer primitives.

## Proposed Steps

### Step 1 — Program feature model
- Define a shared `ProgramFeature` type.
- Replace `any`-based selected feature state.

### Step 2 — Feature grid + modal extraction
- Build reusable program feature grid and modal primitives.

### Step 3 — Program page shell
- Extract a reusable page shell for repeated service/program page composition.

### Step 4 — CTA cleanup
- Separate CTA presentation from navigation/download behavior.

### Step 5 — Download centralization
- Migrate all PDF actions to `useDownloadPdf`.

### Step 6 — Accessibility pass
- Replace clickable `div`s with semantic controls.
- Improve focus handling in modal behavior.

## Dependencies

- Architecture work for typed content modules
- Analytics work for download event contracts

## Done Criteria

- Program pages stop re-implementing the same interactive card/modal system
- Download behavior is centralized
- Shared components are more composable and less string-driven
- Accessibility improves as a side effect of structural cleanup
