import type React from "react"
import { Target, Users, Zap, BarChart3 } from "lucide-react"

const WhatIsKaizenGraphic: React.FC = () => {
  const components = [
    {
      icon: Target,
      title: "Intervención Directa",
      description: "Resolución de problemas reales",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Equipos interdisciplinarios",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Acción Inmediata",
      description: "Resultados visibles rápidos",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: BarChart3,
      title: "Resultados Medibles",
      description: "Impacto cuantificable",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">KAIZEN ACTION™</h3>
        <p className="text-[var(--color-text)] text-sm">Servicio de intervención directa</p>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {components.map((component, index) => {
          const Icon = component.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${component.color} rounded-full flex items-center justify-center text-white mb-3`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[var(--color-primary)] text-sm mb-1">{component.title}</h4>
              <p className="text-xs text-[var(--color-text)]">{component.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhatIsKaizenGraphic
