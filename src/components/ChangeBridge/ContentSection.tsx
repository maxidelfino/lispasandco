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
  MessageSquare,
  UserCheck,
  ShieldOff,
  ShieldCheck,
  Repeat,
  MessageCircle,
  GitBranch,
  Compass,
  Building2,
  Factory,
  Truck,
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

const ChangeBridgeContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es y qué no es?",
      subtitle: "Definición clara del programa Change Bridge™",
      // children: (
      //   <>
      //     <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
      //       <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
      //         Change Bridge™ es un programa end-to-end de mejora continua que
      //         combina formación técnica práctica, aplicación del ciclo DMAIC y
      //         desarrollo de proyectos reales, generando disciplina operativa sin
      //         reemplazar al equipo interno.
      //       </p>
      //     </div>

      //     {/* Details */}
      //     <div>
      //       <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
      //         ¿Qué es?
      //       </p>
      //       {[
      //         "✔ Un programa para identificar y eliminar desperdicios según la filosofía Lean",
      //         "✔ Una formación práctica que prepara facilitadores de mejora (Kaizen / Green Belt)",
      //         "✔ El punto de partida ideal para organizaciones que inician su camino Lean",
      //       ].map((detail, idx) => (
      //         <div
      //           key={idx}
      //           className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
      //         >
      //           <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
      //             <CheckCircle className="w-4 h-4 text-green-600" />
      //           </div>
      //           <span className="text-[var(--color-text)] leading-relaxed flex-1">
      //             {detail.replace(/^[✔✘] /, "")}
      //           </span>
      //         </div>
      //       ))}
      //     </div>
      //     <div>
      //       <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
      //         ¿Qué no es?
      //       </p>
      //       {[
      //         "✘ Una capacitación sin aplicación real",
      //         "✘ Una solución parcial o desconectada de la estrategia",
      //         "✘ Un taller genérico sin compromiso de implementación",
      //       ].map((detail, idx) => (
      //         <div
      //           key={idx}
      //           className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
      //         >
      //           <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
      //             <XCircle className="w-4 h-4 text-red-600" />
      //           </div>
      //           <span className="text-[var(--color-text)] leading-relaxed flex-1">
      //             {detail.replace(/^[✔✘] /, "")}
      //           </span>
      //         </div>
      //       ))}
      //     </div>
      //   </>
      // ),
      children: (
        <>
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              Es un programa práctico y estructurado para ayudar a las empresas
              a gestionar de forma ordenada, clara y participativa los procesos
              de cambio, asegurando que los equipos entiendan, adopten y
              sostengan las transformaciones necesarias para la evolución del
              negocio.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
              ¿Qué es?
            </p>
            {[
              "Prepararse para los cambios.",
              "Minimizar resistencias y riesgos.",
              "Generar compromiso en los equipos.",
              "Lograr resultados sostenibles en cada transformación.",
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
              "Un proceso improvisado sin estructura clara.",
              "Un cambio impuesto sin participación de los equipos.",
              "Una solución puntual sin seguimiento continuo.",
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

          {/* <div className="mt-6">
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
              ¿Para quién?
            </p>
            <p className="text-[var(--color-text)] leading-relaxed">
              Está diseñado para proyectos de cambios en procesos, estructura
              organizacional, implementación de nuevos sistemas o ajustes
              estratégicos que requieran alineamiento y acción de toda la
              organización.
            </p>
          </div> */}
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
              icon: MessageSquare,
              title: "Comunicación Deficiente",
              description: "Falta de claridad y comunicación en proyectos.",
            },
            {
              icon: Users,
              title: "Alineamiento Fallido",
              description:
                "Dificultad para alinear a distintos sectores y actores en torno a un objetivo común.",
            },
            {
              icon: Clock,
              title: "Disciplina Insuficiente",
              description:
                "Cambios implementados que luego se abandonan por falta de disciplina.",
            },
            {
              icon: UserCheck,
              title: "Gestión Humana Inadecuada",
              description:
                "Fracaso de proyectos de mejora por falta de gestión del factor humano.",
            },
            {
              icon: ShieldOff,
              title: "Resistencia al Cambio",
              description:
                "Resistencia de los equipos a adoptar nuevas formas de trabajo.",
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
      subtitle:
        "Metodología de 4 fases con una duración típica de 8 a 12 semanas",
      description:
        "Los tiempos se adaptan al tamaño y complejidad del proyecto; la implementación combina workshops presenciales, coaching y seguimiento estructurado.",
      subDescription: "Modalidad de implementación:",
      graphic: <MethodologyGraphic />,
      details: [
        "Fase 1: Visión y evaluación inicial — definición del proyecto, diagnóstico estado actual vs futuro, equipo y KPIs.",
        "Fase 2: Análisis estructural — mapeo de impactos, matriz riesgo/contingencias e identificación de actores clave.",
        "Fase 3: Planes de gestión del cambio — gestión de actores, planes de comunicación y programas de formación.",
        "Fase 4: Implementación activa y sostenibilidad — ejecución con coaching, seguimiento y transformación de la comunicación en proceso.",
      ],
    },
    {
      id: "8",
      icon: HandCoins,
      title: "Beneficios",
      subtitle: "Beneficios del programa Change Bridge™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "Alineamiento Estratégico",
              description:
                "Alineamiento claro entre los objetivos del cambio y las acciones de los equipos.",
            },
            {
              icon: Zap,
              title: "Implementación Ágil",
              description:
                "Mayor velocidad y efectividad en la implementación de proyectos de transformación.",
            },
            {
              icon: Repeat,
              title: "Cambios Sostenibles",
              description: "Sostenibilidad de los cambios a largo plazo.",
            },
            {
              icon: ShieldCheck,
              title: "Gestión de Expectativas",
              description:
                "Minimización de resistencias internas y gestión adecuada de expectativas.",
            },
            {
              icon: MessageCircle,
              title: "Comunicación Estructurada",
              description:
                "Mejora en la comunicación estructurada y en la disciplina operativa del equipo.",
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
      subtitle: "Tipos de empresas ideales para Change Bridge™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
            Tipos de Empresas
          </h3>
          {[
            {
              icon: Factory,
              title: "Empresas industriales o de servicios",
              description:
                "Organizaciones industriales y de servicios que buscan mejorar su eficiencia y disciplina operativa.",
            },
            {
              icon: Users,
              title: "Intervención integral en áreas con personas",
              description:
                "Áreas de trabajo con alta presencia de personas donde es clave alinear roles, seguridad y procesos.",
            },
            {
              icon: Truck,
              title: "Sectores de alto tráfico",
              description:
                "Zonas con alto tráfico, riesgo o dispersión de materiales que requieren orden, control y reducción de desperdicios.",
            },
            {
              icon: CheckCircle,
              title: "Organizaciones que buscan cultura de orden",
              description:
                "Empresas que desean fortalecer la cultura de orden, seguridad y eficiencia para sostener cambios en el tiempo.",
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
      id: "5",
      icon: Settings,
      title: "¿Con qué otros productos se relaciona?",
      subtitle: "",
      description:
        "Estos productos se complementan: WasteZero™ facilita la aceptación de prácticas Lean en la empresa y prepara al equipo para actuar; Kaizen Action™ asegura la participación activa de los equipos durante eventos de mejora y genera soluciones aplicables; y LeanBridge™ potencia la adopción de la disciplina operativa necesaria para sostener las mejoras. Paralelamente, StratBridge™ alinea los cambios con los objetivos estratégicos, transformando iniciativas en proyectos priorizados, mientras que Lean Enterprise Transformation™ proporciona el marco para sostener y escalar esos cambios durante procesos de transformación profunda.",
      graphic: <ConnectionsGraphic title="Change Bridge™" />,
      details: [],
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "WasteZero™",
              description:
                "Facilita la aceptación de prácticas Lean en la empresa.",
            },
            {
              icon: Zap,
              title: "Kaizen Action™",
              description:
                "Asegura la participación de equipos durante eventos de mejora.",
            },
            {
              icon: GitBranch,
              title: "LeanBridge™",
              description:
                "Potencia la adopción de la disciplina operativa requerida.",
            },
            {
              icon: Compass,
              title: "StratBridge™",
              description:
                "Ayuda a alinear cambios con los objetivos estratégicos.",
            },
            {
              icon: Building2,
              title: "Lean Enterprise Transformation™",
              description:
                "Esencial para sostener cambios durante procesos de transformación profunda.",
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

export default ChangeBridgeContent;
