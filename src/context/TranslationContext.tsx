
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, languages, TranslationKey } from '@/lib/translations';

type TranslationContextType = {
  currentLanguage: typeof languages[0];
  setLanguage: (language: typeof languages[0]) => void;
  t: (key: TranslationKey) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const setLanguage = (language: typeof languages[0]) => {
    setCurrentLanguage(language);
    // You could save the language preference to localStorage here as well
  };

  const t = (key: TranslationKey): string => {
    const langTranslations = translations[currentLanguage.code];
    return langTranslations?.[key] || translations['en'][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
