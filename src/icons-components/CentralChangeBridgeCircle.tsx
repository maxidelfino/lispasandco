import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const fiveSSteps = [
  {
    color: "bg-green-500",
    step: {
      es: "Generar",
      en: "Generate",
      pt: "Gerar",
    },
    title: {
      es: "Vínculos",
      en: "Bonds",
      pt: "Vínculos",
    },
  },
  {
    color: "bg-purple-500",
    step: {
      es: "Aumenta la",
      en: "Enhances",
      pt: "Aumenta a",
    },
    title: {
      es: "comunicación",
      en: "communication",
      pt: "comunicação",
    },
  },
  {
    color: "bg-blue-600",
    step: {
      es: "Fomenta la",
      en: "Fosters",
      pt: "Fomenta a",
    },
    title: {
      es: "motivación",
      en: "motivation",
      pt: "motivação",
    },
  },
  {
    color: "bg-orange-500",
    step: {
      es: "Desarrolla las",
      en: "Develops",
      pt: "Desenvolve as",
    },
    title: {
      es: "capacidades",
      en: "capabilities",
      pt: "capacidades",
    },
  },
  {
    color: "bg-yellow-500",
    step: {
      es: "Comparte el",
      en: "Shares",
      pt: "Compartilha o",
    },
    title: {
      es: "conocimiento",
      en: "knowledge",
      pt: "conhecimento",
    },
  },
];

const centralText: Record<Language, string> = {
  es: "Change Bridge™",
  en: "Change Bridge™",
  pt: "Change Bridge™",
};

const CentralChangeBridgeCircle = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="relative flex items-center justify-center h-80">
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-xl pl-7">
        {centralText[currentLanguage]}
      </div>

      {fiveSSteps.map((step, index) => {
        const angle = index * 72 - 90;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className={`absolute w-24 h-24 ${step.color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform duration-300`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <div className="text-[10px] leading-tight text-center">
              <div className="font-bold">{step.step[currentLanguage]}</div>
              <div className="mt-1">{step.title[currentLanguage]}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CentralChangeBridgeCircle;
