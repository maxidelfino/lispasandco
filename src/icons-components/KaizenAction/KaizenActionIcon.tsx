import {
  Lightbulb,
  Target,
  Zap,
  CheckCircle,
  Cog,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Language } from "../../types";

const KAIZEN_LABELS: Record<Language, string> = {
  es: "KAIZEN",
  en: "KAIZEN",
  pt: "KAIZEN",
};

const KAIZEN_STEPS: Record<
  Language,
  { icon: React.ElementType; title: string; color: string }[]
> = {
  es: [
    { icon: Target, title: "DEFINIR", color: "bg-red-500" },
    { icon: TrendingUp, title: "MEDIR", color: "bg-blue-500" },
    { icon: Lightbulb, title: "ANALIZAR", color: "bg-yellow-500" },
    { icon: Cog, title: "MEJORAR", color: "bg-green-500" },
    { icon: CheckCircle, title: "CONTROLAR", color: "bg-purple-500" },
  ],
  en: [
    { icon: Target, title: "DEFINE", color: "bg-red-500" },
    { icon: TrendingUp, title: "MEASURE", color: "bg-blue-500" },
    { icon: Lightbulb, title: "ANALYZE", color: "bg-yellow-500" },
    { icon: Cog, title: "IMPROVE", color: "bg-green-500" },
    { icon: CheckCircle, title: "CONTROL", color: "bg-purple-500" },
  ],
  pt: [
    { icon: Target, title: "DEFINIR", color: "bg-red-500" },
    { icon: TrendingUp, title: "MEDIR", color: "bg-blue-500" },
    { icon: Lightbulb, title: "ANALISAR", color: "bg-yellow-500" },
    { icon: Cog, title: "MELHORAR", color: "bg-green-500" },
    { icon: CheckCircle, title: "CONTROLAR", color: "bg-purple-500" },
  ],
};

const KaizenActionIcon = () => {
  const { currentLanguage } = useLanguage();

  // fallback to Spanish if language not found
  const steps = KAIZEN_STEPS[currentLanguage as Language] || KAIZEN_STEPS["es"];
  const kaizenLabel = KAIZEN_LABELS[currentLanguage as Language] || "KAIZEN";

  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Central Kaizen Circle */}
      <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-xl">
        <div className="text-center">
          <Zap className="w-8 h-8 mx-auto mb-1" />
          <div className="text-sm">{kaizenLabel}</div>
        </div>
      </div>

      {/* DMAIC Steps in Circle */}
      {steps.map((step, index) => {
        const angle = index * 72 - 90; // 360/5 = 72 degrees
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const Icon = step.icon;

        return (
          <div
            key={index}
            className={`absolute w-18 h-18 ${step.color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform duration-300`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: "80px",
              height: "80px",
            }}
          >
            <Icon className="w-6 h-6 mb-1" />
            <div className="text-[10px] text-center leading-tight">
              {step.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KaizenActionIcon;
