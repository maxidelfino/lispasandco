import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/ChangeBridge/HeroSection";
import ChangeBridgeContent from "../components/ChangeBridge/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import ChangeBridgeDiagram from "../assets/ChangeBridgeDiagram.png";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const TEXTS: Record<
  Language,
  {
    diagramTitle: string;
    diagramDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    primaryButton: string;
    secondaryButton: string;
    pdfHref: string;
    pdfDownload: string;
    diagramAlt: string;
  }
> = {
  [Language.SPANISH]: {
    diagramTitle: "Change Bridge™: Proceso de Gestión del Cambio",
    diagramDescription:
      "El modelo Change Bridge™ acompaña proyectos de cambio organizacional a través de un enfoque estructurado en 4 fases clave.",
    ctaTitle: "Change Bridge™",
    ctaDescription:
      "Acompañamos proyectos de cambio (procesos, estructura y sistemas) con un enfoque práctico de 8–12 semanas que combina workshops, coaching y seguimiento estructurado para reducir resistencias, alinear equipos y garantizar la adopción y sostenibilidad de las transformaciones.",
    primaryButton: "Contactar Ahora",
    secondaryButton: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P013-ChangeBridge.pdf",
    pdfDownload: "LYS-P013-ChangeBridge.pdf",
    diagramAlt: "Diagrama del Proceso Change Bridge",
  },
  [Language.ENGLISH]: {
    diagramTitle: "Change Bridge™: Change Management Process",
    diagramDescription:
      "The Change Bridge™ model supports organizational change projects through a structured approach in 4 key phases.",
    ctaTitle: "Change Bridge™",
    ctaDescription:
      "We support change projects (processes, structure, and systems) with a practical 8–12 week approach that combines workshops, coaching, and structured follow-up to reduce resistance, align teams, and ensure adoption and sustainability of transformations.",
    primaryButton: "Contact Now",
    secondaryButton: "Download Technical Sheet",
    pdfHref: "assets/pdf/LYS-P113-ChangeBridge.pdf",
    pdfDownload: "LYS-P113-ChangeBridge.pdf",
    diagramAlt: "Change Bridge Process Diagram",
  },
  [Language.PORTUGUESE]: {
    diagramTitle: "Change Bridge™: Processo de Gestão da Mudança",
    diagramDescription:
      "O modelo Change Bridge™ acompanha projetos de mudança organizacional por meio de uma abordagem estruturada em 4 fases-chave.",
    ctaTitle: "Change Bridge™",
    ctaDescription:
      "Apoiamos projetos de mudança (processos, estrutura e sistemas) com uma abordagem prática de 8–12 semanas que combina workshops, coaching e acompanhamento estruturado para reduzir resistências, alinhar equipes e garantir a adoção e sustentabilidade das transformações.",
    primaryButton: "Contactar Agora",
    secondaryButton: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P213-ChangeBridge.pdf",
    pdfDownload: "LYS-P213-ChangeBridge.pdf",
    diagramAlt: "Diagrama do Processo Change Bridge",
  },
};

const ChangeBridgePage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || Language.SPANISH;
  const t = TEXTS[lang];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <ChangeBridgeContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2 pt-16">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-2">
              {t.diagramTitle}
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)] mb-8">
              {t.diagramDescription}
            </p>
            <img
              src={ChangeBridgeDiagram}
              alt={t.diagramAlt}
              className="w-full h-auto rounded-lg shadow-lg border border-[var(--color-border)]"
            />
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <CTASection
        title={t.ctaTitle}
        description={t.ctaDescription}
        primaryButtonText={t.primaryButton}
        secondaryButtonText={t.secondaryButton}
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

export default ChangeBridgePage;
