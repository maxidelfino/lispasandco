import React from "react";
import { Building2, TrendingUp, Award, Users, Cog, Target } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const gridItemsTranslations: Record<
  Language,
  {
    icon: React.ElementType;
    label: string;
    color: string;
    description: string;
  }[]
> = {
  es: [
    {
      icon: Building2,
      label: "Organización",
      color: "bg-blue-500",
      description: "Estructura y alineación organizacional.",
    },
    {
      icon: Users,
      label: "Equipos",
      color: "bg-green-500",
      description: "Colaboración y desarrollo de equipos.",
    },
    {
      icon: Cog,
      label: "Procesos",
      color: "bg-purple-500",
      description: "Estandarización y mejora continua.",
    },
    {
      icon: TrendingUp,
      label: "Mejora",
      color: "bg-orange-500",
      description: "Crecimiento y optimización constante.",
    },
    {
      icon: Target,
      label: "Objetivos",
      color: "bg-red-500",
      description: "Metas claras y enfoque estratégico.",
    },
    {
      icon: Award,
      label: "Resultados",
      color: "bg-indigo-500",
      description: "Logro de resultados sobresalientes.",
    },
  ],
  en: [
    {
      icon: Building2,
      label: "Organization",
      color: "bg-blue-500",
      description: "Structure and organizational alignment.",
    },
    {
      icon: Users,
      label: "Teams",
      color: "bg-green-500",
      description: "Collaboration and team development.",
    },
    {
      icon: Cog,
      label: "Processes",
      color: "bg-purple-500",
      description: "Standardization and continuous improvement.",
    },
    {
      icon: TrendingUp,
      label: "Improvement",
      color: "bg-orange-500",
      description: "Constant growth and optimization.",
    },
    {
      icon: Target,
      label: "Objectives",
      color: "bg-red-500",
      description: "Clear goals and strategic focus.",
    },
    {
      icon: Award,
      label: "Results",
      color: "bg-indigo-500",
      description: "Achievement of outstanding results.",
    },
  ],
  pt: [
    {
      icon: Building2,
      label: "Organização",
      color: "bg-blue-500",
      description: "Estrutura e alinhamento organizacional.",
    },
    {
      icon: Users,
      label: "Equipes",
      color: "bg-green-500",
      description: "Colaboração e desenvolvimento de equipes.",
    },
    {
      icon: Cog,
      label: "Processos",
      color: "bg-purple-500",
      description: "Padronização e melhoria contínua.",
    },
    {
      icon: TrendingUp,
      label: "Melhoria",
      color: "bg-orange-500",
      description: "Crescimento e otimização constante.",
    },
    {
      icon: Target,
      label: "Objetivos",
      color: "bg-red-500",
      description: "Metas claras e foco estratégico.",
    },
    {
      icon: Award,
      label: "Resultados",
      color: "bg-indigo-500",
      description: "Alcance de resultados excepcionais.",
    },
  ],
};

const OpsBridgeIcon: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const gridItems = gridItemsTranslations[lang];

  return (
    <div className="w-full max-w-2xl mx-auto p-4 h-80">
      <div className="grid grid-cols-3 gap-3 mb-3">
        {gridItems.slice(0, 3).map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-center rounded-xl shadow-md p-3 min-h-[90px] min-w-[90px] text-center border border-gray-100 ${item.color} text-white font-semibold`}
            >
              {Icon && <Icon className="w-7 h-7 mb-1 opacity-90 drop-shadow" />}
              <div className="text-[13px] mb-1">{item.label}</div>
              <div className="text-[10px] opacity-80">{item.description}</div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {gridItems.slice(3, 5).map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-center rounded-xl shadow-md p-3 min-h-[90px] w-full text-center border border-gray-100 ${item.color} text-white font-semibold`}
            >
              {Icon && <Icon className="w-7 h-7 mb-1 opacity-90 drop-shadow" />}
              <div className="text-[13px] mb-1">{item.label}</div>
              <div className="text-[10px] opacity-80">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpsBridgeIcon;
