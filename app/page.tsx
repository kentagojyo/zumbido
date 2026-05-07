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
