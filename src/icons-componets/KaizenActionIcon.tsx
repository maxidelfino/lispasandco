import { Lightbulb, Target, Zap, CheckCircle, Cog, TrendingUp } from "lucide-react"

const KaizenActionIcon = () => {
  const kaizenSteps = [
    { icon: Target, title: "DEFINIR", color: "bg-red-500" },
    { icon: TrendingUp, title: "MEDIR", color: "bg-blue-500" },
    { icon: Lightbulb, title: "ANALIZAR", color: "bg-yellow-500" },
    { icon: Cog, title: "MEJORAR", color: "bg-green-500" },
    { icon: CheckCircle, title: "CONTROLAR", color: "bg-purple-500" },
  ]

  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Central Kaizen Circle */}
      <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-xl">
        <div className="text-center">
          <Zap className="w-8 h-8 mx-auto mb-1" />
          <div className="text-sm">KAIZEN</div>
        </div>
      </div>

      {/* DMAIC Steps in Circle */}
      {kaizenSteps.map((step, index) => {
        const angle = index * 72 - 90 // 360/5 = 72 degrees
        const radius = 120
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        const Icon = step.icon

        return (
          <div
            key={index}
            className={`absolute w-18 h-18 ${step.color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform duration-300`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: "72px",
              height: "72px",
            }}
          >
            <Icon className="w-6 h-6 mb-1" />
            <div className="text-[10px] text-center leading-tight">{step.title}</div>
          </div>
        )
      })}

      {/* Action Arrows */}
      {kaizenSteps.map((_, index) => {
        const currentAngle = index * 72 - 90
        const nextAngle = ((index + 1) % kaizenSteps.length) * 72 - 90
        const radius = 120

        const x1 = Math.cos((currentAngle * Math.PI) / 180) * (radius - 20)
        const y1 = Math.sin((currentAngle * Math.PI) / 180) * (radius - 20)
        const x2 = Math.cos((nextAngle * Math.PI) / 180) * (radius - 20)
        const y2 = Math.sin((nextAngle * Math.PI) / 180) * (radius - 20)

        return (
          <svg key={index} className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <marker id={`arrowhead-${index}`} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-secondary)" />
              </marker>
            </defs>
            <line
              x1={`calc(50% + ${x1}px)`}
              y1={`calc(50% + ${y1}px)`}
              x2={`calc(50% + ${x2}px)`}
              y2={`calc(50% + ${y2}px)`}
              stroke="var(--color-secondary)"
              strokeWidth="3"
              markerEnd={`url(#arrowhead-${index})`}
              opacity="0.7"
            />
          </svg>
        )
      })}
    </div>
  )
}

export default KaizenActionIcon
