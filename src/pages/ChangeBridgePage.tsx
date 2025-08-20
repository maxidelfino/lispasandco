import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/ChangeBridge/HeroSection";
import ChangeBridgeContent from "../components/ChangeBridge/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import ChangeBridgeDiagram from "../assets/ChangeBridgeDiagram.png";

const ChangeBridgePage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <ChangeBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2 pt-16">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-2">
              Change Bridge™: Proceso de Gestión del Cambio
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)] mb-8">
              El modelo Change Bridge™ acompaña proyectos de cambio
              organizacional a través de un enfoque estructurado en 4 fases
              clave.
            </p>
            <img
              src={ChangeBridgeDiagram}
              alt="Diagrama del Proceso Change Bridge"
              className="w-full h-auto rounded-lg shadow-lg border border-[var(--color-border)]"
            />
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title="Change Bridge™"
        description="Acompañamos proyectos de cambio (procesos, estructura y sistemas) con un enfoque práctico de 8–12 semanas que combina workshops, coaching y seguimiento estructurado para reducir resistencias, alinear equipos y garantizar la adopción y sostenibilidad de las transformaciones."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P013-ChangeBridge.pdf";
          link.download = "LYS-P013-ChangeBridge.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default ChangeBridgePage;
