import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const PHASES: Record<
  Language,
  {
    title: string;
    phases: {
      phase: string;
      duration: string;
      title: string;
      description: string;
      color: string;
    }[];
  }
> = {
  es: {
    title: "Modalidad de implementación (6 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "S1 Mes 1",
        title: "Diagnóstico",
        description: "Reconocimiento del lugar",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 1",
        duration: "S1 Mes 1",
        title: "Formación Inicial",
        description: "Capacitación del personal Conceptos Lean",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 2",
        duration: "S2 Mes 1",
        title: "Análisis del Flujo de Valor",
        description: "Creación de mapas de valor - Caminata LEAN",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 3",
        duration: "S3 Mes 2",
        title: "Formación en Mejora Continua",
        description: "Capacitación en metodología DMAIC",
        color: "bg-green-500",
      },
      {
        phase: "Fase 4",
        duration: "S4 Mes 3",
        title: "Desarrollo de Liderazgo KAIZEN",
        description: "Generando líderes KAIZEN",
        color: "bg-yellow-500",
      },
      {
        phase: "Fase 5",
        duration: "M4",
        title: "Inicio del Ciclo DMAIC",
        description: "Seguimiento de proyectos - Etapa Definir-Medir",
        color: "bg-orange-500",
      },
      {
        phase: "Fase 6",
        duration: "M5",
        title: "Análisis y Mejora de Procesos",
        description: "Seguimiento de proyectos - Etapa Analizar/Mejorar",
        color: "bg-red-500",
      },
      {
        phase: "Fase Final",
        duration: "M6",
        title: "Cierre y Preparación para la Siguiente Etapa",
        description: "Auditorías de gestión. Objetivos y próxima etapa",
        color: "bg-purple-500",
      },
    ],
  },
  en: {
    title: "Implementation Modality (6 MONTHS)",
    phases: [
      {
        phase: "Initial Phase",
        duration: "W1 Month 1",
        title: "Diagnosis",
        description: "Site recognition",
        color: "bg-gray-500",
      },
      {
        phase: "Phase 1",
        duration: "W1 Month 1",
        title: "Initial Training",
        description: "Staff training on Lean concepts",
        color: "bg-gray-500",
      },
      {
        phase: "Phase 2",
        duration: "W2 Month 1",
        title: "Value Stream Analysis",
        description: "Value stream mapping - LEAN Gemba Walk",
        color: "bg-blue-500",
      },
      {
        phase: "Phase 3",
        duration: "W3 Month 2",
        title: "Continuous Improvement Training",
        description: "Training in DMAIC methodology",
        color: "bg-green-500",
      },
      {
        phase: "Phase 4",
        duration: "W4 Month 3",
        title: "KAIZEN Leadership Development",
        description: "Developing KAIZEN leaders",
        color: "bg-yellow-500",
      },
      {
        phase: "Phase 5",
        duration: "M4",
        title: "Start of DMAIC Cycle",
        description: "Project follow-up - Define/Measure stage",
        color: "bg-orange-500",
      },
      {
        phase: "Phase 6",
        duration: "M5",
        title: "Process Analysis and Improvement",
        description: "Project follow-up - Analyze/Improve stage",
        color: "bg-red-500",
      },
      {
        phase: "Final Phase",
        duration: "M6",
        title: "Closure and Preparation for Next Stage",
        description: "Management audits. Objectives and next stage",
        color: "bg-purple-500",
      },
    ],
  },
  pt: {
    title: "Modalidade de implementação (6 MESES)",
    phases: [
      {
        phase: "Fase Inicial",
        duration: "S1 Mês 1",
        title: "Diagnóstico",
        description: "Reconhecimento do local",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 1",
        duration: "S1 Mês 1",
        title: "Treinamento Inicial",
        description: "Capacitação da equipe em conceitos Lean",
        color: "bg-gray-500",
      },
      {
        phase: "Fase 2",
        duration: "S2 Mês 1",
        title: "Análise do Fluxo de Valor",
        description: "Criação de mapas de valor - Caminhada LEAN",
        color: "bg-blue-500",
      },
      {
        phase: "Fase 3",
        duration: "S3 Mês 2",
        title: "Treinamento em Melhoria Contínua",
        description: "Capacitação em metodologia DMAIC",
        color: "bg-green-500",
      },
      {
        phase: "Fase 4",
        duration: "S4 Mês 3",
        title: "Desenvolvimento de Liderança KAIZEN",
        description: "Formando líderes KAIZEN",
        color: "bg-yellow-500",
      },
      {
        phase: "Fase 5",
        duration: "M4",
        title: "Início do Ciclo DMAIC",
        description: "Acompanhamento de projetos - Etapa Definir/Medir",
        color: "bg-orange-500",
      },
      {
        phase: "Fase 6",
        duration: "M5",
        title: "Análise e Melhoria de Processos",
        description: "Acompanhamento de projetos - Etapa Analisar/Melhorar",
        color: "bg-red-500",
      },
      {
        phase: "Fase Final",
        duration: "M6",
        title: "Encerramento e Preparação para a Próxima Etapa",
        description: "Auditorias de gestão. Objetivos e próxima etapa",
        color: "bg-purple-500",
      },
    ],
  },
};

const MethodologyGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const { title, phases } = PHASES[lang];

  return (
    <div className="pt-8 pb-4">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        {title}
      </h3>

      {/* Desktop Timeline */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Timeline header */}
          <div className="flex justify-between items-center mb-8">
            {phases.map((phase, index) => (
              <div key={index} className="text-center flex-1">
                <div className="text-sm font-semibold text-[var(--color-secondary)]">
                  {phase.duration}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline line */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[var(--color-border)] transform -translate-y-1/2"></div>
            <div className="flex justify-between">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 ${phase.color} rounded-full border-4 border-white shadow-lg z-10 relative`}
                ></div>
              ))}
            </div>
          </div>

          {/* Phase details */}
          <div className="grid grid-cols-4 gap-4 pb-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`${
                  index >= 4 ? "mt-8" : ""
                } bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-300`}
              >
                <div
                  className={`w-4 h-4 ${phase.color} rounded-full mb-2`}
                ></div>
                <h4 className="font-bold text-[var(--color-primary)] mb-1 text-sm">
                  {phase.phase}
                </h4>
                <h5 className="font-semibold text-[var(--color-secondary)] mb-2 text-sm">
                  {phase.title}
                </h5>
                <p className="text-xs text-[var(--color-text)] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="block lg:hidden">
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}
                >
                  {index + 1}
                </div>
                {index < phases.length - 1 && (
                  <div className="w-0.5 h-16 bg-[var(--color-border)] mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-[var(--color-primary)] text-sm">
                      {phase.phase}
                    </h4>
                    <span className="text-xs text-[var(--color-secondary)] font-semibold">
                      {phase.duration}
                    </span>
                  </div>
                  <h5 className="font-semibold text-[var(--color-secondary)] mb-2 text-sm">
                    {phase.title}
                  </h5>
                  <p className="text-xs text-[var(--color-text)] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologyGraphic;
