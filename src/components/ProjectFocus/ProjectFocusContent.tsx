"use client";

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
  Zap,
  Building2,
  Calendar,
  Factory,
  Link,
} from "lucide-react";
import ProblemsProjectFocusGraphic from "../../icons-componets/ProjectFocus/ProblemsProjectFocusGraphic";
import PhasesProjectFocusGraphic from "../../icons-componets/ProjectFocus/PhasesProjectFocusGraphic";
import ConnectionProjectFocusGraphic from "../../icons-componets/ProjectFocus/ConnectionProjectFocusGraphic";
import ProjectFocusMethodologyGraphic from "../../icons-componets/ProjectFocus/ProjectFocusMethodologyGraphic";

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

const ProjectFocusContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: Target,
      title: "¿Qué es ProjectFocus™?",
      subtitle: "Características del programa",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            <strong>ProjectFocus™ – Selección Estratégica de Proyectos</strong>{" "}
            es una metodología práctica diseñada para ayudar a las
            organizaciones a identificar, analizar y seleccionar proyectos de
            inversión, de forma colaborativa y alineada al plan estratégico
            vigente.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            Este programa parte de una premisa clara: no todos los proyectos
            valen lo mismo. Por eso, ofrece herramientas para mapear beneficios,
            costos, impactos y riesgos de cada iniciativa, y tomar decisiones
            basadas en valor, no en urgencias.
          </p>

          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            Está especialmente diseñado como extensión práctica de StratBridge™,
            siendo el paso natural para convertir una planificación estratégica
            en un portafolio ejecutable de proyectos clave.
          </p>
        </div>
      ),
    },
    {
      id: "2",
      icon: Zap,
      title: "Problemas que resuelve",
      subtitle: "Principales desafíos organizacionales",
      description:
        "ProjectFocus™ aborda los problemas más comunes que enfrentan las organizaciones al momento de seleccionar y priorizar proyectos de inversión. Estos desafíos impactan directamente en la eficiencia de los recursos y en el logro de objetivos estratégicos.",
      subDescription: "ProjectFocus™ resuelve esto:",
      graphic: <ProblemsProjectFocusGraphic />,
      details: [
        "Falta de visibilidad sobre iniciativas",
        "Priorización ineficiente",
        "Falta de alineamiento con objetivos estratégicos",
        "Tensiones internas por asignación de recursos",
        "Evaluación ineficiente de impacto-beneficio",
        "Falta de responsabilidad en la acción",
      ],
      // footer:
      // "WasteZero™ resuelve el desorden silencioso que afecta los resultados sin que nadie lo note. Ayuda a transformar la frustración en acción concreta y sostenible",
    },
    {
      id: "4",
      icon: Building2,
      title: "¿Para qué tipo de empresas?",
      subtitle: "Perfil de organizaciones objetivo",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: Factory,
              title: "Sectores diversos",
              description:
                "Empresas industriales, logísticas, comerciales, agroexportadoras o de servicios",
            },
            {
              icon: Calendar,
              title: "Planificación anual",
              description:
                "Organizaciones que hacen planificación anual de recursos de inversión",
            },
            {
              icon: TrendingUp,
              title: "Planes de expansión",
              description:
                "Equipos que discuten planes de expansión o reorganización",
            },
            {
              icon: Users,
              title: "Decisión participativa",
              description:
                "Empresas que quieren involucrar a sus mandos medios en la toma de decisiones",
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
      // large: true,
    },
    {
      id: "3",
      icon: Clock,
      title: "Fases del programa",
      subtitle: "Metodología estructurada en 7 etapas",
      description:
        "Proceso completo desde la exploración de oportunidades hasta la matriz de ejecución con responsables.",
      subDescription: "Modalidad de implementación:",
      graphic: <PhasesProjectFocusGraphic />,
      details: [
        "1. Exploración de oportunidades de inversión",
        "2. Mapeo sectorial y funcional de propuestas",
        "3. Análisis de alineamiento con los objetivos estratégicos",
        "4. Tormenta de ideas con participación interáreas",
        "5. Presentación y discusión de proyectos",
        "6. Selección mediante matriz Impacto–Beneficio",
        "7. Matriz de ejecución con responsables asignados",
      ],
    },
    {
      id: "5",
      icon: Calendar,
      title: "Cronograma de implementación",
      subtitle: "Proceso ágil y efectivo",
      description:
        "El programa ProjectFocus™ – Selección Estratégica de Proyectos presenta una metodología simple de aplicación que consiste en un primer contacto virtual o presencial con el grupo de trabajo a fin de alinear consignas y plantear expectativas para luego terminar con dos sesiones presenciales de medio día cada una en las cuales se presentaran y discutirán cada una de las iniciativas sugeridas por los miembros de la organización para que finalmente se decide en forma grupal respecto a prioridades de ejecución y responsabilidades",
      graphic: <ProjectFocusMethodologyGraphic />,
      details: [
        "Fase Inicial: Presentacion del programa al equipo.",
        "Fase 1: Desarrollo de ideas y proyectos.",
        "Fase 2: Técnicas de selección de proyectos o iniciativa.",
        "Fase 3: Matriz impacto-beneficio.",
        "Fase 4: Matriz de responsabilidades.",
        "Fase 5: Seguimiento de proyectos.",
        "Fase 6: Documento final de seguimiento.",
      ],
    },
    {
      id: "6",
      icon: Link,
      title: "¿Cómo se conecta con StratBridge™?",
      subtitle: "Complemento ideal para planificación estratégica",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            <strong>ProjectFocus™</strong> es el complemento ideal para empresas
            que ya implementaron <strong>StratBridge™</strong> y ahora necesitan
            pasar del tablero estratégico a la acción concreta.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            Mientras StratBridge™ define el rumbo, ProjectFocus™ ayuda a{" "}
            <strong>elegir bien qué barcos poner a navegar</strong>.
          </p>

          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
            Esta conexión garantiza que cada proyecto esté validado desde su
            origen, alineado a la visión y sostenido por los responsables
            correctos.
          </p>

          <div className="bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
            <ConnectionProjectFocusGraphic />
          </div>

          {/* <blockquote className="text-xl font-bold text-[var(--color-secondary)] italic border-l-4 border-[var(--color-accent)] pl-6 mt-8">
            "5S no es una limpieza profunda. Es un cambio estructurado y
            sostenido utilizando el orden como forma de trabajo."
          </blockquote> */}
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
    <div id="ProjectFocus-content" className="bg-[var(--color-bg)]">
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

export default ProjectFocusContent;
