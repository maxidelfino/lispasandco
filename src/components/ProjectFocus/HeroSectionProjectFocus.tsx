import React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
import { useDownloadPdf } from "../../hooks/useDownloadPdf";

const TEXTS: Record<
  Language,
  {
    badge: string;
    mainTitle: string;
    subTitle: string;
    description: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Transformar la organización (alinear estrategia con ejecución)",
    mainTitle: "ProjectFocus™",
    subTitle: "Selección Estratégica de Proyectos",
    description:
      "La metodología ideal para convertir objetivos estratégicos en decisiones reales de inversión, priorizadas con criterio y alineadas con el rumbo de la empresa.",
    pdfHref: "assets/pdf/LYS-P010-Project-Focus.pdf",
    pdfDownload: "LYS-P010-Project-Focus.pdf",
  },
  en: {
    badge: "Transform the organization (align strategy with execution)",
    mainTitle: "ProjectFocus™",
    subTitle: "Strategic Project Selection",
    description:
      "The ideal methodology to turn strategic objectives into real investment decisions, prioritized with criteria and aligned with the company's direction.",
    pdfHref: "assets/pdf/LYS-P110-Project-Focus.pdf",
    pdfDownload: "LYS-P110-Project-Focus.pdf",
  },
  pt: {
    badge: "Transformar a organização (alinhar estratégia com execução)",
    mainTitle: "ProjectFocus™",
    subTitle: "Seleção Estratégica de Projetos",
    description:
      "A metodologia ideal para transformar objetivos estratégicos em decisões reais de investimento, priorizadas com critério e alinhadas com o rumo da empresa.",
    pdfHref: "assets/pdf/LYS-P110-Project-Focus.pdf",
    pdfDownload: "LYS-P210-Project-Focus.pdf",
  },
};

const HeroSectionProjectFocus: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];
  const onDownload = useDownloadPdf(t.pdfHref, t.pdfDownload);

  return (
    <HeroBase
      badge={t.badge}
      title={
        <>
          <span className="block">{t.mainTitle}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.subTitle}
          </span>
        </>
      }
      descriptions={[t.description]}
      scrollTargetId="ProjectFocus-content"
      onDownload={onDownload}
      backgroundVariant="mixed"
      hideSubtitlesOnMobile={false}
      hideDescriptionsOnMobile={false}
    />
  );
};

export default HeroSectionProjectFocus;
