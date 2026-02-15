import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { Language } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import ProcessDesignBridgeHero from "../components/ProcessDesignBridge/ProcessDesignBridgeHero";
import ProcessDesignBridgeContent from "../components/ProcessDesignBridge/ProcessDesignBridgeContent";
import ProcessDesignBridgeDiagram from "../components/ProcessDesignBridge/ProcessDesignBridgeDiagram";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

const CTA_TRANSLATIONS: Record<
  Language,
  {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    title: "¿Listo para digitalizar el diseño de procesos en tu operación?",
    description:
      "Descubre cómo Process Design Bridge™ conecta el diseño y la ejecución de procesos, mejorando la trazabilidad, el control y la eficiencia en toda tu cadena de valor.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P019-Process-Design-Bridge.pdf",
    pdfDownload: "LYS-P019-Process-Design-Bridge.pdf",
  },
  en: {
    title: "Ready to digitize process design in your operation?",
    description:
      "Discover how Process Design Bridge™ connects process design and execution, improving traceability, control, and efficiency across your entire value chain.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Datasheet",
    pdfHref: "assets/pdf/LYS-P119-Process-Design-Bridge.pdf",
    pdfDownload: "LYS-P119-Process-Design-Bridge.pdf",
  },
  pt: {
    title: "Pronto para digitalizar o design de processos em sua operação?",
    description:
      "Descubra como o Process Design Bridge™ conecta o design e a execução de processos, melhorando a rastreabilidade, o controle e a eficiência em toda a sua cadeia de valor.",
    primaryButtonText: "Contatar Agora",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P219-Process-Design-Bridge.pdf",
    pdfDownload: "LYS-P219-Process-Design-Bridge.pdf",
  },
};

const ProcessDesignBridgePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang = (currentLanguage as Language) || "es";
  const t = CTA_TRANSLATIONS[lang];

  const trackCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: "process-design-bridge",
      location: "process_design_bridge_page",
      label: "cta_descargar_ficha",
      cta_type: "download",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <ProcessDesignBridgeHero />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <ProcessDesignBridgeContent />
        </div>
        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <ProcessDesignBridgeDiagram />
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

export default ProcessDesignBridgePage;
