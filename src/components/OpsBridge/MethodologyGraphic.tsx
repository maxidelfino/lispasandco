import React from "react";

const phases = [
  {
    phase: "Mes 0",
    duration: "Mes 0",
    title: "Manejo del cambio",
    description: "",
    color: "bg-gray-500",
  },
  {
    phase: "Mes 1",
    duration: "Mes 1",
    title: "Intro a CI",
    description: "",
    color: "bg-blue-500",
  },
  {
    phase: "Mes 2",
    duration: "Mes 2",
    title: "Estrategias básicas",
    description: "",
    color: "bg-green-500",
  },
  {
    phase: "Meses 3-6",
    duration: "Meses 3-6",
    title: "Estabilizar",
    description: "",
    color: "bg-yellow-500",
  },
  {
    phase: "Mes 7",
    duration: "Mes 7",
    title: "Res. Problemas",
    description: "",
    color: "bg-orange-500",
  },
  {
    phase: "Mes 8",
    duration: "Mes 8",
    title: "Proyectos",
    description: "",
    color: "bg-red-500",
  },
  {
    phase: "Meses 9-11",
    duration: "Meses 9-11",
    title: "Lean Transf",
    description: "",
    color: "bg-purple-500",
  },
  {
    phase: "Mes 12",
    duration: "Mes 12",
    title: "Plannig",
    description: "",
    color: "bg-pink-500",
  },
  {
    phase: "Mes 13",
    duration: "Mes 13",
    title: "Coaching",
    description: "",
    color: "bg-cyan-500",
  },
  {
    phase: "Mes 14",
    duration: "Mes 14",
    title: "Consolidación",
    description: "",
    color: "bg-indigo-500",
  },
];

const MethodologyGraphic: React.FC = () => (
  <div className="pt-8 pb-4">
    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
      Modalidad de implementación (14 MESES)
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
