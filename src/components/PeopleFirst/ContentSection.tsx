"use client";

import type React from "react";
import { useState, useEffect, useMemo } from "react";
import {
  CheckCircle,
  XCircle,
  Target,
  Clock,
  Zap,
  TrendingUp,
  X,
  Users,
  Settings,
  Award,
  RefreshCcw,
  Box,
  HandCoins,
  Lightbulb,
  CircleQuestionMark,
} from "lucide-react";
import ConnectionsGraphic from "../../icons-componets/FiveSPlus/ConnectionsGraphic";
import MethodologyGraphic from "./MethodologyGraphic";
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

// Traducciones para los 3 idiomas
const translations: Record<Language, any> = {
  es: {
    clickForDetails: "Click para más detalles",
    modalClose: "Cerrar modal",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "¿Qué es y qué no es?",
        subtitle: "Definición clara del programa PeopleFirst™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                People First™ es un programa de desarrollo organizacional
                centrado en las personas, diseñado para alinear habilidades,
                comportamientos y evolución profesional con los desafíos
                estratégicos y operativos de la empresa. Su enfoque integra
                herramientas como coaching con propósito, feedback basado en
                objetivos, matriz de habilidades conectada con planes de
                formación y acompañamiento en el desarrollo de competencias
                técnicas y generales.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                ¿Qué es?
              </p>
              {[
                "✔ Un programa integral que pone a las personas en el centro de la estrategia organizacional.",
                "✔ Un sistema que conecta el desarrollo de habilidades y comportamientos con los objetivos de negocio.",
                "✔ Un proceso que utiliza coaching, feedback y planes de formación personalizados para impulsar la evolución profesional.",
                "✔ Un acompañamiento estructurado para el desarrollo de competencias técnicas y generales, alineadas a los retos de la empresa.",
                "✔ Una metodología que promueve la mejora continua de la cultura organizacional y el liderazgo.",
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
                "✘ Un programa genérico de capacitación sin conexión con la estrategia de la empresa.",
                "✘ Una solución aislada que no involucra a líderes y equipos en el proceso de cambio.",
                "✘ Un enfoque limitado solo a habilidades técnicas, sin considerar el desarrollo de comportamientos y cultura.",
                "✘ Un proceso puntual sin seguimiento ni acompañamiento en la evolución profesional.",
                "✘ Una iniciativa que no mide ni vincula el impacto en los resultados del negocio.",
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
        subtitle: "Los desperdicios y desafíos operativos",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Desalineación y bajo compromiso",
                description:
                  "Bajo compromiso y alineación entre el trabajo diario y los objetivos de largo plazo.",
              },
              {
                icon: Settings,
                title: "Roles y competencias poco claros",
                description:
                  "Equipos con roles mal definidos o competencias desactualizadas.",
              },
              {
                icon: Lightbulb,
                title: "Formación desconectada",
                description:
                  "Planes de formación sin conexión con las verdaderas brechas de habilidades.",
              },
              {
                icon: Award,
                title: "Gestión de talento limitada",
                description:
                  "Dificultades en la gestión del talento técnico o potencial interno.",
              },
              {
                icon: RefreshCcw,
                title: "Falta de feedback y acompañamiento",
                description:
                  "Ausencia de procesos sistemáticos de feedback y acompañamiento del desempeño.",
              },
              {
                icon: CircleQuestionMark,
                title: "Poca preparación para nuevos retos",
                description:
                  "Falta de preparación para asumir nuevos desafíos o liderazgos.",
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
        id: "4",
        icon: Clock,
        title: "Metodología & Tiempos",
        subtitle: "Plan de implementación sugerido",
        description:
          "PeopleFirst™ se implementa como un sistema modular adaptable, con intervenciones específicas según el diagnóstico y las prioridades de la empresa. Las actividades pueden realizarse en ciclos cortos de 2 a 8 semanas.",
        subDescription: "Enfocadas en:",
        graphic: <MethodologyGraphic />,
        details: [
          "Diagnóstico de capacidades (matriz de habilidades + entrevistas o mapeo de entrenamientos).",
          "Workshops de liderazgo y feedback con mandos medios y líderes.",
          "Diseño de planes de desarrollo individual o de equipo, alineados a los objetivos del área.",
          "Entrenamientos técnicos o de soft skills, en función de brechas detectadas.",
          "Instalación de rutinas de seguimiento y coaching, con acompañamiento o transferencia de metodología.",
          "Incorporacion de feedback y coaching dentro de las rutinas standard de los supervisores y gerentes.",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Beneficios",
        subtitle: "Beneficios del programa PeopleFirst™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Compromiso y enfoque en objetivos",
                description:
                  "Fortalece el compromiso individual a través de objetivos claros y feedback efectivo.",
              },
              {
                icon: Box,
                title: "Roles y responsabilidades claros",
                description:
                  "Mejora la asignación de roles y responsabilidades, basándose en evidencias de habilidades reales.",
              },
              {
                icon: Lightbulb,
                title: "Cierre de brechas de habilidades",
                description:
                  "Cierra brechas entre necesidades de la operación y el perfil de las personas mediante entrenamientos a medida.",
              },
              {
                icon: RefreshCcw,
                title: "Aprendizaje y mejora continua",
                description:
                  "Genera un entorno de aprendizaje continuo, donde el desarrollo técnico y humano es parte del sistema operativo de la empresa.",
              },
              {
                icon: TrendingUp,
                title: "Crecimiento sostenible",
                description:
                  "Conecta el crecimiento personal con la mejora continua organizacional, aumentando la sostenibilidad de los resultados.",
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
        title: "¿Para quién está pensado el programa?",
        subtitle:
          "Empresas y líderes que valoran a las personas como motor del cambio",
        description:
          "PeopleFirst™ está diseñado para organizaciones que creen en el valor de las personas como motor del cambio y el rendimiento sostenible. Es especialmente útil para empresas que buscan alinear las habilidades de sus equipos con los desafíos técnicos, culturales y estratégicos del negocio.",
        details: [
          "Empresas que priorizan el desarrollo humano como base para la transformación y la mejora continua.",
          "Organizaciones que desean alinear las capacidades de sus equipos con los retos técnicos, culturales y estratégicos.",
          "Mandos medios, líderes de equipos y responsables de formación que impulsan el cambio organizacional.",
          "Líderes de transformación cultural enfocados en resultados sostenibles a través de las personas.",
        ],
      },
      {
        id: "5",
        icon: Settings,
        title: "¿Con qué otros productos se relaciona?",
        subtitle:
          "Integración con herramientas Lean para potenciar la transformación",
        description:
          "PeopleFirst™ se integra de manera estratégica con otros programas clave como 5S Plus™, FlowStable™ y Kaizen Action™, permitiendo una sinergia que fortalece la cultura Lean y facilita la adopción de prácticas de mejora continua en toda la organización. Esta conexión asegura que el desarrollo de las personas esté alineado con la excelencia operativa y la transformación sostenible.",
        graphic: <ConnectionsGraphic title="PeopleFirst™" />,
        details: [],
      },
    ],
  },
  en: {
    clickForDetails: "Click for more details",
    modalClose: "Close modal",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "What is it and what is it not?",
        subtitle: "Clear definition of the PeopleFirst™ program",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                People First™ is an organizational development program focused
                on people, designed to align skills, behaviors, and professional
                evolution with the company's strategic and operational
                challenges. Its approach integrates tools such as purposeful
                coaching, goal-based feedback, a skills matrix connected to
                training plans, and support in the development of technical and
                general competencies.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                What is it?
              </p>
              {[
                "✔ A comprehensive program that puts people at the center of organizational strategy.",
                "✔ A system that connects skill and behavior development with business objectives.",
                "✔ A process that uses coaching, feedback, and personalized training plans to drive professional evolution.",
                "✔ Structured support for the development of technical and general competencies, aligned with company challenges.",
                "✔ A methodology that promotes continuous improvement of organizational culture and leadership.",
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
                "✘ A generic training program disconnected from company strategy.",
                "✘ An isolated solution that does not involve leaders and teams in the change process.",
                "✘ An approach limited only to technical skills, without considering behavior and culture development.",
                "✘ A one-off process without follow-up or support in professional evolution.",
                "✘ An initiative that does not measure or link impact to business results.",
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
        subtitle: "Operational wastes and challenges",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Misalignment and low engagement",
                description:
                  "Low engagement and alignment between daily work and long-term objectives.",
              },
              {
                icon: Settings,
                title: "Unclear roles and competencies",
                description:
                  "Teams with poorly defined roles or outdated competencies.",
              },
              {
                icon: Lightbulb,
                title: "Disconnected training",
                description: "Training plans not connected to real skill gaps.",
              },
              {
                icon: Award,
                title: "Limited talent management",
                description:
                  "Difficulties in managing technical talent or internal potential.",
              },
              {
                icon: RefreshCcw,
                title: "Lack of feedback and support",
                description:
                  "Absence of systematic feedback and performance support processes.",
              },
              {
                icon: CircleQuestionMark,
                title: "Little preparation for new challenges",
                description:
                  "Lack of preparation to take on new challenges or leadership roles.",
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
        id: "4",
        icon: Clock,
        title: "Methodology & Timing",
        subtitle: "Suggested implementation plan",
        description:
          "PeopleFirst™ is implemented as an adaptable modular system, with specific interventions according to the company's diagnosis and priorities. Activities can be carried out in short cycles of 2 to 8 weeks.",
        subDescription: "Focused on:",
        graphic: <MethodologyGraphic />,
        details: [
          "Capacity diagnosis (skills matrix + interviews or training mapping).",
          "Leadership and feedback workshops with middle management and leaders.",
          "Design of individual or team development plans, aligned with area objectives.",
          "Technical or soft skills training, based on detected gaps.",
          "Implementation of follow-up and coaching routines, with support or methodology transfer.",
          "Incorporation of feedback and coaching into the standard routines of supervisors and managers.",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefits",
        subtitle: "Benefits of the PeopleFirst™ program",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Commitment and focus on objectives",
                description:
                  "Strengthens individual commitment through clear objectives and effective feedback.",
              },
              {
                icon: Box,
                title: "Clear roles and responsibilities",
                description:
                  "Improves role and responsibility assignment, based on evidence of real skills.",
              },
              {
                icon: Lightbulb,
                title: "Closing skill gaps",
                description:
                  "Closes gaps between operational needs and people's profiles through tailored training.",
              },
              {
                icon: RefreshCcw,
                title: "Continuous learning and improvement",
                description:
                  "Creates a continuous learning environment, where technical and human development is part of the company's operating system.",
              },
              {
                icon: TrendingUp,
                title: "Sustainable growth",
                description:
                  "Connects personal growth with organizational continuous improvement, increasing result sustainability.",
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
        title: "Who is the program for?",
        subtitle:
          "Companies and leaders who value people as the engine of change",
        description:
          "PeopleFirst™ is designed for organizations that believe in the value of people as the engine of change and sustainable performance. It is especially useful for companies seeking to align their teams' skills with the technical, cultural, and strategic challenges of the business.",
        details: [
          "Companies that prioritize human development as the basis for transformation and continuous improvement.",
          "Organizations that want to align their teams' capabilities with technical, cultural, and strategic challenges.",
          "Middle managers, team leaders, and training managers who drive organizational change.",
          "Cultural transformation leaders focused on sustainable results through people.",
        ],
      },
      {
        id: "5",
        icon: Settings,
        title: "What other products is it related to?",
        subtitle: "Integration with Lean tools to enhance transformation",
        description:
          "PeopleFirst™ is strategically integrated with other key programs such as 5S Plus™, FlowStable™, and Kaizen Action™, enabling synergy that strengthens Lean culture and facilitates the adoption of continuous improvement practices throughout the organization. This connection ensures that people development is aligned with operational excellence and sustainable transformation.",
        graphic: <ConnectionsGraphic title="PeopleFirst™" />,
        details: [],
      },
    ],
  },
  pt: {
    clickForDetails: "Clique para mais detalhes",
    modalClose: "Fechar modal",
    features: [
      {
        id: "1",
        icon: CircleQuestionMark,
        title: "O que é e o que não é?",
        subtitle: "Definição clara do programa PeopleFirst™",
        children: (
          <>
            <div className="mb-8 p-6 bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 rounded-2xl border-l-4 border-[var(--color-secondary)]">
              <p className="text-[var(--color-text)] leading-relaxed text-lg font-medium">
                People First™ é um programa de desenvolvimento organizacional
                centrado nas pessoas, projetado para alinhar habilidades,
                comportamentos e evolução profissional com os desafios
                estratégicos e operacionais da empresa. Sua abordagem integra
                ferramentas como coaching com propósito, feedback baseado em
                objetivos, matriz de habilidades conectada a planos de
                treinamento e acompanhamento no desenvolvimento de competências
                técnicas e gerais.
              </p>
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold leading-relaxed text-lg">
                O que é?
              </p>
              {[
                "✔ Um programa abrangente que coloca as pessoas no centro da estratégia organizacional.",
                "✔ Um sistema que conecta o desenvolvimento de habilidades e comportamentos com os objetivos do negócio.",
                "✔ Um processo que utiliza coaching, feedback e planos de treinamento personalizados para impulsionar a evolução profissional.",
                "✔ Um acompanhamento estruturado para o desenvolvimento de competências técnicas e gerais, alinhadas aos desafios da empresa.",
                "✔ Uma metodologia que promove a melhoria contínua da cultura organizacional e da liderança.",
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
                "✘ Um programa genérico de treinamento sem conexão com a estratégia da empresa.",
                "✘ Uma solução isolada que não envolve líderes e equipes no processo de mudança.",
                "✘ Uma abordagem limitada apenas a habilidades técnicas, sem considerar o desenvolvimento de comportamentos e cultura.",
                "✘ Um processo pontual sem acompanhamento ou suporte na evolução profissional.",
                "✘ Uma iniciativa que não mede nem vincula o impacto aos resultados do negócio.",
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
        subtitle: "Desperdícios e desafios operacionais",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Desalinhamento e baixo engajamento",
                description:
                  "Baixo engajamento e alinhamento entre o trabalho diário e os objetivos de longo prazo.",
              },
              {
                icon: Settings,
                title: "Papéis e competências pouco claros",
                description:
                  "Equipes com papéis mal definidos ou competências desatualizadas.",
              },
              {
                icon: Lightbulb,
                title: "Treinamento desconectado",
                description:
                  "Planos de treinamento sem conexão com as reais lacunas de habilidades.",
              },
              {
                icon: Award,
                title: "Gestão de talentos limitada",
                description:
                  "Dificuldades na gestão do talento técnico ou potencial interno.",
              },
              {
                icon: RefreshCcw,
                title: "Falta de feedback e acompanhamento",
                description:
                  "Ausência de processos sistemáticos de feedback e acompanhamento de desempenho.",
              },
              {
                icon: CircleQuestionMark,
                title: "Pouca preparação para novos desafios",
                description:
                  "Falta de preparação para assumir novos desafios ou lideranças.",
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
        id: "4",
        icon: Clock,
        title: "Metodologia & Tempos",
        subtitle: "Plano de implementação sugerido",
        description:
          "PeopleFirst™ é implementado como um sistema modular adaptável, com intervenções específicas de acordo com o diagnóstico e as prioridades da empresa. As atividades podem ser realizadas em ciclos curtos de 2 a 8 semanas.",
        subDescription: "Focadas em:",
        graphic: <MethodologyGraphic />,
        details: [
          "Diagnóstico de capacidades (matriz de habilidades + entrevistas ou mapeamento de treinamentos).",
          "Workshops de liderança e feedback com líderes e gestores.",
          "Desenho de planos de desenvolvimento individual ou de equipe, alinhados aos objetivos da área.",
          "Treinamentos técnicos ou de soft skills, conforme lacunas detectadas.",
          "Instalação de rotinas de acompanhamento e coaching, com suporte ou transferência de metodologia.",
          "Incorporação de feedback e coaching nas rotinas padrão de supervisores e gerentes.",
        ],
      },
      {
        id: "8",
        icon: HandCoins,
        title: "Benefícios",
        subtitle: "Benefícios do programa PeopleFirst™",
        children: (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Compromisso e foco em objetivos",
                description:
                  "Fortalece o compromisso individual por meio de objetivos claros e feedback eficaz.",
              },
              {
                icon: Box,
                title: "Papéis e responsabilidades claros",
                description:
                  "Melhora a atribuição de papéis e responsabilidades, com base em evidências de habilidades reais.",
              },
              {
                icon: Lightbulb,
                title: "Fechamento de lacunas de habilidades",
                description:
                  "Fecha lacunas entre as necessidades da operação e o perfil das pessoas por meio de treinamentos sob medida.",
              },
              {
                icon: RefreshCcw,
                title: "Aprendizado e melhoria contínua",
                description:
                  "Gera um ambiente de aprendizado contínuo, onde o desenvolvimento técnico e humano faz parte do sistema operacional da empresa.",
              },
              {
                icon: TrendingUp,
                title: "Crescimento sustentável",
                description:
                  "Conecta o crescimento pessoal com a melhoria contínua organizacional, aumentando a sustentabilidade dos resultados.",
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
        title: "Para quem é o programa?",
        subtitle:
          "Empresas e líderes que valorizam as pessoas como motor da mudança",
        description:
          "PeopleFirst™ é projetado para organizações que acreditam no valor das pessoas como motor da mudança e do desempenho sustentável. É especialmente útil para empresas que buscam alinhar as habilidades de suas equipes com os desafios técnicos, culturais e estratégicos do negócio.",
        details: [
          "Empresas que priorizam o desenvolvimento humano como base para a transformação e melhoria contínua.",
          "Organizações que desejam alinhar as capacidades de suas equipes com desafios técnicos, culturais e estratégicos.",
          "Gestores, líderes de equipe e responsáveis por treinamento que impulsionam a mudança organizacional.",
          "Líderes de transformação cultural focados em resultados sustentáveis por meio das pessoas.",
        ],
      },
      {
        id: "5",
        icon: Settings,
        title: "Com quais outros produtos se relaciona?",
        subtitle:
          "Integração com ferramentas Lean para potencializar a transformação",
        description:
          "PeopleFirst™ se integra estrategicamente com outros programas-chave como 5S Plus™, FlowStable™ e Kaizen Action™, permitindo uma sinergia que fortalece a cultura Lean e facilita a adoção de práticas de melhoria contínua em toda a organização. Essa conexão garante que o desenvolvimento das pessoas esteja alinhado com a excelência operacional e a transformação sustentável.",
        graphic: <ConnectionsGraphic title="PeopleFirst™" />,
        details: [],
      },
    ],
  },
};

const PeopleFirstContent: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage as Language];

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  // Memoize features to avoid unnecessary rerenders
  const features = useMemo(() => t.features, [t.features]);

  const handleCardClick = (feature: (typeof features)[number]) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div id="PeopleFirst-content" className="bg-[var(--color-bg)]">
      <ContentSection id="que-es" title="" subtitle="">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature: (typeof features)[number]) => {
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
      />
    </div>
  );
};

export default PeopleFirstContent;
