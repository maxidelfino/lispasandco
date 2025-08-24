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
          "OpsBridge™ es un programa diseñado para llevar a las empresas hacia un nivel superior de estandarización, control y eficiencia, transformando sus operaciones en sistemas de clase mundial. Es un proceso de transformación integral bajo principios LEAN, de mediano/largo plazo, que abarca cultura, procesos, liderazgo, estrategia y estructuras de gestión. Permite profesionalizar la gestión, consolidar la disciplina operativa y liberar tiempo de los líderes, asegurando que la empresa funcione de forma estable y confiable, sin depender de la supervisión constante.",
        whatIs: "¿Qué es?",
        whatIsList: [
          "✔ Un programa de transformación integral para empresas con base en mejora continua, que buscan alcanzar estándares de clase mundial.",
          "✔ Un proceso que profesionaliza la gestión, consolida la disciplina operativa y libera tiempo de los líderes.",
          "✔ Una iniciativa que abarca cultura, procesos, liderazgo, estrategia y estructuras de gestión bajo principios LEAN.",
          "✔ El siguiente paso para organizaciones que ya han iniciado su camino Lean y desean avanzar hacia la excelencia operacional.",
        ],
        whatIsNot: "¿Qué no es?",
        whatIsNotList: [
          "✘ Un programa básico de capacitación o mejora puntual.",
          "✘ Una solución rápida o parcial que no aborda la cultura y la gestión de fondo.",
          "✘ Un sistema que depende de la supervisión constante o de esfuerzos individuales aislados.",
          "✘ Un enfoque limitado solo a procesos, sin integrar liderazgo, estrategia y cultura.",
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
        ],
      },
      {
        id: "7",
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
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "Integración y profundización con el ecosistema LYSPAS & CO",
        description:
          "OpsBridge™ tien relación con todos los demás productos de LYSPAS & CO  buscando profundizar cada concepto o técnica ya desarrollada.  Igualmente la metodología de implementación permite aborar algunos temas desde cero.",
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
          "OpsBridge™ is a program designed to take companies to a higher level of standardization, control, and efficiency, transforming their operations into world-class systems. It is a comprehensive transformation process under LEAN principles, medium/long term, covering culture, processes, leadership, strategy, and management structures. It professionalizes management, consolidates operational discipline, and frees up leaders' time, ensuring the company operates stably and reliably, without constant supervision.",
        whatIs: "What is it?",
        whatIsList: [
          "✔ A comprehensive transformation program for companies based on continuous improvement, seeking to reach world-class standards.",
          "✔ A process that professionalizes management, consolidates operational discipline, and frees up leaders' time.",
          "✔ An initiative that covers culture, processes, leadership, strategy, and management structures under LEAN principles.",
          "✔ The next step for organizations that have already started their Lean journey and want to move towards operational excellence.",
        ],
        whatIsNot: "What is it not?",
        whatIsNotList: [
          "✘ A basic training or one-off improvement program.",
          "✘ A quick or partial solution that does not address culture and management in depth.",
          "✘ A system that depends on constant supervision or isolated individual efforts.",
          "✘ An approach limited only to processes, without integrating leadership, strategy, and culture.",
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
            title: "Dependence on leaders",
            description: "Excessive dependence on leaders in daily operations.",
          },
          {
            icon: TrendingDown,
            title: "Low productivity and variability",
            description: "Low productivity and variability in results.",
          },
          {
            icon: BarChart2,
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
            icon: Settings,
            title: "Standardization and Variability Reduction",
            description:
              "Standardization of key processes and reduction of variability.",
          },
          {
            icon: TrendingUp,
            title: "Productivity and Operational Efficiency",
            description: "Increased productivity and operational efficiency.",
          },
          {
            icon: BarChart3,
            title: "Data-Driven Management",
            description:
              "Consolidation of a management system that facilitates data-driven decision making.",
          },
          {
            icon: Award,
            title: "Preparation for World Class",
            description:
              "Preparation of the company to move towards World Class levels of operation.",
          },
          {
            icon: CalendarCheck,
            title: "Management Routines and Results Focus",
            description:
              "Generation of daily, weekly, and monthly management routines focused on results.",
          },
        ],
      },
      {
        id: "7",
        title: "Who is the program recommended for?",
        subtitle: "Ideal types of companies for OpsBridge™",
        description:
          "The program is designed for industrial or service companies that need to develop a comprehensive continuous improvement system with the participation of all sectors. Especially recommended for those that need to certify World Class Operation for their clients.",
        details: [
          "Industrial or service companies seeking a cross-functional continuous improvement system.",
          "Organizations that need the active participation of all sectors in improvement.",
          "Companies that must certify World Class Operation for their clients.",
          "Sectors that want to professionalize management and reach international standards.",
        ],
      },
      {
        id: "5",
        title: "Which other products is it related to?",
        subtitle: "Integration and deepening with the LYSPAS & CO ecosystem",
        description:
          "OpsBridge™ is related to all other LYSPAS & CO products, seeking to deepen each concept or technique already developed. The implementation methodology also allows some topics to be addressed from scratch.",
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
          "OpsBridge™ é um programa projetado para levar as empresas a um nível superior de padronização, controle e eficiência, transformando suas operações em sistemas de classe mundial. É um processo de transformação integral sob princípios LEAN, de médio/longo prazo, que abrange cultura, processos, liderança, estratégia e estruturas de gestão. Permite profissionalizar a gestão, consolidar a disciplina operacional e liberar tempo dos líderes, garantindo que a empresa funcione de forma estável e confiável, sem depender de supervisão constante.",
        whatIs: "O que é?",
        whatIsList: [
          "✔ Um programa de transformação integral para empresas com base em melhoria contínua, que buscam alcançar padrões de classe mundial.",
          "✔ Um processo que profissionaliza a gestão, consolida a disciplina operacional e libera tempo dos líderes.",
          "✔ Uma iniciativa que abrange cultura, processos, liderança, estratégia e estruturas de gestão sob princípios LEAN.",
          "✔ O próximo passo para organizações que já iniciaram seu caminho Lean e desejam avançar para a excelência operacional.",
        ],
        whatIsNot: "O que não é?",
        whatIsNotList: [
          "✘ Um programa básico de capacitação ou melhoria pontual.",
          "✘ Uma solução rápida ou parcial que não aborda a cultura e a gestão de fundo.",
          "✘ Um sistema que depende de supervisão constante ou de esforços individuais isolados.",
          "✘ Uma abordagem limitada apenas a processos, sem integrar liderança, estratégia e cultura.",
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
            icon: TrendingDown,
            title: "Baixa produtividade e variabilidade",
            description: "Baixa produtividade e variabilidade nos resultados.",
          },
          {
            icon: BarChart2,
            title: "Dificuldade em manter indicadores",
            description:
              "Dificuldade em manter indicadores de gestão e disciplina operacional.",
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
            icon: Settings,
            title: "Padronização e Redução de Variabilidade",
            description:
              "Padronização de processos-chave e redução de variabilidade.",
          },
          {
            icon: TrendingUp,
            title: "Produtividade e Eficiência Operacional",
            description: "Aumento da produtividade e eficiência operacional.",
          },
          {
            icon: BarChart3,
            title: "Gestão Baseada em Dados",
            description:
              "Consolidação de um sistema de gestão que facilita a tomada de decisões baseadas em dados.",
          },
          {
            icon: Award,
            title: "Preparação para World Class",
            description:
              "Preparação da empresa para avançar para níveis World Class de operação.",
          },
          {
            icon: CalendarCheck,
            title: "Rotinas de Gestão e Foco em Resultados",
            description:
              "Geração de rotinas de gestão diária, semanal e mensal com foco em resultados.",
          },
        ],
      },
      {
        id: "7",
        title: "Para quem o programa é recomendado?",
        subtitle: "Tipos de empresas ideais para OpsBridge™",
        description:
          "O programa é projetado para empresas industriais ou de serviços que precisam desenvolver um sistema integral de melhoria contínua com a participação de todos os setores. Especialmente recomendado para aquelas que precisam certificar World Class Operation para seus clientes.",
        details: [
          "Empresas industriais ou de serviços que buscam um sistema de melhoria contínua transversal.",
          "Organizações que precisam da participação ativa de todos os setores na melhoria.",
          "Empresas que devem certificar World Class Operation para seus clientes.",
          "Setores que desejam profissionalizar a gestão e alcançar padrões internacionais.",
        ],
      },
      {
        id: "5",
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Integração e aprofundamento com o ecossistema LYSPAS & CO",
        description:
          "OpsBridge™ tem relação com todos os demais produtos da LYSPAS & CO, buscando aprofundar cada conceito ou técnica já desenvolvida. A metodologia de implementação também permite abordar alguns temas do zero.",
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
    if (feature.id === "5") {
      return {
        ...feature,
        icon: Settings,
        graphic: <ConnectionsGraphic title="OpsBridge™" />,
        details: [],
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
