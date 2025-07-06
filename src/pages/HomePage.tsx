import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingNavigation from "../components/FloatingNavigation";
import ServicesModal from "../components/ServicesModal";
import {
  servicesData_aplicaciones,
  servicesData_estabilizar,
  servicesData_iniciar,
  servicesData_transformar,
} from "../data/services";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", subtitle: "", servicesData: [] });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Carousel images - 4 slides with 5 images each
  const carouselSlides = [
    [
      "https://images.pexels.com/photos/1267337/pexels-photo-1267337.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267361/pexels-photo-1267361.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108118/pexels-photo-1108118.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267339/pexels-photo-1267339.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    [
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    [
      "https://images.pexels.com/photos/1267334/pexels-photo-1267334.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108092/pexels-photo-1108092.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267329/pexels-photo-1267329.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267348/pexels-photo-1267348.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    [
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  ];

  const evolutionCards = [
    {
      id: "iniciar",
      title: "Iniciar la mejora",
      subtitle: "Etapa 1: Iniciar la mejora",
      description: "Problemas visibles, Foco en el equipo",
      quote: "“El primer paso para dejar de perder valor sin darte cuenta.”",
      details: [
        "Acá comienza todo. En esta etapa se identifican desperdicios, se ordenan los espacios y se entrena a los equipos para que vean oportunidades donde antes solo había rutina.",
        "Ideal para empresas que quieren mejorar pero aún no saben por dónde empezar.",
      ],
      servicesData: servicesData_iniciar,
    },
    {
      id: "estabilizar",
      title: "Estabilizar y profesionalizar",
      subtitle: "Etapa 2: Estabilizar y profesionalizar",
      description: "Procesos, Métricas, Liderazgo",
      quote:
        "“Cuando las cosas ya no alcanzan con funcionar: ahora tienen que funcionar siempre bien.”",
      details: [
        "Una vez que eliminaste lo innecesario, llega el momento de poner foco en la estabilidad, el control de procesos y el empoderamiento del liderazgo operativo.",
        "Esta etapa convierte la mejora en una práctica sistemática y medible.",
      ],
      servicesData: servicesData_estabilizar,
    },
    {
      id: "transformar",
      title: "Transformar la organización",
      subtitle: "Etapa 3: Transformar la organización",
      description: "Alinear estrategia con ejecución",
      quote: "“De las mejoras puntuales a una cultura que transforma todo.”",
      details: [
        "El paso más ambicioso. Aquí se alinean la estrategia, los datos, los procesos y los equipos. La mejora continua ya no es un proyecto: es la forma en la que se gestiona la empresa.",
        "Ideal para quienes buscan escalar, integrar o reinventar su modelo de trabajo.",
      ],
      servicesData: servicesData_transformar,
    },
    {
      id: "aplicaciones",
      title: "Aplicaciones en la industria",
      subtitle: "Etapa 4: Aplicación avanzada",
      description: "Transformación de procesos industriales",
      quote: '"Donde la mejora se convierte en parte del ADN industrial."',
      details: [
        "Implementación de herramientas avanzadas de gestión en líneas de producción y procesos industriales.",
        "Aplicación de modelos de mejora continua adaptados a contextos reales como manufactura, logística o servicios técnicos.",
        "Casos de éxito y resultados concretos: reducción de tiempos muertos, aumento de eficiencia, y mejora de indicadores clave.",
      ],
      servicesData: servicesData_aplicaciones,
    },
  ];

  const scrollToServices = () => {
    const element = document.getElementById("services-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const handleCardClick = (card: any) => {
    setModalData({
      title: card.title,
      subtitle: card.subtitle,
      servicesData: card.servicesData || [],
    });
    setModalOpen(true);
  };

  const handleAboutUsClick = () => {
    navigate("/sobre-nosotros");
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

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
        {/* Background Carousel */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {carouselSlides.map((slide, slideIndex) => (
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

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

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
        <div className="absolute bottom-8 inset-x-0 flex justify-center z-10 animate-bounce">
          <button
            onClick={scrollToServices}
            className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 px-4">
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
                    {/* <p className="font-medium">{card.subtitle}</p> */}
                    <p className="font-medium">{card.description}</p>
                    {/* <p className="text-sm">{card.description}</p> */}
                  </div>
                </div>

                {/* Expanded Content */}
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

                {/* Click indicator */}
                <div className="absolute top-4 right-4 text-[var(--color-border)] group-hover:text-[var(--color-secondary)] transition-colors">
                  <div className="text-xs font-medium">
                    Click para ver programas
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
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
      </section>

      {/* LinkedIn Section */}
      <section id="comparar" className="py-20 px-4">
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
      </section>

      {/* Contact Form Footer */}
      <footer
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
      </footer>

      {/* Services Modal */}
      <ServicesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        subtitle={modalData.subtitle}
        servicesData={modalData.servicesData || []} // Ensure servicesData is passed correctly
      />
    </div>
  );
};

export default HomePage;
