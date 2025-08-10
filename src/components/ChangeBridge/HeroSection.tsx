import React, { useEffect, useState } from "react";
import CTAButtons from "../CTAButtons";
import ScrollIndicator from "../ScrollIndicator";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          Iniciar la mejora (Problemas Visibles, Foco en el Equipo)
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Change Bridge™</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            Preparar, alinear y sostener transformaciones organizacionales
          </span>
          {/* <span className="block text-3xl md:text-4xl font-normal text-white/80">
          </span> */}
        </h1>

        {/* Subtitle */}
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Change Bridge™ es un programa práctico y estructurado que ayuda a las
          empresas a gestionar cambios de forma ordenada y participativa,
          asegurando que los equipos entiendan, adopten y sostengan las
          transformaciones necesarias para la evolución del negocio.
        </p>
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Diseñado para proyectos de procesos, cambios organizacionales o
          implementación de sistemas, combina workshops, coaching y seguimiento
          estructurado para minimizar resistencias, generar compromiso y obtener
          resultados sostenibles en 8–12 semanas.
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
