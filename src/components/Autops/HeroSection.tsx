import React from "react";
import HeroBase from "../HeroBase";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const TEXTS: Record<
  Language,
  {
    badge: string;
    mainTitle: string;
    subtitle1: string;
    description1: string;
  }
> = {
  es: {
    badge: "Perfeccionar la operación",
    mainTitle: "Auto Ops™",
    subtitle1: "Operación Automática de Procesos",
    description1:
      "Combinamos instrumentación de última generación, software de control avanzado y metodologías de mejora continua para lograr procesos estables y sostenibles, reduciendo la dependencia del criterio humano y asegurando resultados repetibles",
  },
  en: {
    badge: "Perfect the operation",
    mainTitle: "Auto Ops™",
    subtitle1: "Automatic Process Operation",
    description1:
      "We combine state-of-the-art instrumentation, advanced control software, and continuous improvement methodologies to achieve stable and sustainable processes, reducing reliance on human judgment and ensuring repeatable results.",
  },
  pt: {
    badge: "Aperfeiçoar a operação",
    mainTitle: "Auto Ops™",
    subtitle1: "Operação Automática de Processos",
    description1:
      "Combinamos instrumentação de última geração, software de controle avançado e metodologias de melhoria contínua para alcançar processos estáveis e sustentáveis, reduzindo a dependência do critério humano e garantindo resultados repetíveis.",
  },
};

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  return (
    <HeroBase
      badge={t.badge}
      title={
        <>
          <span className="block">{t.mainTitle}</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">{t.subtitle1}</span>
        </>
      }
      descriptions={[t.description1]}
      scrollTargetId="autoops-content"
      onDownload={() => {
        const link = document.createElement("a");
        link.href = "assets/pdf/LYS-P017-AutoOps.pdf";
        link.download = "LYS-P017-AutoOps.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      backgroundVariant="mixed"
    />
  );
};

export default HeroSection;
