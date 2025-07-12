import React from "react";

const headers = [
  "",
  "Día 1",
  "Día 2",
  "Día 3",
  "Día 4",
  "Día 5",
  "Día 5",
  "Mes 11",
];

const rows = [
  { label: "Fase Inicial", highlights: [0] },
  { label: "Fase 1", highlights: [1] },
  { label: "Fase 2", highlights: [2] },
  { label: "Fase 3", highlights: [3] },
  { label: "Fase 4", highlights: [3] },
  { label: "Fase 5", highlights: [4] },
  { label: "Fase Final", highlights: [5, 6] },
];

const colors = [
  "bg-gray-400",
  "bg-yellow-400",
  "bg-yellow-400",
  "bg-yellow-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-green-400",
  "bg-green-400",
];

const ProjectFocusMethodologyGraphic: React.FC = () => (
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
            const cellIdx = colIndex; // 0-based for highlights
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

export default ProjectFocusMethodologyGraphic;
