import React from 'react';

interface TabButtonProps {
  label: string;
  tooltip: string;
  onClick: () => void;
  isActive?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ label, tooltip, onClick, isActive }) => {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`bg-white border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white hover:-translate-y-1 ${
          isActive ? 'bg-[var(--color-secondary)] text-white' : ''
        }`}
      >
        {label}
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[var(--color-primary)] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {tooltip}
      </div>
    </div>
  );
};

export default TabButton;