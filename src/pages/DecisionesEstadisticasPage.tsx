import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import HeroSection from "../components/DecisionesEstadisticas/HeroSection";
import DecisionesEstadisticasContent from "../components/DecisionesEstadisticas/DecisionesEstadisticasContent";

const DecisionesEstadisticasPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <DecisionesEstadisticasContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          {/* <CircularWasteDiagram /> */}
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title="Toma de Decisiones Basadas en Estadísticas"
        description="Implementa un enfoque sistemático para la toma de decisiones fundamentadas en datos estadísticos, asegurando la mejora continua y la eficacia de los procesos dentro de la organización. Descubre cómo utilizar la información estadística para identificar oportunidades, resolver problemas y optimizar resultados."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href =
            "assets/pdf/LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf";
          link.download =
            "LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default DecisionesEstadisticasPage;
