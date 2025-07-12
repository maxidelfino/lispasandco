import type React from "react"
import { AlertTriangle, Eye, Target, Users, TrendingDown, UserX } from "lucide-react"

const ProblemsProjectFocusGraphic: React.FC = () => {
  const problems = [
    { icon: Eye, title: "FALTA DE\nVISIBILIDAD", color: "bg-red-500" },
    { icon: Target, title: "PRIORIZACIÓN\nINEFICIENTE", color: "bg-orange-500" },
    { icon: TrendingDown, title: "DESALINEAMIENTO\nESTRATÉGICO", color: "bg-yellow-500" },
    { icon: Users, title: "TENSIONES\nINTERNAS", color: "bg-blue-500" },
    { icon: UserX, title: "EVALUACIÓN\nINEFICIENTE", color: "bg-purple-500" },
    { icon: AlertTriangle, title: "FALTA DE\nRESPONSABILIDAD", color: "bg-pink-500" },
  ]

  return (
  <div className="overflow-x-auto">
      <div className="relative w-96 h-96 flex items-center justify-center m-auto">
        {/* Central Problem */}
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl z-10">
          <AlertTriangle className="w-8 h-8" />
        </div>

        {/* Problem Nodes */}
        {problems.map((problem, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180) // Ajustar para empezar desde arriba
          const radius = 130
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const Icon = problem.icon

          return (
            <div
              key={index}
              className={`absolute w-20 h-20 ${problem.color} rounded-lg flex items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
            >
              <div className="text-center">
                <Icon className="w-5 h-5 mx-auto mb-1" />
                <div className="text-[9px] leading-tight whitespace-pre-line">{problem.title}</div>
              </div>
            </div>
          )
        })}

        {/* Connection Lines */}
        {/* {problems.map((_, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180) // Ajustar para empezar desde arriba
          const radius = 75
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <div
              key={`line-${index}`}
              className="absolute w-0.5 h-10 bg-red-300 transform -translate-x-1/2"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%) rotate(${index * 60}deg)`,
              }}
            />
          )
        })} */}
      </div>
    </div>
  )
}

export default ProblemsProjectFocusGraphic