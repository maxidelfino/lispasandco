import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
  Language,
  {
    header: string;
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
    header: "Modalidad de implementación (7 MESES)",
    phases: [
      {
        phase: "Fase 1",
        duration: "Fase 1",
        title: "Mapa de flujos y de valor",
        description: "Diagnóstico inicial (escaneo de oportunidades)",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 2",
        duration: "Fase 2",
        title: "Alineación de objetivos",
        description: "Alineación con la dirección (visión, objetivos, foco)",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 3",
        duration: "Fase 3",
        title: "Prácticas de gestión del cambio",
        description: "Selección de áreas piloto y métricas iniciales",
        color: "bg-green-500",
      },
      {
        phase: "Fase 4",
        duration: "Fase 4",
        title: "Metodologías de base",
        description: "Implementación de herramientas base",
        color: "bg-yellow-500",
      },
      {
        phase: "Fase 5",
        duration: "Fase 5",
        title: "Selección de áreas",
        description: "Desarrollo de cultura visual y liderazgo participativo",
        color: "bg-orange-500",
      },
      {
        phase: "Fase 6",
        duration: "Fase 6",
        title: "Métrica crítica de valor",
        description: "Expansión progresiva al resto de la organización",
        color: "bg-red-500",
      },
      {
        phase: "Fase 7",
        duration: "Fase 7",
        title: "Estabilización",
        description: "Consolidación con seguimiento e indicadores reales",
        color: "bg-purple-500",
      },
    ],
  },
  en: {
    header: "Implementation modality (7 MONTHS)",
    phases: [
      {
        phase: "Phase 1",
        duration: "Phase 1",
        title: "Value Stream Mapping",
        description: "Initial diagnosis (opportunity scan)",
        color: "bg-gray-500",
      },
      {
        phase: "Phase 2",
        duration: "Phase 2",
        title: "Objectives Alignment",
        description: "Alignment with management (vision, objectives, focus)",
        color: "bg-blue-500",
      },
      {
        phase: "Phase 3",
        duration: "Phase 3",
        title: "Change Management Practices",
        description: "Selection of pilot areas and initial metrics",
        color: "bg-green-500",
      },
      {
        phase: "Phase 4",
        duration: "Phase 4",
        title: "Core Methodologies",
        description: "Implementation of basic tools",
        color: "bg-yellow-500",
      },
      {
        phase: "Phase 5",
        duration: "Phase 5",
        title: "Area Selection",
        description:
          "Development of visual culture and participative leadership",
        color: "bg-orange-500",
      },
      {
        phase: "Phase 6",
        duration: "Phase 6",
        title: "Critical Value Metric",
        description: "Progressive expansion to the rest of the organization",
        color: "bg-red-500",
      },
      {
        phase: "Phase 7",
        duration: "Phase 7",
        title: "Stabilization",
        description: "Consolidation with follow-up and real indicators",
        color: "bg-purple-500",
      },
    ],
  },
  pt: {
    header: "Modalidade de implementação (7 MESES)",
    phases: [
      {
        phase: "Fase 1",
        duration: "Fase 1",
        title: "Mapeamento de Fluxo de Valor",
        description: "Diagnóstico inicial (varredura de oportunidades)",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 2",
        duration: "Fase 2",
        title: "Alinhamento de Objetivos",
        description: "Alinhamento com a direção (visão, objetivos, foco)",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 3",
        duration: "Fase 3",
        title: "Práticas de Gestão de Mudanças",
        description: "Seleção de áreas piloto e métricas iniciais",
        color: "bg-green-500",
      },
      {
        phase: "Fase 4",
        duration: "Fase 4",
        title: "Metodologias Básicas",
        description: "Implementação de ferramentas básicas",
        color: "bg-yellow-500",
      },
      {
        phase: "Fase 5",
        duration: "Fase 5",
        title: "Seleção de Áreas",
        description:
          "Desenvolvimento de cultura visual e liderança participativa",
        color: "bg-orange-500",
      },
      {
        phase: "Fase 6",
        duration: "Fase 6",
        title: "Métrica Crítica de Valor",
        description: "Expansão progressiva para o restante da organização",
        color: "bg-red-500",
      },
      {
        phase: "Fase 7",
        duration: "Fase 7",
        title: "Estabilização",
        description: "Consolidação com acompanhamento e indicadores reais",
        color: "bg-purple-500",
      },
    ],
  },
};

const LeanEnterpriseTimelineGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        {t.header}
      </h3>

      {/* Desktop Timeline */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Timeline header */}
          <div className="flex justify-between items-center mb-8">
            {t.phases.map((phase, index) => (
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
              {t.phases.map((phase, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 ${phase.color} rounded-full border-4 border-white shadow-lg z-10 relative`}
                ></div>
              ))}
            </div>
          </div>

          {/* Phase details */}
          <div className="grid grid-cols-4 gap-4">
            {t.phases.map((phase, index) => (
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
          {t.phases.map((phase, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}
                >
                  {index + 1}
                </div>
                {index < t.phases.length - 1 && (
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

export default LeanEnterpriseTimelineGraphic;
