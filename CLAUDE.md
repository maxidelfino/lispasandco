# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run build:seo    # Production build + regenerate sitemap
npm run lint         # ESLint
npm run generate:sitemap  # Regenerate public/sitemap.xml only
```

No test runner is configured.

## Architecture

**LYSPAS & CO** is a React 18 + TypeScript + Vite + Tailwind CSS SPA. It's a marketing site for a Lean consulting company with ~18 service/program pages, trilingual support (es/en/pt), and GA4 analytics.

### Routing & i18n

- `src/App.tsx` — All routes defined here. `PageWrapper` wraps routes and injects per-route SEO metadata (title, description, keywords) based on `currentLanguage`.
- `src/contexts/LanguageContext.tsx` — Global language state (`Language` enum: `"es"` | `"en"` | `"pt"`). Persisted to `localStorage`.
- Translations are **inlined per-page** as `Record<Language, {...}>` objects — there is no separate i18n library.

### Color / Theming

- Colors are applied as CSS custom properties on `:root` (`--color-bg`, `--color-primary`, `--color-secondary`, `--color-accent`, `--color-text`, `--color-surface`, `--color-border`).
- `src/hooks/usePalette.ts` + `src/data/palettes.ts` manage palette switching. Default is palette `1` ("Precision Pro"), applied on mount.
- All components reference colors via `var(--color-*)` Tailwind arbitrary values or inline styles.

### Page Pattern

Every program page follows this structure:

```tsx
<div className="min-h-screen bg-[var(--color-bg)]">
  <FloatingNavigation />
  <HeroSection />          // program-specific, uses HeroBase
  {/* content sections */}
  <CTASection />
  <FloatingWhatsAppCTA />
</div>
```

- `src/components/HeroBase.tsx` — Shared hero with animated background variants (`"circles"` | `"circlesLarge"` | `"squares"` | `"bars"` | `"mixed"` | `"minimal"`), badge, title, subtitles, descriptions, scroll anchor, and optional download button.
- `src/components/shared/ContentSection.tsx` — Reusable section wrapper with title + subtitle layout.
- `src/components/shared/ProgramModal.tsx` — Reusable modal for program detail cards (details list with `✔`/`✘` prefixes, optional graphic slot).

### Icons & Diagrams

`src/icons-components/` contains custom SVG React components organized by program. These are purely visual (no logic). Note: the directory was previously misspelled as `icons-componets` — imports must use the correct path `icons-components`.

### Analytics

- `src/analytics/ga.ts` — `trackEvent(eventName, params)` and `pageview()` helpers. GA4 ID: `G-BVDQHM3XTL`.
- `src/analytics/events.ts` — `GA_EVENTS` constants (`NAV_CLICK`, `CTA_CLICK`, `SERVICE_CLICK`, `WHATSAPP_CLICK`, `FORM_SUBMIT`).
- `src/hooks/usePageView.ts` — Called in `PageWrapper` to fire a `page_view` event on route change.

### PDF Assets

Program data sheets live in `public/assets/pdf/`. Naming convention:
- `LYS-Pxxx-ProgramName.pdf` → Spanish version
- `LYS-P1xx-ProgramName.pdf` → English version
- `LYS-P2xx-ProgramName.pdf` → Portuguese version

Use `src/hooks/useDownloadPdf.ts` to trigger downloads instead of duplicating link-click logic.

### SEO

- `src/components/SEOHead.tsx` — Sets `<title>`, `<meta>` description/keywords, and canonical URL via React portals or direct DOM.
- `src/components/StructuredData.tsx` — Injects JSON-LD schema.
- `scripts/generate-sitemap.js` — Node script that writes `public/sitemap.xml`. Run via `npm run generate:sitemap` or `npm run build:seo`. When adding a new route, update both `src/App.tsx` and this script.

### Adding a New Program Page

1. Create `src/pages/NewProgramPage.tsx` following the existing page pattern.
2. Create `src/components/NewProgram/` with at least `HeroSection.tsx` and `ContentSection.tsx`.
3. Add the route in `src/App.tsx` (`PageWrapper` routes + title/description/keywords maps).
4. Add the route to `scripts/generate-sitemap.js`.
5. Add PDF assets to `public/assets/pdf/` following the naming convention.
