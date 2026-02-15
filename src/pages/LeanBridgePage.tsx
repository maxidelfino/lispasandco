import type React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import HeroSectionLeanBridge from "../components/LeanBridge/HeroSectionLeanBridge";
import LeanBridgeContent from "../components/LeanBridge/LeanBridgeContent";
import BridgeDiagram from "../icons-componets/LeanBridge/BridgeDiagram";
import FloatingNavigation from "../components/FloatingNavigation";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

const ctaTranslations: Record<
  Language,
  {
    title: string;
    description: string[];
    primaryButtonText: string;
    secondaryButtonText: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    title: "¿Listo para llevar tu operación al siguiente nivel?",
    description: [
      "Con LeanBridge™ vas a implementar un puente sólido entre tu situación actual y tus metas estratégicas.",
      "Empoderarás a tu equipo para resolver problemas en el origen, liberarás a la supervisión para enfocarse en iniciativas de alto impacto y consolidarás una cultura sostenible de mejora continua y eficiencia.",
    ],
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P005-LeanBridge.pdf",
    pdfDownload: "LYS-P005-LeanBridge.pdf",
  },
  en: {
    title: "Ready to take your operation to the next level?",
    description: [
      "With LeanBridge™ you will implement a solid bridge between your current situation and your strategic goals.",
      "You will empower your team to solve problems at the source, free up supervision to focus on high-impact initiatives, and consolidate a sustainable culture of continuous improvement and efficiency.",
    ],
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Brochure",
    pdfHref: "assets/pdf/LYS-P105-LeanBridge.pdf",
    pdfDownload: "LYS-P105-LeanBridge.pdf",
  },
  pt: {
    title: "Pronto para levar sua operação ao próximo nível?",
    description: [
      "Com o LeanBridge™ você implementará uma ponte sólida entre sua situação atual e suas metas estratégicas.",
      "Você capacitará sua equipe para resolver problemas na origem, liberará a supervisão para focar em iniciativas de alto impacto e consolidará uma cultura sustentável de melhoria contínua e eficiência.",
    ],
    primaryButtonText: "Entrar em Contato",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P205-LeanBridge.pdf",
    pdfDownload: "LYS-P205-LeanBridge.pdf",
  },
};

const LeanBridgePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const t = ctaTranslations[currentLanguage];

  const trackCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: "leanbridge",
      location: "leanbridge_page",
      label: "cta_descargar_ficha",
      cta_type: "download",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionLeanBridge />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <LeanBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 h-full m-auto">
          <BridgeDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title={t.title}
        description={t.description}
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

export default LeanBridgePage;
