import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";
import ScrollIndicator from "../ScrollIndicator";

const i18n = {
  badge: {
    [Language.SPANISH]: "LYSPAS & CO PODCAST",
    [Language.ENGLISH]: "LYSPAS & CO PODCAST",
    [Language.PORTUGUESE]: "LYSPAS & CO PODCAST",
  },
  title: {
    [Language.SPANISH]: "Nuestro Podcast",
    [Language.ENGLISH]: "Our Podcast",
    [Language.PORTUGUESE]: "Nosso Podcast",
  },
  tagline: {
    [Language.SPANISH]: "voces que transforman",
    [Language.ENGLISH]: "voices that transform",
    [Language.PORTUGUESE]: "vozes que transformam",
  },
  subtitle: {
    [Language.SPANISH]:
      "Escuchá las voces detrás de la transformación operacional. Episodios sobre programas, casos de estudio y mejora continua.",
    [Language.ENGLISH]:
      "Listen to the voices behind operational transformation. Episodes about programs, case studies, and continuous improvement.",
    [Language.PORTUGUESE]:
      "Ouça as vozes por trás da transformação operacional. Episódios sobre programas, estudos de caso e melhoria contínua.",
  },
};

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const scrollToContent = () => {
    document
      .getElementById("podcast-player")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + soft shapes */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 70%, var(--color-secondary)) 60%, var(--color-secondary) 100%)",
        }}
      />
      {/* Geometric pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-white text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md mb-6">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--color-accent)" }}
              />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/90">
                {i18n.badge[currentLanguage]}
              </span>
            </div>

            {/* Title + tagline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance mb-6">
              {i18n.title[currentLanguage]}
              <span
                className="block text-3xl md:text-4xl font-normal text-white/80 mt-2"
                style={{ color: "var(--color-accent)" }}
              >
                {i18n.tagline[currentLanguage]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-8 text-pretty">
              {i18n.subtitle[currentLanguage]}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator scrollToContent={scrollToContent} label={''} />
      </div>
    </section>
  );
};

export default HeroSection;
