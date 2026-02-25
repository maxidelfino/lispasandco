import type React from "react";
import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  CircleQuestionMark,
  Clock,
  Users,
  Settings,
  Grid3x3,
  Zap,
  Box,
  RefreshCcw,
  HandCoins,
  AlertTriangle,
  BarChart2,
  FileWarning,
  Compass,
  Droplet,
  Wheat,
  Package,
  Thermometer,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
import ContentSection from "../shared/ContentSection";
import ProgramModal from "../shared/ProgramModal";

// Traducciones para los textos principales
const translations = {
  clickForDetails: {
    [Language.SPANISH]: "Click para más detalles",
    [Language.ENGLISH]: "Click for more details",
    [Language.PORTUGUESE]: "Clique para mais detalhes",
  },
  closeModal: {
    [Language.SPANISH]: "Cerrar modal",
    [Language.ENGLISH]: "Close modal",
    [Language.PORTUGUESE]: "Fechar modal",
  },
  // Features
  features: [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: {
        [Language.SPANISH]: "¿Qué es y qué no es?",
        [Language.ENGLISH]: "What is it and what is it not?",
        [Language.PORTUGUESE]: "O que é e o que não é?",
      },
      subtitle: {
        [Language.SPANISH]: "Características del programa Asset Bridge™",
        [Language.ENGLISH]: "Features of the Asset Bridge™ program",
        [Language.PORTUGUESE]: "Características do programa Asset Bridge™",
      },
      children: {
        [Language.SPANISH]: (
          <>
            {/* Introducción a la gestión de activos */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                <span className="font-semibold">Asset Bridge™</span> de LYSPAS &
                CO es un programa estructurado que cuenta con un conjunto de
                elementos que permiten el abordaje a las dificultades que posee
                cada planta para la Captura de Valor Óptima de sus activos.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Es un programa que combina estándares internacionales, buenas
                prácticas y herramientas de mejora continua, con la realidad
                operativa y de madurez de cada planta.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Genera vínculos entre las áreas de Mantenimiento, Operaciones,
                Ingeniería y Gestión para maximizar el retorno de valor de su
                inversión a través de la disponibilidad y confiabilidad.
              </p>
            </div>
            {/* ¿Qué es? */}
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                ¿Qué es?
              </p>
              {[
                "Un programa que integra ingeniería, mantenimiento, operaciones y finanzas para la gestión eficiente de activos industriales.",
                "Una solución que adapta las mejores prácticas internacionales (Asset Integrity, RCM, ODR, monitoreo de condición) a la realidad de cada planta.",
                "Un sistema que optimiza la disponibilidad y confiabilidad de los equipos, reduciendo costos y riesgos.",
                "Una metodología que facilita la toma de decisiones informadas durante todo el ciclo de vida de los activos.",
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
                "Solo un software o tablero de indicadores sin integración con la gestión diaria.",
                "Una solución genérica que no considera la realidad y desafíos específicos de cada planta.",
                "Un sistema rígido que no evoluciona con las necesidades del negocio.",
                "Un reemplazo de la gestión operativa, sino un complemento para potenciarla y hacerla más rentable.",
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
        [Language.ENGLISH]: (
          <>
            {/* Asset management introduction */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                <span className="font-semibold">Asset Bridge™</span> by LYSPAS &
                CO is a structured program that provides a set of elements to
                address the challenges each plant faces in achieving optimal
                value capture from its assets.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                It is a program that combines international standards, best
                practices, and continuous improvement tools with the operational
                reality and maturity of each plant.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                It creates links between Maintenance, Operations, Engineering,
                and Management areas to maximize the return on investment
                through availability and reliability.
              </p>
            </div>
            {/* What is it? */}
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                What is it?
              </p>
              {[
                "A program that integrates engineering, maintenance, operations, and finance for efficient industrial asset management.",
                "A solution that adapts international best practices (Asset Integrity, RCM, ODR, condition monitoring) to the reality of each plant.",
                "A system that optimizes equipment availability and reliability, reducing costs and risks.",
                "A methodology that facilitates informed decision-making throughout the asset lifecycle.",
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
                "Just software or a dashboard without integration into daily management.",
                "A generic solution that does not consider the specific reality and challenges of each plant.",
                "A rigid system that does not evolve with business needs.",
                "A replacement for operational management, but rather a complement to enhance and make it more profitable.",
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
        [Language.PORTUGUESE]: (
          <>
            {/* Introdução à gestão de ativos */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                <span className="font-semibold">Asset Bridge™</span> da LYSPAS
                &amp; CO é um programa estruturado que conta com um conjunto de
                elementos que permitem abordar as dificuldades que cada planta
                possui para a Captura Ótima de Valor de seus ativos.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                É um programa que combina padrões internacionais, boas práticas
                e ferramentas de melhoria contínua com a realidade operacional e
                o nível de maturidade de cada planta.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Gera vínculos entre as áreas de Manutenção, Operações,
                Engenharia e Gestão para maximizar o retorno do investimento por
                meio da disponibilidade e confiabilidade dos ativos.
              </p>
            </div>
            {/* O que é? */}
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                O que é?
              </p>
              {[
                "Um programa que integra engenharia, manutenção, operações e finanças para a gestão eficiente de ativos industriais.",
                "Uma solução que adapta as melhores práticas internacionais (Asset Integrity, RCM, ODR, monitoramento de condição) à realidade de cada planta.",
                "Um sistema que otimiza a disponibilidade e confiabilidade dos equipamentos, reduzindo custos e riscos.",
                "Uma metodologia que facilita a tomada de decisões informadas durante todo o ciclo de vida dos ativos.",
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
                "Apenas um software ou painel de indicadores sem integração com a gestão diária.",
                "Uma solução genérica que não considera a realidade e desafios específicos de cada planta.",
                "Um sistema rígido que não evolui com as necessidades do negócio.",
                "Um substituto da gestão operacional, mas sim um complemento para potencializá-la e torná-la mais rentável.",
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
    // ... El resto de features se traducen abajo
  ],
  // El resto de features se traducen abajo
  featuresRest: {
    "2": {
      icon: Zap,
      title: {
        [Language.SPANISH]: "Problemas que resuelve",
        [Language.ENGLISH]: "Problems it solves",
        [Language.PORTUGUESE]: "Problemas que resolve",
      },
      subtitle: {
        [Language.SPANISH]: "Los desafíos operativos",
        [Language.ENGLISH]: "Operational challenges",
        [Language.PORTUGUESE]: "Desafios operacionais",
      },
      items: [
        {
          icon: AlertTriangle,
          title: {
            [Language.SPANISH]: "Baja disponibilidad y paradas no planificadas",
            [Language.ENGLISH]: "Low availability and unplanned shutdowns",
            [Language.PORTUGUESE]:
              "Baixa disponibilidade e paradas não planejadas",
          },
          description: {
            [Language.SPANISH]:
              "Baja disponibilidad de equipos y paradas no planificadas.",
            [Language.ENGLISH]:
              "Low equipment availability and unplanned shutdowns.",
            [Language.PORTUGUESE]:
              "Baixa disponibilidade de equipamentos e paradas não planejadas.",
          },
        },
        {
          icon: HandCoins,
          title: {
            [Language.SPANISH]: "Altos costos de mantenimiento",
            [Language.ENGLISH]: "High maintenance costs",
            [Language.PORTUGUESE]: "Altos custos de manutenção",
          },
          description: {
            [Language.SPANISH]:
              "Altos costos de mantenimiento por prácticas reactivas.",
            [Language.ENGLISH]:
              "High maintenance costs due to reactive practices.",
            [Language.PORTUGUESE]:
              "Altos custos de manutenção devido a práticas reativas.",
          },
        },
        {
          icon: Users,
          title: {
            [Language.SPANISH]: "Falta de coordinación",
            [Language.ENGLISH]: "Lack of coordination",
            [Language.PORTUGUESE]: "Falta de coordenação",
          },
          description: {
            [Language.SPANISH]:
              "Falta de coordinación entre mantenimiento, operaciones y seguridad.",
            [Language.ENGLISH]:
              "Lack of coordination between maintenance, operations, and safety.",
            [Language.PORTUGUESE]:
              "Falta de coordenação entre manutenção, operações e segurança.",
          },
        },
        {
          icon: FileWarning,
          title: {
            [Language.SPANISH]: "Escasa trazabilidad",
            [Language.ENGLISH]: "Poor traceability",
            [Language.PORTUGUESE]: "Baixa rastreabilidade",
          },
          description: {
            [Language.SPANISH]:
              "Escasa trazabilidad en trabajos y decisiones técnicas.",
            [Language.ENGLISH]:
              "Poor traceability in work and technical decisions.",
            [Language.PORTUGUESE]:
              "Baixa rastreabilidade em trabalhos e decisões técnicas.",
          },
        },
        {
          icon: Box,
          title: {
            [Language.SPANISH]: "Gestión de inventarios ineficiente",
            [Language.ENGLISH]: "Inefficient inventory management",
            [Language.PORTUGUESE]: "Gestão de inventário ineficiente",
          },
          description: {
            [Language.SPANISH]:
              "Inventarios de repuestos sobredimensionados o críticos no disponibles.",
            [Language.ENGLISH]:
              "Oversized spare parts inventories or critical parts unavailable.",
            [Language.PORTUGUESE]:
              "Inventários de peças sobredimensionados ou peças críticas indisponíveis.",
          },
        },
        {
          icon: BarChart2,
          title: {
            [Language.SPANISH]:
              "Dificultad para medir madurez y priorizar mejoras",
            [Language.ENGLISH]:
              "Difficulty measuring maturity and prioritizing improvements",
            [Language.PORTUGUESE]:
              "Dificuldade para medir maturidade e priorizar melhorias",
          },
          description: {
            [Language.SPANISH]:
              "Dificultad para medir la madurez de la gestión de activos y priorizar mejoras.",
            [Language.ENGLISH]:
              "Difficulty measuring asset management maturity and prioritizing improvements.",
            [Language.PORTUGUESE]:
              "Dificuldade para medir a maturidade da gestão de ativos e priorizar melhorias.",
          },
        },
      ],
    },
    "4": {
      icon: Clock,
      title: {
        [Language.SPANISH]: "Metodología & Tiempos",
        [Language.ENGLISH]: "Methodology & Timing",
        [Language.PORTUGUESE]: "Metodologia & Tempos",
      },
      subtitle: {
        [Language.SPANISH]:
          "Metodologías, tiempos y aplicaciones por industria",
        [Language.ENGLISH]: "Methodologies, timing, and industry applications",
        [Language.PORTUGUESE]:
          "Metodologias, tempos e aplicações por indústria",
      },
      // children se traduce abajo
    },
    "3": {
      icon: HandCoins,
      title: {
        [Language.SPANISH]: "Beneficios",
        [Language.ENGLISH]: "Benefits",
        [Language.PORTUGUESE]: "Benefícios",
      },
      subtitle: {
        [Language.SPANISH]: "Beneficios del programa Asset Bridge™",
        [Language.ENGLISH]: "Benefits of the Asset Bridge™ program",
        [Language.PORTUGUESE]: "Benefícios do programa Asset Bridge™",
      },
      items: [
        {
          icon: CheckCircle,
          title: {
            [Language.SPANISH]: "Disponibilidad y confiabilidad",
            [Language.ENGLISH]: "Availability and reliability",
            [Language.PORTUGUESE]: "Disponibilidade e confiabilidade",
          },
          description: {
            [Language.SPANISH]:
              "Mayor disponibilidad y confiabilidad de activos críticos.",
            [Language.ENGLISH]:
              "Greater availability and reliability of critical assets.",
            [Language.PORTUGUESE]:
              "Maior disponibilidade e confiabilidade de ativos críticos.",
          },
        },
        {
          icon: RefreshCcw,
          title: {
            [Language.SPANISH]: "Reducción de costos y paradas",
            [Language.ENGLISH]: "Cost and downtime reduction",
            [Language.PORTUGUESE]: "Redução de custos e paradas",
          },
          description: {
            [Language.SPANISH]:
              "Reducción de costos de mantenimiento y pérdidas por paradas no planificadas.",
            [Language.ENGLISH]:
              "Reduction of maintenance costs and losses due to unplanned downtime.",
            [Language.PORTUGUESE]:
              "Redução de custos de manutenção e perdas por paradas não planejadas.",
          },
        },
        {
          icon: Box,
          title: {
            [Language.SPANISH]: "Optimización de inventario",
            [Language.ENGLISH]: "Inventory optimization",
            [Language.PORTUGUESE]: "Otimização de inventário",
          },
          description: {
            [Language.SPANISH]:
              "Optimización del inventario de repuestos críticos.",
            [Language.ENGLISH]:
              "Optimization of critical spare parts inventory.",
            [Language.PORTUGUESE]:
              "Otimização do inventário de peças críticas.",
          },
        },
        {
          icon: Grid3x3,
          title: {
            [Language.SPANISH]: "Integración de áreas",
            [Language.ENGLISH]: "Integration of areas",
            [Language.PORTUGUESE]: "Integração de áreas",
          },
          description: {
            [Language.SPANISH]:
              "Integración efectiva entre áreas técnicas y operativas.",
            [Language.ENGLISH]:
              "Effective integration between technical and operational areas.",
            [Language.PORTUGUESE]:
              "Integração efetiva entre áreas técnicas e operacionais.",
          },
        },
        {
          icon: AlertTriangle,
          title: {
            [Language.SPANISH]: "Cumplimiento y seguridad",
            [Language.ENGLISH]: "Compliance and safety",
            [Language.PORTUGUESE]: "Conformidade e segurança",
          },
          description: {
            [Language.SPANISH]:
              "Cumplimiento normativo y mejora en seguridad industrial.",
            [Language.ENGLISH]:
              "Regulatory compliance and improved industrial safety.",
            [Language.PORTUGUESE]:
              "Conformidade regulatória e melhoria na segurança industrial.",
          },
        },
        {
          icon: BarChart2,
          title: {
            [Language.SPANISH]: "Visión y evolución",
            [Language.ENGLISH]: "Vision and evolution",
            [Language.PORTUGUESE]: "Visão e evolução",
          },
          description: {
            [Language.SPANISH]:
              "Visión clara del nivel de madurez y evolución en la gestión de activos.",
            [Language.ENGLISH]:
              "Clear vision of maturity level and evolution in asset management.",
            [Language.PORTUGUESE]:
              "Visão clara do nível de maturidade e evolução na gestão de ativos.",
          },
        },
      ],
    },
    "6": {
      icon: Users,
      title: {
        [Language.SPANISH]: "¿Para quién está recomendado el programa?",
        [Language.ENGLISH]: "Who is the program recommended for?",
        [Language.PORTUGUESE]: "Para quem o programa é recomendado?",
      },
      subtitle: {
        [Language.SPANISH]: "Tipos de empresas ideales para Asset Bridge™",
        [Language.ENGLISH]: "Ideal companies for Asset Bridge™",
        [Language.PORTUGUESE]: "Tipos de empresas ideais para o Asset Bridge™",
      },
      items: [
        {
          icon: Droplet,
          title: {
            [Language.SPANISH]: "Industria aceitera",
            [Language.ENGLISH]: "Oilseed Industry",
            [Language.PORTUGUESE]: "Indústria de óleos vegetais",
          },
          description: {
            [Language.SPANISH]:
              "Laminadores y quebradores, equipos cuya confiabilidad impacta directamente en la capacidad productiva y el rendimiento de extracción.",
            [Language.ENGLISH]:
              "Rollers and crushers, equipment whose reliability directly impacts productive capacity and extraction yield.",
            [Language.PORTUGUESE]:
              "Laminadores e quebradores, equipamentos cuja confiabilidade impacta diretamente a capacidade produtiva e o rendimento de extração.",
          },
        },
        {
          icon: Wheat,
          title: {
            [Language.SPANISH]: "Molinería y otros procesos mecánicos",
            [Language.ENGLISH]: "Milling and Other Mechanical Processes",
            [Language.PORTUGUESE]: "Moagem e outros processos mecânicos",
          },
          description: {
            [Language.SPANISH]:
              "Molinos, zarandas, quebradores, descascaradores, minimizando desgaste y asegurando un producto final consistente.",
            [Language.ENGLISH]:
              "Mills, sieves, crushers, hullers, minimizing wear and ensuring a consistent final product.",
            [Language.PORTUGUESE]:
              "Moinhos, peneiras, quebradores, descascadores, minimizando o desgaste e garantindo um produto final consistente.",
          },
        },
        {
          icon: Package,
          title: {
            [Language.SPANISH]: "Movimiento de granos",
            [Language.ENGLISH]: "Grain Handling",
            [Language.PORTUGUESE]: "Movimentação de grãos",
          },
          description: {
            [Language.SPANISH]:
              "Plataformas de descarga, transportadores, secadoras, donde la continuidad operativa evita pérdidas de calidad y tiempos de parada.",
            [Language.ENGLISH]:
              "Unloading platforms, conveyors, dryers, where operational continuity prevents quality losses and downtime.",
            [Language.PORTUGUESE]:
              "Plataformas de descarga, transportadores, secadores, onde a continuidade operacional evita perdas de qualidade e paradas.",
          },
        },
        {
          icon: Thermometer,
          title: {
            [Language.SPANISH]: "Sistemas de refrigeración industrial",
            [Language.ENGLISH]: "Industrial Refrigeration Systems",
            [Language.PORTUGUESE]: "Sistemas de refrigeração industrial",
          },
          description: {
            [Language.SPANISH]: "(compresores, evaporadores, condensadores)",
            [Language.ENGLISH]: "(compressors, evaporators, condensers)",
            [Language.PORTUGUESE]:
              "(compressores, evaporadores, condensadores)",
          },
        },
        {
          icon: "Layers", // Usamos "Layers" para representar líneas y procesos de empaque
          title: {
            [Language.SPANISH]: "Líneas de desposte y empaque",
            [Language.ENGLISH]: "Deboning and Packaging Lines",
            [Language.PORTUGUESE]: "Linhas de desossa e embalagem",
          },
          description: {
            [Language.SPANISH]:
              "(cintas transportadoras, sierras, clasificadoras)",
            [Language.ENGLISH]: "(conveyor belts, saws, sorters)",
            [Language.PORTUGUESE]:
              "(esteiras transportadoras, serras, classificadoras)",
          },
        },
        {
          icon: "FlaskConical", // Usamos "FlaskConical" para representar bombas y sistemas de transferencia de fluidos
          title: {
            [Language.SPANISH]: "Bombas y sistemas de transferencia",
            [Language.ENGLISH]: "Pumps and Transfer Systems",
            [Language.PORTUGUESE]: "Bombas e sistemas de transferência",
          },
          description: {
            [Language.SPANISH]: "Fluidos críticos.",
            [Language.ENGLISH]: "Critical fluids.",
            [Language.PORTUGUESE]: "Fluidos críticos.",
          },
        },
      ],
    },
    "5": {
      icon: Settings,
      title: {
        [Language.SPANISH]: "¿Con qué otros productos se relaciona?",
        [Language.ENGLISH]: "Which other products is it related to?",
        [Language.PORTUGUESE]: "Com quais outros produtos está relacionado?",
      },
      subtitle: {
        [Language.SPANISH]: "",
        [Language.ENGLISH]: "",
        [Language.PORTUGUESE]: "",
      },
      description: {
        [Language.SPANISH]:
          "Estos productos se complementan: WasteZero™ facilita la aceptación de prácticas Lean en la empresa y prepara al equipo para actuar; Kaizen Action™ asegura la participación activa de los equipos durante eventos de mejora y genera soluciones aplicables; y LeanBridge™ potencia la adopción de la disciplina operativa necesaria para sostener las mejoras. Paralelamente, StratBridge™ alinea los cambios con los objetivos estratégicos, transformando iniciativas en proyectos priorizados, mientras que Lean Enterprise Transformation™ proporciona el marco para sostener y escalar esos cambios durante procesos de transformación profunda.",
        [Language.ENGLISH]:
          "These products complement each other: WasteZero™ facilitates the adoption of Lean practices in the company and prepares the team to act; Kaizen Action™ ensures active participation of teams during improvement events and generates applicable solutions; and LeanBridge™ enhances the adoption of the operational discipline needed to sustain improvements. Meanwhile, StratBridge™ aligns changes with strategic objectives, turning initiatives into prioritized projects, while Lean Enterprise Transformation™ provides the framework to sustain and scale those changes during deep transformation processes.",
        [Language.PORTUGUESE]:
          "Estes produtos se complementam: WasteZero™ facilita a aceitação de práticas Lean na empresa e prepara a equipe para agir; Kaizen Action™ garante a participação ativa das equipes durante eventos de melhoria e gera soluções aplicáveis; e LeanBridge™ potencializa a adoção da disciplina operacional necessária para sustentar as melhorias. Paralelamente, StratBridge™ alinha as mudanças com os objetivos estratégicos, transformando iniciativas em projetos priorizados, enquanto Lean Enterprise Transformation™ fornece o arcabouço para sustentar e escalar essas mudanças durante processos de transformação profunda.",
      },
      items: [
        {
          icon: Grid3x3,
          title: {
            [Language.SPANISH]: "Ops Excellence System™",
            [Language.ENGLISH]: "Ops Excellence System™",
            [Language.PORTUGUESE]: "Ops Excellence System™",
          },
          description: {
            [Language.SPANISH]:
              "Para integrar la gestión de activos dentro de un sistema de excelencia operacional.",
            [Language.ENGLISH]:
              "To integrate asset management within an operational excellence system.",
            [Language.PORTUGUESE]:
              "Para integrar a gestão de ativos dentro de um sistema de excelência operacional.",
          },
        },
        {
          icon: BarChart2,
          title: {
            [Language.SPANISH]: "Measure Bridge™",
            [Language.ENGLISH]: "Measure Bridge™",
            [Language.PORTUGUESE]: "Measure Bridge™",
          },
          description: {
            [Language.SPANISH]:
              "Para garantizar precisión en la medición y monitoreo de condición.",
            [Language.ENGLISH]:
              "To ensure accuracy in measurement and condition monitoring.",
            [Language.PORTUGUESE]:
              "Para garantir precisão na medição e monitoramento de condição.",
          },
        },
        {
          icon: RefreshCcw,
          title: {
            [Language.SPANISH]: "Change Bridge™",
            [Language.ENGLISH]: "Change Bridge™",
            [Language.PORTUGUESE]: "Change Bridge™",
          },
          description: {
            [Language.SPANISH]:
              "Para gestionar la adopción cultural y organizacional de las nuevas prácticas.",
            [Language.ENGLISH]:
              "To manage the cultural and organizational adoption of new practices.",
            [Language.PORTUGUESE]:
              "Para gerenciar a adoção cultural e organizacional das novas práticas.",
          },
        },
        {
          icon: Compass,
          title: {
            [Language.SPANISH]: "StratBridge™",
            [Language.ENGLISH]: "StratBridge™",
            [Language.PORTUGUESE]: "StratBridge™",
          },
          description: {
            [Language.SPANISH]:
              "Para alinear la estrategia de activos con la estrategia corporativa.",
            [Language.ENGLISH]:
              "To align asset strategy with corporate strategy.",
            [Language.PORTUGUESE]:
              "Para alinhar a estratégia de ativos com a estratégia corporativa.",
          },
        },
      ],
    },
  },
};

const AssetBridgeContent: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  // Construir features traducidos
  const features = [
    {
      id: translations.features[0].id,
      icon: translations.features[0].icon,
      title: translations.features[0].title[currentLanguage],
      subtitle: translations.features[0].subtitle[currentLanguage],
      children: translations.features[0].children[currentLanguage],
    },
    {
      id: "2",
      icon: translations.featuresRest["2"].icon,
      title: translations.featuresRest["2"].title[currentLanguage],
      subtitle: translations.featuresRest["2"].subtitle[currentLanguage],
      children: (
        <div className="grid grid-cols-2 gap-6">
          {translations.featuresRest["2"].items.map((item, idx) => (
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
                  {item.title[currentLanguage]}
                </h4>
              </div>
              <p className="text-[var(--color-text)] leading-relaxed">
                {item.description[currentLanguage]}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "4",
      icon: translations.featuresRest["4"].icon,
      title: translations.featuresRest["4"].title[currentLanguage],
      subtitle: translations.featuresRest["4"].subtitle[currentLanguage],
      children: (() => {
        // Traducciones para el bloque de metodología y aplicaciones por industria
        const blocks = {
          [Language.SPANISH]: {
            metodologia: (
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
                <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-2">
                  <strong>Asset Bridge™</strong> combina prácticas de clase
                  mundial con herramientas propias de LYSPAS & CO, trabajando
                  sobre cinco subsistemas clave:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md mb-2">
                  <li>
                    <strong>Asset Care:</strong> Cultura de cuidado diario por
                    parte de los operadores.
                  </li>
                  <li>
                    <strong>Integridad y salud de equipos:</strong> Integridad
                    mecánica, estructural y de seguridad. Monitoreo de
                    desempeño.
                  </li>
                  <li>
                    <strong>Confiabilidad:</strong> Análisis de fallas,
                    confiabilidad y prevención de incidentes.
                  </li>
                  <li>
                    <strong>Gestión de órdenes de trabajo:</strong>{" "}
                    Planificación, programación, coordinación y registro de
                    tareas.
                  </li>
                </ul>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-2">
                  Estos subsistemas se soportan en un ciclo continuo que
                  incluye:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md">
                  <li>Planificación de tareas</li>
                  <li>Programación de intervenciones</li>
                  <li>Coordinación entre áreas</li>
                  <li>Registro y trazabilidad de trabajos</li>
                  <li>Gestión de herramientas y repuestos críticos</li>
                </ul>
              </div>
            ),
            duracion: (
              <div>
                <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                  Duración y tiempos:
                </p>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-1">
                  La duración es adaptable según el diagnóstico inicial.
                  Implementaciones típicas: <strong>10 a 12 meses</strong>, con
                  hitos trimestrales y resultados visibles desde el primer
                  trimestre.
                </p>
              </div>
            ),
          },
          [Language.ENGLISH]: {
            metodologia: (
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
                <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-2">
                  <strong>Asset Bridge™</strong> combines world-class practices
                  with LYSPAS & CO's own tools, working on five key subsystems:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md mb-2">
                  <li>
                    <strong>Asset Care:</strong> Daily care culture by
                    operators.
                  </li>
                  <li>
                    <strong>Equipment integrity and health:</strong> Mechanical,
                    structural, and safety integrity. Performance monitoring.
                  </li>
                  <li>
                    <strong>Reliability:</strong> Failure analysis, reliability,
                    and incident prevention.
                  </li>
                  <li>
                    <strong>Work order management:</strong> Planning,
                    scheduling, coordination, and task recording.
                  </li>
                </ul>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-2">
                  These subsystems are supported by a continuous cycle that
                  includes:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md">
                  <li>Task planning</li>
                  <li>Intervention scheduling</li>
                  <li>Coordination between areas</li>
                  <li>Work recording and traceability</li>
                  <li>Management of critical tools and spare parts</li>
                </ul>
              </div>
            ),
            duracion: (
              <div>
                <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                  Duration and timing:
                </p>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-1">
                  The duration is adaptable according to the initial diagnosis.
                  Typical implementations: <strong>10 to 12 months</strong>,
                  with quarterly milestones and visible results from the first
                  quarter.
                </p>
              </div>
            ),
          },
          [Language.PORTUGUESE]: {
            metodologia: (
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
                <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-2">
                  <strong>Asset Bridge™</strong> combina práticas de classe
                  mundial com ferramentas próprias da LYSPAS & CO, atuando em
                  cinco subsistemas-chave:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md mb-2">
                  <li>
                    <strong>Asset Care:</strong> Cultura de cuidado diário pelos
                    operadores.
                  </li>
                  <li>
                    <strong>Integridade e saúde dos equipamentos:</strong>{" "}
                    Integridade mecânica, estrutural e de segurança.
                    Monitoramento de desempenho.
                  </li>
                  <li>
                    <strong>Confiabilidade:</strong> Análise de falhas,
                    confiabilidade e prevenção de incidentes.
                  </li>
                  <li>
                    <strong>Gestão de ordens de serviço:</strong> Planejamento,
                    programação, coordenação e registro de tarefas.
                  </li>
                </ul>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-2">
                  Esses subsistemas são suportados por um ciclo contínuo que
                  inclui:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md">
                  <li>Planejamento de tarefas</li>
                  <li>Programação de intervenções</li>
                  <li>Coordenação entre áreas</li>
                  <li>Registro e rastreabilidade de trabalhos</li>
                  <li>Gestão de ferramentas e peças críticas</li>
                </ul>
              </div>
            ),
            duracion: (
              <div>
                <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                  Duração e tempos:
                </p>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-1">
                  A duração é adaptável conforme o diagnóstico inicial.
                  Implementações típicas: <strong>10 a 12 meses</strong>, com
                  marcos trimestrais e resultados visíveis desde o primeiro
                  trimestre.
                </p>
              </div>
            ),
          },
        };
        const b = blocks[currentLanguage];
        return (
          <div>
            {b.metodologia}
            {b.duracion}
          </div>
        );
      })(),
    },
    {
      id: "3",
      icon: translations.featuresRest["3"].icon,
      title: translations.featuresRest["3"].title[currentLanguage],
      subtitle: translations.featuresRest["3"].subtitle[currentLanguage],
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {translations.featuresRest["3"].items.map((feature, index) => (
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
                  {feature.title[currentLanguage]}
                </h3>
              </div>
              <p className="text-[var(--color-text)]">
                {feature.description[currentLanguage]}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "6",
      icon: translations.featuresRest["6"].icon,
      title: translations.featuresRest["6"].title[currentLanguage],
      subtitle: translations.featuresRest["6"].subtitle[currentLanguage],
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {translations.featuresRest["6"].items.map((feature, index) => (
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
                  {feature.title[currentLanguage]}
                </h3>
              </div>
              <p className="text-[var(--color-text)]">
                {feature.description[currentLanguage]}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "5",
      icon: translations.featuresRest["5"].icon,
      title: translations.featuresRest["5"].title[currentLanguage],
      subtitle: translations.featuresRest["5"].subtitle[currentLanguage],
      description: translations.featuresRest["5"].description[currentLanguage],
      details: [],
      children: (
        <div>
          <div className="mb-8">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              {translations.featuresRest["5"].description[currentLanguage]}
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {translations.featuresRest["5"].items.map((item, idx) => (
              <div
                key={idx}
                className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  idx === 4 ? "col-span-2" : ""
                }`}
              >
                <div className="flex items-center mb-3 space-x-3">
                  <item.icon className="w-8 h-8" />
                  <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                    {item.title[currentLanguage]}
                  </h4>
                </div>
                <p className="text-[var(--color-text)] leading-relaxed">
                  {item.description[currentLanguage]}
                </p>
              </div>
            ))}
          </div>
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
    <div id="AssetBridge-content" className="bg-[var(--color-bg)]">
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
        closeModalLabel={translations.closeModal[currentLanguage]}
      />
    </div>
  );
};

export default AssetBridgeContent;
