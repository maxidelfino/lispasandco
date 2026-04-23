# ARCH-003 — Normalize page-level SEO ownership

- **Status:** todo
- **Priority:** P1
- **Topic:** Architecture

## Problem

Some pages render `SEOHead` locally while route metadata also exists centrally.

## Goal

Remove mixed ownership.

## Proposed Work

- Audit pages with local SEO injection.
- Decide central vs local pattern.
- Apply consistently.

## Dependencies

- `ARCH-001`

## Done When

- SEO responsibility is consistent and documented.
