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
  ArrowRight,
  MapPin,
  RulerDimensionLine,
  View,
  RefreshCcw,
  Box,
} from "lucide-react";
import WhatIsGraphic from "../../icons-componets/WasteZero/WhatIsGraphic";
import ProblemsGraphic from "../../icons-componets/WasteZero/ProblemsGraphic";
import ResultsGraphic from "../../icons-componets/WasteZero/ResultsGraphic";
import MethodologyGraphic from "../../icons-componets/WasteZero/MethodologyGraphic";
import ConnectionsGraphic from "../../icons-componets/FiveSPlus/ConnectionsGraphic";
import MeasurementGraphic from "../../icons-componets/WasteZero/MeasurementGraphic";

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
            WasteZero™
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

        {/* Footer */}
        {/* <div className="sticky bottom-0 bg-gradient-to-t from-white to-transparent p-8 pt-4">
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary)] transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Entendido
            </button>
          </div>
        </div> */}
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

const WasteZeroContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: Target,
      title: "¿Qué es y qué no es?",
      subtitle: "Definición clara del programa WasteZero™",
      description:
        "WasteZero™ es un programa end-to-end de mejora continua que combina formación técnica práctica, aplicación del ciclo DMAIC y desarrollo de proyectos reales, generando disciplina operativa sin reemplazar al equipo interno.",
      graphic: <WhatIsGraphic />,
      details: [
        "✔ Un programa para identificar y eliminar desperdicios según la filosofía Lean",
        "✔ Una formación práctica que prepara facilitadores de mejora (Kaizen / Green Belt)",
        "✔ El punto de partida ideal para organizaciones que inician su camino Lean",
        // "",
        "✘ Una capacitación sin aplicación real",
        "✘ Una solución parcial o desconectada de la estrategia",
        "✘ Un taller genérico sin compromiso de implementación",
      ],
    },
    {
      id: "2",
      icon: Zap,
      title: "Problemas que resuelve",
      subtitle: "Los desperdicios y desafíos operativos",
      // description:
      //   "La mayoría de las empresas tienen desperdicios ocultos que consumen tiempo, dinero y energía, pero no saben cómo identificarlos ni tienen un método claro para abordarlos con sus propios equipos.",
      // subDescription: "WasteZero™ resuelve esto:",
      // graphic: <ProblemsGraphic />,
      // details: [
      //   "Falta de visibilidad sobre las ineficiencias diarias.",
      //   "Pérdida de recursos por procesos innecesarios, movimientos mal diseñados o tiempos muertos.",
      //   "Equipos que trabajan duro pero no con enfoque.",
      //   "Cultura organizacional que no prioriza la mejora constante.",
      // ],
      // footer:
      //   "WasteZero™ resuelve el desorden silencioso que afecta los resultados sin que nadie lo note. Ayuda a transformar la frustración en acción concreta y sostenible",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: View,
              title: "Visibilidad Limitada",
              description:
                "Falta de visibilidad sobre las ineficiencias diarias.",
            },
            {
              icon: Box,
              title: "Recursos Desperdiciados",
              description:
                "Pérdida de recursos por procesos innecesarios, movimientos mal diseñados o tiempos muertos.",
            },
            {
              icon: Users,
              title: "Esfuerzo Sin Enfoque",
              description: "Equipos que trabajan duro pero no con enfoque.",
            },
            {
              icon: RefreshCcw,
              title: "Mejora Inconstante",
              description:
                "Cultura organizacional que no prioriza la mejora constante.",
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
      icon: Settings,
      title: "Con qué otros productos se relaciona",
      subtitle: "Escalera sólida hacia un sistema Lean integral",
      description:
        "WasteZero™ se conecta naturalmente con otros programas como: 5S Plus™, FlowStable™ y Kaizen Action™, formando una escalera sólida hacia un sistema Lean integral",
      graphic: <ConnectionsGraphic />,
      details: [],
      large: true,
    },
    {
      id: "3",
      icon: TrendingUp,
      title: "Resultados esperados",
      subtitle: "Impacto visible desde el primer mes",
      description:
        "WasteZero™ deja resultados visibles en procesos y personas. No es solo formación: es acción concreta, con impacto desde el primer mes.",
      subDescription:
        "Después de aplicar WasteZero™, la empresa debería experimentar:",
      graphic: <ResultsGraphic />,
      details: [
        "Reducción de desperdicios: menos reprocesos, menos movimientos innecesarios, menos espera.",
        "Equipos entrenados y motivados: personas que no solo detectan problemas, sino que los resuelven con herramientas concretas.",
        "Proyectos de mejora ejecutados: cada participante trabaja en un caso real durante el programa.",
        "Cultura de mejora instalada: una forma diferente de mirar el trabajo diario, con focoen el valor.",
        "Primeros pasos hacia la certificación Lean (Green Belt o Facilitador Kaizen).",
      ],
    },
    {
      id: "4",
      icon: Clock,
      title: "Metodología & Tiempos",
      subtitle: "6 meses de implementación",
      description:
        "Programa de 6 meses que combina formación técnica práctica, aplicación del ciclo DMAIC y desarrollo de proyectos de mejora, con seguimiento continuo y auditorías de gestión.",
      subDescription: "Modalidad de implementación:",
      graphic: <MethodologyGraphic />,
      details: [
        "Fase 0: Diagnóstico inicial – Reconocimiento del lugar y la estructura de personal (presencial)",
        "Fase 1: Capacitación en conceptos Lean",
        "Fase 2: Identificación y análisis de desperdicios. Construcción de mapas de procesos y valor",
        "Fase 3: Desarrollo y ejecución del proyecto DMAIC",
        "Fase 4: Seguimiento de proyectos",
        "Fase 5: Seguimiento de proyectos. Coaching adicional para escalar iniciativas",
        "Fase 6: Auditoria y coaching final",
      ],
    },
    {
      id: "6",
      icon: RulerDimensionLine,
      title: "¿Cómo medir los resultados?",
      subtitle: "WasteZero™ se mide por el valor de las ideas que genera.",
      description:
        "El principal indicador de éxito es la cantidad de propuestas de mejora surgidas del propio equipo, muchas de las cuales se implementan rápidamente con impacto visible.",
      subDescription:
        "El programa se mantiene vivo gracias a la capacitación continua y al hábito de generar ideas en equipo, impulsando mejoras en:",
      graphic: <MeasurementGraphic />,
      details: [
        "Claridad de roles y procesos",
        "Costos y tiempos operativos",
        "Compromiso y autonomía de los equipos",
        "Resultados concretos a través de proyectos aplicados",
      ],
      footer:
        "La visualización del progreso y la participación transversal son el motor de una mejora continua sostenible.",
      large: true,
    },
    {
      id: "7",
      icon: Users,
      title: "En qué punto del camino se recomienda implementarlo",
      subtitle: "El punto de partida ideal para la transformación Lean",
      description:
        "WasteZero™ es el punto de partida ideal para organizaciones que inician su camino Lean o necesitan ordenar su operación, especialmente cuando hay compromiso directivo y disponibilidad para el acompañamiento.",
      graphic: <RoadmapGraphic />,
      details: [
        "Empresas que identifican problemas operativos recurrentes pero no saben cómo abordarlos",
        "Organizaciones que buscan reducir costos operativos sin inversiones en activos",
        "Equipos que trabajan duro pero sienten que no logran los resultados esperados",
        "Empresas que necesitan instalar una cultura de mejora continua desde cero",
        "Organizaciones que quieren preparar a su personal para certificaciones Lean",
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
    <div id="wastezero-content" className="bg-[var(--color-bg)]">
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

export default WasteZeroContent;
