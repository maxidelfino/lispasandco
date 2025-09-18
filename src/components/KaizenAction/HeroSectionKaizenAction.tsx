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
    badge: "Estabilizar y profesionalizar (Procesos, Métricas, Liderazgo)",
    subtitle:
      "Donde los puntos de vista se cruzan, nacen las soluciones que transforman",
    pdfHref: "assets/pdf/LYS-P006-Kaizen-Action.pdf",
    pdfDownload: "LYS-P006-Kaizen-Action.pdf",
  },
  en: {
    badge: "Stabilize and professionalize (Processes, Metrics, Leadership)",
    subtitle: "Where perspectives meet, solutions that transform are born",
    pdfHref: "assets/pdf/LYS-P106-Kaizen-Action.pdf",
    pdfDownload: "LYS-P106-Kaizen-Action.pdf",
  },
  pt: {
    badge: "Estabilizar e profissionalizar (Processos, Métricas, Liderança)",
    subtitle:
      "Onde os pontos de vista se cruzam, nascem as soluções que transformam",
    pdfHref: "assets/pdf/LYS-P206-Kaizen-Action.pdf",
    pdfDownload: "LYS-P206-Kaizen-Action.pdf",
  },
};

const HeroSectionKaizenAction: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <HeroBase
      badge={t.badge}
      title={<span className="block">KAIZEN ACTION™</span>}
      subtitles={[
        <span key="s" className="font-medium italic">
          {t.subtitle}
        </span>,
      ]}
      scrollTargetId="kaizen-content"
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

export default HeroSectionKaizenAction;
