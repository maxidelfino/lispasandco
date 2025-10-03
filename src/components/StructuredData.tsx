import React from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const structuredDataTranslations: Record<string, Record<Language, any>> = {
  "/": {
    [Language.SPANISH]: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "LYSPAS & CO",
      url: "https://lyspasandco.com",
      description: "Consultoría Lean y mejora continua",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://lyspasandco.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    [Language.ENGLISH]: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "LYSPAS & CO",
      url: "https://lyspasandco.com",
      description: "Lean Consulting and Continuous Improvement",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://lyspasandco.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    [Language.PORTUGUESE]: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "LYSPAS & CO",
      url: "https://lyspasandco.com",
      description: "Consultoria Lean e melhoria contínua",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://lyspasandco.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },
  "/wastezero": {
    [Language.SPANISH]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "WasteZero™",
      description:
        "Programa Lean para identificar y eliminar desperdicios industriales",
      provider: null, // to be filled dynamically
      serviceType: "Consultoría Lean Manufacturing",
      areaServed: "Argentina",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "WasteZero™",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Identificación de desperdicios",
              description: "Análisis de los 8 desperdicios Lean",
            },
          },
        ],
      },
    },
    [Language.ENGLISH]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "WasteZero™",
      description: "Lean program to identify and eliminate industrial waste",
      provider: null,
      serviceType: "Lean Manufacturing Consulting",
      areaServed: "Argentina",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "WasteZero™",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Waste Identification",
              description: "Analysis of the 8 Lean wastes",
            },
          },
        ],
      },
    },
    [Language.PORTUGUESE]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "WasteZero™",
      description:
        "Programa Lean para identificar e eliminar desperdícios industriais",
      provider: null,
      serviceType: "Consultoria Lean Manufacturing",
      areaServed: "Argentina",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "WasteZero™",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Identificação de desperdícios",
              description: "Análise dos 8 desperdícios Lean",
            },
          },
        ],
      },
    },
  },
  "/flowstable": {
    [Language.SPANISH]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "FlowStable™",
      description: "Estabilización de procesos industriales",
      provider: null,
      serviceType: "Optimización de Procesos",
      areaServed: "Argentina",
    },
    [Language.ENGLISH]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "FlowStable™",
      description: "Industrial process stabilization",
      provider: null,
      serviceType: "Process Optimization",
      areaServed: "Argentina",
    },
    [Language.PORTUGUESE]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "FlowStable™",
      description: "Estabilização de processos industriais",
      provider: null,
      serviceType: "Otimização de Processos",
      areaServed: "Argentina",
    },
  },
  "/5splus": {
    [Language.SPANISH]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "5S Plus™",
      description: "Programa de orden, limpieza y estandarización",
      provider: null,
      serviceType: "Organización Industrial",
      areaServed: "Argentina",
    },
    [Language.ENGLISH]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "5S Plus™",
      description: "Order, cleaning and standardization program",
      provider: null,
      serviceType: "Industrial Organization",
      areaServed: "Argentina",
    },
    [Language.PORTUGUESE]: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "5S Plus™",
      description: "Programa de ordem, limpeza e padronização",
      provider: null,
      serviceType: "Organização Industrial",
      areaServed: "Argentina",
    },
  },
};

const organizationDataByLang: Record<Language, any> = {
  [Language.SPANISH]: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LYSPAS & CO",
    alternateName: "LYSPAS AND CO",
    url: "https://lyspasandco.com",
    logo: "https://lyspasandco.com/assets/lyspascoicon-black.png",
    description:
      "Consultoría especializada en Lean Manufacturing y mejora continua",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-9-3416-40-8758",
      contactType: "customer service",
      email: "gonzalo_luvani@lyspasandco.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/lyspasandco/",
      "https://wa.me/+5493416408758",
    ],
  },
  [Language.ENGLISH]: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LYSPAS & CO",
    alternateName: "LYSPAS AND CO",
    url: "https://lyspasandco.com",
    logo: "https://lyspasandco.com/assets/lyspascoicon-black.png",
    description:
      "Consulting specialized in Lean Manufacturing and continuous improvement",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-9-3416-40-8758",
      contactType: "customer service",
      email: "gonzalo_luvani@lyspasandco.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/lyspasandco/",
      "https://wa.me/+5493416408758",
    ],
  },
  [Language.PORTUGUESE]: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LYSPAS & CO",
    alternateName: "LYSPAS AND CO",
    url: "https://lyspasandco.com",
    logo: "https://lyspasandco.com/assets/lyspascoicon-black.png",
    description:
      "Consultoria especializada em Lean Manufacturing e melhoria contínua",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-9-3416-40-8758",
      contactType: "customer service",
      email: "gonzalo_luvani@lyspasandco.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/lyspasandco/",
      "https://wa.me/+5493416408758",
    ],
  },
};

const StructuredData: React.FC = () => {
  const location = useLocation();
  const { currentLanguage } = useLanguage();

  const getStructuredData = () => {
    const baseUrl = "https://lyspasandco.com";
    const path = location.pathname;

    // Get organization data for current language
    const organizationData = organizationDataByLang[currentLanguage];

    // Get page-specific data for current language
    const pageDataByLang = structuredDataTranslations[path];
    let pageData: any = undefined;
    if (pageDataByLang) {
      pageData = { ...pageDataByLang[currentLanguage] };
      // If the schema expects a provider, inject the org data
      if (pageData.provider === null) {
        pageData.provider = organizationData;
      }
    }

    // If no page-specific data, fallback to organization data
    return pageData || organizationData;
  };

  React.useEffect(() => {
    // Remove previous script if exists
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script with structured data
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(getStructuredData());
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname, currentLanguage]);

  return null;
};

export default StructuredData;
