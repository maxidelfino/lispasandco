import type React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSectionProjectFocus from "../components/ProjectFocus/HeroSectionProjectFocus";
import ProjectFocusContent from "../components/ProjectFocus/ProjectFocusContent";
import ProjectFocusDiagram from "../components/ProjectFocus/ProjectFocusDiagram";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

const TEXTS = {
  es: {
    diagramTitle: "ProjectFocus™ en Detalle",
    diagramDesc:
      "Descubre cómo nuestra metodología transforma la selección de proyectos en tu organización",
    ctaTitle: "¿Listo para priorizar tus proyectos estratégicos?",
    ctaDesc:
      "Implementa ProjectFocus™ y convierte tu planificación estratégica en un portafolio ejecutable de proyectos clave.",
    primaryButton: "Contactar Ahora",
    secondaryButton: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P010-Project-Focus.pdf",
    pdfDownload: "LYS-P010-Project-Focus.pdf",
  },
  en: {
    diagramTitle: "ProjectFocus™ in Detail",
    diagramDesc:
      "Discover how our methodology transforms project selection in your organization",
    ctaTitle: "Ready to prioritize your strategic projects?",
    ctaDesc:
      "Implement ProjectFocus™ and turn your strategic planning into an actionable portfolio of key projects.",
    primaryButton: "Contact Now",
    secondaryButton: "Download Data Sheet",
    pdfHref: "assets/pdf/LYS-P110-Project-Focus.pdf",
    pdfDownload: "LYS-P110-Project-Focus.pdf",
  },
  pt: {
    diagramTitle: "ProjectFocus™ em Detalhe",
    diagramDesc:
      "Descubra como nossa metodologia transforma a seleção de projetos em sua organização",
    ctaTitle: "Pronto para priorizar seus projetos estratégicos?",
    ctaDesc:
      "Implemente o ProjectFocus™ e transforme seu planejamento estratégico em um portfólio executável de projetos-chave.",
    primaryButton: "Entrar em Contato",
    secondaryButton: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P210-Project-Focus.pdf",
    pdfDownload: "LYS-P210-Project-Focus.pdf",
  },
};

const SERVICE_SLUG = "project-focus";
const LOCATION = "project_focus_page";

const ProjectFocusPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  const trackCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: SERVICE_SLUG,
      location: LOCATION,
      label: "cta_descargar_ficha",
      cta_type: "download",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionProjectFocus />

      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <ProjectFocusContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2 pt-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.diagramTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.diagramDesc}
            </p>
          </div>
          <ProjectFocusDiagram />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title={t.ctaTitle}
        description={t.ctaDesc}
        primaryButtonText={t.primaryButton}
        secondaryButtonText={t.secondaryButton}
        onSecondaryClick={() => {
          trackCtaDownloadFicha();
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

export default ProjectFocusPage;
