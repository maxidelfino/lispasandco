"use client";

import type React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const TEXTS: Record<
  Language,
  {
    badge: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    desc1: string;
    desc2: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge:
      "Áreas desconectadas – Estrategias confusas – Prioridades desconocidas",
    title: "People First™",
    subtitle1: "Personas primero, resultados sostenibles.",
    subtitle2: "Procesos estables, equipos alineados.",
    desc1:
      "<strong>People First™</strong> es la metodología de <strong>LYSPAS & CO</strong> que transforma la gestión operativa, alineando personas, procesos y resultados.",
    desc2:
      "Logra mayor eficiencia y productividad sin inversiones adicionales, enfocando a tu equipo en la mejora continua y la estabilidad de los procesos.",
    pdfHref: "assets/pdf/LYS-P014-People-First.pdf",
    pdfDownload: "LYS-P014-People-First.pdf",
  },
  en: {
    badge: "Disconnected areas – Confusing strategies – Unknown priorities",
    title: "People First™",
    subtitle1: "People first, sustainable results.",
    subtitle2: "Stable processes, aligned teams.",
    desc1:
      "<strong>People First™</strong> is the <strong>LYSPAS & CO</strong> methodology that transforms operational management, aligning people, processes, and results.",
    desc2:
      "Achieve greater efficiency and productivity without additional investments, focusing your team on continuous improvement and process stability.",
    pdfHref: "assets/pdf/LYS-P114-People-First.pdf",
    pdfDownload: "LYS-P114-People-First.pdf",
  },
  pt: {
    badge:
      "Áreas desconectadas – Estratégias confusas – Prioridades desconhecidas",
    title: "People First™",
    subtitle1: "Pessoas em primeiro lugar, resultados sustentáveis.",
    subtitle2: "Processos estáveis, equipes alinhadas.",
    desc1:
      "<strong>People First™</strong> é a metodologia da <strong>LYSPAS & CO</strong> que transforma a gestão operacional, alinhando pessoas, processos e resultados.",
    desc2:
      "Alcance maior eficiência e produtividade sem investimentos adicionais, focando sua equipe na melhoria contínua e na estabilidade dos processos.",
    pdfHref: "assets/pdf/LYS-P214-People-First.pdf",
    pdfDownload: "LYS-P214-People-First.pdf",
  },
};

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  return (
    <HeroBase
      badge={t.badge}
      title={
        <>
          <span className="block">{t.title}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
            {t.subtitle1}
          </span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80">
            {t.subtitle2}
          </span>
        </>
      }
      descriptions={[
        <span key="d1" dangerouslySetInnerHTML={{ __html: t.desc1 }} />,
        <span key="d2" dangerouslySetInnerHTML={{ __html: t.desc2 }} />,
      ]}
      scrollTargetId="PeopleFirst-content"
      onDownload={() => {
        const link = document.createElement("a");
        link.href = t.pdfHref;
        link.download = t.pdfDownload;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      backgroundVariant="bars"
      hideDescriptionsOnMobile={false}
    />
  );
};

export default HeroSection;
