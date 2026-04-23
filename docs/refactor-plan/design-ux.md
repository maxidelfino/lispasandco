# Refactor Plan — Design & UX

## Objective

Make the site feel like a coherent digital identity instead of a collection of repeated marketing sections.

## Main Decisions

1. Clarify homepage vs podcast page roles.
2. Enforce semantic token usage over hardcoded styles.
3. Reduce decorative repetition.
4. Tighten conversion hierarchy.

## Proposed Steps

### Step 1 — IA clarification
- Homepage should tease the podcast, not duplicate the full experience.
- `/podcast` should become the canonical destination.

### Step 2 — Token normalization
- Audit hardcoded colors/gradients and move them to semantic palette usage.

### Step 3 — Motion cleanup
- Remove global transitions.
- Keep motion intentional and branded.

### Step 4 — Hero and section hierarchy
- Reduce repeated hero/CTA rhythms.
- Create stronger contrast between proof, services, narrative, and conversion sections.

### Step 5 — Typography refinement
- Introduce a clearer typographic hierarchy and brand voice.

## Dependencies

- Podcast product decisions
- Reusable component cleanup

## Done Criteria

- Homepage has a clearer narrative arc
- Podcast has a distinct product identity
- Palette system is reflected in real UI usage
- Motion and CTA density feel intentional instead of repetitive
