import React from 'react';
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../context/language-context'
import { ThemeContext } from '@/context/theme_context'
import { DataContext } from '@/context/data_context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danilo Couto Portfolio',
  description: 'Criado em NextJS e TypeScript',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="pt">
      <body className={inter.className} >
         <LanguageProvider>
          <ThemeContext >
            <DataContext >
             {children}
            </DataContext>
          </ThemeContext>
        </LanguageProvider>
      </body>
    </html>
  )
}
