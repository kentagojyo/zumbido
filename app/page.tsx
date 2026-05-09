import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ArtistsSection } from '@/components/sections/artists'
import { GuestArtistsPreview } from '@/components/sections/guest-artists-preview'
import { WorksSection } from '@/components/sections/works'
import { BookingSection } from '@/components/sections/booking'
import { LocationSection } from '@/components/sections/location'
import { FAQSection } from '@/components/sections/faq'
import { ogImageUrl, siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Zumbido Tattoo Tokyo | Nakameguro Tattoo Studio',
  description:
    'ZUMBIDO TATTOO is a premium Tokyo Tattoo Studio in Nakameguro for custom tattoos, resident artists, guest artists, and English-friendly consultations.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Zumbido Tattoo Tokyo | Nakameguro Tattoo Studio',
    description:
      'Explore resident artists, guest artists, custom work, and English-friendly tattoo support at ZUMBIDO TATTOO in Nakameguro, Tokyo.',
    url: siteUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'ZUMBIDO TATTOO social share image with studio atmosphere in Nakameguro, Tokyo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zumbido Tattoo Tokyo | Nakameguro Tattoo Studio',
    description:
      'Premium Nakameguro Tattoo studio with English-friendly consultation support.',
    images: [ogImageUrl],
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="noise-overlay">
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
        <GuestArtistsPreview />
        <WorksSection />
        <BookingSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  )
}
