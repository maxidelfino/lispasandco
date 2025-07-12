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
        // onSecondaryClick={() => console.log("Descargar clicked")}
        // className="mb-32"
      />

      {/* <section className="my-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para alinear tu estrategia?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Implementa StratBridge™ y transforma tu visión en resultados concretos y sostenibles.
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

export default StratBridgePage;
