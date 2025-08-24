import React, { useState, useEffect } from "react";
import {
  Scale,
  ArrowUpRight,
  BarChart2,
  Settings,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const measureBridgeElements = [
  {
    id: "critical-variables",
    icon: Scale,
    title: {
      es: "Variables Críticas",
      en: "Critical Variables",
      pt: "Variáveis Críticas",
    },
    description: {
      es: "Identificación de las variables clave que impactan la calidad y desempeño del proceso.",
      en: "Identification of key variables that impact process quality and performance.",
      pt: "Identificação das variáveis-chave que impactam a qualidade e o desempenho do processo.",
    },
    angle: 0,
    color: "bg-blue-600",
  },
  {
    id: "measurement-methods",
    icon: BarChart2,
    title: {
      es: "Métodos de Medición",
      en: "Measurement Methods",
      pt: "Métodos de Medição",
    },
    description: {
      es: "Selección y estandarización de métodos confiables para medir las variables críticas.",
      en: "Selection and standardization of reliable methods to measure critical variables.",
      pt: "Seleção e padronização de métodos confiáveis para medir as variáveis críticas.",
    },
    angle: 60,
    color: "bg-green-600",
  },
  {
    id: "calibration",
    icon: Settings,
    title: {
      es: "Calibración y Verificación",
      en: "Calibration and Verification",
      pt: "Calibração e Verificação",
    },
    description: {
      es: "Aseguramiento de la precisión de los instrumentos mediante calibraciones y verificaciones periódicas.",
      en: "Ensuring instrument accuracy through periodic calibrations and verifications.",
      pt: "Garantia da precisão dos instrumentos por meio de calibrações e verificações periódicas.",
    },
    angle: 120,
    color: "bg-yellow-500",
  },
  {
    id: "data-record",
    icon: RefreshCw,
    title: {
      es: "Registro y Análisis de Datos",
      en: "Data Recording and Analysis",
      pt: "Registro e Análise de Dados",
    },
    description: {
      es: "Documentación sistemática y análisis de los datos obtenidos para detectar tendencias y desviaciones.",
      en: "Systematic documentation and analysis of obtained data to detect trends and deviations.",
      pt: "Documentação sistemática e análise dos dados obtidos para detectar tendências e desvios.",
    },
    angle: 180,
    color: "bg-purple-600",
  },
  {
    id: "improvement-actions",
    icon: ArrowUpRight,
    title: {
      es: "Acciones de Mejora",
      en: "Improvement Actions",
      pt: "Ações de Melhoria",
    },
    description: {
      es: "Implementación de acciones correctivas y preventivas basadas en el análisis de datos.",
      en: "Implementation of corrective and preventive actions based on data analysis.",
      pt: "Implementação de ações corretivas e preventivas baseadas na análise de dados.",
    },
    angle: 240,
    color: "bg-pink-600",
  },
  {
    id: "control-followup",
    icon: CheckCircle2,
    title: {
      es: "Control y Seguimiento",
      en: "Control and Follow-up",
      pt: "Controle e Acompanhamento",
    },
    description: {
      es: "Monitoreo continuo para asegurar la efectividad de las mejoras y el control del proceso.",
      en: "Continuous monitoring to ensure the effectiveness of improvements and process control.",
      pt: "Monitoramento contínuo para garantir a eficácia das melhorias e o controle do processo.",
    },
    angle: 300,
    color: "bg-indigo-600",
  },
];

const diagramTranslations: Record<
  Language,
  {
    title: string;
    subtitle: string;
    center: string;
    centerSubtitle: string;
    legend: string;
    legendMobile: string;
  }
> = {
  es: {
    title: "Measure Bridge™",
    subtitle:
      "Puente de medición confiable para la mejora y control de procesos industriales",
    center: "Measure Bridge™",
    centerSubtitle: "Puente de Medición",
    legend: "Pasa el mouse sobre cada elemento para ver detalles",
    legendMobile: "Toca cada elemento para ver detalles",
  },
  en: {
    title: "Measure Bridge™",
    subtitle: "Reliable measurement bridge for process improvement and control",
    center: "Measure Bridge™",
    centerSubtitle: "Measurement Bridge",
    legend: "Hover over each element to see details",
    legendMobile: "Tap each element to see details",
  },
  pt: {
    title: "Measure Bridge™",
    subtitle:
      "Ponte de medição confiável para melhoria e controle de processos industriais",
    center: "Measure Bridge™",
    centerSubtitle: "Ponte de Medição",
    legend: "Passe o mouse sobre cada elemento para ver detalhes",
    legendMobile: "Toque em cada elemento para ver detalhes",
  },
};

const getResponsiveValues = (screenSize: string) => {
  if (screenSize === "mobile") {
    return {
      svgSize: 320,
      viewBox: "0 0 320 320",
      centerX: 160,
      centerY: 160,
      radius: 110,
      centerRadius: 60,
      iconSize: 16,
      iconContainer: 48,
      fontSize: { title: 12, subtitle: 10 },
    };
  } else if (screenSize === "tablet") {
    return {
      svgSize: 400,
      viewBox: "0 0 400 400",
      centerX: 200,
      centerY: 200,
      radius: 140,
      centerRadius: 70,
      iconSize: 20,
      iconContainer: 56,
      fontSize: { title: 14, subtitle: 11 },
    };
  } else {
    return {
      svgSize: 500,
      viewBox: "0 0 500 500",
      centerX: 250,
      centerY: 250,
      radius: 180,
      centerRadius: 100,
      iconSize: 24,
      iconContainer: 64,
      fontSize: { title: 16, subtitle: 12 },
    };
  }
};

const MeasureBridgeDiagram: React.FC = () => {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");
  const { currentLanguage } = useLanguage();

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

    const timer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  const responsive = getResponsiveValues(screenSize);
  const isMobile = screenSize === "mobile";
  const t = diagramTranslations[currentLanguage];

  return (
    <div className="w-full min-h-screen p-4">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 md:mb-4">
            {t.title}
          </h2>
          <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            {t.subtitle}
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
              y={responsive.centerY - 10}
              textAnchor="middle"
              className="fill-white font-bold"
              fontSize={responsive.fontSize.title}
            >
              {t.center}
            </text>
            <text
              x={responsive.centerX}
              y={responsive.centerY + 8}
              textAnchor="middle"
              className="fill-white"
              fontSize={responsive.fontSize.subtitle}
            >
              {t.centerSubtitle}
            </text>

            {/* Líneas de conexión */}
            {measureBridgeElements.map((element) => {
              const angle = (element.angle * Math.PI) / 180;
              const x1 =
                responsive.centerX + responsive.centerRadius * Math.cos(angle);
              const y1 =
                responsive.centerY + responsive.centerRadius * Math.sin(angle);
              const x2 =
                responsive.centerX + (responsive.radius - 30) * Math.cos(angle);
              const y2 =
                responsive.centerY + (responsive.radius - 30) * Math.sin(angle);

              return (
                <line
                  key={`line-${element.id}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--color-secondary)"
                  strokeWidth="2"
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-60" : "opacity-0"
                  }`}
                />
              );
            })}

            {/* Flechas de flujo */}
            {measureBridgeElements.map((element, index) => {
              const nextIndex = (index + 1) % measureBridgeElements.length;
              const currentAngle = (element.angle * Math.PI) / 180;
              const nextAngle =
                (measureBridgeElements[nextIndex].angle * Math.PI) / 180;

              const currentX =
                responsive.centerX +
                (responsive.radius - 30) * Math.cos(currentAngle);
              const currentY =
                responsive.centerY +
                (responsive.radius - 30) * Math.sin(currentAngle);
              const nextX =
                responsive.centerX +
                (responsive.radius - 30) * Math.cos(nextAngle);
              const nextY =
                responsive.centerY +
                (responsive.radius - 30) * Math.sin(nextAngle);

              // Trayectoria curva (arco)
              const midAngle =
                (((element.angle + measureBridgeElements[nextIndex].angle) /
                  2) *
                  Math.PI) /
                180;
              const arcRadius = responsive.radius - 15;
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

          {/* Elementos del puente */}
          {measureBridgeElements.map((element) => {
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

                  {/* Tooltip Desktop */}
                  {!isMobile && (
                    <div
                      className={`absolute z-10 w-64 p-4 bg-white rounded-lg shadow-xl border border-[var(--color-border)] transition-all duration-300 ${
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
                      <h3 className="font-bold text-[var(--color-primary)] mb-2">
                        {element.title[currentLanguage]}
                      </h3>
                      <p className="text-sm text-[var(--color-text)]">
                        {element.description[currentLanguage]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tarjetas móviles */}
        {isMobile && (
          <div className="mt-8 space-y-3">
            {measureBridgeElements.map((element) => {
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
                          {element.title[currentLanguage]}
                        </h3>
                        {isActive && (
                          <p className="text-sm text-slate-600 mt-2">
                            {element.description[currentLanguage]}
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
            {isMobile ? t.legendMobile : t.legend}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeasureBridgeDiagram;
