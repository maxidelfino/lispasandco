"use client";

import type React from "react";
import { useState, useEffect } from "react";

import {
  CheckCircle,
  XCircle,
  CircleQuestionMark,
  Building2,
  CircleAlert,
  Blend,
  X,
  HandPlatter,
  Merge,
  MonitorCheck,
} from "lucide-react";
import LeanEnterpriseTimelineGraphic from "../../icons-componets/LeanEnterprise/LeanEnterpriseTimelineGraphic";

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

const LeanEnterpriseContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es Lean Enterprise Transformation™?",
      subtitle: "Características del programa",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            <strong>Lean Enterprise Transformation™</strong> es un programa
            integral de transformación diseñado por LYSPAS & CO que permite
            implementar un sistema de gestión basado en mejora continua, con
            alcance total en la empresa. Abarca desde el diagnóstico inicial
            hasta el despliegue de herramientas prácticas y sostenibles que
            alinean cultura, procesos, personas y resultados.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-relaxed">
            Está pensado para empresas que desean ordenar su operación,
            estabilizar procesos, eliminar desperdicios y gestionar con
            indicadores reales, sin importar el sector o tamaño. Es un sistema
            escalable que permite integrar otros programas como{" "}
            <strong>LeanBridge™</strong>, <strong>WasteZero™</strong>,{" "}
            <strong>FlowStable™</strong>, y más.
          </p>
        </div>
      ),
      large: true,
    },
    {
      id: "2",
      icon: CircleAlert,
      title: "¿Qué problemas resuelve?",
      subtitle: "Desafíos organizacionales comunes",
      children: (
        <div>
          {[
            "Falta de organización general en procesos",
            "Bajo nivel de planificación y control visual",
            "Desconexión entre áreas (silos)",
            "Ausencia de una cultura de mejora estructurada",
            "Pérdidas ocultas y desperdicios no gestionados",
            "Indicadores que no reflejan la realidad",
            "Dificultad para sostener mejoras en el tiempo",
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
      icon: Building2,
      title: "¿Para qué tipo de empresas?",
      subtitle: "Perfil empresarial ideal",
      children: (
        <>
          <div className="bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-accent)]/10 rounded-2xl p-8 border border-[var(--color-border)]">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
              Tipos de Empresas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
                <span className="text-[var(--color-text)]">
                  Industriales, logísticas, agroexportadoras, comerciales o de
                  servicios
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
                <span className="text-[var(--color-text)]">
                  Que atraviesan procesos de expansión, reorganización o madurez
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
                <span className="text-[var(--color-text)]">
                  Que buscan profesionalizar su gestión sin burocratizarla{" "}
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
                <span className="text-[var(--color-text)]">
                  Que quieren mayor involucramiento de sus equipos
                </span>
              </li>
            </ul>
          </div>
          {/* <div>
            {[
              "Industriales, logísticas, agroexportadoras, comerciales o de servicios",
              "Que atraviesan procesos de expansión, reorganización o madurez",
              "Que buscan profesionalizar su gestión sin burocratizarla",
              "Que quieren mayor involucramiento de sus equipos",
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
          </div> */}
        </>
      ),
    },
    {
      id: "4",
      icon: Blend,
      title: "Fases del programa",
      subtitle: "Implementación estructurada",
      description:
        "Proceso de 7 fases que garantiza una transformación ordenada y sostenible.",

      details: [
        "1. Diagnóstico inicial (escaneo de oportunidades)",
        "2. Alineación con la dirección (visión, objetivos, foco)",
        "3. Selección de áreas piloto y métricas iniciales",
        "4. Implementación de herramientas base",
        "5. Desarrollo de cultura visual y liderazgo participativo",
        "6. Expansión progresiva al resto de la organización",
        "7. Consolidación con seguimiento e indicadores reales",
      ],
      graphic: <LeanEnterpriseTimelineGraphic />,
    },
    {
      id: "5",
      icon: HandPlatter,
      title: "Modalidad de implementación",
      subtitle: "Acompañamiento especializado",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            Considerando que la empresa inicia su transformación desde una fase
            de madurez baja, el programa Lean Enterprise Transformation se
            implementa de manera secuencial, con alta presencia de especialistas
            en el lugar durante gran parte de la implementación y con la ayuda
            de personal propio de la empresa que cumplirá el rol de agente de
            cambio.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-relaxed">
            La duración del programa es de <strong>12 meses</strong>, iniciando
            el mismo con una actividad de mapeo y conocimiento de la situación y
            finalizando con una auditoria de valor y madurez lo cual podrá dar
            inicio a una segunda fase de transformación.
          </p>
        </div>
      ),
    },
    {
      id: "6",
      icon: MonitorCheck,
      title: "¿Qué resultados esperar?",
      subtitle: "Beneficios tangibles",

      details: [
        "Procesos más estables, confiables y visuales",
        "Equipos alineados y comprometidos con objetivos comunes",
        "Mejora de productividad sin inversión en activos fijos",
        "Reducción de desperdicios y tiempos muertos",
        "Cultura de mejora instalada con liderazgo interno",
        "Herramientas aplicadas y sostenidas en el tiempo",
      ],
      // large: true,
    },
    {
      id: "7",
      icon: Merge,
      title: "¿Cómo se vincula con otros programas de LYSPAS & CO?",
      subtitle: "Marco integrador",
      subDescription:
        "Lean Enterprise Transformation™ es el marco general bajo el cual se integran programas específicos como:",

      details: [
        "LeanBridge™ (cultura operativa y liderazgo visual)",
        "WasteZero™ – Lean Leaders (eliminación de desperdicios)",
        "FlowStable™ (estabilidad y eficiencia de procesos)",
        "Kaizen Action™ (resolución estructurada de problemas)",
        "StratBridge™ – Strategic Planning (alineación estratégica)",
        "Decisiones Gerenciales Basadas en Estadísticas™ (análisis y toma de decisiones basadas en datos)",
        "5S Plus™ (cultura de orden, limpieza y estandarización)",
      ],
      // large: true,
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
    <div id="LeanEnterprise-content" className="bg-[var(--color-bg)]">
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

export default LeanEnterpriseContent;
