import React, { useEffect, useState } from "react";
import CTAButtons from "../CTAButtons";
import ScrollIndicator from "../ScrollIndicator";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const badgeText = (language: Language) => {
  switch (language) {
    case Language.ENGLISH:
      return "Start the improvement (Visible Problems, Team Focus)";
    case Language.PORTUGUESE:
      return "Iniciar a melhoria (Problemas Visíveis, Foco na Equipe)";
    case Language.SPANISH:
    default:
      return "Iniciar la mejora (Problemas Visibles, Foco en el Equipo)";
  }
};

const mainTitle = (language: Language) => {
  switch (language) {
    case Language.ENGLISH:
      return "Change Bridge™";
    case Language.PORTUGUESE:
      return "Change Bridge™";
    case Language.SPANISH:
    default:
      return "Change Bridge™";
  }
};

const subtitle = (language: Language) => {
  switch (language) {
    case Language.ENGLISH:
      return "Leading the transition";
    case Language.PORTUGUESE:
      return "Liderando a transição";
    case Language.SPANISH:
    default:
      return "Liderando la transición";
  }
};

// const paragraph1 = (language: Language) => {
//   switch (language) {
//     case Language.ENGLISH:
//       return `Change Bridge™ is a practical and structured program that helps companies manage change in an orderly and participative way, ensuring that teams understand, adopt, and sustain the transformations needed for business evolution.`;
//     case Language.PORTUGUESE:
//       return `Change Bridge™ é um programa prático e estruturado que ajuda as empresas a gerenciar mudanças de forma ordenada e participativa, garantindo que as equipes entendam, adotem e sustentem as transformações necessárias para a evolução do negócio.`;
//     case Language.SPANISH:
//     default:
//       return `Change Bridge™ es un programa práctico y estructurado que ayuda a las empresas a gestionar cambios de forma ordenada y participativa, asegurando que los equipos entiendan, adopten y sostengan las transformaciones necesarias para la evolución del negocio.`;
//   }
// };

const paragraph2 = (language: Language) => {
  switch (language) {
    case Language.ENGLISH:
      return "It is designed for projects involving process changes, organizational structure, implementation of new systems, or strategic adjustments that require alignment and action across the entire organization.";
    case Language.PORTUGUESE:
      return "É projetado para projetos de mudanças em processos, estrutura organizacional, implementação de novos sistemas ou ajustes estratégicos que exijam alinhamento e ação de toda a organização.";
    case Language.SPANISH:
    default:
      return "Está diseñado para proyectos de cambios en procesos, estructura organizacional, implementación de nuevos sistemas o ajustes estratégicos que requieran alineamiento y acción de toda la organización.";
  }
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("changeBridge-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 transform rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
          <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mr-2 animate-pulse"></div>
          {badgeText(currentLanguage)}
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">{mainTitle(currentLanguage)}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {subtitle(currentLanguage)}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {/* {paragraph1(currentLanguage)} */}
        </p>
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {paragraph2(currentLanguage)}
        </p>

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href = "assets/pdf/LYS-P013-ChangeBridge.pdf";
            link.download = "LYS-P013-ChangeBridge.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator scrollToContent={scrollToContent} />
    </section>
  );
};

export default HeroSection;
