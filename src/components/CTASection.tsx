import React from "react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

interface CTASectionProps {
  title: string;
  description: string | string[];
  primaryButtonText: string;
  secondaryButtonText: string;
  onSecondaryClick?: () => void;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onSecondaryClick,
  className = "",
}) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    trackEvent(GA_EVENTS.CTA_CLICK, {
      location: "cta_section",
      label: "contact_button",
      cta_type: "contact",
      page_path: window.location.pathname,
    });
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector("footer");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className={`my-20 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-12 text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          {typeof description === "string" ? (
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          ) : Array.isArray(description) ? (
            description.map((line, i) => (
              <p
                key={i}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                {line}
              </p>
            ))
          ) : null}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
              onClick={handleContactClick}
            >
              {primaryButtonText}
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] hover:scale-105"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

// Ejemplo de uso:
/*
<CTASection
  title="¿Listo para eliminar los desperdicios ocultos de tu operación?"
  description="Implementa WasteZero™ y establece la base de disciplina operativa que impulsa mejoras continuas, eficiencia y resultados sostenibles."
  primaryButtonText="Contactar Ahora"
  secondaryButtonText="Descargar Ficha Técnica"
  onPrimaryClick={() => console.log('Contactar clicked')}
  onSecondaryClick={() => console.log('Descargar clicked')}
  className="mb-32"
/>
*/
