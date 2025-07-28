import React from "react";
import { Link, Users, Target, Repeat, BarChart3 } from "lucide-react";

const BridgeDiagram: React.FC = () => {
  // Original angles + 75 degrees rotation
  const baseAngles = [-90, -20, 60, 120, -160];
  const nodes = baseAngles.map((angle, idx) => {
    const icons = [Link, Users, Target, BarChart3, Repeat];
    const labels = [
      "Conexión",
      "Empoderamiento",
      "Cultura",
      "Resultados",
      "Sostenibilidad",
    ];
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-yellow-500",
      "bg-red-500",
    ];
    return {
      icon: icons[idx],
      label: labels[idx],
      color: colors[idx],
      angle: angle + 0, // rotate each node by 75° clockwise
    };
  });

  const R = 110; // Radius
  const C = 150; // Center

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="relative w-full h-[300px] md:h-[400px]">
        {/* Central Node */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-xl z-10">
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
              style={{
                left: `${(x / 300) * 100}%`,
                top: `${(y / 300) * 100}%`,
              }}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${node.color} rounded-full flex items-center justify-center shadow-lg mb-2 transition-transform duration-300 hover:scale-110`}
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-xs md:text-sm font-semibold text-[var(--color-primary)]">
                {node.label}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-lg text-[var(--color-text)] leading-relaxed mb-1 italic">
        <strong>Propósito:</strong>
      </p>
      <p className="text-md text-[var(--color-text)] leading-relaxed mb-6 italic">
        <strong>
          Convertir la mejora continua en parte del ADN operativo de tu empresa
        </strong>
        , construyendo una base sólida para escalar eficiencia, calidad y
        productividad. La implementación de <strong>LeanBridge™</strong> será
        considerada como el nivel de madurez inicial de acuerdo al índice de
        mejora continua aplicado, <strong>LYSPAS HIERARCHY INDEX™</strong>
      </p>
    </div>
  );
};

export default BridgeDiagram;
