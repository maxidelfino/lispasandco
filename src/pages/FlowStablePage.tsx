import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSectionFlowStable from "../components/FlowStable/HeroSectionFlowStable";
import FlowStableContent from "../components/FlowStable/FlowStableContent";
import FlowStableDiagram from "../components/FlowStable/FlowStableDiagram";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";

const FlowStablePage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionFlowStable />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <FlowStableContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <FlowStableDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title="¿Listo para dominar tus procesos y mejorar tus resultados?"
        description="Implementa FlowStable™ y construye procesos estables y previsibles que generen mejores promedios, mayor control y más productividad."
        primaryButtonText="Contactar Ahora"
        secondaryButtonText="Descargar Ficha Técnica"
        // onSecondaryClick={() => console.log("Descargar clicked")}
        // className="mb-32"
      />

      {/* <section className="my-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para dominar tus procesos y mejorar tus resultados?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Implementa FlowStable™ y construye procesos estables y previsibles
              que generen mejores promedios, mayor control y más productividad.
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

export default FlowStablePage;
