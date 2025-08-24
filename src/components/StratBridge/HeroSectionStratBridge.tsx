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
    mainTitle: string;
    subtitle: string;
    description1: React.ReactNode;
    description2: React.ReactNode;
  }
> = {
  es: {
    badge: "Transformar la organización (alinear estrategia con ejecución)",
    mainTitle: "Planificación Estratégica en la Empresa",
    subtitle: "Alinear estrategia, personas y acciones",
    description1: (
      <>
        <strong>StratBridge™</strong> es el programa de{" "}
        <strong>planificación estratégica estructurada</strong> que ofrece
        LYSPAS & CO para acompañar a las organizaciones en la alineación real de
        sus objetivos de largo plazo con el trabajo diario de sus equipos.
      </>
    ),
    description2: (
      <>
        Basado en la metodología <strong>Hoshin Kanri</strong>, este sistema
        permite desplegar la <strong>VISIÓN Y MISIÓN</strong> institucional en
        acciones concretas, medibles y ejecutables, transformando intenciones
        estratégicas en resultados sostenibles.
      </>
    ),
  },
  en: {
    badge: "Transform the organization (align strategy with execution)",
    mainTitle: "Strategic Planning in the Company",
    subtitle: "Align strategy, people, and actions",
    description1: (
      <>
        <strong>StratBridge™</strong> is the{" "}
        <strong>structured strategic planning</strong> program offered by LYSPAS
        & CO to help organizations truly align their long-term goals with the
        daily work of their teams.
      </>
    ),
    description2: (
      <>
        Based on the <strong>Hoshin Kanri</strong> methodology, this system
        enables the deployment of the institutional{" "}
        <strong>VISION AND MISSION</strong> into concrete, measurable, and
        actionable steps, turning strategic intentions into sustainable results.
      </>
    ),
  },
  pt: {
    badge: "Transformar a organização (alinhar estratégia com execução)",
    mainTitle: "Planejamento Estratégico na Empresa",
    subtitle: "Alinhar estratégia, pessoas e ações",
    description1: (
      <>
        O <strong>StratBridge™</strong> é o programa de{" "}
        <strong>planejamento estratégico estruturado</strong> oferecido pela
        LYSPAS & CO para apoiar as organizações no alinhamento real de seus
        objetivos de longo prazo com o trabalho diário de suas equipes.
      </>
    ),
    description2: (
      <>
        Baseado na metodologia <strong>Hoshin Kanri</strong>, este sistema
        permite desdobrar a <strong>VISÃO E MISSÃO</strong> institucionais em
        ações concretas, mensuráveis e executáveis, transformando intenções
        estratégicas em resultados sustentáveis.
      </>
    ),
  },
};

const HeroSectionStratBridge: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("StratBridge-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* FlowStable themed geometric shapes */}
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
          <span className="block">StratBridge™</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.mainTitle}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.description1}
        </p>

        {/* Este párrafo solo en desktop */}
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.description2}
        </p>

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href = "assets/pdf/LYS-P007-StratBridge.pdf";
            link.download = "LYS-P007-StratBridge.pdf";
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

export default HeroSectionStratBridge;
