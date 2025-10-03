"use client";

import React, { useRef } from "react";
import { useState, useEffect } from "react";
import {
  X,
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
  Sparkles,
  Wrench,
  Binoculars,
  Building2,
  Compass,
  Puzzle,
} from "lucide-react";
import { Service, Language } from "../types";
import EightGridWastes from "../icons-componets/EightGridWastes";
import Central5SCircle from "../icons-componets/FiveSPlus/Central5SCircle";
import FlowStableIcon from "../icons-componets/FlowStable/FlowStableIcon";
import KaizenActionIcon from "../icons-componets/KaizenAction/KaizenActionIcon";
import DecisionesEstadisticasIcon from "../icons-componets/DecisionesEstadisticasIcon";
import LeanEnterpriseIcon from "../icons-componets/LeanEnterprise/LeanEnterpriseIcon";
import StratBridgeIcon from "../icons-componets/StratBridge/StratBridgeIcon";
import ProjectFocusIcon from "../icons-componets/ProjectFocus/ProjectFocusIcon";
import BridgeIcon from "../icons-componets/LeanBridge/BridgeIcon";
import OpsBridgeIcon from "./OpsBridge/OpsBridgeIcon";
import { isComingSoon } from "./ServiceCardList";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../hooks/useScreenSize";
import CentralChangeBridgeCircle from "../icons-componets/CentralChangeBridgeCircle";
import { useLanguage } from "../contexts/LanguageContext";
import PeopleFirstIcon from "./PeopleFirst/PeopleFirstIcon";
import AssetBridgeIcon from "./AssetBridge/AssetBridgeIcon";
import MeasureBridgeIcon from "./MeasureBridge/MeasureBridgeIcon";
import RandG from "../assets/RandG.png";
import ProcessDesignBridgeIcon from "./ProcessDesignBridge/ProcessDesignBridgeIcon";
import AutopsContentIcon from "./Autops/AutopsContentIcon";

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  services: Service[];
  initialServiceIndex?: number;
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
  Binoculars,
  Building2,
  Compass,
  Puzzle,
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
  "change-bridge": CentralChangeBridgeCircle,
  "ops-bridge": OpsBridgeIcon,
  "people-first": PeopleFirstIcon,
  "asset-control-bridge": AssetBridgeIcon,
  "measure-bridge": MeasureBridgeIcon,
  "process-design-bridge": ProcessDesignBridgeIcon,
  autops: AutopsContentIcon,
};

// Traducciones para textos estáticos
const translations: Record<
  Language,
  {
    closeModal: string;
    prevService: string;
    nextService: string;
    workingTitle: string;
    workingDesc: string;
    workingNote: string;
    benefits: string;
    notSureTitle: string;
    notSureDesc: string;
    requestConsult: string;
    ctaClickHere: string;
    ctaMoreDetails: string;
    programAvailableSoon: string;
    stayTuned: string;
  }
> = {
  es: {
    closeModal: "Cerrar modal",
    prevService: "Servicio anterior",
    nextService: "Siguiente servicio",
    workingTitle: "Estamos trabajando para ti",
    workingDesc:
      "Nuestro equipo está desarrollando nuevos servicios innovadores para complementar este caminio.",
    workingNote: "Mantente atento a nuestras actualizaciones.",
    benefits: "BENEFICIOS",
    notSureTitle: "¿No estás seguro cuál programa es el adecuado?",
    notSureDesc:
      "Nuestros expertos pueden ayudarte a identificar la solución perfecta para tu organización.",
    requestConsult: "Solicitar Consulta Gratuita",
    ctaClickHere: "Haz clic aquí ",
    ctaMoreDetails: "para conocer más detalles del programa",
    programAvailableSoon: "Programa disponible próximamente",
    stayTuned: "Mantente atento a nuestras actualizaciones.",
  },
  en: {
    closeModal: "Close modal",
    prevService: "Previous service",
    nextService: "Next service",
    workingTitle: "We're working for you",
    workingDesc:
      "Our team is developing new innovative services to complement this journey.",
    workingNote: "Stay tuned for our updates.",
    benefits: "BENEFITS",
    notSureTitle: "Not sure which program is right for you?",
    notSureDesc:
      "Our experts can help you identify the perfect solution for your organization.",
    requestConsult: "Request Free Consultation",
    ctaClickHere: "Click here ",
    ctaMoreDetails: "to learn more about the program",
    programAvailableSoon: "Program available soon",
    stayTuned: "Stay tuned for our updates.",
  },
  pt: {
    closeModal: "Fechar modal",
    prevService: "Serviço anterior",
    nextService: "Próximo serviço",
    workingTitle: "Estamos trabalhando para você",
    workingDesc:
      "Nossa equipe está desenvolvendo novos serviços inovadores para complementar esta jornada.",
    workingNote: "Fique atento às nossas atualizações.",
    benefits: "BENEFÍCIOS",
    notSureTitle: "Não tem certeza de qual programa é o ideal?",
    notSureDesc:
      "Nossos especialistas podem ajudá-lo a identificar a solução perfeita para sua organização.",
    requestConsult: "Solicitar Consulta Gratuita",
    ctaClickHere: "Clique aqui ",
    ctaMoreDetails: "para saber mais detalhes do programa",
    programAvailableSoon: "Programa disponível em breve",
    stayTuned: "Fique atento às nossas atualizações.",
  },
};

const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  subtitle,
  services,
  initialServiceIndex = 0,
}) => {
  const navigate = useNavigate();
  const isDesktop = useScreenSize() === "desktop";
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const [currentServiceIndex, setCurrentServiceIndex] =
    useState(initialServiceIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentService = Array.isArray(services)
    ? services[currentServiceIndex]
    : undefined;

  // Navigation functions
  const nextService = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prevService = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentServiceIndex(
      (prev) => (prev - 1 + services.length) % services.length
    );
    setTimeout(() => setIsAnimating(false), 400);
  };

  const goToService = (index: number) => {
    if (isAnimating || index === currentServiceIndex) return;
    setIsAnimating(true);
    setCurrentServiceIndex(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          prevService();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextService();
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, isAnimating]);

  // Reset service index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentServiceIndex(initialServiceIndex);
    }
  }, [isOpen, initialServiceIndex]);

  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = tabsContainerRef.current;
    const activeBtn = container?.querySelectorAll("button")[
      currentServiceIndex
    ] as HTMLElement;
    if (!activeBtn || !container) return;

    const inlineBehavior = isDesktop ? "center" : "start";
    // Scroll into view sólo si existe (y con comportamiento responsivo)
    activeBtn.scrollIntoView({ behavior: "smooth", inline: inlineBehavior });
  }, [currentServiceIndex, isDesktop]);

  if (!isOpen || !currentService) return null;

  const ServiceIcon =
    iconMap[currentService.icon as keyof typeof iconMap] || Target;

  // Traducción de campos de servicio
  const getServiceField = <T,>(
    field: T | Record<Language, T> | undefined
  ): T | undefined => {
    if (!field) return undefined;
    if (
      typeof field === "object" &&
      field !== null &&
      (field as Record<Language, T>)[currentLanguage] !== undefined
    ) {
      return (field as Record<Language, T>)[currentLanguage];
    }
    return field as T;
  };

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContactClick = () => {
    navigate("/");
    onClose();
    setTimeout(() => {
      const element = document.querySelector("footer");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleServiceClick = (service: Service) => {
    if (service.isActive && service.route) {
      navigate(service.route);
    }
  };

  const showComingSoon = services.some((service) => isComingSoon(service));

  if (!isOpen || !currentService) return null;

  // Traducción de campos del servicio actual
  const serviceName = getServiceField(currentService.name) || "";
  const serviceLongDescription =
    getServiceField(currentService.longDescription) || [];
  const serviceBenefits = getServiceField(currentService.benefits) || [];

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-[var(--color-bg)] rounded-2xl sm:rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] p-4 sm:p-8 border-b border-blue-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)]"></div>
          <div className="absolute inset-0 opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div>
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-wide">
                    {getServiceField(subtitle)}
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="group p-2 sm:p-3 hover:bg-white/20 rounded-xl sm:rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                aria-label={t.closeModal}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Enhanced Navigation Tabs - Mobile Optimized */}
            {!showComingSoon && (
              <div className="flex items-center justify-between">
                {/* Prev arrow: only visible on lg+ */}
                <button
                  onClick={prevService}
                  disabled={isAnimating}
                  className="hidden lg:inline-flex group p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 disabled:opacity-50 backdrop-blur-sm border border-white/20"
                  aria-label={t.prevService}
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>

                {/* Swipeable Tabs */}
                <div
                  className="flex-1 mx-2 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory scroll-smooth px-3"
                  ref={tabsContainerRef}
                >
                  {/* justify-start on small screens, center on lg+ */}
                  <div className="flex space-x-3 lg:space-x-4 justify-start lg:justify-center">
                    {services.map((service, index) => {
                      const isActive = index === currentServiceIndex;
                      const tabName = getServiceField(service.name) || "";
                      const tabSubtitle =
                        getServiceField(service.subtitle) || "";
                      return (
                        <button
                          key={service.id}
                          onClick={() => goToService(index)}
                          className={`snap-start flex-shrink-0 min-w-[6rem] lg:min-w-0 px-3 sm:px-4 py-2 mb-2 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm transform hover:scale-105 first:ml-1 last:mr-4 ${
                            isActive
                              ? "bg-white text-blue-700 border-white"
                              : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                          }`}
                        >
                          {tabSubtitle && (
                            <span className="block truncate text-xs sm:text-sm mt-1">
                              {tabSubtitle}
                            </span>
                          )}
                          <span className="block truncate text-sm sm:text-base font-bold">
                            {tabName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Next arrow: only visible on lg+ */}
                <button
                  onClick={nextService}
                  disabled={isAnimating}
                  className="hidden lg:inline-flex group p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 disabled:opacity-50 backdrop-blur-sm border border-white/20"
                  aria-label={t.nextService}
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>

        {showComingSoon ? (
          <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center mb-6 shadow-lg">
              <div className="relative">
                <Wrench className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              {t.workingTitle}
            </h3>

            <p className="text-[var(--color-text)] text-lg leading-relaxed mb-6 max-w-md">
              {t.workingDesc}
            </p>

            <div className="mt-8 text-sm text-[var(--color-text)] opacity-75">
              {t.stayTuned}
            </div>
          </div>
        ) : currentService.working ? (
          <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center mb-6 shadow-lg">
              <div className="relative">
                <Wrench className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              {t.workingTitle}
            </h3>

            <p className="text-[var(--color-text)] text-lg leading-relaxed mb-6 max-w-md">
              {t.workingDesc}
            </p>

            <div className="mt-8 text-sm text-[var(--color-text)] opacity-75">
              {t.stayTuned}
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(95vh-200px)] sm:max-h-[calc(90vh-250px)]">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Service Details - Enhanced Design */}
              <div className="xl:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Service Header with Animation */}
                <div
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-gradient-to-r from-white to-white rounded-2xl sm:rounded-3xl border border-blue-100/50 shadow-lg cursor-pointer"
                  onClick={() => handleServiceClick(currentService)}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      currentService.color ||
                      "from-[var(--color-secondary)] to-[var(--color-accent)]"
                    } flex items-center justify-center shadow-lg`}
                  >
                    <ServiceIcon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                  </div>

                  {/* Title */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-primary)]">
                      {serviceName}
                    </h3>
                  </div>

                  {serviceName.includes("FlowStable") && (
                    <div className="z-10 max-w-[350px] sm:max-w-[350px] mx-auto flex justify-start mb-12">
                      <div className="bg-gradient-to-r from-white to-white shadow-xl rounded-lg sm:rounded-xl border border-white/20 overflow-hidden w-full">
                        {/* Content container */}
                        <div className="p-2 sm:p-4 space-y-2 sm:space-y-3">
                          {/* First row: "En asociación con" + R&G Logo */}
                          <div className="flex items-start justify-between gap-2 sm:gap-3">
                            <div className="flex flex-col flex-1 items-start">
                              <p className="text-xs text-gray-700 font-medium leading-tight">
                                {currentLanguage === Language.SPANISH
                                  ? "En asociación con"
                                  : currentLanguage === Language.ENGLISH
                                  ? "In partnership with"
                                  : "Em associação com"}
                              </p>
                              <p className="text-xs text-gray-600 font-medium leading-tight">
                                {currentLanguage === Language.SPANISH
                                  ? "para la licencia"
                                  : currentLanguage === Language.ENGLISH
                                  ? "for license"
                                  : "para a licença"}
                              </p>
                              <div className="flex items-center justify-center mt-2">
                                <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-lg w-full">
                                  <div className="text-center">
                                    <span className="font-light text-sm sm:text-sm tracking-wide">
                                      Stable Ops
                                    </span>
                                    <sup className="text-xs ml-0.5 font-normal">
                                      ™
                                    </sup>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src={RandG}
                              alt="R&G"
                              className="h-8 sm:h-12 w-auto object-contain flex-shrink-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Description with Enhanced Typography */}
                <div className="space-y-6">
                  {Array.isArray(serviceLongDescription) &&
                    serviceLongDescription.map((desc, index) => (
                      <p
                        key={index}
                        className="text-[var(--color-text)] mb-4 leading-relaxed text-lg"
                      >
                        {desc}
                      </p>
                    ))}
                </div>

                {/* Enhanced CTA Button */}
                <div className="flex justify-center">
                  {currentService.isActive ? (
                    <div className="mt-8 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] cursor-pointer hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 group/cta">
                      <p
                        className="text-sm text-center group-hover/cta:text-white transition-colors"
                        onClick={() => handleServiceClick(currentService)}
                      >
                        <span className="font-semibold text-[var(--color-secondary)] group-hover/cta:text-white">
                          {t.ctaClickHere}
                        </span>
                        {t.ctaMoreDetails} {serviceName}.
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

                {/* Service Diagram with Enhanced Container */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm border border-gray-100">
                  {renderServiceIcon(currentService.id)}
                </div>
              </div>

              {/* Benefits Section - Enhanced Design */}
              <div className="xl:col-span-1 order-first xl:order-last">
                <div className="sticky top-0">
                  <div className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-red-400/20 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20"></div>

                    <div className="relative z-10">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                          <Sparkles className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">
                          {t.benefits}
                        </h4>
                      </div>

                      <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                        {Array.isArray(serviceBenefits) &&
                          serviceBenefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <p className="text-xs sm:text-sm leading-relaxed font-medium">
                                {benefit}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  {isDesktop && (
                    <div className="mt-8 p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
                      <div className="text-center">
                        <h4 className="font-bold text-[var(--color-primary)] mb-2">
                          {t.notSureTitle}
                        </h4>
                        <p className="text-[var(--color-text)] mb-4">
                          {t.notSureDesc}
                        </p>
                        <button
                          className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--color-secondary)] transition-colors"
                          onClick={handleContactClick}
                        >
                          {t.requestConsult}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {!isDesktop && (
              <div className="mt-8 p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
                <div className="text-center">
                  <h4 className="font-bold text-[var(--color-primary)] mb-2">
                    {t.notSureTitle}
                  </h4>
                  <p className="text-[var(--color-text)] mb-4">
                    {t.notSureDesc}
                  </p>
                  <button
                    className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--color-secondary)] transition-colors"
                    onClick={handleContactClick}
                  >
                    {t.requestConsult}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesModal;
