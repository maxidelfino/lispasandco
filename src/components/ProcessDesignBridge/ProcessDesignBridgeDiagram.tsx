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

const ProcessDesignBridgeDiagram: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const Card = ({
    title,
    description,
    isProcess = false,
  }: {
    title: string;
    description: string;
    isProcess?: boolean;
  }) => (
    <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div
        className={`${
          isProcess ? "bg-blue-600" : "bg-blue-800"
        } text-white font-bold px-4 py-3 text-center`}
      >
        <h3 className="text-sm lg:text-base">{title}</h3>
      </div>
      <div className="p-4 flex-1">
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8 mt-10">
      {/* SIPOC Title */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">
          SIPOC Diagram
        </h2>
      </div>

      {/* Grid Container for the Pyramid Layout */}
      <div className="flex flex-col items-center gap-6">
        {/* Top Row (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-4/5">
          <Card title={t.suppliers} description={t.suppliersDescription} />
          <Card title={t.inputs} description={t.inputsDescription} />
        </div>

        {/* Bottom Row (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card
            title={t.process}
            description={t.processDescription}
            isProcess
          />
          <Card title={t.outputs} description={t.outputsDescription} />
          <Card title={t.customers} description={t.customersDescription} />
        </div>
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
