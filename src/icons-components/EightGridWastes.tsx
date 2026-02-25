import React from "react";
import {
  Users,
  Package,
  ArrowLeftRight,
  Timer,
  Truck,
  XCircle,
  Settings,
  Factory,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import type { Language } from "../types";

const wasteIcons = [
  {
    icon: Users,
    titles: {
      es: "Talento no utilizado",
      en: "Unused talent",
      pt: "Talento não utilizado",
    },
  },
  {
    icon: Package,
    titles: {
      es: "Inventario",
      en: "Inventory",
      pt: "Inventário",
    },
  },
  {
    icon: ArrowLeftRight,
    titles: {
      es: "Movimientos",
      en: "Motion",
      pt: "Movimentação",
    },
  },
  {
    icon: Timer,
    titles: {
      es: "Espera",
      en: "Waiting",
      pt: "Espera",
    },
  },
  {
    icon: Truck,
    titles: {
      es: "Transportación",
      en: "Transportation",
      pt: "Transporte",
    },
  },
  {
    icon: XCircle,
    titles: {
      es: "Defectos",
      en: "Defects",
      pt: "Defeitos",
    },
  },
  {
    icon: Settings,
    titles: {
      es: "Sobreproducción",
      en: "Overproduction",
      pt: "Superprodução",
    },
  },
  {
    icon: Factory,
    titles: {
      es: "Sobre-procesamiento",
      en: "Overprocessing",
      pt: "Sobreprocessamento",
    },
  },
];

const EightGridWastes = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="grid grid-cols-4 gap-6">
      {wasteIcons.map((waste, index) => {
        const Icon = waste.icon;
        const title =
          waste.titles[
            (currentLanguage as Language) in waste.titles
              ? (currentLanguage as Language)
              : "es"
          ];
        return (
          <div key={index} className="text-center group/icon">
            <div className="relative mb-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center group-hover/icon:scale-110 transition-all duration-300 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-sm hidden md:block">
              <div className="font-bold text-[var(--color-primary)] mb-1 leading-tight">
                {title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EightGridWastes;
