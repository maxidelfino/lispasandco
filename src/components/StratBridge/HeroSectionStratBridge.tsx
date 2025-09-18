"use client";

import type React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const TEXTS: Record<
  Language,
  {
    badge: string;
    mainTitle: string;
    subtitle: string;
    description1: React.ReactNode;
    description2: React.ReactNode;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Transformar la organización (alinear estrategia con ejecución)",
    mainTitle: "Planificación Estratégica en la Empresa",
    subtitle: "Alinear estrategia, personas y acciones",
    description1: (
      <>
        <strong>StratBridge™</strong> es el programa de{" "}
        <strong>planificación estratégica estructurada</strong> que ofrece
        LYSPAS & CO para acompañar a las organizaciones en la alineación real de
        sus objetivos de largo plazo con el trabajo diario de sus equipos.
      </>
    ),
    description2: (
      <>
        Basado en la metodología <strong>Hoshin Kanri</strong>, este sistema
        permite desplegar la <strong>VISIÓN Y MISIÓN</strong> institucional en
        acciones concretas, medibles y ejecutables, transformando intenciones
        estratégicas en resultados sostenibles.
      </>
    ),
    pdfHref: "assets/pdf/LYS-P007-StratBridge.pdf",
    pdfDownload: "LYS-P007-StratBridge.pdf",
  },
  en: {
    badge: "Transform the organization (align strategy with execution)",
    mainTitle: "Strategic Planning in the Company",
    subtitle: "Align strategy, people, and actions",
    description1: (
      <>
        <strong>StratBridge™</strong> is the{" "}
        <strong>structured strategic planning</strong> program offered by LYSPAS
        & CO to help organizations truly align their long-term goals with the
        daily work of their teams.
      </>
    ),
    description2: (
      <>
        Based on the <strong>Hoshin Kanri</strong> methodology, this system
        enables the deployment of the institutional{" "}
        <strong>VISION AND MISSION</strong> into concrete, measurable, and
        actionable steps, turning strategic intentions into sustainable results.
      </>
    ),
    pdfHref: "assets/pdf/LYS-P107-StratBridge.pdf",
    pdfDownload: "LYS-P107-StratBridge.pdf",
  },
  pt: {
    badge: "Transformar a organização (alinhar estratégia com execução)",
    mainTitle: "Planejamento Estratégico na Empresa",
    subtitle: "Alinhar estratégia, pessoas e ações",
    description1: (
      <>
        O <strong>StratBridge™</strong> é o programa de{" "}
        <strong>planejamento estratégico estruturado</strong> oferecido pela
        LYSPAS & CO para apoiar as organizações no alinhamento real de seus
        objetivos de longo prazo com o trabalho diário de suas equipes.
      </>
    ),
    description2: (
      <>
        Baseado na metodologia <strong>Hoshin Kanri</strong>, este sistema
        permite desdobrar a <strong>VISÃO E MISSÃO</strong> institucionais em
        ações concretas, mensuráveis e executáveis, transformando intenções
        estratégicas em resultados sustentáveis.
      </>
    ),
    pdfHref: "assets/pdf/LYS-P207-StratBridge.pdf",
    pdfDownload: "LYS-P207-StratBridge.pdf",
  },
};

const HeroSectionStratBridge: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  return (
    <HeroBase
      badge={t.badge}
      title={
        <>
          <span className="block">StratBridge™</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.mainTitle}
          </span>
        </>
      }
      subtitles={[t.subtitle]}
      descriptions={[t.description1, t.description2]}
      scrollTargetId="StratBridge-content"
      onDownload={() => {
        const link = document.createElement("a");
        link.href = t.pdfHref;
        link.download = t.pdfDownload;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      backgroundVariant="circlesLarge"
    />
  );
};

export default HeroSectionStratBridge;
