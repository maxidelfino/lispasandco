import { Compass, Target, Map, Route, Flag, Eye } from "lucide-react"

const StratBridgeIcon = () => {
  const strategyLayers = [
    { icon: Eye, title: "VISIÓN", level: 1, color: "bg-purple-600" },
    { icon: Target, title: "OBJETIVOS", level: 2, color: "bg-blue-500" },
    { icon: Map, title: "ESTRATEGIA", level: 3, color: "bg-green-500" },
    { icon: Route, title: "TÁCTICAS", level: 4, color: "bg-orange-500" },
    { icon: Flag, title: "ACCIONES", level: 5, color: "bg-red-500" },
  ]

  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Central Strategy Compass */}
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-xl">
        <div className="text-center">
          <Compass className="w-8 h-8 mx-auto mb-1" />
          <div className="text-sm">HOSHIN</div>
        </div>
      </div>

      {/* Strategy Bridge Layers */}
      {strategyLayers.map((layer, index) => {
        const angle = index * 72 - 90 // 360/5 = 72 degrees
        const radius = 110 + index * 10 // Increasing radius for each layer
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        const Icon = layer.icon

        return (
          <div
            key={index}
            className={`absolute w-16 h-16 ${layer.color} rounded-lg flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-all duration-300`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <Icon className="w-5 h-5 mb-1" />
            <div className="text-[8px] text-center leading-tight">{layer.title}</div>
            <div className="text-[6px] opacity-70">L{layer.level}</div>
          </div>
        )
      })}

      {/* Bridge Connections */}
      {strategyLayers.map((_, index) => {
        const currentAngle = index * 72 - 90
        const nextIndex = (index + 1) % strategyLayers.length
        const nextAngle = nextIndex * 72 - 90

        const currentRadius = 110 + index * 10
        const nextRadius = 110 + nextIndex * 10

        const x1 = Math.cos((currentAngle * Math.PI) / 180) * (currentRadius - 15)
        const y1 = Math.sin((currentAngle * Math.PI) / 180) * (currentRadius - 15)
        const x2 = Math.cos((nextAngle * Math.PI) / 180) * (nextRadius - 15)
        const y2 = Math.sin((nextAngle * Math.PI) / 180) * (nextRadius - 15)

        return (
          <svg key={index} className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1={`calc(50% + ${x1}px)`}
              y1={`calc(50% + ${y1}px)`}
              x2={`calc(50% + ${x2}px)`}
              y2={`calc(50% + ${y2}px)`}
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeDasharray="8,4"
              opacity="0.6"
            />
          </svg>
        )
      })}

      {/* Strategic alignment indicators */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-56 h-56 border-2 border-[var(--color-accent)] border-dashed rounded-full opacity-20 animate-pulse"></div>
      </div>
    </div>
  )
}

export default StratBridgeIcon
