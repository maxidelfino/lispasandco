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
  GraduationCap,
  Grid3x3,
  Sparkles,
  Zap,
  Box,
  RefreshCcw,
  HandCoins,
  AlertTriangle,
  BarChart2,
  FileWarning,
  ListChecks,
  HelpCircle,
  DivideSquare,
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

const MeasureBridgeContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es y qué no es?",
      subtitle: "Características del programa Measure Bridge™",
      children: (
        <>
          {/* Descripción principal */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
              Measure Bridge es una metodología desarrollada por LYSPAS & CO que
              permite a las organizaciones medir, visualizar y gestionar el
              avance de sus procesos de mejora continua, integrando indicadores
              clave y facilitando la toma de decisiones basada en datos.
            </p>
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              A través de una estructura clara y herramientas visuales, Measure
              Bridge ayuda a identificar brechas, establecer objetivos
              alcanzables y monitorear el progreso de manera sistemática,
              promoviendo la participación de todos los niveles de la
              organización.
            </p>
          </div>

          {/* Cita inspiradora */}
          <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
            “Lo que no se mide, no se puede mejorar. Measure Bridge es el puente
            entre la intención de mejorar y la evidencia de la mejora.”
          </blockquote>

          {/* ¿Qué es? */}
          <div className="mb-6">
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
              ¿Qué es?
            </p>
            {[
              "Un sistema integral para medir y visualizar el avance de la mejora continua.",
              "Una herramienta que conecta los objetivos estratégicos con los resultados operativos.",
              "Un método que promueve la gestión basada en hechos y datos objetivos.",
              "Un facilitador para la alineación y el compromiso de los equipos en torno a metas comunes.",
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
              "Solo un tablero de indicadores sin contexto ni seguimiento.",
              "Una herramienta aislada de la gestión diaria.",
              "Un sistema rígido que no se adapta a las necesidades de la organización.",
              "Un reemplazo de la gestión, sino un complemento para potenciarla.",
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
              title: "Variación de calidad",
              description:
                "Variación inexplicable en los resultados de calidad.",
            },
            {
              icon: BarChart2,
              title: "Valores atípicos y picos",
              description: "Reducción de valores atípicos y picos de proceso.",
            },
            {
              icon: FileWarning,
              title: "Decisiones erróneas",
              description: "Toma de decisiones basada en datos erróneos.",
            },
            {
              icon: ListChecks,
              title: "Criterios de muestreo",
              description: "Falta de criterios en los métodos de muestreo.",
            },
            {
              icon: HelpCircle,
              title: "Fiabilidad del sistema",
              description:
                "Incertidumbre en la fiabilidad del sistema de medición.",
            },
            {
              icon: DivideSquare,
              title: "Desvíos laboratorio/planta",
              description:
                "Diferencias entre los datos de laboratorio y el rendimiento de planta.",
            },
            {
              icon: RefreshCcw,
              title: "Mantenimiento reactivo",
              description:
                "Mantenimiento reactivo de equipos de medición en línea.",
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
      subtitle: "Metodología y calendario",
      children: (
        <div>
          {/* Description */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              El programa <strong>Measure Bridge™</strong> se adapta a cada
              contexto, con fases de diagnóstico, diseño, implementación y
              capacitación. Se puede implementar en ciclos de{" "}
              <strong>3 a 6 meses</strong>, con entregables medibles desde el
              primer mes.
            </p>
          </div>

          {/* Details */}
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
              Fases principales:
            </p>
            <div className="flex flex-col space-y-2 mt-2">
              {[
                "Diagnóstico: relevamiento y análisis de la situación actual.",
                "Diseño: definición de objetivos, indicadores y plan de acción.",
                "Implementación: ejecución de mejoras y herramientas en campo.",
                "Capacitación: formación práctica y acompañamiento al equipo.",
                "Seguimiento: medición de avances y ajustes continuos.",
              ].map((fase, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
                  <span className="text-[var(--color-text)] leading-relaxed flex-1">
                    {fase}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[var(--color-text)] leading-relaxed text-md mt-4">
              La duración y el calendario se ajustan a las necesidades de cada
              organización, permitiendo resultados visibles y medibles desde el
              primer mes.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      icon: HandCoins,
      title: "Beneficios",
      subtitle: "Beneficios del programa Measure Bridge™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: CheckCircle,
              title: "Precisión en el análisis",
              description: "Reducción de errores de análisis.",
            },
            {
              icon: Grid3x3,
              title: "Trazabilidad de datos",
              description: "Mejora de la trazabilidad de los datos.",
            },
            {
              icon: XCircle,
              title: "Eliminación de pérdidas",
              description: "Reducción de pérdidas ocultas.",
            },
            {
              icon: Users,
              title: "Alineación de equipos",
              description:
                "Mayor alineación entre laboratorio, producción y mantenimiento.",
            },
            {
              icon: GraduationCap,
              title: "Independencia técnica",
              description: "Reducción de la dependencia de expertos externos.",
            },
            {
              icon: Sparkles,
              title: "Cultura de mejora continua",
              description: "Cultura de mejora continua basada en datos reales.",
            },
            {
              icon: Box,
              title: "Optimización de recursos",
              description:
                "Optimización de la gestión de repuestos y recursos técnicos clave.",
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
      subtitle: "Tipos de empresas ideales para Measure Bridge™",
      children: (
        <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] shadow-lg">
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
            ¿Para quién está diseñado?
          </h3>
          <p className="text-[var(--color-text)] text-lg leading-relaxed">
            Empresas industriales con laboratorios internos o tercerizados,
            gerentes de calidad, ingenieros de procesos y líderes de mejora
            continua con el objetivo de reforzar el control analítico como pilar
            de desempeño y eficiencia.
          </p>
        </div>
      ),
    },
    {
      id: "5",
      icon: Settings,
      title: "¿Con qué otros productos se relaciona?",
      subtitle: "",
      description:
        "¿Con qué otros productos se relaciona?\nDecisiones™ de gestión basadas en datos: comparte herramientas estadísticas para la toma de decisiones.\nAcción™ Kaizen: se integra con proyectos de mejora basados en calidad y datos reales.\nSistema™ de Excelencia Operativa: contribuye al pilar de control analítico dentro de la excelencia operativa.",
      //   graphic: <ConnectionsGraphic title="Measure Bridge™" />,
      details: [],
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
    <div id="MeasureBridge-content" className="bg-[var(--color-bg)]">
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

export default MeasureBridgeContent;
