import type React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSectionProjectFocus from "../components/ProjectFocus/HeroSectionProjectFocus";
import ProjectFocusContent from "../components/ProjectFocus/ProjectFocusContent";
import ProjectFocusDiagram from "../components/ProjectFocus/ProjectFocusDiagram";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";

const ProjectFocusPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionProjectFocus />

      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <ProjectFocusContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ProjectFocus™ en Detalle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo nuestra metodología transforma la selección de
              proyectos en tu organización
            </p>
          </div>
          <ProjectFocusDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title="¿Listo para priorizar tus proyectos estratégicos?"
        description="Implementa ProjectFocus™ y convierte tu planificación estratégica
              en un portafolio ejecutable de proyectos clave."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P010-Project-Focus.pdf";
          link.download = "LYS-P010-Project-Focus.pdf";
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

export default ProjectFocusPage;
