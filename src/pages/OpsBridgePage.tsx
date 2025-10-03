import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/OpsBridge/HeroSection";
import OpsBridgeContent from "../components/OpsBridge/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { OpsBridgeDiagram } from "../components/OpsBridge/OpsBridgeDiagram";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const CTA_TEXTS: Record<
  Language,
  {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    title: "Transforma tu operación con sistemas de clase mundial",
    description:
      "Descubre cómo OpsBridge™ integra personas, procesos y tecnología para maximizar la eficiencia, reducir variabilidad y garantizar resultados sostenibles en toda tu organización.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P009-OpsBridge–World-Class-Systems.pdf",
    pdfDownload: "LYS-P009-OpsBridge–World-Class-Systems.pdf",
  },
  en: {
    title: "Transform your operation with world-class systems",
    description:
      "Discover how OpsBridge™ integrates people, processes, and technology to maximize efficiency, reduce variability, and ensure sustainable results across your organization.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Brochure",
    pdfHref: "assets/pdf/LYS-P109-OpsBridge-World-Class-Systems.pdf",
    pdfDownload: "LYS-P109-OpsBridge-World-Class-Systems.pdf",
  },
  pt: {
    title: "Transforme sua operação com sistemas de classe mundial",
    description:
      "Descubra como o OpsBridge™ integra pessoas, processos e tecnologia para maximizar a eficiência, reduzir a variabilidade e garantir resultados sustentáveis em toda a sua organização.",
    primaryButtonText: "Contatar Agora",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P209-OpsBridge-World-Class-Systems.pdf",
    pdfDownload: "LYS-P209-OpsBridge-World-Class-Systems.pdf",
  },
};

const OpsBridgePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();

  const cta = CTA_TEXTS[currentLanguage];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <OpsBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <OpsBridgeDiagram />
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title={cta.title}
        description={cta.description}
        primaryButtonText={cta.primaryButtonText}
        secondaryButtonText={cta.secondaryButtonText}
        onSecondaryClick={() => {
          const link = document.createElement("a");
          link.href = cta.pdfHref;
          link.download = cta.pdfDownload;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default OpsBridgePage;
