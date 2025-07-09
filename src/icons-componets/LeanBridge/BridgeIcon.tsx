import React from "react";
import { Link, Users, Target, Repeat, BarChart3 } from "lucide-react";

const BridgeIcon: React.FC = () => {
  const nodes = [
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
  const R = 120;
  const C = 150;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative w-full h-[300px]">
        {/* Central Node */}
        <div className="absolute inset-1/2 w-36 h-36 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl transform -translate-x-1/2 -translate-y-1/2">
          LeanBridge™
        </div>

        {/* Peripheral Nodes */}
        {nodes.map((node, idx) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = C + R * Math.cos(rad);
          const y = C + R * Math.sin(rad);
          const Icon = node.icon;
          return (
            <div
              key={idx}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center"
              style={{ left: node.left ?? x, top: node.top ?? y }}
            >
              <div
                className={`w-16 h-16 ${node.color} rounded-full flex items-center justify-center shadow-lg mb-2`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xs font-semibold text-[var(--color-primary)] align-middle">
                {node.label}
              </div>
            </div>
          );
        })}

        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.map((node, idx) => {
            const rad = (node.angle * Math.PI) / 180;
            const x1 = C + 28 * Math.cos(rad);
            const y1 = C + 28 * Math.sin(rad);
            const x2 = C + (R - 16) * Math.cos(rad);
            const y2 = C + (R - 16) * Math.sin(rad);
            return (
              <line
                key={idx}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--color-border)"
                strokeWidth={2}
                strokeDasharray="4 4"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BridgeIcon;
