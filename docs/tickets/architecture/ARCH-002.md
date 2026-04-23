# ARCH-002 — Break down `src/App.tsx`

- **Status:** todo
- **Priority:** P0
- **Topic:** Architecture

## Problem

`src/App.tsx` is overloaded with too many responsibilities.

## Goal

Turn `App.tsx` into a thinner composition layer.

## Proposed Work

- Move metadata config out.
- Move route registration concerns out.
- Keep only app-level composition.

## Dependencies

- `ARCH-001`

## Done When

- `App.tsx` no longer acts as the metadata database.
