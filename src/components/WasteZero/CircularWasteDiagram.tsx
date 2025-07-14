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

// Datos de ejemplo para los desperdicios
const wastes = [
  {
    id: "transport",
    title: "Transporte",
    description:
      "Movimiento innecesario de materiales o personas que no agrega valor al proceso.",
    icon: "Truck",
    angle: 0,
  },
  {
    id: "inventory",
    title: "Inventario",
    description:
      "Exceso de materiales, productos en proceso o terminados almacenados.",
    icon: "Package",
    angle: 45,
  },
  {
    id: "motion",
    title: "Movimiento",
    description: "Movimientos innecesarios de personas durante el trabajo.",
    icon: "ArrowLeftRight",
    angle: 90,
  },
  {
    id: "waiting",
    title: "Espera",
    description: "Tiempo perdido esperando información, materiales o equipos.",
    icon: "Timer",
    angle: 135,
  },
  {
    id: "overproduction",
    title: "Sobreproducción",
    description:
      "Producir más de lo que el cliente necesita o antes de que lo necesite.",
    icon: "Factory",
    angle: 180,
  },
  {
    id: "overprocessing",
    title: "Sobre-procesamiento",
    description:
      "Realizar más trabajo del necesario o agregar características innecesarias.",
    icon: "Settings",
    angle: 225,
  },
  {
    id: "defects",
    title: "Defectos",
    description:
      "Productos que no cumplen con los estándares de calidad requeridos.",
    icon: "XCircle",
    angle: 270,
  },
  {
    id: "skills",
    title: "Talento no utilizado",
    description:
      "No aprovechar las habilidades, conocimientos y experiencia del personal.",
    icon: "Users",
    angle: 315,
  },
];

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
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("mobile");
      else if (width < 768) setScreenSize("tablet");
      else if (width < 1024) setScreenSize("desktop");
      else setScreenSize("large");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

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

  // Configuraciones responsivas
  const getConfig = () => {
    switch (screenSize) {
      case "mobile":
        return { size: 300, radius: 100, iconSize: 10, centerRadius: 50 };
      case "tablet":
        return { size: 400, radius: 130, iconSize: 12, centerRadius: 60 };
      case "desktop":
        return { size: 500, radius: 160, iconSize: 16, centerRadius: 70 };
      default:
        return { size: 600, radius: 200, iconSize: 18, centerRadius: 80 };
    }
  };

  const { size, radius, iconSize, centerRadius } = getConfig();
  const centerX = size / 2;
  const centerY = size / 2;

  const getTooltipPosition = (waste) => {
    const angle = (waste.angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    // Calcular posición del tooltip para que siempre sea visible
    let tooltipX = x;
    let tooltipY = y;

    // Ajustar posición horizontal
    if (x > centerX) {
      tooltipX = x - 280; // Posicionar a la izquierda del icono
    } else {
      tooltipX = x + 20; // Posicionar a la derecha del icono
    }

    // Ajustar posición vertical
    if (y > centerY) {
      tooltipY = y - 120; // Posicionar arriba del icono
    } else {
      tooltipY = y + 20; // Posicionar abajo del icono
    }

    return { x: tooltipX, y: tooltipY };
  };

  return (
    <div id="waste-diagram" className="relative w-full max-w-6xl mx-auto px-4">
      {/* Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
          Los 8 Desperdicios
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-[var(--color-text)] max-w-2xl mx-auto px-4">
          Identificamos y eliminamos sistemáticamente cada tipo de desperdicio
          en sus procesos
        </p>
      </div>

      {/* Circular Diagram Container */}
      <div className="relative flex justify-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0"
          >
            {/* Center Circle */}
            <circle
              cx={centerX}
              cy={centerY}
              r={centerRadius}
              fill="var(--color-secondary)"
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            />
            <text
              x={centerX}
              y={centerY - 10}
              textAnchor="middle"
              className="fill-white font-bold"
              fontSize={
                screenSize === "mobile" ? 10 : screenSize === "tablet" ? 12 : 14
              }
            >
              WasteZero™
            </text>
            <text
              x={centerX}
              y={centerY + 15}
              textAnchor="middle"
              className="fill-white"
              fontSize={
                screenSize === "mobile" ? 8 : screenSize === "tablet" ? 10 : 12
              }
            >
              Mejora Continua
            </text>

            {/* Connecting Lines */}
            {wastes.map((waste, index) => {
              const angle = (waste.angle * Math.PI) / 180;
              const x1 = centerX + centerRadius * Math.cos(angle);
              const y1 = centerY + centerRadius * Math.sin(angle);
              const x2 = centerX + (radius - 30) * Math.cos(angle);
              const y2 = centerY + (radius - 30) * Math.sin(angle);

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
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
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
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{
                  left: x,
                  top: y,
                  transitionDelay: `${index * 100}ms`,
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
                    className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeWaste === waste.id
                      ? "bg-[var(--color-accent)] shadow-lg"
                      : "bg-[var(--color-surface)] border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                    }`}
                    style={{
                      width:
                        screenSize === "mobile"
                          ? 40
                          : screenSize === "tablet"
                          ? 48
                          : 56,
                      height:
                        screenSize === "mobile"
                          ? 40
                          : screenSize === "tablet"
                          ? 48
                          : 56,
                    }}
                  >
                    <Icon
                      className={`transition-colors duration-300 ${
                        activeWaste === waste.id
                          ? "text-white"
                          : "text-[var(--color-secondary)]"
                      }`}
                      size={
                        screenSize === "mobile"
                          ? 20
                          : screenSize === "tablet"
                          ? 24
                          : 28
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Improved Tooltip */}
          {screenSize !== "mobile" && activeWaste &&
            (() => {
              const waste = wastes.find((w) => w.id === activeWaste);
              if (!waste) return null;

              const tooltipPos = getTooltipPosition(waste);
              const Icon = iconMap[waste.icon as keyof typeof iconMap];


              return (
                <div
                  className="absolute z-50 p-4 bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 opacity-100 visible pointer-events-none"
                  style={{
                    left: tooltipPos.x,
                    top: tooltipPos.y,
                    width: screenSize === "mobile" ? 240 : 280,
                    maxWidth: "90vw",
                  }}
                >
                  <div className="flex items-center mb-2">
                    <Icon className="w-5 h-5 text-[var(--color-primary)] mr-2" />
                    <h3 className="font-bold text-[var(--color-primary)] text-sm md:text-base">
                      {waste.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-[var(--color-text)] leading-relaxed">
                    {waste.description}
                  </p>
                </div>
              );
            })()}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-[var(--color-text)] mb-4 text-sm md:text-base px-4">
          Pase el mouse sobre cada icono para ver detalles
        </p>
      </div>
    </div>
  );
};

export default CircularWasteDiagram;
