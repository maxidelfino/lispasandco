import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    if (location.pathname === "/") {
      // Ya estamos en homepage, solo hacer scroll
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navegar a homepage y luego hacer scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Ya estamos en homepage, scroll al inicio
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navegar a homepage
      navigate("/");
    }
  };

  const handleAboutUsClick = () => {
    navigate("/sobre-nosotros");
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname === "/") {
      // Ya estamos en homepage, scroll al formulario de contacto
      const element = document.querySelector("footer");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navegar a homepage y luego hacer scroll al formulario
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector("footer");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className={`text-2xl font-bold tracking-wider transition-colors duration-300 hover:scale-105 ${
                isScrolled ? "text-[var(--color-primary)]" : "text-white"
              }`}
            >
              LYSPAS & CO
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation("inicio")}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-[var(--color-text)] hover:text-[var(--color-secondary)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Inicio
              </button>
              <button
                onClick={handleAboutUsClick}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-[var(--color-text)] hover:text-[var(--color-secondary)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Sobre Nosotros
              </button>
              {/* <button 
                onClick={() => handleNavigation('comparar')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-[var(--color-text)] hover:text-[var(--color-secondary)]' : 'text-white/90 hover:text-white'
                }`}
              >
                Comparar
              </button> */}
              <button
                onClick={handleContactClick}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-[var(--color-text)] hover:text-[var(--color-secondary)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Contacto
              </button>

              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <Globe
                  className={`w-4 h-4 ${
                    isScrolled ? "text-[var(--color-text)]" : "text-white/90"
                  }`}
                />
                <select
                  className={`bg-transparent border-none text-sm font-medium cursor-pointer ${
                    isScrolled ? "text-[var(--color-text)]" : "text-white/90"
                  }`}
                >
                  <option value="es">ES</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-[var(--color-primary)] hover:bg-[var(--color-bg)]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-[var(--color-border)] px-4 py-4 space-y-4">
            <button
              onClick={() => handleNavigation("inicio")}
              className="block text-[var(--color-text)] hover:text-[var(--color-secondary)] font-medium w-full text-left"
            >
              Inicio
            </button>
            <button
              onClick={handleAboutUsClick}
              className="block text-[var(--color-text)] hover:text-[var(--color-secondary)] font-medium w-full text-left"
            >
              Sobre Nosotros
            </button>
            {/* <button
              onClick={() => handleNavigation("comparar")}
              className="block text-[var(--color-text)] hover:text-[var(--color-secondary)] font-medium w-full text-left"
            >
              Comparar
            </button> */}
            <button
              onClick={handleContactClick}
              className="block text-[var(--color-text)] hover:text-[var(--color-secondary)] font-medium w-full text-left"
            >
              Contacto
            </button>
            <div className="flex items-center space-x-2 pt-2 border-t border-[var(--color-border)]">
              <Globe className="w-4 h-4 text-[var(--color-text)]" />
              <select className="bg-transparent border-none text-sm font-medium text-[var(--color-text)]">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNavigation;
