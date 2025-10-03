import React, { useState, useEffect } from "react";
import BackgroundCarousel from "./BackgroundCarousel";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import ScrollIndicator from "./ScrollIndicator";
import RandG from "../assets/RandG.png";
import IndiaPresentationQR from "../assets/QR-india-presentation.jpeg";
import { useScreenSize } from "../hooks/useScreenSize";

interface HomePageHeroProps {
  carouselSlides: string[][];
}

const HomePageHero: React.FC<HomePageHeroProps> = ({ carouselSlides }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const isDesktop = useScreenSize() === "desktop";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <BackgroundCarousel
        slides={carouselSlides}
        autoPlay={true}
        autoPlayInterval={5000}
        className="z-0"
      />

      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          LYSPAS & CO.
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-4 leading-relaxed">
          {currentLanguage === Language.SPANISH
            ? "Acompañamos a las empresas en su camino de transformación y mejora continua"
            : currentLanguage === Language.ENGLISH
            ? "We help companies grow through transformation and continuous improvement."
            : "Acompanhamos as empresas em sua jornada de transformação e melhoria contínua"}
        </p>
        {isDesktop && (
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            {currentLanguage === Language.SPANISH
              ? "“Desde lo técnico hasta lo estratégico, diseñamos soluciones reales y sostenibles para cualquier industria y tamaño de organización”"
              : currentLanguage === Language.ENGLISH
              ? "“From hands-on to big-picture, we create practical, lasting solutions for any business, in any industry.”"
              : "“Do aspecto técnico ao estratégico, projetamos soluções reais e sustentáveis para qualquer indústria e tamanho de organização.”"}
          </p>
        )}
        {!isDesktop && (
          <div className="z-10 flex flex-row justify-center items-stretch gap-4 max-w-[480px] mx-auto mb-12">
            <div className="flex-1 flex justify-center">
              <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-lg sm:rounded-xl border border-white/20 overflow-hidden w-full max-w-[200px] sm:max-w-[250px]">
                {/* Content container */}
                <div className="p-2 sm:p-4 space-y-2 sm:space-y-3">
                  {/* First row: "En asociación con" + R&G Logo */}
                  <div className="flex items-center justify-between gap-2 sm:gap-3">
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
                    </div>
                    <img
                      src={RandG}
                      alt="R&G"
                      className="h-8 sm:h-12 w-auto object-contain flex-shrink-0"
                    />
                  </div>

                  {/* Stable Ops™ */}
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
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-gradient-to-br from-[var(--color-primary)]/90 to-[var(--color-accent)]/80 p-1 rounded-2xl shadow-xl w-full max-w-[220px] sm:max-w-[270px] flex flex-col items-center">
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
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="group bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[var(--color-primary)] hover:scale-105 hover:shadow-2xl"
          >
            {currentLanguage === Language.SPANISH
              ? "Conocé Nuestros Programas"
              : currentLanguage === Language.ENGLISH
              ? "Discover Our Programs"
              : "Conheça Nossos Programas"}
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("footer");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] hover:scale-105"
          >
            {currentLanguage === Language.SPANISH
              ? "Hablemos de tu Empresa"
              : currentLanguage === Language.ENGLISH
              ? "Let's Talk About Your Company"
              : "Vamos Falar da Sua Empresa"}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator
        scrollToContent={scrollToServices}
        label={
          currentLanguage === Language.SPANISH
            ? "Desliza hacia abajo o toca aquí para conocer más"
            : currentLanguage === Language.ENGLISH
            ? "Scroll down or tap here to learn more"
            : "Deslize para baixo ou toque aqui para saber mais"
        }
      />
    </section>
  );
};

export default HomePageHero;
