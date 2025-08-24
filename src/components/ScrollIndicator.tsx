import React from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

type ScrollIndicatorProps = {
  scrollToContent: () => void;
  className?: string;
  label?: string;
};

const getDefaultLabel = (language: Language): string => {
  switch (language) {
    case Language.ENGLISH:
      return "Scroll down or tap here to learn more about the program";
    case Language.PORTUGUESE:
      return "Deslize para baixo ou toque aqui para saber mais sobre o programa";
    case Language.SPANISH:
    default:
      return "Desliza hacia abajo o toca aquí para conocer más sobre el programa";
  }
};

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  scrollToContent,
  className = "",
  label,
}) => {
  const { currentLanguage } = useLanguage();
  const displayLabel = label ?? getDefaultLabel(currentLanguage);

  return (
    <div
      className={`absolute bottom-8 inset-x-0 flex flex-col items-center z-10 animate-bounce text-white/80 ${className}`}
      aria-hidden="false"
      tabIndex={-1}
    >
      <button
        type="button"
        onClick={scrollToContent}
        className="hover:text-white transition-all duration-300 hover:scale-110 flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        aria-label={displayLabel}
      >
        <span className="mb-2 text-sm">{displayLabel}</span>
        <ChevronDown className="w-8 h-8" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollIndicator;
