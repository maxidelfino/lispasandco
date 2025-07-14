"use client";

import React from "react";
// import Image from "next/image";
import { Linkedin, MapPin } from "lucide-react";
import Image from "next/image";

const LinkedInCard: React.FC = () => {
  return (
    <section id="comparar" className="py-20 px-4 bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-12 text-center">
          Conecta con nosotros
        </h2>

        <div className="relative bg-white rounded-2xl shadow-xl border border-[var(--color-border)] overflow-hidden">
          {/* Banner */}
          <div className="h-40 bg-gray-300" />

          {/* Avatar */}
          <div className="absolute left-8 top-24 w-28 h-28 rounded-full border-4 border-white overflow-hidden">
            {/* <Image
              src="/avatar-placeholder.png" // Pon tu imagen aquí
              alt="LYSPAS & CO."
              width={112}
              height={112}
            /> */}
          </div>

          {/* Content */}
          <div className="pt-16 px-8 pb-8">
            {/* Logo/Icono LinkedIn */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Nombre y descripción */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                LYSPAS & CO.
              </h3>
              <p className="text-[var(--color-text)] mb-4">
                No existen soluciones plug and play...
              </p>

              {/* Ubicación e info de contacto */}
              <div className="flex flex-wrap justify-center items-center space-x-2 text-sm text-[var(--color-text)] mb-2">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Rosario, Santa Fe, Argentina
                </span>
                <span>•</span>
                <a
                  href="#"
                  className="text-[var(--color-secondary)] hover:underline"
                >
                  Información de contacto
                </a>
              </div>

              {/* Seguidores y contactos */}
              <p className="text-sm text-[var(--color-text)]">
                13.330 seguidores &bull; Más de 500 contactos
              </p>
            </div>

            {/* Botones */}
            <div className="flex justify-center space-x-4">
              <button className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)] transition-colors">
                Ver perfil
              </button>
              <button className="border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition-all">
                Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInCard;
