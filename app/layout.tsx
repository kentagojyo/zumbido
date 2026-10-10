import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/components/google-analytics'
import { ogImageUrl, siteUrl } from '@/lib/seo'
import { studioInfo } from '@/lib/data'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zumbido Tattoo Tokyo | Nakameguro Tattoo Studio',
    template: '%s | Zumbido Tattoo Tokyo',
  },
  description:
    'ZUMBIDO TATTOO is a premium Nakameguro Tattoo and Tokyo Tattoo Studio for custom work, guest artists, and English-friendly tattoo consultations in Tokyo.',
  keywords: [
    'Nakameguro Tattoo',
    'Tokyo Tattoo Studio',
    'English-friendly tattoo studio in Tokyo',
    'Guest Artists in Tokyo',
    'Japanese tattoo Tokyo',
    'blackwork tattoo Japan',
  ],
  authors: [{ name: 'ZUMBIDO TATTOO' }],
  creator: 'ZUMBIDO TATTOO',
  publisher: 'ZUMBIDO TATTOO',
  category: 'Tattoo studio',
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Zumbido Tattoo Tokyo',
    title: 'Zumbido Tattoo Tokyo | Nakameguro Tattoo Studio',
    description:
      'A dark, premium Tokyo Tattoo Studio in Nakameguro with resident artists, guest artists, and English-friendly consultation support.',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'ZUMBIDO TATTOO Open Graph image for an underground tattoo studio in Nakameguro, Tokyo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zumbido Tattoo Tokyo | Nakameguro Tattoo Studio',
    description:
      'Premium Tokyo Tattoo Studio in Nakameguro with English-friendly support and guest artists.',
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'TattooParlor'],
      '@id': `${siteUrl}/#studio`,
      name: studioInfo.name,
      alternateName: 'ZUMBIDO TATTOO',
      additionalType: 'https://schema.org/TattooParlor',
      description:
        'Premium Nakameguro Tattoo and Tokyo Tattoo Studio offering custom tattoo work, guest artists, and English-friendly consultations in Tokyo.',
      keywords: ['Tattoo Shop', 'Nakameguro Tattoo', 'Tokyo Tattoo Studio'],
      telephone: studioInfo.phoneInternational,
      email: studioInfo.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1-10-3 Kamimeguro 3F',
        addressLocality: 'Meguro-ku',
        addressRegion: 'Tokyo',
        postalCode: '153-0051',
        addressCountry: 'JP',
      },
      areaServed: ['Nakameguro', 'Tokyo', 'Japan'],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.6439,
        longitude: 139.6985,
      },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: studioInfo.hours.opens,
        closes: studioInfo.hours.closes,
      }],
      priceRange: `JPY ${studioInfo.smallTattooMinimum}+`,
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Tattoo services', itemListElement: [{
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Small Tattoo', description: `Small tattoos from ¥10,000. Deposit: ${studioInfo.deposit}. ${studioInfo.cancellationPolicy}` },
        priceSpecification: { '@type': 'PriceSpecification', minPrice: studioInfo.smallTattooMinimum, priceCurrency: 'JPY' },
      }] },
      image: ogImageUrl,
      logo: `${siteUrl}/images/zumbido-logo.png`,
      url: siteUrl,
      sameAs: [studioInfo.instagramUrl],
      acceptsReservations: true,
      paymentAccepted: studioInfo.paymentMethods,
      currenciesAccepted: 'JPY',
      knowsLanguage: ['en', 'ja'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Zumbido Tattoo Tokyo',
      url: siteUrl,
      publisher: {
        '@id': `${siteUrl}/#studio`,
      },
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <GoogleAnalytics />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
