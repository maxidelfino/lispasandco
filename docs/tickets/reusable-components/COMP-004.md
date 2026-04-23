# COMP-004 — Centralize PDF download behavior

- **Status:** todo
- **Priority:** P1
- **Topic:** Reusable Components

## Problem

PDF download logic is duplicated across multiple pages/components.

## Goal

Route all download behavior through shared utilities.

## Proposed Work

- Migrate page-level manual anchor creation to `useDownloadPdf`.
- Standardize tracking parameters.

## Dependencies

- `GA-002`

## Done When

- PDF downloads have one consistent behavior path.
