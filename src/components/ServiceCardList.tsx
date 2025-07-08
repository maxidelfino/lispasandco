"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Settings,
  Factory,
  Zap,
  Award,
  Smartphone,
  TrendingUp,
  ChartNoAxesCombined,
} from "lucide-react";
import type { Service } from "../types";
import { useNavigate } from "react-router-dom";
import EightGridWastes from "../icons-componets/EightGridWastes";
import Central5SCircle from "../icons-componets/Central5SCircle";
import FlowStableIcon from "../icons-componets/FlowStableIcon";
import KaizenActionIcon from "../icons-componets/KaizenActionIcon";
import DecisionesEstadisticasIcon from "../icons-componets/DecisionesEstadisticasIcon";
import LeanEnterpriseIcon from "../icons-componets/LeanEnterpriseIcon";
import StratBridgeIcon from "../icons-componets/StratBridgeIcon";
import ProjectFocusIcon from "../icons-componets/ProjectFocusIcon";

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
  TrendingUp,
  ChartNoAxesCombined,
};

const ICON_COMPONENTS_MAP = {
  wastezero: EightGridWastes,
  "5s-plus": Central5SCircle,
  flowstable: FlowStableIcon,
  leanbridge: Central5SCircle, // Reusing for now
  "kaizen-action": KaizenActionIcon,
  "decisiones-estadisticas": DecisionesEstadisticasIcon,
  "lean-enterprise-transformation": LeanEnterpriseIcon,
  stratbridge: StratBridgeIcon,
  projectfocus: ProjectFocusIcon,
};

const ServiceCardList: React.FC<ServiceCardListProps> = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const minSwipeDistance = 50;

  const nextService = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevService = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToService = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleServiceClick = (service: Service) => {
    if (service.isActive && service.route) {
      navigate(service.route);
    }
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextService();
    } else if (isRightSwipe) {
      prevService();
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

  // Render service icon component
  const renderServiceIcon = (serviceId: string) => {
    const IconComponent =
      ICON_COMPONENTS_MAP[serviceId as keyof typeof ICON_COMPONENTS_MAP];

    if (IconComponent) {
      return <IconComponent />;
    }

    // Fallback placeholder
    return (
      <div className="flex items-center justify-center h-40 text-[var(--color-text)]">
        <Target className="w-16 h-16 opacity-20" />
      </div>
    );
  };

  if (!services.length) return null;

  return (
    <div className="relative">
      {/* Navigation Controls */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevService}
          disabled={isAnimating}
          className="p-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group z-10"
          aria-label="Servicio anterior"
        >
          <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        <div className="text-center">
          <h3 className="text-sm font-medium text-[var(--color-text)]">
            {currentIndex + 1} de {services.length}
          </h3>
          {/* Touch/Keyboard Instructions */}
          <div className="text-center mt-4">
            <p className="text-sm text-[var(--color-text)] opacity-70">
              Desliza o usa las flechas del teclado para navegar
            </p>
          </div>
        </div>

        <button
          onClick={nextService}
          disabled={isAnimating}
          className="p-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group z-10"
          aria-label="Siguiente servicio"
        >
          <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {services.map((service, index) => {
            const ServiceIcon =
              iconMap[service.icon as keyof typeof iconMap] || Target;
            const isActive = index === currentIndex;

            return (
              <div
                key={service.id}
                className={`w-full flex-shrink-0 transition-all duration-500 ${
                  isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
                }`}
              >
                <div
                  className={`bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-lg cursor-pointer transition-all duration-300 ${
                    isActive ? "shadow-xl" : "hover:shadow-lg"
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 group">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          service.color ||
                          "from-[var(--color-secondary)] to-[var(--color-accent)]"
                        } flex items-center justify-center shadow-lg`}
                      >
                        <ServiceIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {service.longDescription &&
                    service.longDescription.map((desc, descIndex) => (
                      <p
                        key={descIndex}
                        className="text-[var(--color-text)] mb-4 leading-relaxed text-lg"
                      >
                        {desc}
                      </p>
                    ))}

                  {/* Service Icon Component */}
                  <div className="my-6 flex justify-center">
                    <div className="scale-75 origin-center">
                      {renderServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    {service.isActive ? (
                      <div className="mt-8 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] cursor-pointer hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 group/cta">
                        <p
                          className="text-sm text-center group-hover/cta:text-white transition-colors"
                          onClick={() => handleServiceClick(service)}
                        >
                          <span className="font-semibold text-[var(--color-secondary)] group-hover/cta:text-white">
                            Haz clic aquí
                          </span>{" "}
                          para conocer más detalles del programa {service.name}.
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
            );
          })}
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
