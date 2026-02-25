import type React from "react";
import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  CircleQuestionMark,
  Clock,
  Users,
  Settings,
  Repeat,
  Building,
  Factory,
  ChartCandlestick,
  GraduationCap,
  Link,
  Filter,
  Grid3x3,
  Sparkles,
  CheckSquare,
  Shield,
  Truck,
  Zap,
  Box,
  RefreshCcw,
  HandCoins,
} from "lucide-react";
import MethodologyFiveSPlus from "../../icons-components/FiveSPlus/MethodologyFiveSPlus";
import ConnectionsGraphic from "../../icons-components/FiveSPlus/ConnectionsGraphic";
import { useLanguage } from "../../contexts/LanguageContext";
import ContentSection from "../shared/ContentSection";
import ProgramModal from "../shared/ProgramModal";

// Traducciones
const translations = {
  es: {
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Características del programa 5S Plus™",
        children: (
          <>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                ¿Qué es?
              </p>
              {[
                "Una evolución del modelo clásico de orden y limpieza 5S.",
                "Una herramienta de base cultural para toda iniciativa de mejora.",
                "Una práctica clave para instalar hábitos sostenibles de gestión visual y disciplina.",
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
                "Solo limpieza o estética",
                "Una acción puntual sin seguimiento",
                "Una implementación que no involucra a toda la organización",
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
        subtitle: "Los desafíos operativos",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Box,
                title: "Entornos Ordenados",
                description:
                  "Los entornos de trabajo que logran altos estándares de calidad, eficiencia y seguridad tienen una cosa en común: están ordenados, limpios y cuidados. Eso no es casualidad.",
              },
              {
                icon: Users,
                title: "Reflejo Cultural",
                description:
                  "El orden físico refleja y refuerza una cultura organizada, comprometida y enfocada en el cumplimiento de procesos.",
              },
              {
                icon: RefreshCcw,
                title: "Herramienta Estratégica",
                description:
                  "Por eso 5S es más que estética: es una herramienta estratégica que facilita el respeto por los procedimientos, reduce riesgos, mejora la productividad y activa el compromiso del equipo.",
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
        id: "4",
        icon: Clock,
        title: "Metodología & Tiempos",
        subtitle: "5 meses de implementación",
        children: null, // Se setea luego en runtime para usar el idioma
      },
      {
        id: "3",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa 5S Plus™",
        children: null, // Se setea luego en runtime para usar el idioma
      },
      {
        id: "6",
        icon: Users,
        title: "¿Para quién está recomendado el programa?",
        subtitle: "Tipos de empresas ideales para 5S Plus™",
        children: null, // Se setea luego en runtime para usar el idioma
      },
      {
        id: "5",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle: "",
        description:
          "5S Plus™ se integra de manera orgánica con el resto de nuestra suite de mejora continua. Por ejemplo, LeanBridge™ aporta la disciplina y el control visual necesarios para gestionar el trabajo directamente en el área, mientras que WasteZero™ complementa esta base al identificar y eliminar los desperdicios ocultos que surgen del desorden",
        graphic: <ConnectionsGraphic title="5S Plus™" />,
        details: [],
      },
    ],
    methodologyDetails: [
      "Formación técnica práctica sobre desperdicios, flujos y herramientas visuales",
      "Introduccion a la filosofía japonesa de 5 S",
      "Capacitacion y ejecución inmediata",
      "Resultados concretos en poco tiempo",
    ],
    steps: [
      {
        id: 1,
        japanese: "SEIRI",
        label: "Clasificar",
        icon: Filter,
        color: "from-red-500 to-red-600",
      },
      {
        id: 2,
        japanese: "SEITON",
        label: "Ordenar",
        icon: Grid3x3,
        color: "from-blue-500 to-blue-600",
      },
      {
        id: 3,
        japanese: "SEISŌ",
        label: "Limpiar",
        icon: Sparkles,
        color: "from-green-500 to-green-600",
      },
      {
        id: 4,
        japanese: "SEIKETSU",
        label: "Estandarizar",
        icon: CheckSquare,
        color: "from-purple-500 to-purple-600",
      },
      {
        id: 5,
        japanese: "SHITSUKE",
        label: "Sostener",
        icon: Shield,
        color: "from-orange-500 to-orange-600",
      },
    ],
    implementationModeTitle: "Modalidad de implementación:",
    implementationModeDetails: [
      "Son 6 fases de trabajo en donde se combinan momentos de capacitación con practicas de campo aplicadas al sector seleccionado. Las Gestion del cambio será un elemento muy importante a tener en cuenta en las semanas de inicio del programa.",
      "Las practicas de campo serán lideradas por especialistas de LYSPAS & CO. Luego el personal de la empresa llevará adelante la metodología estando en contacto virtual permanente con LYSPAS & CO",
    ],
    clickForDetails: "Click para más detalles",
    closeModal: "Cerrar modal",
    companiesTitle: "Tipos de Empresas",
    companies: [
      {
        icon: Factory,
        title: "Empresas Industriales o de Servicios",
        description: "Empresas industriales o de servicios.",
      },
      {
        icon: Users,
        title: "Intervención Integral",
        description:
          "Áreas de trabajo en las cuales existe alta presencia de personas.",
      },
      {
        icon: Truck,
        title: "Sectores de Alto Tráfico",
        description:
          "Áreas con alto tráfico, riesgo o dispersión de materiales.",
      },
      {
        icon: CheckCircle,
        title: "Cultura de Orden y Eficiencia",
        description:
          "Organizaciones que quieran fortalecer su cultura de orden, seguridad y eficiencia",
      },
    ],
    benefits: [
      {
        icon: Repeat,
        title: "Implementación Progresiva",
        description: "Implementación práctica y progresiva de las 5 etapas",
      },
      {
        icon: Building,
        title: "Intervención Integral",
        description:
          "Intervención sobre oficinas, plantas, depósitos, áreas de servicio,laboratorios, incluso entornos digitales",
      },
      {
        icon: Factory,
        title: "Sectores Diversos",
        description:
          "Aplicación en sectores productivos, administrativos y de servicios",
      },
      {
        icon: ChartCandlestick,
        title: "Indicadores Visuales",
        description: "Seguimiento claro del avance y resultados",
      },
      {
        icon: GraduationCap,
        title: "Capacitación Completa",
        description: "Plan de formación y sostenimiento a largo plazo",
      },
      {
        icon: Link,
        title: "Integración Avanzada",
        description:
          "Integración con programas más avanzados como LeanBridge™ o Kaizen Action™",
      },
    ],
  },
  en: {
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "What is it and what is it not?",
        subtitle: "Features of the 5S Plus™ program",
        children: (
          <>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                What is it?
              </p>
              {[
                "An evolution of the classic 5S order and cleaning model.",
                "A cultural foundation tool for any improvement initiative.",
                "A key practice to establish sustainable habits of visual management and discipline.",
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
                "Just cleaning or aesthetics",
                "A one-off action without follow-up",
                "An implementation that does not involve the entire organization",
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
        subtitle: "Operational challenges",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Box,
                title: "Organized Environments",
                description:
                  "Work environments that achieve high standards of quality, efficiency, and safety have one thing in common: they are organized, clean, and cared for. That is not a coincidence.",
              },
              {
                icon: Users,
                title: "Cultural Reflection",
                description:
                  "Physical order reflects and reinforces an organized culture, committed and focused on process compliance.",
              },
              {
                icon: RefreshCcw,
                title: "Strategic Tool",
                description:
                  "That’s why 5S is more than aesthetics: it’s a strategic tool that facilitates respect for procedures, reduces risks, improves productivity, and activates team commitment.",
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
        id: "4",
        icon: Clock,
        title: "Methodology & Timing",
        subtitle: "5 months of implementation",
        children: null,
      },
      {
        id: "3",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Benefits of the 5S Plus™ program",
        children: null,
      },
      {
        id: "6",
        icon: Users,
        title: "Who is the program recommended for?",
        subtitle: "Ideal types of companies for 5S Plus™",
        children: null,
      },
      {
        id: "5",
        icon: Settings,
        title: "Which other products is it related to?",
        subtitle: "",
        description:
          "5S Plus™ integrates organically with the rest of our continuous improvement suite. For example, LeanBridge™ provides the discipline and visual control needed to manage work directly in the area, while WasteZero™ complements this foundation by identifying and eliminating hidden waste that arises from disorder.",
        graphic: <ConnectionsGraphic title="5S Plus™" />,
        details: [],
      },
    ],
    methodologyDetails: [
      "Practical technical training on waste, flows, and visual tools",
      "Introduction to the Japanese 5S philosophy",
      "Immediate training and execution",
      "Concrete results in a short time",
    ],
    steps: [
      {
        id: 1,
        japanese: "SEIRI",
        label: "Sort",
        icon: Filter,
        color: "from-red-500 to-red-600",
      },
      {
        id: 2,
        japanese: "SEITON",
        label: "Set in order",
        icon: Grid3x3,
        color: "from-blue-500 to-blue-600",
      },
      {
        id: 3,
        japanese: "SEISŌ",
        label: "Shine",
        icon: Sparkles,
        color: "from-green-500 to-green-600",
      },
      {
        id: 4,
        japanese: "SEIKETSU",
        label: "Standardize",
        icon: CheckSquare,
        color: "from-purple-500 to-purple-600",
      },
      {
        id: 5,
        japanese: "SHITSUKE",
        label: "Sustain",
        icon: Shield,
        color: "from-orange-500 to-orange-600",
      },
    ],
    implementationModeTitle: "Implementation mode:",
    implementationModeDetails: [
      "There are 6 work phases combining training moments with field practices applied to the selected sector. Change management will be a very important element to consider in the initial weeks of the program.",
      "Field practices will be led by LYSPAS & CO specialists. Then, the company's staff will carry out the methodology while maintaining permanent virtual contact with LYSPAS & CO.",
    ],
    clickForDetails: "Click for more details",
    closeModal: "Close modal",
    companiesTitle: "Types of Companies",
    companies: [
      {
        icon: Factory,
        title: "Industrial or Service Companies",
        description: "Industrial or service companies.",
      },
      {
        icon: Users,
        title: "Comprehensive Intervention",
        description: "Work areas with a high presence of people.",
      },
      {
        icon: Truck,
        title: "High Traffic Sectors",
        description: "Areas with high traffic, risk, or material dispersion.",
      },
      {
        icon: CheckCircle,
        title: "Order and Efficiency Culture",
        description:
          "Organizations seeking to strengthen their culture of order, safety, and efficiency",
      },
    ],
    benefits: [
      {
        icon: Repeat,
        title: "Progressive Implementation",
        description: "Practical and progressive implementation of the 5 stages",
      },
      {
        icon: Building,
        title: "Comprehensive Intervention",
        description:
          "Intervention in offices, plants, warehouses, service areas, laboratories, even digital environments",
      },
      {
        icon: Factory,
        title: "Diverse Sectors",
        description:
          "Application in productive, administrative, and service sectors",
      },
      {
        icon: ChartCandlestick,
        title: "Visual Indicators",
        description: "Clear monitoring of progress and results",
      },
      {
        icon: GraduationCap,
        title: "Comprehensive Training",
        description: "Long-term training and sustainability plan",
      },
      {
        icon: Link,
        title: "Advanced Integration",
        description:
          "Integration with more advanced programs such as LeanBridge™ or Kaizen Action™",
      },
    ],
  },
  pt: {
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "O que é e o que não é?",
        subtitle: "Características do programa 5S Plus™",
        children: (
          <>
            <div className="mb-6">
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-3">
                O que é?
              </p>
              {[
                "Uma evolução do modelo clássico de ordem e limpeza 5S.",
                "Uma ferramenta de base cultural para toda iniciativa de melhoria.",
                "Uma prática chave para instalar hábitos sustentáveis de gestão visual e disciplina.",
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
                "Apenas limpeza ou estética",
                "Uma ação pontual sem acompanhamento",
                "Uma implementação que não envolve toda a organização",
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
        subtitle: "Desafios operacionais",
        children: (
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Box,
                title: "Ambientes organizados",
                description:
                  "Ambientes de trabalho que alcançam altos padrões de qualidade, eficiência e segurança têm uma coisa em comum: são organizados, limpos e cuidados. Isso não é por acaso.",
              },
              {
                icon: Users,
                title: "Reflexo cultural",
                description:
                  "A ordem física reflete e reforça uma cultura organizada, comprometida e focada no cumprimento de processos.",
              },
              {
                icon: RefreshCcw,
                title: "Ferramenta estratégica",
                description:
                  "Por isso, o 5S é mais do que estética: é uma ferramenta estratégica que facilita o respeito pelos procedimentos, reduz riscos, melhora a produtividade e ativa o compromisso da equipe.",
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
        id: "4",
        icon: Clock,
        title: "Metodologia & Tempos",
        subtitle: "5 meses de implementação",
        children: null,
      },
      {
        id: "3",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa 5S Plus™",
        children: null,
      },
      {
        id: "6",
        icon: Users,
        title: "Para quem é recomendado o programa?",
        subtitle: "Tipos de empresas ideais para 5S Plus™",
        children: null,
      },
      {
        id: "5",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle: "",
        description:
          "O 5S Plus™ se integra de forma orgânica com o restante de nossa suíte de melhoria contínua. Por exemplo, o LeanBridge™ fornece a disciplina e o controle visual necessários para gerenciar o trabalho diretamente na área, enquanto o WasteZero™ complementa essa base ao identificar e eliminar os desperdícios ocultos que surgem da desordem.",
        graphic: <ConnectionsGraphic title="5S Plus™" />,
        details: [],
      },
    ],
    methodologyDetails: [
      "Treinamento técnico prático sobre desperdícios, fluxos e ferramentas visuais",
      "Introdução à filosofia japonesa das 5S",
      "Capacitação e execução imediata",
      "Resultados concretos em pouco tempo",
    ],
    steps: [
      {
        id: 1,
        japanese: "SEIRI",
        label: "Classificar",
        icon: Filter,
        color: "from-red-500 to-red-600",
      },
      {
        id: 2,
        japanese: "SEITON",
        label: "Ordenar",
        icon: Grid3x3,
        color: "from-blue-500 to-blue-600",
      },
      {
        id: 3,
        japanese: "SEISŌ",
        label: "Limpar",
        icon: Sparkles,
        color: "from-green-500 to-green-600",
      },
      {
        id: 4,
        japanese: "SEIKETSU",
        label: "Padronizar",
        icon: CheckSquare,
        color: "from-purple-500 to-purple-600",
      },
      {
        id: 5,
        japanese: "SHITSUKE",
        label: "Sustentar",
        icon: Shield,
        color: "from-orange-500 to-orange-600",
      },
    ],
    implementationModeTitle: "Modalidade de implementação:",
    implementationModeDetails: [
      "São 6 fases de trabalho em que se combinam momentos de capacitação com práticas de campo aplicadas ao setor selecionado. A gestão da mudança será um elemento muito importante a ser considerado nas semanas iniciais do programa.",
      "As práticas de campo serão lideradas por especialistas da LYSPAS & CO. Depois, o pessoal da empresa levará adiante a metodologia estando em contato virtual permanente com a LYSPAS & CO.",
    ],
    clickForDetails: "Clique para mais detalhes",
    closeModal: "Fechar modal",
    companiesTitle: "Tipos de Empresas",
    companies: [
      {
        icon: Factory,
        title: "Empresas Industriais ou de Serviços",
        description: "Empresas industriais ou de serviços.",
      },
      {
        icon: Users,
        title: "Intervenção Integral",
        description:
          "Áreas de trabalho nas quais existe alta presença de pessoas.",
      },
      {
        icon: Truck,
        title: "Setores de Alto Tráfego",
        description: "Áreas com alto tráfego, risco ou dispersão de materiais.",
      },
      {
        icon: CheckCircle,
        title: "Cultura de Ordem e Eficiência",
        description:
          "Organizações que queiram fortalecer sua cultura de ordem, segurança e eficiência",
      },
    ],
    benefits: [
      {
        icon: Repeat,
        title: "Implementação Progressiva",
        description: "Implementação prática e progressiva das 5 etapas",
      },
      {
        icon: Building,
        title: "Intervenção Integral",
        description:
          "Intervenção em escritórios, plantas, depósitos, áreas de serviço, laboratórios, até mesmo ambientes digitais",
      },
      {
        icon: Factory,
        title: "Setores Diversos",
        description:
          "Aplicação em setores produtivos, administrativos e de serviços",
      },
      {
        icon: ChartCandlestick,
        title: "Indicadores Visuais",
        description: "Acompanhamento claro do progresso e resultados",
      },
      {
        icon: GraduationCap,
        title: "Capacitação Completa",
        description: "Plano de formação e sustentação a longo prazo",
      },
      {
        icon: Link,
        title: "Integração Avançada",
        description:
          "Integração com programas mais avançados como LeanBridge™ ou Kaizen Action™",
      },
    ],
  },
};

const FiveSPlusContent: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const t = translations[currentLanguage];

  // Rellenar los children dinámicos que dependen de traducción
  const features = t.features.map((feature) => {
    if (feature.id === "4") {
      // Metodología & Tiempos
      return {
        ...feature,
        children: (
          <div>
            {/* Graphic Desktop only */}
            <div className="hidden lg:block mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <MethodologyFiveSPlus />
            </div>

            {/* Graphic Mobile & Tablet only */}
            <div className="block lg:hidden mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              <div className="flex items-center justify-center space-x-4 flex-wrap">
                {t.steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex flex-row items-center justify-center"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                      >
                        {step.id}S
                      </div>
                      <span className="text-xs text-[var(--color-text)] mt-1 mb-4 font-medium">
                        {step.label}
                      </span>
                    </div>
                    {index < t.steps.length - 1 && (
                      <div className="text-[var(--color-secondary)] text-2xl mb-10">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                {t.implementationModeTitle}
              </p>

              <div className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200">
                {t.implementationModeDetails.map((detail, idx) => (
                  <span
                    key={idx}
                    className="text-[var(--color-text)] leading-relaxed flex-1"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[var(--color-text)] leading-relaxed text-lg">
              {/* {content.footer} */}
            </p>
          </div>
        ),
      };
    }
    if (feature.id === "3") {
      // Beneficios
      return {
        ...feature,
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {t.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 flex gap-4">
                  <benefit.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-[var(--color-text)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        ),
      };
    }
    if (feature.id === "6") {
      // Para quién está recomendado
      return {
        ...feature,
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
              {t.companiesTitle}
            </h3>
            {t.companies.map((company, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4 space-x-3">
                  <company.icon className="w-8 h-8" />
                  <h4 className="text-xl font-bold text-[var(--color-primary)]">
                    {company.title}
                  </h4>
                </div>
                <p className="text-[var(--color-text)] leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        ),
      };
    }
    return feature;
  });

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
    <div id="FiveSPlus-content" className="bg-[var(--color-bg)]">
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

export default FiveSPlusContent;
