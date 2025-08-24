"use client";

import type React from "react";
import { useEffect, useState } from "react";
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
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Transformar la organización (Alinear estrategia con ejecución)",
    title: "Lean Enterprise Transformation™",
    subtitle: "La mejora continua como sistema de gestión integral",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation.pdf",
  },
  en: {
    badge: "Transform the organization (Align strategy with execution)",
    title: "Lean Enterprise Transformation™",
    subtitle: "Continuous improvement as a comprehensive management system",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation-EN.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation-EN.pdf",
  },
  pt: {
    badge: "Transformar a organização (Alinhar estratégia com execução)",
    title: "Lean Enterprise Transformation™",
    subtitle: "A melhoria contínua como sistema de gestão integrado",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation-PT.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation-PT.pdf",
  },
};

const HeroSectionLeanEnterprise: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("LeanEnterprise-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
        <div className="absolute inset-0 bg-black/20"></div>
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
          <span className="block">{t.title}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href = "assets/pdf/LYS-P002-Lean-enterprise-tranformation.pdf";
            link.download = "LYS-P002-Lean-enterprise-tranformation.pdf";
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

export default HeroSectionLeanEnterprise;
