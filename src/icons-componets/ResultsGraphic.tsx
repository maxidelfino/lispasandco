import React from 'react';
import { ArrowDown, ArrowUp, Award } from 'lucide-react';

// Representa la dirección del cambio: mejora o reducción
const metrics = [
  { label: 'Desperdicios', icon: ArrowDown, direction: 'down', color: 'from-green-500 to-emerald-600' },
  { label: 'Eficiencia', icon: ArrowUp, direction: 'up', color: 'from-blue-500 to-cyan-600' },
  { label: 'Productividad', icon: ArrowUp, direction: 'up', color: 'from-purple-500 to-violet-600' },
  { label: 'Certificación', icon: Award, color: 'from-orange-500 to-red-600' },
];

const ResultsGraphic: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-8">
    {metrics.map((metric, idx) => {
      const Icon = metric.icon;
      return (
        <div key={idx} className="flex flex-col items-center">
          <div
            className={`w-24 h-24 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 hover:scale-105`}
          >
            {metric.direction === 'up' && <Icon className="w-8 h-8" />}
            {metric.direction === 'down' && <Icon className="w-8 h-8" />}
            {!metric.direction && <Icon className="w-8 h-8" />}
          </div>
          <p className="mt-2 text-sm text-[var(--color-text)] font-medium text-center">
            {metric.label}
          </p>
        </div>
      );
    })}
  </div>
);

export default ResultsGraphic;
