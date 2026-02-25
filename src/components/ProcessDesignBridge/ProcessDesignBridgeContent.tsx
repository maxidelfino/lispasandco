import type React from "react";
import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  CircleQuestionMark,
  Clock,
  Users,
  Settings,
  Zap,
  RefreshCcw,
  HandCoins,
  BarChart2,
  DivideSquare,
  Gauge,
  ClipboardCheck,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
import ContentSection from "../shared/ContentSection";
import ProgramModal from "../shared/ProgramModal";

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
        es: "Características del programa Process Design Bridge™",
        en: "Features of the Process Design Bridge™",
        pt: "Características do programa Process Design Bridge™",
      },
      children: {
        es: (
          <>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                ¿Qué es?
              </p>
              {[
                "Una metodología que combina ingeniería de procesos, control de variables críticas y herramientas lean.",
                "Un puente entre necesidades operativas reales y soluciones técnicas viables.",
                "Un proceso colaborativo con foco en la operabilidad futura y la optimización continua",
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
                "Un simple cálculo de balances de masa o energía.",
                "Un diseño teórico desconectado de la realidad operativa.",
                "Un reemplazo de ingeniería básica o de detalle: es un complemento estratégico que asegura que esa ingeniería tenga impacto real en la planta.",
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
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                Process Design Bridge™ is the LYSPAS & CO program designed to
                connect industrial process engineering with continuous
                improvement practices.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                Its goal is to ensure that new equipment, production lines, or
                entire facilities are conceived, designed, and commissioned from
                the perspective of operational efficiency, reliability, and
                process stability.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                The program applies both to operating industrial companies
                seeking to redesign critical processes and to equipment and
                assembly suppliers who need to ensure their solutions address
                the real challenges of their clients.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                What is it?
              </p>
              {[
                "A methodology that combines process engineering, control of critical variables, and lean tools.",
                "A bridge between real operational needs and viable technical solutions.",
                "A collaborative process focused on future operability and continuous optimization.",
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
                "A simple calculation of mass or energy balances.",
                "A theoretical design disconnected from operational reality.",
                "A replacement for basic or detailed engineering: it is a strategic complement that ensures that engineering has real impact in the plant.",
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
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                Process Design Bridge™ é o programa da LYSPAS & CO desenvolvido
                para unir a engenharia de processos industriais com as práticas
                de melhoria contínua.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                Seu objetivo é garantir que novos equipamentos, linhas de
                produção ou instalações completas sejam concebidos, projetados e
                colocados em operação sob a perspectiva da eficiência
                operacional, confiabilidade e estabilidade dos processos.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
                O programa se aplica tanto a empresas industriais em operação
                que desejam redesenhar processos críticos quanto a fornecedores
                de equipamentos e montagens que precisam garantir que suas
                soluções respondam à verdadeira problemática dos clientes.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                O que é?
              </p>
              {[
                "Uma metodologia que combina engenharia de processos, controle de variáveis críticas e ferramentas lean.",
                "Uma ponte entre necessidades operacionais reais e soluções técnicas viáveis.",
                "Um processo colaborativo com foco na operabilidade futura e na otimização contínua.",
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
                "Um simples cálculo de balanços de massa ou energia.",
                "Um projeto teórico desconectado da realidade operacional.",
                "Um substituto para a engenharia básica ou de detalhe: é um complemento estratégico que garante que essa engenharia tenha impacto real na planta.",
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
                icon: DivideSquare,
                title: "Brecha entre ingeniería y operación",
                description:
                  "Proyectos fallan porque se diseñan desde el escritorio, sin considerar la variabilidad real del proceso.",
              },
              {
                icon: HandCoins,
                title: "Inversiones mal priorizadas",
                description:
                  "Equipos costosos que no atacan el cuello de botella verdadero.",
              },
              {
                icon: RefreshCcw,
                title: "Procesos inestables",
                description:
                  "Instalaciones que operan con ajustes manuales constantes por falta de lazos de control bien diseñados.",
              },
              {
                icon: Users,
                title: "Falta de integración entre áreas",
                description:
                  "Falta de integración entre áreas de mantenimiento, producción e ingeniería en la toma de decisiones",
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
                icon: DivideSquare,
                title: "Gap between engineering and operations",
                description:
                  "Projects fail because they are designed from the desk, without considering the real variability of the process.",
              },
              {
                icon: HandCoins,
                title: "Poorly prioritized investments",
                description:
                  "Expensive equipment that does not address the real bottleneck.",
              },
              {
                icon: RefreshCcw,
                title: "Unstable processes",
                description:
                  "Facilities that operate with constant manual adjustments due to lack of well-designed control loops.",
              },
              {
                icon: Users,
                title: "Lack of integration between areas",
                description:
                  "Lack of integration between maintenance, production, and engineering areas in decision making.",
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
                icon: DivideSquare,
                title: "Lacuna entre engenharia e operação",
                description:
                  "Projetos falham porque são desenhados no escritório, sem considerar a variabilidade real do processo.",
              },
              {
                icon: HandCoins,
                title: "Investimentos mal priorizados",
                description:
                  "Equipamentos caros que não atacam o verdadeiro gargalo.",
              },
              {
                icon: RefreshCcw,
                title: "Processos instáveis",
                description:
                  "Instalações que operam com ajustes manuais constantes por falta de laços de controle bem desenhados.",
              },
              {
                icon: Users,
                title: "Falta de integração entre áreas",
                description:
                  "Falta de integração entre áreas de manutenção, produção e engenharia na tomada de decisões",
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
            {/* Descripción */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                El programa <strong>Process Design Bridge™</strong> se
                estructura en fases metodológicas que aseguran la integración
                efectiva entre ingeniería y operación, adaptándose a cada
                contexto organizacional.
              </p>
            </div>
            {/* Fases metodológicas */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                Fases metodológicas:
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                {[
                  "Fase de diseño conceptual: identificación de variables críticas, construcción de SIPOC, definición de métricas iniciales.",
                  "Fase de ingeniería básica y de detalle: integración de lazos de control, definiciones de instrumentación y puntos de medición.",
                  "Fase de operación: validación de desempeño real vs. esperado, ajustes y optimización.",
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
                el inicio del proceso.
              </p>
            </div>
          </div>
        ),
        en: (
          <div>
            {/* Description */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                The <strong>Process Design Bridge™</strong> program is
                structured in methodological phases that ensure effective
                integration between engineering and operations, adapting to each
                organizational context.
              </p>
            </div>
            {/* Methodological Phases */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                Methodological phases:
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                {[
                  "Conceptual design phase: identification of critical variables, SIPOC construction, definition of initial metrics.",
                  "Basic and detailed engineering phase: integration of control loops, instrumentation definitions, and measurement points.",
                  "Operation phase: validation of actual vs. expected performance, adjustments, and optimization.",
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
                start of the process.
              </p>
            </div>
          </div>
        ),
        pt: (
          <div>
            {/* Descrição */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                O programa <strong>Process Design Bridge™</strong> é estruturado
                em fases metodológicas que garantem a integração efetiva entre
                engenharia e operação, adaptando-se a cada contexto
                organizacional.
              </p>
            </div>
            {/* Fases metodológicas */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                Fases metodológicas:
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                {[
                  "Fase de design conceitual: identificação de variáveis críticas, construção do SIPOC, definição de métricas iniciais.",
                  "Fase de engenharia básica e detalhada: integração de laços de controle, definições de instrumentação e pontos de medição.",
                  "Fase de operação: validação do desempenho real vs. esperado, ajustes e otimização.",
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
                o início do processo.
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
        es: "Beneficios del programa Process Design Bridge™",
        en: "Benefits of the Process Design Bridge™",
        pt: "Benefícios do programa Process Design Bridge™",
      },
      children: {
        es: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Procesos robustos y estables",
                description:
                  "Diseños de procesos más robustos y estables desde el inicio.",
              },
              {
                icon: XCircle,
                title: "Reducción de costos ocultos",
                description:
                  "Reducción de costos ocultos (reprocesos, ajustes, paradas no planificadas).",
              },
              {
                icon: BarChart2,
                title: "Métricas para decisiones de inversión",
                description:
                  "Generacion de métricas de decisión a la hora de evaluar inversiones",
              },
              {
                icon: Clock,
                title: "Puesta en marcha más rápida",
                description:
                  "Menor tiempo de puesta en marcha de nuevas líneas o equipos.",
              },
              {
                icon: Users,
                title: "Alineación proveedores-clientes",
                description:
                  "Mayor alineación entre proveedores y clientes, reduciendo retrabajos en la ingeniería",
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
        en: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Robust and stable processes",
                description:
                  "More robust and stable process designs from the start.",
              },
              {
                icon: XCircle,
                title: "Reduction of hidden costs",
                description:
                  "Reduction of hidden costs (rework, adjustments, unplanned downtime).",
              },
              {
                icon: BarChart2,
                title: "Metrics for investment decisions",
                description:
                  "Generation of decision metrics when evaluating investments.",
              },
              {
                icon: Clock,
                title: "Faster commissioning",
                description:
                  "Shorter commissioning time for new lines or equipment.",
              },
              {
                icon: Users,
                title: "Supplier-client alignment",
                description:
                  "Greater alignment between suppliers and clients, reducing rework in engineering.",
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
        pt: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Processos robustos e estáveis",
                description:
                  "Projetos de processo mais robustos e estáveis desde o início.",
              },
              {
                icon: XCircle,
                title: "Redução de custos ocultos",
                description:
                  "Redução de custos ocultos (retrabalho, ajustes, paradas não planejadas).",
              },
              {
                icon: BarChart2,
                title: "Métricas para decisões de investimento",
                description:
                  "Geração de métricas de decisão ao avaliar investimentos.",
              },
              {
                icon: Clock,
                title: "Comissionamento mais rápido",
                description:
                  "Tempo de comissionamento reduzido para novas linhas ou equipamentos.",
              },
              {
                icon: Users,
                title: "Alinhamento fornecedor-cliente",
                description:
                  "Maior alinhamento entre fornecedores e clientes, reduzindo retrabalho em engenharia.",
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
        es: "Tipos de empresas ideales para Process Design Bridge™",
        en: "Ideal companies for Process Design Bridge™",
        pt: "Tipos de empresas ideais para o Process Design Bridge™",
      },
      children: {
        es: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart2,
                title: "Industria aceitera",
                description:
                  "Diseño de laminadores considerando variabilidad de humedad del poroto y ajustes automáticos de velocidad.",
              },
              {
                icon: DivideSquare,
                title: "Molinería",
                description:
                  "Definición de puntos críticos de medición de finura y carga de molinos para reducir paradas por vibraciones.",
              },
              {
                icon: RefreshCcw,
                title: "Biodiesel",
                description:
                  "Integración de lazos de control de temperatura y presión en reactores para minimizar desviaciones en conversión.",
              },
              {
                icon: Users,
                title: "Proveedores de equipos",
                description:
                  "Incorporación de lógica de control predictivo en transportadores de granos para evitar bloqueos o sobrecargas",
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
                icon: BarChart2,
                title: "Oilseed Industry",
                description:
                  "Design of rollers considering bean moisture variability and automatic speed adjustments.",
              },
              {
                icon: DivideSquare,
                title: "Milling",
                description:
                  "Definition of critical measurement points for fineness and mill load to reduce downtime due to vibrations.",
              },
              {
                icon: RefreshCcw,
                title: "Biodiesel",
                description:
                  "Integration of temperature and pressure control loops in reactors to minimize conversion deviations.",
              },
              {
                icon: Users,
                title: "Equipment Suppliers",
                description:
                  "Incorporation of predictive control logic in grain conveyors to prevent blockages or overloads.",
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
                icon: BarChart2,
                title: "Indústria de oleaginosas",
                description:
                  "Projeto de laminadores considerando a variabilidade da umidade do grão e ajustes automáticos de velocidade.",
              },
              {
                icon: DivideSquare,
                title: "Moagem",
                description:
                  "Definição de pontos críticos de medição de granulometria e carga dos moinhos para reduzir paradas por vibrações.",
              },
              {
                icon: RefreshCcw,
                title: "Biodiesel",
                description:
                  "Integração de laços de controle de temperatura e pressão em reatores para minimizar desvios na conversão.",
              },
              {
                icon: Users,
                title: "Fornecedores de equipamentos",
                description:
                  "Incorporação de lógica de controle preditivo em transportadores de grãos para evitar bloqueios ou sobrecargas.",
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
      children: {
        es: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: RefreshCcw,
                title: "Flow Stable™",
                description:
                  "Para validar y estabilizar los procesos diseñados.",
              },
              {
                icon: Gauge,
                title: "Auto OPS™",
                description:
                  "Para instrumentar y automatizar el control de variables críticas.",
              },
              {
                icon: BarChart2,
                title: "Strat Bridge™",
                description:
                  "Para priorizar inversiones en el plan estratégico.",
              },
              {
                icon: ClipboardCheck,
                title: "Project Focus™",
                description:
                  "Para gestionar la implementación de proyectos de diseño con disciplina y foco.",
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
                icon: RefreshCcw,
                title: "Flow Stable™",
                description:
                  "To validate and stabilize the designed processes.",
              },
              {
                icon: Gauge,
                title: "Auto OPS™",
                description:
                  "To instrument and automate the control of critical variables.",
              },
              {
                icon: BarChart2,
                title: "Strat Bridge™",
                description: "To prioritize investments in the strategic plan.",
              },
              {
                icon: ClipboardCheck,
                title: "Project Focus™",
                description:
                  "To manage the implementation of design projects with discipline and focus.",
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
                icon: RefreshCcw,
                title: "Flow Stable™",
                description:
                  "Para validar e estabilizar os processos desenhados.",
              },
              {
                icon: Gauge,
                title: "Auto OPS™",
                description:
                  "Para instrumentar e automatizar o controle de variáveis críticas.",
              },
              {
                icon: BarChart2,
                title: "Strat Bridge™",
                description:
                  "Para priorizar investimentos no plano estratégico.",
              },
              {
                icon: ClipboardCheck,
                title: "Project Focus™",
                description:
                  "Para gerenciar a implementação de projetos de design com disciplina e foco.",
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
  ],
};

const ProcessDesignBridgeContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const { currentLanguage } = useLanguage();
  const lang = currentLanguage as Language;

  const features = translations.features.map((feature) => {
    // if (feature.id === "4") {
    //   return {
    //     ...feature,
    //     title: feature.title[lang],
    //     subtitle: feature.subtitle[lang],
    //     children: renderComingSoonContent(),
    //   };
    // }
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
    <div id="ProcessDesignBridge-content" className="bg-[var(--color-bg)]">
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

export default ProcessDesignBridgeContent;
