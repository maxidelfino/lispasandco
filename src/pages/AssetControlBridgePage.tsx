import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/AssetBridge/HeroSection";
import AssetBridgeContent from "../components/AssetBridge/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import AssetBridgeDiagram from "../components/AssetBridge/AssetBridgeDiagram";

const AssetControlBridgePage: React.FC = () => {
  useScrollToTop();

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
        title="¿Listo para transformar el control de activos en tu operación?"
        description="Descubre cómo AssetBridge™ conecta y digitaliza la gestión de activos físicos, mejorando la trazabilidad, el control y la eficiencia en toda tu cadena de valor."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P016-AssetBridge.pdf";
          link.download = "LYS-P016-AssetBridge.pdf";
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
