import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, MessageCircle } from 'lucide-react';

const FloatingCTAs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Expanded Menu */}
      <div className={`mb-4 space-y-3 transition-all duration-300 ${
        isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <button className="group flex items-center space-x-3 bg-white text-[var(--color-primary)] px-4 py-3 rounded-xl shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Ficha Técnica</span>
        </button>
        
        <button className="group flex items-center space-x-3 bg-white text-[var(--color-primary)] px-4 py-3 rounded-xl shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Llamar</span>
        </button>
        
        <button className="group flex items-center space-x-3 bg-white text-[var(--color-primary)] px-4 py-3 rounded-xl shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Email</span>
        </button>
      </div>

      {/* Main CTA Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative w-14 h-14 bg-[var(--color-secondary)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
      >
        <MessageCircle className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[var(--color-secondary)] animate-ping opacity-20"></div>
      </button>

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default FloatingCTAs;