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
      description: string;
      color: string;
    }[];
  }
> = {
  es: {
    title: "Modalidad de implementación (7 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "Semana 1 - Día 1",
        description: "Introducción al equipo de trabajo",
        color: "bg-gray-500",
      },
      {
        phase: "Encuentro 1",
        duration: "Semana 1 - Día 2",
        description:
          "Visión Estratégica: se parte de la misión y visión institucional para definir de 3 a 5 objetivos estratégicos a 5 años",
        color: "bg-blue-500",
      },
      {
        phase: "Encuentro 1",
        duration: "Semana 2 - Día 1",
        description:
          "Objetivos Anuales directamente vinculados con los estratégicos",
        color: "bg-green-500",
      },
      {
        phase: "Encuentro 2",
        duration: "Semana 2 - Día 2",
        description:
          "Se traducen los objetivos anuales en iniciativas claras por equipo, con responsables, plazos y recursos",
        color: "bg-yellow-500",
      },
      {
        phase: "Encuentro 3",
        duration: "Semana 4",
        description:
          "Cada iniciativa clave cuenta con uno o más indicadores de performance significativos, que realmente reflejan avance estratégico",
        color: "bg-orange-500",
      },
      {
        phase: "Fase Final",
        duration: "Semana 4",
        description: "Auditorías de gestión: objetivos y próxima etapa",
        color: "bg-red-500",
      },
    ],
  },
  en: {
    title: "Implementation Modality (7 MONTHS)",
    phases: [
      {
        phase: "Initial Phase",
        duration: "Week 1 - Day 1",
        description: "Introduction to the work team",
        color: "bg-gray-500",
      },
      {
        phase: "Session 1",
        duration: "Week 1 - Day 2",
        description:
          "Strategic Vision: starting from the mission and vision to define 3 to 5 strategic objectives for 5 years",
        color: "bg-blue-500",
      },
      {
        phase: "Session 1",
        duration: "Week 2 - Day 1",
        description: "Annual Objectives directly linked to the strategic ones",
        color: "bg-green-500",
      },
      {
        phase: "Session 2",
        duration: "Week 2 - Day 2",
        description:
          "Annual objectives are translated into clear initiatives by team, with owners, deadlines, and resources",
        color: "bg-yellow-500",
      },
      {
        phase: "Session 3",
        duration: "Week 4",
        description:
          "Each key initiative has one or more meaningful performance indicators that truly reflect strategic progress",
        color: "bg-orange-500",
      },
      {
        phase: "Final Phase",
        duration: "Week 4",
        description: "Management audits: objectives and next stage",
        color: "bg-red-500",
      },
    ],
  },
  pt: {
    title: "Modalidade de implementação (7 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "Semana 1 - Dia 1",
        description: "Introdução à equipe de trabalho",
        color: "bg-gray-500",
      },
      {
        phase: "Encontro 1",
        duration: "Semana 1 - Dia 2",
        description:
          "Visão Estratégica: parte-se da missão e visão institucional para definir de 3 a 5 objetivos estratégicos para 5 anos",
        color: "bg-blue-500",
      },
      {
        phase: "Encontro 1",
        duration: "Semana 2 - Dia 1",
        description: "Objetivos Anuais diretamente vinculados aos estratégicos",
        color: "bg-green-500",
      },
      {
        phase: "Encontro 2",
        duration: "Semana 2 - Dia 2",
        description:
          "Os objetivos anuais são traduzidos em iniciativas claras por equipe, com responsáveis, prazos e recursos",
        color: "bg-yellow-500",
      },
      {
        phase: "Encontro 3",
        duration: "Semana 4",
        description:
          "Cada iniciativa chave conta com um ou mais indicadores de performance significativos, que realmente refletem o avanço estratégico",
        color: "bg-orange-500",
      },
      {
        phase: "Fase Final",
        duration: "Semana 4",
        description: "Auditorias de gestão: objetivos e próxima etapa",
        color: "bg-red-500",
      },
    ],
  },
};

const StratBridgeTimelineGraphic: React.FC = () => {
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

export default StratBridgeTimelineGraphic;
