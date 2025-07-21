"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Globe,
  Clock,
  TrendingUp,
  X,
  Bubbles,
  BarChart3,
  Sparkle,
  Target,
  ListChecks,
  LayoutGrid,
  CalendarCheck,
  Wrench,
  Telescope,
  Award,
} from "lucide-react";

import StratBridgeTimelineGraphic from "../../icons-componets/StratBridge/StratBridgeTimelineGraphic";
import ObjectivesStratBridgeGraphic from "../../icons-componets/StratBridge/ObjectivesStratBridgeGraphic";
import StratBridgeConnectionsGraphic from "../../icons-componets/StratBridge/StratBridgeConnectionsGraphic";

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

const StratBridgeContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: Telescope,
      title: "Visión",
      //   subtitle: "Beneficios y características del programa",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            Es la aspiración futura.{" "}
            <strong>¿Qué queremos llegar a ser en 5 o 10 años?</strong>
          </p>
          {[
            "Es proyectiva (5–10 años)",
            "Es inspiradora pero posible",
            "Define un destino que guía el cambio, la evolución, el crecimiento",
          ].map((detail, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
            >
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
              <span className="text-[var(--color-text)] leading-relaxed flex-1">
                {detail}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "2",
      icon: Globe,
      title: "Misión",
      //   subtitle: "Beneficios y características del programa",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            Es la razón de ser actual de la organización.{" "}
            <strong>¿Para qué existe esta empresa hoy?</strong>
          </p>
          {[
            "Es presente",
            "Es concreta y operativa",
            "Refleja lo que entrega al cliente",
          ].map((detail, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
            >
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
              <span className="text-[var(--color-text)] leading-relaxed flex-1">
                {detail}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "3",
      icon: Sparkle,
      title: "Valores",
      //   subtitle: "Beneficios y características del programa",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            <strong>Principios</strong> que guían la decisiones y
            comportamientos de la organización.
          </p>
          {[
            "¿Cómo nos comportamos?",
            "¿Qué defendemos?",
            "Aplican a todos, todos los días. Son no negociables",
          ].map((detail, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
            >
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
              <span className="text-[var(--color-text)] leading-relaxed flex-1">
                {detail}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "4",
      icon: TrendingUp,
      title: "¿Qué ofrece StratBridge™?",
      subtitle: "Beneficios del programa StratBridge™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: "Definición de Objetivos",
              description:
                "Definición colaborativa de objetivos estratégicos a largo plazo",
            },
            {
              icon: CalendarCheck,
              title: "Objetivos Anuales",
              description:
                "Identificación de objetivos anuales alineados con visión y misión",
            },
            {
              icon: LayoutGrid,
              title: "Matriz Hoshin",
              description: "Construcción de la Matriz Hoshin (X‑Matrix)",
            },
            {
              icon: ListChecks,
              title: "Iniciativas y Tareas",
              description:
                "Desglose en iniciativas concretas y tareas específicas por área",
            },
            {
              icon: BarChart3,
              title: "KPIs Estratégicos",
              description: "Desarrollo de KPIs estratégicos reales",
            },
            {
              icon: Wrench,
              title: "Herramientas Complementarias",
              description:
                "Herramientas complementarias: asignación de recursos, tablero visual, alertas, seguimiento",
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
      id: "5",
      icon: Clock,
      title: "Metodologia",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            El punto de partida de <strong>StratBridge™</strong> es la
            información estratégica provista por la dirección de la empresa, en
            especial su visión de largo plazo.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            A partir de esa definición, y mediante una secuencia estructurada de
            reuniones, se construyen los objetivos de corto plazo, junto con sus
            tácticas de acción, indicadores de avance y mecanismos de
            seguimiento.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            Como resultado, se entrega la <strong>Matriz Hoshin KanriT™</strong>
            , que se transforma en una herramienta dinámica de alineación y
            evolución estratégica para toda la organización{" "}
          </p>

          <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
            <StratBridgeTimelineGraphic />
          </div>
        </div>
      ),
    },
    {
      id: "6",
      icon: Award,
      title: "Resultados esperados",
      //   subtitle: "Transformar problemas en oportunidades de mejora",
      graphic: <ObjectivesStratBridgeGraphic />,
    },
    {
      id: "7",
      icon: Bubbles,
      title: "¿Cómo se relaciona con otros programas?",
      subtitle: "",
      subDescription:
        "Se relaciona con otros programas de LYSPAS & CO, tales como:",
      graphic: <StratBridgeConnectionsGraphic />,
      details: [
        "LeanBridge™: genera el contexto operativo y cultural ideal para aplicar planificación estratégica",
        "Kaizen Action™: resuelve problemas transversales surgidos de los objetivos e indicadores Hoshin",
        "FlowStable™ y WasteZero™: pueden integrarse como iniciativas específicas dentro de la matrIz.",
      ],
      large: true,
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
    <div id="StratBridge-content" className="bg-[var(--color-bg)]">
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
        graphic={selectedFeature?.graphic}
      />
    </div>
  );
};

export default StratBridgeContent;
