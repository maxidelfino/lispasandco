import React from 'react';

const FlowStableTimelineGraphic: React.FC = () => {
  const phases = [
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
      description: "Discusión sobre objetivos y planes estratégicos. Entrenamiento y despliegue de herramientas (FlowStable PACK 2)",
      color: "bg-blue-500",
    },
    {
      phase: "Fase 3",
      duration: "Mes 2",
      title: "Reuniones diarias",
      description: "Establecer reuniones diarias de discusión y ejecución. Recolección de primeros datos (FlowStable PACK 3)",
      color: "bg-green-500",
    },
    {
      phase: "Fase 4",
      duration: "Mes 3",
      title: "Consolidación",
      description: "Consolidación y autonomía del equipo interno. Retrospectiva y ajustes. Identificación de desvíos",
      color: "bg-yellow-500",
    },
    {
      phase: "Fase 5",
      duration: "Mes 4",
      title: "Resolución de problemas",
      description: "Inicio de resolución de problemas. Herramientas 5W1H – Herramienta A3 (FlowStable PACK 4)",
      color: "bg-orange-500",
    },
    {
      phase: "Fase 6",
      duration: "Mes 5",
      title: "Curvas de evolución",
      description: "Curvas de evolución. Herramientas estadísticas. Auditorías de gestión",
      color: "bg-red-500",
    },
    {
      phase: "Fase 7",
      duration: "Mes 6",
      title: "Efectos colaterales",
      description: "Efectos colaterales. Definición técnica y económica (FlowStable PACK 5)",
      color: "bg-purple-500",
    },
    {
      phase: "Fase 8",
      duration: "Mes 7",
      title: "Auditorías finales",
      description: "Auditorías de gestión. Objetivos y próxima etapa",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        Modalidad de implementación (7 MESES)
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
                className={`${index >= 4 ? 'mt-8' : ''} bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`w-4 h-4 ${phase.color} rounded-full mb-2`}></div>
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
                <div className={`w-8 h-8 ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
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