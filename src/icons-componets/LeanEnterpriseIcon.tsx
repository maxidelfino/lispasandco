import { Building2, Users, Cog, TrendingUp, Target, Award, Network } from "lucide-react"

const LeanEnterpriseIcon = () => {
  const enterpriseElements = [
    { icon: Building2, title: "ORGANIZACIÓN", position: { x: 0, y: -100 } },
    { icon: Users, title: "EQUIPOS", position: { x: 87, y: -50 } },
    { icon: Cog, title: "PROCESOS", position: { x: 87, y: 50 } },
    { icon: TrendingUp, title: "MEJORA", position: { x: 0, y: 100 } },
    { icon: Target, title: "OBJETIVOS", position: { x: -87, y: 50 } },
    { icon: Award, title: "RESULTADOS", position: { x: -87, y: -50 } },
  ]

  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Central Enterprise Hub */}
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl flex items-center justify-center text-white font-bold text-lg z-10 shadow-xl transform rotate-45">
        <div className="text-center transform -rotate-45">
          <Network className="w-8 h-8 mx-auto mb-1" />
          <div className="text-xs">LEAN</div>
          <div className="text-xs">ENTERPRISE</div>
        </div>
      </div>

      {/* Enterprise Elements */}
      {enterpriseElements.map((element, index) => {
        const Icon = element.icon
        const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-red-500", "bg-indigo-500"]

        return (
          <div
            key={index}
            className={`absolute w-20 h-20 ${colors[index]} rounded-xl flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-all duration-300 group/element`}
            style={{
              left: `calc(50% + ${element.position.x}px)`,
              top: `calc(50% + ${element.position.y}px)`,
            }}
          >
            <Icon className="w-6 h-6 mb-1 group-hover/element:scale-110 transition-transform" />
            <div className="text-[9px] text-center leading-tight px-1">{element.title}</div>
          </div>
        )
      })}

      {/* Connection Lines */}
      {enterpriseElements.map((element, index) => {
        const x1 = element.position.x * 0.4 // Closer to center
        const y1 = element.position.y * 0.4
        const x2 = element.position.x * 0.7 // Closer to elements
        const y2 = element.position.y * 0.7

        return (
          <svg key={index} className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1={`calc(50% + ${x1}px)`}
              y1={`calc(50% + ${y1}px)`}
              x2={`calc(50% + ${x2}px)`}
              y2={`calc(50% + ${y2}px)`}
              stroke="var(--color-secondary)"
              strokeWidth="2"
              strokeDasharray="6,6"
              opacity="0.5"
            />
          </svg>
        )
      })}

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-48 h-48 border border-[var(--color-secondary)] border-dashed rounded-full opacity-20 animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-64 h-64 border border-[var(--color-accent)] border-dashed rounded-full opacity-10 animate-spin"
          style={{ animationDuration: "45s", animationDirection: "reverse" }}
        ></div>
      </div>
    </div>
  )
}

export default LeanEnterpriseIcon
