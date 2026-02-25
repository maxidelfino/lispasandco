import React, { useState } from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
import RandG from "../../assets/RandG.png";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useDownloadPdf } from "../../hooks/useDownloadPdf";
import { trackEvent } from "../../analytics/ga";
import { GA_EVENTS } from "../../analytics/events";

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
  const isDesktop = useScreenSize() === "desktop";
  const onDownload = useDownloadPdf(t.pdfHref, t.pdfDownload, {
    service: "flowstable",
    location: "hero_section",
    language: currentLanguage,
  });
  const [active, setActive] = useState(false);

  return (
    <>
      <HeroBase
        badge={t.badge}
        title={t.mainTitle}
        descriptions={t.subtitles}
        scrollTargetId="flowstable-content"
        onDownload={onDownload}
        backgroundVariant="bars"
        hideDescriptionsOnMobile={false}
      />
      {isDesktop && (
        <div
          className={`sticky bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 max-w-[200px] sm:max-w-[250px] group`}
          style={{
            top: "88px",
            right: "1rem",
            marginLeft: "auto",
            marginRight: "2rem",
            float: "right",
          }}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <style>
            {`
              .stable-ops-card {
                transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);
                will-change: transform, box-shadow;
              }
              .stable-ops-card.active {
                transform: scale(1.07) translateY(-6px);
                box-shadow: 0 12px 32px 0 rgba(0,0,0,0.18), 0 2px 8px 0 rgba(0,0,0,0.10);
              }
              .stable-ops-download-btn {
                opacity: 0;
                max-height: 0;
                overflow: hidden;
                padding-top: 0;
                padding-bottom: 0;
                pointer-events: none;
                transform: translateY(8px) scale(0.98);
                transition: opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1), max-height 0.25s ease-out, padding 0.25s ease-out;
              }
              .stable-ops-download-btn.active {
                opacity: 1;
                max-height: 100px;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                pointer-events: auto;
                transform: translateY(0) scale(1);
              }
            `}
          </style>
          <div
            className={`stable-ops-card bg-white/95 backdrop-blur-md shadow-xl rounded-lg sm:rounded-xl border border-white/20 overflow-hidden${
              active ? " active" : ""
            }`}
          >
            {/* Content container */}
            <div className="p-2 sm:p-4 space-y-2 sm:space-y-3">
              {/* First row: "En asociación con" + R&G Logo */}
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex-1">
                  <p className="text-xs text-gray-700 font-medium leading-tight">
                    {currentLanguage === Language.SPANISH
                      ? "En asociación con"
                      : currentLanguage === Language.ENGLISH
                      ? "In partnership with"
                      : "Em associação com"}
                  </p>
                  <p className="text-xs text-gray-600 font-medium leading-tight">
                    {currentLanguage === Language.SPANISH
                      ? "para la licencia"
                      : currentLanguage === Language.ENGLISH
                      ? "for license"
                      : "para a licença"}
                  </p>
                </div>
                <img
                  src={RandG}
                  alt="R&G"
                  className="h-8 sm:h-12 w-auto object-contain flex-shrink-0"
                />
              </div>

              {/* Stable Ops™ */}
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-lg w-full">
                  <div className="text-center">
                    <span className="font-light text-sm sm:text-xl tracking-wide">
                      Stable Ops
                    </span>
                    <sup className="text-xs ml-0.5 font-normal">™</sup>
                  </div>
                </div>
              </div>

              <button
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(true)}
                onClick={() => {
                  trackEvent(GA_EVENTS.DOWNLOAD_CLICK, {
                    file_name: "R&G-StableOps.pdf",
                    service: "flowstable-stableops",
                    location: "hero_section_card",
                    language: currentLanguage,
                    page_path: window.location.pathname,
                  });
                  const link = document.createElement("a");
                  link.href = "/assets/pdf/R&G-StableOps.pdf";
                  link.download = "R&G-StableOps.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className={`stable-ops-download-btn w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-xs sm:text-sm font-semibold rounded transition-all duration-200 shadow mt-2${
                  active ? " active" : ""
                }`}
                tabIndex={-1}
                aria-hidden="true"
              >
                {currentLanguage === Language.SPANISH
                  ? "¿Quieres conocer más? Descarga la ficha técnica de Stable Ops™"
                  : currentLanguage === Language.ENGLISH
                  ? "Want to know more? Download the Stable Ops™ technical sheet"
                  : "Quer saber mais? Baixe a ficha técnica do Stable Ops™"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSectionFlowStable;
