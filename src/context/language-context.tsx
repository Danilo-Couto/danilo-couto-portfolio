'use client'
import { createContext, useContext, useEffect, useState } from 'react';

export const LanguageContext = createContext([]);

export const defaultLocale = 'pt';
// export const locales = ['pt', 'en', 'es'];

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('pt');
  
  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang') || locale;
    setLocale(storedLanguage);
  }, [locale]);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('lang', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLaguageContext=()=> useContext(LanguageContext);