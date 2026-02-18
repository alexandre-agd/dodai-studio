import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { translations, Language } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Proxy de sécurité pour les traductions.
 * Empêche les crashs React si une clé est manquante.
 */
const createSafeTranslationProxy = (obj: any, lang: string, path: string = ''): any => {
  return new Proxy(obj || {}, {
    get(target, prop) {
      // Ignorer les symboles internes React pour ne pas interférer avec le moteur de rendu
      if (typeof prop !== 'string' || prop === 'then' || prop === 'toJSON' || prop === '$$typeof') {
        return target[prop];
      }
      
      const currentPath = path ? `${path}.${prop}` : prop;
      const value = target[prop];

      if (value === undefined) {
        console.warn(`[Dodai Studio] Missing translation key: "${currentPath}" for language: "${lang}"`);
        return `[Missing: ${currentPath}]`;
      }

      // Si c'est un tableau, on le renvoie tel quel
      if (Array.isArray(value)) {
        return value;
      }

      // Si c'est un objet, on continue la récursion de sécurité
      if (typeof value === 'object' && value !== null) {
        return createSafeTranslationProxy(value, lang, currentPath);
      }

      return value;
    }
  });
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const getUrlLanguage = (): Language => {
    const lang = searchParams.get('lang');
    if (lang === 'en' || lang === 'jp' || lang === 'fr') {
      return lang as Language;
    }
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getUrlLanguage());

  // Synchronisation descendante : l'URL change -> on met à jour le state
  useEffect(() => {
    const urlLang = getUrlLanguage();
    if (urlLang !== language) {
      setLanguageState(urlLang);
    }
  }, [searchParams]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setSearchParams({ lang }, { replace: true });
  };

  // On protège l'objet de traduction avec notre Proxy
  const safeTranslations = createSafeTranslationProxy(translations[language], language);

  const value = {
    language,
    setLanguage,
    t: safeTranslations,
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