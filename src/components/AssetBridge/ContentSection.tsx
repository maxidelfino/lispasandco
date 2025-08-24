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
  Grid3x3,
  Zap,
  Box,
  RefreshCcw,
  HandCoins,
  AlertTriangle,
  BarChart2,
  FileWarning,
  Compass,
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

// Traducciones para los textos principales
const translations = {
  clickForDetails: {
    [Language.SPANISH]: "Click para más detalles",
    [Language.ENGLISH]: "Click for more details",
    [Language.PORTUGUESE]: "Clique para mais detalhes",
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
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                En entornos industriales, la gestión de activos es la disciplina
                que asegura que los equipos e instalaciones mantengan su
                rendimiento, seguridad y valor durante todo su ciclo de vida.
                Implica integrar ingeniería, mantenimiento, operaciones y
                gestión financiera para tomar decisiones informadas sobre
                adquisición, uso, mantenimiento, renovación y disposición de los
                activos.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                El objetivo de realizar un mantenimiento correcto y gestionar
                adecuadamente los activos no solo mejora su desempeño técnico,
                sino que asegura su disponibilidad cuando se los necesite, y de
                forma rentable.
              </p>
            </div>
            {/* ¿Qué es el programa Asset Bridge? */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-accent)]/5 to-[var(--color-secondary)]/5 rounded-2xl border-l-4 border-[var(--color-accent)]">
              <h3 className="text-[var(--color-primary)] font-bold text-lg mb-2">
                ¿Qué es el programa Asset Bridge?
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                <span className="font-semibold">Asset Bridge™</span> de LYSPAS &
                CO es un programa estructurado que conecta las mejores prácticas
                de Asset Management con la realidad operativa de cada planta.
                Combina metodologías como Asset Integrity Management,
                Reliability Centered Maintenance (RCM), Operator Driven
                Reliability (ODR) y sistemas de monitoreo de condición para
                optimizar disponibilidad y confiabilidad, al tiempo que reduce
                costos y riesgos.
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
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                In industrial environments, asset management is the discipline
                that ensures equipment and facilities maintain their
                performance, safety, and value throughout their lifecycle. It
                involves integrating engineering, maintenance, operations, and
                financial management to make informed decisions about
                acquisition, use, maintenance, renewal, and disposal of assets.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                The goal of proper maintenance and asset management is not only
                to improve technical performance, but also to ensure
                availability when needed, and in a cost-effective way.
              </p>
            </div>
            {/* What is the Asset Bridge program? */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-accent)]/5 to-[var(--color-secondary)]/5 rounded-2xl border-l-4 border-[var(--color-accent)]">
              <h3 className="text-[var(--color-primary)] font-bold text-lg mb-2">
                What is the Asset Bridge program?
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                <span className="font-semibold">Asset Bridge™</span> by LYSPAS &
                CO is a structured program that connects best practices in Asset
                Management with the operational reality of each plant. It
                combines methodologies such as Asset Integrity Management,
                Reliability Centered Maintenance (RCM), Operator Driven
                Reliability (ODR), and condition monitoring systems to optimize
                availability and reliability, while reducing costs and risks.
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
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                Em ambientes industriais, a gestão de ativos é a disciplina que
                garante que os equipamentos e instalações mantenham seu
                desempenho, segurança e valor durante todo o ciclo de vida.
                Envolve integrar engenharia, manutenção, operações e gestão
                financeira para tomar decisões informadas sobre aquisição, uso,
                manutenção, renovação e descarte dos ativos.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                O objetivo de realizar uma manutenção correta e gerenciar
                adequadamente os ativos não só melhora seu desempenho técnico,
                mas também garante sua disponibilidade quando necessário, de
                forma rentável.
              </p>
            </div>
            {/* O que é o programa Asset Bridge? */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-accent)]/5 to-[var(--color-secondary)]/5 rounded-2xl border-l-4 border-[var(--color-accent)]">
              <h3 className="text-[var(--color-primary)] font-bold text-lg mb-2">
                O que é o programa Asset Bridge?
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                <span className="font-semibold">Asset Bridge™</span> da LYSPAS &
                CO é um programa estruturado que conecta as melhores práticas de
                Asset Management com a realidade operacional de cada planta.
                Combina metodologias como Asset Integrity Management,
                Reliability Centered Maintenance (RCM), Operator Driven
                Reliability (ODR) e sistemas de monitoramento de condição para
                otimizar disponibilidade e confiabilidade, ao mesmo tempo que
                reduz custos e riscos.
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
          icon: Box,
          title: {
            [Language.SPANISH]: "Empresas industriales de sectores críticos",
            [Language.ENGLISH]: "Industrial companies in critical sectors",
            [Language.PORTUGUESE]: "Empresas industriais de setores críticos",
          },
          description: {
            [Language.SPANISH]:
              "Empresas industriales de sectores como manufactura, alimentos y bebidas, farmacéutica, minería, energía, química, papel y celulosa, entre otros, que gestionan activos físicos críticos.",
            [Language.ENGLISH]:
              "Industrial companies in sectors such as manufacturing, food and beverage, pharmaceutical, mining, energy, chemical, paper and pulp, among others, that manage critical physical assets.",
            [Language.PORTUGUESE]:
              "Empresas industriais de setores como manufatura, alimentos e bebidas, farmacêutica, mineração, energia, química, papel e celulose, entre outros, que gerenciam ativos físicos críticos.",
          },
        },
        {
          icon: Settings,
          title: {
            [Language.SPANISH]:
              "Organizaciones enfocadas en mantenimiento y confiabilidad",
            [Language.ENGLISH]:
              "Organizations focused on maintenance and reliability",
            [Language.PORTUGUESE]:
              "Organizações focadas em manutenção e confiabilidade",
          },
          description: {
            [Language.SPANISH]:
              "Organizaciones que buscan optimizar la gestión de mantenimiento, confiabilidad y disponibilidad de sus equipos e instalaciones.",
            [Language.ENGLISH]:
              "Organizations seeking to optimize maintenance management, reliability, and availability of their equipment and facilities.",
            [Language.PORTUGUESE]:
              "Organizações que buscam otimizar a gestão de manutenção, confiabilidade e disponibilidade de seus equipamentos e instalações.",
          },
        },
        {
          icon: Grid3x3,
          title: {
            [Language.SPANISH]:
              "Empresas con integración de áreas técnicas y de gestión",
            [Language.ENGLISH]:
              "Companies with integration of technical and management areas",
            [Language.PORTUGUESE]:
              "Empresas com integração de áreas técnicas e de gestão",
          },
          description: {
            [Language.SPANISH]:
              "Empresas con necesidades de integración entre áreas técnicas, operativas y de gestión, para alinear la estrategia de activos con los objetivos corporativos.",
            [Language.ENGLISH]:
              "Companies needing integration between technical, operational, and management areas to align asset strategy with corporate objectives.",
            [Language.PORTUGUESE]:
              "Empresas com necessidades de integração entre áreas técnicas, operacionais e de gestão, para alinhar a estratégia de ativos com os objetivos corporativos.",
          },
        },
        {
          icon: Users,
          title: {
            [Language.SPANISH]: "Líderes y equipos de gestión de activos",
            [Language.ENGLISH]: "Asset management leaders and teams",
            [Language.PORTUGUESE]: "Líderes e equipes de gestão de ativos",
          },
          description: {
            [Language.SPANISH]:
              "Líderes de mantenimiento, operaciones, ingeniería, producción, calidad y gestión de activos que desean fortalecer la cultura de mejora continua y cumplimiento normativo.",
            [Language.ENGLISH]:
              "Leaders in maintenance, operations, engineering, production, quality, and asset management who want to strengthen a culture of continuous improvement and regulatory compliance.",
            [Language.PORTUGUESE]:
              "Líderes de manutenção, operações, engenharia, produção, qualidade e gestão de ativos que desejam fortalecer a cultura de melhoria contínua e conformidade regulatória.",
          },
        },
        {
          icon: RefreshCcw,
          title: {
            [Language.SPANISH]:
              "Compañías en transformación digital de activos",
            [Language.ENGLISH]: "Companies in digital asset transformation",
            [Language.PORTUGUESE]:
              "Empresas em transformação digital de ativos",
          },
          description: {
            [Language.SPANISH]:
              "Compañías en procesos de transformación digital, implementación de sistemas de gestión de activos (EAM/CMMS) o que buscan elevar su nivel de madurez en gestión de activos.",
            [Language.ENGLISH]:
              "Companies undergoing digital transformation, implementing asset management systems (EAM/CMMS), or seeking to raise their asset management maturity level.",
            [Language.PORTUGUESE]:
              "Empresas em processos de transformação digital, implementação de sistemas de gestão de ativos (EAM/CMMS) ou que buscam elevar seu nível de maturidade em gestão de ativos.",
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
            aplicaciones: (
              <div className="mb-8">
                <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                  Aplicaciones por industria y enfoque específico:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md space-y-1">
                  <li>
                    <strong>Industria aceitera:</strong> Laminadores y
                    quebradores, equipos cuya confiabilidad impacta directamente
                    en la capacidad productiva y el rendimiento de extracción.
                  </li>
                  <li>
                    <strong>Movimiento de granos:</strong> Plataformas de
                    descarga, transportadores, secadoras, donde la continuidad
                    operativa evita pérdidas de calidad y tiempos de parada.
                  </li>
                  <li>
                    <strong>Molinería y otros procesos mecánicos:</strong>{" "}
                    Molinos, zarandas, quebradores, descascaradores, minimizando
                    desgaste y asegurando un producto final consistente.
                  </li>
                  <li>
                    <strong>Sistemas de refrigeración industrial:</strong>{" "}
                    Compresores, evaporadores, condensadores.
                  </li>
                  <li>
                    <strong>Líneas de desposte y empaque:</strong> Cintas
                    transportadoras, sierras, clasificadoras.
                  </li>
                  <li>
                    <strong>
                      Bombas y sistemas de transferencia de fluidos críticos.
                    </strong>
                  </li>
                </ul>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-2">
                  En cada industria, los beneficios se traducen en mayor
                  disponibilidad operativa, reducción de costos por fallas y
                  extensión de la vida útil, con métricas claras de impacto.
                </p>
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
            aplicaciones: (
              <div className="mb-8">
                <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                  Industry applications and specific focus:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md space-y-1">
                  <li>
                    <strong>Oilseed industry:</strong> Rollers and crushers,
                    equipment whose reliability directly impacts productive
                    capacity and extraction yield.
                  </li>
                  <li>
                    <strong>Grain handling:</strong> Unloading platforms,
                    conveyors, dryers, where operational continuity prevents
                    quality losses and downtime.
                  </li>
                  <li>
                    <strong>Milling and other mechanical processes:</strong>{" "}
                    Mills, screens, crushers, hullers, minimizing wear and
                    ensuring a consistent final product.
                  </li>
                  <li>
                    <strong>Industrial refrigeration systems:</strong>{" "}
                    Compressors, evaporators, condensers.
                  </li>
                  <li>
                    <strong>Deboning and packaging lines:</strong> Conveyor
                    belts, saws, sorters.
                  </li>
                  <li>
                    <strong>Pumps and critical fluid transfer systems.</strong>
                  </li>
                </ul>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-2">
                  In each industry, the benefits translate into greater
                  operational availability, reduced failure costs, and extended
                  useful life, with clear impact metrics.
                </p>
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
            aplicaciones: (
              <div className="mb-8">
                <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-2">
                  Aplicações por indústria e foco específico:
                </p>
                <ul className="list-disc pl-6 text-[var(--color-text)] leading-relaxed text-md space-y-1">
                  <li>
                    <strong>Indústria de óleos vegetais:</strong> Laminadores e
                    quebradores, equipamentos cuja confiabilidade impacta
                    diretamente na capacidade produtiva e no rendimento de
                    extração.
                  </li>
                  <li>
                    <strong>Movimentação de grãos:</strong> Plataformas de
                    descarga, transportadores, secadores, onde a continuidade
                    operacional evita perdas de qualidade e tempos de parada.
                  </li>
                  <li>
                    <strong>Moagem e outros processos mecânicos:</strong>{" "}
                    Moinhos, peneiras, quebradores, descascadores, minimizando
                    desgaste e garantindo um produto final consistente.
                  </li>
                  <li>
                    <strong>Sistemas de refrigeração industrial:</strong>{" "}
                    Compressores, evaporadores, condensadores.
                  </li>
                  <li>
                    <strong>Linhas de desossa e embalagem:</strong> Esteiras
                    transportadoras, serras, classificadoras.
                  </li>
                  <li>
                    <strong>
                      Bombas e sistemas críticos de transferência de fluidos.
                    </strong>
                  </li>
                </ul>
                <p className="text-[var(--color-text)] leading-relaxed text-md mt-2">
                  Em cada indústria, os benefícios se traduzem em maior
                  disponibilidade operacional, redução de custos por falhas e
                  extensão da vida útil, com métricas claras de impacto.
                </p>
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
            {b.aplicaciones}
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

export default AssetBridgeContent;
