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
 * Deep merge utility to ensure fallback values for missing translation keys.
 * Merges source into target recursively.
 */
function deepMerge(target: any, source: any): any {
  if (!source) return target;
  const output = { ...target };
  
  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!(key in target)) {
        Object.assign(output, { [key]: source[key] });
      } else {
        output[key] = deepMerge(target[key], source[key]);
      }
    } else {
      Object.assign(output, { [key]: source[key] });
    }
  });
  
  return output;
}

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

  // Merge selected language with French as a base to prevent missing keys/objects
  const mergedT = language === 'fr' 
    ? translations.fr 
    : deepMerge(translations.fr, translations[language]);

  const value = {
    language,
    setLanguage,
    t: mergedT as typeof translations.fr,
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
