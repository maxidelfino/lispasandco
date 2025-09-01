import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/Autops/HeroSection";
import AutopsContent from "../components/Autops/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useLanguage } from "../contexts/LanguageContext";

const AutopsPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <AutopsContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          {/* <CircularWasteDiagram /> */}
        </div>
      </div>
      {/* Call to Action */}
      {(() => {
        // Traducciones para ES, EN, PT
        const translations = {
          es: {
            title: "¿Quieres transformar tu operación con AutoOps™?",
            description:
              "Implementa AutoOps™ y lleva la automatización y la disciplina operativa de tu empresa al siguiente nivel. Optimiza procesos, reduce errores y maximiza la eficiencia con una solución diseñada para impulsar la mejora continua y resultados sostenibles.",
            primaryButtonText: "Contactar Ahora",
            secondaryButtonText: "Descargar Ficha Técnica",
          },
          en: {
            title: "Ready to transform your operation with AutoOps™?",
            description:
              "Implement AutoOps™ and take your company's automation and operational discipline to the next level. Optimize processes, reduce errors, and maximize efficiency with a solution designed to drive continuous improvement and sustainable results.",
            primaryButtonText: "Contact Now",
            secondaryButtonText: "Download Brochure",
          },
          pt: {
            title: "Quer transformar sua operação com AutoOps™?",
            description:
              "Implemente o AutoOps™ e leve a automação e a disciplina operacional da sua empresa para o próximo nível. Otimize processos, reduza erros e maximize a eficiência com uma solução projetada para impulsionar a melhoria contínua e resultados sustentáveis.",
            primaryButtonText: "Entrar em Contato",
            secondaryButtonText: "Baixar Ficha Técnica",
          },
        };

        // Hook para idioma
        const { currentLanguage } = useLanguage();
        // Mapeo de idioma
        const langKey =
          currentLanguage === "es"
            ? "es"
            : currentLanguage === "en"
            ? "en"
            : "pt";
        const t = translations[langKey];

        return (
          <CTASection
            title={t.title}
            description={t.description}
            primaryButtonText={t.primaryButtonText}
            secondaryButtonText={t.secondaryButtonText}
            onSecondaryClick={() => {
              const link = document.createElement("a");
              link.href = "assets/pdf/LYS-P017-AutoOps.pdf";
              link.download = "LYS-P017-AutoOps.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          />
        );
      })()}

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default AutopsPage;
