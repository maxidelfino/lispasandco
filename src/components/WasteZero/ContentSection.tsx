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
  View,
  RefreshCcw,
  Box,
  HandCoins,
  RotateCcw,
  Lightbulb,
  DollarSign,
  CircleQuestionMark,
} from "lucide-react";
import MethodologyGraphic from "../../icons-componets/WasteZero/MethodologyGraphic";
import ConnectionsGraphic from "../../icons-componets/FiveSPlus/ConnectionsGraphic";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

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

const RoadmapGraphic = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage as Language].roadmap;
  return (
    <div className="flex items-center justify-center py-6">
      <div className="relative">
        {/* Camino */}
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 border-2 border-red-300 rounded-full flex items-center justify-center mb-2">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-xs text-[var(--color-text)]">{t.problems}</p>
            <p className="text-xs text-[var(--color-text)]">{t.recurring}</p>
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
            <p className="text-xs text-[var(--color-text)]">{t.culture}</p>
            <p className="text-xs text-[var(--color-text)]">{t.improvement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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

// Traducciones de textos principales
const translations = {
  es: {
    roadmap: {
      problems: "Problemas",
      recurring: "Recurrentes",
      culture: "Cultura de",
      improvement: "Mejora",
    },
    clickForDetails: "Click para más detalles",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Definición clara del programa WasteZero™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                WasteZero™ es un programa end-to-end de mejora continua que
                combina formación técnica práctica, aplicación del ciclo DMAIC y
                desarrollo de proyectos reales, generando disciplina operativa
                sin reemplazar al equipo interno.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                ¿Qué es?
              </p>
              {[
                "✔ Un programa para identificar y eliminar desperdicios según la filosofía Lean",
                "✔ Una formación práctica que prepara facilitadores de mejora (Kaizen / Green Belt)",
                "✔ El punto de partida ideal para organizaciones que inician su camino Lean",
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
                "✘ Una capacitación sin aplicación real",
                "✘ Una solución parcial o desconectada de la estrategia",
                "✘ Un taller genérico sin compromiso de implementación",
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
        children: [
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
        id: "8",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa WasteZero™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: RotateCcw,
                title: "Menos Reprocesos",
                description:
                  "Reducción inmediata de reprocesos mediante identificación y eliminación de actividades que no agregan valor.",
              },
              {
                icon: ArrowRight,
                title: "Movimientos Optimizados",
                description:
                  "Eliminación de movimientos innecesarios y optimización de flujos de trabajo para mayor eficiencia operativa.",
              },
              {
                icon: Clock,
                title: "Reducción de Tiempos de Espera",
                description:
                  "Minimización de tiempos muertos y esperas mediante mejora en la sincronización de procesos.",
              },
              {
                icon: Lightbulb,
                title: "Ideas de Valor Agregado",
                description:
                  "Generación rápida de proyectos e ideas innovadoras que aportan valor real con baja inversión inicial.",
              },
              {
                icon: DollarSign,
                title: "ROI Rápido",
                description:
                  "Proyectos con retorno de inversión acelerado gracias a soluciones de bajo costo y alto impacto.",
              },
              {
                icon: TrendingUp,
                title: "Mejora Continua",
                description:
                  "Establecimiento de una cultura de mejora continua con resultados medibles y sostenibles en el tiempo.",
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
        title: "¿Para quién está recomendado el programa?",
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
      },
      {
        id: "5",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "Escalera sólida hacia un sistema Lean integral",
        description:
          "WasteZero™ se conecta naturalmente con otros programas como: 5S Plus™, FlowStable™ y Kaizen Action™, formando una escalera sólida hacia un sistema Lean integral",
        graphic: <ConnectionsGraphic title="WasteZero™" />,
        details: [],
      },
    ],
  },
  en: {
    roadmap: {
      problems: "Problems",
      recurring: "Recurring",
      culture: "Culture of",
      improvement: "Improvement",
    },
    clickForDetails: "Click for more details",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "What is and what is not?",
        subtitle: "Clear definition of the WasteZero™ program",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                WasteZero™ is an end-to-end continuous improvement program that
                combines practical technical training, DMAIC cycle application,
                and real project development, generating operational discipline
                without replacing the internal team.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                What is it?
              </p>
              {[
                "✔ A program to identify and eliminate waste according to Lean philosophy",
                "✔ Practical training that prepares improvement facilitators (Kaizen / Green Belt)",
                "✔ The ideal starting point for organizations beginning their Lean journey",
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
                What is not?
              </p>
              {[
                "✘ Training without real application",
                "✘ A partial solution or disconnected from strategy",
                "✘ A generic workshop without implementation commitment",
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
        title: "Problems it solves",
        subtitle: "Waste and operational challenges",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: View,
                title: "Limited Visibility",
                description: "Lack of visibility over daily inefficiencies.",
              },
              {
                icon: Box,
                title: "Wasted Resources",
                description:
                  "Loss of resources due to unnecessary processes, poorly designed movements, or idle times.",
              },
              {
                icon: Users,
                title: "Unfocused Effort",
                description: "Teams working hard but not with focus.",
              },
              {
                icon: RefreshCcw,
                title: "Inconsistent Improvement",
                description:
                  "Organizational culture that does not prioritize constant improvement.",
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
        title: "Methodology & Timing",
        subtitle: "6 months of implementation",
        description:
          "6-month program that combines practical technical training, DMAIC cycle application, and improvement project development, with continuous follow-up and management audits.",
        subDescription: "Implementation modality:",
        graphic: <MethodologyGraphic />,
        details: [
          "Phase 0: Initial diagnosis – Site and personnel structure recognition (on-site)",
          "Phase 1: Training in Lean concepts",
          "Phase 2: Identification and analysis of waste. Building process and value maps",
          "Phase 3: DMAIC project development and execution",
          "Phase 4: Project follow-up",
          "Phase 5: Project follow-up. Additional coaching to scale initiatives",
          "Phase 6: Final audit and coaching",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Benefits of the WasteZero™ program",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: RotateCcw,
                title: "Less Rework",
                description:
                  "Immediate reduction of rework by identifying and eliminating non-value-added activities.",
              },
              {
                icon: ArrowRight,
                title: "Optimized Movements",
                description:
                  "Elimination of unnecessary movements and optimization of workflows for greater operational efficiency.",
              },
              {
                icon: Clock,
                title: "Reduced Waiting Times",
                description:
                  "Minimization of idle and waiting times by improving process synchronization.",
              },
              {
                icon: Lightbulb,
                title: "Value-Added Ideas",
                description:
                  "Rapid generation of projects and innovative ideas that provide real value with low initial investment.",
              },
              {
                icon: DollarSign,
                title: "Fast ROI",
                description:
                  "Projects with accelerated return on investment thanks to low-cost, high-impact solutions.",
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description:
                  "Establishment of a culture of continuous improvement with measurable and sustainable results over time.",
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
        title: "Who is the program recommended for?",
        subtitle: "The ideal starting point for Lean transformation",
        description:
          "WasteZero™ is the ideal starting point for organizations beginning their Lean journey or needing to organize their operation, especially when there is management commitment and availability for support.",
        graphic: <RoadmapGraphic />,
        details: [
          "Companies that identify recurring operational problems but do not know how to address them",
          "Organizations seeking to reduce operating costs without asset investments",
          "Teams that work hard but feel they are not achieving the expected results",
          "Companies that need to install a culture of continuous improvement from scratch",
          "Organizations that want to prepare their staff for Lean certifications",
        ],
      },
      {
        id: "5",
        icon: Settings,
        title: "Which other products is it related to?",
        subtitle: "Solid ladder towards an integral Lean system",
        description:
          "WasteZero™ naturally connects with other programs such as: 5S Plus™, FlowStable™ and Kaizen Action™, forming a solid ladder towards an integral Lean system",
        graphic: <ConnectionsGraphic title="WasteZero™" />,
        details: [],
      },
    ],
  },
  pt: {
    roadmap: {
      problems: "Problemas",
      recurring: "Recorrentes",
      culture: "Cultura de",
      improvement: "Melhoria",
    },
    clickForDetails: "Clique para mais detalhes",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "O que é e o que não é?",
        subtitle: "Definição clara do programa WasteZero™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                WasteZero™ é um programa end-to-end de melhoria contínua que
                combina treinamento técnico prático, aplicação do ciclo DMAIC e
                desenvolvimento de projetos reais, gerando disciplina
                operacional sem substituir a equipe interna.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                O que é?
              </p>
              {[
                "✔ Um programa para identificar e eliminar desperdícios segundo a filosofia Lean",
                "✔ Um treinamento prático que prepara facilitadores de melhoria (Kaizen / Green Belt)",
                "✔ O ponto de partida ideal para organizações que iniciam sua jornada Lean",
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
                O que não é?
              </p>
              {[
                "✘ Um treinamento sem aplicação real",
                "✘ Uma solução parcial ou desconectada da estratégia",
                "✘ Um workshop genérico sem compromisso de implementação",
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
        title: "Problemas que resolve",
        subtitle: "Os desperdícios e desafios operacionais",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: View,
                title: "Visibilidade Limitada",
                description:
                  "Falta de visibilidade sobre as ineficiências diárias.",
              },
              {
                icon: Box,
                title: "Recursos Desperdiçados",
                description:
                  "Perda de recursos por processos desnecessários, movimentos mal desenhados ou tempos ociosos.",
              },
              {
                icon: Users,
                title: "Esforço Sem Foco",
                description: "Equipes que trabalham duro, mas sem foco.",
              },
              {
                icon: RefreshCcw,
                title: "Melhoria Inconstante",
                description:
                  "Cultura organizacional que não prioriza a melhoria constante.",
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
        title: "Metodologia & Tempos",
        subtitle: "6 meses de implementação",
        description:
          "Programa de 6 meses que combina treinamento técnico prático, aplicação do ciclo DMAIC e desenvolvimento de projetos de melhoria, com acompanhamento contínuo e auditorias de gestão.",
        subDescription: "Modalidade de implementação:",
        graphic: <MethodologyGraphic />,
        details: [
          "Fase 0: Diagnóstico inicial – Reconhecimento do local e da estrutura de pessoal (presencial)",
          "Fase 1: Treinamento em conceitos Lean",
          "Fase 2: Identificação e análise de desperdícios. Construção de mapas de processos e valor",
          "Fase 3: Desenvolvimento e execução do projeto DMAIC",
          "Fase 4: Acompanhamento de projetos",
          "Fase 5: Acompanhamento de projetos. Coaching adicional para escalar iniciativas",
          "Fase 6: Auditoria e coaching final",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa WasteZero™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: RotateCcw,
                title: "Menos Retrabalho",
                description:
                  "Redução imediata de retrabalho por meio da identificação e eliminação de atividades que não agregam valor.",
              },
              {
                icon: ArrowRight,
                title: "Movimentos Otimizados",
                description:
                  "Eliminação de movimentos desnecessários e otimização dos fluxos de trabalho para maior eficiência operacional.",
              },
              {
                icon: Clock,
                title: "Redução de Tempos de Espera",
                description:
                  "Minimização de tempos ociosos e esperas por meio da melhoria na sincronização dos processos.",
              },
              {
                icon: Lightbulb,
                title: "Ideias de Valor Agregado",
                description:
                  "Geração rápida de projetos e ideias inovadoras que agregam valor real com baixo investimento inicial.",
              },
              {
                icon: DollarSign,
                title: "ROI Rápido",
                description:
                  "Projetos com retorno de investimento acelerado graças a soluções de baixo custo e alto impacto.",
              },
              {
                icon: TrendingUp,
                title: "Melhoria Contínua",
                description:
                  "Estabelecimento de uma cultura de melhoria contínua com resultados mensuráveis e sustentáveis ao longo do tempo.",
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
        title: "Para quem o programa é recomendado?",
        subtitle: "O ponto de partida ideal para a transformação Lean",
        description:
          "WasteZero™ é o ponto de partida ideal para organizações que iniciam sua jornada Lean ou precisam organizar sua operação, especialmente quando há comprometimento da diretoria e disponibilidade para acompanhamento.",
        graphic: <RoadmapGraphic />,
        details: [
          "Empresas que identificam problemas operacionais recorrentes mas não sabem como abordá-los",
          "Organizações que buscam reduzir custos operacionais sem investimentos em ativos",
          "Equipes que trabalham duro mas sentem que não alcançam os resultados esperados",
          "Empresas que precisam instalar uma cultura de melhoria contínua do zero",
          "Organizações que querem preparar seu pessoal para certificações Lean",
        ],
      },
      {
        id: "5",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Escada sólida para um sistema Lean integral",
        description:
          "WasteZero™ se conecta naturalmente com outros programas como: 5S Plus™, FlowStable™ e Kaizen Action™, formando uma escada sólida para um sistema Lean integral",
        graphic: <ConnectionsGraphic title="WasteZero™" />,
        details: [],
      },
    ],
  },
};

const WasteZeroContent: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  // Adaptar features según idioma
  const features = t.features;

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
                  {t.clickForDetails}
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

export default WasteZeroContent;
