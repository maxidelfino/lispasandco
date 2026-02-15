import type React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection5S from "../components/FiveSPlus/HeroSection5S";
import { useScrollToTop } from "../hooks/useScrollToTop";
import FiveSCircularDiagram from "../components/FiveSPlus/FiveSCircularDiagram";
import FiveSPlusContent from "../components/FiveSPlus/FiveSPlusContent";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

const translations: Record<
  Language,
  {
    ctaTitle: string;
    ctaDescription: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    ctaTitle: "¿Listo para transformar tu espacio de trabajo?",
    ctaDescription:
      "Implementa 5S Plus™ y construye la base sólida para una cultura operativa de excelencia",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref: "/assets/pdf/LYS-P008-5S-PLUS.pdf",
    pdfDownload: "LYS-P008-5S-PLUS.pdf",
  },
  en: {
    ctaTitle: "Ready to transform your workspace?",
    ctaDescription:
      "Implement 5S Plus™ and build the solid foundation for a culture of operational excellence",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Data Sheet",
    pdfHref: "/assets/pdf/LYS-P108-5S-PLUS.pdf",
    pdfDownload: "LYS-P108-5S-PLUS.pdf",
  },
  pt: {
    ctaTitle: "Pronto para transformar seu espaço de trabalho?",
    ctaDescription:
      "Implemente o 5S Plus™ e construa a base sólida para uma cultura operacional de excelência",
    primaryButtonText: "Contatar Agora",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref: "/assets/pdf/LYS-P208-5S-PLUS.pdf",
    pdfDownload: "LYS-P208-5S-PLUS.pdf",
  },
};

const FiveSPlusPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = translations[lang];

  const trackCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: "5s-plus",
      location: "5splus_page",
      label: "cta_descargar_ficha",
      cta_type: "download",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection5S />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <FiveSPlusContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <FiveSCircularDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title={t.ctaTitle}
        description={t.ctaDescription}
        primaryButtonText={t.primaryButtonText}
        secondaryButtonText={t.secondaryButtonText}
        onSecondaryClick={() => {
          trackCtaDownloadFicha();
          const link = document.createElement("a");
          link.href = t.pdfHref;
          link.download = t.pdfDownload;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default FiveSPlusPage;
