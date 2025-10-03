"use client";

import type React from "react";
import { useState, useRef } from "react";
import ServicesModal from "./ServicesModal";
import {
  evolutionCards,
  type evolutionCardsType,
} from "../data/evolutionCards";
import type { Service } from "../types";
import { useScreenSize } from "../hooks/useScreenSize";
import {
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import RandG from "../assets/RandG.png";

const EvolutionPath: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [cardId, setCardId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

  const isDesktop = useScreenSize() === "desktop";
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentLanguage } = useLanguage();

  const [modalData, setModalData] = useState<{
    title: string;
    subtitle: string;
    servicesData: Service[];
  }>({
    title: "",
    subtitle: "",
    servicesData: [],
  });

  const cardConfig = {
    iniciar: {
      icon: Target,
    },
    estabilizar: {
      icon: TrendingUp,
    },
    transformar: {
      icon: Zap,
    },
    aplicaciones: {
      icon: Sparkles,
    },
  };

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
      <section
        id="services-section"
        className="min-h-screen flex items-center justify-center py-8 px-2 sm:py-12 sm:px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-3 sm:mb-4 leading-tight">
              {currentLanguage === Language.SPANISH ? (
                <>
                  Nuestro Roadmap de Transformación:{" "}
                  <span className="text-[var(--color-secondary)]">
                    4 módulos integrados
                  </span>{" "}
                  para llevar tu empresa a un nivel superior
                </>
              ) : currentLanguage === Language.ENGLISH ? (
                <>
                  Our Transformation Roadmap:{" "}
                  <span className="text-[var(--color-secondary)]">
                    4 connected modules
                  </span>{" "}
                  to take your business further.
                </>
              ) : (
                <>
                  Nosso Roadmap de Transformação:{" "}
                  <span className="text-[var(--color-secondary)]">
                    4 módulos integrados
                  </span>{" "}
                  para levar sua empresa a um nível superior
                </>
              )}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-xl text-[var(--color-secondary)] italic max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-8">
              {currentLanguage === Language.SPANISH
                ? "“Cada empresa conoce su punto de dolor. De la mano de la mejora continua nosotros te ayudamos a superarlo.”"
                : currentLanguage === Language.ENGLISH
                ? "“Every company has its challenges. We work with you to face them—and turn them into opportunities—through continuous improvement that lasts.”"
                : "“Cada empresa conhece seu ponto de dor. Com a melhoria contínua, ajudamos você a superá-lo.”"}
            </p>
            <p className="text-base sm:text-xl text-[var(--color-text)] max-w-md sm:max-w-2xl mx-auto">
              {currentLanguage === Language.SPANISH
                ? "Elige la opción que mejor describe tus problemas"
                : currentLanguage === Language.ENGLISH
                ? "Choose the option that best fits your challenges."
                : "Escolha a opção que melhor descreve seus problemas"}
            </p>
          </div>

          {/* Responsive Cards Layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative">
              {(
                evolutionCards[
                  currentLanguage === Language.SPANISH
                    ? "es"
                    : currentLanguage === Language.ENGLISH
                    ? "en"
                    : "pt"
                ] as evolutionCardsType[]
              ).map((card) => {
                const config = cardConfig[card.id as keyof typeof cardConfig];
                const IconComponent = config.icon;
                const isActive = activeCard === card.id;

                return (
                  <div key={card.id} className="relative group">
                    {/* Minimalist Card */}
                    <div
                      className={`relative bg-white rounded-2xl border border-gray-200 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm ${
                        activeCard === card.id
                          ? "shadow-lg scale-[1.03] z-20 border-gray-300"
                          : "hover:shadow-md hover:scale-[1.01]"
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
                      style={{
                        background: isActive ? "#fafbfc" : undefined,
                      }}
                    >
                      <div className="p-4 sm:p-6 lg:p-8">
                        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                          <div
                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center shadow-lg transition-all duration-300 ${
                              isActive
                                ? "scale-110 rotate-3"
                                : "group-hover:scale-105 group-hover:rotate-1"
                            }`}
                          >
                            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] leading-tight mb-1">
                              {card.subtitle}
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full"></div>
                          </div>
                        </div>

                        {activeCard !== card.id && (
                          <div className="space-y-3">
                            <p className="text-gray-600 font-normal leading-relaxed text-sm sm:text-base mb-4">
                              {card.description}
                            </p>
                          </div>
                        )}

                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            activeCard === card.id
                              ? "max-h-32 opacity-100 mb-3 sm:mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <blockquote className="text-xs sm:text-sm font-medium italic p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-accent)]/10 text-[var(--color-secondary)] border border-[var(--color-secondary)]/20">
                            {card.quote}
                          </blockquote>
                        </div>

                        {activeCard === card.id && (
                          <div className="space-y-3">
                            {card.details.map((detail: string, index: number) =>
                              detail.startsWith("Ideal") ? (
                                <div
                                  key={index}
                                  className="flex items-start space-x-2"
                                >
                                  <p className="text-sm text-[var(--color-text)] leading-relaxed font-semibold">
                                    {detail}
                                  </p>
                                </div>
                              ) : (
                                <div
                                  key={index}
                                  className="flex items-start space-x-2"
                                >
                                  <p className="text-sm text-[var(--color-text)] leading-relaxed">
                                    {detail}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        )}

                        {card.programs && (
                          <div
                            className={`transition-all duration-500 overflow-hidden ${
                              isActive
                                ? "max-h-45 opacity-100 mb-6 sm:mb-4"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="space-y-1 sm:space-y-2 mt-4 border-t border-gray-100 pt-4">
                              {card.programs.map(
                                ({ name, featured }, idx: number) => (
                                  <div
                                    key={idx}
                                    className="flex items-center space-x-2"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)]" />
                                    <span className="text-xs sm:text-sm font-medium text-gray-700 flex items-center">
                                      {name}
                                      {featured && (
                                        <span
                                          className={
                                            name.includes("FLOW STABLE")
                                              ? "relative ml-1 flex items-center justify-center rounded-full p-0.5"
                                              : "relative ml-1 flex items-center justify-center rounded-full p-0.5 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)]"
                                          }
                                          title={
                                            name.includes("FLOW STABLE")
                                              ? currentLanguage ===
                                                Language.SPANISH
                                                ? "Licencia STABLE OPERATIONS por R&G"
                                                : currentLanguage ===
                                                  Language.ENGLISH
                                                ? "Licence STABLE OPERATIONS by R&G"
                                                : "Licença STABLE OPERATIONS por R&G"
                                              : currentLanguage ===
                                                Language.SPANISH
                                              ? "Programa destacado"
                                              : currentLanguage ===
                                                Language.ENGLISH
                                              ? "Featured program"
                                              : "Programa em destaque"
                                          }
                                          aria-label={
                                            name.includes("FLOW STABLE")
                                              ? currentLanguage ===
                                                Language.SPANISH
                                                ? "Licencia STABLE OPERATIONS por R&G"
                                                : currentLanguage ===
                                                  Language.ENGLISH
                                                ? "Licence STABLE OPERATIONS by R&G"
                                                : "Licença STABLE OPERATIONS por R&G"
                                              : currentLanguage ===
                                                Language.SPANISH
                                              ? "Programa destacado"
                                              : currentLanguage ===
                                                Language.ENGLISH
                                              ? "Featured program"
                                              : "Programa em destaque"
                                          }
                                          onMouseEnter={() =>
                                            setShowTooltip(idx)
                                          }
                                          onMouseLeave={() =>
                                            setShowTooltip(null)
                                          }
                                        >
                                          {name.includes("FLOW STABLE") ? (
                                            <img
                                              src={RandG}
                                              alt="R&G"
                                              className="h-4 sm:h-6 w-auto object-contain flex-shrink-0"
                                            />
                                          ) : (
                                            <Star className="w-3.5 h-3.5 text-white" />
                                          )}

                                          {showTooltip === idx && (
                                            <span className="absolute left-1/2 -top-8 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs rounded px-2 py-1 pointer-events-none z-30 shadow-lg">
                                              {name.includes("FLOW STABLE")
                                                ? currentLanguage ===
                                                  Language.SPANISH
                                                  ? "Licencia STABLE OPERATIONS por R&G"
                                                  : currentLanguage ===
                                                    Language.ENGLISH
                                                  ? "Licence STABLE OPERATIONS by R&G"
                                                  : "Licença STABLE OPERATIONS por R&G"
                                                : currentLanguage ===
                                                  Language.SPANISH
                                                ? "Programa destacado"
                                                : currentLanguage ===
                                                  Language.ENGLISH
                                                ? "Featured program"
                                                : "Programa em destaque"}
                                            </span>
                                          )}
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-gray-100 gap-2 sm:gap-0">
                          <span className="text-xs sm:text-sm font-medium text-gray-400">
                            {isDesktop
                              ? currentLanguage === Language.SPANISH
                                ? "Click para ver programas"
                                : currentLanguage === Language.ENGLISH
                                ? "Click to see programs"
                                : "Clique para ver programas"
                              : currentLanguage === Language.SPANISH
                              ? "Toca para ver programas"
                              : currentLanguage === Language.ENGLISH
                              ? "Tap to see programs"
                              : "Toque para ver programas"}
                          </span>
                        </div>

                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            isActive
                              ? "max-h-20 opacity-100 mt-3 sm:mt-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <button
                            onClick={() => handleCardClick(card)}
                            className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] text-white font-semibold shadow hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                          >
                            <span>
                              {currentLanguage === Language.SPANISH
                                ? "Ver programas detallados"
                                : currentLanguage === Language.ENGLISH
                                ? "See detailed programs"
                                : "Ver programas detalhados"}
                            </span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Bottom CTA */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
              <div className="text-center">
                <h4 className="font-bold text-[var(--color-primary)] mb-1 sm:mb-2 text-base sm:text-lg">
                  {currentLanguage === Language.SPANISH
                    ? "¿No estás seguro por dónde empezar?"
                    : currentLanguage === Language.ENGLISH
                    ? "Not sure where to start?"
                    : "Não tem certeza por onde começar?"}
                </h4>
                <p className="text-[var(--color-text)] mb-3 sm:mb-4 text-sm sm:text-base">
                  {currentLanguage === Language.SPANISH
                    ? "Hablemos de tu situación actual y diseñemos juntos el camino de transformación ideal para tu empresa."
                    : currentLanguage === Language.ENGLISH
                    ? "Let's discuss your current situation and design the ideal transformation path for your company."
                    : "Vamos conversar sobre sua situação atual e desenhar juntos o caminho de transformação ideal para sua empresa."}
                </p>
                <button
                  className="bg-[var(--color-accent)] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] transition-colors text-sm sm:text-base"
                  onClick={() => {
                    const element = document.querySelector("footer");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {currentLanguage === Language.SPANISH
                    ? "Agenda una Reunión Gratuita"
                    : currentLanguage === Language.ENGLISH
                    ? "Schedule a Free Meeting"
                    : "Agende uma Reunião Gratuita"}
                </button>
              </div>
            </div>
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

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
};

export default EvolutionPath;
