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
import MethodologyGraphic from "./MethodologyGraphic";
import { Language } from "../../types";
import { useLanguage } from "../../contexts/LanguageContext";

// Traducciones para los textos
const translations = {
  es: {
    clickForDetails: "Click para más detalles",
    closeModal: "Cerrar modal",
    whatIs: "¿Qué es?",
    whatIsNot: "¿Qué no es?",
    whatIsTitle: "¿Qué es y qué no es?",
    whatIsSubtitle: "Definición clara del programa Change Bridge™",
    whatIsDescription:
      "Es un programa práctico y estructurado para ayudar a las empresas a gestionar de forma ordenada, clara y participativa los procesos de cambio, asegurando que los equipos entiendan, adopten y sostengan las transformaciones necesarias para la evolución del negocio.",
    whatIsList: [
      "Prepararse para los cambios.",
      "Minimizar resistencias y riesgos.",
      "Generar compromiso en los equipos.",
      "Lograr resultados sostenibles en cada transformación.",
    ],
    whatIsNotList: [
      "Un proceso improvisado sin estructura clara.",
      "Un cambio impuesto sin participación de los equipos.",
      "Una solución puntual sin seguimiento continuo.",
    ],
    problemsTitle: "Problemas que resuelve",
    problemsSubtitle: "Los desperdicios y desafíos operativos",
    problemsList: [
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
    ],
    methodologyTitle: "Metodología & Tiempos",
    methodologySubtitle:
      "Metodología de 4 fases con una duración típica de 8 a 12 semanas",
    methodologyDescription:
      "Los tiempos se adaptan al tamaño y complejidad del proyecto; la implementación combina workshops presenciales, coaching y seguimiento estructurado.",
    methodologySubDescription: "Modalidad de implementación:",
    methodologyDetails: [
      "Fase 1: Visión y evaluación inicial — definición del proyecto, diagnóstico estado actual vs futuro, equipo y KPIs.",
      "Fase 2: Análisis estructural — mapeo de impactos, matriz riesgo/contingencias e identificación de actores clave.",
      "Fase 3: Planes de gestión del cambio — gestión de actores, planes de comunicación y programas de formación.",
      "Fase 4: Implementación activa y sostenibilidad — ejecución con coaching, seguimiento y transformación de la comunicación en proceso.",
    ],
    benefitsTitle: "Beneficios",
    benefitsSubtitle: "Beneficios del programa Change Bridge™",
    benefitsList: [
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
    ],
    recommendedTitle: "¿Para quién está recomendado el programa?",
    recommendedSubtitle: "Tipos de empresas ideales para Change Bridge™",
    recommendedTypes: "Tipos de Empresas",
    recommendedList: [
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
    ],
    relatedTitle: "¿Con qué otros productos se relaciona?",
    relatedSubtitle: "",
    relatedDescription:
      "Estos productos se complementan: WasteZero™ facilita la aceptación de prácticas Lean en la empresa y prepara al equipo para actuar; Kaizen Action™ asegura la participación activa de los equipos durante eventos de mejora y genera soluciones aplicables; y LeanBridge™ potencia la adopción de la disciplina operativa necesaria para sostener las mejoras. Paralelamente, StratBridge™ alinea los cambios con los objetivos estratégicos, transformando iniciativas en proyectos priorizados, mientras que Lean Enterprise Transformation™ proporciona el marco para sostener y escalar esos cambios durante procesos de transformación profunda.",
    relatedList: [
      {
        icon: Target,
        title: "WasteZero™",
        description: "Facilita la aceptación de prácticas Lean en la empresa.",
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
        description: "Ayuda a alinear cambios con los objetivos estratégicos.",
      },
      {
        icon: Building2,
        title: "Lean Enterprise Transformation™",
        description:
          "Esencial para sostener cambios durante procesos de transformación profunda.",
      },
    ],
  },
  en: {
    clickForDetails: "Click for more details",
    closeModal: "Close modal",
    whatIs: "What is it?",
    whatIsNot: "What is it not?",
    whatIsTitle: "What is it and what is it not?",
    whatIsSubtitle: "Clear definition of the Change Bridge™ program",
    whatIsDescription:
      "It is a practical and structured program to help companies manage change processes in an orderly, clear, and participatory way, ensuring that teams understand, adopt, and sustain the necessary transformations for business evolution.",
    whatIsList: [
      "Prepare for changes.",
      "Minimize resistance and risks.",
      "Generate team commitment.",
      "Achieve sustainable results in every transformation.",
    ],
    whatIsNotList: [
      "An improvised process without clear structure.",
      "A change imposed without team participation.",
      "A one-off solution without continuous follow-up.",
    ],
    problemsTitle: "Problems it solves",
    problemsSubtitle: "Waste and operational challenges",
    problemsList: [
      {
        icon: MessageSquare,
        title: "Poor Communication",
        description: "Lack of clarity and communication in projects.",
      },
      {
        icon: Users,
        title: "Failed Alignment",
        description:
          "Difficulty aligning different sectors and actors around a common goal.",
      },
      {
        icon: Clock,
        title: "Insufficient Discipline",
        description:
          "Implemented changes that are later abandoned due to lack of discipline.",
      },
      {
        icon: UserCheck,
        title: "Inadequate Human Management",
        description:
          "Failure of improvement projects due to lack of human factor management.",
      },
      {
        icon: ShieldOff,
        title: "Resistance to Change",
        description: "Teams' resistance to adopting new ways of working.",
      },
    ],
    methodologyTitle: "Methodology & Timing",
    methodologySubtitle:
      "4-phase methodology with a typical duration of 8 to 12 weeks",
    methodologyDescription:
      "Timing adapts to the size and complexity of the project; implementation combines in-person workshops, coaching, and structured follow-up.",
    methodologySubDescription: "Implementation modality:",
    methodologyDetails: [
      "Phase 1: Vision and initial assessment — project definition, current vs. future state diagnosis, team and KPIs.",
      "Phase 2: Structural analysis — impact mapping, risk/contingency matrix, and identification of key actors.",
      "Phase 3: Change management plans — stakeholder management, communication plans, and training programs.",
      "Phase 4: Active implementation and sustainability — execution with coaching, follow-up, and transformation of communication into process.",
    ],
    benefitsTitle: "Benefits",
    benefitsSubtitle: "Benefits of the Change Bridge™ program",
    benefitsList: [
      {
        icon: Target,
        title: "Strategic Alignment",
        description:
          "Clear alignment between change objectives and team actions.",
      },
      {
        icon: Zap,
        title: "Agile Implementation",
        description:
          "Greater speed and effectiveness in implementing transformation projects.",
      },
      {
        icon: Repeat,
        title: "Sustainable Changes",
        description: "Sustainability of changes in the long term.",
      },
      {
        icon: ShieldCheck,
        title: "Expectation Management",
        description:
          "Minimization of internal resistance and proper expectation management.",
      },
      {
        icon: MessageCircle,
        title: "Structured Communication",
        description:
          "Improvement in structured communication and team operational discipline.",
      },
    ],
    recommendedTitle: "Who is the program recommended for?",
    recommendedSubtitle: "Ideal types of companies for Change Bridge™",
    recommendedTypes: "Types of Companies",
    recommendedList: [
      {
        icon: Factory,
        title: "Industrial or service companies",
        description:
          "Industrial and service organizations seeking to improve efficiency and operational discipline.",
      },
      {
        icon: Users,
        title: "Comprehensive intervention in people areas",
        description:
          "Work areas with high people presence where aligning roles, safety, and processes is key.",
      },
      {
        icon: Truck,
        title: "High-traffic sectors",
        description:
          "Areas with high traffic, risk, or material dispersion requiring order, control, and waste reduction.",
      },
      {
        icon: CheckCircle,
        title: "Organizations seeking order culture",
        description:
          "Companies wishing to strengthen a culture of order, safety, and efficiency to sustain changes over time.",
      },
    ],
    relatedTitle: "What other products is it related to?",
    relatedSubtitle: "",
    relatedDescription:
      "These products complement each other: WasteZero™ facilitates the acceptance of Lean practices in the company and prepares the team to act; Kaizen Action™ ensures active team participation during improvement events and generates applicable solutions; and LeanBridge™ enhances the adoption of the operational discipline needed to sustain improvements. Meanwhile, StratBridge™ aligns changes with strategic objectives, turning initiatives into prioritized projects, while Lean Enterprise Transformation™ provides the framework to sustain and scale those changes during deep transformation processes.",
    relatedList: [
      {
        icon: Target,
        title: "WasteZero™",
        description:
          "Facilitates the acceptance of Lean practices in the company.",
      },
      {
        icon: Zap,
        title: "Kaizen Action™",
        description: "Ensures team participation during improvement events.",
      },
      {
        icon: GitBranch,
        title: "LeanBridge™",
        description:
          "Enhances the adoption of required operational discipline.",
      },
      {
        icon: Compass,
        title: "StratBridge™",
        description: "Helps align changes with strategic objectives.",
      },
      {
        icon: Building2,
        title: "Lean Enterprise Transformation™",
        description:
          "Essential to sustain changes during deep transformation processes.",
      },
    ],
  },
  pt: {
    clickForDetails: "Clique para mais detalhes",
    closeModal: "Fechar modal",
    whatIs: "O que é?",
    whatIsNot: "O que não é?",
    whatIsTitle: "O que é e o que não é?",
    whatIsSubtitle: "Definição clara do programa Change Bridge™",
    whatIsDescription:
      "É um programa prático e estruturado para ajudar as empresas a gerenciar de forma ordenada, clara e participativa os processos de mudança, garantindo que as equipes entendam, adotem e sustentem as transformações necessárias para a evolução do negócio.",
    whatIsList: [
      "Preparar-se para as mudanças.",
      "Minimizar resistências e riscos.",
      "Gerar comprometimento nas equipes.",
      "Alcançar resultados sustentáveis em cada transformação.",
    ],
    whatIsNotList: [
      "Um processo improvisado sem estrutura clara.",
      "Uma mudança imposta sem participação das equipes.",
      "Uma solução pontual sem acompanhamento contínuo.",
    ],
    problemsTitle: "Problemas que resolve",
    problemsSubtitle: "Desperdícios e desafios operacionais",
    problemsList: [
      {
        icon: MessageSquare,
        title: "Comunicação Deficiente",
        description: "Falta de clareza e comunicação em projetos.",
      },
      {
        icon: Users,
        title: "Alinhamento Falho",
        description:
          "Dificuldade para alinhar diferentes setores e atores em torno de um objetivo comum.",
      },
      {
        icon: Clock,
        title: "Disciplina Insuficiente",
        description:
          "Mudanças implementadas que depois são abandonadas por falta de disciplina.",
      },
      {
        icon: UserCheck,
        title: "Gestão Humana Inadequada",
        description:
          "Fracasso de projetos de melhoria por falta de gestão do fator humano.",
      },
      {
        icon: ShieldOff,
        title: "Resistência à Mudança",
        description:
          "Resistência das equipes em adotar novas formas de trabalho.",
      },
    ],
    methodologyTitle: "Metodologia & Tempos",
    methodologySubtitle:
      "Metodologia de 4 fases com duração típica de 8 a 12 semanas",
    methodologyDescription:
      "Os tempos se adaptam ao tamanho e complexidade do projeto; a implementação combina workshops presenciais, coaching e acompanhamento estruturado.",
    methodologySubDescription: "Modalidade de implementação:",
    methodologyDetails: [
      "Fase 1: Visão e avaliação inicial — definição do projeto, diagnóstico do estado atual vs futuro, equipe e KPIs.",
      "Fase 2: Análise estrutural — mapeamento de impactos, matriz de risco/contingências e identificação de atores-chave.",
      "Fase 3: Planos de gestão da mudança — gestão de atores, planos de comunicação e programas de formação.",
      "Fase 4: Implementação ativa e sustentabilidade — execução com coaching, acompanhamento e transformação da comunicação em processo.",
    ],
    benefitsTitle: "Benefícios",
    benefitsSubtitle: "Benefícios do programa Change Bridge™",
    benefitsList: [
      {
        icon: Target,
        title: "Alinhamento Estratégico",
        description:
          "Alinhamento claro entre os objetivos da mudança e as ações das equipes.",
      },
      {
        icon: Zap,
        title: "Implementação Ágil",
        description:
          "Maior velocidade e efetividade na implementação de projetos de transformação.",
      },
      {
        icon: Repeat,
        title: "Mudanças Sustentáveis",
        description: "Sustentabilidade das mudanças a longo prazo.",
      },
      {
        icon: ShieldCheck,
        title: "Gestão de Expectativas",
        description:
          "Minimização de resistências internas e gestão adequada de expectativas.",
      },
      {
        icon: MessageCircle,
        title: "Comunicação Estruturada",
        description:
          "Melhoria na comunicação estruturada e na disciplina operacional da equipe.",
      },
    ],
    recommendedTitle: "Para quem o programa é recomendado?",
    recommendedSubtitle: "Tipos de empresas ideais para Change Bridge™",
    recommendedTypes: "Tipos de Empresas",
    recommendedList: [
      {
        icon: Factory,
        title: "Empresas industriais ou de serviços",
        description:
          "Organizações industriais e de serviços que buscam melhorar sua eficiência e disciplina operacional.",
      },
      {
        icon: Users,
        title: "Intervenção integral em áreas com pessoas",
        description:
          "Áreas de trabalho com alta presença de pessoas onde é fundamental alinhar papéis, segurança e processos.",
      },
      {
        icon: Truck,
        title: "Setores de alto tráfego",
        description:
          "Áreas com alto tráfego, risco ou dispersão de materiais que requerem ordem, controle e redução de desperdícios.",
      },
      {
        icon: CheckCircle,
        title: "Organizações que buscam cultura de ordem",
        description:
          "Empresas que desejam fortalecer a cultura de ordem, segurança e eficiência para sustentar mudanças ao longo do tempo.",
      },
    ],
    relatedTitle: "Com quais outros produtos se relaciona?",
    relatedSubtitle: "",
    relatedDescription:
      "Estes produtos se complementam: WasteZero™ facilita a aceitação de práticas Lean na empresa e prepara a equipe para agir; Kaizen Action™ assegura a participação ativa das equipes durante eventos de melhoria e gera soluções aplicáveis; e LeanBridge™ potencializa a adoção da disciplina operacional necessária para sustentar as melhorias. Paralelamente, StratBridge™ alinha as mudanças com os objetivos estratégicos, transformando iniciativas em projetos priorizados, enquanto Lean Enterprise Transformation™ fornece o arcabouço para sustentar e escalar essas mudanças durante processos de transformação profunda.",
    relatedList: [
      {
        icon: Target,
        title: "WasteZero™",
        description: "Facilita a aceitação de práticas Lean na empresa.",
      },
      {
        icon: Zap,
        title: "Kaizen Action™",
        description:
          "Assegura a participação das equipes durante eventos de melhoria.",
      },
      {
        icon: GitBranch,
        title: "LeanBridge™",
        description:
          "Potencializa a adoção da disciplina operacional requerida.",
      },
      {
        icon: Compass,
        title: "StratBridge™",
        description: "Ajuda a alinhar mudanças com os objetivos estratégicos.",
      },
      {
        icon: Building2,
        title: "Lean Enterprise Transformation™",
        description:
          "Essencial para sustentar mudanças durante processos de transformação profunda.",
      },
    ],
  },
};

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

const Modal: React.FC<ModalProps & { lang: Language }> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  content,
  graphic,
  lang,
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
            aria-label={translations[lang].closeModal}
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
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: t.whatIsTitle,
      subtitle: t.whatIsSubtitle,
      children: (
        <>
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              {t.whatIsDescription}
            </p>
          </div>

          <div className="mb-6">
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
              {t.whatIs}
            </p>
            {t.whatIsList.map((detail, idx) => (
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
              {t.whatIsNot}
            </p>
            {t.whatIsNotList.map((detail, idx) => (
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
      title: t.problemsTitle,
      subtitle: t.problemsSubtitle,
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {t.problemsList.map((item, idx) => (
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
      title: t.methodologyTitle,
      subtitle: t.methodologySubtitle,
      description: t.methodologyDescription,
      subDescription: t.methodologySubDescription,
      graphic: <MethodologyGraphic />,
      details: t.methodologyDetails,
    },
    {
      id: "8",
      icon: HandCoins,
      title: t.benefitsTitle,
      subtitle: t.benefitsSubtitle,
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {t.benefitsList.map((item, idx) => (
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
      title: t.recommendedTitle,
      subtitle: t.recommendedSubtitle,
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
            {t.recommendedTypes}
          </h3>
          {t.recommendedList.map((feature, index) => (
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
      title: t.relatedTitle,
      subtitle: t.relatedSubtitle,
      description: t.relatedDescription,
      details: [],
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {t.relatedList.map((item, idx) => (
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
        lang={currentLanguage}
      />
    </div>
  );
};

export default ChangeBridgeContent;
