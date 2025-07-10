import type React from "react"
import { Wrench, ArrowRightLeft, Globe, TrendingUp } from "lucide-react"

const ApplicationsKaizenGraphic: React.FC = () => {
  const applications = [
    {
      icon: Wrench,
      title: "Problemas Técnicos",
      color: "from-red-500 to-red-600",
      examples: ["Mantenimiento", "Calidad", "Reprocesos", "Desvíos productivos"],
      multiplier: "Base",
    },
    {
      icon: ArrowRightLeft,
      title: "Problemas Transaccionales",
      color: "from-orange-500 to-orange-600",
      examples: ["Operaciones-Logística", "Ventas-Producción", "Entre sectores"],
      multiplier: "x3",
    },
    {
      icon: Globe,
      title: "Problemas End to End",
      color: "from-purple-500 to-purple-600",
      examples: ["Origen-Cliente final", "Unidades distantes", "Experiencia cliente"],
      multiplier: "x7",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
          <TrendingUp className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">Aplicaciones Concretas</h3>
        <p className="text-[var(--color-text)] text-sm">Casos específicos con impacto exponencial</p>
      </div>

      {/* Applications */}
      <div className="w-full max-w-4xl space-y-4 mb-8">
        {applications.map((app, index) => {
          const Icon = app.icon
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${app.color} rounded-full flex items-center justify-center text-white`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[var(--color-primary)]">{app.title}</h4>
                </div>

                {/* Value Multiplier */}
                <div className="text-right">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${app.color}`}
                  >
                    Valor {app.multiplier}
                  </div>
                </div>
              </div>

              {/* Examples */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {app.examples.map((example, exIndex) => (
                  <div key={exIndex} className="bg-[var(--color-bg)] rounded-lg p-2 text-center">
                    <span className="text-xs text-[var(--color-text)]">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Value Impact Explanation */}
      <div className="bg-gradient-to-r from-[var(--color-bg)] to-white rounded-xl p-6 border border-[var(--color-border)] text-center max-w-3xl">
        <h4 className="font-bold text-[var(--color-primary)] mb-4">Impacto del Valor Económico</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <div className="font-bold text-red-600 mb-1">Problemas Técnicos</div>
            <div className="text-[var(--color-text)]">Valor base de las iniciativas</div>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
            <div className="font-bold text-orange-600 mb-1">+ Áreas Transaccionales</div>
            <div className="text-[var(--color-text)]">Valor se triplica (x3)</div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="font-bold text-purple-600 mb-1">+ Cliente Final</div>
            <div className="text-[var(--color-text)]">Valor se multiplica (x7)</div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text)] mt-4 italic">
          Sin inversión en activos fijos: solo con inteligencia colectiva y metodología estructurada
        </p>
      </div>
    </div>
  )
}

export default ApplicationsKaizenGraphic
