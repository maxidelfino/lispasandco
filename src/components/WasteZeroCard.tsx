import React from 'react';
import { ArrowLeft, Download, Mail } from 'lucide-react';

interface WasteZeroCardProps {
  onBack: () => void;
}

const WasteZeroCard: React.FC<WasteZeroCardProps> = ({ onBack }) => {
  return (
    <div className="bg-white border-l-4 border-[var(--color-accent)] rounded-xl shadow-lg p-7 flex-1 min-w-[360px] relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-2 rounded-xl text-sm font-medium hover:bg-[var(--color-primary)] transition-colors flex items-center space-x-1"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver</span>
      </button>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-3 tracking-wide">
          Programa WasteZero™
        </h2>
        
        <p className="text-[var(--color-text)] mb-4 leading-relaxed">
          <strong>WasteZero™</strong> es nuestro sistema de mejora continua end-to-end, 
          adaptado a cada cliente desde el punto de origen hasta el cliente final.
        </p>
        
        <p className="text-[var(--color-text)] mb-6 leading-relaxed">
          Generamos disciplina operativa, estandarización y valor sostenible, 
          acompañando al equipo sin reemplazarlo.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-[var(--color-secondary)] transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>FICHA TÉCNICA</span>
          </button>
          <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-[var(--color-secondary)] transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>CONTACTAR</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteZeroCard;