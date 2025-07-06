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

const EightGridWastes = () => {
  const wasteIcons = [
    { icon: Users, title: "Talento no utilizado", description: "" },
    { icon: Package, title: "Inventario", description: "" },
    { icon: ArrowLeftRight, title: "Movimientos", description: "" },
    { icon: Timer, title: "Espera", description: "" },
    { icon: Truck, title: "Transportación", description: "" },
    { icon: XCircle, title: "Defectos", description: "" },
    { icon: Settings, title: "Sobreproducción", description: "" },
    { icon: Factory, title: "Sobre-procesamiento", description: "" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {wasteIcons.map((waste, index) => {
        const Icon = waste.icon;
        return (
          <div key={index} className="text-center group/icon">
            <div className="relative mb-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center group-hover/icon:scale-110 transition-all duration-300 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-sm">
              <div className="font-bold text-[var(--color-primary)] mb-1 leading-tight">
                {waste.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EightGridWastes;
