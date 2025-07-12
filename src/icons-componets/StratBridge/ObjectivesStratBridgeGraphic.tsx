import type React from "react";
import { Target, Users, BarChart3, CheckCircle } from "lucide-react";

const ObjectivesStratBridgeGraphic: React.FC = () => {
  const objectives = [
    {
      icon: Target,
      title: "Despliegue estratégico",
      description: "Objetivos estratégicos desplegados en todos los niveles",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Contribución clara",
      description:
        "Colaboradores que comprenden su contribución al propósito general",
      color: "from-green-500 to-green-600",
    },
    {
      icon: BarChart3,
      title: "Indicadores accionables",
      description: "Indicadores útiles y accionables para guiar decisiones",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Equipos alineados",
      description: "Equipos más alineados, autónomos y enfocados",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Objectives Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <div
              key={index}
            >
              <div
                className={`w-10 h-10 bg-gradient-to-br ${objective.color} rounded-full flex items-center justify-center text-white mb-3`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[var(--color-primary)] text-sm mb-2">
                {objective.title}
              </h4>
              <p className="text-xs text-[var(--color-text)] leading-relaxed">
                {objective.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ObjectivesStratBridgeGraphic;
