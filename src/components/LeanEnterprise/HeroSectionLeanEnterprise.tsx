"use client";

import type React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
  Language,
  {
    badge: string;
    title: string;
    subtitle: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Transformar la organización (Alinear estrategia con ejecución)",
    title: "Lean Enterprise Transformation™",
    subtitle: "La mejora continua como sistema de gestión integral",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation.pdf",
  },
  en: {
    badge: "Transform the organization (Align strategy with execution)",
    title: "Lean Enterprise Transformation™",
    subtitle: "Continuous improvement as a comprehensive management system",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation-EN.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation-EN.pdf",
  },
  pt: {
    badge: "Transformar a organização (Alinhar estratégia com execução)",
    title: "Lean Enterprise Transformation™",
    subtitle: "A melhoria contínua como sistema de gestão integrado",
    pdfHref: "assets/pdf/LYS-P002-Lean-enterprise-tranformation-PT.pdf",
    pdfDownload: "LYS-P002-Lean-enterprise-tranformation-PT.pdf",
  },
};

const HeroSectionLeanEnterprise: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <HeroBase
      badge={t.badge}
      title={<span className="block">{t.title}</span>}
      subtitles={[t.subtitle]}
      scrollTargetId="LeanEnterprise-content"
      onDownload={() => {
        const link = document.createElement("a");
        link.href = "assets/pdf/LYS-P002-Lean-enterprise-tranformation.pdf";
        link.download = "LYS-P002-Lean-enterprise-tranformation.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      backgroundVariant="minimal"
    />
  );
};

export default HeroSectionLeanEnterprise;
