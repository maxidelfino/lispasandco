"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BackgroundCarouselProps {
  slides: string[][]; // Array of slides, each slide is an array of 5 images
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export default function BackgroundCarousel({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}: BackgroundCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  // Reset currentSlide cuando cambie el modo (mobile/desktop)
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

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
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
