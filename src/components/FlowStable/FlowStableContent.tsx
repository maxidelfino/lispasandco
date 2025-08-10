"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Target,
  Clock,
  TrendingUp,
  X,
  Users,
  Settings,
  BarChart3,
  Activity,
  Eye,
  GitBranch,
  Gauge,
  AlertTriangle,
  Repeat,
  Factory,
  Building,
  ChartCandlestick,
  Zap,
  Calendar,
  HandCoins,
  CircleQuestionMark,
} from "lucide-react";
import FlowStableMethodologyGraphic from "../../icons-componets/FlowStable/flowstablemethodologygraphic";
import FlowStableTimelineGraphic from "../../icons-componets/FlowStable/flowstabletimelinegraphic";
import FlowStableMeasurementGraphic from "../../icons-componets/FlowStable/flowstablemeasurementgraphic";
import ConnectionsGraphic from "../../icons-componets/FiveSPlus/ConnectionsGraphic";

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

const FlowStableContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es y qué no es?",
      subtitle: "Definición clara del programa FlowStable™",
      children: (
        <>
          {/* Intro Banner */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              FlowStable™ es nuestro programa estrella para empresas que buscan
              elevar su producción y eficiencia sin necesidad de invertir en
              nuevos activos. Mediante un enfoque paso a paso, dejamos atrás la
              persecución de récords diarios y construimos procesos estables y
              predecibles, logrando mejores promedios, mayor control y un
              crecimiento sostenible.
            </p>
          </div>

          {/* ¿Qué es? */}
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
              ¿Qué es FlowStable™?
            </p>
            {[
              "✔ Un sistema estructurado que estabiliza la operación antes de optimizarla.",
              "✔ Un ciclo diario de monitoreo y acción correctiva en tiempo real.",
              "✔ Un programa de 7 meses, desde diagnóstico hasta auditorías finales.",
            ].map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-[var(--color-text)] leading-relaxed flex-1">
                  {detail.replace(/^[✔✘] /, "")}
                </span>
              </div>
            ))}
          </div>

          {/* ¿Qué no es? */}
          <div className="mt-6">
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
              ¿Qué no es FlowStable™?
            </p>
            {[
              "✘ Un parche puntual para picos de producción.",
              "✘ Una simple capacitación teórica sin seguimiento.",
              "✘ Una solución que ignora la cultura y hábitos del equipo.",
            ].map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
              >
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-[var(--color-text)] leading-relaxed flex-1">
                  {detail.replace(/^[✔✘] /, "")}
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
      subtitle: "Métricas y seguimiento de FlowStable™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Mejoras Rápidas",
              description:
                "La aplicación de FlowStable™ genera mejoras rápidas y sostenidas, especialmente en la consistencia de la producción o los servicios.",
            },
            {
              icon: Activity,
              title: "Menos Variabilidad",
              description:
                "Reducción de variabilidad operativa y el cumplimiento de los objetivos diarios.",
            },
            {
              icon: Calendar,
              title: "Monitoreo Diario",
              description:
                "Uno de sus pilares es el seguimiento estructurado de desvíos a través de la Secuencia de Mejora Diaria™.",
            },
            {
              icon: AlertTriangle,
              title: "Acciones Inmediatas",
              description:
                "Permite tomar acciones correctivas de forma inmediata, en el lugar donde ocurren.",
            },
            {
              icon: Eye,
              title: "Visual & Práctico",
              description:
                "Este enfoque práctico y visual ayuda a que los equipos comprendan mejor qué se espera de cada rol.",
            },
            {
              icon: Users,
              title: "Autonomía y Compromiso",
              description:
                "Ganando en claridad, autonomía y compromiso con los resultados.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
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
      id: "5",
      icon: Clock,
      title: "Metodología & Tiempos",
      subtitle: "7 meses de transformación estructurada",
      description:
        "FlowStable™ se implementa a través de 8 fases estructuradas durante 7 meses, combinando trabajo presencial y virtual para garantizar la adopción y sostenibilidad del programa.",
      graphic: <FlowStableTimelineGraphic />,
      details: [
        "Fase Inicial: Diagnóstico (presencial) – 1 semana de trabajo en el lugar",
        "Fase 2: Diseñar el sistema de medición. Discusión sobre objetivos y planes estratégicos. Entrenamiento y despliegue de herramientas (FlowStable PACK 2)",
        "Fase 3: Establecer reuniones diarias de discusión y ejecución. Recolección de primeros datos (FlowStable PACK 3)",
        "Fase 4: Consolidación y autonomía del equipo interno. Retrospectiva y ajustes. Identificación de desvíos",
        "Fase 5: Inicio de resolución de problemas. Herramientas 5W1H – Herramienta A3 (FlowStable PACK 4)",
        "Fase 6: Curvas de evolución. Herramientas estadísticas. Auditorías de gestión",
        "Fase 7: Efectos colaterales. Definición técnica y económica",
        "Fase 8: Auditorías de gestión. Objetivos y planes estratégicos",
      ],
    },
    {
      id: "8",
      icon: HandCoins,
      title: "Beneficios",
      subtitle: "Beneficios del programa FlowStable™",
      children: (
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Mejora sostenible",
              description:
                "Mejora sostenible de la variable objetivo (Kilos/día, Horas/unidad)",
            },
            {
              icon: Activity,
              title: "Estabilidad complementaria",
              description:
                "Estabilidad de variables complementarias (efecto colateral positivo)",
            },
            {
              icon: AlertTriangle,
              title: "Ingeniería de Pérdidas",
              description: "Aplicación de Ingeniería de Pérdidas ante desvíos",
            },
            {
              icon: Users,
              title: "Alineación entre áreas",
              description:
                "Alineación entre áreas operativas, logísticas y comerciales",
            },
            {
              icon: Eye,
              title: "Visibilidad de métricas",
              description: "Visibilidad clara de métricas en todos los niveles",
            },
            {
              icon: BarChart3,
              title: "Gestión basada en datos",
              description: "Gestión operativa basada en hechos y datos",
            },
            {
              icon: GitBranch,
              title: "Diferenciación de soluciones",
              description:
                "Diferenciación entre soluciones de corto plazo y proyectos de mediano alcance",
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
      id: "3",
      icon: Users,
      title: "¿Para quién está recomendado el programa?",
      subtitle: "Tipos de empresas ideales para FlowStable™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
            Tipos de Empresas
          </h3>
          {[
            {
              icon: Repeat,
              title: "Implementación Progresiva",
              description:
                "Empresas industriales o de servicios con procesos operativos continuos o en batch",
            },
            {
              icon: Building,
              title: "Intervención Focalizada",
              description:
                "Empresas pequeñas o medianas con una sola línea de producción o servicio",
            },
            {
              icon: Factory,
              title: "Escalabilidad Modular",
              description:
                "Empresas productivas o de servicios de gran volumen que puedan ser abordadas en secuencias sucesivas",
            },
            {
              icon: ChartCandlestick,
              title: "Gestión Estacional",
              description:
                "Negocios en los cuales la estacionalidad juega un papel fundamental en los resultados económicos",
            },
            {
              icon: TrendingUp,
              title: "Flexibilidad de Capacidad",
              description:
                "Empresas que necesiten controlar y aumentar su producción en ciertos momentos del año sin necesidad de invertir en activos fijos",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4 space-x-3">
                <feature.icon className="w-8 h-8" />
                <h4 className="text-xl font-bold text-[var(--color-primary)]">
                  {feature.title}
                </h4>
              </div>
              <p className="text-[var(--color-text)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "9",
      icon: Settings,
      title: "¿Con qué otros productos se relaciona?",
      subtitle: "Escalera sólida hacia un sistema Lean integral",
      description:
        "FlowStable™ se integra con otros programas de LYSPAS & CO como parte de una secuencia lógica de mejora: toma los resultados de WasteZero™ para estabilizarlos, complementa a LeanBridge™ fortaleciendo la disciplina operativa diaria, sostiene en el tiempo las soluciones generadas con Kaizen Action™ y refuerza la ejecución de objetivos definidos en StratBridge™, asegurando la consistencia operativa necesaria para cumplir la estrategia.",
      graphic: <ConnectionsGraphic title="FlowStable™" />,
      details: [],
    },
    // {
    //   id: "4",
    //   icon: Settings,
    //   title: "Metodología - ¿Cómo funciona FlowStable™?",
    //   subtitle: "Secuencia de Mejora diaria™",
    //   description:
    //     "Con una metodología llamada Secuencia de Mejora diaria™, se entrena a los equipos para aplicar un proceso estructurado de mejora continua.",
    //   details: [
    //     "Encontrar la variable CRÍTICA PARA EL PROCESO y determinar su valor para ser usado como línea de base",
    //     "Observar las variaciones del día a día y registrarlas de manera ordenada",
    //     "Identificar aquellas anomalías que superan los valores normales y generan inestabilidad",
    //     "Estudiar los problemas y eliminarlos de raíz de modo tal que no se repitan",
    //     "Continuar con la secuencia diaria mejorando los resultados de la variable crítica y haciéndola estable",
    //   ],
    // },
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
    <div id="flowstable-content" className="bg-[var(--color-bg)]">
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

export default FlowStableContent;
