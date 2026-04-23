# SEO Findings

## Verdict

**Judgment:** high-priority refactor required.

## Confirmed Problems

### 1. Invalid multilingual SEO model
- `hreflang` entries point to the same URL for `es`, `en`, and `pt`.
- Language is selected from client state/localStorage instead of real crawlable URLs.
- This breaks the intended multilingual discoverability model.

### 2. Soft-404/indexation risk
- The SPA rewrite strategy can serve client-side 404 states without strong noindex/404 semantics.
- Unknown URLs may still appear canonicalized/indexable.

### 3. Metadata and schema rely too much on client execution
- Titles, descriptions, canonicals, alternates, and route-specific schema are injected after React loads.
- This weakens SEO robustness for route snapshots and non-ideal crawlers.

### 4. Sitemap drift
- `/podcast` exists as a route but has drifted from the committed sitemap.
- Route inventory and sitemap generation are not governed by one typed source.

### 5. Missing podcast SEO modeling
- `/podcast` does not expose dedicated podcast schema.
- The page should communicate a media/product surface, not just fallback organization schema.

### 6. Weak internal-link semantics
- Important discovery flows depend on buttons, click handlers, cards, and modal interactions instead of straightforward crawlable links.

### 7. Localized content mismatch
- Some podcast metadata suggests multilingual content that the actual content/data does not fully support.
- This risks weak relevance and trust for EN/PT discovery.

## Secondary Findings

- Duplicate or overlapping schema responsibility between static HTML and runtime injection.
- Meta keywords still present despite being strategically irrelevant.
- Some image semantics/alt strategy should be tightened.
- Homepage media payload can hurt the main landing page SEO/performance balance.

## Recommended Direction

1. Decide the URL strategy for languages:
   - **Preferred:** `/en/...`, `/pt/...`, default Spanish route structure.
2. Move route SEO ownership to a single manifest.
3. Generate sitemap from that manifest.
4. Add explicit not-found SEO behavior.
5. Model podcast as a first-class route with proper schema and linking.

## Files Frequently Mentioned

- `src/components/SEOHead.tsx`
- `src/components/StructuredData.tsx`
- `src/App.tsx`
- `scripts/generate-sitemap.js`
- `public/sitemap.xml`
- `index.html`
- `src/pages/PodcastPage.tsx`
