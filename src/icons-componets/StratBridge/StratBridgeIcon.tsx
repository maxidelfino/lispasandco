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
    <div className="relative flex items-center justify-center h-80 w-full max-w-md mx-auto">
      {/* Central Strategy Compass */}
      <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-xl">
        <div className="text-center">
          <Compass className="w-8 h-8 mx-auto mb-1" />
          <div className="text-sm">HOSHIN</div>
        </div>
      </div>

      {/* Strategy Bridge Layers */}
      {strategyLayers.map((layer, index) => {
        // Distribución simétrica en círculo perfecto
        const angle = (index * 72) - 90 // 360/5 = 72 grados, empezando desde arriba
        const radius = 140 // Radio fijo para mejor simetría
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
          </div>
        )
      })}
    </div>
  )
}

export default StratBridgeIcon