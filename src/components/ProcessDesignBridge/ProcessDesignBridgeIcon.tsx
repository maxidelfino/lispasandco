"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../types";

const translations: Record<
  Language,
  {
    suppliers: string;
    inputs: string;
    process: string;
    outputs: string;
    customers: string;
    suppliersDescription: string;
    inputsDescription: string;
    processDescription: string;
    outputsDescription: string;
    customersDescription: string;
    processDesignBridge: string;
  }
> = {
  es: {
    suppliers: "PROVEEDORES",
    inputs: "INGRESOS",
    process: "PROCESO",
    outputs: "SALIDAS",
    customers: "CLIENTES",
    suppliersDescription:
      "Todos aquellos que sean proveedores principales del proceso",
    inputsDescription:
      "Aquellos ingresos que son críticos para que el proceso se realice",
    processDescription:
      "El proceso. Es la menos crítica de todas las definiciones del SIPOC",
    outputsDescription:
      "Aquellas salidas que son críticas para satisfacer las necesidades del cliente",
    customersDescription:
      "Todos aquellos que son clientes más importantes del proceso",
    processDesignBridge: "PUENTE DE DISEÑO DE PROCESO",
  },
  en: {
    suppliers: "SUPPLIERS",
    inputs: "INPUTS",
    process: "PROCESS",
    outputs: "OUTPUTS",
    customers: "CUSTOMERS",
    suppliersDescription: "All those who are main suppliers of the process",
    inputsDescription:
      "Those inputs that are critical for the process to be carried out",
    processDescription:
      "The process. It is the least critical of all the definitions of the SIPOC",
    outputsDescription:
      "Those outputs that are critical to meet the customer's needs",
    customersDescription:
      "All those who are the most important customers of the process",
    processDesignBridge: "PROCESS DESIGN BRIDGE",
  },
  pt: {
    suppliers: "FORNECEDORES",
    inputs: "ENTRADAS",
    process: "PROCESSO",
    outputs: "SAÍDAS",
    customers: "CLIENTES",
    suppliersDescription:
      "Todos aqueles que são fornecedores principais do processo",
    inputsDescription:
      "Aquelas entradas que são críticas para que o processo seja realizado",
    processDescription:
      "O processo. É a menos crítica de todas as definições do SIPOC",
    outputsDescription:
      "Aquelas saídas que são críticas para satisfazer as necessidades do cliente",
    customersDescription:
      "Todos aqueles que são os clientes mais importantes do processo",
    processDesignBridge: "PONTE DE PROJETO DE PROCESSO",
  },
};

const Arrow = ({
  direction = "right",
  className = "",
}: {
  direction?: "right" | "left";
  className?: string;
}) => (
  <svg
    className={className}
    width="32"
    height="24"
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={direction === "left" ? { transform: "scaleX(-1)" } : {}}
  >
    <path
      d="M2 12H28M28 12L22 6M28 12L22 18"
      stroke="#2563eb"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProcessFlowchartSVG = () => (
  <svg
    width="110"
    height="90"
    viewBox="0 0 110 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    {/* Circle */}
    <circle cx="55" cy="70" r="10" stroke="#fff" strokeWidth="2" fill="none" />
    {/* Diamond */}
    <polygon
      points="55,30 70,45 55,60 40,45"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
    />
    {/* Top to diamond */}
    <line x1="55" y1="10" x2="55" y2="30" stroke="#fff" strokeWidth="2" />
    {/* Diamond to circle */}
    <line x1="55" y1="60" x2="55" y2="60" stroke="#fff" strokeWidth="2" />
    <line x1="55" y1="60" x2="55" y2="70" stroke="#fff" strokeWidth="2" />
    {/* Diamond to right box */}
    <line x1="70" y1="45" x2="90" y2="45" stroke="#fff" strokeWidth="2" />
    {/* Diamond to left box */}
    <line x1="40" y1="45" x2="20" y2="45" stroke="#fff" strokeWidth="2" />
    {/* Right box */}
    <rect
      x="90"
      y="35"
      width="16"
      height="20"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
    />
    {/* Left box */}
    <rect
      x="-6"
      y="35"
      width="16"
      height="20"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const ProcessDesignBridgeIcon: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {/* Inputs */}
          <div className="flex flex-col items-center">
            <div className="border border-gray-400 bg-white px-3 py-1 rounded text-xs md:text-sm font-medium text-gray-800 shadow-sm">
              {t.inputs}
            </div>
          </div>
          {/* Arrow */}
          <Arrow className="w-8 h-6 mx-1" />
          {/* Process */}
          <div className="flex flex-col items-center">
            <div className="border border-gray-400 bg-white px-3 rounded text-xs md:text-sm font-medium text-gray-800 shadow-sm w-full text-center">
              {t.process}
            </div>
            <div
              className="bg-blue-600 rounded border border-blue-700 shadow flex items-center justify-center"
              style={{ width: 140, height: 110, marginTop: 0 }}
            >
              <ProcessFlowchartSVG />
            </div>
          </div>
          {/* Arrow */}
          <Arrow className="w-8 h-6 mx-1" />
          {/* Outputs */}
          <div className="flex flex-col items-center">
            <div className="border border-gray-400 bg-white px-3 py-1 rounded text-xs md:text-sm font-medium text-gray-800 shadow-sm">
              {t.outputs}
            </div>
          </div>
        </div>
        {/* Math function */}
        <div className="ml-4 flex flex-col items-center">
          <span
            className="italic font-mono text-base md:text-lg text-gray-800"
            style={{ whiteSpace: "nowrap" }}
          >
            Y = <span className="not-italic">f</span>(
            <span className="italic">
              X₁, X₂, ... X<sub>n</sub>
            </span>
            )
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProcessDesignBridgeIcon;
