"use client";

import type React from "react";
import { useState } from "react";
import {
  Target,
  Search,
  Users,
  Lightbulb,
  CheckSquare,
  TrendingUp,
  Award,
} from "lucide-react";

const ProjectFocusDiagram: React.FC = () => {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const phases = [
    {
      id: 1,
      icon: Search,
      title: "EXPLORACIÓN",
      subtitle: "Oportunidades",
      color: "bg-blue-500",
    },
    {
      id: 2,
      icon: Target,
      title: "MAPEO",
      subtitle: "Sectorial",
      color: "bg-green-500",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "ALINEAMIENTO",
      subtitle: "Estratégico",
      color: "bg-purple-500",
    },
    {
      id: 4,
      icon: Lightbulb,
      title: "IDEACIÓN",
      subtitle: "Colaborativa",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      icon: Users,
      title: "PRESENTACIÓN",
      subtitle: "y Discusión",
      color: "bg-orange-500",
    },
    {
      id: 6,
      icon: CheckSquare,
      title: "SELECCIÓN",
      subtitle: "Impacto-Beneficio",
      color: "bg-red-500",
    },
    {
      id: 7,
      icon: Award,
      title: "EJECUCIÓN",
      subtitle: "Responsables",
      color: "bg-indigo-500",
    },
  ];

  // Aumentar el tamaño del diagrama y los nodos
  const diagramSize = 480; // px
  const nodeSize = 110; // px (antes w-20 h-20 = 80px)
  const centralSize = 152; // px (antes w-32 h-32 = 128px)
  const iconSize = 32; // px (antes w-5 h-5 = 20px)
  const textTitleSize = "text-[12px]"; // antes text-xs
  const textSubtitleSize = "text-[12px]"; // antes text-[8px]
  const radius = 180; // antes 140

  return (
    <div
      className="relative flex items-center justify-center max-w-xl mx-auto"
      style={{ width: diagramSize, height: diagramSize }}
    >
      {/* Central Hub */}
      <div
        className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-center shadow-2xl z-10 border-4 border-white/30"
        style={{ width: centralSize, height: centralSize }}
      >
        <div>
          <Target
            className="mx-auto mb-2"
            style={{ width: iconSize, height: iconSize }}
          />
          <div className="text-base leading-tight">
            PROJECT
            <br />
            FOCUS™
          </div>
        </div>
      </div>

      {/* Phase Nodes */}
      {phases.map((phase, index) => {
        const Icon = phase.icon;
        const isHovered = hoveredPhase === phase.id;

        // Distribución simétrica en círculo perfecto
        const angle = index * (360 / phases.length) - 90; // 360/7 ≈ 51.43 grados entre cada elemento
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={phase.id}
            className={`absolute ${
              phase.color
            } rounded-xl flex flex-col items-center justify-center text-white font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all duration-300 cursor-pointer group ${
              isHovered ? "scale-110 z-20" : "hover:scale-105"
            }`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: nodeSize,
              height: nodeSize,
            }}
            onMouseEnter={() => setHoveredPhase(phase.id)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <Icon
              className="mb-2 group-hover:scale-110 transition-transform"
              style={{ width: iconSize, height: iconSize }}
            />
            <div className={`text-center leading-tight ${textTitleSize}`}>
              <div className="font-bold">{phase.title}</div>
              <div className={`opacity-90 font-normal ${textSubtitleSize}`}>
                {phase.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectFocusDiagram;
