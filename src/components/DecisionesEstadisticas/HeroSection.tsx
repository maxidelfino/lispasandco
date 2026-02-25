import React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
import { useDownloadPdf } from "../../hooks/useDownloadPdf";

const translations: Record<
  Language,
  {
    badge: string;
    title: string;
    subtitle: string;
    subtitle2: string;
    description: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Estabilizar y profesionalizar (Procesos, Métricas, Liderazgo)",
    title: "Decisiones Gerenciales Basadas en Estadísticas™",
    subtitle: "Transforma datos en decisiones.",
    subtitle2: "Respalda tus acciones con evidencia.",
    description:
      "Este programa es el puente entre la intuición y el análisis profundo, y prepara a los participantes para liderar con claridad, evidencia y confianza en contextos de mejora continua",
    pdfHref:
      "assets/pdf/LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
    pdfDownload: "LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
  },
  en: {
    badge: "Stabilize and professionalize (Processes, Metrics, Leadership)",
    title: "Management Decisions Based on Statistics™",
    subtitle: "Turn data into decisions.",
    subtitle2: "Support your actions with evidence.",
    description:
      "This program is the bridge between intuition and deep analysis, preparing participants to lead with clarity, evidence, and confidence in continuous improvement contexts.",
    pdfHref:
      "assets/pdf/LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
    pdfDownload: "LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf",
  },
  pt: {
    badge: "Estabilizar e profissionalizar (Processos, Métricas, Liderança)",
    title: "Decisões Gerenciais Baseadas em Estatísticas™",
    subtitle: "Transforme dados em decisões.",
    subtitle2: "Apoie suas ações com evidências.",
    description:
      "Este programa é a ponte entre a intuição e a análise profunda, preparando os participantes para liderar com clareza, evidências e confiança em contextos de melhoria contínua.",
    pdfHref:
      "assets/pdf/LYS-A201-Decisiones-Estadisticas.pdf",
    pdfDownload: "LYS-A201-Decisiones-Estadisticas.pdf",
  },
};

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const onDownload = useDownloadPdf(t.pdfHref, t.pdfDownload);

  return (
    <HeroBase
      badge={t.badge}
      title={
        <>
          <span className="block">{t.title}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.subtitle}
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.subtitle2}
          </span>
        </>
      }
      descriptions={[t.description]}
      scrollTargetId="decisionesEstadisticas-content"
      onDownload={onDownload}
      backgroundVariant="mixed"
      hideDescriptionsOnMobile={false}
    />
  );
};

export default HeroSection;
