"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Target,
  Clock,
  Zap,
  TrendingUp,
  X,
  Users,
  Settings,
  Award,
  RefreshCcw,
  Box,
  HandCoins,
  Lightbulb,
  CircleQuestionMark,
} from "lucide-react";
import ConnectionsGraphic from "../../icons-componets/FiveSPlus/ConnectionsGraphic";
import MethodologyGraphic from "./MethodologyGraphic";

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

const PeopleFirstContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es y qué no es?",
      subtitle: "Definición clara del programa PeopleFirst™",
      children: (
        <>
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              People First™ es un programa de desarrollo organizacional centrado
              en las personas, diseñado para alinear habilidades,
              comportamientos y evolución profesional con los desafíos
              estratégicos y operativos de la empresa. Su enfoque integra
              herramientas como coaching con propósito, feedback basado en
              objetivos, matriz de habilidades conectada con planes de formación
              y acompañamiento en el desarrollo de competencias técnicas y
              generales.
            </p>
          </div>

          {/* Details */}
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
              ¿Qué es?
            </p>
            {[
              "✔ Un programa integral que pone a las personas en el centro de la estrategia organizacional.",
              "✔ Un sistema que conecta el desarrollo de habilidades y comportamientos con los objetivos de negocio.",
              "✔ Un proceso que utiliza coaching, feedback y planes de formación personalizados para impulsar la evolución profesional.",
              "✔ Un acompañamiento estructurado para el desarrollo de competencias técnicas y generales, alineadas a los retos de la empresa.",
              "✔ Una metodología que promueve la mejora continua de la cultura organizacional y el liderazgo.",
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
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
              ¿Qué no es?
            </p>
            {[
              "✘ Un programa genérico de capacitación sin conexión con la estrategia de la empresa.",
              "✘ Una solución aislada que no involucra a líderes y equipos en el proceso de cambio.",
              "✘ Un enfoque limitado solo a habilidades técnicas, sin considerar el desarrollo de comportamientos y cultura.",
              "✘ Un proceso puntual sin seguimiento ni acompañamiento en la evolución profesional.",
              "✘ Una iniciativa que no mide ni vincula el impacto en los resultados del negocio.",
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
      subtitle: "Los desperdicios y desafíos operativos",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: Users,
              title: "Desalineación y bajo compromiso",
              description:
                "Bajo compromiso y alineación entre el trabajo diario y los objetivos de largo plazo.",
            },
            {
              icon: Settings,
              title: "Roles y competencias poco claros",
              description:
                "Equipos con roles mal definidos o competencias desactualizadas.",
            },
            {
              icon: Lightbulb,
              title: "Formación desconectada",
              description:
                "Planes de formación sin conexión con las verdaderas brechas de habilidades.",
            },
            {
              icon: Award,
              title: "Gestión de talento limitada",
              description:
                "Dificultades en la gestión del talento técnico o potencial interno.",
            },
            {
              icon: RefreshCcw,
              title: "Falta de feedback y acompañamiento",
              description:
                "Ausencia de procesos sistemáticos de feedback y acompañamiento del desempeño.",
            },
            {
              icon: CircleQuestionMark,
              title: "Poca preparación para nuevos retos",
              description:
                "Falta de preparación para asumir nuevos desafíos o liderazgos.",
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
      id: "4",
      icon: Clock,
      title: "Metodología & Tiempos",
      subtitle: "Plan de implementación sugerido",
      description:
        "PeopleFirst™ se implementa como un sistema modular adaptable, con intervenciones específicas según el diagnóstico y las prioridades de la empresa. Las actividades pueden realizarse en ciclos cortos de 2 a 8 semanas.",
      subDescription: "Enfocadas en:",
      graphic: <MethodologyGraphic />,
      details: [
        "Diagnóstico de capacidades (matriz de habilidades + entrevistas o mapeo de entrenamientos).",
        "Workshops de liderazgo y feedback con mandos medios y líderes.",
        "Diseño de planes de desarrollo individual o de equipo, alineados a los objetivos del área.",
        "Entrenamientos técnicos o de soft skills, en función de brechas detectadas.",
        "Instalación de rutinas de seguimiento y coaching, con acompañamiento o transferencia de metodología.",
        "Incorporacion de feedback y coaching dentro de las rutinas standard de los supervisores y gerentes.",
      ],
    },
    {
      id: "8",
      icon: HandCoins,
      title: "Beneficios",
      subtitle: "Beneficios del programa PeopleFirst™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "Compromiso y enfoque en objetivos",
              description:
                "Fortalece el compromiso individual a través de objetivos claros y feedback efectivo.",
            },
            {
              icon: Box,
              title: "Roles y responsabilidades claros",
              description:
                "Mejora la asignación de roles y responsabilidades, basándose en evidencias de habilidades reales.",
            },
            {
              icon: Lightbulb,
              title: "Cierre de brechas de habilidades",
              description:
                "Cierra brechas entre necesidades de la operación y el perfil de las personas mediante entrenamientos a medida.",
            },
            {
              icon: RefreshCcw,
              title: "Aprendizaje y mejora continua",
              description:
                "Genera un entorno de aprendizaje continuo, donde el desarrollo técnico y humano es parte del sistema operativo de la empresa.",
            },
            {
              icon: TrendingUp,
              title: "Crecimiento sostenible",
              description:
                "Conecta el crecimiento personal con la mejora continua organizacional, aumentando la sostenibilidad de los resultados",
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
      id: "7",
      icon: Users,
      title: "¿Para quién está pensado el programa?",
      subtitle:
        "Empresas y líderes que valoran a las personas como motor del cambio",
      description:
        "PeopleFirst™ está diseñado para organizaciones que creen en el valor de las personas como motor del cambio y el rendimiento sostenible. Es especialmente útil para empresas que buscan alinear las habilidades de sus equipos con los desafíos técnicos, culturales y estratégicos del negocio.",
      details: [
        "Empresas que priorizan el desarrollo humano como base para la transformación y la mejora continua.",
        "Organizaciones que desean alinear las capacidades de sus equipos con los retos técnicos, culturales y estratégicos.",
        "Mandos medios, líderes de equipos y responsables de formación que impulsan el cambio organizacional.",
        "Líderes de transformación cultural enfocados en resultados sostenibles a través de las personas.",
      ],
    },
    {
      id: "5",
      icon: Settings,
      title: "¿Con qué otros productos se relaciona?",
      subtitle:
        "Integración con herramientas Lean para potenciar la transformación",
      description:
        "PeopleFirst™ se integra de manera estratégica con otros programas clave como 5S Plus™, FlowStable™ y Kaizen Action™, permitiendo una sinergia que fortalece la cultura Lean y facilita la adopción de prácticas de mejora continua en toda la organización. Esta conexión asegura que el desarrollo de las personas esté alineado con la excelencia operativa y la transformación sostenible.",
      graphic: <ConnectionsGraphic title="PeopleFirst™" />,
      details: [],
    },
  ];

  const handleCardClick = (feature: typeof features[number]) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div id="PeopleFirst-content" className="bg-[var(--color-bg)]">
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

export default PeopleFirstContent;
