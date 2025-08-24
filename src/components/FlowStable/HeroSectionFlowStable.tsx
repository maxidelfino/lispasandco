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
    mainTitle: React.ReactNode;
    subtitles: React.ReactNode[];
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Estabilizar y profesionalizar (Procesos, Métricas, Liderazgo)",
    mainTitle: (
      <>
        <span className="block">FlowStable™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          Domina tus procesos.
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          Mejora tus resultados.
        </span>
      </>
    ),
    subtitles: [
      <>
        <strong>FlowStable™</strong> es el programa más recomendado por{" "}
        <strong>LYSPAS & CO</strong> para empresas que desean aumentar su
        producción o eficiencia <strong>sin invertir en activos fijos</strong>.
      </>,
      <>
        A través de un enfoque estructurado, cambia el foco de la operación: de
        perseguir récords diarios a construir procesos estables y previsibles,
        lo que permite alcanzar mejores promedios, mayor control y más
        productividad.
      </>,
    ],
    pdfHref: "/assets/pdf/LYS-P001-FlowStable.pdf",
    pdfDownload: "LYS-P001-FlowStable.pdf",
  },
  en: {
    badge: "Stabilize and professionalize (Processes, Metrics, Leadership)",
    mainTitle: (
      <>
        <span className="block">FlowStable™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          Master your processes.
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          Improve your results.
        </span>
      </>
    ),
    subtitles: [
      <>
        <strong>FlowStable™</strong> is the most recommended program by{" "}
        <strong>LYSPAS & CO</strong> for companies seeking to increase their
        production or efficiency{" "}
        <strong>without investing in fixed assets</strong>.
      </>,
      <>
        Through a structured approach, it shifts the operational focus: from
        chasing daily records to building stable and predictable processes,
        enabling better averages, more control, and higher productivity.
      </>,
    ],
    pdfHref: "/assets/pdf/LYS-P001-FlowStable-EN.pdf",
    pdfDownload: "LYS-P001-FlowStable-EN.pdf",
  },
  pt: {
    badge: "Estabilizar e profissionalizar (Processos, Métricas, Liderança)",
    mainTitle: (
      <>
        <span className="block">FlowStable™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          Domine seus processos.
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          Melhore seus resultados.
        </span>
      </>
    ),
    subtitles: [
      <>
        <strong>FlowStable™</strong> é o programa mais recomendado pela{" "}
        <strong>LYSPAS & CO</strong> para empresas que desejam aumentar sua
        produção ou eficiência <strong>sem investir em ativos fixos</strong>.
      </>,
      <>
        Por meio de uma abordagem estruturada, muda o foco da operação: de
        perseguir recordes diários para construir processos estáveis e
        previsíveis, permitindo melhores médias, mais controle e maior
        produtividade.
      </>,
    ],
    pdfHref: "/assets/pdf/LYS-P001-FlowStable-PT.pdf",
    pdfDownload: "LYS-P001-FlowStable-PT.pdf",
  },
};

const HeroSectionFlowStable: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

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
          {t.badge}
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {t.mainTitle}
        </h1>

        {/* Subtitles */}
        {t.subtitles.map((subtitle, idx) => (
          <p
            key={idx}
            className="hidden lg:block text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </p>
        ))}

        {/* CTA Buttons */}
        <CTAButtons
          onDownload={() => {
            const link = document.createElement("a");
            link.href = t.pdfHref;
            link.download = t.pdfDownload;
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
