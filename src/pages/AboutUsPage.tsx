import React, { useEffect, useState } from "react";
import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  Heart,
  Zap,
  Shield,
  Compass,
  Network,
} from "lucide-react";
import FloatingNavigation from "../components/FloatingNavigation";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";

const AboutUsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector("footer");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleServicesClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("services-section");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useScrollToTop();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const valores = [
    {
      id: "practicidad",
      icon: Zap,
      title: "Practicidad sin atajos",
      description:
        "Creemos en soluciones simples y aplicables, pero sin caer en fórmulas mágicas. Adaptamos, probamos y luego estandarizamos.",
      color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    },
    {
      id: "involucramiento",
      icon: Heart,
      title: "Involucramiento real",
      description:
        "Trabajamos con los equipos, no sobre ellos. Nos comprometemos con los problemas y los resultados, caminando al lado del cliente.",
      color: "from-[var(--color-accent)] to-[var(--color-secondary)]",
    },
    {
      id: "disciplina",
      icon: Shield,
      title: "Disciplina operativa",
      description:
        "El orden y la constancia son la base de la mejora. Ayudamos a construir hábitos, no solo a resolver urgencias.",
      color: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    },
    {
      id: "rigurosidad",
      icon: Target,
      title: "Rigurosidad con criterio",
      description:
        "Aplicamos herramientas estadísticas y de gestión con fundamento, pero siempre con sentido común y foco en la utilidad.",
      color: "from-[var(--color-secondary)] to-[var(--color-primary)]",
    },
    {
      id: "vision-end-to-end",
      icon: Compass,
      title: "Visión end-to-end",
      description:
        "Miramos los procesos completos, desde el origen hasta el cliente final. Aportamos valor donde otros solo ven silos.",
      color: "from-[var(--color-accent)] to-[var(--color-primary)]",
    },
    {
      id: "transformacion",
      icon: Users,
      title: "Transformación desde adentro",
      description:
        "Creemos que los verdaderos cambios vienen del propio equipo. Nuestro rol es acompañar, no reemplazar.",
      color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    },
    {
      id: "conectividad",
      icon: Network,
      title: "Conectividad humana y cultural",
      description:
        "Valoramos la integración entre personas de distintas regiones, culturas y funciones. La diversidad es una fuente clave de ideas, entendimiento y soluciones más completas.",
      color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    },
  ];

  const objetivos = [
    "Desarrollar programas aplicables, claros y con alto impacto en la operación diaria de las empresas.",
    "Expandir nuestras soluciones a sectores diversos, con foco en la agroindustria, manufactura y servicios.",
    "Consolidar alianzas con universidades, cámaras empresariales y redes de innovación.",
    "Formar profesionales líderes en mejora continua con herramientas reales y enfoque práctico.",
    "Acompañar procesos de cambio organizacional respetando la cultura de cada empresa.",
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <FloatingNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 transform rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
        </div>

        {/* Content */}
        <div
          className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mr-2 animate-pulse"></div>
            Ficha de Identidad Institucional
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">LYSPAS & CO</span>
            <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
              Continuous Improvement Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Conoce nuestra identidad, valores y compromiso con la mejora
            continua
          </p>
        </div>
      </section>

      {/* Misión Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-[var(--color-primary)]">
                  Misión
                </h2>
              </div>
              <div className="space-y-6 text-lg text-[var(--color-text)] leading-relaxed">
                <p>
                  Implementamos sistemas de gestión basados en prácticas de
                  mejora continua, adaptados a cada cliente. Trabajamos de
                  manera personalizada, desde el inicio hasta el final de la
                  cadena productiva, generando valor a través del orden, la
                  estandarización y la estabilidad operativa.
                </p>
                <p className="font-semibold text-[var(--color-secondary)]">
                  Nuestro propósito es ayudar a las organizaciones a construir
                  disciplina operacional y de esa manera generar valor
                  sostenible y sin inversiones.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-8 shadow-xl border border-[var(--color-border)]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">
                      Personalizado
                    </h4>
                    <p className="text-sm text-[var(--color-text)]">
                      Adaptado a cada cliente
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">
                      End-to-End
                    </h4>
                    <p className="text-sm text-[var(--color-text)]">
                      Cadena completa
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">
                      Disciplina
                    </h4>
                    <p className="text-sm text-[var(--color-text)]">
                      Operacional sólida
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">
                      Valor
                    </h4>
                    <p className="text-sm text-[var(--color-text)]">
                      Sostenible y real
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visión Section */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-8 text-white shadow-xl">
                  <div className="flex items-center mb-6">
                    <Globe className="w-12 h-12 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold">Empresa Global</h3>
                      <p className="text-white/80">Reconocida mundialmente</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
                      <span>Soluciones personalizadas</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
                      <span>Estándares de calidad</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
                      <span>Conectividad global</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-[var(--color-primary)]">
                  Visión
                </h2>
              </div>
              <div className="space-y-6 text-lg text-[var(--color-text)] leading-relaxed">
                <p>
                  Convertirnos en una empresa global, reconocida por brindar
                  soluciones personalizadas y a la vez estandarizadas a los
                  desafíos de productividad en cada industria.
                </p>
                <p className="font-semibold text-[var(--color-secondary)]">
                  Queremos que LYSPAS & CO sea sinónimo de conectividad entre
                  personas, entre negocios y entre regiones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos Estratégicos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              Objetivos Estratégicos
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
              Nuestras metas claras para generar impacto real en cada industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objetivos.map((objetivo, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-[var(--color-text)] leading-relaxed group-hover:text-[var(--color-primary)] transition-colors">
                    {objetivo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Institucionales */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              Valores Institucionales
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
              Los principios que guían cada una de nuestras acciones y
              decisiones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor) => {
              const Icon = valor.icon;
              const isActive = activeSection === valor.id;

              return (
                <div
                  key={valor.id}
                  className={`relative bg-white rounded-2xl p-8 border border-[var(--color-border)] transition-all duration-500 ${
                    isActive
                      ? "shadow-2xl scale-105 border-[var(--color-secondary)]"
                      : "shadow-lg hover:shadow-xl hover:scale-102"
                  }`}
                  onMouseEnter={() => setActiveSection(valor.id)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      valor.color
                    } flex items-center justify-center mb-6 transition-transform duration-300 ${
                      isActive ? "scale-110" : ""
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                    {valor.title}
                  </h3>

                  <p className="text-[var(--color-text)] leading-relaxed">
                    {valor.description}
                  </p>

                  {/* Hover indicator */}
                  <div
                    className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--color-secondary)] scale-100"
                        : "bg-[var(--color-border)] scale-75"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tu organización?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Descubre cómo nuestros valores y metodología pueden impulsar el
              crecimiento sostenible de tu empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
                onClick={handleServicesClick}
              >
                Conocer Nuestros Programas
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] hover:scale-105"
                onClick={handleContactClick}
              >
                Contactar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsAppCTA />
    </div>
  );
};

export default AboutUsPage;
