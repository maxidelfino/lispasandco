import React from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = "https://lyspasandco.com/og-image.png",
  type = "website",
}) => {
  const location = useLocation();
  const currentUrl = `https://lyspasandco.com${location.pathname}`;

  React.useEffect(() => {
    // Actualizar title
    if (title) {
      document.title = title;
    }

    // Actualizar meta description
    if (description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }

    // Actualizar meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      }
    }

    // Actualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogType = document.querySelector('meta[property="og:type"]');

    if (ogTitle && title) ogTitle.setAttribute("content", title);
    if (ogDescription && description)
      ogDescription.setAttribute("content", description);
    if (ogUrl) ogUrl.setAttribute("content", currentUrl);
    if (ogImage) ogImage.setAttribute("content", image);
    if (ogType) ogType.setAttribute("content", type);

    // Actualizar Twitter Cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (twitterTitle && title) twitterTitle.setAttribute("content", title);
    if (twitterDescription && description)
      twitterDescription.setAttribute("content", description);
    if (twitterImage) twitterImage.setAttribute("content", image);

    // Actualizar canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", currentUrl);
    }
  }, [title, description, keywords, image, type, currentUrl]);

  return null;
};

export default SEOHead;
