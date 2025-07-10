"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { CheckCircle, XCircle, Target, Zap, X, Users, Settings, Award, Network } from "lucide-react"
import WhatIsKaizenGraphic from "../../icons-componets/KaizenAction/WhatIsKaizenGraphic"
import ProblemsKaizenGraphic from "../../icons-componets/KaizenAction/ProblemsKaizenGraphic"
import ObjectivesKaizenGraphic from "../../icons-componets/KaizenAction/ObjectivesKaizenGraphic"
import MethodologyKaizenGraphic from "../../icons-componets/KaizenAction/MethodologyKaizenGraphic"
import ApplicationsKaizenGraphic from "../../icons-componets/KaizenAction/ApplicationsKaizenGraphic"
import ConnectionsKaizenGraphic from "../../icons-componets/KaizenAction/ConnectionsKaizenGraphic"

interface ContentSectionProps {
  id: string
  title: string
  subtitle: string
  children: React.ReactNode
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  content: {
    description?: string
    subDescription?: string
    details: string[]
    footer?: string
  }
  graphic: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, subtitle, content, graphic }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      setIsAnimating(true)
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      setIsAnimating(false)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

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
            <h2 id="modal-title" className="text-3xl font-bold text-[var(--color-primary)] mb-2">
              {title}
            </h2>
            {subtitle && <p className="text-lg text-[var(--color-secondary)] font-medium">{subtitle}</p>}
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
        <div className="p-8">
          {/* Description */}
          {content.description && (
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">{content.description}</p>
            </div>
          )}

          {/* Graphic */}
          <div className="mb-8 bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-6 border border-[var(--color-border)]">
            {graphic}
          </div>

          {/* Details */}
          <div>
            {content.subDescription && (
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg mb-4">
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
                <span className="text-[var(--color-text)] leading-relaxed flex-1">{detail.replace(/^[✔✘] /, "")}</span>
              </div>
            ))}
          </div>
          {content.footer && (
            <div className="mt-6 p-4 bg-[var(--color-bg)] rounded-xl">
              <p className="text-[var(--color-text)] leading-relaxed text-lg">{content.footer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const ContentSection: React.FC<ContentSectionProps> = ({ id, title, subtitle, children }) => (
  <section id={id} className="px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">{title}</h2>
        <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">{subtitle}</p>
      </div>
      {children}
    </div>
  </section>
)

const KaizenActionContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<any>(null)

  const features = [
    {
      id: "1",
      icon: Target,
      title: "¿Qué es KAIZEN ACTION™?",
      subtitle: "Servicio de intervención directa para problemas reales y complejos",
      description:
        "KAIZEN ACTION™ es un servicio de intervención directa para resolver problemas reales y complejos, utilizando la metodología KAIZEN con foco en acción inmediata, colaboración interdisciplinaria y resultados medibles.",
      subDescription: "¿Qué incluye el programa?",
      graphic: <WhatIsKaizenGraphic />,
      details: [
        "Planificación y facilitación de eventos KAIZEN reales, en forma presencial o virtuales",
        "Selección y definición del problema con el equipo líder",
        "Formación en acción de facilitadores ya entrenados (vinculado con LeanBridge™)",
        "Aplicación del ciclo completo: Definición, Análisis, Generación de soluciones, Implementación rápida",
        "Seguimiento posterior con documentación y control de sostenibilidad",
      ],
      footer:
        "Está pensado para empresas que necesitan resolver cuellos de botella operativos, conflictos entre áreas o problemas End to End que afectan la experiencia del cliente, la eficiencia o el cumplimiento de objetivos estratégicos.",
    },
    {
      id: "2",
      icon: Zap,
      title: "¿Por qué es diferente?",
      subtitle: "Impacto exponencial a través de la colaboración interdisciplinaria",
      description:
        "Cuando el agua fría del mar se encuentra con el agua cálida de la costa, nace la mayor cantidad de vida. Así también, en los bordes de los problemas y en la interacción con nuevas áreas y clientes, surgen las soluciones más innovadoras y valiosas.",
      subDescription:
        "La mayoría de los problemas no se resuelven dentro de un solo silo. KAIZEN ACTION™ genera impacto exponencial cuando las sesiones incluyen a personas de múltiples sectores:",
      graphic: <ProblemsKaizenGraphic />,
      details: [
        "Producción, logística, planificación, finanzas, servicio al cliente, comercial",
        "Incluso representantes del cliente interno o externo",
        "El valor económico de las iniciativas suele triplicarse (x3) cuando participan áreas transaccionales",
        "Puede multiplicarse por siete (x7) cuando intervienen áreas vinculadas al cliente final",
        "Y todo esto, sin inversión en activos fijos: solo con inteligencia colectiva y metodología estructurada",
      ],
    },
    {
      id: "3",
      icon: Award,
      title: "Objetivos del programa",
      subtitle: "Transformar problemas en oportunidades de mejora sostenible",
      description:
        "KAIZEN ACTION™ busca no solo resolver problemas inmediatos, sino también desarrollar capacidades internas y activar una cultura de mejora transversal y ágil.",
      graphic: <ObjectivesKaizenGraphic />,
      details: [
        "Resolver problemas que generan pérdida de eficiencia, conflicto o demoras",
        "Activar una cultura de mejora transversal y ágil",
        "Desarrollar la habilidad interna de liderar KAIZEN con criterios profesionales",
        "Formar agentes de cambio en plena acción, dentro del contexto real de la empresa",
      ],
    },
    {
      id: "4",
      icon: Settings,
      title: "Modalidad de Implementación",
      subtitle: "Metodología DMAIC en 3 etapas estructuradas",
      description:
        "KAIZEN ACTION™ se basa en el ciclo estructurado de mejora DMAIC (Definir, Medir, Analizar, Mejorar y Controlar), el estándar metodológico de excelencia utilizado en Lean Six Sigma y mejoras de alto impacto.",
      subDescription:
        "La modalidad combina tiempo de preparación fuera del evento con ejecución intensiva presencial, para garantizar análisis de calidad, participación real y sostenibilidad del cambio:",
      graphic: <MethodologyKaizenGraphic />,
      details: [
        "Etapa 1 - Definir y Medir (2 semanas): El equipo KAIZEN trabaja fuera del lugar de trabajo, recolecta y valida información del problema",
        "Etapa 2 - Evento KAIZEN presencial (mínimo 3 días consecutivos): Análisis profundo colaborativo con participación de todas las áreas involucradas",
        "Etapa 3 - Control y sostenibilidad (mínimo 3 meses): Seguimiento con controles visuales, auditorías internas y transferencia gradual",
        "Herramientas: SIPOC, análisis de causa, brainstorming estructurado, diagrama de Ishikawa, matrices de Impacto-Esfuerzo",
      ],
      footer:
        "Esta modalidad garantiza no solo resultados visibles y medibles, sino también la formación progresiva de líderes internos que aprenden a facilitar eventos KAIZEN por sí mismos.",
      large: true,
    },
    {
      id: "5",
      icon: Users,
      title: "Aplicaciones concretas",
      subtitle: "Tres tipos principales de problemas que aborda el programa",
      description:
        "El programa está diseñado para abordar problemas específicos que requieren intervención colaborativa inmediata y metodología estructurada.",
      graphic: <ApplicationsKaizenGraphic />,
      details: [
        "Problemas técnicos: mantenimiento, calidad, reprocesos, desvíos productivos",
        "Problemas transaccionales entre sectores: operaciones-logística, ventas-producción, etc.",
        "Problemas End to End: desde el origen del negocio hasta el cliente final, incluso entre unidades geográficamente distantes",
      ],
      footer:
        "El valor económico de las iniciativas suele triplicarse (x3) cuando participan áreas transaccionales y puede multiplicarse por siete (x7) cuando intervienen áreas vinculadas al cliente final.",
    },
    {
      id: "6",
      icon: Network,
      title: "¿Cómo se vincula con otros programas?",
      subtitle: "Evolución natural del camino iniciado con LeanBridge™",
      description:
        "KAIZEN ACTION™ es una evolución natural del camino iniciado con LeanBridge™. Una vez que las personas han sido entrenadas en fundamentos LEAN y resolución de desperdicios (WasteZero™), pueden actuar como facilitadores de eventos KAIZEN reales, y así consolidar su rol de agentes de cambio dentro de la organización.",
      graphic: <ConnectionsKaizenGraphic />,
      details: [
        "Requiere facilitadores previamente entrenados en LeanBridge™",
        "Se potencia con equipos que han aplicado WasteZero™ para identificar desperdicios",
        "Complementa la organización lograda con 5S Plus™",
        "Utiliza la estabilidad de procesos desarrollada con FlowStable™",
        "Consolida el rol de agentes de cambio dentro de la organización",
      ],
      large: true,
    },
  ]

  const handleCardClick = (feature: any) => {
    setSelectedFeature(feature)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedFeature(null)
  }

  return (
    <div id="kaizen-content" className="bg-[var(--color-bg)] py-20">
      <ContentSection id="que-es" title="" subtitle="">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            const isActive = activeCard === feature.id
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
                  <h3 className="text-xl font-bold text-[var(--color-primary)] ml-4 flex-1">{feature.title}</h3>
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
            )
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
        }}
        graphic={selectedFeature?.graphic || <div />}
      />
    </div>
  )
}

export default KaizenActionContent
