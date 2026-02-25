import type React from "react";
import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Users,
  Settings,
  BarChart3,
  Activity,
  Eye,
  GitBranch,
  AlertTriangle,
  Repeat,
  Factory,
  Building,
  ChartCandlestick,
  Zap,
  Calendar,
  HandCoins,
  CircleQuestionMark,
} from "lucide-react";
import FlowStableTimelineGraphic from "../../icons-components/FlowStable/flowstabletimelinegraphic";
import ConnectionsGraphic from "../../icons-components/FiveSPlus/ConnectionsGraphic";
import { useLanguage } from "../../contexts/LanguageContext";
import ContentSection from "../shared/ContentSection";
import ProgramModal from "../shared/ProgramModal";

// Traducciones para los textos de FlowStable
const flowStableTranslations = {
  es: {
    clickForDetails: "Click para más detalles",
    closeModal: "Cerrar modal",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Definición clara del programa FlowStable™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                FlowStable™ es nuestro programa estrella para empresas que
                buscan elevar su producción y eficiencia sin necesidad de
                invertir en nuevos activos. Mediante un enfoque paso a paso,
                dejamos atrás la persecución de récords diarios y construimos
                procesos estables y predecibles, logrando mejores promedios,
                mayor control y un crecimiento sostenible.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                ¿Qué es FlowStable™?
              </p>
              {[
                "✔ Un sistema estructurado que estabiliza la operación antes de optimizarla.",
                "✔ Un ciclo diario de monitoreo y acción correctiva en tiempo real.",
                "✔ Un programa de 7 meses, desde diagnóstico hasta auditorías finales.",
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
            <div className="mt-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                ¿Qué no es FlowStable™?
              </p>
              {[
                "✘ Un parche puntual para picos de producción.",
                "✘ Una simple capacitación teórica sin seguimiento.",
                "✘ Una solución que ignora la cultura y hábitos del equipo.",
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
        subtitle: "Métricas y seguimiento de FlowStable™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Mejoras Rápidas",
                description:
                  "La aplicación de FlowStable™ genera mejoras rápidas y sostenidas, especialmente en la consistencia de la producción o los servicios.",
              },
              {
                icon: Activity,
                title: "Menos Variabilidad",
                description:
                  "Reducción de variabilidad operativa y el cumplimiento de los objetivos diarios.",
              },
              {
                icon: Calendar,
                title: "Monitoreo Diario",
                description:
                  "Uno de sus pilares es el seguimiento estructurado de desvíos a través de la Secuencia de Mejora Diaria™.",
              },
              {
                icon: AlertTriangle,
                title: "Acciones Inmediatas",
                description:
                  "Permite tomar acciones correctivas de forma inmediata, en el lugar donde ocurren.",
              },
              {
                icon: Eye,
                title: "Visual & Práctico",
                description:
                  "Este enfoque práctico y visual ayuda a que los equipos comprendan mejor qué se espera de cada rol.",
              },
              {
                icon: Users,
                title: "Autonomía y Compromiso",
                description:
                  "Ganando en claridad, autonomía y compromiso con los resultados.",
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
        icon: Clock,
        title: "Metodología & Tiempos",
        subtitle: "7 meses de transformación estructurada",
        description:
          "FlowStable™ se implementa a través de 8 fases estructuradas durante 7 meses, combinando trabajo presencial y virtual para garantizar la adopción y sostenibilidad del programa.",
        graphic: <FlowStableTimelineGraphic />,
        details: [
          "Fase Inicial: Diagnóstico (presencial) – 1 semana de trabajo en el lugar",
          "Fase 2: Diseñar el sistema de medición. Discusión sobre objetivos y planes estratégicos. Entrenamiento y despliegue de herramientas (FlowStable PACK 2)",
          "Fase 3: Establecer reuniones diarias de discusión y ejecución. Recolección de primeros datos (FlowStable PACK 3)",
          "Fase 4: Consolidación y autonomía del equipo interno. Retrospectiva y ajustes. Identificación de desvíos",
          "Fase 5: Inicio de resolución de problemas. Herramientas 5W1H – Herramienta A3 (FlowStable PACK 4)",
          "Fase 6: Curvas de evolución. Herramientas estadísticas. Auditorías de gestión",
          "Fase 7: Efectos colaterales. Definición técnica y económica",
          "Fase 8: Auditorías de gestión. Objetivos y planes estratégicos",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa FlowStable™",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Mejora sostenible",
                description:
                  "Mejora sostenible de la variable objetivo (Kilos/día, Horas/unidad)",
              },
              {
                icon: Activity,
                title: "Estabilidad complementaria",
                description:
                  "Estabilidad de variables complementarias (efecto colateral positivo)",
              },
              {
                icon: AlertTriangle,
                title: "Ingeniería de Pérdidas",
                description:
                  "Aplicación de Ingeniería de Pérdidas ante desvíos",
              },
              {
                icon: Users,
                title: "Alineación entre áreas",
                description:
                  "Alineación entre áreas operativas, logísticas y comerciales",
              },
              {
                icon: Eye,
                title: "Visibilidad de métricas",
                description:
                  "Visibilidad clara de métricas en todos los niveles",
              },
              {
                icon: BarChart3,
                title: "Gestión basada en datos",
                description: "Gestión operativa basada en hechos y datos",
              },
              {
                icon: GitBranch,
                title: "Diferenciación de soluciones",
                description:
                  "Diferenciación entre soluciones de corto plazo y proyectos de mediano alcance",
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
      {
        id: "3",
        icon: Users,
        title: "¿Para quién está recomendado el programa?",
        subtitle: "Tipos de empresas ideales para FlowStable™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Tipos de Empresas
            </h3>
            {[
              {
                icon: Repeat,
                title: "Implementación Progresiva",
                description:
                  "Empresas industriales o de servicios con procesos operativos continuos o en batch",
              },
              {
                icon: Building,
                title: "Intervención Focalizada",
                description:
                  "Empresas pequeñas o medianas con una sola línea de producción o servicio",
              },
              {
                icon: Factory,
                title: "Escalabilidad Modular",
                description:
                  "Empresas productivas o de servicios de gran volumen que puedan ser abordadas en secuencias sucesivas",
              },
              {
                icon: ChartCandlestick,
                title: "Gestión Estacional",
                description:
                  "Negocios en los cuales la estacionalidad juega un papel fundamental en los resultados económicos",
              },
              {
                icon: TrendingUp,
                title: "Flexibilidad de Capacidad",
                description:
                  "Empresas que necesiten controlar y aumentar su producción en ciertos momentos del año sin necesidad de invertir en activos fijos",
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
        id: "9",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "Escalera sólida hacia un sistema Lean integral",
        description:
          "FlowStable™ se integra con otros programas de LYSPAS & CO como parte de una secuencia lógica de mejora: toma los resultados de WasteZero™ para estabilizarlos, complementa a LeanBridge™ fortaleciendo la disciplina operativa diaria, sostiene en el tiempo las soluciones generadas con Kaizen Action™ y refuerza la ejecución de objetivos definidos en StratBridge™, asegurando la consistencia operativa necesaria para cumplir la estrategia.",
        graphic: <ConnectionsGraphic title="FlowStable™" />,
        details: [],
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
        subtitle: "Clear definition of the FlowStable™ program",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                FlowStable™ is our flagship program for companies seeking to
                increase their production and efficiency without investing in
                new assets. Through a step-by-step approach, we leave behind the
                pursuit of daily records and build stable and predictable
                processes, achieving better averages, greater control, and
                sustainable growth.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                What is FlowStable™?
              </p>
              {[
                "✔ A structured system that stabilizes operations before optimizing them.",
                "✔ A daily cycle of monitoring and real-time corrective action.",
                "✔ A 7-month program, from diagnosis to final audits.",
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
            <div className="mt-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                What is NOT FlowStable™?
              </p>
              {[
                "✘ A quick fix for production peaks.",
                "✘ A simple theoretical training without follow-up.",
                "✘ A solution that ignores team culture and habits.",
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
        subtitle: "Metrics and monitoring of FlowStable™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Quick Improvements",
                description:
                  "Applying FlowStable™ generates quick and sustained improvements, especially in production or service consistency.",
              },
              {
                icon: Activity,
                title: "Less Variability",
                description:
                  "Reduction of operational variability and achievement of daily goals.",
              },
              {
                icon: Calendar,
                title: "Daily Monitoring",
                description:
                  "One of its pillars is the structured monitoring of deviations through the Daily Improvement Sequence™.",
              },
              {
                icon: AlertTriangle,
                title: "Immediate Actions",
                description:
                  "Enables immediate corrective actions, right where they occur.",
              },
              {
                icon: Eye,
                title: "Visual & Practical",
                description:
                  "This practical and visual approach helps teams better understand what is expected of each role.",
              },
              {
                icon: Users,
                title: "Autonomy and Commitment",
                description:
                  "Gaining clarity, autonomy, and commitment to results.",
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
        icon: Clock,
        title: "Methodology & Timeline",
        subtitle: "7 months of structured transformation",
        description:
          "FlowStable™ is implemented through 8 structured phases over 7 months, combining on-site and virtual work to ensure adoption and sustainability.",
        graphic: <FlowStableTimelineGraphic />,
        details: [
          "Initial Phase: Diagnosis (on-site) – 1 week of on-site work",
          "Phase 2: Design the measurement system. Discussion of objectives and strategic plans. Training and deployment of tools (FlowStable PACK 2)",
          "Phase 3: Establish daily discussion and execution meetings. Collection of initial data (FlowStable PACK 3)",
          "Phase 4: Consolidation and autonomy of the internal team. Retrospective and adjustments. Identification of deviations",
          "Phase 5: Start of problem solving. 5W1H tools – A3 Tool (FlowStable PACK 4)",
          "Phase 6: Evolution curves. Statistical tools. Management audits",
          "Phase 7: Side effects. Technical and economic definition",
          "Phase 8: Management audits. Objectives and strategic plans",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Benefits of the FlowStable™ program",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Sustainable improvement",
                description:
                  "Sustainable improvement of the target variable (Kg/day, Hours/unit)",
              },
              {
                icon: Activity,
                title: "Complementary stability",
                description:
                  "Stability of complementary variables (positive side effect)",
              },
              {
                icon: AlertTriangle,
                title: "Loss Engineering",
                description:
                  "Application of Loss Engineering in case of deviations",
              },
              {
                icon: Users,
                title: "Alignment between areas",
                description:
                  "Alignment between operational, logistics, and commercial areas",
              },
              {
                icon: Eye,
                title: "Metric visibility",
                description: "Clear visibility of metrics at all levels",
              },
              {
                icon: BarChart3,
                title: "Data-driven management",
                description: "Operational management based on facts and data",
              },
              {
                icon: GitBranch,
                title: "Solution differentiation",
                description:
                  "Differentiation between short-term solutions and medium-term projects",
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
      {
        id: "3",
        icon: Users,
        title: "Who is the program recommended for?",
        subtitle: "Ideal types of companies for FlowStable™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Types of Companies
            </h3>
            {[
              {
                icon: Repeat,
                title: "Progressive Implementation",
                description:
                  "Industrial or service companies with continuous or batch operational processes",
              },
              {
                icon: Building,
                title: "Focused Intervention",
                description:
                  "Small or medium companies with a single production or service line",
              },
              {
                icon: Factory,
                title: "Modular Scalability",
                description:
                  "Large volume productive or service companies that can be addressed in successive sequences",
              },
              {
                icon: ChartCandlestick,
                title: "Seasonal Management",
                description:
                  "Businesses in which seasonality plays a fundamental role in economic results",
              },
              {
                icon: TrendingUp,
                title: "Capacity Flexibility",
                description:
                  "Companies that need to control and increase their production at certain times of the year without investing in fixed assets",
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
        id: "9",
        icon: Settings,
        title: "Which other products is it related to?",
        subtitle: "Solid ladder towards an integral Lean system",
        description:
          "FlowStable™ integrates with other LYSPAS & CO programs as part of a logical improvement sequence: it takes the results of WasteZero™ to stabilize them, complements LeanBridge™ by strengthening daily operational discipline, sustains over time the solutions generated with Kaizen Action™, and reinforces the execution of objectives defined in StratBridge™, ensuring the operational consistency needed to fulfill the strategy.",
        graphic: <ConnectionsGraphic title="FlowStable™" />,
        details: [],
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
        subtitle: "Definição clara do programa FlowStable™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                FlowStable™ é nosso programa principal para empresas que buscam
                aumentar sua produção e eficiência sem investir em novos ativos.
                Por meio de uma abordagem passo a passo, deixamos para trás a
                busca por recordes diários e construímos processos estáveis e
                previsíveis, alcançando melhores médias, maior controle e
                crescimento sustentável.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                O que é FlowStable™?
              </p>
              {[
                "✔ Um sistema estruturado que estabiliza a operação antes de otimizá-la.",
                "✔ Um ciclo diário de monitoramento e ação corretiva em tempo real.",
                "✔ Um programa de 7 meses, do diagnóstico às auditorias finais.",
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
            <div className="mt-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                O que não é FlowStable™?
              </p>
              {[
                "✘ Um remendo pontual para picos de produção.",
                "✘ Um simples treinamento teórico sem acompanhamento.",
                "✘ Uma solução que ignora a cultura e os hábitos da equipe.",
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
        subtitle: "Métricas e acompanhamento do FlowStable™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Melhorias Rápidas",
                description:
                  "A aplicação do FlowStable™ gera melhorias rápidas e sustentadas, especialmente na consistência da produção ou dos serviços.",
              },
              {
                icon: Activity,
                title: "Menos Variabilidade",
                description:
                  "Redução da variabilidade operacional e cumprimento dos objetivos diários.",
              },
              {
                icon: Calendar,
                title: "Monitoramento Diário",
                description:
                  "Um de seus pilares é o acompanhamento estruturado de desvios por meio da Sequência de Melhoria Diária™.",
              },
              {
                icon: AlertTriangle,
                title: "Ações Imediatas",
                description:
                  "Permite tomar ações corretivas de forma imediata, no local onde ocorrem.",
              },
              {
                icon: Eye,
                title: "Visual & Prático",
                description:
                  "Essa abordagem prática e visual ajuda as equipes a compreenderem melhor o que se espera de cada função.",
              },
              {
                icon: Users,
                title: "Autonomia e Comprometimento",
                description:
                  "Ganhando em clareza, autonomia e comprometimento com os resultados.",
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
        icon: Clock,
        title: "Metodologia & Prazos",
        subtitle: "7 meses de transformação estruturada",
        description:
          "FlowStable™ é implementado em 8 fases estruturadas ao longo de 7 meses, combinando trabalho presencial e virtual para garantir a adoção e sustentabilidade do programa.",
        graphic: <FlowStableTimelineGraphic />,
        details: [
          "Fase Inicial: Diagnóstico (presencial) – 1 semana de trabalho no local",
          "Fase 2: Projetar o sistema de medição. Discussão sobre objetivos e planos estratégicos. Treinamento e implantação de ferramentas (FlowStable PACK 2)",
          "Fase 3: Estabelecer reuniões diárias de discussão e execução. Coleta dos primeiros dados (FlowStable PACK 3)",
          "Fase 4: Consolidação e autonomia da equipe interna. Retrospectiva e ajustes. Identificação de desvios",
          "Fase 5: Início da resolução de problemas. Ferramentas 5W1H – Ferramenta A3 (FlowStable PACK 4)",
          "Fase 6: Curvas de evolução. Ferramentas estatísticas. Auditorias de gestão",
          "Fase 7: Efeitos colaterais. Definição técnica e econômica",
          "Fase 8: Auditorias de gestão. Objetivos e planos estratégicos",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa FlowStable™",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Melhoria sustentável",
                description:
                  "Melhoria sustentável da variável objetivo (Kg/dia, Horas/unidade)",
              },
              {
                icon: Activity,
                title: "Estabilidade complementar",
                description:
                  "Estabilidade de variáveis complementares (efeito colateral positivo)",
              },
              {
                icon: AlertTriangle,
                title: "Engenharia de Perdas",
                description:
                  "Aplicação de Engenharia de Perdas diante de desvios",
              },
              {
                icon: Users,
                title: "Alinhamento entre áreas",
                description:
                  "Alinhamento entre áreas operacionais, logísticas e comerciais",
              },
              {
                icon: Eye,
                title: "Visibilidade de métricas",
                description:
                  "Visibilidade clara de métricas em todos os níveis",
              },
              {
                icon: BarChart3,
                title: "Gestão baseada em dados",
                description: "Gestão operacional baseada em fatos e dados",
              },
              {
                icon: GitBranch,
                title: "Diferenciação de soluções",
                description:
                  "Diferenciação entre soluções de curto prazo e projetos de médio alcance",
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
      {
        id: "3",
        icon: Users,
        title: "Para quem o programa é recomendado?",
        subtitle: "Tipos de empresas ideais para o FlowStable™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Tipos de Empresas
            </h3>
            {[
              {
                icon: Repeat,
                title: "Implementação Progressiva",
                description:
                  "Empresas industriais ou de serviços com processos operacionais contínuos ou em lote",
              },
              {
                icon: Building,
                title: "Intervenção Focalizada",
                description:
                  "Empresas pequenas ou médias com uma única linha de produção ou serviço",
              },
              {
                icon: Factory,
                title: "Escalabilidade Modular",
                description:
                  "Empresas produtivas ou de serviços de grande volume que possam ser abordadas em sequências sucessivas",
              },
              {
                icon: ChartCandlestick,
                title: "Gestão Sazonal",
                description:
                  "Negócios nos quais a sazonalidade desempenha papel fundamental nos resultados econômicos",
              },
              {
                icon: TrendingUp,
                title: "Flexibilidade de Capacidade",
                description:
                  "Empresas que precisam controlar e aumentar sua produção em certos momentos do ano sem investir em ativos fixos",
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
        id: "9",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Escada sólida para um sistema Lean integral",
        description:
          "FlowStable™ se integra a outros programas da LYSPAS & CO como parte de uma sequência lógica de melhoria: aproveita os resultados do WasteZero™ para estabilizá-los, complementa o LeanBridge™ fortalecendo a disciplina operacional diária, sustenta ao longo do tempo as soluções geradas com o Kaizen Action™ e reforça a execução dos objetivos definidos no StratBridge™, garantindo a consistência operacional necessária para cumprir a estratégia.",
        graphic: <ConnectionsGraphic title="FlowStable™" />,
        details: [],
      },
    ],
  },
} as const;

const FlowStableContent: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const t = flowStableTranslations[currentLanguage];

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  // features depende del idioma
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
    <div id="flowstable-content" className="bg-[var(--color-bg)]">
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

      <ProgramModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedFeature?.title ?? ""}
        subtitle={selectedFeature?.subtitle ?? ""}
        content={{
          description: selectedFeature?.description,
          subDescription: selectedFeature?.subDescription,
          details: selectedFeature?.details ?? [],
          footer: selectedFeature?.footer,
          children: selectedFeature?.children,
        }}
        graphic={selectedFeature?.graphic}
        closeModalLabel={t.closeModal}
      />
    </div>
  );
};

export default FlowStableContent;
