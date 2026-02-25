import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations = {
  es: {
    referencia: {
      title: "Variable de ",
      subtitle: "Referencia",
    },
    error: "Error",
    regulacion: {
      title: "Variable de",
      subtitle: "Regulación",
    },
    manipulada: {
      title: "Variable",
      subtitle: "Manipulada",
    },
    controlar: {
      title: "Variable a",
      subtitle: "Controlar",
    },
    controlador: "Controlador",
    actuador: "Actuador",
    proceso: "Proceso",
    medida: {
      title: "Variable",
      subtitle: "Medida",
    },
    medidor: "Medidor",
  },
  en: {
    referencia: {
      title: "Reference",
      subtitle: "Variable",
    },
    error: "Error",
    regulacion: {
      title: "Regulation",
      subtitle: "Variable",
    },
    manipulada: {
      title: "Manipulated",
      subtitle: "Variable",
    },
    controlar: {
      title: "Variable to",
      subtitle: "Control",
    },
    controlador: "Controller",
    actuador: "Actuator",
    proceso: "Process",
    medida: {
      title: "Measurement",
      subtitle: "Variable",
    },
    medidor: "Measuring Device",
  },
  pt: {
    referencia: {
      title: "Variável de ",
      subtitle: "Referência",
    },
    error: "Erro",
    regulacion: {
      title: "Variável de",
      subtitle: "Regulação",
    },
    manipulada: {
      title: "Variável",
      subtitle: "Manipulada",
    },
    controlar: {
      title: "Variável a",
      subtitle: "Controlar",
    },
    controlador: "Controlador",
    actuador: "Atuador",
    proceso: "Processo",
    medida: {
      title: "Variável",
      subtitle: "Medição",
    },
    medidor: "Medidor",
  },
};

const AutopsContentDiagram: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const lang =
    currentLanguage === Language.SPANISH
      ? "es"
      : currentLanguage === Language.ENGLISH
      ? "en"
      : "pt";
  const t = translations[lang];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center gap-2 mb-2 w-full overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {/* Referencia */}
          <div className="flex flex-col items-center min-w-fit mr-8">
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.referencia.title}
            </span>
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.referencia.subtitle}
            </span>
          </div>
          {/* Error */}
          <div className="flex flex-col items-center min-w-fit mr-14 pr-8">
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.error}
            </span>
          </div>
          {/* Regulación */}
          <div className="flex flex-col items-center min-w-fit mr-14">
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.regulacion.title}
            </span>
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.regulacion.subtitle}
            </span>
          </div>
          {/* Manipulada */}
          <div className="flex flex-col items-center min-w-fit mr-8 ml-8">
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.manipulada.title}
            </span>
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.manipulada.subtitle}
            </span>
          </div>
          {/* Controlar */}
          <div className="flex flex-col items-center min-w-fit ml-8">
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.controlar.title}
            </span>
            <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
              {t.controlar.subtitle}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mb-4 w-full">
        <div className="flex items-center gap-3 min-w-max">
          {/* Círculo vacío */}
          <div className="relative flex justify-center items-center shrink-0 mr-6">
            {/* Círculo */}
            <div className="w-10 h-10 border border-gray-400 rounded-full bg-white"></div>
            {/* Flecha horizontal izquierda (ahora apunta a la derecha) */}
            <svg
              className="absolute left-[-36px] top-1/2 -translate-y-1/2"
              width="32"
              height="12"
              viewBox="0 0 32 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="6"
                x2="28"
                y2="6"
                stroke="#888"
                strokeWidth="2"
              />
              <polygon points="28,6 22,2 22,10" fill="#888" />
            </svg>
            {/* Flecha horizontal derecha (sin cambios) */}
            <svg
              className="absolute right-[-36px] top-1/2 -translate-y-1/2"
              width="32"
              height="12"
              viewBox="0 0 32 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="6"
                x2="28"
                y2="6"
                stroke="#888"
                strokeWidth="2"
              />
              <polygon points="28,6 22,2 22,10" fill="#888" />
            </svg>
            {/* Flecha vertical arriba */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 bottom-[-32px]"
              width="12"
              height="32"
              viewBox="0 0 12 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="6"
                y1="28"
                x2="6"
                y2="0"
                stroke="#888"
                strokeWidth="2"
              />
              <polygon points="6,4 2,10 10,10" fill="#888" />
            </svg>
          </div>
          {/* Controlador */}
          <div className="flex justify-center items-center shrink-0 relative mr-6">
            <div className="bg-yellow-400 px-2 py-1 rounded shadow z-10">
              <span className="text-black font-bold text-[18px] whitespace-nowrap">
                {t.controlador}
              </span>
            </div>
            {/* Flecha horizontal derecha (similar a la del círculo) */}
            <svg
              className="absolute right-[-36px] top-1/2 -translate-y-1/2"
              width="32"
              height="12"
              viewBox="0 0 32 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="6"
                x2="28"
                y2="6"
                stroke="#888"
                strokeWidth="2"
              />
              <polygon points="28,6 22,2 22,10" fill="#888" />
            </svg>
          </div>
          {/* Actuador */}
          <div className="flex justify-center items-center shrink-0 relative mr-6">
            <div className="bg-cyan-400 px-2 py-1 rounded shadow z-10">
              <span className="text-black font-bold text-[18px] whitespace-nowrap">
                {t.actuador}
              </span>
            </div>
            {/* Flecha horizontal derecha (similar a la del círculo y controlador) */}
            <svg
              className="absolute right-[-36px] top-1/2 -translate-y-1/2"
              width="32"
              height="12"
              viewBox="0 0 32 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="6"
                x2="28"
                y2="6"
                stroke="#888"
                strokeWidth="2"
              />
              <polygon points="28,6 22,2 22,10" fill="#888" />
            </svg>
          </div>
          {/* Proceso */}
          <div className="flex justify-center items-center shrink-0 relative">
            <div className="bg-red-800 px-2 py-1 rounded shadow z-10">
              <span className="text-white font-bold text-[18px] whitespace-nowrap">
                {t.proceso}
              </span>
            </div>
            {/* Flecha horizontal derecha (similar a la del círculo, controlador y actuador) */}
            <svg
              className="absolute right-[-36px] top-1/2 -translate-y-1/2"
              width="32"
              height="12"
              viewBox="0 0 32 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="6"
                x2="28"
                y2="6"
                stroke="#888"
                strokeWidth="2"
              />
              <polygon points="28,6 22,2 22,10" fill="#888" />
            </svg>
            {/* Flecha vertical hacia abajo al final de la flecha horizontal */}
            <svg
              className="absolute right-[-20px] top-1/2"
              style={{ transform: "translateY(0)" }}
              width="12"
              height="444"
              viewBox="0 0 12 444"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="6"
                y1="0"
                x2="6"
                y2="60"
                stroke="#888"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 w-full">
        {/* Medida */}
        <svg
          width="66"
          height="12"
          viewBox="0 0 66 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Línea continua completa con flecha al inicio */}
          <line x1="66" y1="6" x2="4" y2="6" stroke="#888" strokeWidth="2" />
          <polygon points="4,6 10,2 10,10" fill="#888" />
        </svg>
        <div className="flex flex-col items-center min-w-fit">
          <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
            {t.medida.title}
          </span>
          <span className="text-[12px] text-gray-600 text-center whitespace-nowrap">
            {t.medida.subtitle}
          </span>
        </div>
        {/* Medidor */}
        <div className="flex justify-center items-center shrink-0 gap-2">
          <div className="bg-green-600 px-2 py-1 rounded shadow">
            <span className="text-white font-bold text-[18px] whitespace-nowrap">
              {t.medidor}
            </span>
          </div>
          {/* Flecha horizontal apuntando a la izquierda */}
          <svg
            width="126"
            height="12"
            viewBox="0 0 126 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Línea continua */}
            <line x1="126" y1="6" x2="4" y2="6" stroke="#888" strokeWidth="2" />
            {/* Flecha al inicio */}
            <polygon points="4,6 10,2 10,10" fill="#888" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AutopsContentDiagram;
