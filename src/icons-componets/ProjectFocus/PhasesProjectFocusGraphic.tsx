import React from "react";
import {
  Search,
  Target,
  TrendingUp,
  Lightbulb,
  Users,
  CheckSquare,
  Award,
} from "lucide-react";

const PhasesProjectFocusGraphic: React.FC = () => {
  const phases = [
    {
      icon: Search,
      title: "1. EXPLORACIÓN",
      subtitle: "Oportunidades",
      color: "bg-blue-500",
      borderColor: "border-blue-500",
    },
    {
      icon: Target,
      title: "2. MAPEO",
      subtitle: "Sectorial",
      color: "bg-green-500",
      borderColor: "border-green-500",
    },
    {
      icon: TrendingUp,
      title: "3. ALINEAMIENTO",
      subtitle: "Estratégico",
      color: "bg-purple-500",
      borderColor: "border-purple-500",
    },
    {
      icon: Lightbulb,
      title: "4. IDEACIÓN",
      subtitle: "Colaborativa",
      color: "bg-yellow-500",
      borderColor: "border-yellow-500",
    },
    {
      icon: Users,
      title: "5. PRESENTACIÓN",
      subtitle: "y Discusión",
      color: "bg-orange-500",
      borderColor: "border-orange-500",
    },
    {
      icon: CheckSquare,
      title: "6. SELECCIÓN",
      subtitle: "Impacto-Beneficio",
      color: "bg-red-500",
      borderColor: "border-red-500",
    },
    {
      icon: Award,
      title: "7. EJECUCIÓN",
      subtitle: "Responsables",
      color: "bg-indigo-500",
      borderColor: "border-indigo-500",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Fases del Proyecto Focus
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Metodología estructurada para el desarrollo estratégico de proyectos
        </p>
      </div> */}

      {/* Desktop Timeline - Grid Layout */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Phase Nodes in Grid */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="flex flex-col items-center group">
                  {/* Icon Circle */}
                  <div
                    className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Phase Info Card */}
                  <div className="mt-6 bg-white rounded-lg shadow-md p-4 w-full h-24 flex flex-col justify-center transform transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <h3 className="font-bold text-gray-800 text-sm text-center leading-tight">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-xs text-center mt-1">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Timeline - Vertical */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>

          {/* Phase Nodes */}
          <div className="space-y-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="flex items-start relative">
                  {/* Icon Circle */}
                  <div
                    className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center shadow-lg relative z-10 flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Phase Info Card */}
                  <div className="ml-6 bg-white rounded-lg shadow-md p-4 flex-1 h-20 flex flex-col justify-center transform transition-all duration-300 hover:shadow-lg">
                    <h3 className="font-bold text-gray-800 text-base leading-tight">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Flow Indicators */}
      {/* <div className="mt-16 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Flujo del Proceso
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">Inicio</span>
          </div>
          <div className="hidden sm:block text-gray-400">→</div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Proceso</span>
          </div>
          <div className="hidden sm:block text-gray-400">→</div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">Resultado</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PhasesProjectFocusGraphic;
