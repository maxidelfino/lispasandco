import React from "react";
import { Link, Users, Target, Repeat, BarChart3 } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
  Language,
  {
    center: string;
    nodeLabels: string[];
  }
> = {
  es: {
    center: "LeanBridge™",
    nodeLabels: [
      "Conexión",
      "Empoderamiento",
      "Cultura",
      "Resultados",
      "Sostenibilidad",
    ],
  },
  en: {
    center: "LeanBridge™",
    nodeLabels: [
      "Connection",
      "Empowerment",
      "Culture",
      "Results",
      "Sustainability",
    ],
  },
  pt: {
    center: "LeanBridge™",
    nodeLabels: [
      "Conexão",
      "Empoderamento",
      "Cultura",
      "Resultados",
      "Sustentabilidade",
    ],
  },
};

const Central5SCircle = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage as Language];

  const icons = [Link, Users, Target, BarChart3, Repeat];
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-yellow-500",
    "bg-red-500",
  ];

  return (
    <div className="relative flex items-center justify-center h-80">
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-xl">
        {t.center}
      </div>

      {/* Surrounding Steps */}
      {icons.map((Icon, index) => {
        const angle = index * 72 - 90; // 360/5 = 72 degrees between each step, start from top
        const radius = 130;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <div
              className={`w-16 h-16 ${colors[index]} rounded-full flex items-center justify-center shadow-lg mb-2`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-xs font-semibold text-[var(--color-primary)] align-middle">
              {t.nodeLabels[index]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Central5SCircle;
