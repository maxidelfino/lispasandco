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
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P002-Lean-enterprise-tranformation.pdf";
          link.download = "LYS-P002-Lean-enterprise-tranformation.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        // className="mb-32"
      />
    </div>
  );
};

export default LeanEnterpriseTransformationPage;
