"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  CircleQuestionMark,
  Clock,
  X,
  Zap,
  HandCoins,
  Target,
  ShieldCheck,
  MapPin,
  Users,
  Settings,
  Briefcase,
  Factory,
} from "lucide-react";
import LeanBridgeTimelineGraphic from "../../icons-componets/LeanBridge/LeanBridgeTimelineGraphic";
import ConnectionsGraphic from "../../icons-componets/FiveSPlus/ConnectionsGraphic";
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
    // Features
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Definición clara del programa LeanBridge™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                LeanBridge™ es un programa de transformación integral diseñado
                por LYSPAS & CO para implementar técnicas de gestión Lean en
                empresas que buscan mejorar su eficiencia, eliminar desperdicios
                y construir una cultura de mejora continua sostenible. Más que
                un conjunto de herramientas, LeanBridge™ es un puente: entre el
                estado actual y el estado ideal, entre los equipos operativos y
                los objetivos estratégicos, entre la ejecución diaria y la
                visión de largo plazo.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                ¿Qué es?
              </p>
              {[
                "✔ Un programa integral de transformación operativa con foco en eficiencia y cultura Lean.",
                "✔ Una guía práctica para reducir desperdicios y conectar operaciones con estrategia.",
                "✔ El primer paso para equipos que desean profesionalizar su gestión operativa.",
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
                "✘ Un conjunto aislado de herramientas sin contexto.",
                "✘ Una iniciativa superficial sin conexión con la estrategia.",
                "✘ Un curso teórico sin aplicación directa en el lugar de trabajo.",
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
        subtitle: "LeanBridge™ se mide por el valor de las ideas que genera.",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Esta es, sin duda, una de las primeras preguntas que se hace
              cualquier gerente antes de iniciar la implementación de un sistema
              de mejora continua.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              La aplicación de <strong>LeanBridge™</strong> genera beneficios
              rápidos y visibles, especialmente en lo referente al orden, la
              planificación de la producción o los servicios, y el cumplimiento
              de metas operativas preestablecidas. Uno de los pilares del
              programa es la gestión visual, que permite compartir información
              clave con los equipos, alinear expectativas y conectar los planes
              con las acciones diarias.
            </p>
          </div>
        ),
      },
      {
        id: "3",
        icon: Clock,
        title: "Metodología & Tiempos",
        subtitle: "8 meses de transformación estructurada",
        description:
          "LeanBridge™ se implementa a través de 10 fases estructuradas durante 8 meses.",
        graphic: <LeanBridgeTimelineGraphic />,
        details: [
          "Fase Inicial: Diagnóstico y planificación (presencial) – 1 semana de trabajo en el lugar",
          "Fase 1: Introducción al grupo. Discusión sobre objetivos y planes estratégicos. Entrenamiento y despliegue de herramientas LYSPAS PACK 1 (presencial)",
          "Fase 2: Coaching interno y seguimiento (virtual continuo). Entrenamiento y despliegue de herramientas LYSPAS PACK 2 (presencial)",
          "Fase 3: Primera Reunión de Performance. Entrenamiento y despliegue de herramientas LYSPAS PACK 3 (presencial)",
          "Fase 4: Coaching interno y seguimiento (virtual continuo). Entrenamiento y despliegue de herramientas LYSPAS PACK 4 (presencial)",
          "Fase 5: Consolidación y autonomía del equipo interno. Retrospectiva y ajustes",
          "Fase 6 a 10: Corrección de desvíos, customización de herramientas. Auditorias de gestión.",
        ],
      },
      {
        id: "4",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa LeanBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Toma de Decisiones Descentralizada",
                description:
                  "Redistribución del poder de decisión hacia los niveles jerárquicos más bajos, según sus capacidades y responsabilidades.",
              },
              {
                icon: MapPin,
                title: "Resolución en el Lugar",
                description:
                  "Los problemas se resuelven rápidamente en el lugar donde ocurren, reduciendo demoras y retrabajos.",
              },
              {
                icon: ShieldCheck,
                title: "Empoderamiento del Equipo",
                description:
                  "Los equipos de primera línea ganan autonomía y compromiso al ser parte activa de la solución diaria.",
              },
              {
                icon: Target,
                title: "Foco Estratégico para Líderes",
                description:
                  "Supervisores y gerencias se liberan de la urgencia operativa para concentrarse en la mejora continua y decisiones clave.",
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
        icon: Users,
        title: "¿Para quién está recomendado el programa?",
        subtitle: "Tipos de empresas ideales para LeanBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Tipos de Empresas
            </h3>
            {[
              {
                icon: Factory,
                title: "Empresas Industriales y de Servicios",
                description:
                  "Pensado para organizaciones que buscan fortalecer su disciplina operativa y estandarizar procesos clave.",
              },
              {
                icon: Users,
                title: "Equipos de Alto Impacto",
                description:
                  "Ideal para áreas con alta concentración de personas y donde la colaboración es clave para los resultados.",
              },
              {
                icon: Briefcase,
                title: "Ambientes Complejos",
                description:
                  "Aplicable a espacios con alto tráfico, riesgo, dispersión de materiales o necesidad de orden estructurado.",
              },
              {
                icon: Target,
                title: "Empresas con Visión Estratégica",
                description:
                  "Para aquellas que desean alinear la mejora continua con la estrategia organizacional.",
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
        id: "6",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "Escalera sólida hacia un sistema Lean integral",
        description:
          "LeanBridge™ conecta la mejora de piso con la estrategia, trabajando en conjunto con FlowStable™, Kaizen Action™ y StratBridge™ para sostener resultados de largo plazo",
        graphic: <ConnectionsGraphic title="LeanBridge™" />,
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
        subtitle: "Clear definition of the LeanBridge™ program",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                LeanBridge™ is a comprehensive transformation program designed
                by LYSPAS & CO to implement Lean management techniques in
                companies seeking to improve efficiency, eliminate waste, and
                build a sustainable culture of continuous improvement. More than
                a set of tools, LeanBridge™ is a bridge: between the current
                state and the ideal state, between operational teams and
                strategic objectives, between daily execution and long-term
                vision.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                What is it?
              </p>
              {[
                "✔ A comprehensive operational transformation program focused on efficiency and Lean culture.",
                "✔ A practical guide to reduce waste and connect operations with strategy.",
                "✔ The first step for teams seeking to professionalize their operational management.",
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
                "✘ An isolated set of tools without context.",
                "✘ A superficial initiative disconnected from strategy.",
                "✘ A theoretical course without direct workplace application.",
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
        subtitle:
          "LeanBridge™ is measured by the value of the ideas it generates.",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              This is, without a doubt, one of the first questions any manager
              asks before starting the implementation of a continuous
              improvement system.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              The application of <strong>LeanBridge™</strong> generates quick
              and visible benefits, especially regarding order, production or
              service planning, and the achievement of pre-established
              operational goals. One of the program's pillars is visual
              management, which allows key information to be shared with teams,
              aligns expectations, and connects plans with daily actions.
            </p>
          </div>
        ),
      },
      {
        id: "3",
        icon: Clock,
        title: "Methodology & Timeline",
        subtitle: "8 months of structured transformation",
        description:
          "LeanBridge™ is implemented through 10 structured phases over 8 months.",
        graphic: <LeanBridgeTimelineGraphic />,
        details: [
          "Initial Phase: Diagnosis and planning (on-site) – 1 week of on-site work",
          "Phase 1: Group introduction. Discussion of objectives and strategic plans. Training and deployment of LYSPAS PACK 1 tools (on-site)",
          "Phase 2: Internal coaching and follow-up (continuous virtual). Training and deployment of LYSPAS PACK 2 tools (on-site)",
          "Phase 3: First Performance Meeting. Training and deployment of LYSPAS PACK 3 tools (on-site)",
          "Phase 4: Internal coaching and follow-up (continuous virtual). Training and deployment of LYSPAS PACK 4 tools (on-site)",
          "Phase 5: Consolidation and autonomy of the internal team. Retrospective and adjustments",
          "Phases 6 to 10: Correction of deviations, tool customization. Management audits.",
        ],
      },
      {
        id: "4",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Benefits of the LeanBridge™ program",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Decentralized Decision-Making",
                description:
                  "Redistribution of decision-making power to lower hierarchical levels, according to their capabilities and responsibilities.",
              },
              {
                icon: MapPin,
                title: "On-the-Spot Resolution",
                description:
                  "Problems are quickly resolved where they occur, reducing delays and rework.",
              },
              {
                icon: ShieldCheck,
                title: "Team Empowerment",
                description:
                  "Frontline teams gain autonomy and commitment by being active participants in daily solutions.",
              },
              {
                icon: Target,
                title: "Strategic Focus for Leaders",
                description:
                  "Supervisors and management are freed from operational urgency to focus on continuous improvement and key decisions.",
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
        icon: Users,
        title: "Who is the program recommended for?",
        subtitle: "Ideal types of companies for LeanBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Types of Companies
            </h3>
            {[
              {
                icon: Factory,
                title: "Industrial and Service Companies",
                description:
                  "Designed for organizations seeking to strengthen operational discipline and standardize key processes.",
              },
              {
                icon: Users,
                title: "High-Impact Teams",
                description:
                  "Ideal for areas with a high concentration of people and where collaboration is key to results.",
              },
              {
                icon: Briefcase,
                title: "Complex Environments",
                description:
                  "Applicable to spaces with high traffic, risk, material dispersion, or need for structured order.",
              },
              {
                icon: Target,
                title: "Companies with Strategic Vision",
                description:
                  "For those wishing to align continuous improvement with organizational strategy.",
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
        id: "6",
        icon: Settings,
        title: "Which other products is it related to?",
        subtitle: "Solid ladder towards an integral Lean system",
        description:
          "LeanBridge™ connects shop floor improvement with strategy, working together with FlowStable™, Kaizen Action™, and StratBridge™ to sustain long-term results",
        graphic: <ConnectionsGraphic title="LeanBridge™" />,
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
        subtitle: "Definição clara do programa LeanBridge™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                LeanBridge™ é um programa de transformação integral desenvolvido
                pela LYSPAS & CO para implementar técnicas de gestão Lean em
                empresas que buscam melhorar sua eficiência, eliminar
                desperdícios e construir uma cultura de melhoria contínua
                sustentável. Mais do que um conjunto de ferramentas, LeanBridge™
                é uma ponte: entre o estado atual e o estado ideal, entre as
                equipes operacionais e os objetivos estratégicos, entre a
                execução diária e a visão de longo prazo.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                O que é?
              </p>
              {[
                "✔ Um programa integral de transformação operacional com foco em eficiência e cultura Lean.",
                "✔ Um guia prático para reduzir desperdícios e conectar operações com a estratégia.",
                "✔ O primeiro passo para equipes que desejam profissionalizar sua gestão operacional.",
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
                "✘ Um conjunto isolado de ferramentas sem contexto.",
                "✘ Uma iniciativa superficial sem conexão com a estratégia.",
                "✘ Um curso teórico sem aplicação direta no local de trabalho.",
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
        subtitle: "LeanBridge™ é medido pelo valor das ideias que gera.",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Esta é, sem dúvida, uma das primeiras perguntas que qualquer
              gerente faz antes de iniciar a implementação de um sistema de
              melhoria contínua.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              A aplicação do <strong>LeanBridge™</strong> gera benefícios
              rápidos e visíveis, especialmente no que diz respeito à ordem, ao
              planejamento da produção ou dos serviços e ao cumprimento de metas
              operacionais preestabelecidas. Um dos pilares do programa é a
              gestão visual, que permite compartilhar informações-chave com as
              equipes, alinhar expectativas e conectar os planos com as ações
              diárias.
            </p>
          </div>
        ),
      },
      {
        id: "3",
        icon: Clock,
        title: "Metodologia & Prazos",
        subtitle: "8 meses de transformação estruturada",
        description:
          "LeanBridge™ é implementado por meio de 10 fases estruturadas ao longo de 8 meses.",
        graphic: <LeanBridgeTimelineGraphic />,
        details: [
          "Fase Inicial: Diagnóstico e planejamento (presencial) – 1 semana de trabalho no local",
          "Fase 1: Introdução ao grupo. Discussão sobre objetivos e planos estratégicos. Treinamento e implantação das ferramentas LYSPAS PACK 1 (presencial)",
          "Fase 2: Coaching interno e acompanhamento (virtual contínuo). Treinamento e implantação das ferramentas LYSPAS PACK 2 (presencial)",
          "Fase 3: Primeira Reunião de Performance. Treinamento e implantação das ferramentas LYSPAS PACK 3 (presencial)",
          "Fase 4: Coaching interno e acompanhamento (virtual contínuo). Treinamento e implantação das ferramentas LYSPAS PACK 4 (presencial)",
          "Fase 5: Consolidação e autonomia da equipe interna. Retrospectiva e ajustes",
          "Fases 6 a 10: Correção de desvios, customização de ferramentas. Auditorias de gestão.",
        ],
      },
      {
        id: "4",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa LeanBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Tomada de Decisão Descentralizada",
                description:
                  "Redistribuição do poder de decisão para os níveis hierárquicos mais baixos, de acordo com suas capacidades e responsabilidades.",
              },
              {
                icon: MapPin,
                title: "Resolução no Local",
                description:
                  "Os problemas são resolvidos rapidamente no local onde ocorrem, reduzindo atrasos e retrabalhos.",
              },
              {
                icon: ShieldCheck,
                title: "Empoderamento da Equipe",
                description:
                  "As equipes de linha de frente ganham autonomia e compromisso ao serem parte ativa da solução diária.",
              },
              {
                icon: Target,
                title: "Foco Estratégico para Líderes",
                description:
                  "Supervisores e gerências se libertam da urgência operacional para se concentrar na melhoria contínua e em decisões-chave.",
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
        icon: Users,
        title: "Para quem o programa é recomendado?",
        subtitle: "Tipos de empresas ideais para o LeanBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Tipos de Empresas
            </h3>
            {[
              {
                icon: Factory,
                title: "Empresas Industriais e de Serviços",
                description:
                  "Pensado para organizações que buscam fortalecer sua disciplina operacional e padronizar processos-chave.",
              },
              {
                icon: Users,
                title: "Equipes de Alto Impacto",
                description:
                  "Ideal para áreas com alta concentração de pessoas e onde a colaboração é fundamental para os resultados.",
              },
              {
                icon: Briefcase,
                title: "Ambientes Complexos",
                description:
                  "Aplicável a espaços com alto tráfego, risco, dispersão de materiais ou necessidade de ordem estruturada.",
              },
              {
                icon: Target,
                title: "Empresas com Visão Estratégica",
                description:
                  "Para aquelas que desejam alinhar a melhoria contínua com a estratégia organizacional.",
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
        id: "6",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle: "Escada sólida para um sistema Lean integral",
        description:
          "LeanBridge™ conecta a melhoria do chão de fábrica com a estratégia, trabalhando em conjunto com FlowStable™, Kaizen Action™ e StratBridge™ para sustentar resultados de longo prazo",
        graphic: <ConnectionsGraphic title="LeanBridge™" />,
        details: [],
      },
    ],
  },
};

const Modal: React.FC<ModalProps & { closeLabel: string }> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  content,
  graphic,
  closeLabel,
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
            aria-label={closeLabel}
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

const LeanBridgeContent: React.FC = () => {
  const { currentLanguage } = useLanguage() as { currentLanguage: Language };
  const lang = currentLanguage || "es";
  const t = translations[lang];

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const handleCardClick = (feature: any) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div id="leanbridge-content" className="bg-[var(--color-bg)]">
      <ContentSection id="que-es" title="" subtitle="">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {t.features.map((feature) => {
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
        closeLabel={t.closeModal}
      />
    </div>
  );
};

export default LeanBridgeContent;
