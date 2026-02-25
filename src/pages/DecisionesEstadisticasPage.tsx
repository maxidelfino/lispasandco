import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import HeroSection from "../components/DecisionesEstadisticas/HeroSection";
import DecisionesEstadisticasContent from "../components/DecisionesEstadisticas/DecisionesEstadisticasContent";
import DecisionesEstadisticasDiagram from "../assets/DecisionesEstadisticasDiagram.png";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

const translations: Record<
  Language,
  {
    diagramTitle: string;
    diagramDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    pdfHref: string;
    pdfDownload: string;
    diagramAlt: string;
  }
> = {
  es: {
    diagramTitle: "Diagrama de Toma de Decisiones Basadas en Estadísticas",
    diagramDescription:
      "Proceso para tomar decisiones con datos: identificar, analizar, actuar y mejorar continuamente.",
    ctaTitle: "Toma de Decisiones Basadas en Estadísticas",
    ctaDescription:
      "Implementa un enfoque sistemático para la toma de decisiones fundamentadas en datos estadísticos, asegurando la mejora continua y la eficacia de los procesos dentro de la organización. Descubre cómo utilizar la información estadística para identificar oportunidades, resolver problemas y optimizar resultados.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref:
      "assets/pdf/LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
    pdfDownload: "LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
    diagramAlt: "Diagrama de Toma de Decisiones Basadas en Estadísticas",
  },
  en: {
    diagramTitle: "Statistical Decision-Making Diagram",
    diagramDescription:
      "Process for making data-driven decisions: identify, analyze, act, and continuously improve.",
    ctaTitle: "Statistical Decision-Making",
    ctaDescription:
      "Implement a systematic approach to decision-making based on statistical data, ensuring continuous improvement and process effectiveness within your organization. Discover how to use statistical information to identify opportunities, solve problems, and optimize results.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Data Sheet",
    pdfHref: "assets/pdf/LYS-P004-Statistical-Decision-Making.pdf",
    pdfDownload: "LYS-P004-Statistical-Decision-Making.pdf",
    diagramAlt: "Statistical Decision-Making Diagram",
  },
  pt: {
    diagramTitle: "Diagrama de Tomada de Decisões Baseadas em Estatísticas",
    diagramDescription:
      "Processo para tomar decisões com dados: identificar, analisar, agir e melhorar continuamente.",
    ctaTitle: "Tomada de Decisões Baseadas em Estatísticas",
    ctaDescription:
      "Implemente uma abordagem sistemática para a tomada de decisões baseada em dados estatísticos, garantindo a melhoria contínua e a eficácia dos processos dentro da organização. Descubra como utilizar informações estatísticas para identificar oportunidades, resolver problemas e otimizar resultados.",
    primaryButtonText: "Contatar Agora",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref:
      "assets/pdf/LYS-P004-Tomada-de-decisoes-baseadas-em-estatisticas.pdf",
    pdfDownload: "LYS-P004-Tomada-de-decisoes-baseadas-em-estatisticas.pdf",
    diagramAlt: "Diagrama de Tomada de Decisões Baseadas em Estatísticas",
  },
};

const DecisionesEstadisticasPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const handleCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: "decisiones-estadisticas",
      location: "decisiones-estadisticas_page",
      label: "cta_descargar_ficha",
      cta_type: "download",
    });

    const link = document.createElement("a");
    link.href = t.pdfHref;
    link.download = t.pdfDownload;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <DecisionesEstadisticasContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2 pt-16">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-2">
              {t.diagramTitle}
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)] mb-14">
              {t.diagramDescription}
            </p>
            <img
              src={DecisionesEstadisticasDiagram}
              alt={t.diagramAlt}
              loading="lazy"
              width="1200"
              height="800"
              className="w-full h-auto rounded-lg shadow-lg border border-[var(--color-border)]"
            />
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title={t.ctaTitle}
        description={t.ctaDescription}
        primaryButtonText={t.primaryButtonText}
        secondaryButtonText={t.secondaryButtonText}
        onSecondaryClick={handleCtaDownloadFicha}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default DecisionesEstadisticasPage;
