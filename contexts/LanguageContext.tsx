
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Fonction pour récupérer la langue depuis l'URL ou par défaut 'fr'
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      // Vérifie si le paramètre est une langue valide
      if (langParam === 'en' || langParam === 'jp' || langParam === 'fr') {
        return langParam;
      }
    }
    return 'fr';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Fonction personnalisée pour changer la langue et mettre à jour l'URL
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.pushState({}, '', url);
    }
  };

  // Écoute les changements via les boutons Précédent/Suivant du navigateur
  useEffect(() => {
    const handlePopState = () => {
      setLanguageState(getInitialLanguage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
