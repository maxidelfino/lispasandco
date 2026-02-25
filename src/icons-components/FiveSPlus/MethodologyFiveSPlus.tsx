import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const phasesByLanguage = {
  es: [
    {
      phase: "Fase Inicial",
      duration: "Semana 1 - Día 1",
      title: "Reconocimiento del lugar",
      // description: "Quick Scan presencial - 1 semana de trabajo en el lugar",
      color: "bg-gray-500",
    },
    {
      phase: "Fase 1",
      duration: "Semana 1 - Día 1",
      title: "Capacitación del personal Conceptos 5S",
      description: "Incorporar conceptos de la metodología",
      color: "bg-blue-500",
    },
    {
      phase: "Fase 2",
      duration: "Semana 1 - Día 2",
      title: "Gestión del cambio",
      description:
        "No olvidar que el programa 5S se basa en el convencimiento de las personas; para ello es necesario prepararlas con las herramientas adecuadas.",
      color: "bg-green-500",
    },
    {
      phase: "Fase 3",
      duration: "Semana 2",
      title: "Evento de Cleaning Day",
      description:
        "Objetivo: Identificar y eliminar todos los elementos innecesarios del puesto de trabajo.",
      color: "bg-yellow-500",
    },
    {
      phase: "Fase 4",
      duration: "Semana 6",
      title: "Ordenar el sector",
      description:
        "Organizar los elementos necesarios en un lugar designado para que sean fáciles de localizar y usar.",
      color: "bg-orange-500",
    },
    {
      phase: "Fase 5",
      duration: "Semana 8",
      title: "Rutinas de limpieza y mantenimiento",
      description:
        "Objetivo: Mantener la limpieza del área de trabajo y establecer una rutina de limpieza regular.",
      color: "bg-red-500",
    },
    {
      phase: "Fase 6",
      duration: "Semana 12",
      title: "Prácticas de estandarización de la metodología",
      description:
        "Objetivo: Crear normas y procedimientos estandarizados que mantengan el orden y la limpieza alcanzados en las etapas anteriores.",
      color: "bg-purple-500",
    },
    {
      phase: "Fase Final",
      duration: "Semana 20",
      title: "Sustentabilidad: Auditoría de seguimiento y próximos pasos",
      description:
        "Objetivo: Fomentar la autodisciplina para cumplir las normas y procedimientos de 5S.",
      color: "bg-indigo-500",
    },
  ],
  en: [
    {
      phase: "Initial Phase",
      duration: "Week 1 - Day 1",
      title: "Site Recognition",
      // description: "On-site Quick Scan - 1 week of work at the site",
      color: "bg-gray-500",
    },
    {
      phase: "Phase 1",
      duration: "Week 1 - Day 1",
      title: "Staff Training: 5S Concepts",
      description: "Introduce the methodology concepts",
      color: "bg-blue-500",
    },
    {
      phase: "Phase 2",
      duration: "Week 1 - Day 2",
      title: "Change Management",
      description:
        "Remember that the 5S program is based on people's commitment; it is necessary to prepare them with the right tools.",
      color: "bg-green-500",
    },
    {
      phase: "Phase 3",
      duration: "Week 2",
      title: "Cleaning Day Event",
      description:
        "Goal: Identify and remove all unnecessary items from the workplace.",
      color: "bg-yellow-500",
    },
    {
      phase: "Phase 4",
      duration: "Week 6",
      title: "Organize the Area",
      description:
        "Arrange necessary items in a designated place so they are easy to find and use.",
      color: "bg-orange-500",
    },
    {
      phase: "Phase 5",
      duration: "Week 8",
      title: "Cleaning and Maintenance Routines",
      description:
        "Goal: Maintain workplace cleanliness and establish a regular cleaning routine.",
      color: "bg-red-500",
    },
    {
      phase: "Phase 6",
      duration: "Week 12",
      title: "Standardization Practices",
      description:
        "Goal: Create standardized rules and procedures to maintain the order and cleanliness achieved in previous stages.",
      color: "bg-purple-500",
    },
    {
      phase: "Final Phase",
      duration: "Week 20",
      title: "Sustainability: Follow-up Audit and Next Steps",
      description:
        "Goal: Encourage self-discipline to comply with 5S rules and procedures.",
      color: "bg-indigo-500",
    },
  ],
  pt: [
    {
      phase: "Fase Inicial",
      duration: "Semana 1 - Dia 1",
      title: "Reconhecimento do local",
      // description: "Quick Scan presencial - 1 semana de trabalho no local",
      color: "bg-gray-500",
    },
    {
      phase: "Fase 1",
      duration: "Semana 1 - Dia 1",
      title: "Treinamento da equipe: Conceitos 5S",
      description: "Introduzir os conceitos da metodologia",
      color: "bg-blue-500",
    },
    {
      phase: "Fase 2",
      duration: "Semana 1 - Dia 2",
      title: "Gestão da mudança",
      description:
        "Lembre-se que o programa 5S baseia-se no convencimento das pessoas; é necessário prepará-las com as ferramentas adequadas.",
      color: "bg-green-500",
    },
    {
      phase: "Fase 3",
      duration: "Semana 2",
      title: "Evento Cleaning Day",
      description:
        "Objetivo: Identificar e eliminar todos os itens desnecessários do posto de trabalho.",
      color: "bg-yellow-500",
    },
    {
      phase: "Fase 4",
      duration: "Semana 6",
      title: "Organizar o setor",
      description:
        "Organizar os itens necessários em um local designado para que sejam fáceis de localizar e usar.",
      color: "bg-orange-500",
    },
    {
      phase: "Fase 5",
      duration: "Semana 8",
      title: "Rotinas de limpeza e manutenção",
      description:
        "Objetivo: Manter a limpeza da área de trabalho e estabelecer uma rotina regular de limpeza.",
      color: "bg-red-500",
    },
    {
      phase: "Fase 6",
      duration: "Semana 12",
      title: "Práticas de padronização da metodologia",
      description:
        "Objetivo: Criar normas e procedimentos padronizados que mantenham a ordem e a limpeza alcançadas nas etapas anteriores.",
      color: "bg-purple-500",
    },
    {
      phase: "Fase Final",
      duration: "Semana 20",
      title: "Sustentabilidade: Auditoria de acompanhamento e próximos passos",
      description:
        "Objetivo: Promover a autodisciplina para cumprir as normas e procedimentos do 5S.",
      color: "bg-indigo-500",
    },
  ],
};

const headerByLanguage = {
  es: "Modalidad de implementación (5 MESES)",
  en: "Implementation Mode (5 MONTHS)",
  pt: "Modalidade de implementação (5 MESES)",
};

const MethodologyFiveSPlus: React.FC = () => {
  const { currentLanguage } = useLanguage();

  // fallback to Spanish if language not found
  const lang =
    currentLanguage in phasesByLanguage ? currentLanguage : Language.SPANISH;
  const phases = phasesByLanguage[lang];
  const header = headerByLanguage[lang];

  return (
    <div className="pt-8 pb-4">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
        {header}
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

export default MethodologyFiveSPlus;
