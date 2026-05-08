import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ArrowRight } from 'lucide-react'
import { artists } from '@/lib/data'

export function ArtistsSection() {
  return (
    <section id="artists" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Our Collective
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Resident Artists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the artists behind ZUMBIDO TATTOO. Each brings a unique vision,
            a personal rhythm, and a distinct point of view to our Nakameguro studio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {artists.filter(a => a.isResident).map((artist, index) => (
            <article
              key={artist.id}
              className={`group block ${index % 2 === 1 ? 'md:translate-y-10' : ''}`}
            >
              <div
                className={`grid min-h-full grid-cols-1 overflow-hidden border border-border/70 bg-card/70 transition duration-500 hover:border-primary/45 hover:bg-card sm:grid-cols-[1.08fr_0.92fr] ${
                  index % 2 === 1 ? 'sm:grid-cols-[0.92fr_1.08fr]' : ''
                }`}
              >
                <div className={`relative min-h-[360px] overflow-hidden bg-secondary sm:min-h-full ${index % 2 === 1 ? 'sm:order-2' : ''}`}>
                  <Image
                    src={artist.profileImage}
                    alt={`${artist.name}, resident tattoo artist at ZUMBIDO TATTOO in Nakameguro, Tokyo`}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className={`object-cover ${artist.profileImagePosition ?? 'object-[50%_42%]'} ${artist.profileImageTone ?? '[filter:contrast(1.06)_saturate(0.86)_brightness(0.9)] group-hover:[filter:contrast(1.08)_saturate(0.9)_brightness(0.96)]'} transition duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/12 to-transparent" />
                  <div className="absolute left-5 top-5 font-serif text-5xl text-foreground/10">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <Link
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-xs uppercase tracking-[0.22em] text-primary/90 transition-colors hover:text-primary"
                    >
                      {artist.instagram}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col p-7 md:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {artist.title}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-muted-foreground">
                    {artist.shortBio}
                  </p>

                  <div className="flex flex-wrap gap-x-3 gap-y-2 mt-7">
                    {artist.style.slice(0, 2).map((style) => (
                      <span
                        key={style}
                        className="text-[11px] text-muted-foreground uppercase tracking-[0.22em]"
                      >
                        {style}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-border/70 pt-5 flex items-center justify-between gap-4">
                      <Link
                        href={artist.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Instagram className="w-4 h-4 text-primary" />
                        <span>Personal consultations</span>
                      </Link>
                      <Link
                        href={`/artists/${artist.slug}`}
                        className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-wider transition-all hover:gap-3"
                      >
                        Profile <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
