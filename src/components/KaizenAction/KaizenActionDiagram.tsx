"use client"

import React, { useState } from "react"
import { Target, Search, BarChart3, TrendingUp, Shield } from "lucide-react"

const KaizenActionDiagram: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const phases = [
    {
      id: "definir",
      name: "Definir",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      description: "Identificar y definir el problema con precisión",
    },
    {
      id: "medir",
      name: "Medir",
      icon: BarChart3,
      color: "from-green-500 to-green-600",
      description: "Recolectar datos y validar información",
    },
    {
      id: "analizar",
      name: "Analizar",
      icon: Search,
      color: "from-yellow-500 to-yellow-600",
      description: "Análisis profundo colaborativo del problema",
    },
    {
      id: "mejorar",
      name: "Mejorar",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      description: "Generar y evaluar soluciones",
    },
    {
      id: "controlar",
      name: "Controlar",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      description: "Seguimiento y sostenibilidad",
    },
  ]

  const radius = isMobile ? 120 : 160

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: `${radius * 2 + 160}px`, height: `${radius * 2 + 160}px` }}>
          <div className="mt-8 grid grid-cols-1 gap-3">
            {phases.map((phase) => {
              const Icon = phase.icon
              return (
                <div
                  key={phase.id}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-md border border-[var(--color-border)]"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-white`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-primary)] text-sm">{phase.name}</div>
                    <div className="text-xs text-[var(--color-text)]">{phase.description}</div>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default KaizenActionDiagram
