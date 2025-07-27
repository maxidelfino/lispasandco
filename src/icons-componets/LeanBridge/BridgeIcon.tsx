import React from "react";
import { Link, Users, Target, Repeat, BarChart3 } from "lucide-react";

const Central5SCircle = () => {
  const fiveSSteps = [
    {
      icon: Link,
      label: "Conexión",
      color: "bg-blue-500",
      angle: -90,
      top: 25,
      left: 0,
    },
    {
      icon: Users,
      label: "Empoderamiento",
      color: "bg-green-500",
      angle: -30,
      top: 120,
      left: 130,
    },
    {
      icon: Target,
      label: "Cultura",
      color: "bg-purple-500",
      angle: 30,
      top: 255,
      left: 90,
    },
    {
      icon: BarChart3,
      label: "Resultados",
      color: "bg-yellow-500",
      angle: 90,
      top: 255,
      left: -90,
    },
    {
      icon: Repeat,
      label: "Sostenibilidad",
      color: "bg-red-500",
      angle: 150,
      top: 120,
      left: -130,
    },
  ];
  return (
    <div className="relative flex items-center justify-center h-80">
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-xl">
        LeanBridge™
      </div>

      {/* Surrounding Steps */}
      {fiveSSteps.map((step, index) => {
        const angle = index * 72 - 90; // 360/5 = 72 degrees between each step, start from top
        const radius = 130;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const Icon = step.icon;
        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <div
              className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg mb-2`}
            >
              {Icon ? <Icon className="w-8 h-8 text-white" /> : null}
            </div>
            <div className="text-xs font-semibold text-[var(--color-primary)] align-middle">
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Central5SCircle;
