import React from "react";

const AssetBridgeIcon: React.FC = () => {
  // Dimensiones ideales para el modal horizontal (máx 500-520px de ancho)
  // El alto debe ser compacto, no más de 320-340px
  // Todo el contenido debe estar centrado y no usar min-h-screen

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-0 m-0">
      {/* Contenedor principal compacto y horizontal */}
      <div
        className="relative bg-white rounded-2xl px-4 py-6 shadow-xl border border-gray-100 flex flex-col items-center"
        style={{
          width: "100%",
          maxWidth: 480,
          minWidth: 320,
          margin: "0 auto",
        }}
      >
        {/* Etiquetas superiores */}
        <div
          className="flex flex-row justify-between items-start mb-4 w-full"
          style={{ maxWidth: 420 }}
        >
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-2 rounded-lg shadow border border-gray-200 text-xs font-bold text-gray-800 text-center leading-tight w-40">
            Plan de
            <br />
            Mantenimiento
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-2 rounded-lg shadow border border-gray-200 text-xs font-bold text-gray-800 text-center leading-tight w-40">
            Entorno
            <br />
            Operativo
          </div>
        </div>

        {/* Flechas pequeñas */}
        <div
          className="flex flex-row justify-between items-center mb-2 w-full"
          style={{ maxWidth: 420, paddingLeft: 48, paddingRight: 48 }}
        >
          {[0, 1].map((i) => (
            <div className="flex flex-col items-center" key={i}>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderTop: "10px solid #4B5563",
                }}
              />
              <div className="w-0.5 h-5 bg-gray-600" />
            </div>
          ))}
        </div>

        {/* Diagrama de Venn compacto */}
        <div className="relative mb-2 flex justify-center w-full">
          <svg
            width="320"
            height="120"
            viewBox="0 0 320 120"
            className="overflow-visible drop-shadow"
            style={{ maxWidth: "100%" }}
          >
            <defs>
              <radialGradient id="leftCircle" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#C8D4E0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#A8B8C8" stopOpacity="0.8" />
              </radialGradient>
              <radialGradient id="rightCircle" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#F0EAE0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E0D5C8" stopOpacity="0.8" />
              </radialGradient>
            </defs>
            {/* Círculo izquierdo */}
            <circle
              cx="100"
              cy="60"
              r="50"
              fill="url(#leftCircle)"
              stroke="#9BB0C4"
              strokeWidth="2"
              opacity="0.85"
            />
            {/* Círculo derecho */}
            <circle
              cx="180"
              cy="60"
              r="50"
              fill="url(#rightCircle)"
              stroke="#D4C5B8"
              strokeWidth="2"
              opacity="0.85"
            />
            {/* Intersección */}
            <ellipse
              cx="140"
              cy="60"
              rx="22"
              ry="40"
              fill="#7EB887"
              opacity="0.6"
            />
            {/* Texto en la intersección */}
            <text
              x="140"
              y="58"
              textAnchor="middle"
              className="fill-gray-900 font-bold"
              style={{ fontSize: "13px", fontFamily: "system-ui" }}
            >
              Confiabilidad
            </text>
            <text
              x="140"
              y="74"
              textAnchor="middle"
              className="fill-gray-900 font-bold"
              style={{ fontSize: "13px", fontFamily: "system-ui" }}
            >
              lograda
            </text>
          </svg>
        </div>

        {/* Flecha grande vertical */}
        <div className="flex flex-col items-center mb-2">
          <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-green-800 rounded-t-full shadow" />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "12px solid #166534",
              marginTop: -2,
            }}
          />
        </div>

        {/* Caja final */}
        <div className="flex justify-center w-full">
          <div className="bg-gradient-to-br from-green-700 to-green-800 px-6 py-3 rounded-xl shadow border border-green-600 text-white font-bold text-center text-sm leading-tight w-48">
            Confiabilidad
            <br />
            inherente
          </div>
        </div>

        {/* Elementos decorativos sutiles */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-200 rounded-full opacity-20" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-200 rounded-full opacity-20" />
      </div>

      {/* Información adicional opcional, más compacta */}
      <div className="mt-4 max-w-md text-center px-2">
        <p className="text-xs text-gray-600 leading-relaxed">
          La{" "}
          <span className="font-semibold text-green-700">
            confiabilidad lograda
          </span>{" "}
          surge de la intersección entre un plan de mantenimiento efectivo y las
          condiciones óptimas del entorno operativo, resultando en la{" "}
          <span className="font-semibold text-green-700">
            confiabilidad inherente
          </span>{" "}
          del sistema.
        </p>
      </div>
    </div>
  );
};

export default AssetBridgeIcon;
