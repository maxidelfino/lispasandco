import {
  BarChart3,
  PieChart,
  TrendingUp,
  Calculator,
  Database,
  Target,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import type { Language } from "../types";

const statisticsTools = [
  {
    icon: BarChart3,
    titles: {
      es: "GRÁFICOS",
      en: "CHARTS",
      pt: "GRÁFICOS",
    },
    descriptions: {
      es: "Visualización",
      en: "Visualization",
      pt: "Visualização",
    },
  },
  {
    icon: PieChart,
    titles: {
      es: "ANÁLISIS",
      en: "ANALYSIS",
      pt: "ANÁLISE",
    },
    descriptions: {
      es: "Distribución",
      en: "Distribution",
      pt: "Distribuição",
    },
  },
  {
    icon: TrendingUp,
    titles: {
      es: "TENDENCIAS",
      en: "TRENDS",
      pt: "TENDÊNCIAS",
    },
    descriptions: {
      es: "Patrones",
      en: "Patterns",
      pt: "Padrões",
    },
  },
  {
    icon: Calculator,
    titles: {
      es: "CÁLCULOS",
      en: "CALCULATIONS",
      pt: "CÁLCULOS",
    },
    descriptions: {
      es: "Estadísticas",
      en: "Statistics",
      pt: "Estatísticas",
    },
  },
  {
    icon: Database,
    titles: {
      es: "DATOS",
      en: "DATA",
      pt: "DADOS",
    },
    descriptions: {
      es: "Información",
      en: "Information",
      pt: "Informação",
    },
  },
  {
    icon: Target,
    titles: {
      es: "DECISIONES",
      en: "DECISIONS",
      pt: "DECISÕES",
    },
    descriptions: {
      es: "Resultados",
      en: "Results",
      pt: "Resultados",
    },
  },
];

const DecisionesEstadisticasIcon = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {statisticsTools.map((tool, index) => {
        const Icon = tool.icon;
        const colors = [
          "from-blue-500 to-blue-600",
          "from-green-500 to-green-600",
          "from-purple-500 to-purple-600",
          "from-orange-500 to-orange-600",
          "from-red-500 to-red-600",
          "from-indigo-500 to-indigo-600",
        ];

        return (
          <div key={index} className="text-center group/stat">
            <div className="relative mb-4">
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover/stat:scale-110 transition-all duration-300 shadow-lg`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-sm">
              <div className="font-bold text-[var(--color-primary)] mb-1 leading-tight">
                {tool.titles[currentLanguage as Language]}
              </div>
              <div className="text-xs text-[var(--color-text)] opacity-70">
                {tool.descriptions[currentLanguage as Language]}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DecisionesEstadisticasIcon;
