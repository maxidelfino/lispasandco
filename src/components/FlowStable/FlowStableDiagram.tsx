import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Activity,
  BarChart3,
  Target,
  Gauge,
  Zap,
} from "lucide-react";

const FlowStableDiagram: React.FC = () => {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("flowstable-diagram");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const radius = 180;
  const centerX = 250;
  const centerY = 250;

  const flowElements = [
    {
      id: "stability",
      icon: Target,
      title: "Estabilidad",
      description: "Procesos estables y previsibles",
      angle: 0,
      color: "bg-blue-500",
    },
    {
      id: "measurement",
      icon: Gauge,
      title: "Medición",
      description: "Variables críticas controladas",
      angle: 60,
      color: "bg-green-500",
    },
    {
      id: "improvement",
      icon: TrendingUp,
      title: "Mejora",
      description: "Optimización continua",
      angle: 120,
      color: "bg-purple-500",
    },
    {
      id: "control",
      icon: Activity,
      title: "Control",
      description: "Seguimiento de desvíos",
      angle: 180,
      color: "bg-orange-500",
    },
    {
      id: "efficiency",
      icon: Zap,
      title: "Eficiencia",
      description: "Mayor productividad",
      angle: 240,
      color: "bg-red-500",
    },
    {
      id: "data",
      icon: BarChart3,
      title: "Datos",
      description: "Gestión basada en hechos",
      angle: 300,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div id="flowstable-diagram" className="relative w-full max-w-4xl mx-auto">
      {/* Title */}
      {/* <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
          FlowStable™ Ecosystem
        </h2>
        <p className="text-xl text-[var(--color-text)] max-w-2xl mx-auto">
          Un enfoque integral para dominar tus procesos y mejorar tus resultados
        </p>
      </div> */}

      {/* Circular Diagram */}
      <div className="relative">
        <svg width="500" height="500" viewBox="0 0 500 500" className="mx-auto">
          {/* Center Circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r="100"
            fill="var(--color-secondary)"
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
          <text
            x={centerX}
            y={centerY - 15}
            textAnchor="middle"
            className="fill-white text-xl font-bold"
          >
            FlowStable™
          </text>
          <text
            x={centerX}
            y={centerY + 10}
            textAnchor="middle"
            className="fill-white text-sm"
          >
            Secuencia de
          </text>
          <text
            x={centerX}
            y={centerY + 25}
            textAnchor="middle"
            className="fill-white text-sm"
          >
            Mejora diaria™
          </text>

          {/* Connecting Lines */}
          {flowElements.map((element, index) => {
            const angle = (element.angle * Math.PI) / 180;
            const x1 = centerX + 100 * Math.cos(angle);
            const y1 = centerY + 100 * Math.sin(angle);
            const x2 = centerX + (radius - 50) * Math.cos(angle);
            const y2 = centerY + (radius - 50) * Math.sin(angle);

            return (
              <line
                key={`line-${element.id}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--color-border)"
                strokeWidth="3"
                strokeDasharray="8,4"
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            );
          })}

          {/* Flow arrows */}
          {flowElements.map((element, index) => {
            const nextIndex = (index + 1) % flowElements.length;
            const currentAngle = (element.angle * Math.PI) / 180;
            const nextAngle = (flowElements[nextIndex].angle * Math.PI) / 180;

            const currentX = centerX + (radius - 50) * Math.cos(currentAngle);
            const currentY = centerY + (radius - 50) * Math.sin(currentAngle);
            const nextX = centerX + (radius - 50) * Math.cos(nextAngle);
            const nextY = centerY + (radius - 50) * Math.sin(nextAngle);

            // Calculate arc path
            const midAngle =
              (((element.angle + flowElements[nextIndex].angle) / 2) *
                Math.PI) /
              180;
            const arcRadius = radius - 30;
            const arcX = centerX + arcRadius * Math.cos(midAngle);
            const arcY = centerY + arcRadius * Math.sin(midAngle);

            return (
              <path
                key={`arrow-${element.id}`}
                d={`M ${currentX} ${currentY} Q ${arcX} ${arcY} ${nextX} ${nextY}`}
                stroke="var(--color-secondary)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                className={`transition-all duration-1000 delay-${index * 150} ${
                  isVisible ? "opacity-60" : "opacity-0"
                }`}
              />
            );
          })}

          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="var(--color-secondary)"
              />
            </marker>
          </defs>
        </svg>

        {/* Flow Elements */}
        {flowElements.map((element, index) => {
          const angle = (element.angle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const Icon = element.icon;

          return (
            <div
              key={element.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-${
                index * 100
              } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
              style={{
                left: `${(x / 500) * 100}%`,
                top: `${(y / 500) * 100}%`,
              }}
            >
              <div
                className={`relative group cursor-pointer transition-all duration-300 ${
                  activeElement === element.id ? "scale-110" : "hover:scale-105"
                }`}
                onMouseEnter={() => setActiveElement(element.id)}
                onMouseLeave={() => setActiveElement(null)}
              >
                {/* Icon Container */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeElement === element.id
                      ? `${element.color} shadow-xl`
                      : "bg-[var(--color-surface)] border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 transition-colors duration-300 ${
                      activeElement === element.id
                        ? "text-white"
                        : "text-[var(--color-secondary)]"
                    }`}
                  />
                </div>

                {/* Tooltip */}
                <div
                  className={`absolute z-10 w-64 p-4 bg-white rounded-lg shadow-xl border border-[var(--color-border)] transition-all duration-300 ${
                    activeElement === element.id
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                  style={{
                    left: x > centerX ? "-100%" : "0%",
                    top: y > centerY ? "-100%" : "100%",
                    marginTop: y > centerY ? "-8px" : "8px",
                    marginLeft: x > centerX ? "8px" : "-8px",
                  }}
                >
                  <h3 className="font-bold text-[var(--color-primary)] mb-2">
                    {element.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text)]">
                    {element.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-12 text-center">
        <p className="text-[var(--color-text)] mb-4">
          Pase el mouse sobre cada elemento para ver detalles
        </p>
      </div>
    </div>
  );
};

export default FlowStableDiagram;
