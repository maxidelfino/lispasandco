import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const PHASES: Record<
  Language,
  {
    title: string;
    phases: {
      phase: string;
      duration: string;
      title: string;
      description: string;
      color: string;
    }[];
  }
> = {
  es: {
    title: "Modalidad de implementación (6 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "3 días on site",
        title: "Evaluación inicial",
        description: "",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 1",
        duration: "3 semanas",
        title: "Diagnóstico de situación",
        description: "",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 2",
        duration: "1 día",
        title: "Decidir inversión",
        description: "",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 3",
        duration: "Indefinido",
        title: "Compra y montaje",
        description: "",
        color: "bg-green-500",
      },
      {
        phase: "Fase 4",
        duration: "4/6 meses",
        title:
          "Puesta en marcha / creación lazos de control / generación de métricas",
        description: "",
        color: "bg-yellow-500",
      },
    ],
  },
  en: {
    title: "Implementation Modality (6 MONTHS)",
    phases: [
      {
        phase: "Initial Phase",
        duration: "3 days on site",
        title: "Initial assessment",
        description: "",
        color: "bg-gray-500",
      },
      {
        phase: "Phase 1",
        duration: "3 weeks",
        title: "Situation diagnosis",
        description: "",
        color: "bg-gray-500",
      },
      {
        phase: "Phase 2",
        duration: "1 day",
        title: "Investment decision",
        description: "",
        color: "bg-blue-500",
      },
      {
        phase: "Phase 3",
        duration: "Indefinite",
        title: "Purchase and installation",
        description: "",
        color: "bg-green-500",
      },
      {
        phase: "Phase 4",
        duration: "4/6 months",
        title: "Start-up / creation of control loops / generation of metrics",
        description: "",
        color: "bg-yellow-500",
      },
    ],
  },
  pt: {
    title: "Modalidade de implementação (6 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "3 dias no local",
        title: "Avaliação inicial",
        description: "",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 1",
        duration: "3 semanas",
        title: "Diagnóstico da situação",
        description: "",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 2",
        duration: "1 dia",
        title: "Decisão de investimento",
        description: "",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 3",
        duration: "Indefinido",
        title: "Compra e montagem",
        description: "",
        color: "bg-green-500",
      },
      {
        phase: "Fase 4",
        duration: "4/6 meses",
        title: "Início / criação de laços de controle / geração de métricas",
        description: "",
        color: "bg-yellow-500",
      },
    ],
  },
};

const MethodologyGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const { title, phases } = PHASES[lang];

  return (
    <div className="pt-8 pb-4">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        {title}
      </h3>

      {/* Desktop Timeline */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Timeline header */}
          <div className="flex justify-between items-center mb-8">
            {phases.map((phase, index) => (
              <div key={index} className="text-center flex-1">
                <div className="text-sm font-semibold text-[var(--color-secondary)]">
                  {phase.duration}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline line */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[var(--color-border)] transform -translate-y-1/2"></div>
            <div className="flex justify-between">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 ${phase.color} rounded-full border-4 border-white shadow-lg z-10 relative`}
                ></div>
              ))}
            </div>
          </div>

          {/* Phase details */}
          <div className="grid grid-cols-4 gap-4 pb-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`${
                  index >= 4 ? "mt-8" : ""
                } bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-300`}
              >
                <div
                  className={`w-4 h-4 ${phase.color} rounded-full mb-2`}
                ></div>
                <h4 className="font-bold text-[var(--color-primary)] mb-1 text-sm">
                  {phase.phase}
                </h4>
                <h5 className="font-semibold text-[var(--color-secondary)] mb-2 text-sm">
                  {phase.title}
                </h5>
                <p className="text-xs text-[var(--color-text)] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="block lg:hidden">
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}
                >
                  {index + 1}
                </div>
                {index < phases.length - 1 && (
                  <div className="w-0.5 h-16 bg-[var(--color-border)] mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-[var(--color-primary)] text-sm">
                      {phase.phase}
                    </h4>
                    <span className="text-xs text-[var(--color-secondary)] font-semibold">
                      {phase.duration}
                    </span>
                  </div>
                  <h5 className="font-semibold text-[var(--color-secondary)] mb-2 text-sm">
                    {phase.title}
                  </h5>
                  <p className="text-xs text-[var(--color-text)] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologyGraphic;
