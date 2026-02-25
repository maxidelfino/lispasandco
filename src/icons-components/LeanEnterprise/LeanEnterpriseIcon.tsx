import {
  Building2,
  Users,
  Cog,
  TrendingUp,
  Target,
  Award,
  Network,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
  Language,
  {
    elements: {
      title: string;
    }[];
    center: {
      line1: string;
      line2: string;
    };
  }
> = {
  es: {
    elements: [
      { title: "ORGANIZACIÓN" },
      { title: "EQUIPOS" },
      { title: "PROCESOS" },
      { title: "MEJORA" },
      { title: "OBJETIVOS" },
      { title: "RESULTADOS" },
    ],
    center: {
      line1: "LEAN",
      line2: "ENTERPRISE",
    },
  },
  en: {
    elements: [
      { title: "ORGANIZATION" },
      { title: "TEAMS" },
      { title: "PROCESSES" },
      { title: "IMPROVEMENT" },
      { title: "GOALS" },
      { title: "RESULTS" },
    ],
    center: {
      line1: "LEAN",
      line2: "ENTERPRISE",
    },
  },
  pt: {
    elements: [
      { title: "ORGANIZAÇÃO" },
      { title: "EQUIPES" },
      { title: "PROCESSOS" },
      { title: "MELHORIA" },
      { title: "OBJETIVOS" },
      { title: "RESULTADOS" },
    ],
    center: {
      line1: "LEAN",
      line2: "ENTERPRISE",
    },
  },
};

const LeanEnterpriseIcon = () => {
  const { currentLanguage } = useLanguage();

  const enterpriseElements = [
    { icon: Building2, position: { x: 0, y: -130 } },
    { icon: Users, position: { x: 100, y: -70 } },
    { icon: Cog, position: { x: 100, y: 70 } },
    { icon: TrendingUp, position: { x: 0, y: 130 } },
    { icon: Target, position: { x: -100, y: 70 } },
    { icon: Award, position: { x: -100, y: -70 } },
  ];

  const t = translations[currentLanguage as Language];

  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Central Enterprise Hub */}
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl flex items-center justify-center text-white font-bold text-lg z-10 shadow-xl transform rotate-45">
        <div className="text-center transform -rotate-45">
          <Network className="w-8 h-8 mx-auto mb-1" />
          <div className="text-xs">{t.center.line1}</div>
          <div className="text-xs">{t.center.line2}</div>
        </div>
      </div>

      {/* Enterprise Elements */}
      {enterpriseElements.map((element, index) => {
        const Icon = element.icon;
        const colors = [
          "bg-blue-500",
          "bg-green-500",
          "bg-purple-500",
          "bg-orange-500",
          "bg-red-500",
          "bg-indigo-500",
        ];

        return (
          <div
            key={index}
            className={`absolute w-20 h-20 ${colors[index]} rounded-xl flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-all duration-300 group/element`}
            style={{
              left: `calc(50% + ${element.position.x}px)`,
              top: `calc(50% + ${element.position.y}px)`,
            }}
          >
            <Icon className="w-6 h-6 mb-1 group-hover/element:scale-110 transition-transform" />
            <div className="text-[9px] text-center leading-tight px-1">
              {t.elements[index].title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeanEnterpriseIcon;
