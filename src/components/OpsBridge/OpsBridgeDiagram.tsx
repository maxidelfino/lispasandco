import React, { useState } from "react";
import {
  Users as LucideUsers,
  Settings as LucideSettings,
  Laptop as LucideLaptop,
  BarChart2 as LucideBarChart2,
  RefreshCw as LucideRefreshCw,
  FileText as LucideFileText,
  ShieldCheck as LucideShieldCheck,
  Trophy as LucideTrophy,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const iconMap = {
  personas: LucideUsers,
  procesos: LucideSettings,
  tecnologia: LucideLaptop,
  gestion: LucideBarChart2,
  mejora: LucideRefreshCw,
  estandarizacion: LucideFileText,
  seguridad: LucideShieldCheck,
  resultados: LucideTrophy,
};

const diagramTranslations: Record<
  Language,
  {
    diagramTitle: string;
    diagramSubtitle: string;
    elements: {
      id: string;
      title: string;
      description: string;
      angle: number;
      color: string;
    }[];
    centerTitle: string;
    centerSubtitle: string;
  }
> = {
  es: {
    diagramTitle: "OpsBridge™: Sistemas de Clase Mundial",
    diagramSubtitle:
      "Un modelo integral para la gestión de operaciones de clase mundial, integrando personas, procesos y tecnología para lograr resultados sostenibles y escalables.",
    centerTitle: "OpsBridge™",
    centerSubtitle: "Sistemas de Clase Mundial",
    elements: [
      {
        id: "personas",
        title: "Personas",
        description:
          "Desarrollo de talento, liderazgo, cultura de mejora continua y trabajo en equipo.",
        angle: 0,
        color: "bg-blue-500",
      },
      {
        id: "procesos",
        title: "Procesos",
        description:
          "Estandarización, optimización y control de procesos clave para la operación.",
        angle: 45,
        color: "bg-green-500",
      },
      {
        id: "tecnologia",
        title: "Tecnología",
        description:
          "Digitalización, automatización y sistemas de información integrados.",
        angle: 90,
        color: "bg-yellow-500",
      },
      {
        id: "gestion",
        title: "Gestión Visual",
        description:
          "Tableros, indicadores y rutinas de gestión para toma de decisiones ágil.",
        angle: 135,
        color: "bg-purple-500",
      },
      {
        id: "mejora",
        title: "Mejora Continua",
        description:
          "Círculos de mejora, resolución de problemas y cultura Kaizen.",
        angle: 180,
        color: "bg-pink-500",
      },
      {
        id: "estandarizacion",
        title: "Estandarización",
        description:
          "Documentación, procedimientos y mejores prácticas compartidas.",
        angle: 225,
        color: "bg-teal-500",
      },
      {
        id: "seguridad",
        title: "Seguridad & Calidad",
        description:
          "Sistemas robustos para garantizar seguridad, calidad y cumplimiento.",
        angle: 270,
        color: "bg-red-500",
      },
      {
        id: "resultados",
        title: "Resultados Sostenibles",
        description:
          "Enfoque en resultados de negocio, sostenibilidad y escalabilidad.",
        angle: 315,
        color: "bg-orange-500",
      },
    ],
  },
  en: {
    diagramTitle: "OpsBridge™: World-Class Systems",
    diagramSubtitle:
      "A comprehensive model for world-class operations management, integrating people, processes, and technology to achieve sustainable and scalable results.",
    centerTitle: "OpsBridge™",
    centerSubtitle: "World-Class Systems",
    elements: [
      {
        id: "personas",
        title: "People",
        description:
          "Talent development, leadership, continuous improvement culture, and teamwork.",
        angle: 0,
        color: "bg-blue-500",
      },
      {
        id: "procesos",
        title: "Processes",
        description:
          "Standardization, optimization, and control of key operational processes.",
        angle: 45,
        color: "bg-green-500",
      },
      {
        id: "tecnologia",
        title: "Technology",
        description:
          "Digitalization, automation, and integrated information systems.",
        angle: 90,
        color: "bg-yellow-500",
      },
      {
        id: "gestion",
        title: "Visual Management",
        description:
          "Dashboards, KPIs, and management routines for agile decision-making.",
        angle: 135,
        color: "bg-purple-500",
      },
      {
        id: "mejora",
        title: "Continuous Improvement",
        description:
          "Improvement circles, problem solving, and Kaizen culture.",
        angle: 180,
        color: "bg-pink-500",
      },
      {
        id: "estandarizacion",
        title: "Standardization",
        description: "Documentation, procedures, and shared best practices.",
        angle: 225,
        color: "bg-teal-500",
      },
      {
        id: "seguridad",
        title: "Safety & Quality",
        description:
          "Robust systems to ensure safety, quality, and compliance.",
        angle: 270,
        color: "bg-red-500",
      },
      {
        id: "resultados",
        title: "Sustainable Results",
        description:
          "Focus on business results, sustainability, and scalability.",
        angle: 315,
        color: "bg-orange-500",
      },
    ],
  },
  pt: {
    diagramTitle: "OpsBridge™: Sistemas de Classe Mundial",
    diagramSubtitle:
      "Um modelo abrangente para a gestão de operações de classe mundial, integrando pessoas, processos e tecnologia para alcançar resultados sustentáveis e escaláveis.",
    centerTitle: "OpsBridge™",
    centerSubtitle: "Sistemas de Classe Mundial",
    elements: [
      {
        id: "personas",
        title: "Pessoas",
        description:
          "Desenvolvimento de talentos, liderança, cultura de melhoria contínua e trabalho em equipe.",
        angle: 0,
        color: "bg-blue-500",
      },
      {
        id: "procesos",
        title: "Processos",
        description:
          "Padronização, otimização e controle de processos operacionais chave.",
        angle: 45,
        color: "bg-green-500",
      },
      {
        id: "tecnologia",
        title: "Tecnologia",
        description:
          "Digitalização, automação e sistemas de informação integrados.",
        angle: 90,
        color: "bg-yellow-500",
      },
      {
        id: "gestion",
        title: "Gestão Visual",
        description:
          "Painéis, indicadores e rotinas de gestão para tomada de decisão ágil.",
        angle: 135,
        color: "bg-purple-500",
      },
      {
        id: "mejora",
        title: "Melhoria Contínua",
        description:
          "Círculos de melhoria, resolução de problemas e cultura Kaizen.",
        angle: 180,
        color: "bg-pink-500",
      },
      {
        id: "estandarizacion",
        title: "Padronização",
        description:
          "Documentação, procedimentos e melhores práticas compartilhadas.",
        angle: 225,
        color: "bg-teal-500",
      },
      {
        id: "seguridad",
        title: "Segurança & Qualidade",
        description:
          "Sistemas robustos para garantir segurança, qualidade e conformidade.",
        angle: 270,
        color: "bg-red-500",
      },
      {
        id: "resultados",
        title: "Resultados Sustentáveis",
        description:
          "Foco em resultados de negócios, sustentabilidade e escalabilidade.",
        angle: 315,
        color: "bg-orange-500",
      },
    ],
  },
};

export const OpsBridgeDiagram: React.FC = () => {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const { currentLanguage } = useLanguage();

  // fallback to 'es' if currentLanguage is not set
  const lang: Language = (currentLanguage as Language) || "es";
  const t = diagramTranslations[lang];

  const size = 500;
  const center = size / 2;
  const centerRadius = 90;
  const iconRadius = 180;
  const iconSize = 28;
  const iconContainerSize = 64;

  const getTooltipPosition = (element: (typeof t.elements)[0]) => {
    const angle = (element.angle * Math.PI) / 180;
    const x = center + iconRadius * Math.cos(angle);
    const y = center + iconRadius * Math.sin(angle);

    let tooltipX = x;
    let tooltipY = y;

    if (x > center) {
      tooltipX = x - 280;
    } else {
      tooltipX = x + 20;
    }

    if (y > center) {
      tooltipY = y - 120;
    } else {
      tooltipY = y + 20;
    }

    return { x: tooltipX, y: tooltipY };
  };

  return (
    <div className="w-full flex flex-col items-center pt-16">
      <div className="mb-8 text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-2">
          {t.diagramTitle}
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text)]">
          {t.diagramSubtitle}
        </p>
      </div>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0"
        >
          <circle
            cx={center}
            cy={center}
            r={centerRadius}
            fill="var(--color-secondary)"
            className="transition-all duration-1000 opacity-100 scale-100"
          />
          <text
            x={center}
            y={center - 10}
            textAnchor="middle"
            className="fill-white font-bold"
            fontSize={18}
          >
            {t.centerTitle}
          </text>
          <text
            x={center}
            y={center + 15}
            textAnchor="middle"
            className="fill-white"
            fontSize={13}
          >
            {t.centerSubtitle}
          </text>
          {t.elements.map((element, idx) => {
            const rad = (element.angle * Math.PI) / 180;
            const x1 = center + centerRadius * Math.cos(rad);
            const y1 = center + centerRadius * Math.sin(rad);
            const x2 = center + (iconRadius - 30) * Math.cos(rad);
            const y2 = center + (iconRadius - 30) * Math.sin(rad);
            return (
              <line
                key={element.id}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--color-border)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="transition-all duration-1000 opacity-100"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              />
            );
          })}
        </svg>
        {t.elements.map((element, idx) => {
          const rad = (element.angle * Math.PI) / 180;
          const x = center + iconRadius * Math.cos(rad);
          const y = center + iconRadius * Math.sin(rad);
          const Icon = iconMap[element.id as keyof typeof iconMap];

          return (
            <div
              key={element.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 opacity-100 scale-100`}
              style={{
                left: x,
                top: y,
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div
                className={`relative group cursor-pointer transition-all duration-300 ${
                  activeElement === element.id ? "scale-110" : "hover:scale-105"
                }`}
                onMouseEnter={() => setActiveElement(element.id)}
                onMouseLeave={() => setActiveElement(null)}
              >
                <div
                  className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeElement === element.id
                      ? "bg-[var(--color-accent)] shadow-lg"
                      : "bg-[var(--color-surface)] border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                  }`}
                  style={{
                    width: iconContainerSize,
                    height: iconContainerSize,
                  }}
                >
                  <Icon
                    className={`transition-colors duration-300 ${
                      activeElement === element.id
                        ? "text-white"
                        : "text-[var(--color-secondary)]"
                    }`}
                    size={iconSize}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {activeElement &&
          (() => {
            const element = t.elements.find((e) => e.id === activeElement);
            if (!element) return null;
            const tooltipPos = getTooltipPosition(element);
            const Icon = iconMap[element.id as keyof typeof iconMap];
            return (
              <div
                className="absolute z-50 p-4 bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 opacity-100 visible pointer-events-none"
                style={{
                  left: tooltipPos.x,
                  top: tooltipPos.y,
                  width: 280,
                  maxWidth: "90vw",
                }}
              >
                <div className="flex items-center mb-2">
                  <Icon className="w-5 h-5 text-[var(--color-primary)] mr-2" />
                  <h3 className="font-bold text-[var(--color-primary)] text-sm md:text-base">
                    {element.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-[var(--color-text)] leading-relaxed">
                  {element.description}
                </p>
              </div>
            );
          })()}
      </div>
    </div>
  );
};
