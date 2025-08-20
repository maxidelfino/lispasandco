import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/WasteZero/HeroSection";
import CircularWasteDiagram from "../components/WasteZero/CircularWasteDiagram";
import WasteZeroContent from "../components/WasteZero/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import SEOHead from "../components/SEOHead";

const WasteZeroPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <SEOHead
        title="WasteZero™ - Eliminación de Desperdicios Lean | LYSPAS & CO"
        description="WasteZero™ - Programa Lean para identificar y eliminar los 8 desperdicios industriales. Metodología DMAIC, formación práctica, resultados visibles en 6 meses. Consultoría especializada LYSPAS & CO en Argentina."
        keywords="WasteZero, eliminación desperdicios, 8 desperdicios lean, metodología DMAIC, consultoría lean, reducción costos operativos, eficiencia procesos, mejora continua, desperdicios industriales, optimización procesos"
      />
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <WasteZeroContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <CircularWasteDiagram />
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title="¿Listo para eliminar los desperdicios ocultos de tu operación?"
        description="Implementa WasteZero™ y establece la base de disciplina operativa que impulsa mejoras continuas, eficiencia y resultados sostenibles."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P003-WASTEZERO.pdf";
          link.download = "LYS-P003-WASTEZERO.pdf";
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

export default WasteZeroPage;
