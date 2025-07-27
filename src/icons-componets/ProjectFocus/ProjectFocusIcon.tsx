import { Target, Puzzle, CheckSquare, Users, Lightbulb } from "lucide-react"

const ProjectFocusIcon = () => {
  const projectPhases = [
    { icon: Lightbulb, title: "IDEACIÓN", color: "bg-yellow-500" },
    { icon: Target, title: "SELECCIÓN", color: "bg-blue-500" },
    { icon: Users, title: "ALINEACIÓN", color: "bg-green-500" },
    { icon: CheckSquare, title: "EJECUCIÓN", color: "bg-purple-500" },
  ]

  const puzzlePieces = [
    { x: -30, y: -30, color: "bg-red-500" },
    { x: 30, y: -30, color: "bg-blue-500" },
    { x: -30, y: 30, color: "bg-green-500" },
    { x: 30, y: 30, color: "bg-orange-500" },
  ]

  return (
    <div className="relative flex items-center justify-center h-80 w-full max-w-md mx-auto">
      {/* Central Project Focus */}
      <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg z-10 shadow-xl">
        <div className="text-center">
          <Puzzle className="w-8 h-8 mx-auto mb-1" />
          <div className="text-sm">PROJECT</div>
          <div className="text-sm">FOCUS</div>
        </div>
      </div>

      {/* Puzzle Pieces around center */}
      {puzzlePieces.map((piece, index) => (
        <div
          key={index}
          className={`absolute w-12 h-12 ${piece.color} rounded-lg transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-all duration-300`}
          style={{
            left: `calc(50% + ${piece.x}px)`,
            top: `calc(50% + ${piece.y}px)`,
            clipPath:
              index === 0
                ? "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)"
                : index === 1
                  ? "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)"
                  : index === 2
                    ? "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 80%)",
          }}
        />
      ))}

      {/* Project Phases */}
      {projectPhases.map((phase, index) => {
        // Distribución simétrica en círculo perfecto
        const angle = (index * 90) - 45 // 90 grados entre cada elemento, empezando desde -45°
        const radius = 140 // Radio fijo para mejor simetría
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        const Icon = phase.icon

        return (
          <div
            key={index}
            className={`absolute w-20 h-20 ${phase.color} rounded-xl flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-all duration-300 group/phase`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <Icon className="w-6 h-6 mb-1 group-hover/phase:scale-110 transition-transform" />
            <div className="text-[9px] text-center leading-tight">{phase.title}</div>
          </div>
        )
      })}

      {/* Connection Lines to Center */}
      {/* {projectPhases.map((_, index) => {
        const angle = (index * 90) - 45
        const startRadius = 66
        const endRadius = 100
        const x1 = Math.cos((angle * Math.PI) / 180) * startRadius
        const y1 = Math.sin((angle * Math.PI) / 180) * startRadius
        const x2 = Math.cos((angle * Math.PI) / 180) * endRadius
        const y2 = Math.sin((angle * Math.PI) / 180) * endRadius

        return (
          <svg key={index} className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1={`calc(50% + ${x1}px)`}
              y1={`calc(50% + ${y1}px)`}
              x2={`calc(50% + ${x2}px)`}
              y2={`calc(50% + ${y2}px)`}
              stroke="#6366f1"
              strokeWidth="3"
              strokeDasharray="6,6"
              opacity="0.5"
            />
          </svg>
        )
      })} */}

      {/* Focus rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 border border-orange-400 border-dashed rounded-full opacity-30 animate-pulse"></div>
      </div>
    </div>
  )
}

export default ProjectFocusIcon