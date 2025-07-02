import React from 'react';
import { X, Users, Package, ArrowLeftRight, Timer, Truck, XCircle, Settings, Factory } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
}

const ServicesModal: React.FC<ServicesModalProps> = ({ isOpen, onClose, title, subtitle }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleProgramClick = (programType: string) => {
    if (programType === 'wastezero') {
      navigate('/wastezero');
    }
    // Aquí puedes agregar navegación para otros programas en el futuro
  };

  const wasteIcons = [
    { icon: Users, title: 'Talento no utilizado', description: 'No utilizar la experiencia, conocimientos y creatividad del personal' },
    { icon: Package, title: 'Inventario', description: 'Exceso de materia prima, productos en proceso no en uso' },
    { icon: ArrowLeftRight, title: 'Movimientos', description: 'Movimientos innecesarios realizados por el personal' },
    { icon: Timer, title: 'Espera', description: 'Tiempo perdido mientras se espera por el próximo paso en el proceso' },
    { icon: Truck, title: 'Transportación', description: 'Movimiento innecesario de productos y materia prima' },
    { icon: XCircle, title: 'Defectos', description: 'Información, productos o servicios defectuosos o incompletos' },
    { icon: Settings, title: 'Sobreproducción', description: 'Producción demás o antes de que se necesite' },
    { icon: Factory, title: 'Sobre-procesamiento', description: 'Más trabajo o calidad más alta de la que el cliente requiere' }
  ];

  const fiveSSteps = [
    { step: '1- SEIRI', title: 'ORGANIZAR', color: 'bg-red-500' },
    { step: '2- SEITON', title: 'ORDENAR', color: 'bg-[var(--color-secondary)]' },
    { step: '3- SEISO', title: 'LIMPIAR', color: 'bg-purple-600' },
    { step: '4- SEIKETSU', title: 'ESTANDARIZAR', color: 'bg-blue-500' },
    { step: '5- SHITSUKE', title: 'MANTENER', color: 'bg-orange-500' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[var(--color-bg)] rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[var(--color-bg)] border-b border-[var(--color-border)] p-6 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">{title}</h2>
            <p className="text-[var(--color-text)] mt-1">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--color-border)] rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-[var(--color-text)]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Program WasteZero */}
            <div 
              className="bg-white rounded-xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => handleProgramClick('wastezero')}
            >
              <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6 group-hover:text-[var(--color-secondary)] transition-colors">
                Program WasteZero™
              </h3>
              
              <p className="text-[var(--color-text)] mb-4 leading-relaxed text-lg">
                WasteZero™ es un programa táctico de implementación LEAN diseñado para empresas que buscan reducir pérdidas operativas de manera concreta, visible y sostenida.
              </p>
              
              <p className="text-[var(--color-text)] mb-8 leading-relaxed text-lg">
                Se centra en identificar y eliminar los 8 desperdicios clásicos de la gestión LEAN, combinando análisis visual, trabajo de campo y proyectos de mejora con impacto real.
              </p>

              {/* 8 Desperdicios Grid - Mejorado */}
              <div className="grid grid-cols-4 gap-6">
                {wasteIcons.map((waste, index) => {
                  const Icon = waste.icon;
                  return (
                    <div key={index} className="text-center group/icon">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center group-hover/icon:scale-110 transition-all duration-300 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {/* Tooltip mejorado */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[var(--color-primary)] text-white text-xs rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10 shadow-xl">
                          {waste.description}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--color-primary)]"></div>
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-[var(--color-primary)] mb-1 leading-tight">{waste.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Call to action */}
              <div className="mt-8 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-text)] text-center">
                  <span className="font-semibold text-[var(--color-secondary)]">Haz clic aquí</span> para conocer más detalles del programa WasteZero™
                </p>
              </div>
            </div>

            {/* 5S Plus */}
            <div className="bg-white rounded-xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6 group-hover:text-[var(--color-secondary)] transition-colors">
                5S Plus™
              </h3>
              
              <p className="text-[var(--color-text)] mb-4 leading-relaxed text-lg">
                5S Plus™ es un programa práctico de intervención que ayuda a las organizaciones a crear espacios de trabajo limpios, ordenados, eficientes y seguros, como base indispensable para cualquier camino de mejora continua.
              </p>
              
              <p className="text-[var(--color-text)] mb-8 leading-relaxed text-lg">
                A través de cinco pasos simples, 5S Plus™ identifica con claridad aquellas cosas que NO deberían estar en el lugar y ayuda a ordenar aquellas otras que SÍ lo deberían estar. Instala hábitos y estándares que permiten sostener la disciplina operativa en el tiempo.
              </p>

              {/* 5S Diagram - Mejorado */}
              <div className="relative flex items-center justify-center h-80">
                {/* Central 5S Circle */}
                <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-3xl z-10 shadow-xl">
                  5S
                </div>
                
                {/* Surrounding Steps */}
                {fiveSSteps.map((step, index) => {
                  const angle = (index * 72) - 90; // 360/5 = 72 degrees between each step, start from top
                  const radius = 120;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-20 h-20 ${step.color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-110 transition-transform duration-300`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
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
                  const angle = (index * 72) - 90;
                  const startRadius = 66;
                  const endRadius = 80;
                  const x1 = Math.cos(angle * Math.PI / 180) * startRadius;
                  const y1 = Math.sin(angle * Math.PI / 180) * startRadius;
                  const x2 = Math.cos(angle * Math.PI / 180) * endRadius;
                  const y2 = Math.sin(angle * Math.PI / 180) * endRadius;
                  
                  return (
                    <svg
                      key={index}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ transform: 'translate(0, 0)' }}
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

              {/* Call to action */}
              <div className="mt-6 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-text)] text-center">
                  Programa disponible próximamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;