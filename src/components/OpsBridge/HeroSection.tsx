"use client";

import type React from "react";
import { useEffect, useState } from "react";
import CTAButtons from "../CTAButtons";
import ScrollIndicator from "../ScrollIndicator";

const HeroSection5S: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("OpsBridge-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
          Áreas desconectadas – Estrategias confusas – Prioridades desconocidas
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">OpsBridge™ - World Class</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            Gestión visual, disciplina y mejora continua
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80">
            para equipos operativos de clase mundial
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          OpsBridge™ es un sistema integral que conecta personas, procesos y
          resultados a través de herramientas visuales, estándares claros y
          rutinas de gestión diaria. Facilita la alineación, el enfoque en
          prioridades y la resolución estructurada de problemas, impulsando una
          cultura operativa sólida y sostenible.
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
