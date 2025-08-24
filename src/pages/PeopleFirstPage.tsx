import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/PeopleFirst/HeroSection";
import PeopleFirstContent from "../components/PeopleFirst/ContentSection";
import { useScrollToTop } from "../hooks/useScrollToTop";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import PeopleFirstDiagram from "../components/PeopleFirst/PeopleFirstDiagram";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const CTA_TEXTS: Record<
  Language,
  {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  }
> = {
  es: {
    title: "PeopleFirst™: Personas, Procesos y Resultados",
    description:
      "Descubre cómo PeopleFirst™ transforma la cultura operativa, impulsa la disciplina y genera resultados sostenibles a través del compromiso y desarrollo de tu equipo.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
  },
  en: {
    title: "PeopleFirst™: People, Processes and Results",
    description:
      "Discover how PeopleFirst™ transforms operational culture, drives discipline, and generates sustainable results through team engagement and development.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Brochure",
  },
  pt: {
    title: "PeopleFirst™: Pessoas, Processos e Resultados",
    description:
      "Descubra como o PeopleFirst™ transforma a cultura operacional, impulsiona a disciplina e gera resultados sustentáveis através do engajamento e desenvolvimento da sua equipe.",
    primaryButtonText: "Entrar em Contato",
    secondaryButtonText: "Baixar Ficha Técnica",
  },
};

const PeopleFirstPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const cta = CTA_TEXTS[lang];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSection />
      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <PeopleFirstContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2">
          <PeopleFirstDiagram />
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
          link.href = "assets/pdf/LYS-P014-People-First.pdf";
          link.download = "LYS-P014-People-First.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default PeopleFirstPage;
