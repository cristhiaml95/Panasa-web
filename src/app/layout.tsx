import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EstudIA - Seu parceiro de estudos',
  description: 'Muito mais do que um caderno digital. Seu parceiro de estudos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}