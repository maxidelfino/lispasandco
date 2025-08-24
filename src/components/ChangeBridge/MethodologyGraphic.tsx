import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

type Phase = {
  phase: string;
  duration: string;
  title: string;
  description: string;
  color: string;
};

const phasesTranslations: Record<Language, Phase[]> = {
  es: [
    {
      phase: "Fase 1",
      duration: "Semanas 1–2",
      title: "Visión del cambio y evaluación inicial",
      description:
        "Definición escrita del proyecto, objetivos y oportunidades; diagnóstico estado actual vs futuro; conformación del equipo y KPIs de éxito.",
      color: "bg-gray-500",
    },
    {
      phase: "Fase 2",
      duration: "Semanas 3–4",
      title: "Análisis estructural del cambio",
      description:
        "Mapeo de impactos por sector, matriz de impacto-riesgo y contingencias, e identificación de actores clave y dependencias.",
      color: "bg-blue-500",
    },
    {
      phase: "Fase 3",
      duration: "Semanas 5–8",
      title: "Planes de gestión del cambio",
      description:
        "Diseño de planes de gestión de actores (roles y coaching), planes de comunicación, y programas de educación y entrenamiento por competencias.",
      color: "bg-green-500",
    },
    {
      phase: "Fase 4",
      duration: "Semanas 9–12",
      title: "Implementación activa y sostenibilidad",
      description:
        "Ejecución, coaching in situ y seguimiento estructurado; transformación de la comunicación en proceso sistemático para sostener el cambio.",
      color: "bg-yellow-500",
    },
  ],
  en: [
    {
      phase: "Phase 1",
      duration: "Weeks 1–2",
      title: "Change vision and initial assessment",
      description:
        "Written project definition, objectives and opportunities; diagnosis of current vs. future state; team formation and success KPIs.",
      color: "bg-gray-500",
    },
    {
      phase: "Phase 2",
      duration: "Weeks 3–4",
      title: "Structural change analysis",
      description:
        "Mapping of impacts by sector, impact-risk matrix and contingencies, and identification of key stakeholders and dependencies.",
      color: "bg-blue-500",
    },
    {
      phase: "Phase 3",
      duration: "Weeks 5–8",
      title: "Change management plans",
      description:
        "Design of stakeholder management plans (roles and coaching), communication plans, and education and training programs by competencies.",
      color: "bg-green-500",
    },
    {
      phase: "Phase 4",
      duration: "Weeks 9–12",
      title: "Active implementation and sustainability",
      description:
        "Execution, on-site coaching and structured follow-up; transformation of communication into a systematic process to sustain change.",
      color: "bg-yellow-500",
    },
  ],
  pt: [
    {
      phase: "Fase 1",
      duration: "Semanas 1–2",
      title: "Visão da mudança e avaliação inicial",
      description:
        "Definição escrita do projeto, objetivos e oportunidades; diagnóstico do estado atual vs futuro; formação da equipe e KPIs de sucesso.",
      color: "bg-gray-500",
    },
    {
      phase: "Fase 2",
      duration: "Semanas 3–4",
      title: "Análise estrutural da mudança",
      description:
        "Mapeamento de impactos por setor, matriz de impacto-risco e contingências, e identificação de atores-chave e dependências.",
      color: "bg-blue-500",
    },
    {
      phase: "Fase 3",
      duration: "Semanas 5–8",
      title: "Planos de gestão da mudança",
      description:
        "Desenho de planos de gestão de atores (papéis e coaching), planos de comunicação e programas de educação e treinamento por competências.",
      color: "bg-green-500",
    },
    {
      phase: "Fase 4",
      duration: "Semanas 9–12",
      title: "Implementação ativa e sustentabilidade",
      description:
        "Execução, coaching in loco e acompanhamento estruturado; transformação da comunicação em processo sistemático para sustentar a mudança.",
      color: "bg-yellow-500",
    },
  ],
};

const titleTranslations: Record<Language, string> = {
  es: "Modalidad de implementación (8 a 12 semanas)",
  en: "Implementation modality (8 to 12 weeks)",
  pt: "Modalidade de implementação (8 a 12 semanas)",
};

const MethodologyGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const phases =
    phasesTranslations[currentLanguage as Language] || phasesTranslations["es"];
  const title =
    titleTranslations[currentLanguage as Language] || titleTranslations["es"];

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
