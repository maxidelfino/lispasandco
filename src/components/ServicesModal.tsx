"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import ServiceCardList, { isComingSoon } from "./ServiceCardList";
import type { Service } from "../types";

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  servicesData: Service[];
}

const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  subtitle,
  servicesData,
}) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector("footer");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const showComingSoon = servicesData.some((service) => isComingSoon(service));

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-[var(--color-bg)] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[var(--color-bg)] border-b border-[var(--color-border)] p-6 flex justify-between items-center rounded-t-2xl z-50">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              {subtitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--color-border)] rounded-full transition-colors group"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6 text-[var(--color-text)] group-hover:text-[var(--color-primary)]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Service Carousel */}
          <ServiceCardList services={servicesData} />

          {/* Additional Info */}
          {!showComingSoon && (
            <div className="mt-8 p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
              <div className="text-center">
                <h4 className="font-bold text-[var(--color-primary)] mb-2">
                  ¿No estás seguro cuál programa es el adecuado?
                </h4>
                <p className="text-[var(--color-text)] mb-4">
                  Nuestros expertos pueden ayudarte a identificar la solución
                  perfecta para tu organización.
                </p>
                <button
                  className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--color-secondary)] transition-colors"
                  onClick={handleContactClick}
                >
                  Solicitar Consulta Gratuita
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;
