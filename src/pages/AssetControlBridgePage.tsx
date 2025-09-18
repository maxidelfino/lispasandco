import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/AssetBridge/HeroSection";
import AssetBridgeContent from "../components/AssetBridge/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import AssetBridgeDiagram from "../components/AssetBridge/AssetBridgeDiagram";
import { Language } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

const AssetControlBridgePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();

  const ctaTranslations = {
    title: {
      [Language.SPANISH]:
        "¿Listo para transformar el control de activos en tu operación?",
      [Language.ENGLISH]: "Ready to transform asset control in your operation?",
      [Language.PORTUGUESE]:
        "Pronto para transformar o controle de ativos em sua operação?",
    },
    description: {
      [Language.SPANISH]:
        "Descubre cómo AssetBridge™ conecta y digitaliza la gestión de activos físicos, mejorando la trazabilidad, el control y la eficiencia en toda tu cadena de valor.",
      [Language.ENGLISH]:
        "Discover how AssetBridge™ connects and digitizes the management of physical assets, improving traceability, control, and efficiency across your entire value chain.",
      [Language.PORTUGUESE]:
        "Descubra como o AssetBridge™ conecta e digitaliza a gestão de ativos físicos, melhorando a rastreabilidade, o controle e a eficiência em toda a sua cadeia de valor.",
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
    pdfHref: {
      [Language.SPANISH]: "assets/pdf/LYS-P016-AssetBridge.pdf",
      [Language.ENGLISH]: "assets/pdf/LYS-P116-AssetBridge.pdf",
      [Language.PORTUGUESE]: "assets/pdf/LYS-P216-AssetBridge.pdf",
    },
    pdfDownload: {
      [Language.SPANISH]: "LYS-P016-AssetBridge.pdf",
      [Language.ENGLISH]: "LYS-P116-AssetBridge.pdf",
      [Language.PORTUGUESE]: "LYS-P216-AssetBridge.pdf",
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <AssetBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <AssetBridgeDiagram />
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
          link.href = ctaTranslations.pdfHref[currentLanguage];
          link.download = ctaTranslations.pdfDownload[currentLanguage];
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />
      <FloatingWhatsAppCTA />
    </div>
  );
};

export default AssetControlBridgePage;
