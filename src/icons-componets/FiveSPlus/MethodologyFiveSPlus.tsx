import React from "react";

const headers = ["", "S1D1", "S1D2", "S2", "S6", "S8", "S12", "S20"];

const rows = [
  { label: "Fase Inicial", highlights: [0] },
  { label: "Fase 1", highlights: [0] },
  { label: "Fase 2", highlights: [1] },
  { label: "Fase 3", highlights: [2] },
  { label: "Fase 4", highlights: [3] },
  { label: "Fase 5", highlights: [4] },
  { label: "Fase 6", highlights: [5] },
  { label: "Fase Final", highlights: [6] },
];

const colors = [
  "bg-gray-400",
  "bg-gray-200",
  "bg-gray-200",
  "bg-red-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-blue-400",
  "bg-yellow-400",
];

const MethodologyFiveSPlus: React.FC = () => (
  <div className="py-4 px-4 overflow-x-auto">
    <div className="grid grid-cols-8 auto-rows-min gap-1 text-sm">
      {/* Header row */}
      {headers.map((text, idx) => (
        <div
          key={idx}
          className="border bg-gray-50 text-center font-semibold py-2"
        >
          {text}
        </div>
      ))}
      {/* Data rows */}
      {rows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {/* Label cell */}
          <div className="border bg-white font-bold px-2 py-2">{row.label}</div>
          {/* Data cells */}
          {headers.slice(1).map((_, colIndex) => {
            const cellIdx = colIndex;
            const isHighlight = row.highlights.includes(cellIdx);
            const colorClass = isHighlight ? colors[rowIndex] : "bg-white";
            return (
              <div
                key={colIndex}
                className={`border px-2 py-2 ${colorClass}`}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default MethodologyFiveSPlus;
