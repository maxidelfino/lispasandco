"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  CircleQuestionMark,
  Clock,
  X,
  Users,
  Settings,
  GraduationCap,
  Grid3x3,
  Sparkles,
  Zap,
  Box,
  RefreshCcw,
  HandCoins,
  AlertTriangle,
  BarChart2,
  FileWarning,
  ListChecks,
  HelpCircle,
  DivideSquare,
} from "lucide-react";
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
  clickForDetails: {
    es: "Click para más detalles",
    en: "Click for more details",
    pt: "Clique para mais detalhes",
  },
  closeModal: {
    es: "Cerrar modal",
    en: "Close modal",
    pt: "Fechar modal",
  },
  // Features
  features: [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: {
        es: "¿Qué es y qué no es?",
        en: "What is it and what is it not?",
        pt: "O que é e o que não é?",
      },
      subtitle: {
        es: "Características del programa Measure Bridge™",
        en: "Features of the Measure Bridge™ program",
        pt: "Características do programa Measure Bridge™",
      },
      children: {
        es: (
          <>
            {/* Descripción principal */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                Es un programa diseñado para mejorar la precisión, la
                confiabilidad y el valor general (incluido el impacto financiero
                medible) de los sistemas de control de calidad en entornos
                industriales.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Integra prácticas estadísticas, metodologías de muestreo,
                calibración de equipos y resolución estructurada de problemas
                para transformar los sistemas analíticos en soluciones
                inteligentes para la gestión de la eficiencia y la mejora
                continua
              </p>
            </div>
            {/* Cita inspiradora */}
            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              “Lo que no se mide, no se puede mejorar. Measure Bridge es el
              puente entre la intención de mejorar y la evidencia de la mejora.”
            </blockquote>
            {/* ¿Qué es? */}
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                ¿Qué es?
              </p>
              {[
                "Un sistema integral para medir y visualizar el avance de la mejora continua.",
                "Una herramienta que conecta los objetivos estratégicos con los resultados operativos.",
                "Un método que promueve la gestión basada en hechos y datos objetivos.",
                "Un facilitador para la alineación y el compromiso de los equipos en torno a metas comunes.",
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
            {/* ¿Qué no es? */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                ¿Qué no es?
              </p>
              {[
                "Solo un tablero de indicadores sin contexto ni seguimiento.",
                "Una herramienta aislada de la gestión diaria.",
                "Un sistema rígido que no se adapta a las necesidades de la organización.",
                "Un reemplazo de la gestión, sino un complemento para potenciarla.",
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
        en: (
          <>
            {/* Main description */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                It is a program designed to improve the accuracy, reliability,
                and overall value (including measurable financial impact) of
                quality control systems in industrial environments.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                It integrates statistical practices, sampling methodologies,
                equipment calibration, and structured problem-solving to
                transform analytical systems into intelligent solutions for
                efficiency management and continuous improvement.
              </p>
            </div>
            {/* Inspirational quote */}
            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              “What is not measured cannot be improved. Measure Bridge is the
              bridge between the intention to improve and the evidence of
              improvement.”
            </blockquote>
            {/* What is it? */}
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                What is it?
              </p>
              {[
                "A comprehensive system to measure and visualize the progress of continuous improvement.",
                "A tool that connects strategic objectives with operational results.",
                "A method that promotes management based on facts and objective data.",
                "A facilitator for team alignment and commitment around common goals.",
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
            {/* What is it not? */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                What is it not?
              </p>
              {[
                "Just a dashboard of indicators without context or follow-up.",
                "A tool isolated from daily management.",
                "A rigid system that does not adapt to the organization's needs.",
                "A replacement for management, but rather a complement to enhance it.",
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
        pt: (
          <>
            {/* Descrição principal */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                É um programa projetado para melhorar a precisão, a
                confiabilidade e o valor geral (incluindo o impacto financeiro
                mensurável) dos sistemas de controle de qualidade em ambientes
                industriais.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Integra práticas estatísticas, metodologias de amostragem,
                calibração de equipamentos e resolução estruturada de problemas
                para transformar os sistemas analíticos em soluções inteligentes
                para a gestão da eficiência e a melhoria contínua.
              </p>
            </div>
            {/* Citação inspiradora */}
            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              “O que não é medido não pode ser melhorado. Measure Bridge é a
              ponte entre a intenção de melhorar e a evidência da melhoria.”
            </blockquote>
            {/* O que é? */}
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                O que é?
              </p>
              {[
                "Um sistema abrangente para medir e visualizar o progresso da melhoria contínua.",
                "Uma ferramenta que conecta objetivos estratégicos com resultados operacionais.",
                "Um método que promove a gestão baseada em fatos e dados objetivos.",
                "Um facilitador para o alinhamento e o compromisso das equipes em torno de metas comuns.",
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
            {/* O que não é? */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                O que não é?
              </p>
              {[
                "Apenas um painel de indicadores sem contexto ou acompanhamento.",
                "Uma ferramenta isolada da gestão diária.",
                "Um sistema rígido que não se adapta às necessidades da organização.",
                "Um substituto da gestão, mas sim um complemento para potencializá-la.",
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
    },
    {
      id: "2",
      icon: Zap,
      title: {
        es: "Problemas que resuelve",
        en: "Problems it solves",
        pt: "Problemas que resolve",
      },
      subtitle: {
        es: "Los desafíos operativos",
        en: "Operational challenges",
        pt: "Desafios operacionais",
      },
      children: {
        es: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Variación de calidad",
                description:
                  "Variación inexplicable en los resultados de calidad.",
              },
              {
                icon: BarChart2,
                title: "Valores atípicos y picos",
                description:
                  "Reducción de valores atípicos y picos de proceso.",
              },
              {
                icon: FileWarning,
                title: "Decisiones erróneas",
                description: "Toma de decisiones basada en datos erróneos.",
              },
              {
                icon: ListChecks,
                title: "Criterios de muestreo",
                description: "Falta de criterios en los métodos de muestreo.",
              },
              {
                icon: HelpCircle,
                title: "Fiabilidad del sistema",
                description:
                  "Incertidumbre en la fiabilidad del sistema de medición.",
              },
              {
                icon: DivideSquare,
                title: "Desvíos laboratorio/planta",
                description:
                  "Diferencias entre los datos de laboratorio y el rendimiento de planta.",
              },
              {
                icon: RefreshCcw,
                title: "Mantenimiento reactivo",
                description:
                  "Mantenimiento reactivo de equipos de medición en línea.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${idx === 6 ? "col-span-2" : ""}
                `}
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
        en: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Quality variation",
                description: "Unexplained variation in quality results.",
              },
              {
                icon: BarChart2,
                title: "Outliers and peaks",
                description: "Reduction of outliers and process peaks.",
              },
              {
                icon: FileWarning,
                title: "Wrong decisions",
                description: "Decision making based on erroneous data.",
              },
              {
                icon: ListChecks,
                title: "Sampling criteria",
                description: "Lack of criteria in sampling methods.",
              },
              {
                icon: HelpCircle,
                title: "System reliability",
                description:
                  "Uncertainty in the reliability of the measurement system.",
              },
              {
                icon: DivideSquare,
                title: "Lab/plant deviations",
                description:
                  "Differences between laboratory data and plant performance.",
              },
              {
                icon: RefreshCcw,
                title: "Reactive maintenance",
                description:
                  "Reactive maintenance of online measurement equipment.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${idx === 6 ? "col-span-2" : ""}
                `}
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
        pt: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Variação de qualidade",
                description:
                  "Variação inexplicável nos resultados de qualidade.",
              },
              {
                icon: BarChart2,
                title: "Valores atípicos e picos",
                description: "Redução de valores atípicos e picos de processo.",
              },
              {
                icon: FileWarning,
                title: "Decisões erradas",
                description: "Tomada de decisões baseada em dados errados.",
              },
              {
                icon: ListChecks,
                title: "Critérios de amostragem",
                description: "Falta de critérios nos métodos de amostragem.",
              },
              {
                icon: HelpCircle,
                title: "Confiabilidade do sistema",
                description:
                  "Incerteza na confiabilidade do sistema de medição.",
              },
              {
                icon: DivideSquare,
                title: "Desvios laboratório/planta",
                description:
                  "Diferenças entre os dados de laboratório e o desempenho da planta.",
              },
              {
                icon: RefreshCcw,
                title: "Manutenção reativa",
                description:
                  "Manutenção reativa de equipamentos de medição online.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${idx === 6 ? "col-span-2" : ""}
                `}
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
    },
    {
      id: "4",
      icon: Clock,
      title: {
        es: "Metodología & Tiempos",
        en: "Methodology & Timeline",
        pt: "Metodologia & Cronograma",
      },
      subtitle: {
        es: "Metodología y calendario",
        en: "Methodology and schedule",
        pt: "Metodologia e cronograma",
      },
      children: {
        es: (
          <div>
            {/* Description */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                El programa <strong>Measure Bridge™</strong> se adapta a cada
                contexto, con fases de diagnóstico, diseño, implementación y
                capacitación. Se puede implementar en ciclos de{" "}
                <strong>3 a 6 meses</strong>, con entregables medibles desde el
                primer mes.
              </p>
            </div>
            {/* Details */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                Fases principales:
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                {[
                  "Diagnóstico: relevamiento y análisis de la situación actual.",
                  "Diseño: definición de objetivos, indicadores y plan de acción.",
                  "Implementación: ejecución de mejoras y herramientas en campo.",
                  "Capacitación: formación práctica y acompañamiento al equipo.",
                  "Seguimiento: medición de avances y ajustes continuos.",
                ].map((fase, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 p-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
                    <span className="text-[var(--color-text)] leading-relaxed flex-1">
                      {fase}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[var(--color-text)] leading-relaxed text-md mt-4">
                La duración y el calendario se ajustan a las necesidades de cada
                organización, permitiendo resultados visibles y medibles desde
                el primer mes.
              </p>
            </div>
          </div>
        ),
        en: (
          <div>
            {/* Description */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                The <strong>Measure Bridge™</strong> program adapts to each
                context, with phases of diagnosis, design, implementation, and
                training. It can be implemented in cycles of{" "}
                <strong>3 to 6 months</strong>, with measurable deliverables
                from the first month.
              </p>
            </div>
            {/* Details */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                Main phases:
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                {[
                  "Diagnosis: survey and analysis of the current situation.",
                  "Design: definition of objectives, indicators, and action plan.",
                  "Implementation: execution of improvements and tools in the field.",
                  "Training: practical training and team support.",
                  "Follow-up: measurement of progress and continuous adjustments.",
                ].map((fase, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 p-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
                    <span className="text-[var(--color-text)] leading-relaxed flex-1">
                      {fase}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[var(--color-text)] leading-relaxed text-md mt-4">
                The duration and schedule are adjusted to the needs of each
                organization, allowing visible and measurable results from the
                first month.
              </p>
            </div>
          </div>
        ),
        pt: (
          <div>
            {/* Descrição */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                O programa <strong>Measure Bridge™</strong> se adapta a cada
                contexto, com fases de diagnóstico, design, implementação e
                treinamento. Pode ser implementado em ciclos de{" "}
                <strong>3 a 6 meses</strong>, com entregáveis mensuráveis desde
                o primeiro mês.
              </p>
            </div>
            {/* Detalhes */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                Fases principais:
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                {[
                  "Diagnóstico: levantamento e análise da situação atual.",
                  "Design: definição de objetivos, indicadores e plano de ação.",
                  "Implementação: execução de melhorias e ferramentas em campo.",
                  "Treinamento: formação prática e acompanhamento da equipe.",
                  "Acompanhamento: medição de avanços e ajustes contínuos.",
                ].map((fase, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 p-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
                    <span className="text-[var(--color-text)] leading-relaxed flex-1">
                      {fase}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[var(--color-text)] leading-relaxed text-md mt-4">
                A duração e o cronograma são ajustados às necessidades de cada
                organização, permitindo resultados visíveis e mensuráveis desde
                o primeiro mês.
              </p>
            </div>
          </div>
        ),
      },
    },
    {
      id: "3",
      icon: HandCoins,
      title: {
        es: "Beneficios",
        en: "Benefits",
        pt: "Benefícios",
      },
      subtitle: {
        es: "Beneficios del programa Measure Bridge™",
        en: "Benefits of the Measure Bridge™ program",
        pt: "Benefícios do programa Measure Bridge™",
      },
      children: {
        es: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Precisión en el análisis",
                description: "Reducción de errores de análisis.",
              },
              {
                icon: Grid3x3,
                title: "Trazabilidad de datos",
                description: "Mejora de la trazabilidad de los datos.",
              },
              {
                icon: XCircle,
                title: "Eliminación de pérdidas",
                description: "Reducción de pérdidas ocultas.",
              },
              {
                icon: Users,
                title: "Alineación de equipos",
                description:
                  "Mayor alineación entre laboratorio, producción y mantenimiento.",
              },
              {
                icon: GraduationCap,
                title: "Independencia técnica",
                description:
                  "Reducción de la dependencia de expertos externos.",
              },
              {
                icon: Sparkles,
                title: "Cultura de mejora continua",
                description:
                  "Cultura de mejora continua basada en datos reales.",
              },
              {
                icon: Box,
                title: "Optimización de recursos",
                description:
                  "Optimización de la gestión de repuestos y recursos técnicos clave.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${index === 6 ? "col-span-2" : ""}
                `}
              >
                <div className="text-4xl mb-4 flex gap-4">
                  <feature.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[var(--color-text)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        ),
        en: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Analysis accuracy",
                description: "Reduction of analysis errors.",
              },
              {
                icon: Grid3x3,
                title: "Data traceability",
                description: "Improvement of data traceability.",
              },
              {
                icon: XCircle,
                title: "Elimination of losses",
                description: "Reduction of hidden losses.",
              },
              {
                icon: Users,
                title: "Team alignment",
                description:
                  "Greater alignment between laboratory, production, and maintenance.",
              },
              {
                icon: GraduationCap,
                title: "Technical independence",
                description: "Reduction of dependence on external experts.",
              },
              {
                icon: Sparkles,
                title: "Continuous improvement culture",
                description:
                  "Continuous improvement culture based on real data.",
              },
              {
                icon: Box,
                title: "Resource optimization",
                description:
                  "Optimization of spare parts management and key technical resources.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${index === 6 ? "col-span-2" : ""}
                `}
              >
                <div className="text-4xl mb-4 flex gap-4">
                  <feature.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[var(--color-text)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        ),
        pt: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Precisão na análise",
                description: "Redução de erros de análise.",
              },
              {
                icon: Grid3x3,
                title: "Rastreabilidade de dados",
                description: "Melhoria da rastreabilidade dos dados.",
              },
              {
                icon: XCircle,
                title: "Eliminação de perdas",
                description: "Redução de perdas ocultas.",
              },
              {
                icon: Users,
                title: "Alinhamento de equipes",
                description:
                  "Maior alinhamento entre laboratório, produção e manutenção.",
              },
              {
                icon: GraduationCap,
                title: "Independência técnica",
                description:
                  "Redução da dependência de especialistas externos.",
              },
              {
                icon: Sparkles,
                title: "Cultura de melhoria contínua",
                description:
                  "Cultura de melhoria contínua baseada em dados reais.",
              },
              {
                icon: Box,
                title: "Otimização de recursos",
                description:
                  "Otimização da gestão de peças de reposição e recursos técnicos chave.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${index === 6 ? "col-span-2" : ""}
                `}
              >
                <div className="text-4xl mb-4 flex gap-4">
                  <feature.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[var(--color-text)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        ),
      },
    },
    {
      id: "6",
      icon: Users,
      title: {
        es: "¿Para quién está recomendado el programa?",
        en: "Who is the program recommended for?",
        pt: "Para quem o programa é recomendado?",
      },
      subtitle: {
        es: "Tipos de empresas ideales para Measure Bridge™",
        en: "Ideal companies for Measure Bridge™",
        pt: "Tipos de empresas ideais para o Measure Bridge™",
      },
      children: {
        es: (
          <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              ¿Para quién está diseñado?
            </h3>
            <p className="text-[var(--color-text)] text-lg leading-relaxed">
              Empresas industriales con laboratorios internos o tercerizados,
              gerentes de calidad, ingenieros de procesos y líderes de mejora
              continua con el objetivo de reforzar el control analítico como
              pilar de desempeño y eficiencia.
            </p>
          </div>
        ),
        en: (
          <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Who is it designed for?
            </h3>
            <p className="text-[var(--color-text)] text-lg leading-relaxed">
              Industrial companies with internal or outsourced laboratories,
              quality managers, process engineers, and continuous improvement
              leaders aiming to strengthen analytical control as a pillar of
              performance and efficiency.
            </p>
          </div>
        ),
        pt: (
          <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Para quem é projetado?
            </h3>
            <p className="text-[var(--color-text)] text-lg leading-relaxed">
              Empresas industriais com laboratórios internos ou terceirizados,
              gerentes de qualidade, engenheiros de processos e líderes de
              melhoria contínua com o objetivo de reforçar o controle analítico
              como pilar de desempenho e eficiência.
            </p>
          </div>
        ),
      },
    },
    {
      id: "5",
      icon: Settings,
      title: {
        es: "¿Con qué otros productos se relaciona?",
        en: "Which other products is it related to?",
        pt: "Com quais outros produtos se relaciona?",
      },
      subtitle: {
        es: "",
        en: "",
        pt: "",
      },
      description: {
        es: "¿Con qué otros productos se relaciona?\nDecisiones™ de gestión basadas en datos: comparte herramientas estadísticas para la toma de decisiones.\nAcción™ Kaizen: se integra con proyectos de mejora basados en calidad y datos reales.\nSistema™ de Excelencia Operativa: contribuye al pilar de control analítico dentro de la excelencia operativa.",
        en: "Which other products is it related to?\nDecisiones™ data-driven management: shares statistical tools for decision making.\nAcción™ Kaizen: integrates with improvement projects based on quality and real data.\nSistema™ of Operational Excellence: contributes to the analytical control pillar within operational excellence.",
        pt: "Com quais outros produtos se relaciona?\nDecisiones™ de gestão baseada em dados: compartilha ferramentas estatísticas para a tomada de decisões.\nAcción™ Kaizen: integra-se com projetos de melhoria baseados em qualidade e dados reais.\nSistema™ de Excelência Operacional: contribui para o pilar de controle analítico dentro da excelência operacional.",
      },
      details: [],
    },
  ],
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
            aria-label={translations.closeModal[currentLanguage]}
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

const MeasureBridgeContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const { currentLanguage } = useLanguage();
  const lang = currentLanguage as Language;

  const features = translations.features.map((feature) => {
    if (feature.id === "5") {
      return {
        ...feature,
        title: feature.title[lang],
        subtitle: feature.subtitle[lang],
        description: feature.description
          ? feature.description[lang]
          : undefined,
        details: feature.details,
      };
    }
    return {
      ...feature,
      title: feature.title[lang],
      subtitle: feature.subtitle[lang],
      children: feature.children ? feature.children[lang] : undefined,
    };
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
    <div id="MeasureBridge-content" className="bg-[var(--color-bg)]">
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
                  {translations.clickForDetails[currentLanguage]}
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

export default MeasureBridgeContent;
