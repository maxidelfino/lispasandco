import type React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
import { useDownloadPdf } from "../../hooks/useDownloadPdf";

const TEXTS: Record<
  Language,
  {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge:
      "Áreas desconectadas – Estrategias confusas – Prioridades desconocidas",
    title1: "OpsBridge™ - World Class",
    title2: "Gestión visual, disciplina y mejora continua",
    title3: "para equipos operativos de clase mundial",
    description:
      "Está dirigido a empresas que ya tienen una base de mejora continua (con o sin LeanBridge™) y están listas para avanzar hacia la transformación integral, buscando niveles de clase mundial en eficiencia y cultura operativa.",
    pdfHref: "/assets/pdf/LYS-P009-OpsBridge–World-Class-Systems.pdf",
    pdfDownload: "LYS-P009-OpsBridge–World-Class-Systems.pdf",
  },
  en: {
    badge: "Disconnected areas – Confusing strategies – Unknown priorities",
    title1: "OpsBridge™ - World Class",
    title2: "Visual management, discipline and continuous improvement",
    title3: "for world-class operations teams",
    description:
      "It is aimed at companies that already have a foundation in continuous improvement (with or without LeanBridge™) and are ready to move towards comprehensive transformation, seeking world-class levels in efficiency and operational culture.",
    pdfHref: "/assets/pdf/LYS-P109-OpsBridge–World-Class-Systems.pdf",
    pdfDownload: "LYS-P109-OpsBridge–World-Class-Systems.pdf",
  },
  pt: {
    badge:
      "Áreas desconectadas – Estratégias confusas – Prioridades desconhecidas",
    title1: "OpsBridge™ - World Class",
    title2: "Gestão visual, disciplina e melhoria contínua",
    title3: "para equipes operacionais de classe mundial",
    description:
      "É direcionado a empresas que já possuem uma base de melhoria contínua (com ou sem LeanBridge™) e estão prontas para avançar para uma transformação integral, buscando níveis de classe mundial em eficiência e cultura operacional.",
    pdfHref: "/assets/pdf/LYS-P209-OpsBridge–World-Class-Systems.pdf",
    pdfDownload: "LYS-P209-OpsBridge–World-Class-Systems.pdf",
  },
};

const HeroSection5S: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = TEXTS[currentLanguage];
  const onDownload = useDownloadPdf(t.pdfHref, t.pdfDownload, {
    service: "ops-bridge",
    location: "hero_section",
    language: currentLanguage,
  });

  return (
    <HeroBase
      badge={t.badge}
      title={
        <>
          <span className="block">{t.title1}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.title2}
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80">
            {t.title3}
          </span>
        </>
      }
      descriptions={[t.description]}
      scrollTargetId="OpsBridge-content"
      onDownload={onDownload}
      backgroundVariant="squares"
      hideDescriptionsOnMobile={false}
    />
  );
};

export default HeroSection5S;
