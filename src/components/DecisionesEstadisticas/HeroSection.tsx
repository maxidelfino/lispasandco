import React, { useEffect, useState } from "react";
import CTAButtons from "../CTAButtons";
import ScrollIndicator from "../ScrollIndicator";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
  Language,
  {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Estabilizar y profesionalizar (Procesos, Métricas, Liderazgo)",
    title: "Decisiones Gerenciales Basadas en Estadísticas™",
    subtitle:
      "Profesionaliza la gestión y mejora continua con datos confiables",
    description:
      "Programa práctico para tomar decisiones basadas en datos, profesionalizar la gestión y sostener mejoras en los procesos clave de la organización.",
    pdfHref:
      "assets/pdf/LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
    pdfDownload: "LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
  },
  en: {
    badge: "Stabilize and professionalize (Processes, Metrics, Leadership)",
    title: "Management Decisions Based on Statistics™",
    subtitle:
      "Professionalize management and continuous improvement with reliable data",
    description:
      "Practical program to make data-driven decisions, professionalize management, and sustain improvements in the organization's key processes.",
    pdfHref:
      "assets/pdf/LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
    pdfDownload: "LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
  },
  pt: {
    badge: "Estabilizar e profissionalizar (Processos, Métricas, Liderança)",
    title: "Decisões Gerenciais Baseadas em Estatísticas™",
    subtitle:
      "Profissionalize a gestão e a melhoria contínua com dados confiáveis",
    description:
      "Programa prático para tomar decisões baseadas em dados, profissionalizar a gestão e sustentar melhorias nos processos-chave da organização.",
    pdfHref:
      "assets/pdf/LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
    pdfDownload: "LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
  },
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("decisionesEstadisticas-content");
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
          <span className="block">{t.title}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.subtitle}
          </span>
        </h1>

        {/* Descripción mejorada basada en el procedimiento LYS-P004 */}
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href =
              "assets/pdf/LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf";
            link.download =
              "LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf";
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
