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
  GitBranch,
  GraduationCap,
  FileBarChart,
  Calculator,
  BarChart3,
  AlertTriangle,
} from "lucide-react";
import MethodologyGraphic from "./MethodologyGraphic";
import { Language } from "../../types";
import { useLanguage } from "../../contexts/LanguageContext";

// Traducciones para los textos
const translations = {
  es: {
    roadmap: {
      problemas: "Problemas",
      recurrentes: "Recurrentes",
      changeBridge: "Change Bridge™",
      cultura: "Cultura de",
      mejora: "Mejora",
    },
    modal: {
      close: "Cerrar modal",
      clickForDetails: "Click para más detalles",
    },
    section: {
      publicoObjetivo: "Público objetivo",
    },
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Características del programa",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Decisiones Gerenciales Basadas en Estadísticas™ es una
                capacitación diseñada para formar profesionales capaces de
                interpretar datos, analizar variaciones y tomar decisiones
                fundamentadas en evidencia cuantitativa, utilizando herramientas
                estadísticas accesibles y aplicadas a la realidad de la empresa.
                Este programa es el puente entre la intuición y el análisis
                profundo, preparando a los participantes para liderar con
                claridad, evidencia y confianza en contextos de mejora continua.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                ¿Qué es?
              </p>
              {[
                "Una capacitación práctica para interpretar datos y analizar variaciones en los procesos.",
                "Un programa que enseña a tomar decisiones gerenciales basadas en evidencia estadística.",
                "Una formación que utiliza herramientas estadísticas accesibles y aplicadas al entorno real de la empresa.",
                "Un puente entre la intuición y el análisis profundo para liderar con claridad y confianza.",
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
                "Un curso teórico sin aplicación práctica en la empresa.",
                "Una capacitación enfocada únicamente en fórmulas o estadística avanzada.",
                "Un programa que promueve la toma de decisiones basada en suposiciones o intuición sin respaldo en datos.",
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
        subtitle: "Problemas operativos que resuelve el programa",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Decisiones basadas en suposiciones",
                description:
                  "El programa elimina la toma de decisiones subjetivas o basadas en intuición, promoviendo el uso de datos y análisis estadístico para fundamentar cada acción.",
              },
              {
                icon: FileBarChart,
                title: "Falta de control sobre la variabilidad",
                description:
                  "Ayuda a identificar, analizar y reducir la variabilidad en los procesos, permitiendo un mayor control y previsibilidad en los resultados operativos.",
              },
              {
                icon: Calculator,
                title: "Desconocimiento de causas raíz",
                description:
                  "Facilita la identificación de causas reales de los problemas, evitando soluciones superficiales y permitiendo intervenciones efectivas y sostenibles.",
              },
              {
                icon: Users,
                title: "Dificultad para alinear equipos",
                description:
                  "Promueve la alineación de todos los sectores y niveles de la organización en torno a objetivos claros y medibles, mejorando la comunicación y el trabajo colaborativo.",
              },
              {
                icon: AlertTriangle,
                title: "Riesgo de desperdicio y retrabajo",
                description:
                  "Reduce los desperdicios, errores y retrabajos al establecer controles estadísticos y sistemas de mejora continua basados en evidencia.",
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
        subtitle: "Metodología de 5 módulos",
        description:
          "La duración y modalidad se adaptan al contexto y necesidades de la organización. El programa combina workshops presenciales, ejercicios prácticos y acompañamiento experto para asegurar la aplicación real de los conceptos.",
        graphic: <MethodologyGraphic />,
        details: [
          "Cada participante desarrolla un proyecto propio o provisto por la cátedra, con aplicación práctica de los métodos aprendidos. Este trabajo puede ser el punto de partida para futuros proyectos Six Sigma o iniciativas de mejora avanzada.",
          "Finalizado el curso, el participante recibe una certificación en análisis estadístico aplicado a decisiones empresariales, con orientación hacia los estándares Green Belt.",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Decisiones con Certeza",
                description:
                  "Reducir la incertidumbre al tomar decisiones operativas y estratégicas.",
              },
              {
                icon: Calculator,
                title: "Estadística Aplicada",
                description:
                  "Aplicar métodos estadísticos de forma práctica y comprensible.",
              },
              {
                icon: FileBarChart,
                title: "Análisis y Reportes",
                description:
                  "Generar reportes, comparaciones e inferencias que respalden acciones.",
              },
              {
                icon: GraduationCap,
                title: "Formación Profesional",
                description:
                  "Formar habilidades esenciales para roles como Green Belt o analista de mejora continua.",
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
        subtitle: "",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Público objetivo
            </h3>
            {[
              {
                icon: Users,
                title: "Mandos medios, gerentes y profesionales",
                description:
                  "Personas que analizan datos o deben justificar decisiones en sus áreas.",
              },
              {
                icon: AlertTriangle,
                title: "Quienes desean pasar de la intuición al análisis",
                description:
                  "Cualquier persona interesada en fundamentar sus decisiones con datos y análisis en vez de intuición.",
              },
              {
                icon: Settings,
                title:
                  "Equipos de calidad, procesos, supply chain, servicio técnico, planificación y finanzas",
                description:
                  "Áreas clave que requieren análisis de datos para la mejora y toma de decisiones fundamentadas.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  index === 2 ? "col-span-2" : ""
                }`}
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
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "¿Cómo se conecta con Six Sigma y otros programas?",
        description: "",
        details: [],
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Medir con precisión y frecuencia. Sin un sistema de medición
                confiable, la mejora continua no existe.{" "}
                <em>
                  "Solo creo en Dios, para todo lo demás necesito ver los
                  datos."
                </em>{" "}
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mt-2">
                Este curso es un paso fundamental para comprender los conceptos
                clave de Six Sigma, especialmente en lo que respecta al análisis
                de datos y la validación de hipótesis. Está alineado con
                programas como
                <strong>WasteZero™</strong>, <strong>FlowStable™</strong> y{" "}
                <strong>LeanBridge™</strong>, siendo un complemento necesario
                cuando la mejora requiere medición, correlación y pruebas
                estadísticas robustas.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "WasteZero™",
                  description:
                    "Facilita la aceptación de prácticas Lean y prepara al equipo para actuar sobre datos confiables.",
                },
                {
                  icon: Zap,
                  title: "FlowStable™",
                  description:
                    "Permite estabilizar procesos y flujos, apoyándose en mediciones y análisis estadístico.",
                },
                {
                  icon: GitBranch,
                  title: "LeanBridge™",
                  description:
                    "Potencia la adopción de disciplina operativa y el uso de datos para sostener mejoras.",
                },
                {
                  icon: Settings,
                  title: "Six Sigma",
                  description:
                    "Este curso es la base para comprender y aplicar análisis de datos y validación de hipótesis en Six Sigma.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105`}
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
          </>
        ),
      },
    ],
  },
  en: {
    roadmap: {
      problemas: "Problems",
      recurrentes: "Recurring",
      changeBridge: "Change Bridge™",
      cultura: "Culture of",
      mejora: "Improvement",
    },
    modal: {
      close: "Close modal",
      clickForDetails: "Click for more details",
    },
    section: {
      publicoObjetivo: "Target audience",
    },
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "What is it and what is it not?",
        subtitle: "Program features",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Statistics-Based Managerial Decisions™ is a training designed to
                develop professionals capable of interpreting data, analyzing
                variation, and making evidence-based decisions using accessible
                statistical tools applied to the company's reality. This program
                bridges intuition and deep analysis, preparing participants to
                lead with clarity, evidence, and confidence in continuous
                improvement contexts.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                What is it?
              </p>
              {[
                "A practical training to interpret data and analyze process variation.",
                "A program that teaches how to make managerial decisions based on statistical evidence.",
                "A course that uses accessible statistical tools applied to the real business environment.",
                "A bridge between intuition and deep analysis to lead with clarity and confidence.",
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
                "A theoretical course without practical application in the company.",
                "A training focused only on formulas or advanced statistics.",
                "A program that promotes decision-making based on assumptions or intuition without data support.",
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
        subtitle: "Operational problems solved by the program",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Assumption-based decisions",
                description:
                  "The program eliminates subjective or intuition-based decision-making, promoting the use of data and statistical analysis to support every action.",
              },
              {
                icon: FileBarChart,
                title: "Lack of control over variability",
                description:
                  "Helps identify, analyze, and reduce process variability, allowing greater control and predictability in operational results.",
              },
              {
                icon: Calculator,
                title: "Lack of root cause knowledge",
                description:
                  "Facilitates the identification of real causes of problems, avoiding superficial solutions and enabling effective and sustainable interventions.",
              },
              {
                icon: Users,
                title: "Difficulty aligning teams",
                description:
                  "Promotes alignment of all sectors and levels of the organization around clear and measurable objectives, improving communication and collaborative work.",
              },
              {
                icon: AlertTriangle,
                title: "Risk of waste and rework",
                description:
                  "Reduces waste, errors, and rework by establishing statistical controls and evidence-based continuous improvement systems.",
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
        title: "Methodology & Timing",
        subtitle: "5-module methodology",
        description:
          "The duration and modality are adapted to the context and needs of the organization. The program combines in-person workshops, practical exercises, and expert support to ensure real application of the concepts.",
        graphic: <MethodologyGraphic />,
        details: [
          "Each participant develops their own project or one provided by the faculty, with practical application of the methods learned. This work can be the starting point for future Six Sigma projects or advanced improvement initiatives.",
          "Upon completion, the participant receives a certification in applied statistical analysis for business decisions, oriented towards Green Belt standards.",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Program benefits",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Decisions with Certainty",
                description:
                  "Reduce uncertainty when making operational and strategic decisions.",
              },
              {
                icon: Calculator,
                title: "Applied Statistics",
                description:
                  "Apply statistical methods in a practical and understandable way.",
              },
              {
                icon: FileBarChart,
                title: "Analysis and Reports",
                description:
                  "Generate reports, comparisons, and inferences that support actions.",
              },
              {
                icon: GraduationCap,
                title: "Professional Training",
                description:
                  "Develop essential skills for roles such as Green Belt or continuous improvement analyst.",
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
        title: "Who is the program recommended for?",
        subtitle: "",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Target audience
            </h3>
            {[
              {
                icon: Users,
                title: "Middle managers, executives, and professionals",
                description:
                  "People who analyze data or must justify decisions in their areas.",
              },
              {
                icon: AlertTriangle,
                title: "Those who want to move from intuition to analysis",
                description:
                  "Anyone interested in basing their decisions on data and analysis instead of intuition.",
              },
              {
                icon: Settings,
                title:
                  "Quality, process, supply chain, technical service, planning, and finance teams",
                description:
                  "Key areas that require data analysis for improvement and evidence-based decision-making.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  index === 2 ? "col-span-2" : ""
                }`}
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
        title: "What other products is it related to?",
        subtitle: "How does it connect with Six Sigma and other programs?",
        description: "",
        details: [],
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Measure with precision and frequency. Without a reliable
                measurement system, continuous improvement does not exist.{" "}
                <em>
                  "I only believe in God, for everything else I need to see the
                  data."
                </em>{" "}
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mt-2">
                This course is a fundamental step to understand the key concepts
                of Six Sigma, especially regarding data analysis and hypothesis
                validation. It is aligned with programs such as{" "}
                <strong>WasteZero™</strong>, <strong>FlowStable™</strong>, and{" "}
                <strong>LeanBridge™</strong>, being a necessary complement when
                improvement requires robust measurement, correlation, and
                statistical testing.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "WasteZero™",
                  description:
                    "Facilitates the adoption of Lean practices and prepares the team to act on reliable data.",
                },
                {
                  icon: Zap,
                  title: "FlowStable™",
                  description:
                    "Enables process and flow stabilization, relying on measurement and statistical analysis.",
                },
                {
                  icon: GitBranch,
                  title: "LeanBridge™",
                  description:
                    "Strengthens the adoption of operational discipline and the use of data to sustain improvements.",
                },
                {
                  icon: Settings,
                  title: "Six Sigma",
                  description:
                    "This course is the foundation for understanding and applying data analysis and hypothesis validation in Six Sigma.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105`}
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
          </>
        ),
      },
    ],
  },
  pt: {
    roadmap: {
      problemas: "Problemas",
      recurrentes: "Recorrentes",
      changeBridge: "Change Bridge™",
      cultura: "Cultura de",
      mejora: "Melhoria",
    },
    modal: {
      close: "Fechar modal",
      clickForDetails: "Clique para mais detalhes",
    },
    section: {
      publicoObjetivo: "Público-alvo",
    },
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "O que é e o que não é?",
        subtitle: "Características do programa",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Decisões Gerenciais Baseadas em Estatísticas™ é um treinamento
                projetado para formar profissionais capazes de interpretar
                dados, analisar variações e tomar decisões fundamentadas em
                evidências quantitativas, utilizando ferramentas estatísticas
                acessíveis e aplicadas à realidade da empresa. Este programa é a
                ponte entre a intuição e a análise profunda, preparando os
                participantes para liderar com clareza, evidência e confiança em
                contextos de melhoria contínua.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                O que é?
              </p>
              {[
                "Um treinamento prático para interpretar dados e analisar variações nos processos.",
                "Um programa que ensina a tomar decisões gerenciais baseadas em evidências estatísticas.",
                "Uma formação que utiliza ferramentas estatísticas acessíveis e aplicadas ao ambiente real da empresa.",
                "Uma ponte entre a intuição e a análise profunda para liderar com clareza e confiança.",
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
                "Um curso teórico sem aplicação prática na empresa.",
                "Um treinamento focado apenas em fórmulas ou estatística avançada.",
                "Um programa que promove a tomada de decisões baseada em suposições ou intuição sem respaldo em dados.",
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
        subtitle: "Problemas operacionais que o programa resolve",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Decisões baseadas em suposições",
                description:
                  "O programa elimina a tomada de decisões subjetivas ou baseadas em intuição, promovendo o uso de dados e análise estatística para fundamentar cada ação.",
              },
              {
                icon: FileBarChart,
                title: "Falta de controle sobre a variabilidade",
                description:
                  "Ajuda a identificar, analisar e reduzir a variabilidade nos processos, permitindo maior controle e previsibilidade nos resultados operacionais.",
              },
              {
                icon: Calculator,
                title: "Desconhecimento das causas raiz",
                description:
                  "Facilita a identificação das causas reais dos problemas, evitando soluções superficiais e permitindo intervenções eficazes e sustentáveis.",
              },
              {
                icon: Users,
                title: "Dificuldade para alinhar equipes",
                description:
                  "Promove o alinhamento de todos os setores e níveis da organização em torno de objetivos claros e mensuráveis, melhorando a comunicação e o trabalho colaborativo.",
              },
              {
                icon: AlertTriangle,
                title: "Risco de desperdício e retrabalho",
                description:
                  "Reduz desperdícios, erros e retrabalhos ao estabelecer controles estatísticos e sistemas de melhoria contínua baseados em evidências.",
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
        title: "Metodologia & Tempos",
        subtitle: "Metodologia de 5 módulos",
        description:
          "A duração e a modalidade se adaptam ao contexto e às necessidades da organização. O programa combina workshops presenciais, exercícios práticos e acompanhamento especializado para garantir a aplicação real dos conceitos.",
        graphic: <MethodologyGraphic />,
        details: [
          "Cada participante desenvolve um projeto próprio ou fornecido pela cátedra, com aplicação prática dos métodos aprendidos. Este trabalho pode ser o ponto de partida para futuros projetos Six Sigma ou iniciativas de melhoria avançada.",
          "Ao final do curso, o participante recebe uma certificação em análise estatística aplicada a decisões empresariais, com orientação para os padrões Green Belt.",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Decisões com Certeza",
                description:
                  "Reduzir a incerteza ao tomar decisões operacionais e estratégicas.",
              },
              {
                icon: Calculator,
                title: "Estatística Aplicada",
                description:
                  "Aplicar métodos estatísticos de forma prática e compreensível.",
              },
              {
                icon: FileBarChart,
                title: "Análise e Relatórios",
                description:
                  "Gerar relatórios, comparações e inferências que respaldem ações.",
              },
              {
                icon: GraduationCap,
                title: "Formação Profissional",
                description:
                  "Desenvolver habilidades essenciais para funções como Green Belt ou analista de melhoria contínua.",
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
        title: "Para quem o programa é recomendado?",
        subtitle: "",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Público-alvo
            </h3>
            {[
              {
                icon: Users,
                title: "Gestores intermediários, gerentes e profissionais",
                description:
                  "Pessoas que analisam dados ou precisam justificar decisões em suas áreas.",
              },
              {
                icon: AlertTriangle,
                title: "Quem deseja passar da intuição para a análise",
                description:
                  "Qualquer pessoa interessada em fundamentar suas decisões com dados e análise em vez de intuição.",
              },
              {
                icon: Settings,
                title:
                  "Equipes de qualidade, processos, supply chain, serviço técnico, planejamento e finanças",
                description:
                  "Áreas-chave que requerem análise de dados para melhoria e tomada de decisões fundamentadas.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  index === 2 ? "col-span-2" : ""
                }`}
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
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Como se conecta com Six Sigma e outros programas?",
        description: "",
        details: [],
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Medir com precisão e frequência. Sem um sistema de medição
                confiável, a melhoria contínua não existe.{" "}
                <em>
                  "Só acredito em Deus, para todo o resto preciso ver os dados."
                </em>{" "}
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mt-2">
                Este curso é um passo fundamental para compreender os
                conceitos-chave do Six Sigma, especialmente no que diz respeito
                à análise de dados e validação de hipóteses. Está alinhado com
                programas como <strong>WasteZero™</strong>,{" "}
                <strong>FlowStable™</strong> e <strong>LeanBridge™</strong>,
                sendo um complemento necessário quando a melhoria requer
                medição, correlação e testes estatísticos robustos.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "WasteZero™",
                  description:
                    "Facilita a aceitação de práticas Lean e prepara a equipe para agir com base em dados confiáveis.",
                },
                {
                  icon: Zap,
                  title: "FlowStable™",
                  description:
                    "Permite estabilizar processos e fluxos, apoiando-se em medições e análise estatística.",
                },
                {
                  icon: GitBranch,
                  title: "LeanBridge™",
                  description:
                    "Potencializa a adoção de disciplina operacional e o uso de dados para sustentar melhorias.",
                },
                {
                  icon: Settings,
                  title: "Six Sigma",
                  description:
                    "Este curso é a base para compreender e aplicar análise de dados e validação de hipóteses em Six Sigma.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105`}
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
          </>
        ),
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
  const t = translations[lang].modal;

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
            aria-label={t.close}
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

const DecisionesEstadisticasContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const { currentLanguage } = useLanguage();

  // Features traducidos
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
                  {translations[currentLanguage].modal.clickForDetails}
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

export default DecisionesEstadisticasContent;
