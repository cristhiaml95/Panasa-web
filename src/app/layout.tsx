import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EstudIA - Tu parceiro de estudos con IA',
  description: 'Muy más que un cuaderno digital. Tu parceiro de estudos con inteligencia artificial.',
  icons: {
    icon: [
      { url: '/img/logoBlanco.png' },
      { url: '/favicon.png' },
      { url: '/icon.png' }
    ],
    shortcut: '/img/logoBlanco.png',
    apple: '/img/logoBlanco.png',
  },
  openGraph: {
    title: 'EstudIA - Tu parceiro de estudos con IA',
    description: 'Muy más que un cuaderno digital. Tu parceiro de estudos con inteligencia artificial.',
    images: ['/img/logoBlanco.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logoBlanco.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/logoBlanco.png" />
        <link rel="apple-touch-icon" href="/img/logoBlanco.png" />
        <link rel="shortcut icon" href="/img/logoBlanco.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}