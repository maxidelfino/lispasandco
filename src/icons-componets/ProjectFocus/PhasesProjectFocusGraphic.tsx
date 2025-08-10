import React from "react";

const phases = [
  {
    phase: "Fase Inicial",
    duration: "Día 1",
    title: "Presentación del programa al equipo",
    description: "Encuentro virtual de 2 horas",
    color: "bg-gray-500",
  },
  {
    phase: "Fase 1",
    duration: "Día 2",
    title: "Desarrollo de ideas y proyectos",
    description: "Actividad alineada con KPI y planificación estratégica",
    color: "bg-gray-500",
  },
  {
    phase: "Fase 2",
    duration: "Día 3",
    title: "Técnicas de selección de proyectos o iniciativa",
    description: "Presentación grupal de proyectos",
    color: "bg-blue-500",
  },
  {
    phase: "Fase 3",
    duration: "Día 4",
    title: "Matriz impacto-beneficio",
    description: "Discusión grupal de costos, riesgos y beneficios",
    color: "bg-green-500",
  },
  {
    phase: "Fase 4",
    duration: "Día 4",
    title: "Matriz de responsabilidades",
    description: "Definición de responsabilidades y tiempos",
    color: "bg-yellow-500",
  },
  {
    phase: "Fase 5",
    duration: "Día 5",
    title: "Seguimiento de proyectos",
    description: "Gestión visual del seguimiento",
    color: "bg-orange-500",
  },
  {
    phase: "Fase Final",
    duration: "Mes 11",
    title: "Documento final de seguimiento",
    description: "Documento final de trabajo - Seguimiento de objetivos",
    color: "bg-purple-500",
  },
];

const MethodologyGraphic: React.FC = () => (
  <div className="pt-8 pb-4">
    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
      Modalidad de implementación (11 MESES)
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

export default MethodologyGraphic;
