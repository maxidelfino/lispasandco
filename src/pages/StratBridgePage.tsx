import type React from "react";
import HeroSectionStratBridge from "../components/StratBridge/HeroSectionStratBridge";
import StratBridgeContent from "../components/StratBridge/StratBridgeContent";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import StratBridgeIcon from "../icons-componets/StratBridge/StratBridgeIcon";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const TEXTS: Record<
  Language,
  {
    diagramTitle: string;
    diagramDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    primaryButton: string;
    secondaryButton: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    diagramTitle: "Planificación Estratégica Integral",
    diagramDesc:
      "Transforma tu visión en acciones concretas y resultados medibles",
    ctaTitle: "¿Listo para alinear tu estrategia?",
    ctaDesc:
      "Implementa StratBridge™ y transforma tu visión en resultados concretos y sostenibles.",
    primaryButton: "Contactar Ahora",
    secondaryButton: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P007-StratBridge.pdf",
    pdfDownload: "LYS-P007-StratBridge.pdf",
  },
  en: {
    diagramTitle: "Comprehensive Strategic Planning",
    diagramDesc:
      "Turn your vision into concrete actions and measurable results",
    ctaTitle: "Ready to align your strategy?",
    ctaDesc:
      "Implement StratBridge™ and turn your vision into concrete and sustainable results.",
    primaryButton: "Contact Now",
    secondaryButton: "Download Data Sheet",
    pdfHref: "assets/pdf/LYS-P107-StratBridge.pdf",
    pdfDownload: "LYS-P107-StratBridge.pdf",
  },
  pt: {
    diagramTitle: "Planejamento Estratégico Integral",
    diagramDesc:
      "Transforme sua visão em ações concretas e resultados mensuráveis",
    ctaTitle: "Pronto para alinhar sua estratégia?",
    ctaDesc:
      "Implemente o StratBridge™ e transforme sua visão em resultados concretos e sustentáveis.",
    primaryButton: "Entrar em Contato",
    secondaryButton: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P207-StratBridge.pdf",
    pdfDownload: "LYS-P207-StratBridge.pdf",
  },
};

const StratBridgePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionStratBridge />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <StratBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2 mt-14">
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.diagramTitle}
            </h2>
            <p className="text-xl text-gray-600">{t.diagramDesc}</p>
          </div>
          <StratBridgeIcon />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title={t.ctaTitle}
        description={t.ctaDesc}
        primaryButtonText={t.primaryButton}
        secondaryButtonText={t.secondaryButton}
        onSecondaryClick={() => {
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

export default StratBridgePage;
