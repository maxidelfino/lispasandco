import type React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSectionProjectFocus from "../components/ProjectFocus/HeroSectionProjectFocus";
import ProjectFocusContent from "../components/ProjectFocus/ProjectFocusContent";
import ProjectFocusDiagram from "../components/ProjectFocus/ProjectFocusDiagram";
import CTASection from "../components/CTASection";

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
        // onSecondaryClick={() => console.log("Descargar clicked")}
        // className="mb-32"
      />

      {/* <section className="my-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para priorizar tus proyectos estratégicos?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Implementa ProjectFocus™ y convierte tu planificación estratégica
              en un portafolio ejecutable de proyectos clave.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl">
                Contactar Ahora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] hover:scale-105">
                Descargar Ficha Técnica
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ProjectFocusPage;
