import React from 'react';
import { TrendingUp, Target, Activity, BarChart3, CheckCircle, Users } from 'lucide-react';

const FlowStableMeasurementGraphic: React.FC = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "Consistencia",
      description: "Mejoras rápidas y sostenidas en la consistencia de producción",
      color: "bg-green-500",
    },
    {
      icon: Activity,
      title: "Variabilidad",
      description: "Reducción de variabilidad operativa",
      color: "bg-blue-500",
    },
    {
      icon: Target,
      title: "Objetivos",
      description: "Cumplimiento de objetivos diarios",
      color: "bg-purple-500",
    },
    {
      icon: BarChart3,
      title: "Seguimiento",
      description: "Seguimiento estructurado de desvíos",
      color: "bg-orange-500",
    },
    {
      icon: CheckCircle,
      title: "Acciones",
      description: "Acciones correctivas inmediatas",
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: "Equipos",
      description: "Claridad, autonomía y compromiso",
      color: "bg-indigo-500",
    },
  ];

  return (
    // <div className="py-8">
    <div>
      {/* <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
          Resultados Medibles de FlowStable™
        </h3>
        <p className="text-[var(--color-text)] max-w-2xl mx-auto">
          FlowStable™ no es solo una metodología, sino una forma de pensar el trabajo operativo con foco en la eficiencia, la constancia y el aprendizaje continuo.
        </p>
      </div> */}

      {/* Metrics Grid */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-primary)] mb-2">
                {metric.title}
              </h4>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Flow Diagram */}
      {/* <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border border-[var(--color-border)]">
        <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 border-2 border-red-300 rounded-full flex items-center justify-center mb-2">
              <Activity className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-xs text-[var(--color-text)]">Procesos</p>
            <p className="text-xs text-[var(--color-text)]">Inestables</p>
          </div>

          <div className="text-[var(--color-secondary)] text-2xl">→</div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center mb-2">
              <Target className="w-8 h-8 text-white" />
            </div>
            <p className="text-xs text-[var(--color-text)] font-bold">
              FlowStable™
            </p>
          </div>

          <div className="text-[var(--color-secondary)] text-2xl">→</div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-xs text-[var(--color-text)]">Estabilidad</p>
            <p className="text-xs text-[var(--color-text)]">y Control</p>
          </div>
        </div>
      </div> */}

      {/* Key Benefits */}
      {/* <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-6 text-sm text-[var(--color-text)] flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Mejores promedios</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Mayor control</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Más productividad</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FlowStableMeasurementGraphic;