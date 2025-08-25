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
import {
  Cog,
  Factory,
  Truck,
  Wheat,
  Target,
  Rocket,
  Handshake,
  BarChart2,
  Globe2,
  Lightbulb,
  MessageCircle,
  Users,
  Building2,
  Award,
} from "lucide-react";

const SectionCTA: React.FC<{ scrollToServices?: () => void }> = ({
  scrollToServices,
}) => {
  const { currentLanguage } = useLanguage();
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
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
        className="group bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:scale-105"
      >
        {currentLanguage === Language.SPANISH
          ? "Hablemos de tu Empresa"
          : currentLanguage === Language.ENGLISH
          ? "Let's Talk About Your Company"
          : "Vamos Falar da Sua Empresa"}
      </button>
    </div>
  );
};

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
          <p className="text-2xl md:text-3xl text-white/90 mb-4 leading-relaxed">
            {currentLanguage === Language.SPANISH
              ? "Transformamos empresas medianas en organizaciones de clase mundial"
              : currentLanguage === Language.ENGLISH
              ? "We transform medium-sized companies into world-class organizations"
              : "Transformamos empresas médias em organizações de classe mundial"}
          </p>
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            {currentLanguage === Language.SPANISH
              ? "Expertos en llevar la mejora continua a la mediana empresa"
              : currentLanguage === Language.ENGLISH
              ? "Experts in bringing continuous improvement to medium-sized businesses"
              : "Especialistas em levar a melhoria contínua à empresa média"}
          </p>

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

      {/* Services Section */}
      <EvolutionPath />

      {/* Casos de Éxito / Impacto Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              {currentLanguage === Language.SPANISH
                ? "Casos Reales de Impacto"
                : currentLanguage === Language.ENGLISH
                ? "Real Impact Cases"
                : "Casos Reais de Impacto"}
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
              {currentLanguage === Language.SPANISH
                ? "Resultados medibles que transforman operaciones"
                : currentLanguage === Language.ENGLISH
                ? "Measurable results that transform operations"
                : "Resultados mensuráveis que transformam operações"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Caso 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-2">
                  <BarChart2 className="w-8 h-8 text-[var(--color-secondary)]" />
                </div>
                <div className="text-4xl font-bold text-[var(--color-secondary)] mb-2">
                  15%
                </div>
                <div className="text-sm text-[var(--color-text)] uppercase tracking-wide">
                  {currentLanguage === Language.SPANISH
                    ? "Reducción de Costos"
                    : currentLanguage === Language.ENGLISH
                    ? "Cost Reduction"
                    : "Redução de Custos"}
                </div>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Redujimos costos de mantenimiento en una planta agroindustrial en 6 meses implementando FlowStable™"
                  : currentLanguage === Language.ENGLISH
                  ? "Reduced maintenance costs in an agribusiness plant in 6 months implementing FlowStable™"
                  : "Reduzimos custos de manutenção em uma planta agroindustrial em 6 meses implementando FlowStable™"}
              </p>
            </div>

            {/* Caso 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-[var(--color-accent)]" />
                </div>
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">
                  25%
                </div>
                <div className="text-sm text-[var(--color-text)] uppercase tracking-wide">
                  {currentLanguage === Language.SPANISH
                    ? "Mejora en Productividad"
                    : currentLanguage === Language.ENGLISH
                    ? "Productivity Improvement"
                    : "Melhoria na Produtividade"}
                </div>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Incrementamos la eficiencia operativa eliminando desperdicios con WasteZero™ en sector alimentario"
                  : currentLanguage === Language.ENGLISH
                  ? "Increased operational efficiency by eliminating waste with WasteZero™ in food sector"
                  : "Aumentamos a eficiência operacional eliminando desperdícios com WasteZero™ no setor alimentício"}
              </p>
            </div>

            {/* Caso 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                  8
                </div>
                <div className="text-sm text-[var(--color-text)] uppercase tracking-wide">
                  {currentLanguage === Language.SPANISH
                    ? "Meses de Transformación"
                    : currentLanguage === Language.ENGLISH
                    ? "Months of Transformation"
                    : "Meses de Transformação"}
                </div>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Establecimos cultura de mejora continua con LeanBridge™ en empresa logística de 200+ empleados"
                  : currentLanguage === Language.ENGLISH
                  ? "Established continuous improvement culture with LeanBridge™ in logistics company with 200+ employees"
                  : "Estabelecemos cultura de melhoria contínua com LeanBridge™ em empresa logística com 200+ funcionários"}
              </p>
            </div>
          </div>
          <SectionCTA scrollToServices={scrollToServices} />
        </div>
      </section>

      {/* Confían en Nosotros Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              {currentLanguage === Language.SPANISH
                ? "Confían en Nosotros"
                : currentLanguage === Language.ENGLISH
                ? "They Trust Us"
                : "Confiam em Nós"}
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
              {currentLanguage === Language.SPANISH
                ? "Empresas líderes en agroindustria, alimentos y manufactura confían en LYSPAS para su transformación"
                : currentLanguage === Language.ENGLISH
                ? "Leading companies in agribusiness, food and manufacturing trust LYSPAS for their transformation"
                : "Empresas líderes em agroindústria, alimentos e manufatura confiam na LYSPAS para sua transformação"}
            </p>
          </div>

          {/* Testimonios */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-2xl p-8 border border-[var(--color-border)]">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] text-lg">
                    {currentLanguage === Language.SPANISH
                      ? "CEO, Empresa Agroindustrial"
                      : currentLanguage === Language.ENGLISH
                      ? "CEO, Agribusiness Company"
                      : "CEO, Empresa Agroindustrial"}
                  </h4>
                  <p className="text-[var(--color-text)] text-sm">
                    {currentLanguage === Language.SPANISH
                      ? "Sector: Agroindustria"
                      : currentLanguage === Language.ENGLISH
                      ? "Sector: Agribusiness"
                      : "Setor: Agroindústria"}
                  </p>
                </div>
              </div>
              <blockquote className="text-[var(--color-text)] italic text-lg leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Redujimos 15% los costos de mantenimiento en solo 6 meses. LYSPAS nos dio las herramientas y el acompañamiento necesario para lograr resultados sostenibles."
                  : currentLanguage === Language.ENGLISH
                  ? "We reduced maintenance costs by 15% in just 6 months. LYSPAS gave us the tools and support needed to achieve sustainable results."
                  : "Reduzimos 15% dos custos de manutenção em apenas 6 meses. LYSPAS nos deu as ferramentas e o apoio necessários para alcançar resultados sustentáveis."}
              </blockquote>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-secondary)]/10 rounded-2xl p-8 border border-[var(--color-border)]">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mr-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] text-lg">
                    {currentLanguage === Language.SPANISH
                      ? "Director de Operaciones, Sector Alimentario"
                      : currentLanguage === Language.ENGLISH
                      ? "Operations Director, Food Sector"
                      : "Diretor de Operações, Setor Alimentício"}
                  </h4>
                  <p className="text-[var(--color-text)] text-sm">
                    {currentLanguage === Language.SPANISH
                      ? "Sector: Alimentos"
                      : currentLanguage === Language.ENGLISH
                      ? "Sector: Food"
                      : "Setor: Alimentos"}
                  </p>
                </div>
              </div>
              <blockquote className="text-[var(--color-text)] italic text-lg leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "La implementación de WasteZero™ nos permitió identificar y eliminar desperdicios que no veíamos. Incrementamos la productividad en un 25%."
                  : currentLanguage === Language.ENGLISH
                  ? "The implementation of WasteZero™ allowed us to identify and eliminate waste we couldn't see. We increased productivity by 25%."
                  : "A implementação do WasteZero™ nos permitiu identificar e eliminar desperdícios que não víamos. Aumentamos a produtividade em 25%."}
              </blockquote>
            </div>
          </div>
          <SectionCTA scrollToServices={scrollToServices} />
        </div>
      </section>

      {/* Por qué Elegirnos Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              {currentLanguage === Language.SPANISH
                ? "¿Por qué Elegir LYSPAS?"
                : currentLanguage === Language.ENGLISH
                ? "Why Choose LYSPAS?"
                : "Por que Escolher LYSPAS?"}
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
              {currentLanguage === Language.SPANISH
                ? "Nuestras ventajas competitivas que nos convierten en el socio ideal para tu transformación"
                : currentLanguage === Language.ENGLISH
                ? "Our competitive advantages that make us the ideal partner for your transformation"
                : "Nossas vantagens competitivas que nos tornam o parceiro ideal para sua transformação"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ventaja 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {currentLanguage === Language.SPANISH
                    ? "Metodología Probada"
                    : currentLanguage === Language.ENGLISH
                    ? "Proven Methodology"
                    : "Metodologia Comprovada"}
                </h3>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Programas WasteZero™, FlowStable™ y 5S Plus™ validados en más de 50 empresas con resultados medibles"
                  : currentLanguage === Language.ENGLISH
                  ? "WasteZero™, FlowStable™ and 5S Plus™ programs validated in over 50 companies with measurable results"
                  : "Programas WasteZero™, FlowStable™ e 5S Plus™ validados em mais de 50 empresas com resultados mensuráveis"}
              </p>
            </div>

            {/* Ventaja 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {currentLanguage === Language.SPANISH
                    ? "Resultados Rápidos"
                    : currentLanguage === Language.ENGLISH
                    ? "Fast Results"
                    : "Resultados Rápidos"}
                </h3>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Implementaciones que generan impacto en 3-6 meses, no en años. Verás mejoras desde el primer mes"
                  : currentLanguage === Language.ENGLISH
                  ? "Implementations that generate impact in 3-6 months, not years. You'll see improvements from the first month"
                  : "Implementações que geram impacto em 3-6 meses, não em anos. Você verá melhorias desde o primeiro mês"}
              </p>
            </div>

            {/* Ventaja 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {currentLanguage === Language.SPANISH
                    ? "Acompañamiento Personalizado"
                    : currentLanguage === Language.ENGLISH
                    ? "Personalized Support"
                    : "Acompanhamento Personalizado"}
                </h3>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "No solo te damos herramientas, te acompañamos en todo el proceso de implementación y cambio cultural"
                  : currentLanguage === Language.ENGLISH
                  ? "We don't just give you tools, we support you throughout the entire implementation and cultural change process"
                  : "Não apenas damos ferramentas, acompanhamos você em todo o processo de implementação e mudança cultural"}
              </p>
            </div>

            {/* Ventaja 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {currentLanguage === Language.SPANISH
                    ? "Métricas Claras"
                    : currentLanguage === Language.ENGLISH
                    ? "Clear Metrics"
                    : "Métricas Claras"}
                </h3>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Seguimiento de KPIs específicos para tu industria. Sabrás exactamente cuánto estás mejorando"
                  : currentLanguage === Language.ENGLISH
                  ? "Tracking of specific KPIs for your industry. You'll know exactly how much you're improving"
                  : "Acompanhamento de KPIs específicos para sua indústria. Você saberá exatamente quanto está melhorando"}
              </p>
            </div>

            {/* Ventaja 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {currentLanguage === Language.SPANISH
                    ? "Experiencia Local + Global"
                    : currentLanguage === Language.ENGLISH
                    ? "Local + Global Experience"
                    : "Experiência Local + Global"}
                </h3>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Conocimiento profundo del mercado argentino con metodologías de clase mundial aplicadas localmente"
                  : currentLanguage === Language.ENGLISH
                  ? "Deep knowledge of the Argentine market with world-class methodologies applied locally"
                  : "Conhecimento profundo do mercado argentino com metodologias de classe mundial aplicadas localmente"}
              </p>
            </div>

            {/* Ventaja 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {currentLanguage === Language.SPANISH
                    ? "Innovación Continua"
                    : currentLanguage === Language.ENGLISH
                    ? "Continuous Innovation"
                    : "Inovação Contínua"}
                </h3>
              </div>
              <p className="text-[var(--color-text)] text-center leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? "Siempre actualizamos nuestras metodologías con las mejores prácticas y tecnologías emergentes"
                  : currentLanguage === Language.ENGLISH
                  ? "We always update our methodologies with best practices and emerging technologies"
                  : "Sempre atualizamos nossas metodologias com as melhores práticas e tecnologias emergentes"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores Atendidos */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              {currentLanguage === Language.SPANISH
                ? "Sectores que Transformamos"
                : currentLanguage === Language.ENGLISH
                ? "Industries We Transform"
                : "Setores que Transformamos"}
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
              {currentLanguage === Language.SPANISH
                ? "Especializados en empresas medianas con operaciones complejas"
                : currentLanguage === Language.ENGLISH
                ? "Specialized in medium-sized companies with complex operations"
                : "Especializados em empresas médias com operações complexas"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title:
                  currentLanguage === Language.SPANISH
                    ? "Agroindustria"
                    : currentLanguage === Language.ENGLISH
                    ? "Agribusiness"
                    : "Agroindústria",
                desc:
                  currentLanguage === Language.SPANISH
                    ? "Plantas de procesamiento, acopio y logística"
                    : currentLanguage === Language.ENGLISH
                    ? "Processing plants, storage and logistics"
                    : "Plantas de processamento, armazenamento e logística",
                icon: (
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                    <Wheat className="w-8 h-8 text-green-600" />
                  </span>
                ),
              },
              {
                title:
                  currentLanguage === Language.SPANISH
                    ? "Alimentos"
                    : currentLanguage === Language.ENGLISH
                    ? "Food Industry"
                    : "Alimentos",
                desc:
                  currentLanguage === Language.SPANISH
                    ? "Producción, empaque y distribución"
                    : currentLanguage === Language.ENGLISH
                    ? "Production, packaging and distribution"
                    : "Produção, embalagem e distribuição",
                icon: (
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4">
                    <Factory className="w-8 h-8 text-yellow-600" />
                  </span>
                ),
              },
              {
                title:
                  currentLanguage === Language.SPANISH
                    ? "Manufactura"
                    : currentLanguage === Language.ENGLISH
                    ? "Manufacturing"
                    : "Manufatura",
                desc:
                  currentLanguage === Language.SPANISH
                    ? "Procesos industriales y líneas de producción"
                    : currentLanguage === Language.ENGLISH
                    ? "Industrial processes and production lines"
                    : "Processos industriais e linhas de produção",
                icon: (
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                    <Cog className="w-8 h-8 text-blue-600" />
                  </span>
                ),
              },
              {
                title:
                  currentLanguage === Language.SPANISH
                    ? "Servicios"
                    : currentLanguage === Language.ENGLISH
                    ? "Services"
                    : "Serviços",
                desc:
                  currentLanguage === Language.SPANISH
                    ? "Logística, distribución y servicios técnicos"
                    : currentLanguage === Language.ENGLISH
                    ? "Logistics, distribution and technical services"
                    : "Logística, distribuição e serviços técnicos",
                icon: (
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 mb-4">
                    <Truck className="w-8 h-8 text-purple-600" />
                  </span>
                ),
              },
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                {sector.icon}
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {sector.title}
                </h3>
                <p className="text-[var(--color-text)] leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
          <SectionCTA scrollToServices={scrollToServices} />
        </div>
      </section>

      {/* Testimonios / Prueba Social */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              {currentLanguage === Language.SPANISH
                ? "Confían en Nosotros"
                : currentLanguage === Language.ENGLISH
                ? "They Trust Us"
                : "Confiam em Nós"}
            </h2>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-8 text-white">
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-12 h-12" />
              </div>
              <blockquote className="text-xl italic mb-6 leading-relaxed">
                {currentLanguage === Language.SPANISH
                  ? '"LYSPAS & CO nos ayudó a ver oportunidades donde solo veíamos problemas. Su enfoque práctico y metodología clara nos permitió reducir desperdicios y mejorar nuestra eficiencia sin grandes inversiones."'
                  : currentLanguage === Language.ENGLISH
                  ? '"LYSPAS & CO helped us see opportunities where we only saw problems. Their practical approach and clear methodology allowed us to reduce waste and improve efficiency without major investments."'
                  : '"LYSPAS & CO nos ajudou a ver oportunidades onde só víamos problemas. Sua abordagem prática e metodologia clara nos permitiu reduzir desperdícios e melhorar eficiência sem grandes investimentos."'}
              </blockquote>
              <div className="text-white/80">
                {currentLanguage === Language.SPANISH
                  ? "— Gerente de Operaciones, Empresa Agroindustrial"
                  : currentLanguage === Language.ENGLISH
                  ? "— Operations Manager, Agribusiness Company"
                  : "— Gerente de Operações, Empresa Agroindustrial"}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[var(--color-border)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)]">
                      {currentLanguage === Language.SPANISH
                        ? "Seguidores en LinkedIn"
                        : currentLanguage === Language.ENGLISH
                        ? "LinkedIn Followers"
                        : "Seguidores no LinkedIn"}
                    </h4>
                    <p className="text-[var(--color-text)] text-sm">
                      {currentLanguage === Language.SPANISH
                        ? "Comunidad activa de profesionales"
                        : currentLanguage === Language.ENGLISH
                        ? "Active community of professionals"
                        : "Comunidade ativa de profissionais"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-[var(--color-border)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)]">
                      {currentLanguage === Language.SPANISH
                        ? "Empresas Transformadas"
                        : currentLanguage === Language.ENGLISH
                        ? "Companies Transformed"
                        : "Empresas Transformadas"}
                    </h4>
                    <p className="text-[var(--color-text)] text-sm">
                      {currentLanguage === Language.SPANISH
                        ? "En Argentina y Latinoamérica"
                        : currentLanguage === Language.ENGLISH
                        ? "In Argentina and Latin America"
                        : "Na Argentina e América Latina"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-[var(--color-border)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)]">
                      {currentLanguage === Language.SPANISH
                        ? "Años de Experiencia"
                        : currentLanguage === Language.ENGLISH
                        ? "Years of Experience"
                        : "Anos de Experiência"}
                    </h4>
                    <p className="text-[var(--color-text)] text-sm">
                      {currentLanguage === Language.SPANISH
                        ? "Especializados en mejora continua"
                        : currentLanguage === Language.ENGLISH
                        ? "Specialized in continuous improvement"
                        : "Especializados em melhoria contínua"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
