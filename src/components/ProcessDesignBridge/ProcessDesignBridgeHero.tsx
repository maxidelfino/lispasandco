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
    subtitle1: string;
    subtitle2: string;
    description1: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Iniciar la mejora (Problemas Visibles, Foco en el Equipo)",
    mainTitle: "Process Design Bridge™",
    subtitle1: "",
    subtitle2: "",
    description1:
      "Diseñado para unir la ingeniería de procesos industriales con las prácticas de mejora continua.",
    pdfHref: "assets/pdf/LYS-P019-Process-Design-Bridge.pdf",
    pdfDownload: "LYS-P019-Process-Design-Bridge.pdf",
  },
  en: {
    badge: "Start improvement (Visible Problems, Team Focus)",
    mainTitle: "Process Design Bridge™",
    subtitle1: "",
    subtitle2: "",
    description1:
      "Designed to bridge industrial process engineering with continuous improvement practices.",
    pdfHref: "assets/pdf/LYS-P119-Process-Design-Bridge.pdf",
    pdfDownload: "LYS-P119-Process-Design-Bridge.pdf",
  },
  pt: {
    badge: "Iniciar a melhoria (Problemas Visíveis, Foco na Equipe)",
    mainTitle: "Process Design Bridge™",
    subtitle1: "",
    subtitle2: "",
    description1:
      "Projetado para unir a engenharia de processos industriais com as práticas de melhoria contínua.",
    pdfHref: "assets/pdf/LYS-P219-Process-Design-Bridge.pdf",
    pdfDownload: "LYS-P219-Process-Design-Bridge.pdf",
  },
};

const ProcessDesignBridgeHero: React.FC = () => {
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
            {t.subtitle1}
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80">
            {t.subtitle2}
          </span>
        </>
      }
      descriptions={[t.description1]}
      scrollTargetId="ProcessDesignBridge-content"
      onDownload={onDownload}
      backgroundVariant="mixed"
    />
  );
};

export default ProcessDesignBridgeHero;
