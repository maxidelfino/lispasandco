"use client";

import React, { useState } from "react";
import ServicesModal from "./ServicesModal";
import { evolutionCards, evolutionCardsType } from "../data/evolutionCards";
import { Service } from "../types";
import { useScreenSize } from "../hooks/useScreenSize";

const EvolutionPath: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [cardId, setCardId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const isDesktop = useScreenSize() === "desktop";

  const [modalData, setModalData] = useState<{
    title: string;
    subtitle: string;
    servicesData: Service[];
  }>({
    title: "",
    subtitle: "",
    servicesData: [],
  });

  const handleCardClick = (card: evolutionCardsType) => {
    setModalData({
      title: card.title,
      subtitle: card.subtitle,
      servicesData: card.servicesData || [],
    });
    setModalOpen(true);
  };

  return (
    <>
      <section id="services-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              Ofrecemos soluciones simples y sustentables a los problemas de las
              empresas
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-secondary)] italic max-w-2xl mx-auto mb-8">
              “Cada empresa conoce su punto de dolor. De la mano de la mejora
              continua nosotros te ayudamos a superarlo.”
            </p>
            <p className="text-xl text-[var(--color-text)] max-w-2xl mx-auto">
              Elige la opción que mejor describe tus problemas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {evolutionCards.map((card) => (
              <div
                key={card.id}
                className={`group relative bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] transition-all duration-500 cursor-pointer ${
                  activeCard === card.id
                    ? "shadow-2xl scale-105 border-[var(--color-secondary)]"
                    : "shadow-lg hover:shadow-xl hover:scale-102"
                }`}
                onMouseEnter={() => {
                  setCardId(card.id);

                  setActiveCard(card.id);
                }}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => {
                  if (cardId === card.id) {
                    if (activeCard) {
                      handleCardClick(card);
                    }
                  }
                }}
              >
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                    {card.subtitle}
                  </h3>
                  <div className="space-y-2 text-[var(--color-text)]">
                    {/* <p className="font-medium">{card.subtitle}</p> */}
                    <p className="font-medium">{card.description}</p>
                    {/* <p className="text-sm">{card.description}</p> */}
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    activeCard === card.id
                      ? "max-h-max opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-[var(--color-border)] py-6">
                    {card.quote && (
                      <blockquote className="text-[var(--color-secondary)] font-medium italic mb-4">
                        {card.quote}
                      </blockquote>
                    )}
                    <div className="space-y-3">
                      {card.details.map((detail, index) =>
                        detail.startsWith("Ideal") ? (
                          <p
                            key={index}
                            className="font-medium text-[var(--color-text)] leading-relaxed"
                          >
                            <b>{detail}</b>
                          </p>
                        ) : (
                          <p
                            key={index}
                            className="font-medium text-[var(--color-text)] leading-relaxed"
                          >
                            {detail}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  {card.programs && (
                    <div className="border-t border-[var(--color-border)] mb-6 pt-6">
                      {/* Título de sección */}
                      <h4 className="text-center text-lg font-semibold text-[var(--color-primary)] mb-3">
                        Programas incluidos en este camino:
                      </h4>

                      {/* Badges */}
                      <div className="flex flex-wrap justify-center gap-4">
                        {card.programs.map((program) => (
                          <span
                            key={program}
                            className="inline-block bg-[var(--color-surface)] text-[var(--color-secondary)] font-medium px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 right-4 text-[var(--color-border)] group-hover:text-[var(--color-secondary)] transition-colors">
                  <div className="text-xs font-medium">
                    {isDesktop
                      ? "Click para ver programas"
                      : "Tap para ver programas"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        subtitle={modalData.subtitle}
        services={modalData.servicesData}
      />
    </>
  );
};

export default EvolutionPath;
