"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import RandG from "../assets/RandG.png";
import IndiaPresentationQR from "../assets/QR-india-presentation.jpeg";
import { useScreenSize } from "../hooks/useScreenSize";

interface BackgroundCarouselProps {
  slides: string[][]; // Array of slides, each slide is an array of 5 images
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const carouselTranslations: Record<
  Language,
  {
    previous: string;
    next: string;
    backgroundImage: (n: number) => string;
    goToSlide: (n: number) => string;
    inPartnership: string;
    forLicense: string;
  }
> = {
  es: {
    previous: "Anterior",
    next: "Siguiente",
    backgroundImage: (n) => `Imagen de fondo ${n} de LYSPAS & CO`,
    goToSlide: (n) => `Ir al slide ${n}`,
    inPartnership: "En asociación con",
    forLicense: "para la licencia",
  },
  en: {
    previous: "Previous",
    next: "Next",
    backgroundImage: (n) => `Background image ${n} of LYSPAS & CO`,
    goToSlide: (n) => `Go to slide ${n}`,
    inPartnership: "In partnership with",
    forLicense: "for license",
  },
  pt: {
    previous: "Anterior",
    next: "Próximo",
    backgroundImage: (n) => `Imagem de fundo ${n} da LYSPAS & CO`,
    goToSlide: (n) => `Ir para o slide ${n}`,
    inPartnership: "Em associação com",
    forLicense: "para a licença",
  },
};

export default function BackgroundCarousel({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}: BackgroundCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isDesktop = useScreenSize() === "desktop";

  // Idioma actual
  const { currentLanguage } = useLanguage();
  const t = carouselTranslations[currentLanguage];

  // Detectar si estamos en mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Para mobile, usamos solo el primer slide (slides[0])
  // Para desktop/tablet, usamos todos los slides
  const activeSlides = isMobile ? slides[0] || [] : slides;
  const totalSlides = activeSlides.length;

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || totalSlides === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, totalSlides]);

  // Reset currentSlide cuando cambie el modo (mobile/desktop) o el idioma
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile, currentLanguage]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="relative w-full h-full">
        {/* Desktop/Tablet: Cada slide tiene 5 imágenes */}
        <div className="hidden md:block relative w-full h-full">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                slideIndex === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid grid-cols-5 h-full">
                {slide.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label={t.backgroundImage(imageIndex + 1)}
                  >
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Solo las imágenes del primer slide (slides[0]) */}
        <div className="md:hidden relative w-full h-full">
          {slides[0] &&
            slides[0].map((image, imageIndex) => (
              <div
                key={imageIndex}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  imageIndex === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="relative overflow-hidden h-full"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  role="img"
                  aria-label={t.backgroundImage(imageIndex + 1)}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </div>
            ))}
        </div>

        {/* Navigation Controls */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
              aria-label={t.previous}
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
              aria-label={t.next}
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={t.goToSlide(index + 1)}
            />
          ))}
        </div>

        {/* Integrated Association Badge */}
        {isDesktop && (
          <>
            {/* Association + QR badge, now combined and visible on desktop */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 flex flex-col gap-3 items-end max-w-[270px]">
              {/* Association badge */}
              <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-lg sm:rounded-xl border border-white/20 overflow-hidden w-full max-w-[250px]">
                <div className="p-2 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between gap-2 sm:gap-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-700 font-medium leading-tight">
                        {t.inPartnership}
                      </p>
                      <p className="text-xs text-gray-600 font-medium leading-tight">
                        {t.forLicense}
                      </p>
                    </div>
                    <img
                      src={RandG}
                      alt="R&G"
                      className="h-8 sm:h-12 w-auto object-contain flex-shrink-0"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-lg w-full">
                      <div className="text-center">
                        <span className="font-light text-sm sm:text-xl tracking-wide">
                          Stable Ops
                        </span>
                        <sup className="text-xs ml-0.5 font-normal">™</sup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* QR badge */}
              <div className="bg-gradient-to-br from-[var(--color-primary)]/90 to-[var(--color-accent)]/80 p-1 rounded-lg shadow-xl w-full max-w-[255px] flex flex-col items-center">
                <div className="bg-white/90 rounded-xl px-4 py-3 flex flex-col items-center">
                  <p className="text-xs sm:text-sm text-[var(--color-primary)] font-semibold text-center mb-2 tracking-wide drop-shadow-sm">
                    {currentLanguage === Language.SPANISH
                      ? "Escaneá el QR para seguir la presentación en India"
                      : currentLanguage === Language.ENGLISH
                      ? "Scan the QR to follow the presentation in India"
                      : "Escaneie o QR para acompanhar a apresentação na Índia"}
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="p-2 bg-white rounded-lg shadow-lg border border-[var(--color-border)]">
                      <img
                        src={IndiaPresentationQR}
                        alt="India Presentation QR"
                        className="h-16 sm:h-20 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                        style={{
                          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))",
                        }}
                      />
                    </div>
                  </div>
                  <span className="mt-2 text-[10px] text-gray-500 text-center italic">
                    {currentLanguage === Language.SPANISH
                      ? "¡Acceso instantáneo desde tu móvil!"
                      : currentLanguage === Language.ENGLISH
                      ? "Instant access from your phone!"
                      : "Acesso instantâneo pelo celular!"}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
