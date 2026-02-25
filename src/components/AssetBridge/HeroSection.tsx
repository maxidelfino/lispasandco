import type React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
import { useDownloadPdf } from "../../hooks/useDownloadPdf";

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();

  // Traducciones
  const badgeText = (() => {
    switch (currentLanguage) {
      case Language.ENGLISH:
        return "Perfect the operation";
      case Language.PORTUGUESE:
        return "Aperfeiçoe a operação";
      default:
        return "Perfeccionar la operación";
    }
  })();

  const mainTitle = (() => {
    switch (currentLanguage) {
      case Language.ENGLISH:
        return (
          <>
            <span className="block">AssetBridge™</span>
            <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
              Connects people, assets and processes
            </span>
            <span className="block text-3xl md:text-4xl font-normal text-white/80">
              for efficient and safe operation
            </span>
          </>
        );
      case Language.PORTUGUESE:
        return (
          <>
            <span className="block">AssetBridge™</span>
            <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
              Conecta pessoas, ativos e processos
            </span>
            <span className="block text-3xl md:text-4xl font-normal text-white/80">
              para uma operação eficiente e segura
            </span>
          </>
        );
      default:
        return (
          <>
            <span className="block">AssetBridge™</span>
            <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
              Sistema integrado de gestión de activos
            </span>
          </>
        );
    }
  })();

  const subtitle = (() => {
    switch (currentLanguage) {
      case Language.ENGLISH:
        return (
          <>
            Proper maintenance not only improves their technical performance,
            but also ensures their availability when they are needed and
            maximizes opportunities to capture value.
          </>
        );
      case Language.PORTUGUESE:
        return (
          <>
            Uma manutenção adequada não só melhora seu desempenho técnico, como
            também garante sua disponibilidade quando forem necessários e
            maximiza as oportunidades de captura de valor.
          </>
        );
      default:
        return (
          <>
            Un mantenimiento apropiado no sólo mejora su desempeño técnico, sino
            que asegura su disponibilidad cuando se los necesite y maximiza las
            oportunidades de captura de valor.
          </>
        );
    }
  })();

  const pdfInfo = (() => {
    switch (currentLanguage) {
      case Language.ENGLISH:
        return {
          href: "assets/pdf/LYS-P116-AssetBridge.pdf",
          download: "LYS-P116-AssetBridge.pdf",
        };
      case Language.PORTUGUESE:
        return {
          href: "assets/pdf/LYS-P216-AssetBridge.pdf",
          download: "LYS-P216-AssetBridge.pdf",
        };
      default:
        return {
          href: "assets/pdf/LYS-P016-AssetBridge.pdf",
          download: "LYS-P016-AssetBridge.pdf",
        };
    }
  })();

  const onDownload = useDownloadPdf(pdfInfo.href, pdfInfo.download);

  return (
    <HeroBase
      badge={badgeText}
      title={mainTitle}
      subtitles={[subtitle]}
      scrollTargetId="AssetBridge-content"
      onDownload={onDownload}
      backgroundVariant="squares"
    />
  );
};

export default HeroSection;
