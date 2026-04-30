import React from "react";
import FloatingNavigation from "../components/FloatingNavigation";
import HeroSection from "../components/Podcast/HeroSection";
import AudioPlayer from "../components/AudioPlayer";
import CTASection from "../components/CTASection";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import { podcasts } from "../assets/podcast/podcast";

const ctaTranslations = {
  title: {
    [Language.SPANISH]: "¿Querés saber más sobre nuestros programas?",
    [Language.ENGLISH]: "Want to learn more about our programs?",
    [Language.PORTUGUESE]: "Quer saber mais sobre nossos programas?",
  },
  description: {
    [Language.SPANISH]:
      "Contactanos y descubrí cómo nuestras soluciones de mejora continua pueden transformar tu operación.",
    [Language.ENGLISH]:
      "Contact us and discover how our continuous improvement solutions can transform your operation.",
    [Language.PORTUGUESE]:
      "Entre em contato e descubra como nossas soluções de melhoria contínua podem transformar sua operação.",
  },
  primaryButton: {
    [Language.SPANISH]: "Contactar Ahora",
    [Language.ENGLISH]: "Contact Now",
    [Language.PORTUGUESE]: "Contatar Agora",
  },
};

const PodcastPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <FloatingNavigation />
      <HeroSection />
      <div id="podcast-player">
        <AudioPlayer podcasts={podcasts} />
      </div>
      <div className="relative -mt-10 pt-10 sm:-mt-12 sm:pt-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-32"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--color-secondary) 10%, white) 0%, color-mix(in srgb, var(--color-bg) 88%, white) 42%, rgba(255,255,255,0) 100%)",
            filter: "blur(10px)",
          }}
        />
        <CTASection
          className="relative mt-0"
          title={ctaTranslations.title[currentLanguage]}
          description={ctaTranslations.description[currentLanguage]}
          primaryButtonText={ctaTranslations.primaryButton[currentLanguage]}
          showSecondaryButton={false}
        />
      </div>
      <FloatingWhatsAppCTA />
    </div>
  );
};

export default PodcastPage;
