'use client'
import { createContext, useContext, useEffect, useState } from 'react';

export const themeContext = createContext([]);

export const useThemeContext=()=> useContext(themeContext);

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme') || theme;
  //   setTheme(storedTheme);
  // }, [theme, setTheme]);

  const toogleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); 
    localStorage.setItem('theme', newTheme);
  }

  return (
    <themeContext.Provider value={{ theme, toogleTheme }}>
      <div className={`${theme} anim`}>
        {children}
      </div>
    </themeContext.Provider>
  );
}

