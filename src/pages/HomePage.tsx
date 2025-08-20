import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingNavigation from "../components/FloatingNavigation";
import BackgroundCarousel from "../components/BackgroundCarousel";
import { carouselSlides } from "../data/carouselSlides";
import ContactFooter from "../components/Footer";
import LinkedInCard from "../components/LinkedInCard";
import EvolutionPath from "../components/EvolutionPath";
import ScrollIndicator from "../components/ScrollIndicator";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import SEOHead from "../components/SEOHead";

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutUsClick = () => {
    navigate("/sobre-nosotros");
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <SEOHead 
        title="LYSPAS & CO - Consultoría Lean y Mejora Continua | Líderes en Argentina"
        description="Especialistas en consultoría Lean con +13,000 seguidores. Programas WasteZero™, FlowStable™, 5S Plus™, Kaizen Action™. Reducimos desperdicios, optimizamos procesos industriales. Resultados garantizados en Argentina y Latinoamérica."
        keywords="consultoría lean, mejora continua, reducción desperdicios, optimización procesos, WasteZero, FlowStable, 5S Plus, Kaizen Action, consultor lean Argentina, Rosario Santa Fe, eficiencia industrial, productividad, transformación lean, Six Sigma"
      />
      <FloatingNavigation />

      {/* Hero Section */}
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

        {/* Hero Content */}
        <div
          className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            LYSPAS & CO.
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed">
            Continuous Improvement Solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleAboutUsClick}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] hover:scale-105"
            >
              {currentLanguage === Language.SPANISH
                ? "Sobre Nosotros"
                : currentLanguage === Language.ENGLISH
                ? "About Us"
                : "Sobre Nós"}
            </button>
            <button
              onClick={scrollToServices}
              className="group bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[var(--color-primary)] hover:scale-105 hover:shadow-2xl"
            >
              {currentLanguage === Language.SPANISH
                ? "Comenzar"
                : currentLanguage === Language.ENGLISH
                ? "Get Started"
                : "Começar"}
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

      {/* Services Section */}
      <EvolutionPath />

      {/* Video Section */}
      {/* <section
        id="sobre-nosotros"
        className="py-20 px-4 bg-[var(--color-surface)]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
            Te contamos un poco más sobre nosotros
          </h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="LYSPAS & CO - Continuous Improvement Solutions"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* LinkedIn Section */}
      <LinkedInCard />

      {/* Contact Form Footer */}
      <ContactFooter />

      {/* Services Modal */}
      <FloatingWhatsAppCTA />
    </div>
  );
};

export default HomePage;
