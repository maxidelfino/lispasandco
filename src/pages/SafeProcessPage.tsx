import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/SafeProcess/HeroSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
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
    ctaTitle: "¿Listo para construir una cultura de seguridad industrial?",
    ctaDescription:
      "Implementa Safe Process™ y asegura el cumplimiento normativo con procesos seguros y sostenibles.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P018-SafeProcess.pdf",
    pdfDownload: "LYS-P018-SafeProcess.pdf",
  },
  en: {
    ctaTitle: "Ready to build an industrial safety culture?",
    ctaDescription:
      "Implement Safe Process™ and ensure regulatory compliance with safe and sustainable processes.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Data Sheet",
    pdfHref: "assets/pdf/LYS-P118-SafeProcess.pdf",
    pdfDownload: "LYS-P118-SafeProcess.pdf",
  },
  pt: {
    ctaTitle: "Pronto para construir uma cultura de segurança industrial?",
    ctaDescription:
      "Implemente o Safe Process™ e garanta a conformidade regulatória com processos seguros e sustentáveis.",
    primaryButtonText: "Contatar Agora",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P218-SafeProcess.pdf",
    pdfDownload: "LYS-P218-SafeProcess.pdf",
  },
};

const SafeProcessPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || Language.SPANISH;
  const t = translations[lang];

  const trackCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: "safe-process",
      location: "safeprocess_page",
      label: "cta_descargar_ficha",
      cta_type: "download",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      <div id="safeprocess-content" className="container mx-auto py-20 px-4">
        {/* Content section placeholder */}
      </div>
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

export default SafeProcessPage;
