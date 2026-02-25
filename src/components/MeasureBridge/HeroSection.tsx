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
    description1: string;
    description2: string;
    description3: string;
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Perfeccionar la operación",
    title: "MeasureBridge™",
    subtitle: "Programa Integral de Gestión Analítica y Control de Calidad",
    description1:
      "Convertimos su control de calidad en una fuente confiable de eficiencia operativa",
    description2:
      "A través de herramientas visuales y trabajo colaborativo, ayuda a equipos a construir puentes entre la situación actual y los objetivos de negocio, facilitando la toma de decisiones basada en datos y la mejora continua.",
    description3:
      "Incluye: definición de KPIs, diseño de tableros visuales, rutinas de gestión, análisis de brechas y soporte en la ejecución de acciones correctivas.",
    pdfHref: "assets/pdf/LYS-P015-MeasureBridge.pdf",
    pdfDownload: "LYS-P015-MeasureBridge.pdf",
  },
  en: {
    badge: "Perfect the operation",
    title: "MeasureBridge™",
    subtitle:
      "Comprehensive Program for Analytical Management and Quality Control",
    description1:
      "We turn your quality control into a reliable source of operational efficiency",
    description2:
      "Through visual tools and collaborative work, it helps teams build bridges between the current situation and business objectives, facilitating data-driven decision-making and continuous improvement.",
    description3:
      "Includes: KPI definition, visual dashboard design, management routines, gap analysis, and support in the execution of corrective actions.",
    pdfHref: "assets/pdf/LYS-P115-MeasureBridge.pdf",
    pdfDownload: "LYS-P115-MeasureBridge.pdf",
  },
  pt: {
    badge: "Aperfeiçoar a operação",
    title: "MeasureBridge™",
    subtitle: "Programa Integral de Gestão Analítica e Controle da Qualidade",
    description1:
      "Transformamos seu controle de qualidade em uma fonte confiável de eficiência operacional",
    description2:
      "Por meio de ferramentas visuais e trabalho colaborativo, ajuda equipes a construir pontes entre a situação atual e os objetivos do negócio, facilitando a tomada de decisões baseada em dados e a melhoria contínua.",
    description3:
      "Inclui: definição de KPIs, design de painéis visuais, rotinas de gestão, análise de lacunas e suporte na execução de ações corretivas.",
    pdfHref: "assets/pdf/LYS-P215-MeasureBridge.pdf",
    pdfDownload: "LYS-P215-MeasureBridge.pdf",
  },
};

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = translations[lang];
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
        </>
      }
      descriptions={[t.description1]}
      scrollTargetId="MeasureBridge-content"
      onDownload={onDownload}
      backgroundVariant="mixed"
      hideDescriptionsOnMobile={false}
    />
  );
};

export default HeroSection;
