import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const phaseTranslations: Record<
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
        phase: "Fase Inicial",
        duration: "Semana 1",
        title: "Diagnóstico",
        description: "Quick Scan presencial - 1 semana de trabajo en el lugar",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 2",
        duration: "Mes 1",
        title: "Sistema de medición",
        description:
          "Discusión sobre objetivos y planes estratégicos. Entrenamiento y despliegue de herramientas (FlowStable PACK 2)",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 3",
        duration: "Mes 2",
        title: "Reuniones diarias",
        description:
          "Establecer reuniones diarias de discusión y ejecución. Recolección de primeros datos (FlowStable PACK 3)",
        color: "bg-green-500",
      },
      {
        phase: "Fase 4",
        duration: "Mes 3",
        title: "Consolidación",
        description:
          "Consolidación y autonomía del equipo interno. Retrospectiva y ajustes. Identificación de desvíos",
        color: "bg-yellow-500",
      },
      {
        phase: "Fase 5",
        duration: "Mes 4",
        title: "Resolución de problemas",
        description:
          "Inicio de resolución de problemas. Herramientas 5W1H – Herramienta A3 (FlowStable PACK 4)",
        color: "bg-orange-500",
      },
      {
        phase: "Fase 6",
        duration: "Mes 5",
        title: "Curvas de evolución",
        description:
          "Curvas de evolución. Herramientas estadísticas. Auditorías de gestión",
        color: "bg-red-500",
      },
      {
        phase: "Fase 7",
        duration: "Mes 6",
        title: "Efectos colaterales",
        description:
          "Efectos colaterales. Definición técnica y económica (FlowStable PACK 5)",
        color: "bg-purple-500",
      },
      {
        phase: "Fase 8",
        duration: "Mes 7",
        title: "Auditorías finales",
        description: "Auditorías de gestión. Objetivos y próxima etapa",
        color: "bg-indigo-500",
      },
    ],
  },
  en: {
    header: "Implementation Modality (7 MONTHS)",
    phases: [
      {
        phase: "Initial Phase",
        duration: "Week 1",
        title: "Diagnosis",
        description: "On-site Quick Scan – 1 week of on-site work",
        color: "bg-gray-500",
      },
      {
        phase: "Phase 2",
        duration: "Month 1",
        title: "Measurement System",
        description:
          "Discussion of objectives and strategic plans. Training and deployment of tools (FlowStable PACK 2)",
        color: "bg-blue-500",
      },
      {
        phase: "Phase 3",
        duration: "Month 2",
        title: "Daily Meetings",
        description:
          "Establish daily discussion and execution meetings. Collection of first data (FlowStable PACK 3)",
        color: "bg-green-500",
      },
      {
        phase: "Phase 4",
        duration: "Month 3",
        title: "Consolidation",
        description:
          "Consolidation and autonomy of the internal team. Retrospective and adjustments. Identification of deviations",
        color: "bg-yellow-500",
      },
      {
        phase: "Phase 5",
        duration: "Month 4",
        title: "Problem Solving",
        description:
          "Start of problem solving. 5W1H tools – A3 Tool (FlowStable PACK 4)",
        color: "bg-orange-500",
      },
      {
        phase: "Phase 6",
        duration: "Month 5",
        title: "Evolution Curves",
        description: "Evolution curves. Statistical tools. Management audits",
        color: "bg-red-500",
      },
      {
        phase: "Phase 7",
        duration: "Month 6",
        title: "Side Effects",
        description:
          "Side effects. Technical and economic definition (FlowStable PACK 5)",
        color: "bg-purple-500",
      },
      {
        phase: "Phase 8",
        duration: "Month 7",
        title: "Final Audits",
        description: "Management audits. Objectives and next stage",
        color: "bg-indigo-500",
      },
    ],
  },
  pt: {
    header: "Modalidade de implementação (7 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "Semana 1",
        title: "Diagnóstico",
        description: "Quick Scan presencial – 1 semana de trabalho no local",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 2",
        duration: "Mês 1",
        title: "Sistema de medição",
        description:
          "Discussão sobre objetivos e planos estratégicos. Treinamento e implantação de ferramentas (FlowStable PACK 2)",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 3",
        duration: "Mês 2",
        title: "Reuniões diárias",
        description:
          "Estabelecer reuniões diárias de discussão e execução. Coleta dos primeiros dados (FlowStable PACK 3)",
        color: "bg-green-500",
      },
      {
        phase: "Fase 4",
        duration: "Mês 3",
        title: "Consolidação",
        description:
          "Consolidação e autonomia da equipe interna. Retrospectiva e ajustes. Identificação de desvios",
        color: "bg-yellow-500",
      },
      {
        phase: "Fase 5",
        duration: "Mês 4",
        title: "Resolução de problemas",
        description:
          "Início da resolução de problemas. Ferramentas 5W1H – Ferramenta A3 (FlowStable PACK 4)",
        color: "bg-orange-500",
      },
      {
        phase: "Fase 6",
        duration: "Mês 5",
        title: "Curvas de evolução",
        description:
          "Curvas de evolução. Ferramentas estatísticas. Auditorias de gestão",
        color: "bg-red-500",
      },
      {
        phase: "Fase 7",
        duration: "Mês 6",
        title: "Efeitos colaterais",
        description:
          "Efeitos colaterais. Definição técnica e econômica (FlowStable PACK 5)",
        color: "bg-purple-500",
      },
      {
        phase: "Fase 8",
        duration: "Mês 7",
        title: "Auditorias finais",
        description: "Auditorias de gestão. Objetivos e próxima etapa",
        color: "bg-indigo-500",
      },
    ],
  },
};

const FlowStableTimelineGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const { header, phases } = phaseTranslations[lang] || phaseTranslations["es"];

  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        {header}
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
          <div className="grid grid-cols-4 gap-4">
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

export default FlowStableTimelineGraphic;
