import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import { Instagram, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InstagramFeedEmbed } from '@/components/instagram-feed-embed'
import { Button } from '@/components/ui/button'
import { artists } from '@/lib/data'
import { ogImageUrl, siteUrl } from '@/lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
}

function InstagramPostFallback({
  artistName,
  index,
  postUrl,
}: {
  artistName: string
  index: number
  postUrl?: string
}) {
  return (
    <div className="flex h-full min-h-[360px] flex-col justify-between bg-background p-6 text-left">
      <div className="flex items-center justify-between">
        <span className="font-serif text-5xl text-foreground/10">
          {String(index + 1).padStart(2, '0')}
        </span>
        <Instagram className="h-5 w-5 text-primary/70" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
          Instagram Work
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          View this selected piece from {artistName} directly on Instagram.
        </p>
        {postUrl && (
          <Link
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/75"
          >
            <Instagram className="h-4 w-4" />
            View on Instagram
          </Link>
        )}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const artist = artists.find((a) => a.slug === slug)
  
  if (!artist) {
    return {
      title: 'Artist Not Found | ZUMBIDO TATTOO',
    }
  }

  const styleDescription = artist.style.length
    ? ` with work connected to ${artist.style.join(', ')}`
    : ''
  const styleKeywords = artist.style.map(s => `${s} tattoo tokyo`)

  return {
    title: `${artist.name} | Tattoo Artist in Nakameguro Tokyo`,
    description: `${artist.shortBio} Book a consultation with ${artist.name} at ZUMBIDO TATTOO, an English-friendly tattoo studio in Tokyo${styleDescription}.`,
    keywords: [
      `${artist.name} tattoo`,
      ...styleKeywords,
      'Nakameguro Tattoo',
      'Tokyo Tattoo Studio',
      'English-friendly tattoo studio in Tokyo',
    ],
    alternates: {
      canonical: `${siteUrl}/artists/${artist.slug}`,
    },
    openGraph: {
      title: `${artist.name} | ZUMBIDO TATTOO Tokyo`,
      description: `${artist.shortBio} Based at ZUMBIDO TATTOO in Nakameguro, Tokyo.`,
      type: 'profile',
      url: `${siteUrl}/artists/${artist.slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${artist.name} at ZUMBIDO TATTOO, Nakameguro Tokyo tattoo studio`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${artist.name} | ZUMBIDO TATTOO`,
      description: `${artist.name} at ZUMBIDO TATTOO, a premium Tokyo Tattoo Studio in Nakameguro.`,
      images: [ogImageUrl],
    },
  }
}

export default async function ArtistPage({ params }: PageProps) {
  const { slug } = await params
  const artist = artists.find((a) => a.slug === slug)

  if (!artist) {
    notFound()
  }

  const relatedArtists = artists.filter((a) => a.id !== artist.id && a.isResident).slice(0, 3)
  const instagramPostUrls = artist.instagramPostUrls.slice(0, 9)
  const hasInstagramPosts = instagramPostUrls.length > 0
  const instagramSlotCount = hasInstagramPosts ? instagramPostUrls.length : 6
  const instagramSlots = Array.from({ length: instagramSlotCount }, (_, index) => instagramPostUrls[index])
  const instagramProfileUrl = artist.instagramProfileUrl || artist.instagramUrl
  const instagramFeedEmbed = artist.instagramFeedEmbedUrl || artist.instagramFeedEmbed
  const hasInstagramFeedEmbed = Boolean(instagramFeedEmbed)

  return (
    <>
      <Header />
      <main className="pt-20 noise-overlay">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link 
              href="/#artists" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Artists</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Artist Image */}
              <div className="relative aspect-[3/4] bg-secondary overflow-hidden border border-border">
                <Image
                  src={artist.profileImage}
                  alt={`${artist.name}, tattoo artist at ZUMBIDO TATTOO in Nakameguro, Tokyo`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-cover ${artist.profileImagePosition ?? 'object-[50%_42%]'} ${artist.profileImageTone ?? '[filter:contrast(1.06)_saturate(0.86)_brightness(0.9)]'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
              </div>

              {/* Artist Info */}
              <div className="flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                  {artist.title}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
                  {artist.name}
                </h1>
                {/* Instagram */}
                <Link 
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                  <Instagram className="w-5 h-5" />
                  <span>{artist.instagram}</span>
                </Link>

                {/* Bio */}
                <p className="whitespace-pre-line text-muted-foreground leading-relaxed mb-8">
                  {artist.bio}
                </p>

                {/* Specialties */}
                {artist.specialties.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      Specialties
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {artist.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1.5 bg-secondary text-xs text-muted-foreground uppercase tracking-wider border border-border"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Styles */}
                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    Styles
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {artist.style.map((style) => (
                      <span 
                        key={style}
                        className="px-3 py-1.5 bg-primary/10 text-xs text-primary uppercase tracking-wider"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div id="booking" className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs"
                  >
                    <Link 
                      href={instagramProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book via Instagram DM
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline"
                    className="border-border hover:bg-secondary uppercase tracking-wider text-xs"
                  >
                    <Link href="/#booking">
                      Other Booking Options
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                  Portfolio
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Recent Work
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:ml-auto">
                A curated local image selection for {artist.name}, presented as a clean editorial gallery before the Instagram archive.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {artist.portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/5] overflow-hidden border border-border/70 bg-secondary"
                >
                  <Image
                    src={image}
                    alt={`Curated recent tattoo work ${index + 1} by ${artist.name} at ZUMBIDO TATTOO Tokyo`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover [filter:contrast(1.05)_saturate(0.82)_brightness(0.86)] transition duration-700 group-hover:scale-[1.025] group-hover:[filter:contrast(1.07)_saturate(0.86)_brightness(0.92)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/78 via-background/10 to-transparent" />
                  <div className="absolute inset-0 bg-primary/[0.07] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 right-4 font-serif text-4xl text-foreground/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link 
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80 text-sm uppercase tracking-wider"
              >
                <Instagram className="w-4 h-4" />
                See more on Instagram
              </Link>
            </div>
          </div>
        </section>

        {/* Instagram Portfolio */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                  Social Archive
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Latest Instagram Work
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  A curated selection of recent work from {artist.name}, kept image-first with direct links to the original posts.
                </p>
              </div>
            </div>

            {instagramFeedEmbed ? (
              <div>
                <h3 className="mb-6 text-xl md:text-2xl font-serif font-bold text-foreground">
                  Instagram Portfolio
                </h3>
                <InstagramFeedEmbed
                  embed={instagramFeedEmbed}
                  title={`${artist.name} Instagram feed`}
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {instagramSlots.map((postUrl, index) => (
                  <article
                    key={postUrl ?? `instagram-placeholder-${index}`}
                    className="group overflow-hidden border border-border/70 bg-card/70 transition-colors hover:border-primary/40"
                  >
                    {postUrl ? (
                      <div className="relative aspect-[4/5] overflow-hidden bg-background">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <blockquote
                          className="instagram-media h-full w-full bg-background [&_iframe]:!m-0 [&_iframe]:!min-w-0 [&_iframe]:!max-w-none [&_iframe]:!w-full [&_iframe]:!-translate-y-14"
                          data-instgrm-permalink={postUrl}
                          data-instgrm-version="14"
                        >
                          <InstagramPostFallback
                            artistName={artist.name}
                            index={index}
                            postUrl={postUrl}
                          />
                        </blockquote>
                      </div>
                    ) : (
                      <InstagramPostFallback artistName={artist.name} index={index} />
                    )}
                  </article>
                ))}
              </div>
            )}

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-border hover:bg-secondary uppercase tracking-wider text-xs"
              >
                <Link
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  View more on Instagram
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Artists */}
        {relatedArtists.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                  Discover
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Other Artists
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArtists.map((relatedArtist) => (
                  <Link 
                    key={relatedArtist.id}
                    href={`/artists/${relatedArtist.slug}`}
                    className="group"
                  >
                    <article className="bg-card border border-border hover:border-primary/30 transition-colors p-6">
                      <div className="relative aspect-square bg-secondary mb-4 overflow-hidden">
                        <Image
                          src={relatedArtist.profileImage}
                          alt={`${relatedArtist.name}, tattoo artist at ZUMBIDO TATTOO Tokyo`}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className={`object-cover ${relatedArtist.profileImagePosition ?? 'object-[50%_42%]'} ${relatedArtist.profileImageTone ?? '[filter:contrast(1.06)_saturate(0.86)_brightness(0.9)]'} transition duration-500 group-hover:scale-105`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {relatedArtist.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {relatedArtist.style.slice(0, 2).join(' • ')}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-primary mt-4 uppercase tracking-wider">
                        View Profile <ArrowRight className="w-3 h-3" />
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      {hasInstagramPosts && (
        <Script async src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      )}
      <Footer />
    </>
  )
}
