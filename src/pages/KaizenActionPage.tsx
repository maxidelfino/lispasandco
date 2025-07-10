import type React from "react";
import HeroSectionKaizenAction from "../components/KaizenAction/HeroSectionKaizenAction";
import KaizenActionDiagram from "../components/KaizenAction/KaizenActionDiagram";
import KaizenActionContent from "../components/KaizenAction/KaizenActionContent";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";

const KaizenActionPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionKaizenAction />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
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
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para impulsar tu cambio?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transforma tus problemas más complejos en oportunidades de mejora
              con KAIZEN ACTION™
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

export default KaizenActionPage;
