"use client";

import type React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
  Language,
  {
    badge: string;
    mainTitle: React.ReactNode;
    subtitle: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Iniciar la mejora (Problemas Visibles, Foco en el Equipo)",
    mainTitle: (
      <>
        <span className="block">5S Plus™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          La base visual y disciplinada
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          para construir cultura operativa
        </span>
      </>
    ),
    subtitle:
      "5S no es una limpieza profunda. Es un cambio estructurado y sostenido utilizando el orden como forma de trabajo.",
    pdfHref: "/assets/pdf/LYS-P008-5S-PLUS.pdf",
    pdfDownload: "LYS-P008-5S-PLUS.pdf",
  },
  en: {
    badge: "Start the improvement (Visible Problems, Team Focus)",
    mainTitle: (
      <>
        <span className="block">5S Plus™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          The visual and disciplined foundation
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          to build operational culture
        </span>
      </>
    ),
    subtitle:
      "5S is not deep cleaning. It is a structured and sustained change using order as a way of working.",
    pdfHref: "/assets/pdf/LYS-P108-5S-PLUS.pdf",
    pdfDownload: "LYS-P108-5S-PLUS.pdf",
  },
  pt: {
    badge: "Iniciar a melhoria (Problemas Visíveis, Foco na Equipe)",
    mainTitle: (
      <>
        <span className="block">5S Plus™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          A base visual e disciplinada
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          para construir cultura operacional
        </span>
      </>
    ),
    subtitle:
      "5S não é uma limpeza profunda. É uma mudança estruturada e sustentada utilizando a ordem como forma de trabalho.",
    pdfHref: "/assets/pdf/LYS-P208-5S-PLUS.pdf",
    pdfDownload: "LYS-P208-5S-PLUS.pdf",
  },
};

const HeroSection5S: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <HeroBase
      badge={t.badge}
      title={t.mainTitle}
      subtitles={[t.subtitle]}
      scrollTargetId="FiveSPlus-content"
      onDownload={() => {
        const link = document.createElement("a");
        link.href = t.pdfHref;
        link.download = t.pdfDownload;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      backgroundVariant="squares"
    />
  );
};

export default HeroSection5S;
