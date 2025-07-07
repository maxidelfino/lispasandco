import { BarChart3, PieChart, TrendingUp, Calculator, Database, Target } from "lucide-react"

const DecisionesEstadisticasIcon = () => {
  const statisticsTools = [
    { icon: BarChart3, title: "GRÁFICOS", description: "Visualización" },
    { icon: PieChart, title: "ANÁLISIS", description: "Distribución" },
    { icon: TrendingUp, title: "TENDENCIAS", description: "Patrones" },
    { icon: Calculator, title: "CÁLCULOS", description: "Estadísticas" },
    { icon: Database, title: "DATOS", description: "Información" },
    { icon: Target, title: "DECISIONES", description: "Resultados" },
  ]

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {statisticsTools.map((tool, index) => {
        const Icon = tool.icon
        const colors = [
          "from-blue-500 to-blue-600",
          "from-green-500 to-green-600",
          "from-purple-500 to-purple-600",
          "from-orange-500 to-orange-600",
          "from-red-500 to-red-600",
          "from-indigo-500 to-indigo-600",
        ]

        return (
          <div key={index} className="text-center group/stat">
            <div className="relative mb-4">
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover/stat:scale-110 transition-all duration-300 shadow-lg`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Data visualization lines */}
              {index < 3 && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-gradient-to-t ${colors[index]} rounded-full transition-all duration-500 delay-${i * 100}`}
                        style={{
                          height: `${Math.random() * 16 + 8}px`,
                          animation: `pulse 2s ease-in-out infinite ${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="text-sm">
              <div className="font-bold text-[var(--color-primary)] mb-1 leading-tight">{tool.title}</div>
              <div className="text-xs text-[var(--color-text)] opacity-70">{tool.description}</div>
            </div>
          </div>
        )
      })}

      {/* Central connecting element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-24 h-24 border-2 border-[var(--color-secondary)] border-dashed rounded-full opacity-20 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>
    </div>
  )
}

export default DecisionesEstadisticasIcon
