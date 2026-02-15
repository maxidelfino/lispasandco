import type React from "react";
import HeroSectionKaizenAction from "../components/KaizenAction/HeroSectionKaizenAction";
import KaizenActionDiagram from "../components/KaizenAction/KaizenActionDiagram";
import KaizenActionContent from "../components/KaizenAction/KaizenActionContent";
import FloatingNavigation from "../components/FloatingNavigation";
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
    dmaicTitle: string;
    dmaicSubtitle: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    dmaicTitle: "Metodología DMAIC",
    dmaicSubtitle:
      "Ciclo estructurado de mejora continua para resolver problemas complejos",
    ctaTitle: "¿Listo para impulsar tu cambio?",
    ctaDescription:
      "Transforma tus problemas más complejos en oportunidades de mejora con KAIZEN ACTION™",
    ctaPrimary: "Contactar Ahora",
    ctaSecondary: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P006-Kaizen-Action.pdf",
    pdfDownload: "LYS-P006-Kaizen-Action.pdf",
  },
  en: {
    dmaicTitle: "DMAIC Methodology",
    dmaicSubtitle:
      "Structured continuous improvement cycle to solve complex problems",
    ctaTitle: "Ready to drive your change?",
    ctaDescription:
      "Turn your most complex problems into improvement opportunities with KAIZEN ACTION™",
    ctaPrimary: "Contact Now",
    ctaSecondary: "Download Brochure",
    pdfHref: "assets/pdf/LYS-P106-Kaizen-Action.pdf",
    pdfDownload: "LYS-P106-Kaizen-Action.pdf",
  },
  pt: {
    dmaicTitle: "Metodologia DMAIC",
    dmaicSubtitle:
      "Ciclo estruturado de melhoria contínua para resolver problemas complexos",
    ctaTitle: "Pronto para impulsionar sua mudança?",
    ctaDescription:
      "Transforme seus problemas mais complexos em oportunidades de melhoria com KAIZEN ACTION™",
    ctaPrimary: "Entrar em Contato",
    ctaSecondary: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P206-Kaizen-Action.pdf",
    pdfDownload: "LYS-P206-Kaizen-Action.pdf",
  },
};

const KaizenActionPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = translations[lang];

  const trackCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: "kaizen-action",
      location: "kaizen_action_page",
      label: "cta_descargar_ficha",
      cta_type: "download",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionKaizenAction />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <KaizenActionContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          {/* DMAIC Diagram Section */}
          <div className="max-w-6xl mx-auto px-4 mt-40">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
                {t.dmaicTitle}
              </h2>
              <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
                {t.dmaicSubtitle}
              </p>
            </div>
            <KaizenActionDiagram />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title={t.ctaTitle}
        description={t.ctaDescription}
        primaryButtonText={t.ctaPrimary}
        secondaryButtonText={t.ctaSecondary}
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

export default KaizenActionPage;
