import React from "react";
import {
  TrendingUp,
  Activity,
  Target,
  BarChart3,
  CheckCircle,
  Users,
} from "lucide-react";

const measureBridgeMetrics = [
  {
    icon: TrendingUp,
    title: "Consistencia",
    description:
      "Mejoras rápidas y sostenidas en la consistencia de producción",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Activity,
    title: "Variabilidad",
    description: "Reducción de variabilidad operativa",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Target,
    title: "Objetivos",
    description: "Cumplimiento de objetivos diarios",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Seguimiento",
    description: "Seguimiento estructurado de desvíos",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: CheckCircle,
    title: "Acciones",
    description: "Acciones correctivas inmediatas",
    color: "from-red-400 to-red-600",
  },
  {
    icon: Users,
    title: "Equipos",
    description: "Claridad, autonomía y compromiso",
    color: "from-indigo-400 to-indigo-600",
  },
];

const MeasureBridgeIcon: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {measureBridgeMetrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className="text-center group">
              <div className="relative mb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="font-bold text-[var(--color-primary)] mb-1 leading-tight">
                {metric.title}
              </div>
              <div className="text-xs text-gray-600">{metric.description}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          <strong>MeasureBridge</strong> permite visualizar y mejorar los
          resultados operativos clave, facilitando la toma de decisiones basada
          en datos y el trabajo en equipo para lograr procesos estables y
          eficientes.
        </p>
      </div>
    </div>
  );
};

export default MeasureBridgeIcon;
