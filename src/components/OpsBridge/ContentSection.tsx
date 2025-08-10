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
  HandCoins,
  CircleQuestionMark,
  FolderCog,
  TrendingDown,
  BarChart2,
  BarChart3,
  CalendarCheck,
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

const OpsBridgeContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es y qué no es?",
      subtitle: "Definición clara del programa OpsBridge™",
      children: (
        <>
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              OpsBridge™ es un programa diseñado para llevar a las empresas
              hacia un nivel superior de estandarización, control y eficiencia,
              transformando sus operaciones en sistemas de clase mundial. Es un
              proceso de transformación integral bajo principios LEAN, de
              mediano/largo plazo, que abarca cultura, procesos, liderazgo,
              estrategia y estructuras de gestión. Permite profesionalizar la
              gestión, consolidar la disciplina operativa y liberar tiempo de
              los líderes, asegurando que la empresa funcione de forma estable y
              confiable, sin depender de la supervisión constante.
            </p>
          </div>

          {/* Details */}
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
              ¿Qué es?
            </p>
            {[
              "✔ Un programa de transformación integral para empresas con base en mejora continua, que buscan alcanzar estándares de clase mundial.",
              "✔ Un proceso que profesionaliza la gestión, consolida la disciplina operativa y libera tiempo de los líderes.",
              "✔ Una iniciativa que abarca cultura, procesos, liderazgo, estrategia y estructuras de gestión bajo principios LEAN.",
              "✔ El siguiente paso para organizaciones que ya han iniciado su camino Lean y desean avanzar hacia la excelencia operacional.",
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
              "✘ Un programa básico de capacitación o mejora puntual.",
              "✘ Una solución rápida o parcial que no aborda la cultura y la gestión de fondo.",
              "✘ Un sistema que depende de la supervisión constante o de esfuerzos individuales aislados.",
              "✘ Un enfoque limitado solo a procesos, sin integrar liderazgo, estrategia y cultura.",
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
      subtitle: "Principales problemas operativos que resuelve",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: FolderCog,
              title: "Falta de orden y estandarización",
              description: "Falta de orden y estandarización en procesos.",
            },
            {
              icon: Users,
              title: "Dependencia de líderes",
              description: "Dependencia excesiva de líderes en el día a día.",
            },
            {
              icon: TrendingDown,
              title: "Baja productividad y variabilidad",
              description: "Baja productividad y variabilidad en resultados.",
            },
            {
              icon: BarChart2,
              title: "Dificultad para sostener indicadores",
              description:
                "Dificultad para sostener indicadores de gestión y disciplina operativa.",
            },
            {
              icon: Target,
              title: "Falta de foco y priorización",
              description:
                "Falta de foco en la generación de valor y priorización de proyectos de mejora",
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
      subtitle: "14 meses de implementación",
      description:
        "Durante los 14 meses de implementación, la empresa iniciará un camino ascendente de madurez que le permitirá posicionarse fuertemente en el mercado apoyándose en la mejora de su productividad y en la estabilización de sus procesos.",
      subDescription: "Modalidad de implementación:",
      graphic: <MethodologyGraphic />,
      details: [
        "Duración: 14 meses de implementación activa.",
        "Inicio con escaneo rápido para relevar procesos, datos e identificar oportunidades de mejora.",
        "Implementación presencial semanal, con soporte virtual diario durante los primeros meses de ejecución",
        "Capacitación en Reduccion de desperdicios, 6 Sigma y resolución de problemas in company (en el lugar, no virtual) como introduccion al mundo de la mejora continua",
        "Definición de métricas, objetivos y tableros de control. Inicio de etapa de estabilización de procesos",
        "Creación de rutinas de seguimiento y establecimiento de roles de “Agentes de Cambio que serán los ojos del sistema",
        "Planificacion estratégica y generación de proyectos de mejora",
        "Integracion de la mejora continua con áreas especificas (Mantenimiento, Calidad, etc)",
        "Auditorias de seguimiento y practicas retrospectivas en el lugar",
        "Acompañamiento presencial durante parte de la implementación. Resto de seguimiento semanal virtual.",
      ],
    },
    {
      id: "8",
      icon: HandCoins,
      title: "Beneficios",
      subtitle: "Beneficios del programa OpsBridge™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: Settings,
              title: "Estandarización y Reducción de Variabilidad",
              description:
                "Estandarización de procesos clave y reducción de variabilidad.",
            },
            {
              icon: TrendingUp,
              title: "Productividad y Eficiencia Operativa",
              description: "Aumento de productividad y eficiencia operativa.",
            },
            {
              icon: BarChart3,
              title: "Gestión Basada en Datos",
              description:
                "Consolidación de un sistema de gestión que facilite la toma de decisiones basadas en datos.",
            },
            {
              icon: Award,
              title: "Preparación para World Class",
              description:
                "Preparación de la empresa para avanzar hacia niveles World Class de operación",
            },
            {
              icon: CalendarCheck,
              title: "Rutinas de Gestión y Enfoque en Resultados",
              description:
                "Generación de rutinas de gestión diaria, semanal y mensual con foco en resultados.",
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
      subtitle: "Tipos de empresas ideales para OpsBridge™",
      description:
        "El programa está diseñado para empresas industriales o de servicios que necesitan desarrollar un sistema integral de mejora continua con la participación de todos los sectores. Especialmente recomendado para aquellas que requieren certificar World Class Operation para sus clientes.",
      details: [
        "Empresas industriales o de servicios que buscan un sistema de mejora continua transversal",
        "Organizaciones que necesitan la participación activa de todos los sectores en la mejora",
        "Empresas que deben certificar World Class Operation para sus clientes",
        "Sectores que desean profesionalizar la gestión y alcanzar estándares internacionales",
      ],
    },
    {
      id: "5",
      icon: Settings,
      title: "¿Con qué otros productos se relaciona?",
      subtitle: "Integración y profundización con el ecosistema LYSPAS & CO",
      description:
        "OpsBridge™ tien relación con todos los demás productos de LYSPAS & CO  buscando profundizar cada concepto o técnica ya desarrollada.  Igualmente la metodología de implementación permite aborar algunos temas desde cero.",
      graphic: <ConnectionsGraphic title="OpsBridge™" />,
      details: [],
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
    <div id="OpsBridge-content" className="bg-[var(--color-bg)]">
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

export default OpsBridgeContent;
