import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danilo Couto Portfolio',
  description: 'Criado em NextJS e TypeScript',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
