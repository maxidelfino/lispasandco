import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const PHASES: Record<
  Language,
  {
    phase: string;
    duration: string;
    title: string;
    description: string;
    color: string;
  }[]
> = {
  es: [
    {
      phase: "Módulo 1",
      duration: "1 a 2 semanas",
      title: "Diagnóstico de habilidades y matriz de entrenamientos",
      description: "Mapear capacidades actuales y brechas a cubrir",
      color: "bg-gray-500",
    },
    {
      phase: "Módulo 2",
      duration: "1 jornada/2 sesiones",
      title: "Workshop de liderazgo y feedback",
      description:
        "Desarrollar habilidades de conducción, feedback efectivo y gestión de equipo",
      color: "bg-gray-500",
    },
    {
      phase: "Módulo 3",
      duration: "1 semana + follow up",
      title: "Planes de desarrollo individual (PDI)",
      description: "Diseñar caminos de evolución personal y profesional",
      color: "bg-blue-500",
    },
    {
      phase: "Módulo 4",
      duration: "2 a 6 sesiones",
      title: "Entrenamientos técnicos o de soft skills",
      description:
        "Capacitar según necesidades específicas (Excel, comunicación, análisis, etc.)",
      color: "bg-green-500",
    },
    {
      phase: "Módulo 5",
      duration: "4 a 8 semanas",
      title: "Implementación de rutinas de coaching",
      description:
        "Instalar sesiones regulares de revisión de objetivos y acompañamiento",
      color: "bg-yellow-500",
    },
    {
      phase: "Módulo 6",
      duration: "Mensual",
      title: "Ciclos de revisión y seguimiento de desempeño",
      description: "Medir avances, ajustar planes y mantener el foco",
      color: "bg-orange-500",
    },
  ],
  en: [
    {
      phase: "Module 1",
      duration: "1 to 2 weeks",
      title: "Skills diagnosis and training matrix",
      description: "Map current capabilities and gaps to address",
      color: "bg-gray-500",
    },
    {
      phase: "Module 2",
      duration: "1 day/2 sessions",
      title: "Leadership and feedback workshop",
      description:
        "Develop leadership, effective feedback, and team management skills",
      color: "bg-gray-500",
    },
    {
      phase: "Module 3",
      duration: "1 week + follow up",
      title: "Individual Development Plans (IDP)",
      description: "Design personal and professional growth paths",
      color: "bg-blue-500",
    },
    {
      phase: "Module 4",
      duration: "2 to 6 sessions",
      title: "Technical or soft skills training",
      description:
        "Train according to specific needs (Excel, communication, analysis, etc.)",
      color: "bg-green-500",
    },
    {
      phase: "Module 5",
      duration: "4 to 8 weeks",
      title: "Implementation of coaching routines",
      description: "Establish regular sessions for goal review and support",
      color: "bg-yellow-500",
    },
    {
      phase: "Module 6",
      duration: "Monthly",
      title: "Performance review and follow-up cycles",
      description: "Measure progress, adjust plans, and maintain focus",
      color: "bg-orange-500",
    },
  ],
  pt: [
    {
      phase: "Módulo 1",
      duration: "1 a 2 semanas",
      title: "Diagnóstico de habilidades e matriz de treinamentos",
      description: "Mapear capacidades atuais e lacunas a serem preenchidas",
      color: "bg-gray-500",
    },
    {
      phase: "Módulo 2",
      duration: "1 dia/2 sessões",
      title: "Workshop de liderança e feedback",
      description:
        "Desenvolver habilidades de liderança, feedback eficaz e gestão de equipe",
      color: "bg-gray-500",
    },
    {
      phase: "Módulo 3",
      duration: "1 semana + acompanhamento",
      title: "Planos de desenvolvimento individual (PDI)",
      description: "Desenhar caminhos de evolução pessoal e profissional",
      color: "bg-blue-500",
    },
    {
      phase: "Módulo 4",
      duration: "2 a 6 sessões",
      title: "Treinamentos técnicos ou de soft skills",
      description:
        "Capacitar conforme necessidades específicas (Excel, comunicação, análise, etc.)",
      color: "bg-green-500",
    },
    {
      phase: "Módulo 5",
      duration: "4 a 8 semanas",
      title: "Implementação de rotinas de coaching",
      description:
        "Instalar sessões regulares de revisão de objetivos e acompanhamento",
      color: "bg-yellow-500",
    },
    {
      phase: "Módulo 6",
      duration: "Mensal",
      title: "Ciclos de revisão e acompanhamento de desempenho",
      description: "Medir avanços, ajustar planos e manter o foco",
      color: "bg-orange-500",
    },
  ],
};

const TITLES: Record<Language, string> = {
  es: "Módulos sugeridos y duración estimada",
  en: "Suggested modules and estimated duration",
  pt: "Módulos sugeridos e duração estimada",
};

const MethodologyGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const phases = PHASES[lang];
  const title = TITLES[lang];

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
