"use client";

import type React from "react";
import { useEffect, useState } from "react";
import CTAButtons from "../CTAButtons";
import ScrollIndicator from "../ScrollIndicator";

const HeroSectionFlowStable: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("flowstable-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* FlowStable themed geometric shapes - representing flow and stability */}
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
          Estabilizar y profesionalizar (Procesos, Métricas, Liderazgo)
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">FlowStable™</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            Domina tus procesos.
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80">
            Mejora tus resultados.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          <strong>FlowStable™</strong> es el programa más recomendado por{" "}
          <strong>LYSPAS & CO</strong> para empresas que desean aumentar su
          producción o eficiencia <strong>sin invertir en activos fijos</strong>
          .
        </p>
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          A través de un enfoque estructurado, cambia el foco de la operación:
          de perseguir récords diarios a construir procesos estables y
          previsibles, lo que permite alcanzar mejores promedios, mayor control
          y más productividad.
        </p>

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href = "/assets/pdf/LYS-P001-FlowStable.pdf";
            link.download = "LYS-P001-FlowStable.pdf";
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

export default HeroSectionFlowStable;
