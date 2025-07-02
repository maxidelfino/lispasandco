import React from 'react';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
      <div className="text-2xl font-bold tracking-wide">
        LYSPAS & CO
      </div>
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">
          Inicio
        </a>
        <a href="#" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">
          Sobre Nosotros
        </a>
        <a href="#" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">
          Comparar
        </a>
        <a href="#" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">
          Contacto
        </a>
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <select className="bg-transparent border-none text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;