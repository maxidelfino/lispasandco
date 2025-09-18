"use client";

import type React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
  Language,
  {
    badge: string;
    subtitle: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Estabilizar y profesionalizar (Procesos, métricas, liderazgo)",
    subtitle: "El puente hacia la excelencia operacional",
    pdfHref: "assets/pdf/LYS-P005-LeanBridge.pdf",
    pdfDownload: "LYS-P005-LeanBridge.pdf",
  },
  en: {
    badge: "Stabilize and professionalize (Processes, metrics, leadership)",
    subtitle: "The bridge to operational excellence",
    pdfHref: "assets/pdf/LYS-P105-LeanBridge.pdf",
    pdfDownload: "LYS-P105-LeanBridge.pdf",
  },
  pt: {
    badge: "Estabilizar e profissionalizar (Processos, métricas, liderança)",
    subtitle: "A ponte para a excelência operacional",
    pdfHref: "assets/pdf/LYS-P205-LeanBridge.pdf",
    pdfDownload: "LYS-P205-LeanBridge.pdf",
  },
};

const HeroSectionLeanBridge: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <HeroBase
      badge={t.badge}
      title={<span className="block">LeanBridge™</span>}
      subtitles={[t.subtitle]}
      scrollTargetId="leanbridge-content"
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

export default HeroSectionLeanBridge;
