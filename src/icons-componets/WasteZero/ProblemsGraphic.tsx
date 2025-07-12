import React from "react";

import { XCircle, Eye, DollarSign, Activity, Users } from "lucide-react";

const NODE_SIZE = 6;
const RADIUS = 130;

const issues = [
  {
    icon: Eye,
    title: "Falta de visibilidad",
    color: "bg-red-500",
  },
  {
    icon: Activity,
    title: "Tiempos muertos",
    color: "bg-yellow-500",
  },
  {
    icon: Users,
    title: "Falta de enfoque",
    color: "bg-blue-500",
  },
  {
    icon: DollarSign,
    title: "Pérdida de recursos",
    color: "bg-green-500",
  },
  {
    icon: XCircle,
    title: "Cultura sin mejora",
    color: "bg-purple-500",
  },
];

const ProblemsGraphic: React.FC = () => (
  <div className="flex items-center justify-center">
    <div className="relative w-80 h-80">
      {/* Centro - Problem Statement */}
      <div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center text-white font-semibold text-xs text-center shadow-xl p-2">
        <div>¿Qué problema resuelve WasteZero™?</div>
      </div>

      {/* Nodos de problemáticas */}
      {issues.map((issue, idx) => {
        const angle = idx * (360 / issues.length) - 90;
        const x = Math.cos((angle * Math.PI) / 180) * RADIUS;
        const y = Math.sin((angle * Math.PI) / 180) * RADIUS;
        const Icon = issue.icon;
        console.log("angle", angle);
        return (
          <div
            key={idx}
            className={`${issue.color} absolute rounded-full flex flex-col items-center justify-center text-white shadow-md transition-transform duration-300 hover:scale-110`}
            style={{
              width: `${NODE_SIZE}rem`,
              height: `${NODE_SIZE}rem`,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon className="w-6 h-6 mb-1" />
            <div className="text-xs text-center px-1">{issue.title}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ProblemsGraphic;
