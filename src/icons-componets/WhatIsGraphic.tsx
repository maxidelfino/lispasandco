import React from "react";

import { CheckCircle, XCircle, Target, Zap, XOctagon } from "lucide-react";

const ICON_SIZE = 8;
const OUTER_SIZE = 16;
const CENTER_SIZE = 32;

const WhatIsGraphic: React.FC = () => (
  <div className="flex items-center justify-center py-8">
    <div className="relative">
      {/* Central WasteZero */}
      <div
        className={`w-${CENTER_SIZE} h-${CENTER_SIZE} bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl`}
      >
        <div className="text-center">
          <Target className={`w-${ICON_SIZE} h-${ICON_SIZE} mx-auto mb-1`} />
          <div className="text-sm">WasteZero™</div>
        </div>
      </div>

      {/* "Es" icons */}
      {[
        {
          icon: CheckCircle,
          offset: ["-top-10", "-left-10"],
          color: "bg-green-500",
        },
        { icon: Zap, offset: ["-top-10", "-right-10"], color: "bg-green-500" },
      ].map(({ icon: Icon, offset, color }, idx) => (
        <div
          key={idx}
          className={`absolute ${offset[0]} ${offset[1]} w-${OUTER_SIZE} h-${OUTER_SIZE} ${color} rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110`}
        >
          <Icon className={`w-${ICON_SIZE} h-${ICON_SIZE}`} />
        </div>
      ))}

      {/* "No es" icons */}
      {[
        {
          icon: XCircle,
          offset: ["-bottom-10", "-left-10"],
          color: "bg-red-500",
        },
        {
          icon: XOctagon,
          offset: ["-bottom-10", "-right-10"],
          color: "bg-red-500",
        },
      ].map(({ icon: Icon, offset, color }, idx) => (
        <div
          key={idx}
          className={`absolute ${offset[0]} ${offset[1]} w-${OUTER_SIZE} h-${OUTER_SIZE} ${color} rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110`}
        >
          <Icon className={`w-${ICON_SIZE} h-${ICON_SIZE}`} />
        </div>
      ))}
    </div>
  </div>
);

export default WhatIsGraphic;
