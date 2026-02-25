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
    description2: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Iniciar la mejora (Problemas Visibles, Foco en el Equipo)",
    mainTitle: "WasteZero™",
    subtitle1: "Transformamos procesos,",
    subtitle2: "potenciamos equipos",
    description1:
      "Es un programa táctico de implementación LEAN diseñado para empresas que buscan reducir pérdidas operativas de manera concreta, visible y sostenida.",
    description2:
      "Se centra en identificar y eliminar los 8 desperdicios clásicos de la gestión LEAN, combinando análisis visual, trabajo de campo y proyectos de mejora con impacto real.",
    pdfHref: "assets/pdf/LYS-P003-WASTEZERO.pdf",
    pdfDownload: "LYS-P003-WASTEZERO.pdf",
  },
  en: {
    badge: "Start improvement (Visible Problems, Team Focus)",
    mainTitle: "WasteZero™",
    subtitle1: "We transform processes,",
    subtitle2: "we empower teams",
    description1:
      "A tactical LEAN implementation program designed for companies seeking to reduce operational losses in a concrete, visible, and sustainable way.",
    description2:
      "Focuses on identifying and eliminating the 8 classic wastes of LEAN management, combining visual analysis, fieldwork, and improvement projects with real impact.",
    pdfHref: "assets/pdf/LYS-P103-WASTEZERO.pdf",
    pdfDownload: "LYS-P103-WASTEZERO.pdf",
  },
  pt: {
    badge: "Iniciar a melhoria (Problemas Visíveis, Foco na Equipe)",
    mainTitle: "WasteZero™",
    subtitle1: "Transformamos processos,",
    subtitle2: "potencializamos equipes",
    description1:
      "Programa tático de implementação LEAN projetado para empresas que buscam reduzir perdas operacionais de forma concreta, visível e sustentável.",
    description2:
      "Foca em identificar e eliminar os 8 desperdícios clássicos da gestão LEAN, combinando análise visual, trabalho de campo e projetos de melhoria com impacto real.",
    pdfHref: "assets/pdf/LYS-P203-WASTEZERO.pdf",
    pdfDownload: "LYS-P203-WASTEZERO.pdf",
  },
};

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];
  const onDownload = useDownloadPdf(t.pdfHref, t.pdfDownload, {
    service: "wastezero",
    location: "hero_section",
    language: lang,
  });

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
      descriptions={[t.description1, t.description2]}
      scrollTargetId="wastezero-content"
      onDownload={onDownload}
      backgroundVariant="mixed"
    />
  );
};

export default HeroSection;
