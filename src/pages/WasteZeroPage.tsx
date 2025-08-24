import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/WasteZero/HeroSection";
import CircularWasteDiagram from "../components/WasteZero/CircularWasteDiagram";
import WasteZeroContent from "../components/WasteZero/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const CTA_TRANSLATIONS: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    ctaTitle: string;
    ctaDescription: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  }
> = {
  es: {
    seoTitle: "WasteZero™ - Eliminación de Desperdicios Lean | LYSPAS & CO",
    seoDescription:
      "WasteZero™ - Programa Lean para identificar y eliminar los 8 desperdicios industriales. Metodología DMAIC, formación práctica, resultados visibles en 6 meses. Consultoría especializada LYSPAS & CO en Argentina.",
    seoKeywords:
      "WasteZero, eliminación desperdicios, 8 desperdicios lean, metodología DMAIC, consultoría lean, reducción costos operativos, eficiencia procesos, mejora continua, desperdicios industriales, optimización procesos",
    ctaTitle: "¿Listo para eliminar los desperdicios ocultos de tu operación?",
    ctaDescription:
      "Implementa WasteZero™ y establece la base de disciplina operativa que impulsa mejoras continuas, eficiencia y resultados sostenibles.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
  },
  en: {
    seoTitle: "WasteZero™ - Lean Waste Elimination | LYSPAS & CO",
    seoDescription:
      "WasteZero™ - Lean program to identify and eliminate the 8 industrial wastes. DMAIC methodology, hands-on training, visible results in 6 months. Specialized consulting by LYSPAS & CO in Argentina.",
    seoKeywords:
      "WasteZero, waste elimination, 8 lean wastes, DMAIC methodology, lean consulting, operational cost reduction, process efficiency, continuous improvement, industrial waste, process optimization",
    ctaTitle: "Ready to eliminate hidden wastes from your operation?",
    ctaDescription:
      "Implement WasteZero™ and establish the operational discipline foundation that drives continuous improvement, efficiency, and sustainable results.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Data Sheet",
  },
  pt: {
    seoTitle: "WasteZero™ - Eliminação de Desperdícios Lean | LYSPAS & CO",
    seoDescription:
      "WasteZero™ - Programa Lean para identificar e eliminar os 8 desperdícios industriais. Metodologia DMAIC, formação prática, resultados visíveis em 6 meses. Consultoria especializada LYSPAS & CO na Argentina.",
    seoKeywords:
      "WasteZero, eliminação de desperdícios, 8 desperdícios lean, metodologia DMAIC, consultoria lean, redução de custos operacionais, eficiência de processos, melhoria contínua, desperdícios industriais, otimização de processos",
    ctaTitle: "Pronto para eliminar os desperdícios ocultos da sua operação?",
    ctaDescription:
      "Implemente o WasteZero™ e estabeleça a base de disciplina operacional que impulsiona melhorias contínuas, eficiência e resultados sustentáveis.",
    primaryButtonText: "Entrar em Contato",
    secondaryButtonText: "Baixar Ficha Técnica",
  },
};

const WasteZeroPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang = (currentLanguage as Language) || "es";
  const t = CTA_TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <SEOHead
        title={t.seoTitle}
        description={t.seoDescription}
        keywords={t.seoKeywords}
      />
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <WasteZeroContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <CircularWasteDiagram />
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
          link.href = "assets/pdf/LYS-P003-WASTEZERO.pdf";
          link.download = "LYS-P003-WASTEZERO.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default WasteZeroPage;
