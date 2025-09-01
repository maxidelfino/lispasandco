import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const levelTranslations = [
  {
    // Top level
    title: {
      [Language.SPANISH]: "Excelencia\nOperacional",
      [Language.ENGLISH]: "Operational\nExcellence",
      [Language.PORTUGUESE]: "Excelência\nOperacional",
    },
    color: "#0f766e",
  },
  {
    title: {
      [Language.SPANISH]: "Ingeniería de\nconfiabilidad",
      [Language.ENGLISH]: "Reliability\nEngineering",
      [Language.PORTUGUESE]: "Engenharia de\nConfiabilidade",
    },
    color: "#0891b2",
  },
  {
    title: {
      [Language.SPANISH]: "Compromiso\nOrganizacional",
      [Language.ENGLISH]: "Organizational\nCommitment",
      [Language.PORTUGUESE]: "Comprometimento\nOrganizacional",
    },
    color: "#0284c7",
  },
  {
    title: {
      [Language.SPANISH]: "Impulsores\nproactivos",
      [Language.ENGLISH]: "Proactive\nDrivers",
      [Language.PORTUGUESE]: "Impulsores\nProativos",
    },
    color: "#3b82f6",
  },
  {
    title: {
      [Language.SPANISH]: "Gestión Táctica",
      [Language.ENGLISH]: "Tactical Management",
      [Language.PORTUGUESE]: "Gestão Tática",
    },
    color: "#94a3b8",
  },
];

const AssetBridgeIcon: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const levels = levelTranslations.map((level) => ({
    title: level.title[currentLanguage],
    color: level.color,
  }));

  const pyramidHeight = 200;
  const pyramidWidth = 300;
  const sectionHeight = pyramidHeight / levels.length;

  const firstLevelTextYOffset = 7;

  return (
    <div className="w-full flex flex-col items-center justify-center p-2 md:p-8">
      <div className="relative w-full max-w-xl mx-auto">
        <svg
          viewBox={`0 0 ${pyramidWidth} ${pyramidHeight + 20}`}
          width="100%"
          height="auto"
          className="drop-shadow-lg w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {levels.map((level, index) => {
            const y = index * sectionHeight;
            const nextY = (index + 1) * sectionHeight;
            const topWidth =
              index === 0 ? 0 : (pyramidWidth * index) / levels.length;
            const bottomWidth = (pyramidWidth * (index + 1)) / levels.length;

            const leftX = (pyramidWidth - bottomWidth) / 2;
            const rightX = leftX + bottomWidth;
            const topLeftX = (pyramidWidth - topWidth) / 2;
            const topRightX = topLeftX + topWidth;

            // Calcular la posición Y del texto, bajando el del primer nivel
            const textY =
              index === 0
                ? y + sectionHeight / 2 + firstLevelTextYOffset
                : y + sectionHeight / 2;

            return (
              <g key={index}>
                {/* Sección de la pirámide */}
                <path
                  d={`M ${topLeftX} ${y} L ${topRightX} ${y} L ${rightX} ${nextY} L ${leftX} ${nextY} Z`}
                  fill={level.color}
                  stroke="#ffffff"
                  strokeWidth="1"
                />

                {/* Texto */}
                <text
                  x={pyramidWidth / 2}
                  y={textY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white font-semibold"
                  style={{
                    fontSize: "6px",
                  }}
                >
                  {level.title.split("\n").map((line, lineIndex) => (
                    <tspan
                      key={lineIndex}
                      x={pyramidWidth / 2}
                      dy={lineIndex === 0 ? 0 : "1.2em"}
                      className="fill-white"
                      style={{
                        fontSize: "6px",
                      }}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default AssetBridgeIcon;
