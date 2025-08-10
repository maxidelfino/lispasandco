"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Target,
  Clock,
  Zap,
  X,
  Users,
  Settings,
  Award,
  ArrowRight,
  MapPin,
  HandCoins,
  CircleQuestionMark,
  GitBranch,
  GraduationCap,
  FileBarChart,
  Calculator,
  BarChart3,
  AlertTriangle,
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

const RoadmapGraphic = () => (
  <div className="flex items-center justify-center py-6">
    <div className="relative">
      {/* Camino */}
      <div className="flex items-center space-x-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 border-2 border-red-300 rounded-full flex items-center justify-center mb-2">
            <MapPin className="w-8 h-8 text-red-600" />
          </div>
          <p className="text-xs text-[var(--color-text)]">Problemas</p>
          <p className="text-xs text-[var(--color-text)]">Recurrentes</p>
        </div>

        <ArrowRight className="w-6 h-6 text-[var(--color-secondary)]" />

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center mb-2">
            <Target className="w-8 h-8 text-white" />
          </div>
          <p className="text-xs text-[var(--color-text)] font-bold">
            Change Bridge™
          </p>
        </div>

        <ArrowRight className="w-6 h-6 text-[var(--color-secondary)]" />

        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center mb-2">
            <Award className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-xs text-[var(--color-text)]">Cultura de</p>
          <p className="text-xs text-[var(--color-text)]">Mejora</p>
        </div>
      </div>
    </div>
  </div>
);

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

const DecisionesEstadisticasContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es y qué no es?",
      subtitle: "Características del programa",
      children: (
        <>
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              Decisiones Gerenciales Basadas en Estadísticas™ es una
              capacitación diseñada para formar profesionales capaces de
              interpretar datos, analizar variaciones y tomar decisiones
              fundamentadas en evidencia cuantitativa, utilizando herramientas
              estadísticas accesibles y aplicadas a la realidad de la empresa.
              Este programa es el puente entre la intuición y el análisis
              profundo, preparando a los participantes para liderar con
              claridad, evidencia y confianza en contextos de mejora continua.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
              ¿Qué es?
            </p>
            {[
              "Una capacitación práctica para interpretar datos y analizar variaciones en los procesos.",
              "Un programa que enseña a tomar decisiones gerenciales basadas en evidencia estadística.",
              "Una formación que utiliza herramientas estadísticas accesibles y aplicadas al entorno real de la empresa.",
              "Un puente entre la intuición y el análisis profundo para liderar con claridad y confianza.",
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

          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
              ¿Qué no es?
            </p>
            {[
              "Un curso teórico sin aplicación práctica en la empresa.",
              "Una capacitación enfocada únicamente en fórmulas o estadística avanzada.",
              "Un programa que promueve la toma de decisiones basada en suposiciones o intuición sin respaldo en datos.",
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
      subtitle: "Problemas operativos que resuelve el programa",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: BarChart3,
              title: "Decisiones basadas en suposiciones",
              description:
                "El programa elimina la toma de decisiones subjetivas o basadas en intuición, promoviendo el uso de datos y análisis estadístico para fundamentar cada acción.",
            },
            {
              icon: FileBarChart,
              title: "Falta de control sobre la variabilidad",
              description:
                "Ayuda a identificar, analizar y reducir la variabilidad en los procesos, permitiendo un mayor control y previsibilidad en los resultados operativos.",
            },
            {
              icon: Calculator,
              title: "Desconocimiento de causas raíz",
              description:
                "Facilita la identificación de causas reales de los problemas, evitando soluciones superficiales y permitiendo intervenciones efectivas y sostenibles.",
            },
            {
              icon: Users,
              title: "Dificultad para alinear equipos",
              description:
                "Promueve la alineación de todos los sectores y niveles de la organización en torno a objetivos claros y medibles, mejorando la comunicación y el trabajo colaborativo.",
            },
            {
              icon: AlertTriangle,
              title: "Riesgo de desperdicio y retrabajo",
              description:
                "Reduce los desperdicios, errores y retrabajos al establecer controles estadísticos y sistemas de mejora continua basados en evidencia.",
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
    {
      id: "4",
      icon: Clock,
      title: "Metodología & Tiempos",
      subtitle: "Metodología de 5 módulos",
      description:
        "La duración y modalidad se adaptan al contexto y necesidades de la organización. El programa combina workshops presenciales, ejercicios prácticos y acompañamiento experto para asegurar la aplicación real de los conceptos.",
      // subDescription: "Modalidad de implementación (4 semanas):",
      graphic: <MethodologyGraphic />,
      details: [
        "Cada participante desarrolla un proyecto propio o provisto por la cátedra, con aplicación práctica de los métodos aprendidos. Este trabajo puede ser el punto de partida para futuros proyectos Six Sigma o iniciativas de mejora avanzada.",
        "Finalizado el curso, el participante recibe una certificación en análisis estadístico aplicado a decisiones empresariales, con orientación hacia los estándares Green Belt.",
      ],
    },
    {
      id: "8",
      icon: HandCoins,
      title: "Beneficios",
      subtitle: "Beneficios del programa",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: BarChart3,
              title: "Decisiones con Certeza",
              description:
                "Reducir la incertidumbre al tomar decisiones operativas y estratégicas.",
            },
            {
              icon: Calculator,
              title: "Estadística Aplicada",
              description:
                "Aplicar métodos estadísticos de forma práctica y comprensible.",
            },
            {
              icon: FileBarChart,
              title: "Análisis y Reportes",
              description:
                "Generar reportes, comparaciones e inferencias que respalden acciones.",
            },
            {
              icon: GraduationCap,
              title: "Formación Profesional",
              description:
                "Formar habilidades esenciales para roles como Green Belt o analista de mejora continua.",
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
    {
      id: "7",
      icon: Users,
      title: "¿Para quién está recomendado el programa?",
      subtitle: "",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
            Público objetivo
          </h3>
          {[
            {
              icon: Users,
              title: "Mandos medios, gerentes y profesionales",
              description:
                "Personas que analizan datos o deben justificar decisiones en sus áreas.",
            },
            {
              icon: AlertTriangle,
              title: "Quienes desean pasar de la intuición al análisis",
              description:
                "Cualquier persona interesada en fundamentar sus decisiones con datos y análisis en vez de intuición.",
            },
            {
              icon: Settings,
              title:
                "Equipos de calidad, procesos, supply chain, servicio técnico, planificación y finanzas",
              description:
                "Áreas clave que requieren análisis de datos para la mejora y toma de decisiones fundamentadas.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                index === 2 ? "col-span-2" : ""
              }`}
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
      id: "5",
      icon: Settings,
      title: "¿Con qué otros productos se relaciona?",
      subtitle: "¿Cómo se conecta con Six Sigma y otros programas?",
      description: "",
      graphic: <ConnectionsGraphic title="Decisiones Gerenciales" />,
      details: [],
      children: (
        <>
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              Medir con precisión y frecuencia. Sin un sistema de medición
              confiable, la mejora continua no existe.{" "}
              <em>
                "Solo creo en Dios, para todo lo demás necesito ver los datos."
              </em>{" "}
            </p>
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mt-2">
              Este curso es un paso fundamental para comprender los conceptos
              clave de Six Sigma, especialmente en lo que respecta al análisis
              de datos y la validación de hipótesis. Está alineado con programas
              como
              <strong>WasteZero™</strong>, <strong>FlowStable™</strong> y{" "}
              <strong>LeanBridge™</strong>, siendo un complemento necesario
              cuando la mejora requiere medición, correlación y pruebas
              estadísticas robustas.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "WasteZero™",
                description:
                  "Facilita la aceptación de prácticas Lean y prepara al equipo para actuar sobre datos confiables.",
              },
              {
                icon: Zap,
                title: "FlowStable™",
                description:
                  "Permite estabilizar procesos y flujos, apoyándose en mediciones y análisis estadístico.",
              },
              {
                icon: GitBranch,
                title: "LeanBridge™",
                description:
                  "Potencia la adopción de disciplina operativa y el uso de datos para sostener mejoras.",
              },
              {
                icon: Settings,
                title: "Six Sigma",
                description:
                  "Este curso es la base para comprender y aplicar análisis de datos y validación de hipótesis en Six Sigma.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105`}
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
        </>
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
    <div id="changeBridge-content" className="bg-[var(--color-bg)]">
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

export default DecisionesEstadisticasContent;
