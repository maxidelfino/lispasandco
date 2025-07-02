import React, { useState } from 'react';
import { ChevronRight, CheckCircle, XCircle, Target, Clock, Zap, TrendingUp } from 'lucide-react';

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
          {title}
        </h2>
        <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  </section>
);

const WasteZeroContent: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const features = [
    {
      id: '1',
      icon: Target,
      title: '¿Qué es y qué no es?',
      details: [
        '✔ Un programa para identificar y eliminar desperdicios según la filosofía Lean',
        '✔ Una formación práctica que prepara facilitadores de mejora (Kaizen / Green Belt)',
        '✔ El punto de partida ideal para organizaciones que inician su camino Lean',
        '',
        '✘ Una capacitación sin aplicación real',
        '✘ Una solución parcial o desconectada de la estrategia',
        '✘ Un taller genérico sin compromiso de implementación',
      ]
    },
    {
      id: '2',
      icon: Zap,
      title: 'Problemas que resuelve',
      description: 'Integramos todas las áreas desde el origen hasta el cliente final para máxima visibilidad.',
      details: [
        '✔ Mapeo completo de flujo de valor',
        '✔ Integración entre departamentos',
        '✔ Visibilidad 360° de procesos',
        '✔ Comunicación fluida entre equipos'
      ]
    },
    {
      id: '3',
      icon: TrendingUp,
      title: 'Resultados esperados',
      description: 'Establecemos una cultura de mejora constante con resultados medibles y sostenibles.',
      details: [
        '✔ Metodología Kaizen adaptada',
        '✔ Ciclos PDCA estructurados',
        '✔ Indicadores de mejora continua',
        '✔ Capacitación del equipo interno'
      ]
    },
    {
      id: '4',
      icon: Target,
      title: 'Metodologia Tiempos',
      description: 'Implementamos sistemas de control y seguimiento que aseguran la consistencia en todos los procesos.',
      details: [
        '✔ Estandarización de procedimientos',
        '✔ Sistemas de control visual',
        '✔ Métricas de desempeño en tiempo real',
        '✔ Auditorías sistemáticas'
      ]
    },
    {
      id: '5',
      icon: Zap,
      title: 'Con qué otros productos se relaciona',
      description: 'Integramos todas las áreas desde el origen hasta el cliente final para máxima visibilidad.',
      details: [
        '✔ Mapeo completo de flujo de valor',
        '✔ Integración entre departamentos',
        '✔ Visibilidad 360° de procesos',
        '✔ Comunicación fluida entre equipos'
      ]
    },
    {
      id: '6',
      icon: TrendingUp,
      title: 'En qué punto del camino se recomienda implementarlo',
      description: 'Establecemos una cultura de mejora constante con resultados medibles y sostenibles.',
      details: [
        '✔ Metodología Kaizen adaptada',
        '✔ Ciclos PDCA estructurados',
        '✔ Indicadores de mejora continua',
        '✔ Capacitación del equipo interno'
      ]
    }
  ];

  return (
    <div id="wastezero-content" className="bg-[var(--color-bg)]">
      <ContentSection
        id="que-es"
        title=""
        subtitle=""
      >
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(feature => {
            const Icon = feature.icon;
            const isActive = activeCard === feature.id;
            return (
              <div
                key={feature.id}
                className={`group relative bg-[var(--color-surface)] rounded-2xl p-8 \
                  border border-[var(--color-border)] transition-all duration-300 cursor-pointer \
                  ${isActive ? 'shadow-2xl scale-105 border-[var(--color-secondary)]' : 'shadow-lg'}`}
                onMouseEnter={() => setActiveCard(feature.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Sólo título */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[var(--color-secondary)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] ml-4">
                    {feature.title}
                  </h3>
                  <ChevronRight
                    className={`ml-auto w-5 h-5 text-[var(--color-border)] transition-transform duration-300 \
                      ${isActive ? 'rotate-90 text-[var(--color-secondary)]' : 'group-hover:text-[var(--color-secondary)]'}`}
                  />
                </div>

                {/* Descripción expandida al hover */}
                {isActive && (
                  <div className="mt-6 space-y-3">
                    {feature.details.map((detail, idx) => (
                      detail && (
                        <div key={idx} className="flex items-center space-x-3">
                          {(detail.startsWith('✔')
                            ? <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                            : <XCircle className="w-4 h-4 text-red-500" />
                          )}
                          <span className="text-sm text-[var(--color-text)]">{detail.replace(/^. /, '')}</span>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ContentSection>
    </div>
  );
};

export default WasteZeroContent;
