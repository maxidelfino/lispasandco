import React from 'react';

const LeanEnterpriseTimelineGraphic: React.FC = () => {
  const phases = [
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
      title: "Selección de areas",
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
    // {
    //   phase: "Fase 8",
    //   duration: "Fase ",
    //   title: "Auditorías finales",
    //   description: "Auditorías de gestión. Objetivos y próxima etapa",
    //   color: "bg-indigo-500",
    // },
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

export default LeanEnterpriseTimelineGraphic;