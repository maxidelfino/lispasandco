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
    inputs: "PROVEEDORES",
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

const Card = ({
  title,
  description,
  isProcess = false,
}: {
  title: string;
  description: string;
  isProcess?: boolean;
}) => (
  <div
    className={`flex flex-col rounded-lg overflow-hidden border ${
      isProcess
        ? "bg-gradient-to-r from-blue-600 to-blue-800 border-blue-700 shadow-2xl scale-105 ring-4 ring-blue-300"
        : "bg-white border-gray-200 shadow-sm"
    }`}
    style={isProcess ? { zIndex: 10 } : {}}
  >
    <div
      className={`${
        isProcess
          ? "bg-transparent text-white font-extrabold text-xl py-6"
          : "bg-blue-800 text-white font-bold py-3"
      } px-4 text-center`}
    >
      <h3
        className={isProcess ? "text-lg lg:text-2xl" : "text-sm lg:text-base"}
      >
        {title}
      </h3>
    </div>
    <div
      className={`p-4 flex-1 ${
        isProcess
          ? "text-white text-base lg:text-lg font-semibold"
          : "text-gray-700 text-sm lg:text-base"
      } leading-relaxed`}
    >
      {description}
    </div>
  </div>
);

const ProcessDesignBridgeDiagram: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8 mt-10">
      {/* SIPOC Title */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">
          SIPOC Diagram
        </h2>
      </div>

      {/* Fila 1: 2 columnas (PROVEEDORES, PROVEEDORES/INPUTS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Card title={t.suppliers} description={t.suppliersDescription} />
        <Card title={t.inputs} description={t.inputsDescription} />
      </div>

      {/* Fila 2: 1 columna (PROCESO) - Destacada */}
      <div className="flex justify-center w-full relative z-10">
        <div className="w-full md:w-2/3">
          <Card
            title={t.process}
            description={t.processDescription}
            isProcess
          />
        </div>
      </div>

      {/* Fila 3: 2 columnas (SALIDAS, CLIENTES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Card title={t.outputs} description={t.outputsDescription} />
        <Card title={t.customers} description={t.customersDescription} />
      </div>

      {/* Process Design Bridge */}
      <div className="flex justify-center items-center mt-12">
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full shadow-lg transform -skew-x-12">
            <span className="font-bold text-sm lg:text-base transform skew-x-12 block">
              {t.processDesignBridge}
            </span>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-blue-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDesignBridgeDiagram;
