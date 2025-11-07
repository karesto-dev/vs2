import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Vorion Studio - Développement SaaS, Apps Mobile & Création Digitale',
  description: 'Vorion Studio spécialisé en développement de SaaS, applications mobiles, sites web, e-commerce et création digitale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${orbitron.variable} font-sans`}>{children}</body>
    </html>
  )
}

