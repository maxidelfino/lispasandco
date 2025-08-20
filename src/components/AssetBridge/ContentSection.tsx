"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  CircleQuestionMark,
  Clock,
  X,
  Users,
  Settings,
  Grid3x3,
  Zap,
  Box,
  RefreshCcw,
  HandCoins,
  AlertTriangle,
  BarChart2,
  FileWarning,
  Compass,
} from "lucide-react";

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  content: {
    description?: string;
    subDescription?: string;
    details: string[];
    footer?: string;
    children?: React.ReactNode;
  };
  graphic: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  content,
  graphic,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      setIsAnimating(true);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl transform transition-all duration-300 ${
          isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[var(--color-border)] p-8 flex justify-between items-start rounded-t-3xl z-20">
          <div className="flex-1 pr-4">
            <h2
              id="modal-title"
              className="text-3xl font-bold text-[var(--color-primary)] mb-2"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-[var(--color-secondary)] font-medium">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-[var(--color-bg)] rounded-full transition-all duration-200 group flex-shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6 text-[var(--color-text)] group-hover:text-[var(--color-primary)] group-hover:scale-110 transition-all" />
          </button>
        </div>

        {/* Content */}
        {content.children ? (
          <div className="p-8">{content.children}</div>
        ) : (
          <div className="p-8">
            {/* Description */}
            {content.description && (
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
                <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                  {content.description}
                </p>
              </div>
            )}

            {/* Graphic */}
            {graphic && (
              <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
                {graphic}
              </div>
            )}

            {/* Details */}
            <div>
              {content.subDescription && (
                <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                  {content.subDescription}
                </p>
              )}
              {content.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
                >
                  {detail.startsWith("✔") ? (
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                  ) : detail.startsWith("✘") ? (
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-4 h-4 text-red-600" />
                    </div>
                  ) : (
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
                  )}
                  <span className="text-[var(--color-text)] leading-relaxed flex-1">
                    {detail.replace(/^[✔✘] /, "")}
                  </span>
                </div>
              ))}
            </div>
            {content.footer && (
              <p className="text-[var(--color-text)] leading-relaxed text-lg">
                {content.footer}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  subtitle,
  children,
}) => (
  <section id={id} className="px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
          {title}
        </h2>
        <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  </section>
);

const AssetBridgeContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es y qué no es?",
      subtitle: "Características del programa Asset Bridge™",
      children: (
        <>
          {/* Introducción a la gestión de activos */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
              En entornos industriales, la gestión de activos es la disciplina
              que asegura que los equipos e instalaciones mantengan su
              rendimiento, seguridad y valor durante todo su ciclo de vida.
              Implica integrar ingeniería, mantenimiento, operaciones y gestión
              financiera para tomar decisiones informadas sobre adquisición,
              uso, mantenimiento, renovación y disposición de los activos.
            </p>
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              El objetivo de realizar un mantenimiento correcto y gestionar
              adecuadamente los activos no solo mejora su desempeño técnico,
              sino que asegura su disponibilidad cuando se los necesite, y de
              forma rentable.
            </p>
          </div>

          {/* ¿Qué es el programa Asset Bridge? */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-accent)]/5 to-[var(--color-secondary)]/5 rounded-2xl border-l-4 border-[var(--color-accent)]">
            <h3 className="text-[var(--color-primary)] font-bold text-lg mb-2">
              ¿Qué es el programa Asset Bridge?
            </h3>
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              <span className="font-semibold">Asset Bridge™</span> de LYSPAS &
              CO es un programa estructurado que conecta las mejores prácticas
              de Asset Management con la realidad operativa de cada planta.
              Combina metodologías como Asset Integrity Management, Reliability
              Centered Maintenance (RCM), Operator Driven Reliability (ODR) y
              sistemas de monitoreo de condición para optimizar disponibilidad y
              confiabilidad, al tiempo que reduce costos y riesgos.
            </p>
          </div>

          {/* ¿Qué es? */}
          <div className="mb-6">
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
              ¿Qué es?
            </p>
            {[
              "Un programa que integra ingeniería, mantenimiento, operaciones y finanzas para la gestión eficiente de activos industriales.",
              "Una solución que adapta las mejores prácticas internacionales (Asset Integrity, RCM, ODR, monitoreo de condición) a la realidad de cada planta.",
              "Un sistema que optimiza la disponibilidad y confiabilidad de los equipos, reduciendo costos y riesgos.",
              "Una metodología que facilita la toma de decisiones informadas durante todo el ciclo de vida de los activos.",
            ].map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-[var(--color-text)] leading-relaxed flex-1">
                  {detail}
                </span>
              </div>
            ))}
          </div>

          {/* ¿Qué no es? */}
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
              ¿Qué no es?
            </p>
            {[
              "Solo un software o tablero de indicadores sin integración con la gestión diaria.",
              "Una solución genérica que no considera la realidad y desafíos específicos de cada planta.",
              "Un sistema rígido que no evoluciona con las necesidades del negocio.",
              "Un reemplazo de la gestión operativa, sino un complemento para potenciarla y hacerla más rentable.",
            ].map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
              >
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-[var(--color-text)] leading-relaxed flex-1">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "2",
      icon: Zap,
      title: "Problemas que resuelve",
      subtitle: "Los desafíos operativos",
      children: (
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "Baja disponibilidad y paradas no planificadas",
              description:
                "Baja disponibilidad de equipos y paradas no planificadas.",
            },
            {
              icon: HandCoins,
              title: "Altos costos de mantenimiento",
              description:
                "Altos costos de mantenimiento por prácticas reactivas.",
            },
            {
              icon: Users,
              title: "Falta de coordinación",
              description:
                "Falta de coordinación entre mantenimiento, operaciones y seguridad.",
            },
            {
              icon: FileWarning,
              title: "Escasa trazabilidad",
              description:
                "Escasa trazabilidad en trabajos y decisiones técnicas.",
            },
            {
              icon: Box,
              title: "Gestión de inventarios ineficiente",
              description:
                "Inventarios de repuestos sobredimensionados o críticos no disponibles.",
            },
            {
              icon: BarChart2,
              title: "Dificultad para medir madurez y priorizar mejoras",
              description:
                "Dificultad para medir la madurez de la gestión de activos y priorizar mejoras.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`
                bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                hover:shadow-xl transition-all duration-300 hover:scale-105
                ${idx === 6 ? "col-span-2" : ""}
              `}
            >
              <div className="flex items-center mb-3 space-x-3">
                <item.icon className="w-8 h-8" />
                <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h4>
              </div>
              <p className="text-[var(--color-text)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "4",
      icon: Clock,
      title: "Metodología & Tiempos",
      subtitle: "Metodologías, tiempos y aplicaciones por industria",
      children: (
        <div>
          {/* Metodologías y subsistemas */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-2">
              <strong>Asset Bridge™</strong> combina prácticas de clase mundial
              con herramientas propias de LYSPAS & CO, trabajando sobre cinco
              subsistemas clave:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md mb-2">
              <li>
                <strong>Asset Care:</strong> Cultura de cuidado diario por parte
                de los operadores.
              </li>
              <li>
                <strong>Integridad y salud de equipos:</strong> Integridad
                mecánica, estructural y de seguridad. Monitoreo de desempeño.
              </li>
              <li>
                <strong>Confiabilidad:</strong> Análisis de fallas,
                confiabilidad y prevención de incidentes.
              </li>
              <li>
                <strong>Gestión de órdenes de trabajo:</strong> Planificación,
                programación, coordinación y registro de tareas.
              </li>
            </ul>
            <p className="text-[var(--color-text)] leading-relaxed text-md mt-2">
              Estos subsistemas se soportan en un ciclo continuo que incluye:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md">
              <li>Planificación de tareas</li>
              <li>Programación de intervenciones</li>
              <li>Coordinación entre áreas</li>
              <li>Registro y trazabilidad de trabajos</li>
              <li>Gestión de herramientas y repuestos críticos</li>
            </ul>
          </div>

          {/* Aplicaciones por industria */}
          <div className="mb-8">
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
              Aplicaciones por industria y enfoque específico:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md space-y-1">
              <li>
                <strong>Industria aceitera:</strong> Laminadores y quebradores,
                equipos cuya confiabilidad impacta directamente en la capacidad
                productiva y el rendimiento de extracción.
              </li>
              <li>
                <strong>Movimiento de granos:</strong> Plataformas de descarga,
                transportadores, secadoras, donde la continuidad operativa evita
                pérdidas de calidad y tiempos de parada.
              </li>
              <li>
                <strong>Molinería y otros procesos mecánicos:</strong> Molinos,
                zarandas, quebradores, descascaradores, minimizando desgaste y
                asegurando un producto final consistente.
              </li>
              <li>
                <strong>Sistemas de refrigeración industrial:</strong>{" "}
                Compresores, evaporadores, condensadores.
              </li>
              <li>
                <strong>Líneas de desposte y empaque:</strong> Cintas
                transportadoras, sierras, clasificadoras.
              </li>
              <li>
                <strong>
                  Bombas y sistemas de transferencia de fluidos críticos.
                </strong>
              </li>
            </ul>
            <p className="text-[var(--color-text)] leading-relaxed text-md mt-2">
              En cada industria, los beneficios se traducen en mayor
              disponibilidad operativa, reducción de costos por fallas y
              extensión de la vida útil, con métricas claras de impacto.
            </p>
          </div>

          {/* Duración */}
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
              Duración y tiempos:
            </p>
            <p className="text-[var(--color-text)] leading-relaxed text-md mt-1">
              La duración es adaptable según el diagnóstico inicial.
              Implementaciones típicas: <strong>10 a 12 meses</strong>, con
              hitos trimestrales y resultados visibles desde el primer
              trimestre.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      icon: HandCoins,
      title: "Beneficios",
      subtitle: "Beneficios del programa Asset Bridge™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: CheckCircle,
              title: "Disponibilidad y confiabilidad",
              description:
                "Mayor disponibilidad y confiabilidad de activos críticos.",
            },
            {
              icon: RefreshCcw,
              title: "Reducción de costos y paradas",
              description:
                "Reducción de costos de mantenimiento y pérdidas por paradas no planificadas.",
            },
            {
              icon: Box,
              title: "Optimización de inventario",
              description: "Optimización del inventario de repuestos críticos.",
            },
            {
              icon: Grid3x3,
              title: "Integración de áreas",
              description:
                "Integración efectiva entre áreas técnicas y operativas.",
            },
            {
              icon: AlertTriangle,
              title: "Cumplimiento y seguridad",
              description:
                "Cumplimiento normativo y mejora en seguridad industrial.",
            },
            {
              icon: BarChart2,
              title: "Visión y evolución",
              description:
                "Visión clara del nivel de madurez y evolución en la gestión de activos.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`
                bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                hover:shadow-xl transition-all duration-300 hover:scale-105
                ${index === 6 ? "col-span-2" : ""}
              `}
            >
              <div className="text-4xl mb-4 flex gap-4">
                <feature.icon className="w-8 h-8" />
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[var(--color-text)]">{feature.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "6",
      icon: Users,
      title: "¿Para quién está recomendado el programa?",
      subtitle: "Tipos de empresas ideales para Asset Bridge™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: Box, // Representa activos físicos/industriales
              title: "Empresas industriales de sectores críticos",
              description:
                "Empresas industriales de sectores como manufactura, alimentos y bebidas, farmacéutica, minería, energía, química, papel y celulosa, entre otros, que gestionan activos físicos críticos.",
            },
            {
              icon: Settings, // Representa mantenimiento y confiabilidad
              title:
                "Organizaciones enfocadas en mantenimiento y confiabilidad",
              description:
                "Organizaciones que buscan optimizar la gestión de mantenimiento, confiabilidad y disponibilidad de sus equipos e instalaciones.",
            },
            {
              icon: Grid3x3, // Representa integración y alineación de áreas
              title: "Empresas con integración de áreas técnicas y de gestión",
              description:
                "Empresas con necesidades de integración entre áreas técnicas, operativas y de gestión, para alinear la estrategia de activos con los objetivos corporativos.",
            },
            {
              icon: Users, // Representa líderes y equipos multidisciplinarios
              title: "Líderes y equipos de gestión de activos",
              description:
                "Líderes de mantenimiento, operaciones, ingeniería, producción, calidad y gestión de activos que desean fortalecer la cultura de mejora continua y cumplimiento normativo.",
            },
            {
              icon: RefreshCcw, // Representa transformación y digitalización
              title: "Compañías en transformación digital de activos",
              description:
                "Compañías en procesos de transformación digital, implementación de sistemas de gestión de activos (EAM/CMMS) o que buscan elevar su nivel de madurez en gestión de activos.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`
                bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                hover:shadow-xl transition-all duration-300 hover:scale-105
                ${index === 4 ? "col-span-2" : ""}
              `}
            >
              <div className="text-4xl mb-4 flex gap-4">
                <feature.icon className="w-8 h-8" />
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[var(--color-text)]">{feature.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "5",
      icon: Settings,
      title: "¿Con qué otros productos se relaciona?",
      subtitle: "",
      description:
        "Estos productos se complementan: WasteZero™ facilita la aceptación de prácticas Lean en la empresa y prepara al equipo para actuar; Kaizen Action™ asegura la participación activa de los equipos durante eventos de mejora y genera soluciones aplicables; y LeanBridge™ potencia la adopción de la disciplina operativa necesaria para sostener las mejoras. Paralelamente, StratBridge™ alinea los cambios con los objetivos estratégicos, transformando iniciativas en proyectos priorizados, mientras que Lean Enterprise Transformation™ proporciona el marco para sostener y escalar esos cambios durante procesos de transformación profunda.",
      details: [],
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: Grid3x3,
              title: "Ops Excellence System™",
              description:
                "Para integrar la gestión de activos dentro de un sistema de excelencia operacional.",
            },
            {
              icon: BarChart2,
              title: "Measure Bridge™",
              description:
                "Para garantizar precisión en la medición y monitoreo de condición.",
            },
            {
              icon: RefreshCcw,
              title: "Change Bridge™",
              description:
                "Para gestionar la adopción cultural y organizacional de las nuevas prácticas.",
            },
            {
              icon: Compass,
              title: "StratBridge™",
              description:
                "Para alinear la estrategia de activos con la estrategia corporativa.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                idx === 4 ? "col-span-2" : ""
              }`}
            >
              <div className="flex items-center mb-3 space-x-3">
                <item.icon className="w-8 h-8" />
                <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h4>
              </div>
              <p className="text-[var(--color-text)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const handleCardClick = (feature: any) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div id="AssetBridge-content" className="bg-[var(--color-bg)]">
      <ContentSection id="que-es" title="" subtitle="">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeCard === feature.id;
            return (
              <div
                key={feature.id}
                className={`
                  group relative bg-[var(--color-surface)] rounded-2xl p-8 \
                  border border-[var(--color-border)] transition-all duration-300 cursor-pointer \
                  hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:ring-4 hover:ring-[var(--color-secondary)]/20 \
                  ${
                    isActive
                      ? "shadow-2xl scale-105 -translate-y-2 ring-4 ring-[var(--color-secondary)]/20 border-[var(--color-secondary)]"
                      : "shadow-lg"
                  }`}
                onMouseEnter={() => setActiveCard(feature.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => handleCardClick(feature)}
              >
                {/* Header */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] ml-4 flex-1">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-[var(--color-text)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.subtitle}
                </p>

                {/* Click indicator */}
                <div className="absolute bottom-4 right-4 text-xs text-[var(--color-border)] group-hover:text-[var(--color-secondary)] transition-colors duration-300 font-medium">
                  Click para más detalles
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedFeature?.title || ""}
        subtitle={selectedFeature?.subtitle || ""}
        content={{
          description: selectedFeature?.description,
          subDescription: selectedFeature?.subDescription,
          details: selectedFeature?.details || [],
          footer: selectedFeature?.footer,
          children: selectedFeature?.children,
        }}
        graphic={selectedFeature?.graphic}
      />
    </div>
  );
};

export default AssetBridgeContent;
