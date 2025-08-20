import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/MeasureBridge/HeroSection";
import MeasureBridgeContent from "../components/MeasureBridge/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import MeasureBridgeDiagram from "../components/MeasureBridge/MeasureBridgeDiagram";

const MeasureBridgePage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <MeasureBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          {/* MeasureBridge Circular Diagram */}
          <MeasureBridgeDiagram />
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title="¿Quieres medir y cerrar las brechas de desempeño en tu operación?"
        description="Descubre cómo MeasureBridge™ te permite identificar, cuantificar y eliminar las pérdidas ocultas en tus procesos, facilitando la toma de decisiones basada en datos y el logro de una operación más eficiente y rentable."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P015-MeasureBridge.pdf";
          link.download = "LYS-P015-MeasureBridge.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default MeasureBridgePage;
