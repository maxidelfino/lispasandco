import { Compass, Target, Map, Route, Flag, Eye } from "lucide-react";
import React, { useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";

const StratBridgeIcon = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const isDesktop = useScreenSize() === "desktop";

  const diagramSize = {
    base: 320,
    md: 400,
    lg: 480,
  };
  const nodeSize = {
    base: 64,
    md: 80,
    lg: 96,
  };
  const centralSize = {
    base: 96,
    md: 120,
    lg: 144,
  };
  const iconSize = {
    base: 28,
    md: 36,
    lg: 44,
  };
  const radius = {
    base: 100,
    md: 130,
    lg: 170,
  };

  const strategyLayers = [
    {
      icon: Eye,
      title: "VISIÓN",
      subtitle: "¿A dónde vamos?",
      level: 1,
      color: "from-purple-500 to-purple-700",
      ring: "ring-purple-300/40",
      shadow: "shadow-purple-400/40",
    },
    {
      icon: Target,
      title: "OBJETIVOS",
      subtitle: "¿Qué queremos lograr?",
      level: 2,
      color: "from-blue-500 to-blue-700",
      ring: "ring-blue-300/40",
      shadow: "shadow-blue-400/40",
    },
    {
      icon: Map,
      title: "ESTRATEGIA",
      subtitle: "¿Cómo lo lograremos?",
      level: 3,
      color: "from-green-500 to-green-700",
      ring: "ring-green-300/40",
      shadow: "shadow-green-400/40",
    },
    {
      icon: Route,
      title: "TÁCTICAS",
      subtitle: "¿Qué caminos tomamos?",
      level: 4,
      color: "from-orange-400 to-orange-600",
      ring: "ring-orange-300/40",
      shadow: "shadow-orange-400/40",
    },
    {
      icon: Flag,
      title: "ACCIONES",
      subtitle: "¿Qué haremos?",
      level: 5,
      color: "from-red-500 to-red-700",
      ring: "ring-red-300/40",
      shadow: "shadow-red-400/40",
    },
  ];

  const getSize = (obj: any, w: number) => {
    if (w >= 1024) return obj.lg;
    if (w >= 640) return obj.md;
    return obj.base;
  };

  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dSize = getSize(diagramSize, windowWidth);
  const nSize = getSize(nodeSize, windowWidth);
  const cSize = getSize(centralSize, windowWidth);
  const iSize = getSize(iconSize, windowWidth);
  const r = getSize(radius, windowWidth);

  return (
    <div
      className="relative flex items-center justify-center mx-auto"
      style={{
        width: dSize,
        height: dSize,
        minWidth: 260,
        minHeight: 260,
        maxWidth: 520,
      }}
    >
      <div
        className="absolute z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-2xl"
        style={{
          width: cSize,
          height: cSize,
          left: `calc(50% - ${cSize / 2}px)`,
          top: `calc(50% - ${cSize / 2}px)`,
        }}
      >
        <div className="text-center select-none">
          <Compass
            className="mx-auto mb-2 drop-shadow-lg"
            style={{ width: iSize, height: iSize, color: "#fff" }}
          />

          {isDesktop && (
            <div className="text-xs text-white font-medium tracking-wide">
              HOSHIN KANRI
            </div>
          )}
        </div>
      </div>

      {strategyLayers.map((layer, index) => {
        const angle = index * (360 / strategyLayers.length) - 90; // 360/5 = 72 grados, desde arriba
        const x = Math.cos((angle * Math.PI) / 180) * r;
        const y = Math.sin((angle * Math.PI) / 180) * r;
        const Icon = layer.icon;
        const hovered = isHovered === index;

        return (
          <div
            key={index}
            className={`
              absolute flex flex-col items-center justify-center
              font-bold transform -translate-x-1/2 -translate-y-1/2
              transition-all duration-300
              cursor-pointer group
              ${hovered ? "scale-110 z-20" : "hover:scale-105"}
            `}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: nSize,
              height: nSize,
              zIndex: hovered ? 20 : 2,
            }}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div
              className={`
                w-full h-full rounded-2xl
                bg-gradient-to-br ${layer.color}
                flex flex-col items-center justify-center
                transition-all duration-300
              `}
            >
              <Icon
                className="mb-1 drop-shadow-lg"
                style={{
                  width: iSize,
                  height: iSize,
                  color: "#fff",
                  transition: "filter 0.2s",
                }}
              />
              <div className="text-[10px] md:text-xs text-center leading-tight tracking-wide text-white">
                {layer.title}
              </div>
              {isDesktop && (
                <div className="text-[8px] md:text-[10px] text-white font-normal text-center leading-tight">
                  {layer.subtitle}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StratBridgeIcon;
