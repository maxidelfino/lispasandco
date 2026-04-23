# ARCH-001 — Create typed route manifest

- **Status:** todo
- **Priority:** P0
- **Topic:** Architecture

## Problem

`App.tsx`, schema generation, and sitemap generation maintain overlapping route knowledge.

## Goal

Introduce a single typed route manifest.

## Proposed Work

- Define route metadata shape.
- Register routes in one place.
- Feed router, SEO, schema, and sitemap from this source.

## Done When

- Route registration has one obvious source of truth.
