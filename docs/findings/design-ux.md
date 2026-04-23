# Design & UX Findings

## Verdict

**Judgment:** the site has a visual base, but the brand system and information architecture need consolidation to feel like a durable digital identity.

## Confirmed Problems

### 1. The podcast IA is unclear
- The homepage already embeds a substantial podcast experience.
- `/podcast` also exists.
- Podcast navigation visibility is inconsistent.
- The product hierarchy is not clear.

### 2. Visual system is split
- A palette/token system exists, but many sections still use hardcoded Tailwind colors and gradients.
- This weakens brand consistency and makes future palette work shallow.

### 3. Repetitive hero/section language
- Many sections reuse similar hero rhythms, gradients, animated decoration, and CTA behavior.
- The brand risks feeling like a generic marketing template.

### 4. Too much CTA repetition
- Repeating the same CTA pattern across many homepage sections reduces emphasis and narrative control.

### 5. Motion is too broad
- Global transitions and repeated decorative animations add cost and noise.
- Motion should be intentional and scoped.

### 6. Mobile/touch concerns in interactive modules
- Some key experiences rely too much on hover or implicit active states.

### 7. Typographic identity is serviceable but not distinctive
- The content is readable, but the current typography system does not strongly differentiate the brand.

## Recommended Direction

1. Clarify product hierarchy: homepage teaser vs dedicated podcast destination.
2. Standardize palette usage through semantic tokens.
3. Reduce decorative repetition and tighten motion rules.
4. Introduce a stronger narrative hierarchy on the homepage.
5. Define a clearer brand-facing hero and typography system.

## Files Frequently Mentioned

- `src/pages/HomePage.tsx`
- `src/pages/PodcastPage.tsx`
- `src/components/HeroBase.tsx`
- `src/components/HomePageHero.tsx`
- `src/components/FloatingNavigation.tsx`
- `src/components/EvolutionPath.tsx`
- `src/index.css`
- `src/data/palettes.ts`
