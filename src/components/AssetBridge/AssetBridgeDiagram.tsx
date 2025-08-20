import React, { useState, useEffect } from "react";
import {
  FileText,
  Link2,
  BarChart3,
  ShieldCheck,
  ArrowUpCircle,
} from "lucide-react";

/**
 * AssetBridgeDiagram
 * Diagrama circular simplificado para AssetBridge.
 */
const AssetBridgeDiagram: React.FC = () => {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  // Responsive values
  const getResponsiveValues = () => {
    if (screenSize === "mobile") {
      return {
        svgSize: 320,
        viewBox: "0 0 320 320",
        centerX: 160,
        centerY: 160,
        radius: 90,
        centerRadius: 50,
        iconSize: 18,
        iconContainer: 44,
        fontSize: { title: 13, subtitle: 10 },
      };
    } else if (screenSize === "tablet") {
      return {
        svgSize: 400,
        viewBox: "0 0 400 400",
        centerX: 200,
        centerY: 200,
        radius: 120,
        centerRadius: 60,
        iconSize: 22,
        iconContainer: 54,
        fontSize: { title: 15, subtitle: 12 },
      };
    } else {
      return {
        svgSize: 500,
        viewBox: "0 0 500 500",
        centerX: 250,
        centerY: 250,
        radius: 150,
        centerRadius: 80,
        iconSize: 26,
        iconContainer: 64,
        fontSize: { title: 18, subtitle: 13 },
      };
    }
  };

  const responsive = getResponsiveValues();
  const isMobile = screenSize === "mobile";

  // 5 elementos principales simplificados
  const bridgeElements = [
    {
      id: "identificacion",
      icon: FileText,
      title: "Identificación",
      description: "Identifica los activos clave.",
      angle: 0,
      color: "bg-blue-500",
    },
    {
      id: "conexion",
      icon: Link2,
      title: "Conexión",
      description: "Conecta datos y procesos.",
      angle: 72,
      color: "bg-cyan-500",
    },
    {
      id: "medicion",
      icon: BarChart3,
      title: "Medición",
      description: "Mide el desempeño.",
      angle: 144,
      color: "bg-green-500",
    },
    {
      id: "integridad",
      icon: ShieldCheck,
      title: "Integridad",
      description: "Asegura confiabilidad.",
      angle: 216,
      color: "bg-emerald-500",
    },
    {
      id: "valor",
      icon: ArrowUpCircle,
      title: "Valor",
      description: "Maximiza el valor.",
      angle: 288,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="w-full min-h-screen p-4">
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 md:mb-4">
            AssetBridge™
          </h2>
          <p className="text-sm md:text-xl text-slate-600 max-w-xl mx-auto px-4">
            Plataforma para la gestión y medición de activos
          </p>
        </div>

        {/* Diagrama Circular */}
        <div className="relative flex justify-center items-center">
          <svg
            width={responsive.svgSize}
            height={responsive.svgSize}
            viewBox={responsive.viewBox}
            className="mx-auto"
          >
            {/* Círculo central */}
            <circle
              cx={responsive.centerX}
              cy={responsive.centerY}
              r={responsive.centerRadius}
              fill="var(--color-secondary)"
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <text
              x={responsive.centerX}
              y={responsive.centerY - 8}
              textAnchor="middle"
              className="fill-white font-bold"
              fontSize={responsive.fontSize.title}
            >
              AssetBridge™
            </text>
            <text
              x={responsive.centerX}
              y={responsive.centerY + 12}
              textAnchor="middle"
              className="fill-white"
              fontSize={responsive.fontSize.subtitle}
            >
              Gestión de Activos
            </text>

            {/* Líneas de conexión */}
            {bridgeElements.map((element) => {
              const angle = (element.angle * Math.PI) / 180;
              const x1 =
                responsive.centerX + responsive.centerRadius * Math.cos(angle);
              const y1 =
                responsive.centerY + responsive.centerRadius * Math.sin(angle);
              const x2 =
                responsive.centerX + (responsive.radius - 20) * Math.cos(angle);
              const y2 =
                responsive.centerY + (responsive.radius - 20) * Math.sin(angle);

              return (
                <line
                  key={`line-${element.id}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--color-border)"
                  strokeWidth="2"
                  strokeDasharray="6,3"
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                />
              );
            })}

            {/* Flechas de flujo */}
            {bridgeElements.map((element, index) => {
              const nextIndex = (index + 1) % bridgeElements.length;
              const currentAngle = (element.angle * Math.PI) / 180;
              const nextAngle =
                (bridgeElements[nextIndex].angle * Math.PI) / 180;

              const currentX =
                responsive.centerX +
                (responsive.radius - 20) * Math.cos(currentAngle);
              const currentY =
                responsive.centerY +
                (responsive.radius - 20) * Math.sin(currentAngle);
              const nextX =
                responsive.centerX +
                (responsive.radius - 20) * Math.cos(nextAngle);
              const nextY =
                responsive.centerY +
                (responsive.radius - 20) * Math.sin(nextAngle);

              // Trayectoria curva
              const midAngle =
                (((element.angle + bridgeElements[nextIndex].angle) / 2) *
                  Math.PI) /
                180;
              const arcRadius = responsive.radius - 8;
              const arcX = responsive.centerX + arcRadius * Math.cos(midAngle);
              const arcY = responsive.centerY + arcRadius * Math.sin(midAngle);

              return (
                <path
                  key={`arrow-${element.id}`}
                  d={`M ${currentX} ${currentY} Q ${arcX} ${arcY} ${nextX} ${nextY}`}
                  stroke="var(--color-secondary)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-60" : "opacity-0"
                  }`}
                />
              );
            })}

            {/* Definición de la flecha */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="var(--color-secondary)" />
              </marker>
            </defs>
          </svg>

          {/* Elementos del diagrama */}
          {bridgeElements.map((element) => {
            const angle = (element.angle * Math.PI) / 180;
            const x = responsive.centerX + responsive.radius * Math.cos(angle);
            const y = responsive.centerY + responsive.radius * Math.sin(angle);
            const Icon = element.icon;

            return (
              <div
                key={element.id}
                className={`absolute transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{
                  left: `${(x / responsive.svgSize) * 100}%`,
                  top: `${(y / responsive.svgSize) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    activeElement === element.id
                      ? "scale-110"
                      : "hover:scale-105"
                  }`}
                  onMouseEnter={() => setActiveElement(element.id)}
                  onMouseLeave={() => setActiveElement(null)}
                  onClick={() =>
                    setActiveElement(
                      activeElement === element.id ? null : element.id
                    )
                  }
                >
                  {/* Icono */}
                  <div
                    className={`rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      activeElement === element.id
                        ? `${element.color} shadow-xl border-transparent`
                        : "bg-[var(--color-surface)] border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                    }`}
                    style={{
                      width: `${responsive.iconContainer}px`,
                      height: `${responsive.iconContainer}px`,
                    }}
                  >
                    <Icon
                      className={`transition-colors duration-300 ${
                        activeElement === element.id
                          ? "text-white"
                          : "text-[var(--color-secondary)]"
                      }`}
                      size={responsive.iconSize}
                    />
                  </div>

                  {/* Tooltip para Desktop */}
                  {!isMobile && (
                    <div
                      className={`absolute z-10 w-48 p-3 bg-white rounded-lg shadow-xl border border-[var(--color-border)] transition-all duration-300 ${
                        activeElement === element.id
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                      style={{
                        left: x > responsive.centerX ? "-100%" : "0%",
                        top: y > responsive.centerY ? "-100%" : "100%",
                        marginTop: y > responsive.centerY ? "-8px" : "8px",
                        marginLeft: x > responsive.centerX ? "8px" : "-8px",
                      }}
                    >
                      <h3 className="font-bold text-[var(--color-primary)] mb-1">
                        {element.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text)]">
                        {element.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tarjetas para Mobile */}
        {isMobile && (
          <div className="mt-8 space-y-3">
            {bridgeElements.map((element) => {
              const Icon = element.icon;
              const isActive = activeElement === element.id;

              return (
                <div
                  key={element.id}
                  className={`bg-white rounded-lg shadow-md border border-[var(--color-border)] transition-all duration-300`}
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() =>
                      setActiveElement(isActive ? null : element.id)
                    }
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${element.color}`}
                      >
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800">
                          {element.title}
                        </h3>
                        {isActive && (
                          <p className="text-sm text-slate-600 mt-2">
                            {element.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Leyenda */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-[var(--color-text)] text-sm md:text-base">
            {isMobile
              ? "Toca cada elemento para ver detalles"
              : "Pasa el mouse sobre cada elemento para ver detalles"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssetBridgeDiagram;
