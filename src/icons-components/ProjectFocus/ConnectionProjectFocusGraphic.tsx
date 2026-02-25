import React from "react";
import {
  Compass,
  Target,
  ArrowRight,
  CheckSquare,
  ArrowDown,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const TEXTS = {
  es: {
    stratbridge: "STRAT\nBRIDGE™",
    stratTitle: "Planificación Estratégica",
    stratDesc: "Define el rumbo",
    extension: "Extensión\nNatural",
    projectfocus: "PROJECT\nFOCUS™",
    projectTitle: "Selección de Proyectos",
    projectDesc: "Elige qué barcos navegar",
    result: "Resultado",
    portfolio: "PORTAFOLIO\nEJECUTABLE",
    portfolioTitle: "Proyectos Alineados",
    portfolioDesc: "Validados y sostenidos",
  },
  en: {
    stratbridge: "STRAT\nBRIDGE™",
    stratTitle: "Strategic Planning",
    stratDesc: "Set the course",
    extension: "Natural\nExtension",
    projectfocus: "PROJECT\nFOCUS™",
    projectTitle: "Project Selection",
    projectDesc: "Choose which ships to sail",
    result: "Result",
    portfolio: "EXECUTABLE\nPORTFOLIO",
    portfolioTitle: "Aligned Projects",
    portfolioDesc: "Validated and sustained",
  },
  pt: {
    stratbridge: "STRAT\nBRIDGE™",
    stratTitle: "Planejamento Estratégico",
    stratDesc: "Defina o rumo",
    extension: "Extensão\nNatural",
    projectfocus: "PROJECT\nFOCUS™",
    projectTitle: "Seleção de Projetos",
    projectDesc: "Escolha quais barcos navegar",
    result: "Resultado",
    portfolio: "PORTFÓLIO\nEXECUTÁVEL",
    portfolioTitle: "Projetos Alinhados",
    portfolioDesc: "Validados e sustentados",
  },
};

const ConnectionProjectFocusGraphic: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang: Language = (currentLanguage as Language) || "es";
  const t = TEXTS[lang];

  // Helper to render line breaks in label
  const renderLabel = (label: string) =>
    label.split("\n").map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        {idx < label.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">
        {/* STRATBRIDGE */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl mb-4 transform transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <Compass className="w-10 h-10 md:w-8 md:h-8 mx-auto mb-1" />
              <div className="text-sm md:text-xs font-bold">
                {renderLabel(t.stratbridge)}
              </div>
            </div>
          </div>
          <div className="text-center max-w-xs">
            <h4 className="font-bold text-gray-800 mb-2 text-lg md:text-base">
              {t.stratTitle}
            </h4>
            <p className="text-sm md:text-xs text-gray-600">{t.stratDesc}</p>
          </div>
        </div>

        {/* Arrow/Extension */}
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col items-center md:hidden">
            <ArrowDown className="w-8 h-8 text-purple-500 mb-2" />
            <div className="text-sm text-gray-600 text-center">
              {renderLabel(t.extension)}
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <ArrowRight className="w-8 h-8 text-purple-500 mb-2" />
            <div className="text-xs text-gray-600 text-center">
              {renderLabel(t.extension)}
            </div>
          </div>
        </div>

        {/* PROJECT FOCUS */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-28 md:h-28 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl mb-4 transform transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <Target className="w-10 h-10 md:w-8 md:h-8 mx-auto mb-1" />
              <div className="text-sm md:text-xs font-bold">
                {renderLabel(t.projectfocus)}
              </div>
            </div>
          </div>
          <div className="text-center max-w-xs">
            <h4 className="font-bold text-gray-800 mb-2 text-lg md:text-base">
              {t.projectTitle}
            </h4>
            <p className="text-sm md:text-xs text-gray-600">{t.projectDesc}</p>
          </div>
        </div>

        {/* Arrow/Result */}
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col items-center md:hidden">
            <ArrowDown className="w-8 h-8 text-indigo-500 mb-2" />
            <div className="text-sm text-gray-600 text-center">{t.result}</div>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <ArrowRight className="w-8 h-8 text-indigo-500 mb-2" />
            <div className="text-xs text-gray-600 text-center">{t.result}</div>
          </div>
        </div>

        {/* PORTFOLIO */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-28 md:h-28 bg-gradient-to-br from-indigo-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-xl mb-4 transform transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <CheckSquare className="w-10 h-10 md:w-8 md:h-8 mx-auto mb-1" />
              <div className="text-sm md:text-xs font-bold">
                {renderLabel(t.portfolio)}
              </div>
            </div>
          </div>
          <div className="text-center max-w-xs">
            <h4 className="font-bold text-gray-800 mb-2 text-lg md:text-base">
              {t.portfolioTitle}
            </h4>
            <p className="text-sm md:text-xs text-gray-600">
              {t.portfolioDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionProjectFocusGraphic;
