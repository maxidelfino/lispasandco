import type React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import HeroSectionLeanBridge from "../components/LeanBridge/HeroSectionLeanBridge";
import LeanBridgeContent from "../components/LeanBridge/LeanBridgeContent";
import BridgeDiagram from "../icons-componets/LeanBridge/BridgeDiagram";
import FloatingNavigation from "../components/FloatingNavigation";
import CTASection from "../components/CTASection";

const LeanBridgePage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionLeanBridge />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <LeanBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 h-full m-auto">
          <BridgeDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title="¿Listo para llevar tu operación al siguiente nivel?"
        description={[
          "Con LeanBridge™ vas a implementar un puente sólido entre tu situación actual y tus metas estratégicas.",
          "Empoderarás a tu equipo para resolver problemas en el origen, liberarás a la supervisión para enfocarse en iniciativas de alto impacto y consolidarás una cultura sostenible de mejora continua y eficiencia.",
        ]}
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P005-LeanBridge.pdf";
          link.download = "LYS-P005-LeanBridge.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        // className="mb-32"
      />
    </div>
  );
};

export default LeanBridgePage;
