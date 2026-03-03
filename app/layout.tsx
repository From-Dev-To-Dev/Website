import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'fromDevtoDev | Eventos que conectam devs de verdade',
  description: 'Hackathons, palestras e experiencias criadas por devs, para devs. Sem filtro. Sem enrolacao. Codigo real, historias reais.',
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${_inter.variable} ${_jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
