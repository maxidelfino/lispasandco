"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations = {
  es: {
    entrada: "Entrada",
    comparador: "Comparador",
    error: "Error",
    control: "Control",
    proceso: "Proceso",
    salida: "Salida",
    medidor: "Medidor",
  },
  en: {
    entrada: "Input",
    comparador: "Comparator",
    error: "Error",
    control: "Control",
    proceso: "Process",
    salida: "Output",
    medidor: "Meter",
  },
  pt: {
    entrada: "Entrada",
    comparador: "Comparador",
    error: "Erro",
    control: "Controle",
    proceso: "Processo",
    salida: "Saída",
    medidor: "Medidor",
  },
};

const FeedbackControlDiagram: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  // Componente para una caja (bloque) del diagrama
  const Box = ({
    title,
    bgColor,
    textColor = "text-gray-800",
    customClass = "",
  }) => (
    <div
      className={`${bgColor} shadow-md p-3 text-center rounded-sm mx-1 flex-shrink-0 w-32 md:w-40 ${customClass}`}
      style={{
        minHeight: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        className={`font-bold text-sm md:text-base whitespace-nowrap ${textColor}`}
      >
        {title}
      </span>
    </div>
  );

  // Componente para una flecha
  // direction: 'right', 'down', 'up', 'left'
  const Arrow = ({ direction = "right", customClass = "" }) => {
    let arrowLineClass = "bg-gray-600";
    let triangleClass = "";

    switch (direction) {
      case "right":
        arrowLineClass += " w-8 h-0.5";
        triangleClass =
          "right-0 top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-gray-600";
        break;
      case "down":
        arrowLineClass += " w-0.5 h-8";
        triangleClass =
          "bottom-0 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-600";
        break;
      case "up":
        arrowLineClass += " w-0.5 h-8";
        triangleClass =
          "top-0 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-600";
        break;
      case "left":
        arrowLineClass += " w-8 h-0.5";
        triangleClass =
          "left-0 top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-gray-600";
        break;
      default:
        break;
    }

    return (
      <div className={`relative ${arrowLineClass} ${customClass}`}>
        <div className={`absolute w-0 h-0 ${triangleClass}`}></div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-4 max-w-full overflow-hidden">
      {/* Contenedor principal del diagrama */}
      <div className="relative flex flex-col items-center w-full max-w-5xl">
        {/* Fila superior: Entrada -> Comparador -> Control -> Proceso -> Salida */}
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap w-full">
          {/* Entrada */}
          <span className="text-sm md:text-base font-medium text-gray-700 mr-2 whitespace-nowrap mb-2 md:mb-0">
            {t.entrada}
          </span>
          <Arrow customClass="w-8 flex-shrink-0" />

          {/* Comparador */}
          <Box
            title={t.comparador}
            bgColor="bg-yellow-300"
            customClass="flex-shrink-0"
          />
          <span className="text-sm font-medium text-gray-700 mx-1 whitespace-nowrap block md:hidden">
            {t.error}
          </span>
          <Arrow customClass="w-8 flex-shrink-0" />

          {/* Error Label (visible en desktop, oculto en móvil si el layout lo rompe) */}
          <span className="text-sm font-medium text-gray-700 mx-1 whitespace-nowrap hidden md:block">
            {t.error}
          </span>
          <Arrow customClass="w-8 flex-shrink-0" />

          {/* Control */}
          <Box
            title={t.control}
            bgColor="bg-yellow-300"
            customClass="flex-shrink-0"
          />
          <Arrow customClass="w-8 flex-shrink-0" />

          {/* Proceso */}
          <Box
            title={t.proceso}
            bgColor="bg-blue-600"
            textColor="text-white"
            customClass="flex-shrink-0"
          />
          <Arrow customClass="w-8 flex-shrink-0" />

          {/* Salida */}
          <span className="text-sm md:text-base font-medium text-gray-700 ml-2 whitespace-nowrap mt-2 md:mt-0">
            {t.salida}
          </span>
        </div>

        {/* Línea de feedback desde Proceso */}
        <div className="absolute top-[calc(50px)] right-[calc(110px)] md:right-[calc(130px)] flex flex-col items-center z-10">
          {/* Altura de la línea vertical después del proceso */}
          <div className="w-0.5 h-16 bg-gray-600"></div>
          <Arrow direction="left" customClass="w-4 -mt-1" />{" "}
          {/* Flecha que apunta al medidor */}
        </div>

        {/* Medidor y línea de feedback */}
        <div className="flex items-center justify-center w-full mt-20">
          {/* Línea horizontal que conecta con el medidor */}
          <div className="w-1/3 md:w-1/4 h-0.5 bg-gray-600 relative ml-4">
            <Arrow
              direction="down"
              customClass="absolute -top-8 right-0 rotate-90"
            />{" "}
            {/* Flecha virtual para visualización */}
          </div>
          <Box
            title={t.medidor}
            bgColor="bg-blue-400"
            customClass="flex-shrink-0"
          />
          {/* Línea de feedback de vuelta al Comparador */}
          <div className="w-1/3 md:w-1/4 h-0.5 bg-gray-600 relative mr-4">
            <Arrow
              direction="up"
              customClass="absolute -bottom-8 left-0 -rotate-90"
            />{" "}
            {/* Flecha virtual para visualización */}
          </div>
          <Arrow direction="up" customClass="w-0.5 h-16 bg-gray-600" />{" "}
          {/* Flecha vertical hacia el comparador */}
        </div>
      </div>
    </div>
  );
};

export default FeedbackControlDiagram;
