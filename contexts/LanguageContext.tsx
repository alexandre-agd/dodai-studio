import React, { createContext, useContext, ReactNode } from 'react';
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
function deepMerge<T extends Record<string, unknown>>(target: T, source: Record<string, unknown> | null | undefined): T {
  if (!source) return target;
  const output = { ...target };
  
  Object.keys(source).forEach(key => {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
      if (!(key in target)) {
        Object.assign(output, { [key]: sourceValue });
      } else if (targetValue && typeof targetValue === 'object' && !Array.isArray(targetValue)) {
        output[key as keyof T] = deepMerge(targetValue as Record<string, unknown>, sourceValue as Record<string, unknown>) as T[keyof T];
      }
    } else {
      Object.assign(output, { [key]: sourceValue });
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

  const language = getUrlLanguage();

  const setLanguage = (lang: Language) => {
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
