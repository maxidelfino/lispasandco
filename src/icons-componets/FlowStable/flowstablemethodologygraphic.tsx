import React from 'react';
import { Search, Eye, AlertTriangle, Wrench, RotateCcw } from 'lucide-react';

const FlowStableMethodologyGraphic: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Encontrar variable crítica",
      description: "Determinar su valor como línea de base",
      color: "bg-blue-500",
    },
    {
      id: 2,
      icon: Eye,
      title: "Observar variaciones",
      description: "Registrar del día a día de manera ordenada",
      color: "bg-green-500",
    },
    {
      id: 3,
      icon: AlertTriangle,
      title: "Identificar anomalías",
      description: "Que superan valores normales y generan inestabilidad",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      icon: Wrench,
      title: "Eliminar problemas",
      description: "Estudiar y eliminar de raíz para que no se repitan",
      color: "bg-red-500",
    },
    {
      id: 5,
      icon: RotateCcw,
      title: "Continuar secuencia",
      description: "Mejorando resultados y haciendo estable la variable",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="flex flex-col items-center py-8">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        Secuencia de Mejora diaria™
      </h3>
      
      <div className="relative">
        {/* Desktop: Circular layout */}
        <div className="hidden lg:block">
          <div className="relative w-96 h-96">
            {/* Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl z-10">
              <div className="text-center">
                <div className="text-xs">SECUENCIA</div>
                <div className="text-xs">DIARIA</div>
              </div>
            </div>

            {/* Steps in circle */}
            {steps.map((step, index) => {
              const angle = index * 72 - 90; // 360/5 = 72 degrees
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`absolute w-20 h-20 ${step.color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform duration-300 group`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <div className="text-[10px] text-center leading-tight">{step.id}</div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 w-48 p-3 bg-white rounded-lg shadow-xl border border-[var(--color-border)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <h4 className="font-bold text-[var(--color-primary)] mb-1 text-sm">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Connecting arrows */}
            {steps.map((_, index) => {
              const currentAngle = index * 72 - 90;
              const nextAngle = ((index + 1) % steps.length) * 72 - 90;
              const radius = 100;

              const x1 = Math.cos((currentAngle * Math.PI) / 180) * radius;
              const y1 = Math.sin((currentAngle * Math.PI) / 180) * radius;
              const x2 = Math.cos((nextAngle * Math.PI) / 180) * radius;
              const y2 = Math.sin((nextAngle * Math.PI) / 180) * radius;

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
                    strokeWidth="2"
                    markerEnd={`url(#arrowhead-${index})`}
                    opacity="0.6"
                  />
                </svg>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Linear layout */}
        <div className="block lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                    <div className="text-center">
                      <Icon className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs">{step.id}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[var(--color-primary)] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text)]">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="text-[var(--color-secondary)] text-2xl">
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowStableMethodologyGraphic;