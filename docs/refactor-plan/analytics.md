# Refactor Plan — Analytics

## Objective

Make analytics trustworthy enough to guide product and content decisions during V2.

## Main Decisions

1. Type the event system.
2. Centralize event emission for repeated behaviors.
3. Clarify pageview semantics for language/content state.
4. Ensure key business interactions are measurable.

## Proposed Steps

### Step 1 — Event contract layer
- Create typed payloads per GA event.

### Step 2 — Download/event centralization
- Ensure PDF and CTA events always flow through shared utilities.

### Step 3 — Pageview model
- Decide whether language changes should emit a separate page/content event.

### Step 4 — Critical path audit
- Audit WhatsApp, form submission, service navigation, podcast interactions, and downloads.

### Step 5 — Reporting consistency
- Align document title/page path/language dimensions so analysis is trustworthy.

## Dependencies

- Architecture cleanup in `ga.ts`
- SEO/metadata timing decisions

## Done Criteria

- No `any` in analytics boundary
- Critical conversions are consistently tracked
- Pageview reporting reflects how the product is actually analyzed
