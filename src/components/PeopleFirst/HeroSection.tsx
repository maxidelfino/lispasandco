"use client";

import type React from "react";
import { useEffect, useState } from "react";
import CTAButtons from "../CTAButtons";
import ScrollIndicator from "../ScrollIndicator";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const TEXTS: Record<
  Language,
  {
    badge: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    desc1: string;
    desc2: string;
  }
> = {
  es: {
    badge:
      "Áreas desconectadas – Estrategias confusas – Prioridades desconocidas",
    title: "People First™",
    subtitle1: "Personas primero, resultados sostenibles.",
    subtitle2: "Procesos estables, equipos alineados.",
    desc1:
      "<strong>People First™</strong> es la metodología de <strong>LYSPAS & CO</strong> que transforma la gestión operativa, alineando personas, procesos y resultados.",
    desc2:
      "Logra mayor eficiencia y productividad sin inversiones adicionales, enfocando a tu equipo en la mejora continua y la estabilidad de los procesos.",
  },
  en: {
    badge: "Disconnected areas – Confusing strategies – Unknown priorities",
    title: "People First™",
    subtitle1: "People first, sustainable results.",
    subtitle2: "Stable processes, aligned teams.",
    desc1:
      "<strong>People First™</strong> is the <strong>LYSPAS & CO</strong> methodology that transforms operational management, aligning people, processes, and results.",
    desc2:
      "Achieve greater efficiency and productivity without additional investments, focusing your team on continuous improvement and process stability.",
  },
  pt: {
    badge:
      "Áreas desconectadas – Estratégias confusas – Prioridades desconhecidas",
    title: "People First™",
    subtitle1: "Pessoas em primeiro lugar, resultados sustentáveis.",
    subtitle2: "Processos estáveis, equipes alinhadas.",
    desc1:
      "<strong>People First™</strong> é a metodologia da <strong>LYSPAS & CO</strong> que transforma a gestão operacional, alinhando pessoas, processos e resultados.",
    desc2:
      "Alcance maior eficiência e produtividade sem investimentos adicionais, focando sua equipe na melhoria contínua e na estabilidade dos processos.",
  },
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("PeopleFirst-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-8 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-32 h-6 bg-white/5 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-24 h-4 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-36 h-6 bg-white/5 rounded-full animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-28 h-5 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
          <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mr-2 animate-pulse"></div>
          {t.badge}
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">{t.title}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.subtitle1}
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80">
            {t.subtitle2}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.desc1 }}
        ></p>
        <p
          className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.desc2 }}
        ></p>

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href = "assets/pdf/LYS-P014-People-First.pdf";
            link.download = "LYS-P014-People-First.pdf";
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
