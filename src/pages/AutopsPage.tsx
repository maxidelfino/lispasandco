import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/Autops/HeroSection";
import AutopsContent from "../components/Autops/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useLanguage } from "../contexts/LanguageContext";
import AutopsContentDiagram from "../components/Autops/AutopsContentDiagram";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

const diagramTranslations = {
  es: "Visualiza el flujo inteligente de automatización y control en procesos industriales.",
  en: "Visualize the intelligent flow of automation and control in industrial processes.",
  pt: "Visualize o fluxo inteligente de automação e controle em processos industriais.",
};

const ctaTranslations = {
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

const AutopsPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();

  // Determine language key for translation objects
  let langKey: "es" | "en" | "pt" = "es";
  if (currentLanguage === "en") langKey = "en";
  else if (currentLanguage === "pt") langKey = "pt";

  const trackCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: "autoops",
      location: "autoops_page",
      label: "cta_descargar_ficha",
      cta_type: "download",
    });
  };

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

        <div className="w-full lg:w-1/2 order-2 flex flex-col items-center mt-32 relative">
          <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
            {diagramTranslations[langKey]}
          </p>
          {/* Diagrama destacado con fondo y animación sutil */}
          <div className="bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-accent)]/10 rounded-3xl shadow-2xl p-6 w-full flex justify-center items-center hover:scale-[1.02] transition-transform duration-300">
            <AutopsContentDiagram />
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title={ctaTranslations[langKey].title}
        description={ctaTranslations[langKey].description}
        primaryButtonText={ctaTranslations[langKey].primaryButtonText}
        secondaryButtonText={ctaTranslations[langKey].secondaryButtonText}
        onSecondaryClick={() => {
          trackCtaDownloadFicha();
          const link = document.createElement("a");
          link.href = "assets/pdf/LYS-P017-AutoOps.pdf";
          link.download = "LYS-P017-AutoOps.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default AutopsPage;
