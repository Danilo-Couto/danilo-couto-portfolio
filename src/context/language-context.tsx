'use client';

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

export const defaultLocale = 'pt';
interface LanguageContextType {
  locale: string;
  changeLocale: (newLocale: string) => void;
}

export const languageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang') || locale;
    setLocale(storedLanguage);
  }, [locale]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('lang', newLocale);
  };

  return (
    <languageContext.Provider value={{ locale, changeLocale }}>
      {children}
    </languageContext.Provider>
  );
}

export const useLaguageContext = () => {
  const context = useContext(languageContext);
  if (!context) {
    throw new Error('useLaguageContext must be used within a LanguageProvider');
  }
  return context;
}
