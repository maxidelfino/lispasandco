import type React from "react"

const LeanBridgeTimelineGraphic: React.FC = () => {
  const phases = [
    {
      phase: "Inicial",
      month: "0",
      title: "Diagnóstico y planificación",
      color: "bg-gray-500",
      description: "1 semana presencial",
    },
    {
      phase: "1",
      month: "1",
      title: "Introducción y PACK 1",
      color: "bg-blue-500",
      description: "Objetivos estratégicos",
    },
    { phase: "2", month: "2-3", title: "Coaching y PACK 2", color: "bg-green-500", description: "Seguimiento virtual" },
    { phase: "3", month: "4", title: "Performance y PACK 3", color: "bg-purple-500", description: "Primera reunión" },
    {
      phase: "4",
      month: "5-6",
      title: "Coaching y PACK 4",
      color: "bg-orange-500",
      description: "Seguimiento continuo",
    },
    { phase: "5", month: "7", title: "Consolidación", color: "bg-indigo-500", description: "Autonomía del equipo" },
    { phase: "6-10", month: "8-10", title: "Auditorías", color: "bg-red-500", description: "Gestión y ajustes" },
  ]

  return (
    <div className="w-full">
      <h4 className="text-center font-semibold text-gray-800 mb-6">Timeline de implementación</h4>

      {/* Desktop timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300"></div>

          <div className="flex justify-between items-start">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative"
                style={{ width: `${100 / phases.length}%` }}
              >
                {/* Timeline dot */}
                <div className={`w-4 h-4 ${phase.color} rounded-full border-2 border-white shadow-lg z-10`}></div>

                {/* Phase info */}
                <div className="mt-4 text-center">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs font-bold text-gray-500 mb-1">Mes {phase.month}</div>
                    <div className="text-xs font-semibold text-gray-800 mb-1">Fase {phase.phase}</div>
                    <div className="text-xs text-gray-600 mb-1">{phase.title}</div>
                    <div className="text-xs text-gray-500">{phase.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile timeline */}
      <div className="md:hidden space-y-4">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 ${phase.color} rounded-full border-2 border-white shadow-lg`}></div>
              {index < phases.length - 1 && <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>}
            </div>

            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-bold text-gray-500">Mes {phase.month}</div>
                <div className="text-sm font-semibold text-gray-800">Fase {phase.phase}</div>
              </div>
              <div className="text-sm text-gray-800 font-medium mb-1">{phase.title}</div>
              <div className="text-sm text-gray-600">{phase.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeanBridgeTimelineGraphic
