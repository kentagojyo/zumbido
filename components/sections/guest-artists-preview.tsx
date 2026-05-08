import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ArrowRight, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { guestArtists } from '@/lib/data'

export function GuestArtistsPreview() {
  const upcomingGuests = guestArtists.filter(g => g.status === 'upcoming').slice(0, 2)

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              International
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Guest Artists
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              World-class artists visiting our Tokyo studio for limited engagements.
            </p>
          </div>
          <Button 
            asChild 
            variant="outline" 
            className="border-border hover:bg-secondary uppercase tracking-wider text-xs self-start md:self-auto"
          >
            <Link href="/guest-artists">
              View All Guests <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {upcomingGuests.length > 0 && (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {upcomingGuests.map((guest, index) => (
              <article 
                key={guest.id}
                className="group border-y border-border/70 py-8 transition-colors hover:border-primary/45 md:py-10"
              >
                <div className="flex gap-6 md:gap-8">
                  <div className="relative h-32 w-24 shrink-0 overflow-hidden bg-secondary md:h-44 md:w-32">
                    <Image
                      src={guest.profileImage}
                      alt={`${guest.name}, guest tattoo artist visiting ZUMBIDO TATTOO Tokyo`}
                      fill
                      sizes="(min-width: 768px) 128px, 96px"
                      className={`object-cover [filter:contrast(1.06)_saturate(0.86)_brightness(0.92)] transition duration-700 group-hover:scale-105 ${
                        index % 2 === 0 ? 'object-[50%_36%]' : 'object-[46%_44%]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {guest.name}
                      </h3>
                      <span className="mt-1 text-[11px] uppercase tracking-[0.24em] text-primary/80">
                        Upcoming
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{guest.city}, {guest.country}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{guest.visitingDates}</span>
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-2 mt-5">
                      {guest.style.slice(0, 2).map((style) => (
                        <span 
                          key={style}
                          className="text-[11px] text-muted-foreground uppercase tracking-[0.22em]"
                        >
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/60">
                  <Link
                    href={guest.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                    <span className="text-sm">{guest.instagram}</span>
                  </Link>
                  <Link 
                    href="/guest-artists"
                    className="text-sm text-primary uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Book <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-20 border border-border/60 bg-secondary/30 p-8 text-center md:p-12">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
            Interested in a Guest Spot?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Are you an international tattoo artist looking to work in Tokyo? 
            ZUMBIDO TATTOO welcomes guest artists for limited residencies.
          </p>
          <Button 
            asChild 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-wider text-xs"
          >
            <Link href="mailto:guests@v0-zombido.vercel.app">
              Apply for Guest Spot
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
