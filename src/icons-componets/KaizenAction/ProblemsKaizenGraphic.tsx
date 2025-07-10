import type React from "react"
import { AlertTriangle, ArrowRight, Target } from "lucide-react"

const ProblemsKaizenGraphic: React.FC = () => {
  const problems = [
    {
      title: "Problemas Técnicos",
      items: ["Mantenimiento", "Calidad", "Reprocesos", "Desvíos productivos"],
      color: "from-red-500 to-red-600",
    },
    {
      title: "Problemas Transaccionales",
      items: ["Operaciones-Logística", "Ventas-Producción", "Conflictos entre áreas"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Problemas End to End",
      items: ["Origen-Cliente final", "Unidades distantes", "Experiencia cliente"],
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">Problemas Complejos que Resuelve</h3>
        <p className="text-[var(--color-text)] text-sm">Cuellos de botella y conflictos operativos</p>
      </div>

      {/* Problems Flow */}
      <div className="flex flex-col space-y-6 w-full max-w-2xl">
        {problems.map((problem, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Problem Category */}
            <div className="flex-1">
              <div className={`p-4 bg-gradient-to-r ${problem.color} rounded-xl text-white`}>
                <h4 className="font-bold mb-2">{problem.title}</h4>
                <div className="grid grid-cols-1 gap-1">
                  {problem.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm opacity-90">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow (except for last item) */}
            {index < problems.length - 1 && (
              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Solution Arrow */}
      <div className="flex items-center justify-center mt-8 mb-6">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <ArrowRight className="w-8 h-8 text-[var(--color-secondary)] mx-auto mb-2" />
            <span className="text-sm font-bold text-[var(--color-secondary)]">KAIZEN ACTION™</span>
          </div>
        </div>
      </div>

      {/* Solution Result */}
      <div className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] rounded-xl p-6 text-white text-center">
        <div className="flex items-center justify-center mb-3">
          <Target className="w-8 h-8 mr-2" />
          <h4 className="font-bold text-lg">Solución Colaborativa</h4>
        </div>
        <p className="text-sm opacity-90">Intervención directa con metodología DMAIC y equipos interdisciplinarios</p>
      </div>
    </div>
  )
}

export default ProblemsKaizenGraphic
