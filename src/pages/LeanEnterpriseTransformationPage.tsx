import type React from "react";
import HeroSectionLeanEnterprise from "../components/LeanEnterprise/HeroSectionLeanEnterprise";
import LeanEnterpriseContent from "../components/LeanEnterprise/LeanEnterpriseContent";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import LeanEnterpriseIcon from "../icons-componets/LeanEnterprise/LeanEnterpriseIcon";
import CTASection from "../components/CTASection";

const LeanEnterpriseTransformationPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionLeanEnterprise />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <LeanEnterpriseContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2 mt-20">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo transformar tu empresa con un sistema integral de
              mejora continua
            </p>
          </div>
          <LeanEnterpriseIcon />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title="¿Listo para convertir la mejora continua en tu ventaja competitiva?"
        description="Implanta Lean Enterprise Transformation™ y despliega un sistema de gestión integral que alinea cultura, procesos y resultados; impulsa eficiencia, visibilidad y crecimiento sostenible en toda tu organización."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        // onSecondaryClick={() => console.log("Descargar clicked")}
        // className="mb-32"
      />
      {/* <section className="my-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para convertir la mejora continua en tu ventaja
              competitiva?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Implanta Lean Enterprise Transformation™ y despliega un sistema de
              gestión integral que alinea cultura, procesos y resultados;
              impulsa eficiencia, visibilidad y crecimiento sostenible en toda
              tu organización.
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

export default LeanEnterpriseTransformationPage;
