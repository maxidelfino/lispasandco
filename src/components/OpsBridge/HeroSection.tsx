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
    title1: string;
    title2: string;
    title3: string;
    description: string;
  }
> = {
  es: {
    badge:
      "Áreas desconectadas – Estrategias confusas – Prioridades desconocidas",
    title1: "OpsBridge™ - World Class",
    title2: "Gestión visual, disciplina y mejora continua",
    title3: "para equipos operativos de clase mundial",
    description:
      "OpsBridge™ es un sistema integral que conecta personas, procesos y resultados a través de herramientas visuales, estándares claros y rutinas de gestión diaria. Facilita la alineación, el enfoque en prioridades y la resolución estructurada de problemas, impulsando una cultura operativa sólida y sostenible.",
  },
  en: {
    badge: "Disconnected areas – Confusing strategies – Unknown priorities",
    title1: "OpsBridge™ - World Class",
    title2: "Visual management, discipline and continuous improvement",
    title3: "for world-class operations teams",
    description:
      "OpsBridge™ is a comprehensive system that connects people, processes, and results through visual tools, clear standards, and daily management routines. It facilitates alignment, focus on priorities, and structured problem-solving, driving a strong and sustainable operational culture.",
  },
  pt: {
    badge:
      "Áreas desconectadas – Estratégias confusas – Prioridades desconhecidas",
    title1: "OpsBridge™ - World Class",
    title2: "Gestão visual, disciplina e melhoria contínua",
    title3: "para equipes operacionais de classe mundial",
    description:
      "OpsBridge™ é um sistema integral que conecta pessoas, processos e resultados por meio de ferramentas visuais, padrões claros e rotinas de gestão diária. Facilita o alinhamento, o foco em prioridades e a resolução estruturada de problemas, impulsionando uma cultura operacional sólida e sustentável.",
  },
};

const HeroSection5S: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("OpsBridge-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const t = TEXTS[currentLanguage];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* 5S themed geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-lg rotate-12 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-lg -rotate-12 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-white/5 rounded-lg animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-lg rotate-12 animate-bounce"
          style={{ animationDuration: "4s" }}
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
          <span className="block">{t.title1}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.title2}
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80">
            {t.title3}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href =
              "/assets/pdf/LYS-P009-OpsBridge–World-Class-Systems.pdf";
            link.download = "LYS-P009-OpsBridge–World-Class-Systems.pdf";
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

export default HeroSection5S;
