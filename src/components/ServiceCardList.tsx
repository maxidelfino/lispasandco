"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Settings,
  Factory,
  Zap,
  Award,
  Smartphone,
} from "lucide-react";
import type { Service } from "../types";
import { useNavigate } from "react-router-dom";
import EightGridWastes from "../icons-componets/EightGridWastes";
import Central5SCircle from "../icons-componets/Central5SCircle";

interface ServiceCardListProps {
  services: Service[];
}

const iconMap = {
  Target,
  Settings,
  Factory,
  Zap,
  Award,
  Smartphone,
};

const ServiceCardList: React.FC<ServiceCardListProps> = ({services}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const nextService = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevService = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToService = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleServiceClick = (service: Service) => {
    if (service.route) {
      navigate(service.route);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevService();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextService();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);
  console.log("services", services);
  if (!services.length) return null;

  const currentService = services[currentIndex];
  const Icon = iconMap[currentService.icon as keyof typeof iconMap] || Target;

  return (
    <div className="relative">
        {/* Navigation Controls */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevService}
          disabled={isAnimating}
          className="p-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Servicio anterior"
        >
          <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        <div className="text-center">
          <h3 className="text-sm font-medium text-[var(--color-text)]">
            {currentIndex + 1} de {services.length}
          </h3>
          {/* Service Counter */}
          <div className="text-center mt-4">
            <p className="text-sm text-[var(--color-text)]">
              Usa las flechas del teclado para navegar
            </p>
          </div>
        </div>

        <button
          onClick={nextService}
          disabled={isAnimating}
          className="p-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Siguiente servicio"
        >
          <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Service Card */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className={`transition-all duration-300 ${
            isAnimating
              ? "opacity-0 transform scale-95"
              : "opacity-100 transform scale-100"
          }`}
        >
          <div
            className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-lg cursor-pointer"
            onClick={() => handleServiceClick(currentService)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6 group">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    currentService.color ||
                    "from-[var(--color-secondary)] to-[var(--color-accent)]"
                  } flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6 group-hover:text-[var(--color-secondary)] transition-colors">
                    {currentService.name}
                  </h3>
                </div>
              </div>
            </div>

            {currentService.longDescription &&
              currentService.longDescription.map((desc) => (
                <p className="text-[var(--color-text)] mb-4 leading-relaxed text-lg">
                  {desc}
                </p>
              ))}

            {(() => {
              if (currentService.id === "wastezero") {
                return <EightGridWastes />;
              } else if (currentService.id === "5s-plus") {
                return <Central5SCircle />;
              } else {
                return <></>;
              }
            })()}

            {/* Action Button */}
            <div className="flex justify-center">
              {currentService.isActive ? (
                <div className="mt-8 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] cursor-pointer">
                  <p
                    className="text-sm text-[var(--color-text)] text-center"
                    onClick={() => handleServiceClick(currentService)}
                  >
                    <span className="font-semibold text-[var(--color-secondary)]">
                      Haz clic aquí
                    </span>{" "}
                    para conocer más detalles del programa {currentService.name}.
                  </p>
                </div>
              ) : (
                <div className="mt-6 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-text)] text-center">
                    Programa disponible próximamente
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToService(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[var(--color-secondary)] scale-125"
                : "bg-[var(--color-border)] hover:bg-[var(--color-secondary)]/50"
            } disabled:cursor-not-allowed`}
            aria-label={`Ir al servicio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardList;
