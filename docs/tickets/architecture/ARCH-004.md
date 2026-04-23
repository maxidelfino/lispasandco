# ARCH-004 — Extract content/config from giant page files

- **Status:** todo
- **Priority:** P1
- **Topic:** Architecture

## Problem

Large page/content files mix data, translation content, UI composition, and interaction state.

## Goal

Move toward typed content modules.

## Proposed Work

- Identify the largest offenders.
- Move content objects to data/config files.
- Keep page components focused on composition.

## Done When

- Program/page files shrink materially and responsibilities are clearer.
