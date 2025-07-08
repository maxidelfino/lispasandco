import React from 'react';
import { RulerDimensionLine, PiggyBank, Users, Blinds, GitFork } from 'lucide-react';

const metrics = [
  { label: 'Claridad de roles', icon: GitFork, color: 'bg-green-500' },
  { label: 'Costos & tiempos', icon: PiggyBank, color: 'bg-blue-500' },
  { label: 'Autonomía equipos', icon: Users, color: 'bg-yellow-500' },
  { label: 'Resultados aplicados', icon: Blinds, color: 'bg-purple-500' },
];

const MeasurementGraphic: React.FC = () => {
  const radius = 100;
  const center = 120;

  return (
    <div className="flex items-center justify-center pb-8">
      <div className="relative w-[240px] h-[240px]">
        {/* Center measurement icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white text-xl shadow-xl z-10">
          <RulerDimensionLine className="w-10 h-10" />
        </div>

        {/* Metric nodes */}
        {metrics.map((metric, idx) => {
          const angle = (idx / metrics.length) * 2 * Math.PI - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const Icon = metric.icon;

          return (
            <React.Fragment key={metric.label}>
              {/* Connector */}
              <div
                className="absolute w-[2px] bg-[var(--color-border)]"
                style={{
                  height: radius,
                  top: center,
                  left: center,
                  transform: `rotate(${(angle * 180) / Math.PI}deg)`,
                  transformOrigin: 'top center',
                }}
              />

              {/* Node */}
              <div
                className={`absolute w-16 h-16 ${metric.color} rounded-full flex items-center justify-center text-white cursor-pointer transition-transform duration-300 hover:scale-110 shadow-lg z-10`}
                style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                title={metric.label}
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Label */}
              <div
                className="absolute text-xs text-center text-[var(--color-text)] w-24"
                style={{ left: x, top: y + 30, transform: 'translateX(-50%)' }}
              >
                {metric.label}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MeasurementGraphic;
