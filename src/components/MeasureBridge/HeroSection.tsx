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
    description1: string;
    description2: string;
    description3: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Perfeccionar la operación",
    title: "MeasureBridge™",
    subtitle: "Medición y gestión de desempeño operacional",
    description1:
      "MeasureBridge es una metodología para la medición, análisis y gestión de indicadores clave de desempeño (KPIs) en procesos operativos, permitiendo identificar brechas, causas raíz y oportunidades de mejora.",
    description2:
      "A través de herramientas visuales y trabajo colaborativo, ayuda a equipos a construir puentes entre la situación actual y los objetivos de negocio, facilitando la toma de decisiones basada en datos y la mejora continua.",
    description3:
      "Incluye: definición de KPIs, diseño de tableros visuales, rutinas de gestión, análisis de brechas y soporte en la ejecución de acciones correctivas.",
    pdfHref: "assets/pdf/LYS-P015-MeasureBridge.pdf",
    pdfDownload: "LYS-P015-MeasureBridge.pdf",
  },
  en: {
    badge: "Perfect the operation",
    title: "MeasureBridge™",
    subtitle: "Measurement and management of operational performance",
    description1:
      "MeasureBridge is a methodology for measuring, analyzing, and managing key performance indicators (KPIs) in operational processes, enabling the identification of gaps, root causes, and improvement opportunities.",
    description2:
      "Through visual tools and collaborative work, it helps teams build bridges between the current situation and business objectives, facilitating data-driven decision-making and continuous improvement.",
    description3:
      "Includes: KPI definition, visual dashboard design, management routines, gap analysis, and support in the execution of corrective actions.",
    pdfHref: "assets/pdf/LYS-P015-MeasureBridge-EN.pdf",
    pdfDownload: "LYS-P015-MeasureBridge-EN.pdf",
  },
  pt: {
    badge: "Aperfeiçoar a operação",
    title: "MeasureBridge™",
    subtitle: "Medição e gestão do desempenho operacional",
    description1:
      "MeasureBridge é uma metodologia para medição, análise e gestão de indicadores-chave de desempenho (KPIs) em processos operacionais, permitindo identificar lacunas, causas raiz e oportunidades de melhoria.",
    description2:
      "Por meio de ferramentas visuais e trabalho colaborativo, ajuda equipes a construir pontes entre a situação atual e os objetivos do negócio, facilitando a tomada de decisões baseada em dados e a melhoria contínua.",
    description3:
      "Inclui: definição de KPIs, design de painéis visuais, rotinas de gestão, análise de lacunas e suporte na execução de ações corretivas.",
    pdfHref: "assets/pdf/LYS-P015-MeasureBridge-PT.pdf",
    pdfDownload: "LYS-P015-MeasureBridge-PT.pdf",
  },
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage as Language];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("MeasureBridge-content");
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

        {/* Subtitle */}
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.description1}
        </p>
        <p className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.description2}
        </p>
        <p className="hidden lg:block text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.description3}
        </p>

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href = "assets/pdf/LYS-P015-MeasureBridge.pdf";
            link.download = "LYS-P015-MeasureBridge.pdf";
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
