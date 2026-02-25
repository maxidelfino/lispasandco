import type React from "react";
import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  BarChart3,
  Target,
  ListChecks,
  LayoutGrid,
  CalendarCheck,
  Wrench,
  HandCoins,
  Zap,
  Users,
  Settings,
  Link,
  Mountain,
  ShieldCheck,
  CircleQuestionMark,
} from "lucide-react";
import StratBridgeTimelineGraphic from "../../icons-components/StratBridge/StratBridgeTimelineGraphic";
import ConnectionsGraphic from "../../icons-components/FiveSPlus/ConnectionsGraphic";
import { Language, StratBridgeFeature } from "../../types";
import { useLanguage } from "../../contexts/LanguageContext";
import ContentSection from "../shared/ContentSection";
import ProgramModal from "../shared/ProgramModal";

const translations: Record<Language, any> = {
  es: {
    clickForDetails: "Click para más detalles",
    closeModal: "Cerrar modal",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Características del programa StratBridge™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                <strong>StratBridge™</strong> es un programa integral de gestión
                estratégica que permite a las organizaciones traducir su visión
                y objetivos en acciones concretas, asegurando el alineamiento de
                todos los niveles de la empresa y facilitando la ejecución
                efectiva de la estrategia.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                A través de un enfoque estructurado y colaborativo, StratBridge™
                conecta la planificación estratégica con la gestión operativa,
                promoviendo la participación de los equipos, la claridad en la
                contribución de cada área y la medición de resultados mediante
                indicadores accionables. Su metodología está diseñada para
                adaptarse a diferentes realidades organizacionales, asegurando
                la sostenibilidad y el impacto de la estrategia en el tiempo.
              </p>
            </div>

            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              StratBridge™ es la herramienta que permite{" "}
              <strong>
                cerrar la brecha entre la estrategia y la ejecución
              </strong>
              , facilitando el despliegue de objetivos, la alineación de equipos
              y la gestión efectiva del desempeño organizacional.
            </blockquote>

            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                ¿Qué es?
              </p>
              {[
                "Un sistema que traduce la estrategia en objetivos claros y medibles a todos los niveles de la organización.",
                "Un proceso que promueve la participación activa de los líderes y equipos en la definición y seguimiento de metas.",
                "Una metodología que integra indicadores clave de desempeño (KPIs) para monitorear el avance y facilitar la toma de decisiones.",
                "Una plataforma para el alineamiento, la comunicación y la gestión del cambio en torno a la estrategia.",
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
                "No es solo una herramienta tecnológica o un software de gestión.",
                "No es un proceso aislado de la realidad y cultura de la organización.",
                "No es una solución teórica sin aplicación práctica ni seguimiento.",
                "No es una iniciativa exclusiva del área de estrategia; requiere el compromiso de toda la organización.",
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
        id: "6",
        icon: Zap,
        title: "Problemas que resuelve",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Despliegue estratégico",
                description:
                  "Objetivos estratégicos desplegados en todos los niveles",
              },
              {
                icon: Users,
                title: "Contribución clara",
                description:
                  "Colaboradores que comprenden su contribución al propósito general",
              },
              {
                icon: BarChart3,
                title: "Indicadores accionables",
                description:
                  "Indicadores útiles y accionables para guiar decisiones",
              },
              {
                icon: CheckCircle,
                title: "Equipos alineados",
                description: "Equipos más alineados, autónomos y enfocados",
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
        subtitle: "7 meses de implementación",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              El punto de partida de <strong>StratBridge™</strong> es la
              información estratégica provista por la dirección de la empresa,
              en especial su visión de largo plazo.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              A partir de esa definición, y mediante una secuencia estructurada
              de reuniones, se construyen los objetivos de corto plazo, junto
              con sus tácticas de acción, indicadores de avance y mecanismos de
              seguimiento.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Como resultado, se entrega la{" "}
              <strong>Matriz Hoshin KanriT™</strong>, que se transforma en una
              herramienta dinámica de alineación y evolución estratégica para
              toda la organización{" "}
            </p>

            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <StratBridgeTimelineGraphic />
            </div>
          </div>
        ),
      },
      {
        id: "4",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa StratBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Definición de Objetivos",
                description:
                  "Definición colaborativa de objetivos estratégicos a largo plazo",
              },
              {
                icon: CalendarCheck,
                title: "Objetivos Anuales",
                description:
                  "Identificación de objetivos anuales alineados con visión y misión",
              },
              {
                icon: LayoutGrid,
                title: "Matriz Hoshin",
                description: "Construcción de la Matriz Hoshin (X‑Matrix)",
              },
              {
                icon: ListChecks,
                title: "Iniciativas y Tareas",
                description:
                  "Desglose en iniciativas concretas y tareas específicas por área",
              },
              {
                icon: BarChart3,
                title: "KPIs Estratégicos",
                description: "Desarrollo de KPIs estratégicos reales",
              },
              {
                icon: Wrench,
                title: "Herramientas Complementarias",
                description:
                  "Herramientas complementarias: asignación de recursos, tablero visual, alertas, seguimiento",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
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
        subtitle: "Tipos de empresas ideales para StratBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Tipos de Empresas
            </h3>
            {[
              {
                icon: Target,
                title: "Misión",
                description:
                  "Es la razón de ser actual de la organización. ¿Para qué existe esta empresa hoy? Es concreta, operativa y refleja lo que entrega al cliente.",
              },
              {
                icon: Mountain,
                title: "Visión",
                description:
                  "Es la aspiración futura. ¿Qué queremos llegar a ser en 5 o 10 años? Es proyectiva, inspiradora pero posible, y define un destino que guía el cambio, la evolución y el crecimiento.",
              },
              {
                icon: ShieldCheck,
                title: "Valores",
                description:
                  "Principios que guían las decisiones y comportamientos de la organización. ¿Cómo nos comportamos? ¿Qué defendemos? Aplican a todos, todos los días. Son no negociables.",
              },
              {
                icon: Link,
                title: "Alineación Estratégica",
                description:
                  "StratBridge™ transforma la visión y misión en acciones concretas y ejecutables, alineando objetivos estratégicos con el trabajo diario a través del enfoque Hoshin Kanri.",
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
        id: "7",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "",
        children: (
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
              Se relaciona con otros programas de LYSPAS & CO, tales como:
            </p>
            {[
              "LeanBridge™: genera el contexto operativo y cultural ideal para aplicar planificación estratégica",
              "Kaizen Action™: resuelve problemas transversales surgidos de los objetivos e indicadores Hoshin",
              "FlowStable™ y WasteZero™: pueden integrarse como iniciativas específicas dentro de la matrIz.",
            ].map((detail, idx) => (
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
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <ConnectionsGraphic title="StratBridge™" />
            </div>
          </div>
        ),
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
        subtitle: "StratBridge™ program features",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                <strong>StratBridge™</strong> is a comprehensive strategic
                management program that enables organizations to translate their
                vision and objectives into concrete actions, ensuring alignment
                at all levels and facilitating effective strategy execution.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Through a structured and collaborative approach, StratBridge™
                connects strategic planning with operational management,
                promoting team participation, clarity in each area's
                contribution, and measurement of results through actionable
                indicators. Its methodology is designed to adapt to different
                organizational realities, ensuring sustainability and long-term
                impact.
              </p>
            </div>
            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              StratBridge™ is the tool that{" "}
              <strong>closes the gap between strategy and execution</strong>,
              facilitating the deployment of objectives, team alignment, and
              effective organizational performance management.
            </blockquote>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                What is it?
              </p>
              {[
                "A system that translates strategy into clear and measurable objectives at all organizational levels.",
                "A process that promotes active participation of leaders and teams in goal setting and tracking.",
                "A methodology that integrates key performance indicators (KPIs) to monitor progress and facilitate decision-making.",
                "A platform for alignment, communication, and change management around strategy.",
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
                "It is not just a technological tool or management software.",
                "It is not a process isolated from the organization's reality and culture.",
                "It is not a theoretical solution without practical application or follow-up.",
                "It is not an initiative exclusive to the strategy area; it requires commitment from the entire organization.",
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
        id: "6",
        icon: Zap,
        title: "Problems it solves",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Strategic deployment",
                description: "Strategic objectives deployed at all levels",
              },
              {
                icon: Users,
                title: "Clear contribution",
                description:
                  "Employees understand their contribution to the overall purpose",
              },
              {
                icon: BarChart3,
                title: "Actionable indicators",
                description:
                  "Useful and actionable indicators to guide decisions",
              },
              {
                icon: CheckCircle,
                title: "Aligned teams",
                description: "Teams are more aligned, autonomous, and focused",
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
        subtitle: "7 months of implementation",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              The starting point of <strong>StratBridge™</strong> is the
              strategic information provided by company management, especially
              its long-term vision.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              From that definition, and through a structured sequence of
              meetings, short-term objectives are built, along with their action
              tactics, progress indicators, and monitoring mechanisms.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              As a result, the <strong>Hoshin Kanri Matrix™</strong> is
              delivered, which becomes a dynamic tool for alignment and
              strategic evolution for the entire organization.
            </p>
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <StratBridgeTimelineGraphic />
            </div>
          </div>
        ),
      },
      {
        id: "4",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Benefits of the StratBridge™ program",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Objective Definition",
                description:
                  "Collaborative definition of long-term strategic objectives",
              },
              {
                icon: CalendarCheck,
                title: "Annual Objectives",
                description:
                  "Identification of annual objectives aligned with vision and mission",
              },
              {
                icon: LayoutGrid,
                title: "Hoshin Matrix",
                description: "Construction of the Hoshin Matrix (X‑Matrix)",
              },
              {
                icon: ListChecks,
                title: "Initiatives and Tasks",
                description:
                  "Breakdown into concrete initiatives and specific tasks by area",
              },
              {
                icon: BarChart3,
                title: "Strategic KPIs",
                description: "Development of real strategic KPIs",
              },
              {
                icon: Wrench,
                title: "Complementary Tools",
                description:
                  "Complementary tools: resource allocation, visual board, alerts, monitoring",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
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
        subtitle: "Ideal types of companies for StratBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Types of Companies
            </h3>
            {[
              {
                icon: Target,
                title: "Mission",
                description:
                  "It is the current reason for being of the organization. Why does this company exist today? It is concrete, operational, and reflects what it delivers to the customer.",
              },
              {
                icon: Mountain,
                title: "Vision",
                description:
                  "It is the future aspiration. What do we want to become in 5 or 10 years? It is projective, inspiring but possible, and defines a destination that guides change, evolution, and growth.",
              },
              {
                icon: ShieldCheck,
                title: "Values",
                description:
                  "Principles that guide the organization's decisions and behaviors. How do we behave? What do we stand for? They apply to everyone, every day. They are non-negotiable.",
              },
              {
                icon: Link,
                title: "Strategic Alignment",
                description:
                  "StratBridge™ transforms vision and mission into concrete and executable actions, aligning strategic objectives with daily work through the Hoshin Kanri approach.",
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
        id: "7",
        icon: Settings,
        title: "Which other products is it related to?",
        subtitle: "",
        children: (
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
              It is related to other LYSPAS & CO programs, such as:
            </p>
            {[
              "LeanBridge™: creates the ideal operational and cultural context for strategic planning",
              "Kaizen Action™: solves cross-cutting problems arising from Hoshin objectives and indicators",
              "FlowStable™ and WasteZero™: can be integrated as specific initiatives within the matrix.",
            ].map((detail, idx) => (
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
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <ConnectionsGraphic title="StratBridge™" />
            </div>
          </div>
        ),
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
        subtitle: "Características do programa StratBridge™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                <strong>StratBridge™</strong> é um programa abrangente de gestão
                estratégica que permite às organizações traduzir sua visão e
                objetivos em ações concretas, garantindo o alinhamento de todos
                os níveis da empresa e facilitando a execução eficaz da
                estratégia.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                Por meio de uma abordagem estruturada e colaborativa, o
                StratBridge™ conecta o planejamento estratégico à gestão
                operacional, promovendo a participação das equipes, a clareza na
                contribuição de cada área e a medição de resultados por meio de
                indicadores acionáveis. Sua metodologia é projetada para se
                adaptar a diferentes realidades organizacionais, garantindo a
                sustentabilidade e o impacto da estratégia ao longo do tempo.
              </p>
            </div>
            <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
              StratBridge™ é a ferramenta que permite{" "}
              <strong>fechar a lacuna entre estratégia e execução</strong>,
              facilitando o desdobramento de objetivos, o alinhamento das
              equipes e a gestão eficaz do desempenho organizacional.
            </blockquote>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                O que é?
              </p>
              {[
                "Um sistema que traduz a estratégia em objetivos claros e mensuráveis em todos os níveis da organização.",
                "Um processo que promove a participação ativa de líderes e equipes na definição e acompanhamento de metas.",
                "Uma metodologia que integra indicadores-chave de desempenho (KPIs) para monitorar o progresso e facilitar a tomada de decisões.",
                "Uma plataforma para alinhamento, comunicação e gestão de mudanças em torno da estratégia.",
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
                "Não é apenas uma ferramenta tecnológica ou um software de gestão.",
                "Não é um processo isolado da realidade e cultura da organização.",
                "Não é uma solução teórica sem aplicação prática ou acompanhamento.",
                "Não é uma iniciativa exclusiva da área de estratégia; requer o compromisso de toda a organização.",
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
        id: "6",
        icon: Zap,
        title: "Problemas que resolve",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Desdobramento estratégico",
                description:
                  "Objetivos estratégicos desdobrados em todos os níveis",
              },
              {
                icon: Users,
                title: "Contribuição clara",
                description:
                  "Colaboradores que compreendem sua contribuição para o propósito geral",
              },
              {
                icon: BarChart3,
                title: "Indicadores acionáveis",
                description:
                  "Indicadores úteis e acionáveis para orientar decisões",
              },
              {
                icon: CheckCircle,
                title: "Equipes alinhadas",
                description: "Equipes mais alinhadas, autônomas e focadas",
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
        subtitle: "7 meses de implementação",
        children: (
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              O ponto de partida do <strong>StratBridge™</strong> é a informação
              estratégica fornecida pela diretoria da empresa, especialmente sua
              visão de longo prazo.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              A partir dessa definição, e por meio de uma sequência estruturada
              de reuniões, são construídos os objetivos de curto prazo,
              juntamente com suas táticas de ação, indicadores de progresso e
              mecanismos de acompanhamento.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Como resultado, é entregue a{" "}
              <strong>Matriz Hoshin KanriT™</strong>, que se transforma em uma
              ferramenta dinâmica de alinhamento e evolução estratégica para
              toda a organização.
            </p>
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <StratBridgeTimelineGraphic />
            </div>
          </div>
        ),
      },
      {
        id: "4",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa StratBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Definição de Objetivos",
                description:
                  "Definição colaborativa de objetivos estratégicos de longo prazo",
              },
              {
                icon: CalendarCheck,
                title: "Objetivos Anuais",
                description:
                  "Identificação de objetivos anuais alinhados com visão e missão",
              },
              {
                icon: LayoutGrid,
                title: "Matriz Hoshin",
                description: "Construção da Matriz Hoshin (X‑Matrix)",
              },
              {
                icon: ListChecks,
                title: "Iniciativas e Tarefas",
                description:
                  "Desdobramento em iniciativas concretas e tarefas específicas por área",
              },
              {
                icon: BarChart3,
                title: "KPIs Estratégicos",
                description: "Desenvolvimento de KPIs estratégicos reais",
              },
              {
                icon: Wrench,
                title: "Ferramentas Complementares",
                description:
                  "Ferramentas complementares: alocação de recursos, quadro visual, alertas, acompanhamento",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
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
        subtitle: "Tipos de empresas ideais para o StratBridge™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              Tipos de Empresas
            </h3>
            {[
              {
                icon: Target,
                title: "Missão",
                description:
                  "É a razão de ser atual da organização. Por que esta empresa existe hoje? É concreta, operacional e reflete o que entrega ao cliente.",
              },
              {
                icon: Mountain,
                title: "Visão",
                description:
                  "É a aspiração futura. O que queremos ser em 5 ou 10 anos? É projetiva, inspiradora mas possível, e define um destino que orienta a mudança, a evolução e o crescimento.",
              },
              {
                icon: ShieldCheck,
                title: "Valores",
                description:
                  "Princípios que orientam as decisões e comportamentos da organização. Como nos comportamos? O que defendemos? Aplicam-se a todos, todos os dias. São inegociáveis.",
              },
              {
                icon: Link,
                title: "Alinhamento Estratégico",
                description:
                  "StratBridge™ transforma a visão e missão em ações concretas e executáveis, alinhando objetivos estratégicos ao trabalho diário por meio da abordagem Hoshin Kanri.",
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
        id: "7",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle: "",
        children: (
          <div>
            <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
              Relaciona-se com outros programas da LYSPAS & CO, tais como:
            </p>
            {[
              "LeanBridge™: gera o contexto operacional e cultural ideal para aplicar o planejamento estratégico",
              "Kaizen Action™: resolve problemas transversais surgidos dos objetivos e indicadores Hoshin",
              "FlowStable™ e WasteZero™: podem ser integrados como iniciativas específicas dentro da matriz.",
            ].map((detail, idx) => (
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
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <ConnectionsGraphic title="StratBridge™" />
            </div>
          </div>
        ),
      },
    ],
  },
};

const StratBridgeContent: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = currentLanguage || "es";
  const t = translations[lang];

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] =
    useState<StratBridgeFeature | null>(null);

  // Map features to the translation set
  const features: StratBridgeFeature[] = t.features;

  const handleCardClick = (feature: StratBridgeFeature) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div id="StratBridge-content" className="bg-[var(--color-bg)]">
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

export default StratBridgeContent;
