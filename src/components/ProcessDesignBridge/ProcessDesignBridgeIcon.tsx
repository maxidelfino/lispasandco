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

const ProcessDesignBridgeIcon: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-12">
      {/* Process Flow Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
        {/* Inputs */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-blue-800 text-blue-800 font-bold px-6 py-3 text-sm lg:text-base rounded-lg bg-white shadow-sm">
            {t.inputs}
          </div>
        </div>

        {/* Process Center */}
        <div className="relative">
          <div className="bg-blue-600 p-6 lg:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col items-center space-y-4 text-white">
              <span className="font-bold text-lg lg:text-xl">{t.process}</span>
              <div className="border-2 border-white p-3 w-20 lg:w-24 text-center font-medium">
                A
              </div>
              <div className="flex gap-3">
                <div className="border-2 border-white p-3 w-12 lg:w-16 text-center font-medium">
                  B
                </div>
                <div className="border-2 border-white p-3 w-12 lg:w-16 text-center font-medium">
                  C
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-blue-800 text-blue-800 font-bold px-6 py-3 text-sm lg:text-base rounded-lg bg-white shadow-sm">
            {t.outputs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDesignBridgeIcon;
