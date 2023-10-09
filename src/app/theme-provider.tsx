'use client'
 
import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({ children }: any) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}