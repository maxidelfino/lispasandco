"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSectionKaizenAction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("kaizen-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector("footer");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
          Estabilizar y profesionalizar (Procesos, Métricas, Liderazgo)
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">KAIZEN ACTION™</span>
          {/* <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            Soluciones inmediatas y colaborativas
          </span> */}
          {/* <span className="block text-3xl md:text-4xl font-normal text-white/80">para tus problemas más complejos</span> */}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium italic">
          Donde los puntos de vista se cruzan, nacen las soluciones que
          transforman
        </p>

        {/* <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          Un servicio de intervención directa para resolver problemas reales y complejos, utilizando la metodología
          KAIZEN con foco en acción inmediata, colaboración interdisciplinaria y resultados medibles.
        </p> */}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleContactClick}
            className="group bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
          >
            <span>Contactar</span>
          </button>
          <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] hover:scale-105 hover:shadow-2xl">
            Descargar Ficha Técnica
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-10 animate-bounce">
        <button
          onClick={scrollToContent}
          className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSectionKaizenAction;
