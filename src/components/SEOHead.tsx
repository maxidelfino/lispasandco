import React from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const LANG_CODES: Record<string, string> = {
  es: "es",
  en: "en",
  pt: "pt",
};

const OG_LOCALES: Record<string, string> = {
  es: "es_AR",
  en: "en_US",
  pt: "pt_BR",
};

// Helper: upsert a <link> tag identified by rel + hreflang
const upsertLink = (rel: string, hreflang: string, href: string) => {
  let el = document.querySelector(
    `link[rel="${rel}"][hreflang="${hreflang}"]`
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.href = href;
};

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = "https://lyspasandco.com/og-image.png",
  type = "website",
}) => {
  const location = useLocation();
  const { currentLanguage } = useLanguage();
  const currentUrl = `https://lyspasandco.com${location.pathname}`;

  React.useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────────
    if (title) document.title = title;

    // ── <html lang> ────────────────────────────────────────────────────────
    document.documentElement.lang = LANG_CODES[currentLanguage] ?? "es";

    // ── Meta description ───────────────────────────────────────────────────
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute("content", description);
    }

    // ── Meta keywords ──────────────────────────────────────────────────────
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute("content", keywords);
    }

    // ── Open Graph ─────────────────────────────────────────────────────────
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');

    if (ogTitle && title) ogTitle.setAttribute("content", title);
    if (ogDescription && description) ogDescription.setAttribute("content", description);
    if (ogUrl) ogUrl.setAttribute("content", currentUrl);
    if (ogImage) ogImage.setAttribute("content", image);
    if (ogType) ogType.setAttribute("content", type);
    if (ogLocale) ogLocale.setAttribute("content", OG_LOCALES[currentLanguage] ?? "es_AR");

    // og:locale:alternate — upsert for the two non-active languages
    const alternateLangs = Object.entries(OG_LOCALES).filter(
      ([lang]) => lang !== currentLanguage
    );
    // Remove any existing alternates then re-insert
    document
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((el) => el.remove());
    alternateLangs.forEach(([, locale]) => {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:locale:alternate");
      el.setAttribute("content", locale);
      document.head.appendChild(el);
    });

    // ── Twitter Cards ──────────────────────────────────────────────────────
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (twitterTitle && title) twitterTitle.setAttribute("content", title);
    if (twitterDescription && description)
      twitterDescription.setAttribute("content", description);
    if (twitterImage) twitterImage.setAttribute("content", image);

    // ── Canonical ──────────────────────────────────────────────────────────
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", currentUrl);

    // ── hreflang ───────────────────────────────────────────────────────────
    // Same-URL multilingual: all language variants point to the same URL.
    // x-default points to the default (Spanish) version.
    upsertLink("alternate", "es", currentUrl);
    upsertLink("alternate", "en", currentUrl);
    upsertLink("alternate", "pt", currentUrl);
    upsertLink("alternate", "x-default", currentUrl);
  }, [title, description, keywords, image, type, currentUrl, currentLanguage]);

  return null;
};

export default SEOHead;
