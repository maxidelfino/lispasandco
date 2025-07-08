import React, { useState, useEffect } from "react";
import {
  Users,
  Package,
  ArrowLeftRight,
  Timer,
  Truck,
  XCircle,
  Settings,
  Factory,
} from "lucide-react";
import { wastes } from "../data/wastes";

const iconMap = {
  Users,
  Package,
  ArrowLeftRight,
  Timer,
  Truck,
  XCircle,
  Settings,
  Factory,
};

const CircularWasteDiagram: React.FC = () => {
  const [activeWaste, setActiveWaste] = useState<string | null>(null);
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

    const element = document.getElementById("waste-diagram");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const radius = 200;
  const centerX = 250;
  const centerY = 250;

  return (
    <div id="waste-diagram" className="relative w-full max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
          Los 8 Desperdicios
        </h2>
        <p className="text-xl text-[var(--color-text)] max-w-2xl mx-auto">
          Identificamos y eliminamos sistemáticamente cada tipo de desperdicio
          en sus procesos
        </p>
      </div>

      {/* Circular Diagram */}
      <div className="relative">
        <svg width="500" height="500" viewBox="0 0 500 500" className="mx-auto">
          {/* Center Circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r="80"
            fill="var(--color-secondary)"
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
          <text
            x={centerX}
            y={centerY - 10}
            textAnchor="middle"
            className="fill-white text-lg font-bold"
          >
            WasteZero™
          </text>
          <text
            x={centerX}
            y={centerY + 15}
            textAnchor="middle"
            className="fill-white text-sm"
          >
            Mejora Continua
          </text>

          {/* Connecting Lines */}
          {wastes.map((waste, index) => {
            const angle = (waste.angle * Math.PI) / 180;
            const x1 = centerX + 80 * Math.cos(angle);
            const y1 = centerY + 80 * Math.sin(angle);
            const x2 = centerX + (radius - 40) * Math.cos(angle);
            const y2 = centerY + (radius - 40) * Math.sin(angle);

            return (
              <line
                key={`line-${waste.id}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--color-border)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            );
          })}
        </svg>

        {/* Waste Icons */}
        {wastes.map((waste, index) => {
          const angle = (waste.angle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const Icon = iconMap[waste.icon as keyof typeof iconMap];

          return (
            <div
              key={waste.id}
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
                  activeWaste === waste.id ? "scale-110" : "hover:scale-105"
                }`}
                onMouseEnter={() => setActiveWaste(waste.id)}
                onMouseLeave={() => setActiveWaste(null)}
              >
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeWaste === waste.id
                      ? "bg-[var(--color-accent)] shadow-lg"
                      : "bg-[var(--color-surface)] border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 transition-colors duration-300 ${
                      activeWaste === waste.id
                        ? "text-white"
                        : "text-[var(--color-secondary)]"
                    }`}
                  />
                </div>

                {/* Tooltip */}
                <div
                  className={`absolute z-10 w-64 p-4 bg-white rounded-lg shadow-xl border border-[var(--color-border)] transition-all duration-300 ${
                    activeWaste === waste.id
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
                    {waste.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text)]">
                    {waste.description}
                  </p>
                  {/* <div className="absolute w-3 h-3 bg-white border border-[var(--color-border)] transform rotate-45" style={{
                    [y > centerY ? 'bottom' : 'top']: '-6px',
                    [x > centerX ? 'right' : 'left']: '20px'
                  }}></div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-12 text-center">
        <p className="text-[var(--color-text)] mb-4">
          Pase el mouse sobre cada icono para ver detalles
        </p>
        <div className="inline-flex items-center space-x-2 text-sm text-[var(--color-text)]">
          <div className="w-3 h-3 bg-[var(--color-secondary)] rounded-full"></div>
          <span>Centro de mejora continua</span>
          <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full ml-4"></div>
          <span>Desperdicios identificados</span>
        </div>
      </div>
    </div>
  );
};

export default CircularWasteDiagram;
