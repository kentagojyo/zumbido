import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'ZUMBIDO TATTOO | Underground Tattoo Studio in Nakameguro, Tokyo',
  description: 'Premium tattoo studio in Nakameguro, Tokyo. Specializing in Japanese traditional, blackwork, geometric, realism, and fine line tattoos. English-speaking artists welcoming international clients.',
  keywords: ['tattoo tokyo', 'nakameguro tattoo', 'japanese tattoo', 'tokyo tattoo studio', 'tattoo artist tokyo', 'japanese tattoo tokyo', 'blackwork tattoo japan', 'best tattoo tokyo'],
  authors: [{ name: 'ZUMBIDO TATTOO' }],
  creator: 'ZUMBIDO TATTOO',
  publisher: 'ZUMBIDO TATTOO',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zumbidotattoo.com',
    siteName: 'ZUMBIDO TATTOO',
    title: 'ZUMBIDO TATTOO | Underground Tattoo Studio in Nakameguro, Tokyo',
    description: 'Premium tattoo studio in Nakameguro, Tokyo. Bold lines. Dark culture. Tokyo ink.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1024,
        height: 1024,
        alt: 'ZUMBIDO TATTOO - Nakameguro, Tokyo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZUMBIDO TATTOO | Nakameguro, Tokyo',
    description: 'Underground tattoo studio in Tokyo. Japanese traditional, blackwork, realism & more.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://zumbidotattoo.com',
  },
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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TattooParlor',
              name: 'ZUMBIDO TATTOO',
              description: 'Underground tattoo studio in Nakameguro, Tokyo. Specializing in Japanese traditional, blackwork, geometric, realism, and fine line tattoos.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1-2-3 Nakameguro',
                addressLocality: 'Meguro-ku',
                addressRegion: 'Tokyo',
                postalCode: '153-0061',
                addressCountry: 'JP',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 35.6439,
                longitude: 139.6985,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '12:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '11:00',
                  closes: '20:00',
                },
              ],
              priceRange: '¥¥¥',
              image: 'https://zumbidotattoo.com/images/hero.jpg',
              url: 'https://zumbidotattoo.com',
              sameAs: ['https://instagram.com/zumbido_tattoo'],
              acceptsReservations: true,
              paymentAccepted: 'Cash, Credit Card, PayPay, LINE Pay',
              currenciesAccepted: 'JPY',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
