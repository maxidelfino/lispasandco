import React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations = {
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

  return (
    <HeroBase
      badge={translations.badge[currentLanguage]}
      title={translations.title[currentLanguage]}
      subtitles={[translations.subtitle[currentLanguage]]}
      scrollTargetId="podcast-player"
      backgroundVariant="bars"
      showDownloadButton={false}
    />
  );
};

export default HeroSection;
