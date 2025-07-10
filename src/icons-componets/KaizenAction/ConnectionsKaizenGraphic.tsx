import type React from "react"
import { Network, Users, Target, Settings, BarChart3, Lightbulb, ArrowRight } from "lucide-react"

const ConnectionsKaizenGraphic: React.FC = () => {
  const programs = [
    {
      name: "LeanBridge™",
      icon: Network,
      color: "bg-blue-500",
      description: "Facilitadores entrenados",
      connection: "Prerrequisito",
    },
    {
      name: "WasteZero™",
      icon: Target,
      color: "bg-green-500",
      description: "Identificación de desperdicios",
      connection: "Potencia",
    },
    {
      name: "5S Plus™",
      icon: Settings,
      color: "bg-yellow-500",
      description: "Organización lograda",
      connection: "Complementa",
    },
    {
      name: "FlowStable™",
      icon: BarChart3,
      color: "bg-purple-500",
      description: "Estabilidad de procesos",
      connection: "Utiliza",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
          <Network className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">Conexión con Otros Programas</h3>
        <p className="text-[var(--color-text)] text-sm">Evolución natural del camino LEAN</p>
      </div>

      {/* Program Flow */}
      <div className="w-full max-w-4xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className={`w-10 h-10 ${program.color} rounded-full flex items-center justify-center text-white`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm">{program.name}</h4>
                    <span className="text-xs text-[var(--color-secondary)] font-medium">{program.connection}</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-text)]">{program.description}</p>
              </div>
            )
          })}
        </div>

        {/* Flow to Kaizen Action */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-2">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[var(--color-text)]">Programas Base</span>
            </div>

            <ArrowRight className="w-8 h-8 text-[var(--color-secondary)]" />

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white mb-2">
                <Lightbulb className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[var(--color-secondary)]">KAIZEN ACTION™</span>
            </div>

            <ArrowRight className="w-8 h-8 text-[var(--color-secondary)]" />

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mb-2">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[var(--color-text)]">Agentes de Cambio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] rounded-xl p-6 text-white text-center max-w-3xl">
        <h4 className="font-bold text-lg mb-3">Ecosistema Integral de Mejora Continua</h4>
        <p className="text-sm opacity-90 mb-4">
          KAIZEN ACTION™ consolida el rol de agentes de cambio dentro de la organización, aprovechando las bases
          construidas por otros programas LEAN.
        </p>
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-xs italic">
            "Cuando el agua fría del mar se encuentra con el agua cálida de la costa, nace la mayor cantidad de vida.
            Así también, en los bordes de los problemas y en la interacción con nuevas áreas y clientes, surgen las
            soluciones más innovadoras y valiosas."
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConnectionsKaizenGraphic
