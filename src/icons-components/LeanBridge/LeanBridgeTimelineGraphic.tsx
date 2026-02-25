import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
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
    title: "Modalidad de implementación (8 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "Mes 0",
        title: "Diagnóstico y planificación",
        description: "1 semana presencial",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 1",
        duration: "Mes 0",
        title: "Introducción y PACK 1",
        description:
          "Introducción al grupo. Discusión sobre objetivos y planes estratégicos.",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 2",
        duration: "Mes 1",
        title: "Coaching y PACK 2",
        description:
          "Coaching interno y seguimiento. Entrenamiento y despliegue de herramientas",
        color: "bg-green-500",
      },
      {
        phase: "Fase 3",
        duration: "Mes 2",
        title: "Performance y PACK 3",
        description:
          "Primera Reunión de Performance. Entrenamiento y despliegue de herramientas",
        color: "bg-purple-500",
      },
      {
        phase: "Fase 4",
        duration: "Mes 3",
        title: "Coaching y PACK 4",
        description:
          "Coaching interno y seguimiento. Entrenamiento y despliegue de herramientas",
        color: "bg-orange-500",
      },
      {
        phase: "Fase 5",
        duration: "Mes 4",
        title: "Consolidación",
        description:
          "Consolidación y autonomía del equipo interno. Retrospectiva y ajustes",
        color: "bg-indigo-500",
      },
      {
        phase: "Fases 6-9",
        duration: "Meses 5-8",
        title: "Auditorías",
        description:
          "Corrección de desvíos, customización de herramientas. Auditorías de gestión.",
        color: "bg-red-500",
      },
      {
        phase: "Fase 10",
        duration: "Mes 8",
        title: "Seguimiento de objetivos",
        description: "Objetivos y próxima etapa",
        color: "bg-red-500",
      },
    ],
  },
  en: {
    title: "Implementation Modality (8 MONTHS)",
    phases: [
      {
        phase: "Initial Phase",
        duration: "Month 0",
        title: "Diagnosis and Planning",
        description: "1 week on-site",
        color: "bg-gray-500",
      },
      {
        phase: "Phase 1",
        duration: "Month 0",
        title: "Introduction & PACK 1",
        description:
          "Group introduction. Discussion of objectives and strategic plans.",
        color: "bg-blue-500",
      },
      {
        phase: "Phase 2",
        duration: "Month 1",
        title: "Coaching & PACK 2",
        description:
          "Internal coaching and follow-up. Training and deployment of tools",
        color: "bg-green-500",
      },
      {
        phase: "Phase 3",
        duration: "Month 2",
        title: "Performance & PACK 3",
        description:
          "First Performance Meeting. Training and deployment of tools",
        color: "bg-purple-500",
      },
      {
        phase: "Phase 4",
        duration: "Month 3",
        title: "Coaching & PACK 4",
        description:
          "Internal coaching and follow-up. Training and deployment of tools",
        color: "bg-orange-500",
      },
      {
        phase: "Phase 5",
        duration: "Month 4",
        title: "Consolidation",
        description:
          "Consolidation and autonomy of the internal team. Retrospective and adjustments",
        color: "bg-indigo-500",
      },
      {
        phase: "Phases 6-9",
        duration: "Months 5-8",
        title: "Audits",
        description:
          "Correction of deviations, customization of tools. Management audits.",
        color: "bg-red-500",
      },
      {
        phase: "Phase 10",
        duration: "Month 8",
        title: "Objectives Follow-up",
        description: "Objectives and next stage",
        color: "bg-red-500",
      },
    ],
  },
  pt: {
    title: "Modalidade de implementação (8 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "Mês 0",
        title: "Diagnóstico e planejamento",
        description: "1 semana presencial",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 1",
        duration: "Mês 0",
        title: "Introdução e PACK 1",
        description:
          "Introdução ao grupo. Discussão sobre objetivos e planos estratégicos.",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 2",
        duration: "Mês 1",
        title: "Coaching e PACK 2",
        description:
          "Coaching interno e acompanhamento. Treinamento e implantação de ferramentas",
        color: "bg-green-500",
      },
      {
        phase: "Fase 3",
        duration: "Mês 2",
        title: "Performance e PACK 3",
        description:
          "Primeira Reunião de Performance. Treinamento e implantação de ferramentas",
        color: "bg-purple-500",
      },
      {
        phase: "Fase 4",
        duration: "Mês 3",
        title: "Coaching e PACK 4",
        description:
          "Coaching interno e acompanhamento. Treinamento e implantação de ferramentas",
        color: "bg-orange-500",
      },
      {
        phase: "Fase 5",
        duration: "Mês 4",
        title: "Consolidação",
        description:
          "Consolidação e autonomia da equipe interna. Retrospectiva e ajustes",
        color: "bg-indigo-500",
      },
      {
        phase: "Fases 6-9",
        duration: "Meses 5-8",
        title: "Auditorias",
        description:
          "Correção de desvios, customização de ferramentas. Auditorias de gestão.",
        color: "bg-red-500",
      },
      {
        phase: "Fase 10",
        duration: "Mês 8",
        title: "Acompanhamento de objetivos",
        description: "Objetivos e próxima etapa",
        color: "bg-red-500",
      },
    ],
  },
};

const LeanBridgeTimelineGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const phases = t.phases;

  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        {t.title}
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

export default LeanBridgeTimelineGraphic;
