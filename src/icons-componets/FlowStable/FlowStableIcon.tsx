import {
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  CheckCircle,
  Activity,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const flowElementsTranslations: Record<
  Language,
  { icon: any; title: string; color: string }[]
> = {
  es: [
    { icon: Target, title: "ESTABILIDAD", color: "bg-blue-500" },
    {
      icon: BarChart3,
      title: "MÉTRICAS",
      color: "bg-[var(--color-secondary)]",
    },
    { icon: TrendingUp, title: "MEJORA", color: "bg-green-500" },
    { icon: Activity, title: "CONTROL", color: "bg-purple-600" },
    { icon: CheckCircle, title: "CALIDAD", color: "bg-orange-500" },
    { icon: Zap, title: "EFICIENCIA", color: "bg-red-500" },
  ],
  en: [
    { icon: Target, title: "STABILITY", color: "bg-blue-500" },
    { icon: BarChart3, title: "METRICS", color: "bg-[var(--color-secondary)]" },
    { icon: TrendingUp, title: "IMPROVEMENT", color: "bg-green-500" },
    { icon: Activity, title: "CONTROL", color: "bg-purple-600" },
    { icon: CheckCircle, title: "QUALITY", color: "bg-orange-500" },
    { icon: Zap, title: "EFFICIENCY", color: "bg-red-500" },
  ],
  pt: [
    { icon: Target, title: "ESTABILIDADE", color: "bg-blue-500" },
    {
      icon: BarChart3,
      title: "MÉTRICAS",
      color: "bg-[var(--color-secondary)]",
    },
    { icon: TrendingUp, title: "MELHORIA", color: "bg-green-500" },
    { icon: Activity, title: "CONTROLE", color: "bg-purple-600" },
    { icon: CheckCircle, title: "QUALIDADE", color: "bg-orange-500" },
    { icon: Zap, title: "EFICIÊNCIA", color: "bg-red-500" },
  ],
};

const flowCenterTranslations: Record<Language, string> = {
  es: "FLOW",
  en: "FLOW",
  pt: "FLOW",
};

const FlowStableIcon = () => {
  const { currentLanguage } = useLanguage();

  const flowElements =
    flowElementsTranslations[currentLanguage as Language] ||
    flowElementsTranslations["es"];
  const flowCenter =
    flowCenterTranslations[currentLanguage as Language] || "FLOW";

  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Central Flow Circle */}
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-xl">
        <div className="text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-1" />
          <div className="text-sm">{flowCenter}</div>
        </div>
      </div>

      {/* Surrounding Elements */}
      {flowElements.map((element, index) => {
        const angle = index * 60 - 90; // 360/6 = 60 degrees between each element
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const Icon = element.icon;

        return (
          <div
            key={index}
            className={`absolute w-16 h-16 ${element.color} rounded-xl flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform duration-300`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <Icon className="w-6 h-6 mb-1" />
            <div className="text-[8px] text-center leading-tight">
              {element.title}
            </div>
          </div>
        );
      })}

      {/* Connecting Lines */}
      {flowElements.map((_, index) => {
        const angle = index * 60 - 90;
        const startRadius = 66;
        const endRadius = 88;
        const x1 = Math.cos((angle * Math.PI) / 180) * startRadius;
        const y1 = Math.sin((angle * Math.PI) / 180) * startRadius;
        const x2 = Math.cos((angle * Math.PI) / 180) * endRadius;
        const y2 = Math.sin((angle * Math.PI) / 180) * endRadius;

        return (
          <svg
            key={index}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <line
              x1={`calc(50% + ${x1}px)`}
              y1={`calc(50% + ${y1}px)`}
              x2={`calc(50% + ${x2}px)`}
              y2={`calc(50% + ${y2}px)`}
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeDasharray="4,4"
              opacity="0.4"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default FlowStableIcon;
