import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Define the CSS variable name
})

export const metadata: Metadata = {
  title: 'Gidz Cleaning Services - Premium Cleaning in Accra',
  description: 'Professional home cleaning and turnover cleaning for short-stays, Airbnbs, and hotels in Accra. Hotel-level finish, every time.',
  keywords: 'cleaning service, Accra, home cleaning, airbnb cleaning, hotel cleaning, turnover',
  openGraph: {
    title: 'Gidz Cleaning Services - Premium Cleaning in Accra',
    description: 'Professional cleaning for homes and short-stays.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08090B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
