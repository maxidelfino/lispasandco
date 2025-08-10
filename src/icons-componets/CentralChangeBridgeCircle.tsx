import React from "react";

const CentralChangeBridgeCircle = () => {
  const fiveSSteps = [
    { step: "Generar", title: "Vínculos", color: "bg-green-500" },
    {
      step: "Aumenta la",
      title: "comunicación",
      color: "bg-purple-500",
    },
    { step: "Fomenta la", title: "motivación", color: "bg-blue-600" },
    { step: "Desarrolla las", title: "capacidades", color: "bg-orange-500" },
    { step: "Comparte el", title: "conocimiento", color: "bg-yellow-500" },
  ];
  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Central 5S Circle */}
      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-xl pl-7">
      Change Bridge™
      </div>

      {/* Surrounding Steps */}
      {fiveSSteps.map((step, index) => {
        const angle = index * 72 - 90;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className={`absolute w-24 h-24 ${step.color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform duration-300`}
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
    </div>
  );
};

export default CentralChangeBridgeCircle;
