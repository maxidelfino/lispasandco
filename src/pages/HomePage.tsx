import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  // Linkedin,
  // Mail,
  // Phone,
  // MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingNavigation from "../components/FloatingNavigation";
// import ServicesModal from "../components/ServicesModal";
import BackgroundCarousel from "../components/BackgroundCarousel";
import { carouselSlides } from "../data/carouselSlides";
import ContactFooter from "../components/Footer";
import LinkedInCard from "../components/LinkedInCard";
import EvolutionPath from "../components/EvolutionPath";
import ScrollIndicator from "../components/ScrollIndicator";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";

const HomePage: React.FC = () => {
  // const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalData, setModalData] = useState({
  //   title: "",
  //   subtitle: "",
  //   servicesData: [],
  // });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // const handleCardClick = (card: any) => {
  //   setModalData({
  //     title: card.title,
  //     subtitle: card.subtitle,
  //     servicesData: card.servicesData || [],
  //   });
  //   setModalOpen(true);
  // };

  const handleAboutUsClick = () => {
    navigate("/sobre-nosotros");
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
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
              Sobre Nosotros
            </button>
            <button
              onClick={scrollToServices}
              className="group bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[var(--color-primary)] hover:scale-105 hover:shadow-2xl"
            >
              Comenzar
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 inset-x-0 flex justify-center z-10 animate-bounce">
          <button
            onClick={scrollToServices}
            className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div> */}
        <ScrollIndicator
          scrollToContent={scrollToServices}
          label="Desliza hacia abajo o toca aquí para conocer más"
        />
      </section>

      {/* Services Section */}
      <EvolutionPath />

      {/* <section id="services-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              Ofrecemos un camino de evolución organizacional
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-secondary)] italic max-w-2xl mx-auto mb-8">
              “Cada empresa tiene su punto de partida. Nosotros te acompañamos
              desde ahí.”
            </p>
            <p className="text-xl text-[var(--color-text)] max-w-2xl mx-auto">
              Selecciona tu camino
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
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => handleCardClick(card)}
              >
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                    {card.subtitle}
                  </h3>
                  <div className="space-y-2 text-[var(--color-text)]">
                    <p className="font-medium">{card.description}</p>
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    activeCard === card.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-[var(--color-border)] pt-6">
                    {card.quote && (
                      <blockquote className="text-[var(--color-secondary)] font-medium italic mb-4">
                        {card.quote}
                      </blockquote>
                    )}
                    <div className="space-y-3">
                      {card.details.map((detail, index) => (
                        <p
                          key={index}
                          className="text-sm text-[var(--color-text)] leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 text-[var(--color-border)] group-hover:text-[var(--color-secondary)] transition-colors">
                  <div className="text-xs font-medium">
                    Click para ver programas
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
      {/* <section id="comparar" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-12">
            Conecta con nosotros
          </h2>

          <div className="bg-[var(--color-surface)] rounded-2xl shadow-xl p-8 border border-[var(--color-border)]">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-[var(--color-secondary)] rounded-full flex items-center justify-center">
                <Linkedin className="w-10 h-10 text-white" />
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                LYSPAS & CO.
              </h3>
              <p className="text-[var(--color-text)] mb-4">
                No existen soluciones plug and play...
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-[var(--color-text)]">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Rosario, Santa Fe, Argentina
                </span>
                <span>•</span>
                <a
                  href="#"
                  className="text-[var(--color-secondary)] hover:underline"
                >
                  Información de contacto
                </a>
              </div>
              <p className="text-sm text-[var(--color-text)] mt-2">
                13,330 seguidores • Más de 500 contactos
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)] transition-colors">
                Ver perfil
              </button>
              <button className="border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition-all">
                Mensaje
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form Footer */}
      <ContactFooter />
      {/* <footer
        id="contacto"
        className="bg-[var(--color-primary)] text-white py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
            <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto"></div>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Número de teléfono"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                placeholder="Mensaje"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-secondary)] transition-all duration-300 hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>

          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <div className="flex justify-center space-x-8 mb-6">
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@lyspas.com</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+54 341 123 4567</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
            <p className="text-white/70">
              © {new Date().getFullYear()} LYSPAS & CO. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer> */}

      {/* Services Modal */}
      {/* <ServicesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        subtitle={modalData.subtitle}
        servicesData={modalData.servicesData || []} // Ensure servicesData is passed correctly
      /> */}
      <FloatingWhatsAppCTA />
    </div>
  );
};

export default HomePage;
