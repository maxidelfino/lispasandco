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
    subtitles: React.ReactNode[];
    pdfHref: string;
    pdfDownload: string;
  }
> = {
  es: {
    badge: "Estabilizar y profesionalizar (Procesos, Métricas, Liderazgo)",
    mainTitle: (
      <>
        <span className="block">FlowStable™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          Domina tus procesos.
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          Mejora tus resultados.
        </span>
      </>
    ),
    subtitles: [
      <>
        <strong>FlowStable™</strong> es el programa más recomendado por{" "}
        <strong>LYSPAS & CO</strong> para empresas que desean aumentar su
        producción o eficiencia <strong>sin invertir en activos fijos</strong>.
      </>,
      <>
        A través de un enfoque estructurado, cambia el foco de la operación: de
        perseguir récords diarios a construir procesos estables y previsibles,
        lo que permite alcanzar mejores promedios, mayor control y más
        productividad.
      </>,
    ],
    pdfHref: "/assets/pdf/LYS-P001-FlowStable.pdf",
    pdfDownload: "LYS-P001-FlowStable.pdf",
  },
  en: {
    badge: "Stabilize and professionalize (Processes, Metrics, Leadership)",
    mainTitle: (
      <>
        <span className="block">FlowStable™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          Master your processes.
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          Improve your results.
        </span>
      </>
    ),
    subtitles: [
      <>
        <strong>FlowStable™</strong> is the most recommended program by{" "}
        <strong>LYSPAS & CO</strong> for companies seeking to increase their
        production or efficiency{" "}
        <strong>without investing in fixed assets</strong>.
      </>,
      <>
        Through a structured approach, it shifts the operational focus: from
        chasing daily records to building stable and predictable processes,
        enabling better averages, more control, and higher productivity.
      </>,
    ],
    pdfHref: "/assets/pdf/LYS-P101-FlowStable.pdf",
    pdfDownload: "LYS-P101-FlowStable.pdf",
  },
  pt: {
    badge: "Estabilizar e profissionalizar (Processos, Métricas, Liderança)",
    mainTitle: (
      <>
        <span className="block">FlowStable™</span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
          Domine seus processos.
        </span>
        <span className="block text-3xl md:text-4xl font-normal text-white/80">
          Melhore seus resultados.
        </span>
      </>
    ),
    subtitles: [
      <>
        <strong>FlowStable™</strong> é o programa mais recomendado pela{" "}
        <strong>LYSPAS & CO</strong> para empresas que desejam aumentar sua
        produção ou eficiência <strong>sem investir em ativos fixos</strong>.
      </>,
      <>
        Por meio de uma abordagem estruturada, muda o foco da operação: de
        perseguir recordes diários para construir processos estáveis e
        previsíveis, permitindo melhores médias, mais controle e maior
        produtividade.
      </>,
    ],
    pdfHref: "/assets/pdf/LYS-P201-FlowStable.pdf",
    pdfDownload: "LYS-P201-FlowStable.pdf",
  },
};

const HeroSectionFlowStable: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <HeroBase
      badge={t.badge}
      title={t.mainTitle}
      descriptions={t.subtitles}
      scrollTargetId="flowstable-content"
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

export default HeroSectionFlowStable;
