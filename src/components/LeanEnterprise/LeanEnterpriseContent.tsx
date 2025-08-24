"use client";

import type React from "react";
import { useState, useEffect, useMemo } from "react";

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
  MapPin,
  Target,
  Grid,
  Users,
  CalendarClock,
  Share2,
  Trash2,
  BarChart3,
  Clock,
  ChartNoAxesGantt,
} from "lucide-react";
import LeanEnterpriseTimelineGraphic from "../../icons-componets/LeanEnterprise/LeanEnterpriseTimelineGraphic";
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

// Traducciones de los textos y features
const translations = {
  es: {
    features: [
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
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: ChartNoAxesGantt,
                title: "Desorden de Procesos",
                description: "Falta de organización general en procesos",
              },
              {
                icon: CalendarClock,
                title: "Planificación Deficiente",
                description: "Bajo nivel de planificación y control visual",
              },
              {
                icon: Share2,
                title: "Silos Organizacionales",
                description: "Desconexión entre áreas (silos)",
              },
              {
                icon: XCircle,
                title: "Cultura Fragmentada",
                description: "Ausencia de una cultura de mejora estructurada",
              },
              {
                icon: Trash2,
                title: "Desperdicios Ocultos",
                description: "Pérdidas ocultas y desperdicios no gestionados",
              },
              {
                icon: BarChart3,
                title: "Indicadores Inexactos",
                description: "Indicadores que no reflejan la realidad",
              },
              {
                icon: Clock,
                title: "Sostenibilidad Baja",
                description: "Dificultad para sostener mejoras en el tiempo",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-3 space-x-3">
                  <problem.icon className="w-8 h-8" />
                  <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                    {problem.title}
                  </h4>
                </div>
                <p className="text-[var(--color-text)] leading-relaxed">
                  {problem.description}
                </p>
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
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Tipos de Empresas
            </h3>
            {[
              {
                icon: MapPin,
                title: "Implementación Progresiva",
                description:
                  "Industriales, logísticas, agroexportadoras, comerciales o de servicios",
              },
              {
                icon: Target,
                title: "Intervención Focalizada",
                description:
                  "Que atraviesan procesos de expansión, reorganización o madurez",
              },
              {
                icon: Grid,
                title: "Escalabilidad Modular",
                description:
                  "Que buscan profesionalizar su gestión sin burocratizarla",
              },
              {
                icon: Users,
                title: "Cultura Participativa",
                description: "Que quieren mayor involucramiento de sus equipos",
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
              Considerando que la empresa inicia su transformación desde una
              fase de madurez baja, el programa Lean Enterprise Transformation
              se implementa de manera secuencial, con alta presencia de
              especialistas en el lugar durante gran parte de la implementación
              y con la ayuda de personal propio de la empresa que cumplirá el
              rol de agente de cambio.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              La duración del programa es de <strong>12 meses</strong>,
              iniciando el mismo con una actividad de mapeo y conocimiento de la
              situación y finalizando con una auditoria de valor y madurez lo
              cual podrá dar inicio a una segunda fase de transformación.
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
      },
    ],
    sectionTitle: "",
    sectionSubtitle: "",
  },
  en: {
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "What is Lean Enterprise Transformation™?",
        subtitle: "Program features",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              <strong>Lean Enterprise Transformation™</strong> is a
              comprehensive transformation program designed by LYSPAS & CO that
              enables the implementation of a management system based on
              continuous improvement, with full company-wide reach. It covers
              everything from the initial diagnosis to the deployment of
              practical and sustainable tools that align culture, processes,
              people, and results.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              It is intended for companies that want to organize their
              operations, stabilize processes, eliminate waste, and manage with
              real indicators, regardless of sector or size. It is a scalable
              system that allows integration with other programs such as{" "}
              <strong>LeanBridge™</strong>, <strong>WasteZero™</strong>,{" "}
              <strong>FlowStable™</strong>, and more.
            </p>
          </div>
        ),
        large: true,
      },
      {
        id: "2",
        icon: CircleAlert,
        title: "What problems does it solve?",
        subtitle: "Common organizational challenges",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: ChartNoAxesGantt,
                title: "Process Disorder",
                description: "Lack of general process organization",
              },
              {
                icon: CalendarClock,
                title: "Poor Planning",
                description: "Low level of planning and visual control",
              },
              {
                icon: Share2,
                title: "Organizational Silos",
                description: "Disconnection between areas (silos)",
              },
              {
                icon: XCircle,
                title: "Fragmented Culture",
                description: "Lack of a structured improvement culture",
              },
              {
                icon: Trash2,
                title: "Hidden Waste",
                description: "Hidden losses and unmanaged waste",
              },
              {
                icon: BarChart3,
                title: "Inaccurate Indicators",
                description: "Indicators that do not reflect reality",
              },
              {
                icon: Clock,
                title: "Low Sustainability",
                description: "Difficulty sustaining improvements over time",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-3 space-x-3">
                  <problem.icon className="w-8 h-8" />
                  <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                    {problem.title}
                  </h4>
                </div>
                <p className="text-[var(--color-text)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "3",
        icon: Building2,
        title: "For what type of companies?",
        subtitle: "Ideal business profile",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Types of Companies
            </h3>
            {[
              {
                icon: MapPin,
                title: "Progressive Implementation",
                description:
                  "Industrial, logistics, agro-export, commercial or service companies",
              },
              {
                icon: Target,
                title: "Focused Intervention",
                description:
                  "Companies undergoing expansion, reorganization, or maturity processes",
              },
              {
                icon: Grid,
                title: "Modular Scalability",
                description:
                  "Companies seeking to professionalize management without bureaucracy",
              },
              {
                icon: Users,
                title: "Participative Culture",
                description: "Companies seeking greater team involvement",
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
        id: "4",
        icon: Blend,
        title: "Program phases",
        subtitle: "Structured implementation",
        description:
          "7-phase process that ensures an orderly and sustainable transformation.",
        details: [
          "1. Initial diagnosis (opportunity scan)",
          "2. Alignment with management (vision, objectives, focus)",
          "3. Selection of pilot areas and initial metrics",
          "4. Implementation of basic tools",
          "5. Development of visual culture and participative leadership",
          "6. Progressive expansion to the rest of the organization",
          "7. Consolidation with real follow-up and indicators",
        ],
        graphic: <LeanEnterpriseTimelineGraphic />,
      },
      {
        id: "5",
        icon: HandPlatter,
        title: "Implementation modality",
        subtitle: "Specialized support",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Considering that the company starts its transformation from a low
              maturity phase, the Lean Enterprise Transformation program is
              implemented sequentially, with a high presence of specialists on
              site during much of the implementation and with the help of the
              company's own staff who will act as change agents.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              The duration of the program is <strong>12 months</strong>,
              starting with a mapping and situation assessment activity and
              ending with a value and maturity audit, which may lead to a second
              phase of transformation.
            </p>
          </div>
        ),
      },
      {
        id: "6",
        icon: MonitorCheck,
        title: "What results to expect?",
        subtitle: "Tangible benefits",
        details: [
          "More stable, reliable, and visual processes",
          "Teams aligned and committed to common goals",
          "Productivity improvement without investment in fixed assets",
          "Reduction of waste and downtime",
          "Improvement culture established with internal leadership",
          "Tools applied and sustained over time",
        ],
      },
      {
        id: "7",
        icon: Merge,
        title: "How does it connect with other LYSPAS & CO programs?",
        subtitle: "Integrative framework",
        subDescription:
          "Lean Enterprise Transformation™ is the general framework under which specific programs are integrated, such as:",
        details: [
          "LeanBridge™ (operational culture and visual leadership)",
          "WasteZero™ – Lean Leaders (waste elimination)",
          "FlowStable™ (process stability and efficiency)",
          "Kaizen Action™ (structured problem solving)",
          "StratBridge™ – Strategic Planning (strategic alignment)",
          "Managerial Decisions Based on Statistics™ (data-based analysis and decision making)",
          "5S Plus™ (order, cleanliness, and standardization culture)",
        ],
      },
    ],
    sectionTitle: "",
    sectionSubtitle: "",
  },
  pt: {
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "O que é Lean Enterprise Transformation™?",
        subtitle: "Características do programa",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              <strong>Lean Enterprise Transformation™</strong> é um programa
              abrangente de transformação desenvolvido pela LYSPAS & CO que
              permite implementar um sistema de gestão baseado em melhoria
              contínua, com alcance total na empresa. Abrange desde o
              diagnóstico inicial até a implantação de ferramentas práticas e
              sustentáveis que alinham cultura, processos, pessoas e resultados.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              É pensado para empresas que desejam organizar sua operação,
              estabilizar processos, eliminar desperdícios e gerenciar com
              indicadores reais, independentemente do setor ou tamanho. É um
              sistema escalável que permite integrar outros programas como{" "}
              <strong>LeanBridge™</strong>, <strong>WasteZero™</strong>,{" "}
              <strong>FlowStable™</strong> e outros.
            </p>
          </div>
        ),
        large: true,
      },
      {
        id: "2",
        icon: CircleAlert,
        title: "Quais problemas resolve?",
        subtitle: "Desafios organizacionais comuns",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: ChartNoAxesGantt,
                title: "Desorganização de Processos",
                description: "Falta de organização geral nos processos",
              },
              {
                icon: CalendarClock,
                title: "Planejamento Deficiente",
                description: "Baixo nível de planejamento e controle visual",
              },
              {
                icon: Share2,
                title: "Silos Organizacionais",
                description: "Desconexão entre áreas (silos)",
              },
              {
                icon: XCircle,
                title: "Cultura Fragmentada",
                description: "Ausência de uma cultura de melhoria estruturada",
              },
              {
                icon: Trash2,
                title: "Desperdícios Ocultos",
                description: "Perdas ocultas e desperdícios não gerenciados",
              },
              {
                icon: BarChart3,
                title: "Indicadores Inexatos",
                description: "Indicadores que não refletem a realidade",
              },
              {
                icon: Clock,
                title: "Baixa Sustentabilidade",
                description:
                  "Dificuldade em sustentar melhorias ao longo do tempo",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-3 space-x-3">
                  <problem.icon className="w-8 h-8" />
                  <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                    {problem.title}
                  </h4>
                </div>
                <p className="text-[var(--color-text)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "3",
        icon: Building2,
        title: "Para que tipo de empresas?",
        subtitle: "Perfil empresarial ideal",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Tipos de Empresas
            </h3>
            {[
              {
                icon: MapPin,
                title: "Implementação Progressiva",
                description:
                  "Industriais, logísticas, agroexportadoras, comerciais ou de serviços",
              },
              {
                icon: Target,
                title: "Intervenção Focalizada",
                description:
                  "Que passam por processos de expansão, reorganização ou maturidade",
              },
              {
                icon: Grid,
                title: "Escalabilidade Modular",
                description:
                  "Que buscam profissionalizar sua gestão sem burocratizá-la",
              },
              {
                icon: Users,
                title: "Cultura Participativa",
                description: "Que desejam maior envolvimento de suas equipes",
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
        id: "4",
        icon: Blend,
        title: "Fases do programa",
        subtitle: "Implementação estruturada",
        description:
          "Processo de 7 fases que garante uma transformação ordenada e sustentável.",
        details: [
          "1. Diagnóstico inicial (varredura de oportunidades)",
          "2. Alinhamento com a direção (visão, objetivos, foco)",
          "3. Seleção de áreas piloto e métricas iniciais",
          "4. Implementação de ferramentas básicas",
          "5. Desenvolvimento de cultura visual e liderança participativa",
          "6. Expansão progressiva para o restante da organização",
          "7. Consolidação com acompanhamento e indicadores reais",
        ],
        graphic: <LeanEnterpriseTimelineGraphic />,
      },
      {
        id: "5",
        icon: HandPlatter,
        title: "Modalidade de implementação",
        subtitle: "Acompanhamento especializado",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Considerando que a empresa inicia sua transformação a partir de
              uma fase de baixa maturidade, o programa Lean Enterprise
              Transformation é implementado de forma sequencial, com alta
              presença de especialistas no local durante grande parte da
              implementação e com o auxílio de pessoal próprio da empresa que
              atuará como agente de mudança.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              A duração do programa é de <strong>12 meses</strong>, iniciando
              com uma atividade de mapeamento e conhecimento da situação e
              finalizando com uma auditoria de valor e maturidade, o que poderá
              dar início a uma segunda fase de transformação.
            </p>
          </div>
        ),
      },
      {
        id: "6",
        icon: MonitorCheck,
        title: "Quais resultados esperar?",
        subtitle: "Benefícios tangíveis",
        details: [
          "Processos mais estáveis, confiáveis e visuais",
          "Equipes alinhadas e comprometidas com objetivos comuns",
          "Melhoria de produtividade sem investimento em ativos fixos",
          "Redução de desperdícios e tempos mortos",
          "Cultura de melhoria instalada com liderança interna",
          "Ferramentas aplicadas e sustentadas ao longo do tempo",
        ],
      },
      {
        id: "7",
        icon: Merge,
        title: "Como se vincula a outros programas da LYSPAS & CO?",
        subtitle: "Estrutura integradora",
        subDescription:
          "Lean Enterprise Transformation™ é a estrutura geral sob a qual se integram programas específicos como:",
        details: [
          "LeanBridge™ (cultura operacional e liderança visual)",
          "WasteZero™ – Lean Leaders (eliminação de desperdícios)",
          "FlowStable™ (estabilidade e eficiência de processos)",
          "Kaizen Action™ (resolução estruturada de problemas)",
          "StratBridge™ – Strategic Planning (alinhamento estratégico)",
          "Decisões Gerenciais Baseadas em Estatísticas™ (análise e tomada de decisões baseadas em dados)",
          "5S Plus™ (cultura de ordem, limpeza e padronização)",
        ],
      },
    ],
    sectionTitle: "",
    sectionSubtitle: "",
  },
};

const LeanEnterpriseContent: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const language = currentLanguage as Language;

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  // Memoiza los features traducidos para evitar recalcular en cada render
  const features = useMemo(() => translations[language].features, [language]);
  const sectionTitle = translations[language].sectionTitle;
  const sectionSubtitle = translations[language].sectionSubtitle;

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
      <ContentSection
        id="que-es"
        title={sectionTitle}
        subtitle={sectionSubtitle}
      >
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
                  {CLICK_FOR_DETAILS[language]}
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
        language={language}
      />
    </div>
  );
};

export default LeanEnterpriseContent;
