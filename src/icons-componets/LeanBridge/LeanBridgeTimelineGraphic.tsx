import React from "react";

const LeanBridgeTimelineGraphic: React.FC = () => {
  const phases = [
    // {
    //   phase: "Fase Inicial",
    //   duration: "Mes 0",
    //   title: "Diagnóstico",
    //   description: "Diagnóstico y planificación",
    //   color: "bg-gray-500",
    // },
    // {
    //   phase: "Fase 1",
    //   duration: "Mes 1",
    //   title: "Introducción",
    //   description: "Introducción al grupo. Discusión sobre objetivos y planes estratégicos.",
    //   color: "bg-blue-500",
    // },
    // {
    //   phase: "Fase 2",
    //   duration: "Mes 1",
    //   title: "Reuniones diarias",
    //   description: "Coaching interno y seguimiento. Entrenamiento y despliegue herramientas",
    //   color: "bg-green-500",
    // },
    // {
    //   phase: "Fase 3",
    //   duration: "Mes 2",
    //   title: "Consolidación",
    //   description: "Primera Reunion de Permormance. Entrenamiento y despliegue de herramientas",
    //   color: "bg-yellow-500",
    // },
    // {
    //   phase: "Fase 4",
    //   duration: "Mes 3",
    //   title: "Resolución de problemas",
    //   description: "Coaching interno y seguimiento. Entrenamiento y despliegue de herramientas",
    //   color: "bg-orange-500",
    // },
    // {
    //   phase: "Fase 6",
    //   duration: "Mes 5",
    //   title: "Curvas de evolución",
    //   description: "Curvas de evolución. Herramientas estadísticas. Auditorías de gestión",
    //   color: "bg-red-500",
    // },
    // {
    //   phase: "Fase 7",
    //   duration: "Mes 6",
    //   title: "Efectos colaterales",
    //   description: "Efectos colaterales. Definición técnica y económica (FlowStable PACK 5)",
    //   color: "bg-purple-500",
    // },
    // {
    //   phase: "Fase 8",
    //   duration: "Mes 7",
    //   title: "Auditorías finales",
    //   description: "Auditorías de gestión. Objetivos y próxima etapa",
    //   color: "bg-indigo-500",
    // },

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
        "Primera Reunion de Permormance. Entrenamiento y despliegue de herramientas",
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
        "Corrección de desvíos, customización de herramientas. Auditorias de gestión.",
      color: "bg-red-500",
    },
    {
      phase: "Fases 10",
      duration: "Mes 8",
      title: "Seguimiento de objetivos",
      description:
        "Objetivos y proxima etapa",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        Modalidad de implementación (8 MESES)
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
