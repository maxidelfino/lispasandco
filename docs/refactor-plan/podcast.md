# Refactor Plan — Podcast

## Objective

Turn the podcast from a demo element into a clear product surface inside LYSPAS & CO V2.

## Main Decisions

1. Homepage podcast section becomes a teaser.
2. `/podcast` becomes the primary listening/discovery destination.
3. Podcast data/model should scale beyond hardcoded demo assumptions.
4. Podcast should have dedicated SEO and analytics treatment.

## Proposed Steps

### Step 1 — IA cleanup
- Restore/find the right navigation path to `/podcast`.
- Remove ambiguity between homepage player and dedicated page.

### Step 2 — Content model
- Move podcast data into a typed manifest/content structure that can scale.

### Step 3 — Dedicated page structure
- Add stronger editorial structure: episodes, context, subscribe/listen actions, show notes roadmap if desired.

### Step 4 — SEO and schema
- Add podcast-specific metadata/schema.

### Step 5 — Analytics
- Track episode plays, progress, CTA interactions, and podcast page discovery.

## Dependencies

- SEO strategy
- Design/UX cleanup
- Analytics event model

## Done Criteria

- The homepage does not duplicate the full podcast experience
- `/podcast` is discoverable and clearly valuable
- Podcast content model supports growth
