import React from 'react';
import { X, Check, X as XIcon } from 'lucide-react';
import { TabData } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  data: TabData | null;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <div className={`fixed top-0 left-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto z-50 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={onClose}
          className="float-right text-[var(--color-secondary)] hover:text-[var(--color-primary)] p-1"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-[var(--color-primary)] pr-10">
          {data.content.title}
        </h2>
      </div>

      <div className="p-6 space-y-6">
        {data.content.whatIs && (
          <div>
            <h3 className="font-bold text-[var(--color-primary)] mb-3">¿Qué es?</h3>
            <ul className="space-y-2">
              {data.content.whatIs.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.content.whatIsNot && (
          <div>
            <h3 className="font-bold text-[var(--color-primary)] mb-3">¿Qué no es?</h3>
            <ul className="space-y-2">
              {data.content.whatIsNot.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <XIcon className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.content.problems && (
          <div>
            <h3 className="font-bold text-[var(--color-primary)] mb-3">Problemas que Resuelve</h3>
            <ul className="space-y-2">
              {data.content.problems.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.content.benefits && (
          <div>
            <h3 className="font-bold text-[var(--color-primary)] mb-3">Beneficios</h3>
            <ul className="space-y-2">
              {data.content.benefits.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.content.methodology && (
          <div>
            <h3 className="font-bold text-[var(--color-primary)] mb-3">Metodología</h3>
            <ul className="space-y-2">
              {data.content.methodology.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.content.timing && (
          <div>
            <h3 className="font-bold text-[var(--color-primary)] mb-3">Timing Óptimo</h3>
            <ul className="space-y-2">
              {data.content.timing.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;