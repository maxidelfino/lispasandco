import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  Award,
  Heart,
  Lightbulb,
  Handshake,
  Star,
  Globe,
  ThumbsUp,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const principlesByLanguage: Record<
  Language,
  Array<{
    id: string;
    title: string;
    description: string;
    icon: keyof typeof iconMap;
    angle: number;
  }>
> = {
  es: [
    {
      id: "respect",
      title: "Respeto",
      description:
        "Tratar a todas las personas con dignidad, valorando sus ideas y opiniones.",
      icon: "Users",
      angle: 0,
    },
    {
      id: "recognition",
      title: "Reconocimiento",
      description:
        "Reconocer y celebrar los logros y contribuciones de cada persona.",
      icon: "Award",
      angle: 45,
    },
    {
      id: "wellbeing",
      title: "Bienestar",
      description:
        "Promover la salud física, mental y emocional de todos los colaboradores.",
      icon: "Heart",
      angle: 90,
    },
    {
      id: "development",
      title: "Desarrollo",
      description:
        "Fomentar el crecimiento profesional y personal a través de la capacitación y el aprendizaje continuo.",
      icon: "Lightbulb",
      angle: 135,
    },
    {
      id: "collaboration",
      title: "Colaboración",
      description:
        "Impulsar el trabajo en equipo y la cooperación para alcanzar objetivos comunes.",
      icon: "Handshake",
      angle: 180,
    },
    {
      id: "empowerment",
      title: "Empoderamiento",
      description:
        "Dar autonomía y confianza para tomar decisiones y asumir responsabilidades.",
      icon: "Star",
      angle: 225,
    },
    {
      id: "inclusion",
      title: "Inclusión",
      description:
        "Fomentar un ambiente diverso e inclusivo donde todos se sientan valorados.",
      icon: "Globe",
      angle: 270,
    },
    {
      id: "recognition2",
      title: "Reconocimiento Cotidiano",
      description:
        "Agradecer y dar retroalimentación positiva de manera frecuente.",
      icon: "ThumbsUp",
      angle: 315,
    },
  ],
  en: [
    {
      id: "respect",
      title: "Respect",
      description:
        "Treat everyone with dignity, valuing their ideas and opinions.",
      icon: "Users",
      angle: 0,
    },
    {
      id: "recognition",
      title: "Recognition",
      description:
        "Recognize and celebrate each person's achievements and contributions.",
      icon: "Award",
      angle: 45,
    },
    {
      id: "wellbeing",
      title: "Well-being",
      description:
        "Promote the physical, mental, and emotional health of all team members.",
      icon: "Heart",
      angle: 90,
    },
    {
      id: "development",
      title: "Development",
      description:
        "Encourage professional and personal growth through training and continuous learning.",
      icon: "Lightbulb",
      angle: 135,
    },
    {
      id: "collaboration",
      title: "Collaboration",
      description: "Foster teamwork and cooperation to achieve common goals.",
      icon: "Handshake",
      angle: 180,
    },
    {
      id: "empowerment",
      title: "Empowerment",
      description:
        "Give autonomy and trust to make decisions and take responsibility.",
      icon: "Star",
      angle: 225,
    },
    {
      id: "inclusion",
      title: "Inclusion",
      description:
        "Promote a diverse and inclusive environment where everyone feels valued.",
      icon: "Globe",
      angle: 270,
    },
    {
      id: "recognition2",
      title: "Everyday Recognition",
      description: "Give thanks and positive feedback frequently.",
      icon: "ThumbsUp",
      angle: 315,
    },
  ],
  pt: [
    {
      id: "respect",
      title: "Respeito",
      description:
        "Tratar todas as pessoas com dignidade, valorizando suas ideias e opiniões.",
      icon: "Users",
      angle: 0,
    },
    {
      id: "recognition",
      title: "Reconhecimento",
      description:
        "Reconhecer e celebrar as conquistas e contribuições de cada pessoa.",
      icon: "Award",
      angle: 45,
    },
    {
      id: "wellbeing",
      title: "Bem-estar",
      description:
        "Promover a saúde física, mental e emocional de todos os colaboradores.",
      icon: "Heart",
      angle: 90,
    },
    {
      id: "development",
      title: "Desenvolvimento",
      description:
        "Incentivar o crescimento profissional e pessoal por meio de capacitação e aprendizado contínuo.",
      icon: "Lightbulb",
      angle: 135,
    },
    {
      id: "collaboration",
      title: "Colaboração",
      description:
        "Impulsionar o trabalho em equipe e a cooperação para alcançar objetivos comuns.",
      icon: "Handshake",
      angle: 180,
    },
    {
      id: "empowerment",
      title: "Empoderamento",
      description:
        "Dar autonomia e confiança para tomar decisões e assumir responsabilidades.",
      icon: "Star",
      angle: 225,
    },
    {
      id: "inclusion",
      title: "Inclusão",
      description:
        "Promover um ambiente diverso e inclusivo onde todos se sintam valorizados.",
      icon: "Globe",
      angle: 270,
    },
    {
      id: "recognition2",
      title: "Reconhecimento Diário",
      description: "Agradecer e dar feedback positivo com frequência.",
      icon: "ThumbsUp",
      angle: 315,
    },
  ],
};

const iconMap = {
  Users,
  Award,
  Heart,
  Lightbulb,
  Handshake,
  Star,
  Globe,
  ThumbsUp,
};

const diagramTitles: Record<Language, string> = {
  es: "People First: Principios Fundamentales",
  en: "People First: Core Principles",
  pt: "People First: Princípios Fundamentais",
};

const diagramSubtitles: Record<Language, string> = {
  es: "Un modelo centrado en las personas para construir equipos de alto desempeño, bienestar y compromiso.",
  en: "A people-centered model to build high-performance, well-being, and engagement teams.",
  pt: "Um modelo centrado nas pessoas para construir equipes de alto desempenho, bem-estar e engajamento.",
};

const centerTextTop: Record<Language, string> = {
  es: "People First",
  en: "People First",
  pt: "People First",
};

const centerTextBottom: Record<Language, string> = {
  es: "Cultura de Personas",
  en: "People Culture",
  pt: "Cultura de Pessoas",
};

const instructionText: Record<Language, { mobile: string; desktop: string }> = {
  es: {
    mobile: "Toca cada principio para ver detalles",
    desktop: "Pasa el mouse sobre cada principio para ver detalles",
  },
  en: {
    mobile: "Tap each principle to see details",
    desktop: "Hover over each principle to see details",
  },
  pt: {
    mobile: "Toque em cada princípio para ver detalhes",
    desktop: "Passe o mouse sobre cada princípio para ver detalhes",
  },
};

const PeopleFirstDiagram: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [activePrinciple, setActivePrinciple] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  // Memoize principles for current language
  const peoplePrinciples = useMemo(
    () => principlesByLanguage[currentLanguage],
    [currentLanguage]
  );

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("mobile");
      else if (width < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    const element = document.getElementById("peoplefirst-diagram");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getConfig = () => {
    switch (screenSize) {
      case "mobile":
        return { size: 300, radius: 100, iconSize: 20, centerRadius: 50 };
      case "tablet":
        return { size: 400, radius: 140, iconSize: 24, centerRadius: 70 };
      default:
        return { size: 500, radius: 180, iconSize: 28, centerRadius: 90 };
    }
  };

  const { size, radius, iconSize, centerRadius } = getConfig();
  const centerX = size / 2;
  const centerY = size / 2;

  const getTooltipPosition = (principle: (typeof peoplePrinciples)[0]) => {
    const angle = (principle.angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    let tooltipX = x;
    let tooltipY = y;

    if (x > centerX) {
      tooltipX = x - 280;
    } else {
      tooltipX = x + 20;
    }

    if (y > centerY) {
      tooltipY = y - 120;
    } else {
      tooltipY = y + 20;
    }

    return { x: tooltipX, y: tooltipY };
  };

  return (
    <div
      id="peoplefirst-diagram"
      className="relative w-full max-w-6xl mx-auto px-4 pt-16"
    >
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
          {diagramTitles[currentLanguage]}
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-[var(--color-text)] max-w-2xl mx-auto px-4">
          {diagramSubtitles[currentLanguage]}
        </p>
      </div>

      <div className="relative flex justify-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0"
          >
            <circle
              cx={centerX}
              cy={centerY}
              r={centerRadius}
              fill="var(--color-secondary)"
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            />
            <text
              x={centerX}
              y={centerY - 10}
              textAnchor="middle"
              className="fill-white font-bold"
              fontSize={
                screenSize === "mobile" ? 12 : screenSize === "tablet" ? 14 : 16
              }
            >
              {centerTextTop[currentLanguage]}
            </text>
            <text
              x={centerX}
              y={centerY + 15}
              textAnchor="middle"
              className="fill-white"
              fontSize={
                screenSize === "mobile" ? 8 : screenSize === "tablet" ? 10 : 12
              }
            >
              {centerTextBottom[currentLanguage]}
            </text>

            {peoplePrinciples.map((principle, index) => {
              const angle = (principle.angle * Math.PI) / 180;
              const x1 = centerX + centerRadius * Math.cos(angle);
              const y1 = centerY + centerRadius * Math.sin(angle);
              const x2 = centerX + (radius - 30) * Math.cos(angle);
              const y2 = centerY + (radius - 30) * Math.sin(angle);

              return (
                <line
                  key={`line-${principle.id}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--color-border)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              );
            })}
          </svg>

          {peoplePrinciples.map((principle, index) => {
            const angle = (principle.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const Icon = iconMap[principle.icon as keyof typeof iconMap];

            return (
              <div
                key={principle.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{
                  left: x,
                  top: y,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    activePrinciple === principle.id
                      ? "scale-110"
                      : "hover:scale-105"
                  }`}
                  onMouseEnter={() => setActivePrinciple(principle.id)}
                  onMouseLeave={() => setActivePrinciple(null)}
                  onClick={() =>
                    setActivePrinciple(
                      activePrinciple === principle.id ? null : principle.id
                    )
                  }
                >
                  <div
                    className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                      activePrinciple === principle.id
                        ? "bg-[var(--color-accent)] shadow-lg"
                        : "bg-[var(--color-surface)] border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                    }`}
                    style={{
                      width:
                        screenSize === "mobile"
                          ? 40
                          : screenSize === "tablet"
                          ? 48
                          : 56,
                      height:
                        screenSize === "mobile"
                          ? 40
                          : screenSize === "tablet"
                          ? 48
                          : 56,
                    }}
                  >
                    <Icon
                      className={`transition-colors duration-300 ${
                        activePrinciple === principle.id
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

          {screenSize !== "mobile" &&
            activePrinciple &&
            (() => {
              const principle = peoplePrinciples.find(
                (p) => p.id === activePrinciple
              );
              if (!principle) return null;
              const tooltipPos = getTooltipPosition(principle);
              const Icon = iconMap[principle.icon as keyof typeof iconMap];

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
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-[var(--color-text)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })()}
        </div>
      </div>

      {screenSize === "mobile" && (
        <div className="mt-8 space-y-3">
          {peoplePrinciples.map((principle) => {
            const Icon = iconMap[principle.icon as keyof typeof iconMap];
            const isActive = activePrinciple === principle.id;
            return (
              <div
                key={principle.id}
                className={`bg-white rounded-lg shadow-md border border-[var(--color-border)] transition-all duration-300`}
              >
                <div
                  className="p-4 cursor-pointer"
                  onClick={() =>
                    setActivePrinciple(isActive ? null : principle.id)
                  }
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-secondary)]`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800">
                        {principle.title}
                      </h3>
                      {isActive && (
                        <p className="text-sm text-slate-600 mt-2">
                          {principle.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-8 md:mt-12 text-center">
        <p className="text-[var(--color-text)] text-sm md:text-base">
          {screenSize === "mobile"
            ? instructionText[currentLanguage].mobile
            : instructionText[currentLanguage].desktop}
        </p>
      </div>
    </div>
  );
};

export default PeopleFirstDiagram;
