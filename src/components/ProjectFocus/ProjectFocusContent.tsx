"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Target,
  Clock,
  X,
  Users,
  Zap,
  EyeOff,
  SlidersHorizontal,
  BarChart3,
  Settings,
  HandCoins,
  CircleQuestionMark,
} from "lucide-react";
import PhasesProjectFocusGraphic from "../../icons-componets/ProjectFocus/PhasesProjectFocusGraphic";
import ConnectionProjectFocusGraphic from "../../icons-componets/ProjectFocus/ConnectionProjectFocusGraphic";
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

const MODAL_CLOSE_LABEL: Record<Language, string> = {
  es: "Cerrar modal",
  en: "Close modal",
  pt: "Fechar modal",
};

const CLICK_FOR_DETAILS: Record<Language, string> = {
  es: "Click para más detalles",
  en: "Click for more details",
  pt: "Clique para mais detalhes",
};

const Modal: React.FC<ModalProps & { language: Language }> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  content,
  graphic,
  language,
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
            aria-label={MODAL_CLOSE_LABEL[language]}
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

// Traducciones para los features y textos
const translations = {
  es: {
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Características del programa ProjectFocus™",
        children: (
          <>
            {/* Descripción principal */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                <strong>
                  ProjectFocus™ – Selección Estratégica de Proyectos
                </strong>{" "}
                es una metodología práctica diseñada para ayudar a las
                organizaciones a identificar, analizar y seleccionar proyectos
                de inversión, de forma colaborativa y alineada al plan
                estratégico vigente.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Este programa parte de una premisa clara: no todos los proyectos
                valen lo mismo. Por eso, ofrece herramientas para mapear
                beneficios, costos, impactos y riesgos de cada iniciativa, y
                tomar decisiones{" "}
                <strong>basadas en valor, no en urgencias</strong>.
              </p>
            </div>

            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              Está especialmente diseñado como{" "}
              <strong>extensión práctica de StratBridge™</strong>, siendo el
              paso natural para convertir una planificación estratégica en un{" "}
              <strong>portafolio ejecutable de proyectos clave</strong>.
            </blockquote>

            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                ¿Qué es?
              </p>
              {[
                "Una metodología práctica para priorizar proyectos según criterios estratégicos.",
                "Un proceso colaborativo que alinea a las distintas áreas en la toma de decisiones.",
                "Una herramienta para transformar la planificación en ejecución efectiva.",
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
                "Una simple matriz de priorización sin contexto estratégico.",
                "Un proceso unilateral sin participación de las áreas involucradas.",
                "Una solución teórica sin foco en la ejecución real de los proyectos.",
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
        subtitle: "Principales desafíos organizacionales",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: EyeOff,
                title: "Falta de Visibilidad",
                description: "Falta de visibilidad sobre iniciativas",
              },
              {
                icon: SlidersHorizontal,
                title: "Priorización Débil",
                description: "Priorización ineficiente",
              },
              {
                icon: Target,
                title: "Desalineación Estratégica",
                description: "Falta de alineamiento con objetivos estratégicos",
              },
              {
                icon: Users,
                title: "Conflictos Internos",
                description: "Tensiones internas por asignación de recursos",
              },
              {
                icon: BarChart3,
                title: "Evaluación Inexacta",
                description: "Evaluación ineficiente de impacto‑beneficio",
              },
              {
                icon: CheckCircle,
                title: "Baja Responsabilidad",
                description: "Falta de responsabilidad en la acción",
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
        id: "3",
        icon: Clock,
        title: "Metodología & Tiempos",
        subtitle: "Metodología estructurada en 7 fases",
        description:
          "El programa ProjectFocus™ – Selección Estratégica de Proyectos presenta una metodología simple de aplicación que consiste en un primer contacto virtual o presencial con el grupo de trabajo a fin de alinear consignas y plantear expectativas para luego terminar con dos sesiones presenciales de medio día cada una en las cuales se presentaran y discutirán cada una de las iniciativas sugeridas por los miembros de la organización para que finalmente se decide en forma grupal respecto a prioridades de ejecución y responsabilidades",
        subDescription: "Modalidad de implementación:",
        graphic: <PhasesProjectFocusGraphic />,
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
        id: "5",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa ProjectFocus™",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Permite que las organizaciones puedan discutir sus decisiones de
              inversión de una manera estructurada y siguiendo una metodología
              de identificación y selección de proyectos.
            </p>

            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              Logra un alineamiento entre los problemas u oportunidades que
              aparecen y las soluciones que se plantean.
            </p>

            <blockquote className="pl-6 mt-8 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              Entrega como{" "}
              <strong>
                resultado una planificación profesional de decisiones de
                inversión
              </strong>
              .
            </blockquote>
          </div>
        ),
      },
      {
        id: "4",
        icon: Users,
        title: "¿Para quién está recomendado el programa?",
        subtitle: "Perfil de organizaciones objetivo",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              El programa esta pensado para cualquier organización que
              permanentemente necesita invertir en proyectos o iniciativas pero
              que no encuentra la manera de hacerlo de forma ordenada y
              siguiendo una coherencia entre inversión y metas empresariales.
            </p>
          </div>
        ),
      },
      {
        id: "6",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "Complemento ideal para planificación estratégica",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              <strong>ProjectFocus™</strong> es el complemento ideal para
              empresas que ya implementaron <strong>StratBridge™</strong> y
              ahora necesitan pasar del tablero estratégico a la acción
              concreta.
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
          </div>
        ),
      },
    ],
  },
  en: {
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "What is it and what is it not?",
        subtitle: "Features of the ProjectFocus™ program",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                <strong>ProjectFocus™ – Strategic Project Selection</strong> is
                a practical methodology designed to help organizations identify,
                analyze, and select investment projects collaboratively and
                aligned with the current strategic plan.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                This program starts from a clear premise: not all projects are
                worth the same. It provides tools to map benefits, costs,
                impacts, and risks of each initiative, enabling decisions{" "}
                <strong>based on value, not urgency</strong>.
              </p>
            </div>
            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              It is specially designed as a{" "}
              <strong>practical extension of StratBridge™</strong>, being the
              natural step to turn strategic planning into an{" "}
              <strong>executable portfolio of key projects</strong>.
            </blockquote>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                What is it?
              </p>
              {[
                "A practical methodology to prioritize projects according to strategic criteria.",
                "A collaborative process that aligns different areas in decision-making.",
                "A tool to transform planning into effective execution.",
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
                What is it not?
              </p>
              {[
                "A simple prioritization matrix without strategic context.",
                "A unilateral process without involvement from relevant areas.",
                "A theoretical solution without focus on real project execution.",
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
        title: "Problems it solves",
        subtitle: "Main organizational challenges",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: EyeOff,
                title: "Lack of Visibility",
                description: "Lack of visibility over initiatives",
              },
              {
                icon: SlidersHorizontal,
                title: "Weak Prioritization",
                description: "Inefficient prioritization",
              },
              {
                icon: Target,
                title: "Strategic Misalignment",
                description: "Lack of alignment with strategic objectives",
              },
              {
                icon: Users,
                title: "Internal Conflicts",
                description: "Internal tensions over resource allocation",
              },
              {
                icon: BarChart3,
                title: "Inaccurate Evaluation",
                description: "Inefficient impact-benefit evaluation",
              },
              {
                icon: CheckCircle,
                title: "Low Accountability",
                description: "Lack of accountability in action",
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
        id: "3",
        icon: Clock,
        title: "Methodology & Timing",
        subtitle: "Methodology structured in 7 phases",
        description:
          "The ProjectFocus™ – Strategic Project Selection program presents a simple methodology that starts with an initial virtual or in-person meeting to align expectations, followed by two half-day in-person sessions where all suggested initiatives are presented and discussed, and finally, group decisions are made regarding execution priorities and responsibilities.",
        subDescription: "Implementation modality:",
        graphic: <PhasesProjectFocusGraphic />,
        details: [
          "Initial Phase: Program presentation to the team.",
          "Phase 1: Development of ideas and projects.",
          "Phase 2: Project or initiative selection techniques.",
          "Phase 3: Impact-benefit matrix.",
          "Phase 4: Responsibility matrix.",
          "Phase 5: Project follow-up.",
          "Phase 6: Final follow-up document.",
        ],
      },
      {
        id: "5",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Benefits of the ProjectFocus™ program",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Allows organizations to discuss investment decisions in a
              structured way, following a methodology for identifying and
              selecting projects.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              Achieves alignment between emerging problems or opportunities and
              the proposed solutions.
            </p>
            <blockquote className="pl-6 mt-8 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              Delivers as a{" "}
              <strong>
                result a professional plan for investment decisions
              </strong>
              .
            </blockquote>
          </div>
        ),
      },
      {
        id: "4",
        icon: Users,
        title: "Who is the program recommended for?",
        subtitle: "Target organization profile",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              The program is designed for any organization that constantly needs
              to invest in projects or initiatives but cannot find a way to do
              so in an orderly manner and in coherence with business goals.
            </p>
          </div>
        ),
      },
      {
        id: "6",
        icon: Settings,
        title: "Which other products is it related to?",
        subtitle: "Ideal complement for strategic planning",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              <strong>ProjectFocus™</strong> is the ideal complement for
              companies that have already implemented{" "}
              <strong>StratBridge™</strong> and now need to move from strategic
              planning to concrete action.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              While StratBridge™ sets the course, ProjectFocus™ helps{" "}
              <strong>choose which ships to set sail</strong>.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              This connection ensures that each project is validated from its
              origin, aligned with the vision, and supported by the right
              people.
            </p>
            <div className="bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <ConnectionProjectFocusGraphic />
            </div>
          </div>
        ),
      },
    ],
  },
  pt: {
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "O que é e o que não é?",
        subtitle: "Características do programa ProjectFocus™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                <strong>ProjectFocus™ – Seleção Estratégica de Projetos</strong>{" "}
                é uma metodologia prática projetada para ajudar as organizações
                a identificar, analisar e selecionar projetos de investimento,
                de forma colaborativa e alinhada ao plano estratégico vigente.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Este programa parte de uma premissa clara: nem todos os projetos
                têm o mesmo valor. Por isso, oferece ferramentas para mapear
                benefícios, custos, impactos e riscos de cada iniciativa, e
                tomar decisões{" "}
                <strong>baseadas em valor, não em urgências</strong>.
              </p>
            </div>
            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              É especialmente projetado como{" "}
              <strong>extensão prática do StratBridge™</strong>, sendo o passo
              natural para transformar o planejamento estratégico em um{" "}
              <strong>portfólio executável de projetos-chave</strong>.
            </blockquote>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                O que é?
              </p>
              {[
                "Uma metodologia prática para priorizar projetos segundo critérios estratégicos.",
                "Um processo colaborativo que alinha as diferentes áreas na tomada de decisões.",
                "Uma ferramenta para transformar o planejamento em execução efetiva.",
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
                O que não é?
              </p>
              {[
                "Uma simples matriz de priorização sem contexto estratégico.",
                "Um processo unilateral sem participação das áreas envolvidas.",
                "Uma solução teórica sem foco na execução real dos projetos.",
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
        title: "Problemas que resolve",
        subtitle: "Principais desafios organizacionais",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: EyeOff,
                title: "Falta de Visibilidade",
                description: "Falta de visibilidade sobre iniciativas",
              },
              {
                icon: SlidersHorizontal,
                title: "Priorização Fraca",
                description: "Priorização ineficiente",
              },
              {
                icon: Target,
                title: "Desalinhamento Estratégico",
                description: "Falta de alinhamento com objetivos estratégicos",
              },
              {
                icon: Users,
                title: "Conflitos Internos",
                description: "Tensões internas por alocação de recursos",
              },
              {
                icon: BarChart3,
                title: "Avaliação Inexata",
                description: "Avaliação ineficiente de impacto-benefício",
              },
              {
                icon: CheckCircle,
                title: "Baixa Responsabilidade",
                description: "Falta de responsabilidade na ação",
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
        id: "3",
        icon: Clock,
        title: "Metodologia & Tempos",
        subtitle: "Metodologia estruturada em 7 fases",
        description:
          "O programa ProjectFocus™ – Seleção Estratégica de Projetos apresenta uma metodologia simples de aplicação que consiste em um primeiro contato virtual ou presencial com o grupo de trabalho para alinhar diretrizes e expectativas, seguido de duas sessões presenciais de meio dia cada, nas quais serão apresentadas e discutidas todas as iniciativas sugeridas pelos membros da organização, para que finalmente se decida em grupo sobre prioridades de execução e responsabilidades.",
        subDescription: "Modalidade de implementação:",
        graphic: <PhasesProjectFocusGraphic />,
        details: [
          "Fase Inicial: Apresentação do programa à equipe.",
          "Fase 1: Desenvolvimento de ideias e projetos.",
          "Fase 2: Técnicas de seleção de projetos ou iniciativas.",
          "Fase 3: Matriz impacto-benefício.",
          "Fase 4: Matriz de responsabilidades.",
          "Fase 5: Acompanhamento de projetos.",
          "Fase 6: Documento final de acompanhamento.",
        ],
      },
      {
        id: "5",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa ProjectFocus™",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Permite que as organizações possam discutir suas decisões de
              investimento de maneira estruturada, seguindo uma metodologia de
              identificação e seleção de projetos.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              Alcança alinhamento entre os problemas ou oportunidades que surgem
              e as soluções propostas.
            </p>
            <blockquote className="pl-6 mt-8 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              Entrega como{" "}
              <strong>
                resultado um planejamento profissional de decisões de
                investimento
              </strong>
              .
            </blockquote>
          </div>
        ),
      },
      {
        id: "4",
        icon: Users,
        title: "Para quem o programa é recomendado?",
        subtitle: "Perfil de organizações alvo",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              O programa é pensado para qualquer organização que precisa
              investir constantemente em projetos ou iniciativas, mas não
              encontra uma maneira de fazê-lo de forma ordenada e coerente com
              as metas empresariais.
            </p>
          </div>
        ),
      },
      {
        id: "6",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Complemento ideal para planejamento estratégico",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              <strong>ProjectFocus™</strong> é o complemento ideal para empresas
              que já implementaram o <strong>StratBridge™</strong> e agora
              precisam passar do quadro estratégico para a ação concreta.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Enquanto o StratBridge™ define o rumo, o ProjectFocus™ ajuda a{" "}
              <strong>escolher bem quais navios colocar para navegar</strong>.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Essa conexão garante que cada projeto seja validado desde sua
              origem, alinhado à visão e sustentado pelos responsáveis corretos.
            </p>
            <div className="bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <ConnectionProjectFocusGraphic />
            </div>
          </div>
        ),
      },
    ],
  },
};

const ProjectFocusContent: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = translations[currentLanguage as Language].features;

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
                  {CLICK_FOR_DETAILS[currentLanguage]}
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
        language={currentLanguage}
      />
    </div>
  );
};

export default ProjectFocusContent;
