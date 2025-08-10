import React from "react";

const headers = ["", "S1D1", "S1D2", "S2", "S6", "S8", "S12", "S20"];

const rows = [
  { label: "Fase Inicial", highlights: [0] },
  { label: "Fase 1", highlights: [0] },
  { label: "Fase 2", highlights: [1] },
  { label: "Fase 3", highlights: [2] },
  { label: "Fase 4", highlights: [3] },
  { label: "Fase 5", highlights: [4] },
  { label: "Fase 6", highlights: [5] },
  { label: "Fase Final", highlights: [6] },
];

const phases = [
  {
    phase: "Fase Inicial",
    duration: "Semana 1 - Día 1",
    title: "Reconocimiento del lugar",
    // description: "Quick Scan presencial - 1 semana de trabajo en el lugar",
    color: "bg-gray-500",
  },
  {
    phase: "Fase 1",
    duration: "Semana 1 - Día 1",
    title: "Capacitacion del personal Conceptos 5S",
    description: "Incorporar conceptos de la metodología",
    color: "bg-blue-500",
  },
  {
    phase: "Fase 2",
    duration: "Semana 1 - Día 2",
    title: "Gestión del cambio",
    description:
      "No olvidar que el programa 5S se basa en el convencimiento de las personas; para ello es necesario prepararlas con las herramientas adecuadas.",
    color: "bg-green-500",
  },
  {
    phase: "Fase 3",
    duration: "Semana 2",
    title: "Evento de Cleaning Day",
    description:
      "Objetivo: Identificar y eliminar todos los elementos innecesarios del puesto de trabajo.",
    color: "bg-yellow-500",
  },
  {
    phase: "Fase 4",
    duration: "Semana 6",
    title: "Ordenar el sector",
    description:
      "Organizar los elementos necesarios en un lugar designado para que sean fáciles de localizar y usar.",
    color: "bg-orange-500",
  },
  {
    phase: "Fase 5",
    duration: "Semana 8",
    title: "Rutinas de limpieza y mantenimiento",
    description:
      "Objetivo: Mantener la limpieza del área de trabajo y establecer una rutina de limpieza regular.",
    color: "bg-red-500",
  },
  {
    phase: "Fase 6",
    duration: "Semana 12",
    title: "Prácticas de estandarización de la metodología",
    description:
      "Objetivo: Crear normas y procedimientos estandarizados que mantengan el orden y la limpieza alcanzados en las etapas anteriores.",
    color: "bg-purple-500",
  },
  {
    phase: "Fase Final",
    duration: "Semana 20",
    title: "Sustentabilidad: Auditoría de seguimiento y próximos pasos",
    description:
      "Objetivo: Fomentar la autodisciplina para cumplir las normas y procedimientos de 5S.",
    color: "bg-indigo-500",
  },
];

const MethodologyFiveSPlus: React.FC = () => (
  <div className="pt-8 pb-4">
    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
      Modalidad de implementación (5 MESES)
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

export default MethodologyFiveSPlus;
