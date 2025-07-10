import type React from "react"
import { Target, TrendingUp, Users, Award } from "lucide-react"

const ObjectivesKaizenGraphic: React.FC = () => {
  const objectives = [
    {
      icon: Target,
      title: "Resolver Problemas",
      description: "Resolver problemas que generan pérdida de eficiencia, conflicto o demoras",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Cultura de Mejora",
      description: "Activar una cultura de mejora transversal y ágil",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Desarrollar Habilidades",
      description: "Desarrollar la habilidad interna de liderar KAIZEN con criterios profesionales",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      title: "Formar Agentes",
      description: "Formar agentes de cambio en plena acción, dentro del contexto real de la empresa",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
          <Award className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">Objetivos del Programa</h3>
        {/* <p className="text-[var(--color-text)] text-sm">Transformar problemas en oportunidades de mejora</p> */}
      </div>

      {/* Objectives Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {objectives.map((objective, index) => {
          const Icon = objective.icon
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-10 h-10 bg-gradient-to-br ${objective.color} rounded-full flex items-center justify-center text-white mb-3`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[var(--color-primary)] text-sm mb-2">{objective.title}</h4>
              <p className="text-xs text-[var(--color-text)] leading-relaxed">{objective.description}</p>
            </div>
          )
        })}
      </div>

      {/* Central Flow */}
      {/* <div className="flex items-center justify-center space-x-4 mb-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white mb-2">
            <Zap className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-[var(--color-text)]">Problema</span>
        </div>

        <div className="flex-1 h-0.5 bg-gradient-to-r from-red-500 to-green-500"></div>

        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white mb-2">
            <Settings className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-[var(--color-text)]">KAIZEN</span>
        </div>

        <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500 to-blue-500"></div>

        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mb-2">
            <Award className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-[var(--color-text)]">Solución</span>
        </div>
      </div> */}

      {/* Bottom Message */}
      {/* <div className="bg-gradient-to-r from-[var(--color-bg)] to-white rounded-xl p-4 border border-[var(--color-border)] text-center">
        <p className="text-sm text-[var(--color-text)] font-medium">
          <strong>Resultado:</strong> Equipos capacitados que resuelven problemas complejos con metodología estructurada
          y colaboración interdisciplinaria
        </p>
      </div> */}
    </div>
  )
}

export default ObjectivesKaizenGraphic
