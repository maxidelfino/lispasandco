import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSectionFlowStable from "../components/FlowStable/HeroSectionFlowStable";
import FlowStableContent from "../components/FlowStable/FlowStableContent";
import FlowStableDiagram from "../components/FlowStable/FlowStableDiagram";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";

const FlowStablePage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionFlowStable />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <FlowStableContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <FlowStableDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title="¿Listo para dominar tus procesos y mejorar tus resultados?"
        description="Implementa FlowStable™ y construye procesos estables y previsibles que generen mejores promedios, mayor control y más productividad."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "/assets/pdf/LYS-P001-FlowStable.pdf";
          link.download = "LYS-P001-FlowStable.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        // className="mb-32"
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default FlowStablePage;
