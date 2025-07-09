import type React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import HeroSectionLeanBridge from "../components/LeanBridge/HeroSectionLeanBridge";
import LeanBridgeContent from "../components/LeanBridge/LeanBridgeContent";
import BridgeDiagram from "../icons-componets/LeanBridge/BridgeDiagram";
import FloatingNavigation from "../components/FloatingNavigation";

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
      <section className="my-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para llevar tu operación al siguiente nivel?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Con <strong>LeanBridge™</strong> vas a implementar un puente sólido entre tu
              situación actual y tus metas estratégicas.
            </p>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Empoderarás a tu equipo para resolver problemas en el origen,
              liberarás a la supervisión para enfocarse en iniciativas de alto
              impacto y consolidarás una cultura sostenible de mejora continua y
              eficiencia.
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
      </section>
    </div>
  );
};

export default LeanBridgePage;
