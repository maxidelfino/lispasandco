import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/OpsBridge/HeroSection";
import OpsBridgeContent from "../components/OpsBridge/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";

const OpsBridgePage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <OpsBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          {/* <CircularWasteDiagram /> */}
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title="Transforma tu operación con sistemas de clase mundial"
        description="Descubre cómo OpsBridge™ integra personas, procesos y tecnología para maximizar la eficiencia, reducir variabilidad y garantizar resultados sostenibles en toda tu organización."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P009-OpsBridge–World-Class-Systems.pdf";
          link.download = "LYS-P009-OpsBridge–World-Class-Systems.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default OpsBridgePage;
