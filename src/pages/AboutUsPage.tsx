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
import { useLanguage } from "../contexts/LanguageContext";
import SEOHead from "../components/SEOHead";

type MisionCard = {
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
};

type VisionCard = {
  title: string;
  subtitle: string;
  bullets: string[];
};

type Valor = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
};

type Translation = {
  badge: string;
  mainTitle: string;
  mainSubtitle: string;
  heroSubtitle: string;
  mision: string;
  misionP1: string;
  misionP2: string;
  misionCards: MisionCard[];
  vision: string;
  visionP1: string;
  visionP2: string;
  visionCard: VisionCard;
  objetivosTitle: string;
  objetivosSubtitle: string;
  objetivos: string[];
  valoresTitle: string;
  valoresSubtitle: string;
  valores: Valor[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBtn1: string;
  ctaBtn2: string;
};

const translations: Record<string, Translation> = {
  es: {
    badge: "Ficha de Identidad Institucional",
    mainTitle: "LYSPAS & CO",
    mainSubtitle: "Continuous Improvement Solutions",
    heroSubtitle: "Conoce nuestra identidad, valores y compromiso con la mejora continua",
    mision: "Misión",
    misionP1:
      "Implementamos sistemas de gestión basados en prácticas de mejora continua, adaptados a cada cliente. Trabajamos de manera personalizada, desde el inicio hasta el final de la cadena productiva, generando valor a través del orden, la estandarización y la estabilidad operativa.",
    misionP2:
      "Nuestro propósito es ayudar a las organizaciones a construir disciplina operacional y de esa manera generar valor sostenible y sin inversiones.",
    misionCards: [
      {
        title: "Personalizado",
        desc: "Adaptado a cada cliente",
        icon: Users,
        color: "bg-[var(--color-secondary)]",
      },
      {
        title: "End-to-End",
        desc: "Cadena completa",
        icon: ArrowRight,
        color: "bg-[var(--color-accent)]",
      },
      {
        title: "Disciplina",
        desc: "Operacional sólida",
        icon: Shield,
        color: "bg-[var(--color-primary)]",
      },
      {
        title: "Valor",
        desc: "Sostenible y real",
        icon: Award,
        color: "bg-[var(--color-secondary)]",
      },
    ],
    vision: "Visión",
    visionP1:
      "Convertirnos en una empresa global, reconocida por brindar soluciones personalizadas y a la vez estandarizadas a los desafíos de productividad en cada industria.",
    visionP2:
      "Queremos que LYSPAS & CO sea sinónimo de conectividad entre personas, entre negocios y entre regiones.",
    visionCard: {
      title: "Empresa Global",
      subtitle: "Reconocida mundialmente",
      bullets: [
        "Soluciones personalizadas",
        "Estándares de calidad",
        "Conectividad global",
      ],
    },
    objetivosTitle: "Objetivos Estratégicos",
    objetivosSubtitle: "Nuestras metas claras para generar impacto real en cada industria",
    objetivos: [
      "Desarrollar programas aplicables, claros y con alto impacto en la operación diaria de las empresas.",
      "Expandir nuestras soluciones a sectores diversos, con foco en la agroindustria, manufactura y servicios.",
      "Consolidar alianzas con universidades, cámaras empresariales y redes de innovación.",
      "Formar profesionales líderes en mejora continua con herramientas reales y enfoque práctico.",
      "Acompañar procesos de cambio organizacional respetando la cultura de cada empresa.",
    ],
    valoresTitle: "Valores Institucionales",
    valoresSubtitle: "Los principios que guían cada una de nuestras acciones y decisiones",
    valores: [
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
    ],
    ctaTitle: "¿Listo para transformar tu organización?",
    ctaSubtitle:
      "Descubre cómo nuestros valores y metodología pueden impulsar el crecimiento sostenible de tu empresa",
    ctaBtn1: "Conocer Nuestros Programas",
    ctaBtn2: "Contactar Ahora",
  },
  en: {
    badge: "Institutional Identity Sheet",
    mainTitle: "LYSPAS & CO",
    mainSubtitle: "Continuous Improvement Solutions",
    heroSubtitle: "Discover our identity, values, and commitment to continuous improvement",
    mision: "Mission",
    misionP1:
      "We implement management systems based on continuous improvement practices, tailored to each client. We work personally, from the beginning to the end of the production chain, generating value through order, standardization, and operational stability.",
    misionP2:
      "Our purpose is to help organizations build operational discipline and thus generate sustainable value without investments.",
    misionCards: [
      {
        title: "Personalized",
        desc: "Tailored to each client",
        icon: Users,
        color: "bg-[var(--color-secondary)]",
      },
      {
        title: "End-to-End",
        desc: "Complete chain",
        icon: ArrowRight,
        color: "bg-[var(--color-accent)]",
      },
      {
        title: "Discipline",
        desc: "Solid operations",
        icon: Shield,
        color: "bg-[var(--color-primary)]",
      },
      {
        title: "Value",
        desc: "Sustainable and real",
        icon: Award,
        color: "bg-[var(--color-secondary)]",
      },
    ],
    vision: "Vision",
    visionP1:
      "To become a global company, recognized for providing both personalized and standardized solutions to productivity challenges in every industry.",
    visionP2:
      "We want LYSPAS & CO to be synonymous with connectivity between people, businesses, and regions.",
    visionCard: {
      title: "Global Company",
      subtitle: "Recognized worldwide",
      bullets: [
        "Personalized solutions",
        "Quality standards",
        "Global connectivity",
      ],
    },
    objetivosTitle: "Strategic Objectives",
    objetivosSubtitle: "Our clear goals to generate real impact in every industry",
    objetivos: [
      "Develop applicable, clear programs with high impact on companies' daily operations.",
      "Expand our solutions to diverse sectors, focusing on agribusiness, manufacturing, and services.",
      "Consolidate alliances with universities, business chambers, and innovation networks.",
      "Train leading professionals in continuous improvement with real tools and a practical approach.",
      "Support organizational change processes while respecting each company's culture.",
    ],
    valoresTitle: "Institutional Values",
    valoresSubtitle: "The principles that guide each of our actions and decisions",
    valores: [
      {
        id: "practicidad",
        icon: Zap,
        title: "Practicality without shortcuts",
        description:
          "We believe in simple and applicable solutions, but without falling into magic formulas. We adapt, test, and then standardize.",
        color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
      },
      {
        id: "involucramiento",
        icon: Heart,
        title: "Real involvement",
        description:
          "We work with teams, not over them. We commit to problems and results, walking alongside the client.",
        color: "from-[var(--color-accent)] to-[var(--color-secondary)]",
      },
      {
        id: "disciplina",
        icon: Shield,
        title: "Operational discipline",
        description:
          "Order and consistency are the basis of improvement. We help build habits, not just solve emergencies.",
        color: "from-[var(--color-primary)] to-[var(--color-secondary)]",
      },
      {
        id: "rigurosidad",
        icon: Target,
        title: "Rigor with criteria",
        description:
          "We apply statistical and management tools with foundation, but always with common sense and focus on usefulness.",
        color: "from-[var(--color-secondary)] to-[var(--color-primary)]",
      },
      {
        id: "vision-end-to-end",
        icon: Compass,
        title: "End-to-end vision",
        description:
          "We look at complete processes, from the origin to the final client. We add value where others only see silos.",
        color: "from-[var(--color-accent)] to-[var(--color-primary)]",
      },
      {
        id: "transformacion",
        icon: Users,
        title: "Transformation from within",
        description:
          "We believe that real changes come from the team itself. Our role is to accompany, not replace.",
        color: "from-[var(--color-primary)] to-[var(--color-accent)]",
      },
      {
        id: "conectividad",
        icon: Network,
        title: "Human and cultural connectivity",
        description:
          "We value integration between people from different regions, cultures, and functions. Diversity is a key source of ideas, understanding, and more complete solutions.",
        color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
      },
    ],
    ctaTitle: "Ready to transform your organization?",
    ctaSubtitle:
      "Discover how our values and methodology can drive your company's sustainable growth",
    ctaBtn1: "See Our Programs",
    ctaBtn2: "Contact Now",
  },
  pt: {
    badge: "Ficha de Identidade Institucional",
    mainTitle: "LYSPAS & CO",
    mainSubtitle: "Soluções de Melhoria Contínua",
    heroSubtitle: "Conheça nossa identidade, valores e compromisso com a melhoria contínua",
    mision: "Missão",
    misionP1:
      "Implementamos sistemas de gestão baseados em práticas de melhoria contínua, adaptados a cada cliente. Trabalhamos de forma personalizada, do início ao fim da cadeia produtiva, gerando valor por meio da ordem, padronização e estabilidade operacional.",
    misionP2:
      "Nosso propósito é ajudar as organizações a construir disciplina operacional e assim gerar valor sustentável sem investimentos.",
    misionCards: [
      {
        title: "Personalizado",
        desc: "Adaptado a cada cliente",
        icon: Users,
        color: "bg-[var(--color-secondary)]",
      },
      {
        title: "End-to-End",
        desc: "Cadeia completa",
        icon: ArrowRight,
        color: "bg-[var(--color-accent)]",
      },
      {
        title: "Disciplina",
        desc: "Operação sólida",
        icon: Shield,
        color: "bg-[var(--color-primary)]",
      },
      {
        title: "Valor",
        desc: "Sustentável e real",
        icon: Award,
        color: "bg-[var(--color-secondary)]",
      },
    ],
    vision: "Visão",
    visionP1:
      "Tornar-nos uma empresa global, reconhecida por oferecer soluções personalizadas e ao mesmo tempo padronizadas para os desafios de produtividade em cada setor.",
    visionP2:
      "Queremos que LYSPAS & CO seja sinônimo de conectividade entre pessoas, negócios e regiões.",
    visionCard: {
      title: "Empresa Global",
      subtitle: "Reconhecida mundialmente",
      bullets: [
        "Soluções personalizadas",
        "Padrões de qualidade",
        "Conectividade global",
      ],
    },
    objetivosTitle: "Objetivos Estratégicos",
    objetivosSubtitle: "Nossas metas claras para gerar impacto real em cada setor",
    objetivos: [
      "Desenvolver programas aplicáveis, claros e com alto impacto na operação diária das empresas.",
      "Expandir nossas soluções para setores diversos, com foco em agronegócio, manufatura e serviços.",
      "Consolidar alianças com universidades, câmaras empresariais e redes de inovação.",
      "Formar profissionais líderes em melhoria contínua com ferramentas reais e abordagem prática.",
      "Acompanhar processos de mudança organizacional respeitando a cultura de cada empresa.",
    ],
    valoresTitle: "Valores Institucionais",
    valoresSubtitle: "Os princípios que orientam cada uma de nossas ações e decisões",
    valores: [
      {
        id: "practicidad",
        icon: Zap,
        title: "Praticidade sem atalhos",
        description:
          "Acreditamos em soluções simples e aplicáveis, mas sem recorrer a fórmulas mágicas. Adaptamos, testamos e depois padronizamos.",
        color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
      },
      {
        id: "involucramiento",
        icon: Heart,
        title: "Envolvimento real",
        description:
          "Trabalhamos com as equipes, não sobre elas. Comprometemo-nos com os problemas e resultados, caminhando ao lado do cliente.",
        color: "from-[var(--color-accent)] to-[var(--color-secondary)]",
      },
      {
        id: "disciplina",
        icon: Shield,
        title: "Disciplina operacional",
        description:
          "A ordem e a constância são a base da melhoria. Ajudamos a construir hábitos, não apenas a resolver urgências.",
        color: "from-[var(--color-primary)] to-[var(--color-secondary)]",
      },
      {
        id: "rigurosidad",
        icon: Target,
        title: "Rigor com critério",
        description:
          "Aplicamos ferramentas estatísticas e de gestão com fundamento, mas sempre com bom senso e foco na utilidade.",
        color: "from-[var(--color-secondary)] to-[var(--color-primary)]",
      },
      {
        id: "vision-end-to-end",
        icon: Compass,
        title: "Visão end-to-end",
        description:
          "Olhamos para os processos completos, desde a origem até o cliente final. Agregamos valor onde outros só veem silos.",
        color: "from-[var(--color-accent)] to-[var(--color-primary)]",
      },
      {
        id: "transformacion",
        icon: Users,
        title: "Transformação de dentro para fora",
        description:
          "Acreditamos que as verdadeiras mudanças vêm da própria equipe. Nosso papel é acompanhar, não substituir.",
        color: "from-[var(--color-primary)] to-[var(--color-accent)]",
      },
      {
        id: "conectividad",
        icon: Network,
        title: "Conectividade humana e cultural",
        description:
          "Valorizamos a integração entre pessoas de diferentes regiões, culturas e funções. A diversidade é uma fonte chave de ideias, entendimento e soluções mais completas.",
        color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
      },
    ],
    ctaTitle: "Pronto para transformar sua organização?",
    ctaSubtitle:
      "Descubra como nossos valores e metodologia podem impulsionar o crescimento sustentável da sua empresa",
    ctaBtn1: "Conheça Nossos Programas",
    ctaBtn2: "Contatar Agora",
  },
};

const AboutUsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();

  const t = translations[currentLanguage];

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

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <SEOHead
        title="Sobre Nosotros - Expertos en Mejora Continua | LYSPAS & CO"
        description="Conoce LYSPAS & CO - Expertos en mejora continua con sede en Rosario, Argentina. Misión, visión, valores y compromiso con la transformación empresarial Lean. +13,000 seguidores en LinkedIn nos respaldan."
        keywords="LYSPAS & CO, empresa consultoría, mejora continua Argentina, Rosario Santa Fe, misión visión valores, expertos lean, transformación empresarial, consultoría industrial"
      />
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
            {t.badge}
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
            {t.heroSubtitle}
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
                  {t.mision}
                </h2>
              </div>
              <div className="space-y-6 text-lg text-[var(--color-text)] leading-relaxed">
                <p>
                  {t.misionP1}
                </p>
                <p className="font-semibold text-[var(--color-secondary)]">
                  {t.misionP2}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--color-bg)] to-white rounded-2xl p-8 shadow-xl border border-[var(--color-border)]">
                <div className="grid grid-cols-2 gap-6">
                  {t.misionCards.map(
                    (
                      card,
                      idx
                    ) => {
                      const Icon = card.icon;
                      return (
                        <div className="text-center" key={idx}>
                          <div
                            className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-bold text-[var(--color-primary)] mb-2">
                            {card.title}
                          </h4>
                          <p className="text-sm text-[var(--color-text)]">
                            {card.desc}
                          </p>
                        </div>
                      );
                    }
                  )}
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
                      <h3 className="text-2xl font-bold">{t.visionCard.title}</h3>
                      <p className="text-white/80">{t.visionCard.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {t.visionCard.bullets.map((b, i) => (
                      <div className="flex items-center" key={i}>
                        <CheckCircle className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
                        <span>{b}</span>
                      </div>
                    ))}
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
                  {t.vision}
                </h2>
              </div>
              <div className="space-y-6 text-lg text-[var(--color-text)] leading-relaxed">
                <p>
                  {t.visionP1}
                </p>
                <p className="font-semibold text-[var(--color-secondary)]">
                  {t.visionP2}
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
              {t.objetivosTitle}
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
              {t.objetivosSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.objetivos.map((objetivo, index) => (
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
              {t.valoresTitle}
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
              {t.valoresSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.valores.map((valor) => {
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
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
                onClick={handleServicesClick}
              >
                {t.ctaBtn1}
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] hover:scale-105"
                onClick={handleContactClick}
              >
                {t.ctaBtn2}
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
