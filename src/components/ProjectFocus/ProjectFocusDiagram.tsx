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

  return (
    <div className="relative w-96 h-96 flex items-center justify-center max-w-md mx-auto">
      {/* Central Hub */}
      <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-center shadow-2xl z-10 border-4 border-white/30">
        <div>
          <Target className="w-8 h-8 mx-auto mb-1" />
          <div className="text-xs leading-tight">
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
        const radius = 140; // Radio fijo para simetría perfecta
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={phase.id}
            className={`absolute w-20 h-20 ${
              phase.color
            } rounded-xl flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all duration-300 cursor-pointer group ${
              isHovered ? "scale-110 z-20" : "hover:scale-105"
            }`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            onMouseEnter={() => setHoveredPhase(phase.id)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <Icon className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-[8px] text-center leading-tight">
              <div>{phase.title}</div>
              <div className="opacity-90">{phase.subtitle}</div>
            </div>

            {/* Tooltip */}
            {/* {isHovered && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-30">
                Fase {phase.id}: {phase.title}
              </div>
            )} */}
          </div>
        );
      })}

      {/* Connection Lines */}
      {/* {phases.map((phase, index) => {
        const currentAngle = (index * (360 / phases.length)) - 90
        const nextAngle = ((index + 1) * (360 / phases.length)) - 90
        const radius = 140
        
        const startX = Math.cos((currentAngle * Math.PI) / 180) * radius
        const startY = Math.sin((currentAngle * Math.PI) / 180) * radius
        const endX = Math.cos((nextAngle * Math.PI) / 180) * radius
        const endY = Math.sin((nextAngle * Math.PI) / 180) * radius

        return (
          <svg key={`line-${phase.id}`} className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1={`calc(50% + ${startX}px)`}
              y1={`calc(50% + ${startY}px)`}
              x2={`calc(50% + ${endX}px)`}
              y2={`calc(50% + ${endY}px)`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
          </svg>
        )
      })} */}

      {/* Outer Ring */}
      {/* <div className="absolute inset-0 border-2 border-white/20 border-dashed rounded-full animate-pulse"></div> */}
    </div>
  );
};

export default ProjectFocusDiagram;
