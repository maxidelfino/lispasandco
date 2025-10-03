"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  TrendingUp,
  X,
  Users,
  Settings,
  Award,
  RefreshCcw,
  HandCoins,
  CircleQuestionMark,
  ArrowDownCircle,
  AlertTriangle,
  UserCog,
  EyeOff,
  Timer,
  BarChart2,
  Database,
  Droplet,
  Wheat,
  Package,
  Thermometer,
  FlaskConical,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
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
        subtitle: "Definición clara del programa Auto Ops™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                AUTO OPS™ es el programa de LYSPAS & CO diseñado para llevar la
                operación de procesos productivos al siguiente nivel de
                eficiencia y madurez , utilizando herramientas tecnológicas
                avanzadas de control automático y monitoreo en tiempo real
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Su objetivo es estabilizar las variables críticas, minimizar la
                variabilidad y maximizar la eficiencia, mediante la instalación
                de lazos de control inteligentes que sustituyen la intervención
                manual y aseguran decisiones precisas, consistentes y seguras.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                ¿Qué es?
              </p>
              {[
                "✔ Lleva la operación de procesos productivos al siguiente nivel de eficiencia y madurez",
                "✔ Utiliza herramientas tecnológicas avanzadas de control automático y monitoreo en tiempo real",
                "✔ Instala lazos de control inteligentes que sustituyen la intervención manual y aseguran decisiones precisas, consistentes y seguras",
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
                "✘ No es solo una capacitación teórica sin aplicación práctica",
                "✘ No es una solución limitada a un área o proceso específico",
                "✘ No depende de la intervención manual o del criterio humano para operar",
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
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: RefreshCcw,
                title: "Variabilidad Operativa",
                description: "Variabilidad excesiva en la operación.",
              },
              {
                icon: UserCog,
                title: "Dependencia Manual",
                description:
                  "Procesos que dependen en exceso de la intervención manual.",
              },
              {
                icon: ArrowDownCircle,
                title: "Baja Eficiencia",
                description:
                  "Pérdida de eficiencia por la operación de lazos en modo manual.",
              },
              {
                icon: AlertTriangle,
                title: "Desviaciones de Calidad",
                description:
                  "Desvíos de calidad y problemas de throughput por falta de estandarización.",
              },
              {
                icon: EyeOff,
                title: "Falta de Visibilidad",
                description:
                  "Falta de visibilidad sobre el desempeño real de los lazos de control.",
              },
              {
                icon: Timer,
                title: "Análisis Lento",
                description:
                  "Elevados tiempos de análisis y diagnóstico de fallas de proceso.",
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
        id: "4",
        icon: Clock,
        title: "Metodología & Tiempos",
        subtitle: "5 fases de implementación",
        description:
          "Al igual que la mayoría de los programas de LYSPAS & CO , AUTO OPS™ se inicia mediante una evaluación inicial del proceso a ser intervenido, tanto sea de la parte de resultados operativos como también de la tecnología instalada y disponible. Ambas cosas son de vital importancia a la hora de evaluar los planes de acción a seguir",
        subDescription: "Modalidad de implementación:",
        graphic: <MethodologyGraphic />,
        details: [
          "Fase Inicial: 3 días on site – Evaluación inicial",
          "Fase 1: 3 semanas – Diagnóstico de situación",
          "Fase 2: 1 día – Decidir inversión",
          "Fase 3: Indefinido – Compra y montaje",
          "Fase 4: 4/6 meses – Puesta en marcha / creación lazos de control / generación de métricas",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa AutoOps™",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Estabilidad del Proceso",
                description:
                  "Mayor estabilidad del proceso y reducción de desviaciones.",
              },
              {
                icon: BarChart2,
                title: "Productividad y OEE",
                description:
                  "Aumento de la productividad y del rendimiento global (OEE).",
              },
              {
                icon: Zap,
                title: "Eficiencia Energética",
                description:
                  "Eficiencia energética: uso más racional de vapor, electricidad y combustibles.",
              },
              {
                icon: Award,
                title: "Calidad de Producto",
                description:
                  "Mejor calidad de producto final, reduciendo retrabajos o pérdidas.",
              },
              {
                icon: Clock,
                title: "Respuesta Rápida",
                description:
                  "Tiempos de respuesta más rápidos ante variaciones de la materia prima o condiciones externas.",
              },
              {
                icon: Database,
                title: "Datos Confiables",
                description:
                  "Datos confiables y en tiempo real para la toma de decisiones",
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
        id: "7",
        icon: Users,
        title: "¿Para quién está recomendado el programa?",
        subtitle: "El punto de partida ideal para la transformación Lean",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Droplet,
                title: "Industria aceitera",
                description:
                  "Control automático de humedad de salida en secadoras de granos, ajuste dinámico de laminadores y quebradores.",
              },
              {
                icon: Wheat,
                title: "Molinería",
                description:
                  "Regulación de molinos y zarandas para mantener uniformidad de granulometría.",
              },
              {
                icon: Package,
                title: "Granos",
                description:
                  "Gestión automática de transportadores. Gestión de sistemas de secado para eficientizar uso de combustible.",
              },
              {
                icon: Thermometer,
                title: "Frigoríficos",
                description:
                  "Control de temperatura de túneles de frío y cámaras de conservación. Balance de velocidad en líneas de empaque.",
              },
              {
                icon: FlaskConical,
                title: "Biodiesel",
                description:
                  "Estabilización de reactores de transesterificación y control de variables críticas en la etapa de separación.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`
              bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
              hover:shadow-xl transition-all duration-300 hover:scale-105
              ${index === 4 ? "col-span-2" : ""}
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
        id: "5",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "Escalera sólida hacia un sistema Lean integral",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: RefreshCcw,
                title: "Flow Stable™ ",
                description:
                  "Identifica desvíos en los flujos que AUTO OPS™ resuelve con control automático.",
              },
              {
                icon: Droplet,
                title: "Waste Zero™ ",
                description:
                  "Detecta pérdidas y desperdicios cuya reducción depende de procesos más estables.",
              },
              {
                icon: Award,
                title: "Kaizen Action™ ",
                description:
                  "Integra la mejora continua con soluciones tecnológicas concretas.",
              },
              {
                icon: BarChart2,
                title: "StratBridge™",
                description:
                  "Asegura que las inversiones en tecnología estén alineadas con los objetivos estratégicos",
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
        subtitle: "Clear definition of the Auto Ops™ program",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                AUTO OPS™ is the LYSPAS & CO program designed to take the
                operation of productive processes to the next level of
                efficiency and maturity, using advanced technological tools for
                automatic control and real-time monitoring.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Its objective is to stabilize critical variables, minimize
                variability, and maximize efficiency, through the installation
                of intelligent control loops that replace manual intervention
                and ensure precise, consistent, and safe decisions.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                What is it?
              </p>
              {[
                "✔ Takes the operation of productive processes to the next level of efficiency and maturity",
                "✔ Uses advanced technological tools for automatic control and real-time monitoring",
                "✔ Installs intelligent control loops that replace manual intervention and ensure precise, consistent, and safe decisions",
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
                "✘ Not just theoretical training without practical application",
                "✘ Not a solution limited to a specific area or process",
                "✘ Does not depend on manual intervention or human judgment to operate",
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
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: RefreshCcw,
                title: "Operational Variability",
                description: "Excessive variability in operation.",
              },
              {
                icon: UserCog,
                title: "Manual Dependency",
                description:
                  "Processes that rely excessively on manual intervention.",
              },
              {
                icon: ArrowDownCircle,
                title: "Low Efficiency",
                description:
                  "Loss of efficiency due to operating loops in manual mode.",
              },
              {
                icon: AlertTriangle,
                title: "Quality Deviations",
                description:
                  "Quality deviations and throughput issues due to lack of standardization.",
              },
              {
                icon: EyeOff,
                title: "Lack of Visibility",
                description:
                  "Lack of visibility over the real performance of control loops.",
              },
              {
                icon: Timer,
                title: "Slow Analysis",
                description:
                  "High analysis and process failure diagnosis times.",
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
        id: "4",
        icon: Clock,
        title: "Methodology & Timing",
        subtitle: "5 implementation phases",
        description:
          "As with most LYSPAS & CO programs, AUTO OPS™ begins with an initial assessment of the process to be intervened, considering both operational results and the installed and available technology. Both aspects are vital when evaluating the action plans to follow.",
        subDescription: "Implementation modality:",
        graphic: <MethodologyGraphic />,
        details: [
          "Initial Phase: 3 days on site – Initial assessment",
          "Phase 1: 3 weeks – Situation diagnosis",
          "Phase 2: 1 day – Investment decision",
          "Phase 3: Indefinite – Purchase and installation",
          "Phase 4: 4/6 months – Start-up / creation of control loops / generation of metrics",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Benefits of the AutoOps™ program",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Process Stability",
                description:
                  "Greater process stability and reduction of deviations.",
              },
              {
                icon: BarChart2,
                title: "Productivity & OEE",
                description:
                  "Increase in productivity and overall equipment effectiveness (OEE).",
              },
              {
                icon: Zap,
                title: "Energy Efficiency",
                description:
                  "Energy efficiency: more rational use of steam, electricity, and fuels.",
              },
              {
                icon: Award,
                title: "Product Quality",
                description:
                  "Better final product quality, reducing rework or losses.",
              },
              {
                icon: Clock,
                title: "Quick Response",
                description:
                  "Faster response times to raw material or external condition variations.",
              },
              {
                icon: Database,
                title: "Reliable Data",
                description: "Reliable and real-time data for decision making.",
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
        id: "7",
        icon: Users,
        title: "Who is the program recommended for?",
        subtitle: "The ideal starting point for Lean transformation",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Droplet,
                title: "Oilseed Industry",
                description:
                  "Automatic control of outlet moisture in grain dryers, dynamic adjustment of rollers and crushers.",
              },
              {
                icon: Wheat,
                title: "Milling",
                description:
                  "Regulation of mills and sieves to maintain uniform particle size.",
              },
              {
                icon: Package,
                title: "Grains",
                description:
                  "Automatic management of conveyors. Management of drying systems to optimize fuel use.",
              },
              {
                icon: Thermometer,
                title: "Meat Processing Plants",
                description:
                  "Temperature control of cold tunnels and storage chambers. Speed balancing in packaging lines.",
              },
              {
                icon: FlaskConical,
                title: "Biodiesel",
                description:
                  "Stabilization of transesterification reactors and control of critical variables in the separation stage.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`
              bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
              hover:shadow-xl transition-all duration-300 hover:scale-105
              ${index === 4 ? "col-span-2" : ""}
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
        id: "5",
        icon: Settings,
        title: "Which other products is it related to?",
        subtitle: "Solid ladder towards an integral Lean system",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: RefreshCcw,
                title: "Flow Stable™ ",
                description:
                  "Identifies deviations in flows that AUTO OPS™ solves with automatic control.",
              },
              {
                icon: Droplet,
                title: "Waste Zero™ ",
                description:
                  "Detects losses and waste whose reduction depends on more stable processes.",
              },
              {
                icon: Award,
                title: "Kaizen Action™ ",
                description:
                  "Integrates continuous improvement with concrete technological solutions.",
              },
              {
                icon: BarChart2,
                title: "StratBridge™",
                description:
                  "Ensures that technology investments are aligned with strategic objectives.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`
              bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
              hover:shadow-xl transition-all duration-300 hover:scale-105
              ${index === 4 ? "col-span-2" : ""}
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
        subtitle: "Definição clara do programa Auto Ops™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                AUTO OPS™ é o programa da LYSPAS & CO projetado para levar a
                operação de processos produtivos ao próximo nível de eficiência
                e maturidade, utilizando ferramentas tecnológicas avançadas de
                controle automático e monitoramento em tempo real.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Seu objetivo é estabilizar as variáveis críticas, minimizar a
                variabilidade e maximizar a eficiência, por meio da instalação
                de laços de controle inteligentes que substituem a intervenção
                manual e garantem decisões precisas, consistentes e seguras.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                O que é?
              </p>
              {[
                "✔ Leva a operação de processos produtivos ao próximo nível de eficiência e maturidade",
                "✔ Utiliza ferramentas tecnológicas avançadas de controle automático e monitoramento em tempo real",
                "✔ Instala laços de controle inteligentes que substituem a intervenção manual e garantem decisões precisas, consistentes e seguras",
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
                "✘ Não é apenas um treinamento teórico sem aplicação prática",
                "✘ Não é uma solução limitada a uma área ou processo específico",
                "✘ Não depende da intervenção manual ou do critério humano para operar",
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
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: RefreshCcw,
                title: "Variabilidade Operacional",
                description: "Variabilidade excessiva na operação.",
              },
              {
                icon: UserCog,
                title: "Dependência Manual",
                description:
                  "Processos que dependem excessivamente da intervenção manual.",
              },
              {
                icon: ArrowDownCircle,
                title: "Baixa Eficiência",
                description:
                  "Perda de eficiência pela operação de laços em modo manual.",
              },
              {
                icon: AlertTriangle,
                title: "Desvios de Qualidade",
                description:
                  "Desvios de qualidade e problemas de throughput por falta de padronização.",
              },
              {
                icon: EyeOff,
                title: "Falta de Visibilidade",
                description:
                  "Falta de visibilidade sobre o desempenho real dos laços de controle.",
              },
              {
                icon: Timer,
                title: "Análise Lenta",
                description:
                  "Altos tempos de análise e diagnóstico de falhas de processo.",
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
        id: "4",
        icon: Clock,
        title: "Metodologia & Tempos",
        subtitle: "5 fases de implementação",
        description:
          "Assim como a maioria dos programas da LYSPAS & CO, o AUTO OPS™ começa com uma avaliação inicial do processo a ser intervencionado, considerando tanto os resultados operacionais quanto a tecnologia instalada e disponível. Ambos são de vital importância na hora de avaliar os planos de ação a serem seguidos.",
        subDescription: "Modalidade de implementação:",
        graphic: <MethodologyGraphic />,
        details: [
          "Fase Inicial: 3 dias on site – Avaliação inicial",
          "Fase 1: 3 semanas – Diagnóstico da situação",
          "Fase 2: 1 dia – Decisão de investimento",
          "Fase 3: Indefinido – Compra e montagem",
          "Fase 4: 4/6 meses – Start-up / criação de laços de controle / geração de métricas",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa AutoOps™",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Estabilidade do Processo",
                description:
                  "Maior estabilidade do processo e redução de desvios.",
              },
              {
                icon: BarChart2,
                title: "Produtividade e OEE",
                description:
                  "Aumento da produtividade e do desempenho global (OEE).",
              },
              {
                icon: Zap,
                title: "Eficiência Energética",
                description:
                  "Eficiência energética: uso mais racional de vapor, eletricidade e combustíveis.",
              },
              {
                icon: Award,
                title: "Qualidade do Produto",
                description:
                  "Melhor qualidade do produto final, reduzindo retrabalhos ou perdas.",
              },
              {
                icon: Clock,
                title: "Resposta Rápida",
                description:
                  "Tempos de resposta mais rápidos diante de variações da matéria-prima ou condições externas.",
              },
              {
                icon: Database,
                title: "Dados Confiáveis",
                description:
                  "Dados confiáveis e em tempo real para a tomada de decisões.",
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
        id: "7",
        icon: Users,
        title: "Para quem o programa é recomendado?",
        subtitle: "O ponto de partida ideal para a transformação Lean",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Droplet,
                title: "Indústria de Óleos Vegetais",
                description:
                  "Controle automático da umidade de saída em secadores de grãos, ajuste dinâmico de laminadores e quebradores.",
              },
              {
                icon: Wheat,
                title: "Moinhos",
                description:
                  "Regulação de moinhos e peneiras para manter a uniformidade da granulometria.",
              },
              {
                icon: Package,
                title: "Grãos",
                description:
                  "Gestão automática de transportadores. Gestão de sistemas de secagem para otimizar o uso de combustível.",
              },
              {
                icon: Thermometer,
                title: "Frigoríficos",
                description:
                  "Controle de temperatura de túneis de resfriamento e câmaras de conservação. Balanceamento de velocidade em linhas de embalagem.",
              },
              {
                icon: FlaskConical,
                title: "Biodiesel",
                description:
                  "Estabilização de reatores de transesterificação e controle de variáveis críticas na etapa de separação.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`
              bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
              hover:shadow-xl transition-all duration-300 hover:scale-105
              ${index === 4 ? "col-span-2" : ""}
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
        id: "5",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Escada sólida para um sistema Lean integral",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: RefreshCcw,
                title: "Flow Stable™ ",
                description:
                  "Identifica desvios nos fluxos que o AUTO OPS™ resolve com controle automático.",
              },
              {
                icon: Droplet,
                title: "Waste Zero™ ",
                description:
                  "Detecta perdas e desperdícios cuja redução depende de processos mais estáveis.",
              },
              {
                icon: Award,
                title: "Kaizen Action™ ",
                description:
                  "Integra a melhoria contínua com soluções tecnológicas concretas.",
              },
              {
                icon: BarChart2,
                title: "StratBridge™",
                description:
                  "Garante que os investimentos em tecnologia estejam alinhados com os objetivos estratégicos.",
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
    <div id="autoops-content" className="bg-[var(--color-bg)]">
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
      {modalOpen &&
        selectedFeature &&
        Array.isArray(selectedFeature.children) && (
          <Modal
            isOpen={modalOpen}
            onClose={closeModal}
            title={selectedFeature?.title || ""}
            subtitle={selectedFeature?.subtitle || ""}
            content={{
              children: (
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                  {selectedFeature.children.map((item: any, idx: number) => (
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
              details: [],
            }}
            graphic={selectedFeature?.graphic}
          />
        )}
    </div>
  );
};

export default WasteZeroContent;
