import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/MeasureBridge/HeroSection";
import MeasureBridgeContent from "../components/MeasureBridge/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import MeasureBridgeDiagram from "../components/MeasureBridge/MeasureBridgeDiagram";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const CTA_TRANSLATIONS: Record<
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
    title: "¿Quieres medir y cerrar las brechas de desempeño en tu operación?",
    description:
      "Descubre cómo MeasureBridge™ te permite identificar, cuantificar y eliminar las pérdidas ocultas en tus procesos, facilitando la toma de decisiones basada en datos y el logro de una operación más eficiente y rentable.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P015-MeasureBridge.pdf",
    pdfDownload: "LYS-P015-MeasureBridge.pdf",
  },
  en: {
    title:
      "Do you want to measure and close performance gaps in your operation?",
    description:
      "Discover how MeasureBridge™ enables you to identify, quantify, and eliminate hidden losses in your processes, facilitating data-driven decision-making and achieving a more efficient and profitable operation.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Brochure",
    pdfHref: "assets/pdf/LYS-P115-MeasureBridge.pdf",
    pdfDownload: "LYS-P115-MeasureBridge.pdf",
  },
  pt: {
    title: "Quer medir e fechar as lacunas de desempenho em sua operação?",
    description:
      "Descubra como o MeasureBridge™ permite identificar, quantificar e eliminar perdas ocultas em seus processos, facilitando a tomada de decisões baseada em dados e alcançando uma operação mais eficiente e lucrativa.",
    primaryButtonText: "Entrar em Contato",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P215-MeasureBridge.pdf",
    pdfDownload: "LYS-P215-MeasureBridge.pdf",
  },
};

const MeasureBridgePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = CTA_TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <MeasureBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          {/* MeasureBridge Circular Diagram */}
          <MeasureBridgeDiagram />
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title={t.title}
        description={t.description}
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

export default MeasureBridgePage;
