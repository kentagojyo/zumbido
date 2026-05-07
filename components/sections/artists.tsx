import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ArrowRight } from 'lucide-react'
import { artists } from '@/lib/data'

export function ArtistsSection() {
  return (
    <section id="artists" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Our Collective
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Resident Artists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the artists behind ZUMBIDO TATTOO. Each brings a unique vision,
            a personal rhythm, and mastery of their craft to our Nakameguro studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {artists.filter(a => a.isResident).map((artist) => (
            <Link
              key={artist.id}
              href={`/artists/${artist.slug}`}
              className="group block"
            >
              <article className="grid min-h-full grid-cols-1 overflow-hidden border border-border bg-card transition duration-500 hover:border-primary/50 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[340px] overflow-hidden bg-secondary sm:min-h-full">
                  <Image
                    src={artist.profileImage}
                    alt={`${artist.name}, resident tattoo artist at ZUMBIDO TATTOO in Nakameguro, Tokyo`}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover gritty-image transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">
                      {artist.instagram}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {artist.title}
                      </p>
                    </div>
                    <span className="text-xs text-primary/80 uppercase tracking-wider shrink-0">
                      {artist.yearsExperience}+ yrs
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {artist.shortBio}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {artist.style.slice(0, 3).map((style) => (
                      <span
                        key={style}
                        className="px-2.5 py-1 bg-secondary text-xs text-muted-foreground uppercase tracking-wider"
                      >
                        {style}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-border pt-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Instagram className="w-4 h-4 text-primary" />
                        <span>Personal consultations</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-wider transition-all group-hover:gap-3">
                        Profile <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
