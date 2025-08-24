import type React from "react";
import {
  Target,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Settings,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Language } from "../../types";

const translations = {
  es: {
    header: "Cronograma típico de un evento KAIZEN ACTION™ basado en DMAIC",
    dmaic: ["Definir", "Medir", "Analizar", "Mejorar", "Controlar"],
    phases: [
      {
        phase: "Etapa 1",
        title: "Definir y Medir",
        duration: "2 semanas",
        icon: Target,
        color: "from-blue-500 to-blue-600",
        activities: [
          "El equipo KAIZEN, liderado por un facilitador experto, trabaja fuera del lugar de trabajo",
          "Se recolecta y valida información del problema.",
          "Se define con precisión el caso a abordar (límites, datos, responsables, impacto esperado).",
          "Esta etapa es crítica y requiere alta participación del líder KAIZEN.",
          "Herramientas utilizadas: SIPOC, análisis de causa preliminar, checklist de validación, recolección de datos",
        ],
      },
      {
        phase: "Etapa 2",
        title: "Evento KAIZEN",
        duration: "3 días consecutivos",
        icon: Users,
        color: "from-green-500 to-green-600",
        activities: [
          "Evento presencial obligatorio, con participación de todas las áreas involucradas.",
          "Presentacion de conclusiones de la etapa de Medición.",
          "Se realiza el Análisis profundo del problema, con enfoque colaborativo y técnico.",
        ],
      },
      {
        phase: "Etapa 3",
        title: "Control y Sostenibilidad",
        duration: "3+ meses",
        icon: Shield,
        color: "from-purple-500 to-purple-600",
        activities: [
          "El evento KAIZEN se cierra parcialmente, ya que inicia la fase de seguimiento.",
          "El líder KAIZEN reduce gradualmente su intervención y transfiere la ejecución a los responsables definidos.",
          "Se aplican controles visuales, auditorías internas y revisiones semanales o quincenales.",
          "Herramientas utilizadas: tablero de indicadores, planes de control, checklist de implementación, reportes de avance.",
        ],
      },
    ],
  },
  en: {
    header: "Typical schedule of a KAIZEN ACTION™ event based on DMAIC",
    dmaic: ["Define", "Measure", "Analyze", "Improve", "Control"],
    phases: [
      {
        phase: "Stage 1",
        title: "Define and Measure",
        duration: "2 weeks",
        icon: Target,
        color: "from-blue-500 to-blue-600",
        activities: [
          "The KAIZEN team, led by an expert facilitator, works outside the workplace.",
          "Problem information is collected and validated.",
          "The case to be addressed is precisely defined (boundaries, data, responsible parties, expected impact).",
          "This stage is critical and requires high participation from the KAIZEN leader.",
          "Tools used: SIPOC, preliminary cause analysis, validation checklist, data collection.",
        ],
      },
      {
        phase: "Stage 2",
        title: "KAIZEN Event",
        duration: "3 consecutive days",
        icon: Users,
        color: "from-green-500 to-green-600",
        activities: [
          "Mandatory in-person event, with participation from all involved areas.",
          "Presentation of conclusions from the Measurement stage.",
          "In-depth analysis of the problem, with a collaborative and technical approach.",
        ],
      },
      {
        phase: "Stage 3",
        title: "Control and Sustainability",
        duration: "3+ months",
        icon: Shield,
        color: "from-purple-500 to-purple-600",
        activities: [
          "The KAIZEN event is partially closed, as the follow-up phase begins.",
          "The KAIZEN leader gradually reduces their involvement and transfers execution to the defined responsible parties.",
          "Visual controls, internal audits, and weekly or biweekly reviews are applied.",
          "Tools used: indicator boards, control plans, implementation checklists, progress reports.",
        ],
      },
    ],
  },
  pt: {
    header: "Cronograma típico de um evento KAIZEN ACTION™ baseado em DMAIC",
    dmaic: ["Definir", "Medir", "Analisar", "Melhorar", "Controlar"],
    phases: [
      {
        phase: "Etapa 1",
        title: "Definir e Medir",
        duration: "2 semanas",
        icon: Target,
        color: "from-blue-500 to-blue-600",
        activities: [
          "A equipe KAIZEN, liderada por um facilitador especialista, trabalha fora do local de trabalho.",
          "As informações do problema são coletadas e validadas.",
          "O caso a ser abordado é definido com precisão (limites, dados, responsáveis, impacto esperado).",
          "Esta etapa é crítica e requer alta participação do líder KAIZEN.",
          "Ferramentas utilizadas: SIPOC, análise preliminar de causa, checklist de validação, coleta de dados.",
        ],
      },
      {
        phase: "Etapa 2",
        title: "Evento KAIZEN",
        duration: "3 dias consecutivos",
        icon: Users,
        color: "from-green-500 to-green-600",
        activities: [
          "Evento presencial obrigatório, com participação de todas as áreas envolvidas.",
          "Apresentação das conclusões da etapa de Medição.",
          "Análise aprofundada do problema, com abordagem colaborativa e técnica.",
        ],
      },
      {
        phase: "Etapa 3",
        title: "Controle e Sustentabilidade",
        duration: "3+ meses",
        icon: Shield,
        color: "from-purple-500 to-purple-600",
        activities: [
          "O evento KAIZEN é parcialmente encerrado, pois inicia-se a fase de acompanhamento.",
          "O líder KAIZEN reduz gradualmente sua intervenção e transfere a execução para os responsáveis definidos.",
          "São aplicados controles visuais, auditorias internas e revisões semanais ou quinzenais.",
          "Ferramentas utilizadas: painel de indicadores, planos de controle, checklist de implementação, relatórios de progresso.",
        ],
      },
    ],
  },
} as const;

const MethodologyKaizenGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage() as { currentLanguage: Language };
  const lang: Language = currentLanguage || "es";
  const t = translations[lang];

  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
          <Settings className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
          {t.header}
        </h3>
        {/* <p className="text-[var(--color-text)] text-sm">Ciclo estructurado en 3 etapas principales</p> */}
      </div>

      {/* DMAIC Phases */}
      <div className="flex justify-center items-center space-x-2 mb-8">
        {t.dmaic.map((phase, index) => {
          const colors = [
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-orange-500",
            "bg-purple-500",
          ];
          return (
            <div key={index} className="text-center">
              <div
                className={`w-12 h-12 ${colors[index]} rounded-full flex items-center justify-center text-white text-xs font-bold mb-1`}
              >
                {phase[0]}
              </div>
              <span className="text-xs text-[var(--color-text)]">{phase}</span>
            </div>
          );
        })}
      </div>

      {/* Implementation Stages */}
      <div className="w-full max-w-4xl space-y-6">
        {t.phases.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div key={index} className="relative">
              {/* Stage Card */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-[var(--color-border)] hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-start space-y-2 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stage.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col items-start gap-2 mb-3 md:flex-row md:items-center md:justify-between md:gap-0">
                      <h4 className="font-bold text-[var(--color-primary)]">
                        {stage.phase}: {stage.title}
                      </h4>
                      <div className="flex items-center text-[var(--color-secondary)] text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {stage.duration}
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="grid grid-cols-1 gap-2">
                      {stage.activities.map((activity, actIndex) => (
                        <div
                          key={actIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                          <span className="text-xs text-[var(--color-text)]">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Arrow */}
              {index < t.phases.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-accent)]"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MethodologyKaizenGraphic;
