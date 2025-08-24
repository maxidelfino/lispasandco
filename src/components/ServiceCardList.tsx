"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  RefObject,
} from "react";
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
  BarChartIcon as ChartNoAxesCombined,
  Wrench,
} from "lucide-react";
import type { Service } from "../types";
import { useNavigate } from "react-router-dom";
import EightGridWastes from "../icons-componets/EightGridWastes";
import Central5SCircle from "../icons-componets/FiveSPlus/Central5SCircle";
import FlowStableIcon from "../icons-componets/FlowStable/FlowStableIcon";
import KaizenActionIcon from "../icons-componets/KaizenAction/KaizenActionIcon";
import DecisionesEstadisticasIcon from "../icons-componets/DecisionesEstadisticasIcon";
import LeanEnterpriseIcon from "../icons-componets/LeanEnterprise/LeanEnterpriseIcon";
import StratBridgeIcon from "../icons-componets/StratBridge/StratBridgeIcon";
import ProjectFocusIcon from "../icons-componets/ProjectFocus/ProjectFocusIcon";
import BridgeIcon from "../icons-componets/LeanBridge/BridgeIcon";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

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
  leanbridge: BridgeIcon,
  "kaizen-action": KaizenActionIcon,
  "decisiones-estadisticas": DecisionesEstadisticasIcon,
  "lean-enterprise-transformation": LeanEnterpriseIcon,
  stratbridge: StratBridgeIcon,
  projectfocus: ProjectFocusIcon,
};

// Traducciones para textos estáticos
const translations = {
  es: {
    prevService: "Servicio anterior",
    nextService: "Siguiente servicio",
    of: "de",
    swipeOrArrow: "Desliza o usa las flechas del teclado para navegar",
    workingForYou: "Estamos trabajando para ti",
    teamDeveloping:
      "Nuestro equipo está desarrollando nuevos servicios innovadores para complementar este caminio.",
    stayTuned: "Mantente atento a nuestras actualizaciones.",
    clickHere: "Haz clic aquí",
    learnMore: "para conocer más detalles del programa",
    programAvailableSoon: "Programa disponible próximamente",
    goToService: (n: number) => `Ir al servicio ${n}`,
  },
  en: {
    prevService: "Previous service",
    nextService: "Next service",
    of: "of",
    swipeOrArrow: "Swipe or use the keyboard arrows to navigate",
    workingForYou: "We are working for you",
    teamDeveloping:
      "Our team is developing new innovative services to complement this journey.",
    stayTuned: "Stay tuned for our updates.",
    clickHere: "Click here",
    learnMore: "to learn more about the program",
    programAvailableSoon: "Program available soon",
    goToService: (n: number) => `Go to service ${n}`,
  },
  pt: {
    prevService: "Serviço anterior",
    nextService: "Próximo serviço",
    of: "de",
    swipeOrArrow: "Deslize ou use as setas do teclado para navegar",
    workingForYou: "Estamos trabalhando para você",
    teamDeveloping:
      "Nossa equipe está desenvolvendo novos serviços inovadores para complementar esta jornada.",
    stayTuned: "Fique atento às nossas atualizações.",
    clickHere: "Clique aqui",
    learnMore: "para saber mais detalhes do programa",
    programAvailableSoon: "Programa disponível em breve",
    goToService: (n: number) => `Ir para o serviço ${n}`,
  },
};

// Check if service is coming soon (not fully developed)
export const isComingSoon = (service: Service) => {
  // Check if service has placeholder content or is marked as coming soon
  return (
    service.comingSoon ||
    (service.longDescription &&
      service.longDescription.some(
        (desc) =>
          desc.includes("próximamente") ||
          desc.includes("estamos trabajando") ||
          desc.includes("disponible próximamente") ||
          desc.includes("coming soon") ||
          desc.includes("we are working") ||
          desc.includes("available soon") ||
          desc.includes("em breve") ||
          desc.includes("estamos trabalhando") ||
          desc.includes("disponível em breve")
      ))
  );
};

const ServiceCardList: React.FC<ServiceCardListProps> = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Idioma actual
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage as Language];

  const minSwipeDistance = 50;

  const [containerHeight, setContainerHeight] = useState<number>(0);
  // Creamos un ref por cada tarjeta blanca
  const cardRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  if (cardRefs.current.length !== services.length) {
    cardRefs.current = Array(services.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>());
  }

  // Ajusta la altura al del card activo
  const adjustHeight = () => {
    const activeRef = cardRefs.current[currentIndex];
    if (activeRef?.current) {
      const { height } = activeRef.current.getBoundingClientRect();
      setContainerHeight(height + 60);
    }
  };

  // Mide nueva altura justo después de pintar
  useLayoutEffect(() => {
    adjustHeight();
  }, [currentIndex, services]);

  // Reajusta al redimensionar ventana
  useEffect(() => {
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, [currentIndex]);

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

  // Render coming soon content
  const renderComingSoonContent = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center mb-6 shadow-lg">
          <div className="relative">
            <Wrench className="w-10 h-10 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
          {t.workingForYou}
        </h3>

        <p className="text-[var(--color-text)] text-lg leading-relaxed mb-6 max-w-md">
          {t.teamDeveloping}
        </p>

        <div className="mt-8 text-sm text-[var(--color-text)] opacity-75">
          {t.stayTuned}
        </div>
      </div>
    );
  };

  if (!services.length) return null;

  const showComingSoon = services.some((service) => isComingSoon(service));

  return (
    <div className="relative">
      {showComingSoon ? (
        // Coming Soon Content
        renderComingSoonContent()
      ) : (
        <>
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevService}
              disabled={isAnimating}
              className="p-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group z-10"
              aria-label={t.prevService}
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            <div className="text-center">
              <h3 className="text-sm font-medium text-[var(--color-text)]">
                {currentIndex + 1} {t.of} {services.length}
              </h3>
              {/* Touch/Keyboard Instructions */}
              <div className="text-center mt-4">
                <p className="text-sm text-[var(--color-text)] opacity-70">
                  {t.swipeOrArrow}
                </p>
              </div>
            </div>

            <button
              onClick={nextService}
              disabled={isAnimating}
              className="p-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group z-10"
              aria-label={t.nextService}
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Carousel Container */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ height: containerHeight }}
          >
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
                const showComingSoon = isComingSoon(service);

                let serviceName = service.name;
                let serviceLongDescription = service.longDescription;

                return (
                  <div
                    key={service.id}
                    className={`w-full flex-shrink-0 transition-all duration-500 ${
                      isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
                    }`}
                  >
                    <div
                      ref={cardRefs.current[index]}
                      className={`bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-lg cursor-pointer transition-all duration-300 ${
                        isActive ? "shadow-xl" : "hover:shadow-lg"
                      }`}
                      onClick={() =>
                        !showComingSoon && handleServiceClick(service)
                      }
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
                              {serviceName}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {serviceLongDescription &&
                        serviceLongDescription.map((desc, descIndex) => (
                          <p
                            key={descIndex}
                            className="text-[var(--color-text)] mb-4 leading-relaxed text-lg"
                          >
                            {desc}
                          </p>
                        ))}

                      {/* Service Icon Component */}
                      <div className="flex justify-center">
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
                                {t.clickHere}
                              </span>{" "}
                              {t.learnMore} {serviceName}.
                            </p>
                          </div>
                        ) : (
                          <div className="mt-6 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
                            <p className="text-sm text-[var(--color-text)] text-center">
                              {t.programAvailableSoon}
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
                aria-label={t.goToService(index + 1)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCardList;
