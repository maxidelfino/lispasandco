import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { Language } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import ProcessDesignBridgeHero from "../components/ProcessDesignBridge/ProcessDesignBridgeHero";
import ProcessDesignBridgeContent from "../components/ProcessDesignBridge/ProcessDesignBridgeContent";

const ProcessDesignBridgePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();

  const ctaTranslations = {
    title: {
      [Language.SPANISH]:
        "¿Listo para digitalizar el diseño de procesos en tu operación?",
      [Language.ENGLISH]: "Ready to digitize process design in your operation?",
      [Language.PORTUGUESE]:
        "Pronto para digitalizar o design de processos em sua operação?",
    },
    description: {
      [Language.SPANISH]:
        "Descubre cómo Process Design Bridge™ conecta el diseño y la ejecución de procesos, mejorando la trazabilidad, el control y la eficiencia en toda tu cadena de valor.",
      [Language.ENGLISH]:
        "Discover how Process Design Bridge™ connects process design and execution, improving traceability, control, and efficiency across your entire value chain.",
      [Language.PORTUGUESE]:
        "Descubra como o Process Design Bridge™ conecta o design e a execução de processos, melhorando a rastreabilidade, o controle e a eficiência em toda a sua cadeia de valor.",
    },
    primaryButtonText: {
      [Language.SPANISH]: "Contactar Ahora",
      [Language.ENGLISH]: "Contact Now",
      [Language.PORTUGUESE]: "Contatar Agora",
    },
    secondaryButtonText: {
      [Language.SPANISH]: "Descargar Ficha Técnica",
      [Language.ENGLISH]: "Download Datasheet",
      [Language.PORTUGUESE]: "Baixar Ficha Técnica",
    },
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
          {/* <ProcessDesignBridgeDiagram /> */}
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title={ctaTranslations.title[currentLanguage]}
        description={ctaTranslations.description[currentLanguage]}
        primaryButtonText={ctaTranslations.primaryButtonText[currentLanguage]}
        secondaryButtonText={
          ctaTranslations.secondaryButtonText[currentLanguage]
        }
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P019-Process-Design-Bridge.pdf";
          link.download = "LYS-P019-Process-Design-Bridge.pdf";
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
