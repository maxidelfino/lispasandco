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
  HandCoins,
  CircleQuestionMark,
  FolderCog,
  BarChart2,
  BarChart3,
  Flag,
  Handshake,
  Lightbulb,
  Trash2,
  RefreshCw,
  PieChart,
} from "lucide-react";
import MethodologyGraphic from "./MethodologyGraphic";
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

const translations = {
  es: {
    clickForDetails: "Click para más detalles",
    closeModal: "Cerrar modal",
    features: [
      {
        id: "1",
        title: "¿Qué es y qué no es?",
        subtitle: "Definición clara del programa OpsBridge™",
        description:
          "OpsBridge™ es un programa diseñado para llevar a las empresas hacia un nivel superior de estandarización, control y eficiencia, transformando sus operaciones en sistemas de clase mundial. Es un proceso de transformación completa de la empresa bajo principios LEAN, de mediano/largo plazo, que abarca cultura, procesos, liderazgo, estrategia y estructuras de gestión. Permite profesionalizar la gestión, consolidar la disciplina operativa y liberar tiempo de los líderes, asegurando que la empresa funcione de forma estable y confiable, sin depender de la supervisión constante.",
        whatIs: "¿Qué es?",
        whatIsList: [
          "✔ Es un sistema estructurado para el desarrollo de personas.",
          "✔ Es una metodología que integra coaching, feedback con propósito y gestión de habilidades.",
          "✔ Es una forma práctica de acompañar el crecimiento técnico y general de los equipos.",
        ],
        whatIsNot: "¿Qué no es?",
        whatIsNotList: [
          "✘ No es un plan aislado del negocio ni una iniciativa de recursos humanos.",
          "✘ No es un ciclo de capacitaciones estándar ni un enfoque motivacional sin seguimiento.",
          "✘ No es una herramienta para evaluar personas desde lo subjetivo,",
        ],
      },
      {
        id: "2",
        title: "Problemas que resuelve",
        subtitle: "Principales problemas operativos que resuelve",
        problems: [
          {
            icon: FolderCog,
            title: "Falta de orden y estandarización",
            description: "Falta de orden y estandarización en procesos",
          },
          {
            icon: Users,
            title: "Dependencia de líderes",
            description: "Dependencia excesiva de líderes en el día a día.",
          },
          {
            icon: BarChart2,
            title: "Baja productividad y variabilidad",
            description: "Baja productividad y variabilidad en resultados.",
          },
          {
            icon: Flag,
            title: "Dificultad para sostener indicadores",
            description:
              "Dificultad para sostener indicadores de gestión y disciplina operativa.",
          },
          {
            icon: Target,
            title: "Falta de foco y priorización",
            description:
              "Falta de foco en la generación de valor y priorización de proyectos de mejora.",
          },
        ],
      },
      {
        id: "4",
        title: "Metodología & Tiempos",
        subtitle: "14 meses de implementación",
        description:
          "Durante los 14 meses de implementación, la empresa iniciará un camino ascendente de madurez que le permitirá posicionarse fuertemente en el mercado apoyándose en la mejora de su productividad y en la estabilización de sus procesos.",
        subDescription: "Modalidad de implementación:",
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
        title: "Beneficios",
        subtitle: "Beneficios del programa OpsBridge™",
        benefits: [
          {
            icon: Handshake,
            title: "Compromiso Individual",
            description:
              "Fortalece el compromiso individual a través de objetivos claros y retroalimentación efectiva.",
          },
          {
            icon: Users,
            title: "Roles y Responsabilidades Claras",
            description:
              "Mejora la asignación de roles y responsabilidades, basándose en evidencias de habilidades reales.",
          },
          {
            icon: BarChart3,
            title: "Cierre de Brechas de Habilidades",
            description:
              "Cierra brechas entre las necesidades de la operación y el perfil de las personas mediante capacitaciones a medida.",
          },
          {
            icon: Lightbulb,
            title: "Aprendizaje Continuo",
            description:
              "Genera un entorno de aprendizaje continuo, donde el desarrollo técnico y humano es parte del sistema operativo de la empresa.",
          },
          {
            icon: TrendingUp,
            title: "Crecimiento Sostenible",
            description:
              "Conecta el crecimiento personal con la mejora continua organizacional, aumentando la sostenibilidad de los resultados.",
          },
        ],
      },
      {
        id: "7",
        title: "¿Para quién está recomendado el programa?",
        subtitle: "Tipos de empresas ideales para OpsBridge™",
        description:
          "Este programa está diseñado para organizaciones que desean desarrollar el potencial de sus equipos de manera estructurada, integrando el crecimiento técnico con el fortalecimiento de habilidades generales. Es ideal para líderes operativos, responsables de gestión de talento, mandos medios y técnicos clave que necesitan acompañamiento, dirección y evolución continua para sostener resultados y prepararse para nuevos desafíos",
      },
      {
        id: "5",
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "Integración y profundización con el ecosistema LYSPAS & CO",
        description:
          "OpsBridge™ tien relación con todos los demás productos de LYSPAS & CO  buscando profundizar cada concepto o técnica ya desarrollada.  Igualmente la metodología de implementación permite aborar algunos temas desde cero.",
        relatedProducts: [
          {
            icon: Trash2,
            title: "WasteZero™",
            description: "(Reducción de desperdicios).",
          },
          {
            icon: RefreshCw,
            title: "FlowStable™",
            description: "(Estabilidad de procesos).",
          },
          {
            icon: BarChart2,
            title: "StratBridge™",
            description: "(Alineamiento con planificación estratégica).",
          },
          {
            icon: Settings,
            title: "LeanBridge™",
            description: "(Estructura y cultura Lean).",
          },
          {
            icon: PieChart,
            title: "Decisiones Gerenciales Basadas en Estadísticas™",
            description: "Uso de datos para decisiones).",
          },
        ],
      },
    ],
  },
  en: {
    clickForDetails: "Click for more details",
    closeModal: "Close modal",
    features: [
      {
        id: "1",
        title: "What is it and what is it not?",
        subtitle: "Clear definition of the OpsBridge™ program",
        description:
          "OpsBridge™ is a program designed to take companies to a higher level of standardization, control, and efficiency, transforming their operations into world-class systems. It is a comprehensive transformation process based on LEAN principles, medium/long term, that encompasses culture, processes, leadership, strategy, and management structures. It enables professional management, consolidates operational discipline, and frees up leaders' time, ensuring the company operates in a stable and reliable way, without the need for constant supervision.",
        whatIs: "What is it?",
        whatIsList: [
          "✔ It is a structured system for people development.",
          "✔ It is a methodology that integrates coaching, purposeful feedback, and skills management.",
          "✔ It is a practical way to support the technical and general growth of teams.",
        ],
        whatIsNot: "What is it not?",
        whatIsNotList: [
          "✘ It is not a plan isolated from the business nor a human resources initiative.",
          "✘ It is not a standard training cycle nor a motivational approach without follow-up.",
          "✘ It is not a tool to evaluate people subjectively.",
        ],
      },
      {
        id: "2",
        title: "Problems it solves",
        subtitle: "Main operational problems it solves",
        problems: [
          {
            icon: FolderCog,
            title: "Lack of order and standardization",
            description: "Lack of order and standardization in processes.",
          },
          {
            icon: Users,
            title: "Leader dependency",
            description: "Excessive dependence on leaders in daily operations.",
          },
          {
            icon: BarChart2,
            title: "Low productivity and variability",
            description: "Low productivity and variability in results.",
          },
          {
            icon: Flag,
            title: "Difficulty sustaining indicators",
            description:
              "Difficulty sustaining management indicators and operational discipline.",
          },
          {
            icon: Target,
            title: "Lack of focus and prioritization",
            description:
              "Lack of focus on value generation and prioritization of improvement projects.",
          },
        ],
      },
      {
        id: "4",
        title: "Methodology & Timeline",
        subtitle: "14 months of implementation",
        description:
          "During the 14 months of implementation, the company will begin an upward path of maturity that will allow it to position itself strongly in the market, relying on improved productivity and process stabilization.",
        subDescription: "Implementation modality:",
        details: [
          "Duration: 14 months of active implementation.",
          "Start with a quick scan to survey processes, data, and identify improvement opportunities.",
          "Weekly on-site implementation, with daily virtual support during the first months.",
          "Training in waste reduction, 6 Sigma, and problem solving in company (on-site, not virtual) as an introduction to continuous improvement.",
          "Definition of metrics, objectives, and control dashboards. Start of process stabilization stage.",
          "Creation of follow-up routines and establishment of 'Change Agents' roles who will be the eyes of the system.",
          "Strategic planning and generation of improvement projects.",
          "Integration of continuous improvement with specific areas (Maintenance, Quality, etc).",
          "Follow-up audits and retrospective practices on site.",
          "On-site support during part of the implementation. The rest of the follow-up is weekly and virtual.",
        ],
      },
      {
        id: "8",
        title: "Benefits",
        subtitle: "Benefits of the OpsBridge™ program",
        benefits: [
          {
            icon: Handshake,
            title: "Individual Commitment",
            description:
              "Strengthens individual commitment through clear objectives and effective feedback.",
          },
          {
            icon: Users,
            title: "Clear Roles and Responsibilities",
            description:
              "Improves the assignment of roles and responsibilities, based on evidence of real skills.",
          },
          {
            icon: BarChart3,
            title: "Closing Skill Gaps",
            description:
              "Closes gaps between operational needs and people's profiles through tailored training.",
          },
          {
            icon: Lightbulb,
            title: "Continuous Learning",
            description:
              "Creates a continuous learning environment, where technical and human development is part of the company's operating system.",
          },
          {
            icon: TrendingUp,
            title: "Sustainable Growth",
            description:
              "Connects personal growth with organizational continuous improvement, increasing the sustainability of results.",
          },
        ],
      },
      {
        id: "7",
        title: "Who is the program recommended for?",
        subtitle: "Ideal types of companies for OpsBridge™",
        description:
          "This program is designed for organizations that want to develop the potential of their teams in a structured way, integrating technical growth with the strengthening of general skills. It is ideal for operational leaders, talent management professionals, middle managers, and key technical staff who need support, direction, and ongoing development to sustain results and prepare for new challenges.",
      },
      {
        id: "5",
        title: "Which other products is it related to?",
        subtitle: "Integration and deepening with the LYSPAS & CO ecosystem",
        description:
          "OpsBridge™ is related to all other LYSPAS & CO products, seeking to deepen each concept or technique already developed. The implementation methodology also allows some topics to be addressed from scratch.",
        relatedProducts: [
          {
            icon: Trash2,
            title: "WasteZero™",
            description: "(Waste reduction).",
          },
          {
            icon: RefreshCw,
            title: "FlowStable™",
            description: "(Process stability).",
          },
          {
            icon: BarChart2,
            title: "StratBridge™",
            description: "(Alignment with strategic planning).",
          },
          {
            icon: Settings,
            title: "LeanBridge™",
            description: "(Lean structure and culture).",
          },
          {
            icon: PieChart,
            title: "Statistics-Based Managerial Decisions™",
            description: "(Data-driven decision making).",
          },
        ],
      },
    ],
  },
  pt: {
    clickForDetails: "Clique para mais detalhes",
    closeModal: "Fechar modal",
    features: [
      {
        id: "1",
        title: "O que é e o que não é?",
        subtitle: "Definição clara do programa OpsBridge™",
        description:
          "OpsBridge™ é um programa desenhado para levar as empresas a um nível superior de padronização, controle e eficiência, transformando suas operações em sistemas de classe mundial. É um processo de transformação completa da empresa sob princípios LEAN, de médio/longo prazo, que abrange cultura, processos, liderança, estratégia e estruturas de gestão. Permite profissionalizar a gestão, consolidar a disciplina operacional e liberar tempo dos líderes, garantindo que a empresa funcione de forma estável e confiável, sem depender de supervisão constante.",
        whatIs: "O que é?",
        whatIsList: [
          "✔ É um sistema estruturado para o desenvolvimento de pessoas.",
          "✔ É uma metodologia que integra coaching, feedback com propósito e gestão de habilidades.",
          "✔ É uma forma prática de acompanhar o crescimento técnico e geral das equipes.",
        ],
        whatIsNot: "O que não é?",
        whatIsNotList: [
          "✘ Não é um plano isolado do negócio nem uma iniciativa de recursos humanos.",
          "✘ Não é um ciclo de treinamentos padrão nem um enfoque motivacional sem acompanhamento.",
          "✘ Não é uma ferramenta para avaliar pessoas de forma subjetiva.",
        ],
      },
      {
        id: "2",
        title: "Problemas que resolve",
        subtitle: "Principais problemas operacionais que resolve",
        problems: [
          {
            icon: FolderCog,
            title: "Falta de ordem e padronização",
            description: "Falta de ordem e padronização nos processos.",
          },
          {
            icon: Users,
            title: "Dependência de líderes",
            description: "Dependência excessiva de líderes no dia a dia.",
          },
          {
            icon: BarChart2,
            title: "Baixa produtividade e variabilidade",
            description: "Baixa produtividade e variabilidade nos resultados.",
          },
          {
            icon: Flag,
            title: "Dificuldade para manter indicadores",
            description:
              "Dificuldade para manter indicadores de gestão e disciplina operacional.",
          },
          {
            icon: Target,
            title: "Falta de foco e priorização",
            description:
              "Falta de foco na geração de valor e priorização de projetos de melhoria.",
          },
        ],
      },
      {
        id: "4",
        title: "Metodologia & Prazos",
        subtitle: "14 meses de implementação",
        description:
          "Durante os 14 meses de implementação, a empresa iniciará um caminho ascendente de maturidade que permitirá posicionar-se fortemente no mercado apoiando-se na melhoria da produtividade e na estabilização dos processos.",
        subDescription: "Modalidade de implementação:",
        details: [
          "Duração: 14 meses de implementação ativa.",
          "Início com escaneamento rápido para levantar processos, dados e identificar oportunidades de melhoria.",
          "Implementação presencial semanal, com suporte virtual diário durante os primeiros meses.",
          "Capacitação em Redução de desperdícios, 6 Sigma e resolução de problemas in company (no local, não virtual) como introdução ao mundo da melhoria contínua.",
          "Definição de métricas, objetivos e painéis de controle. Início da etapa de estabilização de processos.",
          "Criação de rotinas de acompanhamento e estabelecimento de papéis de 'Agentes de Mudança' que serão os olhos do sistema.",
          "Planejamento estratégico e geração de projetos de melhoria.",
          "Integração da melhoria contínua com áreas específicas (Manutenção, Qualidade, etc).",
          "Auditorias de acompanhamento e práticas retrospectivas no local.",
          "Acompanhamento presencial durante parte da implementação. O restante do acompanhamento é semanal e virtual.",
        ],
      },
      {
        id: "8",
        title: "Benefícios",
        subtitle: "Benefícios do programa OpsBridge™",
        benefits: [
          {
            icon: Handshake,
            title: "Compromisso Individual",
            description:
              "Fortalece o compromisso individual por meio de objetivos claros e feedback efetivo.",
          },
          {
            icon: Users,
            title: "Papéis e Responsabilidades Claras",
            description:
              "Melhora a atribuição de papéis e responsabilidades, com base em evidências de habilidades reais.",
          },
          {
            icon: BarChart3,
            title: "Fechamento de Lacunas de Habilidades",
            description:
              "Fecha lacunas entre as necessidades da operação e o perfil das pessoas por meio de treinamentos sob medida.",
          },
          {
            icon: Lightbulb,
            title: "Aprendizado Contínuo",
            description:
              "Gera um ambiente de aprendizado contínuo, onde o desenvolvimento técnico e humano faz parte do sistema operacional da empresa.",
          },
          {
            icon: TrendingUp,
            title: "Crescimento Sustentável",
            description:
              "Conecta o crescimento pessoal com a melhoria contínua organizacional, aumentando a sustentabilidade dos resultados.",
          },
        ],
      },
      {
        id: "7",
        title: "Para quem o programa é recomendado?",
        subtitle: "Tipos de empresas ideais para OpsBridge™",
        description:
          "Este programa é destinado a organizações que desejam desenvolver o potencial de suas equipes de forma estruturada, integrando o crescimento técnico com o fortalecimento de habilidades gerais. É ideal para líderes operacionais, responsáveis pela gestão de talentos, gestores intermediários e técnicos-chave que necessitam de acompanhamento, direção e evolução contínua para sustentar resultados e se preparar para novos desafios.",
      },
      {
        id: "5",
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Integração e aprofundamento com o ecossistema LYSPAS & CO",
        description:
          "OpsBridge™ tem relação com todos os demais produtos da LYSPAS & CO, buscando aprofundar cada conceito ou técnica já desenvolvida. A metodologia de implementação também permite abordar alguns temas do zero.",
        relatedProducts: [
          {
            icon: Trash2,
            title: "WasteZero™",
            description: "(Redução de desperdícios).",
          },
          {
            icon: RefreshCw,
            title: "FlowStable™",
            description: "(Estabilidade de processos).",
          },
          {
            icon: BarChart2,
            title: "StratBridge™",
            description: "(Alinhamento com planejamento estratégico).",
          },
          {
            icon: Settings,
            title: "LeanBridge™",
            description: "(Estrutura e cultura Lean).",
          },
          {
            icon: PieChart,
            title: "Decisões Gerenciais Baseadas em Estatísticas™",
            description: "(Uso de dados para decisões).",
          },
        ],
      },
    ],
  },
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
  const { currentLanguage } = useLanguage();

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
            aria-label={translations[currentLanguage].closeModal}
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
  const { currentLanguage } = useLanguage();

  // Get translations for current language
  const t = translations[currentLanguage as Language];

  // Build features array dynamically based on language
  const features = t.features.map((feature) => {
    if (feature.id === "1") {
      return {
        ...feature,
        icon: CircleQuestionMark,
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                {feature.description}
              </p>
            </div>
            {/* Details */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                {feature.whatIs}
              </p>
              {feature.whatIsList?.map((detail, idx) => (
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
                {feature.whatIsNot}
              </p>
              {feature.whatIsNotList?.map((detail, idx) => (
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
      };
    }
    if (feature.id === "2") {
      return {
        ...feature,
        icon: Zap,
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {feature.problems?.map((item: any, idx: number) => (
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
      };
    }
    if (feature.id === "4") {
      return {
        ...feature,
        icon: Clock,
        graphic: <MethodologyGraphic />,
      };
    }
    if (feature.id === "5") {
      return {
        ...feature,
        icon: Zap,
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {feature.relatedProducts?.map((item: any, idx: number) => (
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
      };
    }
    if (feature.id === "8") {
      return {
        ...feature,
        icon: HandCoins,
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {feature.benefits?.map((item: any, idx: number) => (
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
      };
    }
    if (feature.id === "7") {
      return {
        ...feature,
        icon: Users,
      };
    }
    return feature;
  });

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
            const Icon = (feature as any).icon;
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

export default OpsBridgeContent;
