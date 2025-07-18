import type React from "react";
import HeroSectionStratBridge from "../components/StratBridge/HeroSectionStratBridge";
import StratBridgeContent from "../components/StratBridge/StratBridgeContent";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import StratBridgeIcon from "../icons-componets/StratBridge/StratBridgeIcon";
import CTASection from "../components/CTASection";

const StratBridgePage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionStratBridge />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <StratBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2 mt-14">
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planificación Estratégica Integral
            </h2>
            <p className="text-xl text-gray-600">
              Transforma tu visión en acciones concretas y resultados medibles
            </p>
          </div>
          <StratBridgeIcon />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title="¿Listo para alinear tu estrategia?"
        description="Implementa StratBridge™ y transforma tu visión en resultados concretos y sostenibles."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P007-StratBridge.pdf";
          link.download = "LYS-P007-StratBridge.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        // className="mb-32"
      />
    </div>
  );
};

export default StratBridgePage;
