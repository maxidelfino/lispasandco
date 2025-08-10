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
  Grid,
  Droplet,
  ShieldCheck,
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
import MethodologyFiveSPlus from "../../icons-componets/FiveSPlus/MethodologyFiveSPlus";
import ConnectionsGraphic from "../../icons-componets/FiveSPlus/ConnectionsGraphic";

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

const methodologyDetails = [
  "Formación técnica práctica sobre desperdicios, flujos y herramientas visuales",
  "Introduccion a la filosofía japonesa de 5 S",
  "Capacitacion y ejecución inmediata",
  "Resultados concretos en poco tiempo",
];

const steps = [
  {
    id: 1,
    japanese: "SEIRI",
    spanish: "Clasificar",
    icon: Filter,
    color: "from-red-500 to-red-600",
    description: "Separar lo necesario de lo innecesario",
    details: [
      "Identificar elementos esenciales vs no esenciales",
      "Eliminar objetos obsoletos o dañados",
      "Liberar espacio para lo realmente importante",
      "Crear criterios claros de clasificación",
    ],
  },
  {
    id: 2,
    japanese: "SEITON",
    spanish: "Ordenar",
    icon: Grid3x3,
    color: "from-blue-500 to-blue-600",
    description: "Un lugar para cada cosa y cada cosa en su lugar",
    details: [
      "Asignar ubicaciones específicas para cada elemento",
      "Crear sistemas de identificación visual",
      "Optimizar la disposición según frecuencia de uso",
      "Establecer rutas de acceso eficientes",
    ],
  },
  {
    id: 3,
    japanese: "SEISŌ",
    spanish: "Limpiar",
    icon: Sparkles,
    color: "from-green-500 to-green-600",
    description: "Mantener el área de trabajo impecable",
    details: [
      "Establecer rutinas de limpieza regulares",
      "Identificar fuentes de suciedad y contamination",
      "Crear estándares de limpieza específicos",
      "Involucrar a todos en el mantenimiento",
    ],
  },
  {
    id: 4,
    japanese: "SEIKETSU",
    spanish: "Estandarizar",
    icon: CheckSquare,
    color: "from-purple-500 to-purple-600",
    description: "Crear procedimientos para mantener las primeras 3S",
    details: [
      "Documentar procedimientos y estándares",
      "Crear listas de verificación y controles",
      "Establecer responsabilidades claras",
      "Implementar sistemas de monitoreo visual",
    ],
  },
  {
    id: 5,
    japanese: "SHITSUKE",
    spanish: "Sostener",
    icon: Shield,
    color: "from-orange-500 to-orange-600",
    description: "Convertir las 4S en hábitos y disciplina",
    details: [
      "Crear cultura de autodisciplina",
      "Implementar auditorías regulares",
      "Reconocer y celebrar logros",
      "Mejora continua del sistema 5S",
    ],
  },
];

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
            <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
              {graphic}
            </div>

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

const nodes = [
  { label: "Orden", icon: Grid, angle: -90, top: 45, left: 410 }, // arriba
  { label: "Limpieza", icon: Droplet, angle: 30, top: 200, left: 410 }, // abajo derecha
  { label: "Seguridad", icon: ShieldCheck, angle: 150, top: 125, left: 210 }, // abajo izquierda
];

const R = 110; // radio
const C = 170; // centro (px)

const FiveSPlusContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: CircleQuestionMark,
      title: "¿Qué es y qué no es?",
      subtitle: "Características del programa 5S Plus™",
      children: (
        <>
          {/* Descripción principal */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mb-4">
              5S Plus™ es un programa práctico de intervención diseñado por
              LYSPAS & CO para ayudar a las organizaciones a crear espacios de
              trabajo limpios, ordenados, eficientes y seguros, como base
              indispensable para cualquier camino de mejora continua.
            </p>
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              A través de cinco pasos simples pero poderosos, 5S Plus™
              identifica con claridad aquellas cosas que <strong>NO</strong>{" "}
              deberían estar en el lugar y ayuda a ordenar aquellas otras que{" "}
              <strong>SÍ</strong> lo deberían estar. Instala hábitos y
              estándares que permiten sostener la disciplina operativa en el
              tiempo.
            </p>
          </div>

          {/* Cita inspiradora */}
          <blockquote className="mb-8 pl-6 border-l-4 border-[var(--color-secondary)] italic text-[var(--color-secondary)]">
            “5S no es una limpieza profunda. Es un cambio estructurado y
            sostenido utilizando el orden como forma de trabajo.”
          </blockquote>

          {/* ¿Qué es? */}
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

          {/* ¿Qué no es? */}
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
      children: (
        <div>
          {/* Description */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              {/* {content.description} */}
              <strong>5S Plus™</strong> es un programa netamente practico en
              donde mas del 80% del mismo se desarrolla en el lugar en donde las
              cosas suceden y junto a las personas que están permanente
              involucradas en el sector de los hechos.
            </p>
            {methodologyDetails.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
                <span className="text-[var(--color-text)] leading-relaxed flex-1">
                  {detail}
                </span>
              </div>
            ))}
          </div>

          {/* Graphic Desktop only */}
          <div className="hidden lg:block mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
            <MethodologyFiveSPlus />
          </div>

          {/* Graphic Mobile & Tablet only */}
          <div className="block lg:hidden mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
            <div className="flex items-center justify-center space-x-4 flex-wrap">
              {steps.map((step, index) => (
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
                      {step.spanish}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
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
              Modalidad de implementación:
            </p>

            <div className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200">
              <span className="text-[var(--color-text)] leading-relaxed flex-1">
                Son 6 fases de trabajo en donde se combinan momentos de
                capacitación con practicas de campo aplicadas al sector
                seleccionado. Las Gestion del cambio será un elemento muy
                importante a tener en cuenta en las semanas de inicio del
                programa.
              </span>
              <span className="text-[var(--color-text)] leading-relaxed flex-1">
                Las practicas de campo serán lideradas por especialistas de
                LYSPAS & CO. Luego el personal de la empresa llevará adelante la
                metodología estando en contacto virtual permanente con LYSPAS &
                CO
              </span>
            </div>
          </div>
          <p className="text-[var(--color-text)] leading-relaxed text-lg">
            {/* {content.footer} */}
          </p>
        </div>
      ),
    },
    {
      id: "3",
      icon: HandCoins,
      title: "Beneficios",
      subtitle: "Beneficios del programa 5S Plus™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: Repeat,
              title: "Implementación Progresiva",
              description:
                "Implementación práctica y progresiva de las 5 etapas",
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
              <p className="text-[var(--color-text)]">{feature.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "6",
      icon: Users,
      title: "¿Para quién está recomendado el programa?",
      subtitle: "Tipos de empresas ideales para 5S Plus™",
      children: (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <h3 className="col-span-full text-2xl font-bold text-[var(--color-primary)]">
            Tipos de Empresas
          </h3>
          {[
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
      id: "5",
      icon: Settings,
      title: "¿Con qué otros productos se relaciona?",
      subtitle: "",
      description:
        "5S Plus™ se integra de manera orgánica con el resto de nuestra suite de mejora continua. Por ejemplo, LeanBridge™ aporta la disciplina y el control visual necesarios para gestionar el trabajo directamente en el área, mientras que WasteZero™ complementa esta base al identificar y eliminar los desperdicios ocultos que surgen del desorden",
      graphic: <ConnectionsGraphic title="5S Plus™" />,
      details: [],
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
                  ${feature.large ? "lg:col-span-2" : ""}
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
                  Click para más detalles
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
        graphic={selectedFeature?.graphic || <div />}
      />
    </div>
  );
};

export default FiveSPlusContent;
