import '@/styles/globals.css'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Background } from '@/components/background'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Providers from './providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

type RootLayoutProps = {
  children: React.ReactNode
}

// Log the SITE_URL for debugging purposes
console.log('SITE_URL:', SITE_URL);

const siteUrl = SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'One Go Tools',
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  alternates: {
    canonical: siteUrl
  },
  keywords: [
    'tools',
    'free tool',
    'web tools',
    'tools for developers',
    'tools for designers',
    'tools for marketers'
  ],
  creator: 'sahil',
  openGraph: {
    url: siteUrl,
    type: 'website',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'vn_VN',
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      }
    ]
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-background font-sans antialiased scroll-smooth',
          fontSans.variable
        )}
      >
        <Providers>
          <Background />
          <Toaster richColors />

          <Header />
          <main className='relative mx-auto mb-16 max-w-6xl px-4 md:px-8 py-24'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
