import React from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

interface CTAButtonsProps {
  contactLabel?: string;
  downloadLabel?: string;
  onContact?: () => void;
  onDownload?: () => void;
}

 const getContactLabel = (language: Language): string => {
  switch (language) {
    case Language.ENGLISH:
      return "Contact";
    case Language.PORTUGUESE:
      return "Contatar";
    case Language.SPANISH:
    default:
      return "Contactar";
  }
};

const getDownloadLabel = (language: Language): string => {
  switch (language) {
    case Language.ENGLISH:
      return "Download Technical Sheet";
    case Language.PORTUGUESE:
      return "Baixar Ficha Técnica";
    case Language.SPANISH:
    default:
      return "Descargar Ficha Técnica";
  }
};

const CTAButtons: React.FC<CTAButtonsProps> = ({
  contactLabel,
  downloadLabel,
  onContact,
  onDownload,
}) => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();

  const resolvedContactLabel = contactLabel ?? getContactLabel(currentLanguage);
  const resolvedDownloadLabel =
    downloadLabel ?? getDownloadLabel(currentLanguage);

  const handleContact = () => {
    if (onContact) return onContact();
    // por defecto, scroll al footer
    navigate("/");
    setTimeout(() => {
      const footer = document.querySelector("footer");
      footer?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleDownload = () => {
    if (onDownload) return onDownload();
    // por defecto, descarga el PDF desde assets/pdf
    const link = document.createElement("a");
    link.href = "/assets/pdf/ficha-tecnica.pdf";
    link.download = "Ficha-Tecnica.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <button
        onClick={handleContact}
        className="group bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
      >
        <span>{resolvedContactLabel}</span>
      </button>
      <button
        onClick={handleDownload}
        className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] hover:scale-105 hover:shadow-2xl"
      >
        <span>{resolvedDownloadLabel}</span>
      </button>
    </div>
  );
};

export default CTAButtons;
