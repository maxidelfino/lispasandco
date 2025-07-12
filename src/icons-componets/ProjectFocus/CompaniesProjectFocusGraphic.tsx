import type React from "react"
import { Factory, Truck, Building2, Wheat, Users } from "lucide-react"

const CompaniesProjectFocusGraphic: React.FC = () => {
  const companyTypes = [
    { icon: Factory, title: "INDUSTRIALES", color: "bg-blue-500" },
    { icon: Truck, title: "LOGÍSTICAS", color: "bg-green-500" },
    { icon: Building2, title: "COMERCIALES", color: "bg-purple-500" },
    { icon: Wheat, title: "AGROEXPORTADORAS", color: "bg-orange-500" },
  ]

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Central Hub */}
      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl z-10">
        <div className="text-center">
          <Users className="w-6 h-6 mx-auto mb-1" />
          <div className="text-xs">
            EMPRESAS
            <br />
            OBJETIVO
          </div>
        </div>
      </div>

      {/* Company Type Nodes */}
      {companyTypes.map((company, index) => {
        const angle = index * 90 * (Math.PI / 180)
        const radius = 100
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const Icon = company.icon

        return (
          <div
            key={index}
            className={`absolute w-18 h-18 ${company.color} rounded-xl flex items-center justify-center text-white font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: "72px",
              height: "72px",
            }}
          >
            <div className="text-center">
              <Icon className="w-6 h-6 mx-auto mb-1" />
              <div className="text-xs">{company.title}</div>
            </div>
          </div>
        )
      })}

      {/* Characteristics */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-white rounded-lg p-3 shadow-lg border">
          <div className="text-xs text-gray-600 font-medium">
            • Planificación anual de inversiones
            <br />• Procesos de expansión
            <br />• Involucramiento de mandos medios
          </div>
        </div>
      </div>

      {/* Connection Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-52 h-52 border-2 border-dashed border-purple-300 rounded-full opacity-50"></div>
      </div>
    </div>
  )
}

export default CompaniesProjectFocusGraphic
