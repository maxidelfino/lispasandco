import type React from "react";
import { MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const LinkedInCard: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const texts = {
    title: {
      [Language.SPANISH]: "Conecta con nosotros",
      [Language.ENGLISH]: "Connect with us",
      [Language.PORTUGUESE]: "Conecte-se conosco",
    },
    tagline: {
      [Language.SPANISH]: "No existen soluciones plug and play...",
      [Language.ENGLISH]: "There are no plug and play solutions...",
      [Language.PORTUGUESE]: "Não existem soluções plug and play...",
    },
    location: {
      [Language.SPANISH]: "Rosario, Santa Fe, Argentina",
      [Language.ENGLISH]: "Rosario, Santa Fe, Argentina",
      [Language.PORTUGUESE]: "Rosário, Santa Fé, Argentina",
    },
    contactInfo: {
      [Language.SPANISH]: "Información de contacto",
      [Language.ENGLISH]: "Contact information",
      [Language.PORTUGUESE]: "Informações de contato",
    },
    followers: {
      [Language.SPANISH]: "13,330 seguidores • Más de 500 contactos",
      [Language.ENGLISH]: "13,330 followers • 500+ connections",
      [Language.PORTUGUESE]: "13.330 seguidores • Mais de 500 conexões",
    },
    viewProfile: {
      [Language.SPANISH]: "Ver perfil",
      [Language.ENGLISH]: "View profile",
      [Language.PORTUGUESE]: "Ver perfil",
    },
  };

  return (
    <section
      id="linkedin"
      className="py-20 px-4 bg-gradient-to-tr from-slate-50 via-white to-blue-50"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-12 text-center">
          {texts.title[currentLanguage]}
        </h2>

        <div className="bg-white rounded-lg shadow-lg border border-[var(--color-border)] overflow-hidden">
          {/* LinkedIn-style card content */}
          <div className="p-8 text-center">
            {/* LinkedIn Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[var(--color-secondary)] rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </div>

            {/* Company Name */}
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
              LYSPAS & CO.
            </h3>

            {/* Tagline */}
            <p className="text-[var(--color-text)] mb-4 text-lg">
              {texts.tagline[currentLanguage]}
            </p>

            {/* Location and Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-[var(--color-text)] mb-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{texts.location[currentLanguage]}</span>
              </div>
              <span className="text-[var(--color-secondary)]">•</span>
              <a
                href="https://www.linkedin.com/company/lyspasandco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-secondary)] hover:underline font-medium"
              >
                {texts.contactInfo[currentLanguage]}
              </a>
            </div>

            {/* Followers and Connections */}
            <p className="text-sm text-[var(--color-text)] mb-8">
              {texts.followers[currentLanguage]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary)] transition-colors"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/lyspasandco/",
                    "_blank"
                  )
                }
              >
                {texts.viewProfile[currentLanguage]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInCard;
