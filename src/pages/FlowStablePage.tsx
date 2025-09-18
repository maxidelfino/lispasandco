import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSectionFlowStable from "../components/FlowStable/HeroSectionFlowStable";
import FlowStableContent from "../components/FlowStable/FlowStableContent";
import FlowStableDiagram from "../components/FlowStable/FlowStableDiagram";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const translations: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    ctaTitle: string;
    ctaDescription: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    seoTitle:
      "FlowStable™ - Estabilización de Procesos Industriales | LYSPAS & CO",
    seoDescription:
      "FlowStable™ - Programa para estabilizar procesos industriales sin inversión en activos. Secuencia de Mejora Diaria™, reducción de variabilidad, mayor productividad en 7 meses. Consultoría LYSPAS & CO.",
    seoKeywords:
      "FlowStable, estabilización procesos, secuencia mejora diaria, reducción variabilidad, productividad industrial, control procesos, eficiencia operacional, optimización producción",
    ctaTitle: "¿Listo para dominar tus procesos y mejorar tus resultados?",
    ctaDescription:
      "Implementa FlowStable™ y construye procesos estables y previsibles que generen mejores promedios, mayor control y más productividad.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref: "/assets/pdf/LYS-P001-FlowStable.pdf",
    pdfDownload: "LYS-P001-FlowStable.pdf",
  },
  en: {
    seoTitle: "FlowStable™ - Industrial Process Stabilization | LYSPAS & CO",
    seoDescription:
      "FlowStable™ - Program to stabilize industrial processes without asset investment. Daily Improvement Sequence™, reduced variability, higher productivity in 7 months. LYSPAS & CO Consulting.",
    seoKeywords:
      "FlowStable, process stabilization, daily improvement sequence, reduce variability, industrial productivity, process control, operational efficiency, production optimization",
    ctaTitle: "Ready to master your processes and improve your results?",
    ctaDescription:
      "Implement FlowStable™ and build stable, predictable processes that deliver better averages, more control, and higher productivity.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Data Sheet",
    pdfHref: "/assets/pdf/LYS-P101-FlowStable-EN.pdf",
    pdfDownload: "LYS-P101-FlowStable-EN.pdf",
  },
  pt: {
    seoTitle:
      "FlowStable™ - Estabilização de Processos Industriais | LYSPAS & CO",
    seoDescription:
      "FlowStable™ - Programa para estabilizar processos industriais sem investimento em ativos. Sequência de Melhoria Diária™, redução de variabilidade, maior produtividade em 7 meses. Consultoria LYSPAS & CO.",
    seoKeywords:
      "FlowStable, estabilização de processos, sequência de melhoria diária, redução de variabilidade, produtividade industrial, controle de processos, eficiência operacional, otimização da produção",
    ctaTitle: "Pronto para dominar seus processos e melhorar seus resultados?",
    ctaDescription:
      "Implemente o FlowStable™ e construa processos estáveis e previsíveis que gerem melhores médias, mais controle e maior produtividade.",
    primaryButtonText: "Contatar Agora",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref: "/assets/pdf/LYS-P201-FlowStable-PT.pdf",
    pdfDownload: "LYS-P201-FlowStable-PT.pdf",
  },
};

const FlowStablePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <SEOHead
        title={t.seoTitle}
        description={t.seoDescription}
        keywords={t.seoKeywords}
      />
      <FloatingNavigation />
      <HeroSectionFlowStable />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <FlowStableContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <FlowStableDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title={t.ctaTitle}
        description={t.ctaDescription}
        primaryButtonText={t.primaryButtonText}
        secondaryButtonText={t.secondaryButtonText}
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = t.pdfHref;
          link.download = t.pdfDownload;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default FlowStablePage;
