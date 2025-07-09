import React from "react";
import { Settings, BarChart3, Lightbulb, Network } from "lucide-react";

const programs = [
  { name: "5S Plus™", icon: Settings, color: "bg-blue-500" },
  { name: "FlowStable™", icon: BarChart3, color: "bg-green-500" },
  { name: "Kaizen Action™", icon: Lightbulb, color: "bg-yellow-500" },
  { name: "LeanBridge™", icon: Network, color: "bg-purple-500" },
];

const ConnectionsGraphic: React.FC = () => {
  const radius = 100;
  const center = 120;

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[240px] h-[240px]">
        {/* Center node */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xl z-20">
          WasteZero™
        </div>

        {programs.map((program, idx) => {
          const angle = (idx / programs.length) * 2 * Math.PI;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const Icon = program.icon;

          return (
            <React.Fragment key={program.name}>
              {/* {/* Connector line */}
              <div
                className="absolute w-[2px] bg-blue-200 z-10"
                style={{
                  height: `${radius}px`,
                  top: `${center}px`,
                  left: `${center}px`,
                  transform: `rotate(${(angle * 180) / Math.PI}deg)`,
                  transformOrigin: "top center",
                }}
              />

              {/* Program node */}
              <div
                className={`absolute w-16 h-16 ${program.color} rounded-full flex items-center justify-center text-white cursor-pointer transition-transform duration-300 hover:scale-110 shadow-lg z-20`}
                style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                title={program.name}
              >
                <Icon className="w-6 h-6" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectionsGraphic;
