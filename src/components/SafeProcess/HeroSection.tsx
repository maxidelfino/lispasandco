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
    subtitle: string;
    description: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Perfeccionar la operación",
    mainTitle: "Safe Process™",
    subtitle: "Gestión de Seguridad Industrial",
    description:
      "Fomenta una cultura de seguridad y asegura el cumplimiento normativo en todos tus procesos industriales.",
    pdfHref: "assets/pdf/LYS-P018-SafeProcess.pdf",
    pdfDownload: "LYS-P018-SafeProcess.pdf",
  },
  en: {
    badge: "Perfect the operation",
    mainTitle: "Safe Process™",
    subtitle: "Industrial Safety Management",
    description:
      "Build a safety culture and ensure regulatory compliance across all your industrial processes.",
    pdfHref: "assets/pdf/LYS-P118-SafeProcess.pdf",
    pdfDownload: "LYS-P118-SafeProcess.pdf",
  },
  pt: {
    badge: "Aperfeiçoar a operação",
    mainTitle: "Safe Process™",
    subtitle: "Gestão de Segurança Industrial",
    description:
      "Promove uma cultura de segurança e garante a conformidade regulatória em todos os seus processos industriais.",
    pdfHref: "assets/pdf/LYS-P218-SafeProcess.pdf",
    pdfDownload: "LYS-P218-SafeProcess.pdf",
  },
};

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || Language.SPANISH;
  const t = TEXTS[lang];
  const onDownload = useDownloadPdf(t.pdfHref, t.pdfDownload, {
    service: "safe-process",
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
            {t.subtitle}
          </span>
        </>
      }
      descriptions={[t.description]}
      scrollTargetId="safeprocess-content"
      onDownload={onDownload}
      backgroundVariant="mixed"
      hideDescriptionsOnMobile={false}
    />
  );
};

export default HeroSection;
