import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ArrowLeft, MapPin, Calendar, Mail } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { guestArtists } from '@/lib/data'
import { ogImageUrl, siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Guest Artists in Tokyo',
  description:
    'Guest Artists in Tokyo at ZUMBIDO TATTOO, a premium Nakameguro Tattoo studio welcoming international artists and English-friendly clients.',
  keywords: ['Guest Artists in Tokyo', 'guest tattoo artist Tokyo', 'international tattoo artist Japan', 'Nakameguro guest spot'],
  alternates: {
    canonical: `${siteUrl}/guest-artists`,
  },
  openGraph: {
    title: 'Guest Artists in Tokyo | ZUMBIDO TATTOO',
    description:
      'International tattoo artists visiting our Nakameguro studio for limited engagements in Tokyo.',
    url: `${siteUrl}/guest-artists`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'ZUMBIDO TATTOO social share image for guest artists in Nakameguro, Tokyo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guest Artists in Tokyo | ZUMBIDO TATTOO',
    description:
      'Limited guest artist residencies at an English-friendly Tokyo Tattoo Studio in Nakameguro.',
    images: [ogImageUrl],
  },
}

export default function GuestArtistsPage() {
  const upcomingGuests = guestArtists.filter(g => g.status === 'upcoming')
  const pastGuests = guestArtists.filter(g => g.status === 'past')

  return (
    <>
      <Header />
      <main className="pt-20 noise-overlay">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                International
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Guest Artists
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ZUMBIDO TATTOO welcomes world-class tattoo artists from around the globe 
                for limited residencies at our Nakameguro, Tokyo studio. These Guest Artists
                in Tokyo offer a rare opportunity to get tattooed by visiting artists
                without leaving Japan.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Guests */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Upcoming Guest Artists
              </h2>
              <p className="text-muted-foreground mt-2">
                Book now before spots fill up
              </p>
            </div>

            {upcomingGuests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingGuests.map((guest) => (
                  <article 
                    key={guest.id}
                    className="bg-card border border-border hover:border-primary/30 transition-colors overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                      <div className="relative aspect-square sm:aspect-auto bg-secondary overflow-hidden">
                        <Image
                          src={guest.profileImage}
                          alt={`${guest.name}, international tattoo guest artist visiting Nakameguro, Tokyo`}
                          fill
                          sizes="(min-width: 640px) 220px, 100vw"
                          className="object-cover gritty-image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="sm:col-span-2 p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="px-2 py-1 bg-primary/20 text-primary text-xs uppercase tracking-wider">
                              Upcoming
                            </span>
                            <h3 className="text-xl font-serif font-bold text-foreground mt-3">
                              {guest.name}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-2 mt-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            <span>{guest.city}, {guest.country}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary shrink-0" />
                            <span>{guest.visitingDates}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Instagram className="w-4 h-4 text-primary shrink-0" />
                            <Link 
                              href={guest.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {guest.instagram}
                            </Link>
                          </div>
                        </div>

                        {guest.bio && (
                          <p className="text-sm text-muted-foreground mt-4">
                            {guest.bio}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2 mt-4">
                          {guest.style.map((style) => (
                            <span 
                              key={style}
                              className="px-2 py-1 bg-secondary text-xs text-muted-foreground uppercase tracking-wider"
                            >
                              {style}
                            </span>
                          ))}
                        </div>

                        <Button 
                          asChild 
                          className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs w-full sm:w-auto"
                        >
                          <Link 
                            href={guest.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book via Instagram
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border p-12 text-center">
                <p className="text-muted-foreground">
                  No upcoming guest artists at the moment. Follow us on Instagram for announcements.
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="mt-4 border-border hover:bg-secondary uppercase tracking-wider text-xs"
                >
                  <Link 
                    href="https://www.instagram.com/zumbidotattoo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow @zumbidotattoo
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Past Guests Archive */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Past Guest Artists
              </h2>
              <p className="text-muted-foreground mt-2">
                Artists who have graced our Tokyo studio
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastGuests.map((guest) => (
                <article 
                  key={guest.id}
                  className="bg-background border border-border p-6 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 bg-secondary shrink-0 overflow-hidden border border-border">
                      <Image
                        src={guest.profileImage}
                        alt={`${guest.name}, past guest tattoo artist at ZUMBIDO TATTOO Tokyo`}
                        fill
                        sizes="64px"
                        className="object-cover gritty-image"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground">
                        {guest.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {guest.city}, {guest.country}
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        {guest.visitingDates}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {guest.style.slice(0, 2).map((style) => (
                      <span 
                        key={style}
                        className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground/70"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA for Artists */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              For Artists
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Interested in a Guest Spot?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Are you an international tattoo artist looking to work in Tokyo? 
              ZUMBIDO TATTOO welcomes guest artists for limited residencies. 
              Our Nakameguro studio offers a creative environment, professional equipment, 
              and a dedicated client base eager for diverse styles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs"
              >
                <Link href="mailto:guests@v0-zombido.vercel.app">
                  <Mail className="w-4 h-4 mr-2" />
                  Apply for Guest Spot
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-border hover:bg-secondary uppercase tracking-wider text-xs"
              >
                <Link 
                  href="https://www.instagram.com/zumbidotattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  DM on Instagram
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
