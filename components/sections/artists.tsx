import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ArrowRight } from 'lucide-react'
import { artists } from '@/lib/data'

export function ArtistsSection() {
  return (
    <section id="artists" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Our Collective
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Resident Artists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the artists behind ZUMBIDO TATTOO. Each brings a unique vision and 
            mastery of their craft to our Nakameguro studio.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {artists.filter(a => a.isResident).map((artist, index) => (
            <Link 
              key={artist.id} 
              href={`/artists/${artist.slug}`}
              className="group relative block"
            >
              <article className="bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
                  <Image
                    src={artist.profileImage}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {artist.shortBio}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm mt-4 uppercase tracking-wider">
                      View Profile <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {artist.title}
                      </p>
                    </div>
                    <span className="text-xs text-primary/70 uppercase tracking-wider">
                      {artist.yearsExperience}+ yrs
                    </span>
                  </div>

                  {/* Styles */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {artist.style.slice(0, 3).map((style) => (
                      <span 
                        key={style}
                        className="px-2 py-1 bg-secondary text-xs text-muted-foreground uppercase tracking-wider"
                      >
                        {style}
                      </span>
                    ))}
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                    <Instagram className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{artist.instagram}</span>
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
