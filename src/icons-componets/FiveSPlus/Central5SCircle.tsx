import React from "react";

const Central5SCircle = () => {
  const fiveSSteps = [
    { step: "1- SEIRI", title: "ORGANIZAR", color: "bg-red-500" },
    {
      step: "2- SEITON",
      title: "ORDENAR",
      color: "bg-[var(--color-secondary)]",
    },
    { step: "3- SEISO", title: "LIMPIAR", color: "bg-purple-600" },
    { step: "4- SEIKETSU", title: "ESTANDARIZAR", color: "bg-blue-500" },
    { step: "5- SHITSUKE", title: "MANTENER", color: "bg-orange-500" },
  ];
  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Central 5S Circle */}
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-3xl z-10 shadow-xl">
        5S
      </div>

      {/* Surrounding Steps */}
      {fiveSSteps.map((step, index) => {
        const angle = index * 72 - 90; // 360/5 = 72 degrees between each step, start from top
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className={`absolute w-20 h-20 ${step.color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform duration-300`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <div className="text-[10px] leading-tight text-center">
              <div className="font-bold">{step.step}</div>
              <div className="mt-1">{step.title}</div>
            </div>
          </div>
        );
      })}

      {/* Connecting Lines */}
      {fiveSSteps.map((_, index) => {
        const angle = index * 72 - 90;
        const startRadius = 66;
        const endRadius = 80;
        const x1 = Math.cos((angle * Math.PI) / 180) * startRadius;
        const y1 = Math.sin((angle * Math.PI) / 180) * startRadius;
        const x2 = Math.cos((angle * Math.PI) / 180) * endRadius;
        const y2 = Math.sin((angle * Math.PI) / 180) * endRadius;

        return (
          <svg
            key={index}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transform: "translate(0, 0)" }}
          >
            <line
              x1={`calc(50% + ${x1}px)`}
              y1={`calc(50% + ${y1}px)`}
              x2={`calc(50% + ${x2}px)`}
              y2={`calc(50% + ${y2}px)`}
              stroke="var(--color-secondary)"
              strokeWidth="3"
              strokeDasharray="6,6"
              opacity="0.6"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Central5SCircle;
