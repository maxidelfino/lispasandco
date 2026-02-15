import type React from "react";
import HeroSectionLeanEnterprise from "../components/LeanEnterprise/HeroSectionLeanEnterprise";
import LeanEnterpriseContent from "../components/LeanEnterprise/LeanEnterpriseContent";
import FloatingNavigation from "../components/FloatingNavigation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import LeanEnterpriseIcon from "../icons-componets/LeanEnterprise/LeanEnterpriseIcon";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

const ctaTranslations: Record<
  Language,
  {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    pdfHref: string;
    pdfDownload: string;
    diagramText: string;
  }
> = {
  es: {
    title:
      "¿Listo para convertir la mejora continua en tu ventaja competitiva?",
    description:
      "Implanta Lean Enterprise Transformation™ y despliega un sistema de gestión integral que alinea cultura, procesos y resultados; impulsa eficiencia, visibilidad y crecimiento sostenible en toda tu organización.",
    primaryButtonText: "Contactar Ahora",
    secondaryButtonText: "Descargar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation.pdf",
    diagramText:
      "Descubre cómo transformar tu empresa con un sistema integral de mejora continua",
  },
  en: {
    title:
      "Ready to turn continuous improvement into your competitive advantage?",
    description:
      "Implement Lean Enterprise Transformation™ and deploy a comprehensive management system that aligns culture, processes, and results; drives efficiency, visibility, and sustainable growth across your organization.",
    primaryButtonText: "Contact Now",
    secondaryButtonText: "Download Brochure",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation-EN.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation-EN.pdf",
    diagramText:
      "Discover how to transform your company with a comprehensive continuous improvement system",
  },
  pt: {
    title:
      "Pronto para transformar a melhoria contínua em sua vantagem competitiva?",
    description:
      "Implemente o Lean Enterprise Transformation™ e implante um sistema de gestão integrado que alinha cultura, processos e resultados; impulsiona eficiência, visibilidade e crescimento sustentável em toda a sua organização.",
    primaryButtonText: "Entrar em Contato",
    secondaryButtonText: "Baixar Ficha Técnica",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation-PT.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation-PT.pdf",
    diagramText:
      "Descubra como transformar sua empresa com um sistema integrado de melhoria contínua",
  },
};

const LeanEnterpriseTransformationPage: React.FC = () => {
  useScrollToTop();
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = ctaTranslations[lang];

  const trackCtaDownloadFicha = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      service: "lean-enterprise",
      location: "lean_enterprise_transformation_page",
      label: "cta_descargar_ficha",
      cta_type: "download",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />
      <HeroSectionLeanEnterprise />

      {/* Responsive layout: two columns on desktop, stacked on tablet/mobile */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start py-20 px-4 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <LeanEnterpriseContent />
        </div>

        {/* Right: Diagram */}
        <div className="w-full lg:w-1/2 order-2 mt-20">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.diagramText}
            </p>
          </div>
          <LeanEnterpriseIcon />
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        title={t.title}
        description={t.description}
        primaryButtonText={t.primaryButtonText}
        secondaryButtonText={t.secondaryButtonText}
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

export default LeanEnterpriseTransformationPage;
