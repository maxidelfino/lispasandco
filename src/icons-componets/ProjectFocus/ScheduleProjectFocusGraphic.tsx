import type React from "react"
import { Calendar, Users, Presentation, Target, TrendingUp, FileText } from "lucide-react"

const ScheduleProjectFocusGraphic: React.FC = () => {
  const schedule = [
    {
      day: "DÍA 1",
      icon: Users,
      title: "PRESENTACIÓN",
      subtitle: "Encuentro virtual 2h",
      color: "bg-blue-500",
    },
    {
      day: "DÍAS 2-3",
      icon: Target,
      title: "DESARROLLO",
      subtitle: "Ideas y proyectos",
      color: "bg-green-500",
    },
    {
      day: "DÍA 4",
      icon: Presentation,
      title: "SELECCIÓN",
      subtitle: "Presentación grupal",
      color: "bg-purple-500",
    },
    {
      day: "DÍA 5",
      icon: TrendingUp,
      title: "MATRIZ",
      subtitle: "Impacto-Beneficio",
      color: "bg-orange-500",
    },
    {
      day: "MES 1",
      icon: Calendar,
      title: "SEGUIMIENTO",
      subtitle: "Gestión visual",
      color: "bg-red-500",
    },
    {
      day: "CONTINUO",
      icon: FileText,
      title: "DOCUMENTO",
      subtitle: "Final de trabajo",
      color: "bg-indigo-500",
    },
  ]

  return (
    <div className="w-full max-w-5xl">
      {/* Timeline Header */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Cronograma de Implementación</h3>
        <p className="text-sm text-gray-600">Proceso ágil de 5 días + seguimiento continuo</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>

        {/* Schedule Items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {schedule.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex flex-col items-center relative">
                {/* Timeline Node */}
                <div
                  className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg mb-4 hover:scale-110 transition-transform relative z-10`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-800 mb-1">{item.day}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{item.title}</div>
                  <div className="text-xs text-gray-600">{item.subtitle}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary Box */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
        <div className="text-center">
          <h4 className="font-bold text-gray-800 mb-2">Metodología Simple y Efectiva</h4>
          <p className="text-sm text-gray-600">
            Un encuentro virtual inicial + dos sesiones presenciales intensivas + seguimiento continuo
          </p>
        </div>
      </div>
    </div>
  )
}

export default ScheduleProjectFocusGraphic
