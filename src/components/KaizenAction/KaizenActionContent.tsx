"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Target,
  X,
  Users,
  Settings,
  Award,
  Network,
  FileQuestionMark,
  MessageSquareDot,
} from "lucide-react";
import WhatIsKaizenGraphic from "../../icons-componets/KaizenAction/WhatIsKaizenGraphic";
import ObjectivesKaizenGraphic from "../../icons-componets/KaizenAction/ObjectivesKaizenGraphic";
import MethodologyKaizenGraphic from "../../icons-componets/KaizenAction/MethodologyKaizenGraphic";
import ConnectionsKaizenGraphic from "../../icons-componets/KaizenAction/ConnectionsKaizenGraphic";

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

const KaizenActionContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      id: "1",
      icon: Target,
      title: "¿Qué es KAIZEN ACTION™?",
      subtitle: "Servicio de intervención directa para problemas complejos",
      children: (
        <>
          <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              <strong>KAIZEN ACTION™</strong> es un servicio de intervención
              directa para resolver problemas reales y complejos, utilizando la
              metodología <strong>KAIZEN</strong> con foco en acción inmediata,
              colaboración interdisciplinaria y resultados medibles.
            </p>
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6">
              Está pensado para empresas que necesitan resolver cuellos de
              botella operativos, conflictos entre áreas o problemas End to End
              que afectan la experiencia del cliente, la eficiencia o el
              cumplimiento de objetivos estratégicos.
            </p>
          </div>
          <div className="my-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
            <WhatIsKaizenGraphic />
          </div>
        </>
      ),
      large: true,
    },
    {
      id: "2",
      icon: FileQuestionMark,
      title: "¿Qué incluye el programa?",
      details: [
        "Planificación y facilitación de eventos KAIZEN reales, en forma presencial o virtuales",
        "Selección y definición del problema con el equipo líder",
        "Formación en acción de facilitadores ya entrenados (vinculado con LeanBridgeTM)",
        "Aplicación del ciclo completo: Definición, Análisis, Generación de soluciones, Implementación rápida",
        "Seguimiento posterior con documentación y control de sostenibilidad",
      ],
    },
    {
      id: "3",
      icon: Award,
      title: "Objetivos del programa",
      subtitle: "Transformar problemas en oportunidades de mejora",
      graphic: <ObjectivesKaizenGraphic />,
    },
    {
      id: "6",
      icon: Users,
      title: "Aplicaciones concretas",
      subtitle: "Casos específicos donde KAIZEN ACTION™ genera mayor impacto",
      // description:
      // "El programa está diseñado para abordar tres tipos principales de problemas que requieren intervención colaborativa inmediata y metodología estructurada.",
      subDescription: "Aplicaciones específicas incluyen:",
      // graphic: <ApplicationsKaizenGraphic />,
      details: [
        // "Problemas técnicos: mantenimiento, calidad, reprocesos, desvíos productivos",
        // "Problemas transaccionales entre sectores: operaciones-logística, ventas-producción, etc.",
        // "Problemas End to End: desde el origen del negocio hasta el cliente final, incluso entre unidades geográficamente distantes",
        // "Conflictos interdepartamentales que afectan la eficiencia operativa",
        // "Cuellos de botella que requieren rediseño de procesos colaborativo",
        // "Situaciones que involucran múltiples stakeholders internos y externos",

        "Problemas técnicos (mantenimiento, calidad, reprocesos, desvíos productivos)",
        "Problemas transaccionales entre sectores (operaciones- logística, ventas-producción, etc.)",
        "Problemas End to End, desde el origen del negocio hasta el cliente final, incluso entre unidades geográficamente distantes",
      ],
      // footer:
      // "El valor económico de las iniciativas suele triplicarse (x3) cuando participan áreas transaccionales y puede multiplicarse por siete (x7) cuando intervienen áreas vinculadas al cliente final.",
    },
    {
      id: "4",
      icon: MessageSquareDot,
      title: "¿Por qué es diferente?",
      subtitle: "Evolución natural del camino LEAN iniciado con LeanBridge™",
      children: (
        <div>
          {/* Description */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              Cuando el agua fría del mar se encuentra con el agua cálida de la
              costa, nace la mayor cantidad de vida. Así también, en los bordes
              de los problemas y en la interacción con nuevas áreas y clientes,
              surgen las soluciones más innovadoras y valiosas
            </p>

            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium mt-4">
              La mayoría de los problemas no se resuelven dentro de un solo
              silo. <strong>KAIZEN ACTION™</strong> genera impacto exponencial
              cuando las sesiones incluyen a personas de múltiples sectores,
              incluso aquellos más alejados: producción, logística,
              planificación, finanzas, servicio al cliente, comercial, e incluso
              representantes del cliente interno o externo.
            </p>
          </div>

          {/* Details */}
          <div>
            {[
              "El valor económico de las iniciativas suele triplicarse (x3) cuando participan áreas transaccionales.",
              "Puede multiplicarse por siete (x7) cuando intervienen áreas vinculadas al cliente final.",
              "Y todo esto, sin inversión en activos fijos: solo con inteligencia colectiva y metodología estructurada.",
            ].map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-2 mb-2 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mt-3 flex-shrink-0" />
                <span className="text-[var(--color-text)] leading-relaxed flex-1">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "7",
      icon: Network,
      title: "¿Cómo se vincula con otros programas?",
      // subtitle: "Evolución natural del camino LEAN iniciado con LeanBridge™",
      children: (
        <div className="bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border-l-4 border-[var(--color-secondary)]">
          <p className="text-lg text-[var(--color-text)] leading-relaxed">
            <strong>KAIZEN ACTION™</strong> es una evolución natural del camino
            iniciado con <strong>LeanBridge™</strong>. Una vez que las personas
            han sido entrenadas en fundamentos LEAN y resolución de desperdicios
            (<strong>WasteZero™</strong>), pueden actuar como facilitadores de
            eventos KAIZEN reales, y así consolidar su rol de agentes de cambio
            dentro de la organización.
          </p>
          <div className="mt-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
            <ConnectionsKaizenGraphic />,
          </div>
        </div>
      ),

      // large: true,
    },
    {
      id: "5",
      icon: Settings,
      title: "Metodología DMAIC",
      subtitle: "Ciclo estructurado de mejora en 3 etapas principales",
      // description:
      //   "KAIZEN ACTION™ se basa en el ciclo estructurado de mejora DMAIC (Definir, Medir, Analizar, Mejorar y Controlar), el estándar metodológico de excelencia utilizado en Lean Six Sigma y mejoras de alto impacto.",
      // subDescription:
      //   "La modalidad combina preparación, ejecución intensiva y seguimiento:",
      // graphic: <MethodologyKaizenGraphic />,
      // details: [
      //   "Etapa 1 - Definir y Medir (2 semanas): Recolección y validación de información del problema fuera del lugar de trabajo",
      //   "Etapa 2 - Evento KAIZEN presencial (mínimo 3 días consecutivos): Análisis profundo colaborativo y generación de soluciones",
      //   "Etapa 3 - Control y sostenibilidad (mínimo 3 meses): Seguimiento con controles visuales y auditorías internas",
      //   "Herramientas: SIPOC, análisis de causa, brainstorming estructurado, diagrama de Ishikawa, matrices de Impacto-Esfuerzo",
      //   "Participación obligatoria de todas las áreas involucradas en el evento presencial",
      //   "Transferencia gradual de la ejecución a los responsables internos",
      // ],
      // footer:
      //   "Esta modalidad garantiza no solo resultados visibles y medibles, sino también la formación progresiva de líderes internos que aprenden a facilitar eventos KAIZEN por sí mismos.",
      // large:true
      children: (
        <div>
          {/* Description */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              KAIZEN ACTIONTM se basa en el ciclo estructurado de mejora DMAIC
              (Definir, Medir, Analizar, Mejorar y Controlar), el estándar
              metodológico de excelencia utilizado en Lean Six Sigma y mejoras
              de alto impacto.
            </p>
            <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
              La modalidad combina tiempo de preparación fuera del evento con
              ejecución intensiva presencial, para garantizar análisis de
              calidad, participación real y sostenibilidad del cambio{" "}
            </p>
          </div>

          {/* Graphic */}
          <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
            <MethodologyKaizenGraphic />
          </div>

          <blockquote className="text-xl font-bold text-[var(--color-secondary)] italic border-l-4 border-[var(--color-accent)] pl-6 mt-8">
            "Esta modalidad garantiza no solo resultados visibles y medibles,
            sino también la formación progresiva de líderes internos que
            aprenden a facilitar eventos KAIZEN por sí mismos"
          </blockquote>
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
    <div id="kaizen-content" className="bg-[var(--color-bg)] py-20">
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
        graphic={selectedFeature?.graphic}
      />
    </div>
  );
};

export default KaizenActionContent;
