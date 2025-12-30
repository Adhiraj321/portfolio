import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

// Outfit font - similar to Clash Display
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-zeta-ten-gnajypdxz1.vercel.app/'),
  title: {
    default: 'Kanishk Trikha',
    template: '%s | Kanishk Trikha'
  },
  description: 'Marketing & Commerce Professional specializing in Strategic Communication, Data Management, and Creative Campaigns. Passionate about driving results through innovative marketing strategies.',
  keywords: ['Marketing Professional', 'Commerce', 'Strategic Communication', 'Data Management', 'Content Creation', 'Marketing Campaigns', 'Delhi University', 'Kanishk Trikha', 'Portfolio', 'B.Com'],
  authors: [{ name: 'Kanishk Trikha', url: 'https://portfolio-zeta-ten-gnajypdxz1.vercel.app/' }],
  creator: 'Kanishk Trikha',
  publisher: 'Kanishk Trikha',
  alternates: {
    canonical: 'https://portfolio-zeta-ten-gnajypdxz1.vercel.app/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-zeta-ten-gnajypdxz1.vercel.app/',
    title: 'Kanishk Trikha | Marketing & Commerce Professional',
    description: 'Marketing & Commerce Professional specializing in Strategic Communication, Data Management, and Creative Campaigns.',
    siteName: 'Kanishk Trikha Portfolio',
    images: [{
      url: '/og-image.webp',
      width: 1200,
      height: 630,
      alt: 'Kanishk Trikha - Marketing & Commerce Professional Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanishk Trikha | Marketing & Commerce Professional',
    description: 'Marketing & Commerce Professional specializing in Strategic Communication, Data Management, and Creative Campaigns.',
    images: ['https://portfolio-zeta-ten-gnajypdxz1.vercel.app/og-image.webp'],
    creator: '@_bjkjff235__k',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kanishk Trikha',
  url: 'https://portfolio-zeta-ten-gnajypdxz1.vercel.app/',
  image: 'https://portfolio-zeta-ten-gnajypdxz1.vercel.app/profile.webp',
  jobTitle: 'Marketing & Commerce Professional',
  description: 'Marketing & Commerce Professional specializing in Strategic Communication, Data Management, and Creative Campaigns.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.instagram.com/_bjkjff235__k',
    'https://www.linkedin.com/in/kanishk-trikha-307029247',
  ],
  knowsAbout: [
    'Marketing',
    'Commerce',
    'Strategic Communication',
    'Data Management',
    'Content Creation',
    'Campaign Management',
    'Social Media Marketing',
    'Business Development',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
