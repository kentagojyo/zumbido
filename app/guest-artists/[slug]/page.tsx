import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { guestArtists } from '@/lib/data'
import { ogImageUrl, siteUrl } from '@/lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return guestArtists.map((guest) => ({
    slug: guest.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guest = guestArtists.find((artist) => artist.slug === slug)

  if (!guest) {
    return {
      title: 'Guest Artist Not Found',
    }
  }

  return {
    title: `${guest.name} | Guest Artist in Tokyo`,
    description: `${guest.name} guest artist information for ZUMBIDO TATTOO in Nakameguro, Tokyo.`,
    alternates: {
      canonical: `${siteUrl}/guest-artists/${guest.slug}`,
    },
    openGraph: {
      title: `${guest.name} | Guest Artist at ZUMBIDO TATTOO`,
      description: `${guest.name} guest artist information for ZUMBIDO TATTOO in Tokyo.`,
      url: `${siteUrl}/guest-artists/${guest.slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${guest.name}, guest artist at ZUMBIDO TATTOO Tokyo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guest.name} | Guest Artist at ZUMBIDO TATTOO`,
      description: `${guest.name} guest artist information for ZUMBIDO TATTOO in Tokyo.`,
      images: [ogImageUrl],
    },
  }
}

export default async function GuestArtistDetailPage({ params }: PageProps) {
  const { slug } = await params
  const guest = guestArtists.find((artist) => artist.slug === slug)

  if (!guest) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20 noise-overlay">
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/guest-artists"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Guest Artists</span>
            </Link>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative aspect-[3/4] overflow-hidden border border-border bg-secondary">
                <Image
                  src={guest.profileImage}
                  alt={`${guest.name}, guest artist at ZUMBIDO TATTOO Tokyo`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover [filter:contrast(1.06)_saturate(0.86)_brightness(0.9)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                  Guest Artist
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  {guest.name}
                </h1>

                <div className="space-y-3 text-muted-foreground mb-8">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{guest.city}, {guest.country}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{guest.visitingDates}</span>
                  </p>
                </div>

                {guest.bio && (
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {guest.bio}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {guest.style.map((style) => (
                    <span
                      key={style}
                      className="px-3 py-1.5 bg-primary/10 text-xs text-primary uppercase tracking-wider"
                    >
                      {style}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs w-full sm:w-auto"
                >
                  <Link href="/#booking">Booking Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
