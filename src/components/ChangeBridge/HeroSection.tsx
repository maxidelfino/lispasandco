import React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

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
  [Language.SPANISH]: {
    badge: "Iniciar la mejora (Problemas Visibles, Foco en el Equipo)",
    mainTitle: "Change Bridge™",
    subTitle: "Liderando la transición",
    description:
      "Está diseñado para proyectos de cambios en procesos, estructura organizacional, implementación de nuevos sistemas o ajustes estratégicos que requieran alineamiento y acción de toda la organización.",
    pdfHref: "assets/pdf/LYS-P013-ChangeBridge.pdf",
    pdfDownload: "LYS-P013-ChangeBridge.pdf",
  },
  [Language.ENGLISH]: {
    badge: "Start the improvement (Visible Problems, Team Focus)",
    mainTitle: "Change Bridge™",
    subTitle: "Leading the transition",
    description:
      "It is designed for projects involving process changes, organizational structure, implementation of new systems, or strategic adjustments that require alignment and action across the entire organization.",
    pdfHref: "assets/pdf/LYS-P113-ChangeBridge.pdf",
    pdfDownload: "LYS-P113-ChangeBridge.pdf",
  },
  [Language.PORTUGUESE]: {
    badge: "Iniciar a melhoria (Problemas Visíveis, Foco na Equipe)",
    mainTitle: "Change Bridge™",
    subTitle: "Liderando a transição",
    description:
      "É projetado para projetos de mudanças em processos, estrutura organizacional, implementação de novos sistemas ou ajustes estratégicos que exijam alinhamento e ação de toda a organização.",
    pdfHref: "assets/pdf/LYS-P213-ChangeBridge.pdf",
    pdfDownload: "LYS-P213-ChangeBridge.pdf",
  },
};

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || Language.SPANISH;
  const t = TEXTS[lang];

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
      scrollTargetId="changeBridge-content"
      onDownload={() => {
        const link = document.createElement("a");
        link.href = t.pdfHref;
        link.download = t.pdfDownload;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      backgroundVariant="mixed"
    />
  );
};

export default HeroSection;
