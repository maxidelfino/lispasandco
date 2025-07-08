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

interface WasteIconProps {
  iconName: string;
  title: string;
  description: string;
}

const iconMap = {
  Users,
  Package,
  ArrowLeftRight,
  Timer,
  Truck,
  XCircle,
  Settings,
  Factory,
};

const WasteIcon: React.FC<WasteIconProps> = ({
  iconName,
  title,
  description,
}) => {
  const Icon = iconMap[iconName as keyof typeof iconMap];

  return (
    <div className="text-center transition-transform hover:-translate-y-2 duration-300">
      <Icon className="w-9 h-9 text-[var(--color-accent)] mx-auto mb-2" />
      <div className="text-sm text-[var(--color-primary)] leading-tight">
        <strong className="block font-bold mb-1">{title}</strong>
        <span className="text-xs">{description}</span>
      </div>
    </div>
  );
};

export default WasteIcon;
