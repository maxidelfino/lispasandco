import type React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection5S from "../components/FiveSPlus/HeroSection5S";
import { useScrollToTop } from "../hooks/useScrollToTop";
import FiveSCircularDiagram from "../components/FiveSPlus/FiveSCircularDiagram";
import FiveSPlusContent from "../components/FiveSPlus/FiveSPlusContent";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
const FiveSPlusPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection5S />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <FiveSPlusContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <FiveSCircularDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title="¿Listo para transformar tu espacio de trabajo?"
        description="Implementa 5S Plus™ y construye la base sólida para una cultura operativa de excelencia"
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "/assets/pdf/LYS-P008-5S-PLUS.pdf";
          link.download = "LYS-P008-5S-PLUS.pdf";
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

export default FiveSPlusPage;
