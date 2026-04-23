# COMP-002 — Build reusable feature grid and modal primitives

- **Status:** todo
- **Priority:** P1
- **Topic:** Reusable Components

## Problem

Program pages repeat the same card-hover-select-modal structure.

## Goal

Replace repeated implementations with reusable primitives.

## Proposed Work

- Extract `ProgramFeatureGrid`.
- Extract/refactor modal handling.
- Migrate program pages incrementally.

## Dependencies

- `COMP-001`

## Done When

- Multiple program pages use the same shared interaction layer.
