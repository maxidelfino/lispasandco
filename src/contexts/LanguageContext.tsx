import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "../types";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    Language.SPANISH
  );

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Aquí puedes agregar lógica adicional como guardar en localStorage
    localStorage.setItem("selectedLanguage", language);
  };

  // Cargar idioma desde localStorage al inicializar
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (
      savedLanguage &&
      Object.values(Language).includes(savedLanguage as Language)
    ) {
      setCurrentLanguage(savedLanguage as Language);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
