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
} from "lucide-react";
import FlowStableMethodologyGraphic from "../../icons-componets/FlowStable/flowstablemethodologygraphic";
import FlowStableTimelineGraphic from "../../icons-componets/FlowStable/flowstabletimelinegraphic";
import FlowStableMeasurementGraphic from "../../icons-componets/FlowStable/flowstablemeasurementgraphic";

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
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              {graphic}
            </div>

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
      icon: Target,
      title: "¿Qué ofrece FlowStable™?",
      subtitle: "Beneficios y características del programa",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
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
              icon: GitBranch,
              title: "Diferenciación de soluciones",
              description:
                "Diferenciación entre soluciones de corto plazo y proyectos de mediano alcance",
            },
            {
              icon: BarChart3,
              title: "Gestión basada en datos",
              description: "Gestión operativa basada en hechos y datos",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
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
      id: "2",
      icon: Gauge,
      title: "¿Cómo medir los resultados?",
      subtitle: "Métricas y seguimiento de FlowStable™",
      description:
        "Esta es una de las preguntas más frecuentes antes de iniciar la implementación de un programa que apunta a estabilizar y optimizar las operaciones.",
      graphic: <FlowStableMeasurementGraphic />,
      details: [
        "La aplicación de FlowStable™ genera mejoras rápidas y sostenidas, especialmente en la consistencia de la producción o los servicios.",
        "Reducción de variabilidad operativa y el cumplimiento de los objetivos diarios.",
        "Uno de sus pilares es el seguimiento estructurado de desvíos a través de la Secuencia de Mejora diaria™.",
        "Permite tomar acciones correctivas de forma inmediata, en el lugar donde ocurren.",
        "Este enfoque práctico y visual ayuda a que los equipos comprendan mejor qué se espera de cada rol.",
        "Ganando en claridad, autonomía y compromiso con los resultados.",
      ],
      footer:
        "A los pocos meses de implementación, la empresa empieza a experimentar una nueva estabilidad en sus variables clave, que facilita la planificación, reduce el desgaste operativo y crea una base sólida para escalar mejoras.",
    },

    {
      id: "4",
      icon: Settings,
      title: "Metodología - ¿Cómo funciona FlowStable™?",
      subtitle: "Secuencia de Mejora diaria™",
      description:
        "Con una metodología llamada Secuencia de Mejora diaria™, se entrena a los equipos para aplicar un proceso estructurado de mejora continua.",
      graphic: <FlowStableMethodologyGraphic />,
      details: [
        "Encontrar la variable CRÍTICA PARA EL PROCESO y determinar su valor para ser usado como línea de base",
        "Observar las variaciones del día a día y registrarlas de manera ordenada",
        "Identificar aquellas anomalías que superan los valores normales y generan inestabilidad",
        "Estudiar los problemas y eliminarlos de raíz de modo tal que no se repitan",
        "Continuar con la secuencia diaria mejorando los resultados de la variable crítica y haciéndola estable",
      ],
      large: true,
    },
    {
      id: "3",
      icon: Users,
      title: "¿Para quién está pensado?",
      subtitle: "Tipos de empresas ideales para FlowStable™",
      children: (
        <div className="bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-accent)]/10 rounded-2xl p-8 border border-[var(--color-border)]">
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            Tipos de Empresas
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
              <span className="text-[var(--color-text)]">
                Empresas industriales o de servicios con procesos operativos
                continuos o en batch
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
              <span className="text-[var(--color-text)]">
                Empresas pequeñas o medianas con una sola línea de producción o
                servicio
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
              <span className="text-[var(--color-text)]">
                Empresas productivas o de servicios de gran volumen que puedan
                ser abordadas en secuencias sucesivas
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
              <span className="text-[var(--color-text)]">
                Negocios en los cuales la estacionalidad juega un papel
                fundamental en los resultados económicos
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
              <span className="text-[var(--color-text)]">
                Empresas que necesiten controlar y aumentar su producción en
                ciertos momentos del año sin necesidad de invertir en activos
                fijos
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "5",
      icon: Clock,
      title: "Modalidad de implementación",
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
                  ${feature.large ? "lg:col-span-2" : ""}
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
        graphic={selectedFeature?.graphic || <div />}
      />
    </div>
  );
};

export default FlowStableContent;
