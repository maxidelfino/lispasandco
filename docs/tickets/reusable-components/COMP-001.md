# COMP-001 — Extract `ProgramFeature` shared model

- **Status:** todo
- **Priority:** P1
- **Topic:** Reusable Components

## Problem

Feature selection state and payloads are repeated with weak typing.

## Goal

Create one typed model reused across program experiences.

## Proposed Work

- Define `ProgramFeature` contract.
- Replace `any` selected feature state.

## Done When

- Program feature interactions share one stable type.
