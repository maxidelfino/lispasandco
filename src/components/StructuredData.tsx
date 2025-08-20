import React from 'react';
import { useLocation } from 'react-router-dom';

const StructuredData: React.FC = () => {
  const location = useLocation();

  const getStructuredData = () => {
    const baseUrl = "https://lyspasandco.com";
    const currentUrl = `${baseUrl}${location.pathname}`;

    // Datos estructurados base para la organización
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LYSPAS & CO",
      "alternateName": "LYSPAS AND CO",
      "url": baseUrl,
      "logo": `${baseUrl}/assets/lyspascoicon-black.png`,
      "description": "Consultoría especializada en Lean Manufacturing y mejora continua",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rosario",
        "addressRegion": "Santa Fe",
        "addressCountry": "AR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54-9-3416-40-8758",
        "contactType": "customer service",
        "email": "gonzalo_luvani@lyspasandco.com"
      },
      "sameAs": [
        "https://www.linkedin.com/company/lyspasandco/",
        "https://wa.me/+5493416408758"
      ]
    };

    // Datos específicos por página
    const pageSpecificData: Record<string, any> = {
      "/": {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "LYSPAS & CO",
        "url": baseUrl,
        "description": "Consultoría Lean y mejora continua",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      "/wastezero": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "WasteZero™",
        "description": "Programa Lean para identificar y eliminar desperdicios industriales",
        "provider": organizationData,
        "serviceType": "Consultoría Lean Manufacturing",
        "areaServed": "Argentina",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Programa WasteZero™",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Identificación de desperdicios",
                "description": "Análisis de los 8 desperdicios Lean"
              }
            }
          ]
        }
      },
      "/flowstable": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "FlowStable™",
        "description": "Estabilización de procesos industriales",
        "provider": organizationData,
        "serviceType": "Optimización de Procesos",
        "areaServed": "Argentina"
      },
      "/5splus": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "5S Plus™",
        "description": "Programa de orden, limpieza y estandarización",
        "provider": organizationData,
        "serviceType": "Organización Industrial",
        "areaServed": "Argentina"
      }
    };

    return pageSpecificData[location.pathname] || organizationData;
  };

  React.useEffect(() => {
    // Remover script anterior si existe
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Crear nuevo script con datos estructurados
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(getStructuredData());
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname]);

  return null;
};

export default StructuredData;