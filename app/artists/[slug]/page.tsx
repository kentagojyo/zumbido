import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import { Instagram, ArrowLeft, ArrowRight, Calendar, MessageCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InstagramFeedEmbed } from '@/components/instagram-feed-embed'
import { Button } from '@/components/ui/button'
import { artists } from '@/lib/data'

interface PageProps {
  params: Promise<{ slug: string }>
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

  return {
    title: `${artist.name} | Tattoo Artist at ZUMBIDO TATTOO, Nakameguro Tokyo`,
    description: `${artist.shortBio} Book a tattoo appointment with ${artist.name} at ZUMBIDO TATTOO in Nakameguro, Tokyo. Specializing in ${artist.style.join(', ')}.`,
    keywords: [
      `${artist.name} tattoo`,
      ...artist.style.map(s => `${s} tattoo tokyo`),
      'nakameguro tattoo artist',
      'tokyo tattoo artist',
    ],
    openGraph: {
      title: `${artist.name} | ZUMBIDO TATTOO Tokyo`,
      description: artist.shortBio,
      type: 'profile',
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
  const instagramSlotCount = Math.max(6, instagramPostUrls.length)
  const instagramSlots = Array.from({ length: instagramSlotCount }, (_, index) => instagramPostUrls[index])
  const hasInstagramPosts = instagramPostUrls.length > 0
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
                
                {/* Experience */}
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{artist.yearsExperience}+ years experience in Tokyo</span>
                </div>

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
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {artist.bio}
                </p>

                {/* Specialties */}
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
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                Portfolio
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Recent Work
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {artist.portfolioImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square bg-secondary group cursor-pointer overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`Recent tattoo work by ${artist.name} at ZUMBIDO TATTOO Tokyo`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover gritty-image transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  Hand-selected Instagram work from {artist.name}. Add a LightWidget feed URL or post URLs in the artist data file to publish embedded work here.
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {instagramSlots.map((postUrl, index) => (
                  <article
                    key={postUrl ?? `instagram-placeholder-${index}`}
                    className="min-h-[420px] overflow-hidden border border-border/70 bg-card/70 transition-colors hover:border-primary/40"
                  >
                    {postUrl ? (
                      <blockquote
                        className="instagram-media h-full w-full bg-background p-4"
                        data-instgrm-permalink={postUrl}
                        data-instgrm-version="14"
                      >
                        <Link
                          href={postUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[380px] items-center justify-center text-center text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/80"
                        >
                          View this post on Instagram
                        </Link>
                      </blockquote>
                    ) : (
                      <div className="flex min-h-[420px] flex-col justify-between p-6">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-5xl text-foreground/10">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <Instagram className="h-5 w-5 text-primary/70" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                            Awaiting Post URL
                          </p>
                          <p className="mt-4 text-sm leading-7 text-muted-foreground">
                            Add an Instagram post URL to {artist.name}&apos;s `instagramPostUrls` array in `lib/data.ts` to embed work in this slot.
                          </p>
                        </div>
                      </div>
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
