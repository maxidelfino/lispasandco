import React, { useEffect, useState } from "react";
import CTAButtons from "../CTAButtons";
import ScrollIndicator from "../ScrollIndicator";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const TEXTS: Record<
  Language,
  {
    badge: string;
    mainTitle: string;
    subtitle1: string;
    subtitle2: string;
    description1: string;
  }
> = {
  es: {
    badge: "Iniciar la mejora (Problemas Visibles, Foco en el Equipo)",
    mainTitle: "Process Design Bridge™",
    subtitle1: "",
    subtitle2: "",
    description1:
      "Diseñado para unir la ingeniería de procesos industriales con las prácticas de mejora continua.",
  },
  en: {
    badge: "Start improvement (Visible Problems, Team Focus)",
    mainTitle: "Process Design Bridge™",
    subtitle1: "",
    subtitle2: "",
    description1:
      "Designed to bridge industrial process engineering with continuous improvement practices.",
  },
  pt: {
    badge: "Iniciar a melhoria (Problemas Visíveis, Foco na Equipe)",
    mainTitle: "Process Design Bridge™",
    subtitle1: "",
    subtitle2: "",
    description1:
      "Projetado para unir a engenharia de processos industriais com as práticas de melhoria contínua.",
  },
};

const ProcessDesignBridgeHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("ProcessDesignBridge-content");
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
          {t.badge}
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">{t.mainTitle}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.subtitle1}
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80">
            {t.subtitle2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.description1}
        </p>
        {/* <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.description2}
        </p> */}

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href = "assets/pdf/LYS-P019-Process-Design-Bridge.pdf";
            link.download = "LYS-P019-Process-Design-Bridge.pdf";
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

export default ProcessDesignBridgeHero;
