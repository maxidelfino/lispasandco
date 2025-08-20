import React, { useState, useEffect, useRef } from "react";
import {
  BarChart2,
  FileText,
  Search,
  CheckCircle,
  TrendingUp,
  Users,
  AlertCircle,
  BookOpen,
  Layers,
} from "lucide-react";

// Pasos extraídos y adaptados del PDF LYS-P004-Toma-de-decisiones-basadas-en-estadisticas.pdf
const steps = [
  {
    id: "identificacion",
    title: "Identificar la necesidad",
    description:
      "Reconocer y definir claramente el problema, oportunidad o situación que requiere una decisión basada en datos.",
    icon: AlertCircle,
  },
  {
    id: "recoleccion",
    title: "Recolección de datos",
    description:
      "Obtener datos relevantes, confiables y suficientes para comprender la situación y sustentar la decisión.",
    icon: FileText,
  },
  {
    id: "analisis",
    title: "Análisis estadístico",
    description:
      "Aplicar herramientas y técnicas estadísticas para interpretar los datos y encontrar patrones, causas o tendencias.",
    icon: BarChart2,
  },
  {
    id: "evaluacion",
    title: "Evaluación de alternativas",
    description:
      "Generar y comparar diferentes opciones de solución, considerando los resultados del análisis estadístico.",
    icon: Layers,
  },
  {
    id: "seleccion",
    title: "Selección de la mejor opción",
    description:
      "Elegir la alternativa más adecuada, sustentada en la evidencia estadística y alineada con los objetivos organizacionales.",
    icon: CheckCircle,
  },
  {
    id: "implementacion",
    title: "Implementación",
    description:
      "Poner en práctica la decisión seleccionada, asegurando la comunicación y el involucramiento de los responsables.",
    icon: Users,
  },
  {
    id: "seguimiento",
    title: "Seguimiento y verificación",
    description:
      "Monitorear los resultados, verificar el cumplimiento de los objetivos y ajustar la decisión si es necesario.",
    icon: TrendingUp,
  },
  {
    id: "lecciones",
    title: "Lecciones aprendidas",
    description:
      "Documentar el proceso, los resultados y las lecciones para mejorar futuras tomas de decisiones.",
    icon: BookOpen,
  },
];

const diagramTitle = "Toma de Decisiones Basadas en Estadísticas";
const diagramSubtitle =
  "Modelo para la toma de decisiones fundamentadas en datos y análisis estadístico, asegurando objetividad y mejora continua.";

// Configuración visual para distintos tamaños de pantalla
const getDiagramConfig = (screen: string) => {
  if (screen === "mobile") {
    return {
      size: 320,
      center: 160,
      radius: 100,
      iconSize: 28,
      centerIconSize: 40,
      labelWidth: 110,
    };
  }
  if (screen === "tablet") {
    return {
      size: 420,
      center: 210,
      radius: 140,
      iconSize: 36,
      centerIconSize: 54,
      labelWidth: 130,
    };
  }
  // desktop
  return {
    size: 520,
    center: 260,
    radius: 180,
    iconSize: 44,
    centerIconSize: 64,
    labelWidth: 150,
  };
};

const DecisionesEstadisticasDiagram: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [screen, setScreen] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [visible, setVisible] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);

  // Responsive
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setScreen("mobile");
      else if (w < 1024) setScreen("tablet");
      else setScreen("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animación on visible
  useEffect(() => {
    const el = diagramRef.current;
    if (!el) return;
    const obs = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { size, center, radius, iconSize, centerIconSize, labelWidth } = getDiagramConfig(screen);

  // Calcula la posición de cada paso en el círculo
  const getStepPos = (idx: number, total: number) => {
    // Distribución circular equidistante
    const angle = ((2 * Math.PI) / total) * idx - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y, angle };
  };

  // Tooltip position (desktop/tablet)
  const getTooltipPos = (x: number, y: number) => {
    // Ajusta para que el tooltip no se salga del SVG
    let left = x + 24;
    let top = y - 10;
    if (x > center) left -= 0;
    if (x < center) left -= 260;
    if (top < 0) top = 0;
    return { left, top };
  };

  return (
    <div
      ref={diagramRef}
      id="decisiones-estadisticas-diagram"
      className="w-full flex flex-col items-center justify-center py-8 px-2 md:px-0"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-2 text-center">
        {diagramTitle}
      </h2>
      <p className="text-[var(--color-text)] text-base md:text-lg mb-8 text-center max-w-2xl">
        {diagramSubtitle}
      </p>
      {/* Diagrama circular */}
      <div
        className={`relative mx-auto transition-all duration-700 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      >
        <svg width={size} height={size} className="block">
          {/* Círculo base */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth={screen === "mobile" ? 2 : 3}
          />
          {/* Líneas radiales */}
          {steps.map((_, i) => {
            const { x, y } = getStepPos(i, steps.length);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="var(--color-border)"
                strokeDasharray="4 4"
                strokeWidth={1}
                opacity={0.5}
              />
            );
          })}
          {/* Círculo central */}
          <circle
            cx={center}
            cy={center}
            r={centerIconSize + 8}
            fill="var(--color-accent)"
            stroke="var(--color-primary)"
            strokeWidth={3}
            filter="drop-shadow(0 2px 8px rgba(0,0,0,0.10))"
          />
        </svg>
        {/* Icono central */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: center - centerIconSize,
            top: center - centerIconSize,
            width: centerIconSize * 2,
            height: centerIconSize * 2,
            zIndex: 10,
          }}
        >
          <BarChart2 className="text-white" size={centerIconSize} />
        </div>
        {/* Pasos alrededor del círculo */}
        {steps.map((step, i) => {
          const { x, y, angle } = getStepPos(i, steps.length);
          const Icon = step.icon;
          // Para accesibilidad y foco
          const isActive = active === step.id;
          return (
            <div
              key={step.id}
              className="absolute flex flex-col items-center group"
              style={{
                left: x - iconSize,
                top: y - iconSize,
                width: iconSize * 2,
                height: iconSize * 2 + 24,
                zIndex: 20,
                cursor: "pointer",
                outline: "none",
              }}
              tabIndex={0}
              aria-label={step.title}
              onMouseEnter={() => setActive(step.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(step.id)}
              onBlur={() => setActive(null)}
            >
              <div
                className={`rounded-full flex items-center justify-center transition-all duration-200 shadow-md border-2 ${
                  isActive
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] scale-110"
                    : "bg-white border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                }`}
                style={{
                  width: iconSize * 2,
                  height: iconSize * 2,
                }}
              >
                <Icon
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[var(--color-secondary)]"
                  }`}
                  size={iconSize}
                />
              </div>
              <span
                className={`mt-2 text-xs md:text-sm font-medium text-center transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text)]"
                }`}
                style={{
                  width: labelWidth,
                  userSelect: "none",
                  transform: `rotate(${(-angle * 180) / Math.PI}deg)`,
                  display: "block",
                }}
              >
                {step.title}
              </span>
              {/* Tooltip para desktop/tablet */}
              {screen !== "mobile" && isActive && (
                <div
                  className="absolute z-50 p-4 bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-200 opacity-100 visible pointer-events-none"
                  style={{
                    ...getTooltipPos(x, y),
                    width: 260,
                    maxWidth: "90vw",
                  }}
                >
                  <div className="flex items-center mb-2">
                    <Icon className="w-5 h-5 text-[var(--color-primary)] mr-2" />
                    <h3 className="font-bold text-[var(--color-primary)] text-sm md:text-base">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-[var(--color-text)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Mobile: lista expandible */}
      {screen === "mobile" && (
        <div className="mt-8 space-y-3 w-full max-w-md">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = active === step.id;
            return (
              <div
                key={step.id}
                className={`bg-white rounded-lg shadow-md border border-[var(--color-border)] transition-all duration-200`}
              >
                <button
                  className="w-full p-4 flex items-center space-x-3 focus:outline-none"
                  onClick={() => setActive(isActive ? null : step.id)}
                  aria-expanded={isActive}
                  aria-controls={`desc-${step.id}`}
                  type="button"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-secondary)]`}
                  >
                    <Icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-slate-800">{step.title}</h3>
                  </div>
                  <span
                    className={`ml-2 text-[var(--color-primary)] font-bold transition-transform duration-200 ${
                      isActive ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>
                {isActive && (
                  <div
                    id={`desc-${step.id}`}
                    className="px-4 pb-4 text-sm text-slate-600"
                  >
                    {step.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-[var(--color-text)] text-sm md:text-base">
          {screen === "mobile"
            ? "Toca cada paso para ver detalles"
            : "Pasa el mouse sobre cada paso para ver detalles"}
        </p>
      </div>
    </div>
  );
};

export default DecisionesEstadisticasDiagram;