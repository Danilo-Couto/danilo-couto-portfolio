'use client'
import { createContext, useContext, useEffect, useState } from 'react';

export const themeModeContext = createContext([]);

export const ThemeModeContext = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  
  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode') || themeMode;
    setThemeMode(storedThemeMode);
  }, [themeMode, setThemeMode]);

  const toogleThemeMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode); 
    localStorage.setItem('themeMode', newMode)
  }

  return (
    <themeModeContext.Provider value={{ themeMode, toogleThemeMode }}>
      {children}
    </themeModeContext.Provider>
  );
}

export const useThemeModeContext=()=> useContext(themeModeContext);
