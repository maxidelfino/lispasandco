import type React from "react";
import HeroSectionKaizenAction from "../components/KaizenAction/HeroSectionKaizenAction";
import KaizenActionDiagram from "../components/KaizenAction/KaizenActionDiagram";
import KaizenActionContent from "../components/KaizenAction/KaizenActionContent";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";

const KaizenActionPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionKaizenAction />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <KaizenActionContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          {/* DMAIC Diagram Section */}
          <div className="max-w-6xl mx-auto px-4 mt-40">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
                Metodología DMAIC
              </h2>
              <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
                Ciclo estructurado de mejora continua para resolver problemas
                complejos
              </p>
            </div>
            <KaizenActionDiagram />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title="¿Listo para impulsar tu cambio?"
        description="Transforma tus problemas más complejos en oportunidades de mejora con KAIZEN ACTION™"
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P006-Kaizen-Action.pdf";
          link.download = "LYS-P006-Kaizen-Action.pdf";
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

export default KaizenActionPage;
