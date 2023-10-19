'use client';

import React, { useEffect, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  theme: string;
  toogleTheme: () => void;
}

export const themeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContext = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || theme;
    setTheme(storedTheme);
  }, [theme, setTheme]);

  const toogleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <themeContext.Provider value={{ theme, toogleTheme }}>
      <div className={`${theme} anim`}>
        {children}
      </div>
    </themeContext.Provider>
  );
};

export const useThemeContext = () => useContext(themeContext);
