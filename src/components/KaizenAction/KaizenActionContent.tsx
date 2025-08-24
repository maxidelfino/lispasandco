"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Target,
  X,
  Settings,
  Award,
  Zap,
  Globe,
  ArrowLeftRight,
  Wrench,
  Clock,
  HandCoins,
  TrendingUp,
  Users,
  CircleQuestionMark,
} from "lucide-react";
import MethodologyKaizenGraphic from "../../icons-componets/KaizenAction/MethodologyKaizenGraphic";
import ConnectionsGraphic from "../../icons-componets/FiveSPlus/ConnectionsGraphic";
import { Language } from "../../types";
import { useLanguage } from "../../contexts/LanguageContext";

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

const translations: Record<Language, any> = {
  es: {
    clickForDetails: "Click para más detalles",
    closeModal: "Cerrar modal",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Definición clara del programa KAIZEN ACTION™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                KAIZEN ACTION™ es un servicio de intervención directa para
                resolver problemas reales y complejos, utilizando la metodología
                KAIZEN con foco en acción inmediata, colaboración
                interdisciplinaria y resultados medibles.
              </p>
              <p className="mt-4 text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Está pensado para empresas que necesitan resolver cuellos de
                botella operativos, conflictos entre áreas o problemas End to
                End que afectan la experiencia del cliente, la eficiencia o el
                cumplimiento de objetivos estratégicos.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                ¿Qué es?
              </p>
              {[
                "✔ Intervención práctica en el lugar de trabajo con enfoque KAIZEN",
                "✔ Ciclo completo DMAIC aplicado a casos reales",
                "✔ Colaboración interdisciplinaria para soluciones sostenibles",
                "✔ Resultados medibles y seguimiento post-evento",
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
                "✘ Una capacitación teórica sin aplicación práctica",
                "✘ Un taller genérico sin seguimiento ni resultados claros",
                "✘ Una solución aislada que no involucre al equipo interno",
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
        id: "6",
        icon: Zap,
        title: "Problemas que resuelve",
        subtitle: "Casos específicos donde KAIZEN ACTION™ genera mayor impacto",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Wrench,
                title: "Técnico",
                description:
                  "Problemas técnicos (mantenimiento, calidad, reprocesos, desvíos productivos)",
              },
              {
                icon: ArrowLeftRight,
                title: "Transaccional",
                description:
                  "Problemas transaccionales entre sectores (operaciones-logística, ventas-producción, etc.)",
              },
              {
                icon: Globe,
                title: "End to End",
                description:
                  "Problemas End to End, desde el origen del negocio hasta el cliente final, incluso entre unidades geográficamente distantes",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${idx === 2 ? "col-span-2" : ""}
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
      {
        id: "5",
        icon: Clock,
        title: "Metodología & Tiempos",
        subtitle: "Ciclo estructurado de mejora en 3 etapas principales",
        children: (
          <div>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                KAIZEN ACTIONTM se basa en el ciclo estructurado de mejora DMAIC
                (Definir, Medir, Analizar, Mejorar y Controlar), el estándar
                metodológico de excelencia utilizado en Lean Six Sigma y mejoras
                de alto impacto.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                La modalidad combina tiempo de preparación fuera del evento con
                ejecución intensiva presencial, para garantizar análisis de
                calidad, participación real y sostenibilidad del cambio{" "}
              </p>
            </div>
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <MethodologyKaizenGraphic />
            </div>
            <blockquote className="text-xl font-bold text-[var(--color-secondary)] italic border-l-4 border-[var(--color-accent)] pl-6 mt-8">
              "Esta modalidad garantiza no solo resultados visibles y medibles,
              sino también la formación progresiva de líderes internos que
              aprenden a facilitar eventos KAIZEN por sí mismos"
            </blockquote>
          </div>
        ),
      },
      {
        id: "3",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Transformar problemas en oportunidades de mejora",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Resolver Problemas",
                description:
                  "Resolver problemas que generan pérdida de eficiencia, conflicto o demoras",
              },
              {
                icon: TrendingUp,
                title: "Cultura de Mejora",
                description: "Activar una cultura de mejora transversal y ágil",
              },
              {
                icon: Users,
                title: "Desarrollar Habilidades",
                description:
                  "Desarrollar la habilidad interna de liderar KAIZEN con criterios profesionales",
              },
              {
                icon: Award,
                title: "Formar Agentes",
                description:
                  "Formar agentes de cambio en plena acción, dentro del contexto real de la empresa",
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
        subtitle: "Tipos de empresas ideales para KAIZEN ACTION™",
        description:
          "Está diseñado para empresas que necesitan resolver cuellos de botella operativos, conflictos entre áreas o problemas End-to-End que afectan la experiencia del cliente, la eficiencia y el cumplimiento de objetivos estratégicos.",
        details: [
          "Mandos medios y supervisores responsables de operaciones diarias",
          "Equipos multifuncionales involucrados en la cadena de valor",
          "Gerentes de planta y responsables de producción",
          "Líderes de mejora continua y facilitadores Kaizen",
          "Áreas de calidad, logística y atención al cliente",
          "Equipos de proyecto que requieren rápido impacto y resultados medibles",
        ],
      },
      {
        id: "8",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "Integración con el ecosistema LYSPAS",
        description:
          "KAIZEN ACTION™ es una evolución natural del camino iniciado con LeanBridge™. Una vez que los colaboradores han sido entrenados en los fundamentos Lean y en la identificación de desperdicios (WasteZero™), pueden actuar como facilitadores de eventos KAIZEN reales, consolidando así su rol de agentes de cambio dentro de la organización.",
        graphic: <ConnectionsGraphic title="Kaizen Action™" />,
        details: [
          "LeanBridge™ – Para alinear estrategia y operación antes de pasar a KAIZEN ACTION™",
          "WasteZero™ – Base en identificación y eliminación de desperdicios previos al evento KAIZEN",
          "FlowStable™ – Estabiliza procesos que luego se optimizan con KAIZEN ACTION™",
          "StratBridge™ – Aporta la visión estratégica que guía los proyectos KAIZEN",
          "Lean Enterprise Transformation™ – Marco de mejora continua donde KAIZEN ACTION™ aporta ejecución táctica",
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
        icon: CircleQuestionMark,
        title: "What is it and what is it not?",
        subtitle: "Clear definition of the KAIZEN ACTION™ program",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                KAIZEN ACTION™ is a direct intervention service to solve real
                and complex problems, using the KAIZEN methodology with a focus
                on immediate action, interdisciplinary collaboration, and
                measurable results.
              </p>
              <p className="mt-4 text-[var(--color-text)] leading-relaxed text-lg font-medium">
                It is designed for companies that need to resolve operational
                bottlenecks, interdepartmental conflicts, or end-to-end problems
                that affect customer experience, efficiency, or achievement of
                strategic objectives.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                What is it?
              </p>
              {[
                "✔ Practical intervention in the workplace with a KAIZEN approach",
                "✔ Full DMAIC cycle applied to real cases",
                "✔ Interdisciplinary collaboration for sustainable solutions",
                "✔ Measurable results and post-event follow-up",
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
                What is it not?
              </p>
              {[
                "✘ A theoretical training without practical application",
                "✘ A generic workshop without follow-up or clear results",
                "✘ An isolated solution that does not involve the internal team",
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
        id: "6",
        icon: Zap,
        title: "Problems it solves",
        subtitle:
          "Specific cases where KAIZEN ACTION™ generates the greatest impact",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Wrench,
                title: "Technical",
                description:
                  "Technical problems (maintenance, quality, rework, production deviations)",
              },
              {
                icon: ArrowLeftRight,
                title: "Transactional",
                description:
                  "Transactional problems between departments (operations-logistics, sales-production, etc.)",
              },
              {
                icon: Globe,
                title: "End to End",
                description:
                  "End-to-end problems, from business origin to final customer, even between geographically distant units",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${idx === 2 ? "col-span-2" : ""}
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
      {
        id: "5",
        icon: Clock,
        title: "Methodology & Timing",
        subtitle: "Structured improvement cycle in 3 main stages",
        children: (
          <div>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                KAIZEN ACTION™ is based on the structured DMAIC improvement
                cycle (Define, Measure, Analyze, Improve, and Control), the
                methodological standard of excellence used in Lean Six Sigma and
                high-impact improvements.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                The modality combines preparation time outside the event with
                intensive in-person execution, to ensure quality analysis, real
                participation, and sustainability of change.
              </p>
            </div>
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <MethodologyKaizenGraphic />
            </div>
            <blockquote className="text-xl font-bold text-[var(--color-secondary)] italic border-l-4 border-[var(--color-accent)] pl-6 mt-8">
              "This modality guarantees not only visible and measurable results,
              but also the progressive development of internal leaders who learn
              to facilitate KAIZEN events themselves"
            </blockquote>
          </div>
        ),
      },
      {
        id: "3",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Transforming problems into improvement opportunities",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Solve Problems",
                description:
                  "Solve problems that cause loss of efficiency, conflict, or delays",
              },
              {
                icon: TrendingUp,
                title: "Improvement Culture",
                description:
                  "Activate a transversal and agile improvement culture",
              },
              {
                icon: Users,
                title: "Develop Skills",
                description:
                  "Develop the internal ability to lead KAIZEN with professional criteria",
              },
              {
                icon: Award,
                title: "Form Change Agents",
                description:
                  "Form change agents in full action, within the real context of the company",
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
        subtitle: "Ideal types of companies for KAIZEN ACTION™",
        description:
          "It is designed for companies that need to resolve operational bottlenecks, interdepartmental conflicts, or end-to-end problems that affect customer experience, efficiency, and achievement of strategic objectives.",
        details: [
          "Middle managers and supervisors responsible for daily operations",
          "Multifunctional teams involved in the value chain",
          "Plant managers and production managers",
          "Continuous improvement leaders and Kaizen facilitators",
          "Quality, logistics, and customer service areas",
          "Project teams requiring rapid impact and measurable results",
        ],
      },
      {
        id: "8",
        icon: Settings,
        title: "Which other products is it related to?",
        subtitle: "Integration with the LYSPAS ecosystem",
        description:
          "KAIZEN ACTION™ is a natural evolution of the path started with LeanBridge™. Once employees have been trained in Lean fundamentals and waste identification (WasteZero™), they can act as facilitators of real KAIZEN events, thus consolidating their role as change agents within the organization.",
        graphic: <ConnectionsGraphic title="Kaizen Action™" />,
        details: [
          "LeanBridge™ – To align strategy and operation before moving to KAIZEN ACTION™",
          "WasteZero™ – Foundation in waste identification and elimination prior to the KAIZEN event",
          "FlowStable™ – Stabilizes processes that are then optimized with KAIZEN ACTION™",
          "StratBridge™ – Provides the strategic vision that guides KAIZEN projects",
          "Lean Enterprise Transformation™ – Continuous improvement framework where KAIZEN ACTION™ provides tactical execution",
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
        icon: CircleQuestionMark,
        title: "O que é e o que não é?",
        subtitle: "Definição clara do programa KAIZEN ACTION™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                KAIZEN ACTION™ é um serviço de intervenção direta para resolver
                problemas reais e complexos, utilizando a metodologia KAIZEN com
                foco em ação imediata, colaboração interdisciplinar e resultados
                mensuráveis.
              </p>
              <p className="mt-4 text-[var(--color-text)] leading-relaxed text-lg font-medium">
                É pensado para empresas que precisam resolver gargalos
                operacionais, conflitos entre áreas ou problemas End to End que
                afetam a experiência do cliente, a eficiência ou o cumprimento
                de objetivos estratégicos.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                O que é?
              </p>
              {[
                "✔ Intervenção prática no local de trabalho com enfoque KAIZEN",
                "✔ Ciclo completo DMAIC aplicado a casos reais",
                "✔ Colaboração interdisciplinar para soluções sustentáveis",
                "✔ Resultados mensuráveis e acompanhamento pós-evento",
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
                "✘ Um treinamento teórico sem aplicação prática",
                "✘ Um workshop genérico sem acompanhamento ou resultados claros",
                "✘ Uma solução isolada que não envolva a equipe interna",
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
        id: "6",
        icon: Zap,
        title: "Problemas que resolve",
        subtitle: "Casos específicos onde KAIZEN ACTION™ gera maior impacto",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Wrench,
                title: "Técnico",
                description:
                  "Problemas técnicos (manutenção, qualidade, retrabalho, desvios produtivos)",
              },
              {
                icon: ArrowLeftRight,
                title: "Transacional",
                description:
                  "Problemas transacionais entre setores (operações-logística, vendas-produção, etc.)",
              },
              {
                icon: Globe,
                title: "End to End",
                description:
                  "Problemas End to End, desde a origem do negócio até o cliente final, inclusive entre unidades geograficamente distantes",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`
                  bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                  hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${idx === 2 ? "col-span-2" : ""}
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
      {
        id: "5",
        icon: Clock,
        title: "Metodologia & Tempos",
        subtitle: "Ciclo estruturado de melhoria em 3 etapas principais",
        children: (
          <div>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                KAIZEN ACTION™ baseia-se no ciclo estruturado de melhoria DMAIC
                (Definir, Medir, Analisar, Melhorar e Controlar), o padrão
                metodológico de excelência utilizado em Lean Six Sigma e
                melhorias de alto impacto.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                A modalidade combina tempo de preparação fora do evento com
                execução intensiva presencial, para garantir análise de
                qualidade, participação real e sustentabilidade da mudança.
              </p>
            </div>
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <MethodologyKaizenGraphic />
            </div>
            <blockquote className="text-xl font-bold text-[var(--color-secondary)] italic border-l-4 border-[var(--color-accent)] pl-6 mt-8">
              "Esta modalidade garante não só resultados visíveis e mensuráveis,
              mas também a formação progressiva de líderes internos que aprendem
              a facilitar eventos KAIZEN por si mesmos"
            </blockquote>
          </div>
        ),
      },
      {
        id: "3",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Transformar problemas em oportunidades de melhoria",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Resolver Problemas",
                description:
                  "Resolver problemas que geram perda de eficiência, conflito ou atrasos",
              },
              {
                icon: TrendingUp,
                title: "Cultura de Melhoria",
                description:
                  "Ativar uma cultura de melhoria transversal e ágil",
              },
              {
                icon: Users,
                title: "Desenvolver Habilidades",
                description:
                  "Desenvolver a habilidade interna de liderar KAIZEN com critérios profissionais",
              },
              {
                icon: Award,
                title: "Formar Agentes",
                description:
                  "Formar agentes de mudança em plena ação, dentro do contexto real da empresa",
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
        subtitle: "Tipos de empresas ideais para KAIZEN ACTION™",
        description:
          "É projetado para empresas que precisam resolver gargalos operacionais, conflitos entre áreas ou problemas End-to-End que afetam a experiência do cliente, a eficiência e o cumprimento de objetivos estratégicos.",
        details: [
          "Gestores intermediários e supervisores responsáveis pelas operações diárias",
          "Equipes multifuncionais envolvidas na cadeia de valor",
          "Gerentes de planta e responsáveis pela produção",
          "Líderes de melhoria contínua e facilitadores Kaizen",
          "Áreas de qualidade, logística e atendimento ao cliente",
          "Equipes de projeto que requerem impacto rápido e resultados mensuráveis",
        ],
      },
      {
        id: "8",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Integração com o ecossistema LYSPAS",
        description:
          "KAIZEN ACTION™ é uma evolução natural do caminho iniciado com LeanBridge™. Uma vez que os colaboradores tenham sido treinados nos fundamentos Lean e na identificação de desperdícios (WasteZero™), podem atuar como facilitadores de eventos KAIZEN reais, consolidando assim seu papel de agentes de mudança dentro da organização.",
        graphic: <ConnectionsGraphic title="Kaizen Action™" />,
        details: [
          "LeanBridge™ – Para alinhar estratégia e operação antes de passar para KAIZEN ACTION™",
          "WasteZero™ – Base na identificação e eliminação de desperdícios antes do evento KAIZEN",
          "FlowStable™ – Estabiliza processos que depois são otimizados com KAIZEN ACTION™",
          "StratBridge™ – Fornece a visão estratégica que orienta os projetos KAIZEN",
          "Lean Enterprise Transformation™ – Estrutura de melhoria contínua onde KAIZEN ACTION™ oferece execução tática",
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
        <div className="sticky top-0 bg-white border-b border-[var(--color-border)] p-8 flex justify-between items-start rounded-t-3xl z-50">
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
          <div className="p-8 z-0">
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

const KaizenActionContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const { currentLanguage } = useLanguage();

  // Selecciona el set de features según el idioma
  const features = translations[currentLanguage].features;

  const handleCardClick = (feature: any) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div id="kaizen-content" className="bg-[var(--color-bg)] py-20">
      <ContentSection id="que-es" title="" subtitle="">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature: any) => {
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
                  {translations[currentLanguage].clickForDetails}
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

export default KaizenActionContent;
