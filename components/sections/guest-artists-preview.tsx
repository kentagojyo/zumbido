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

        {/* Upcoming Guests */}
        {upcomingGuests.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingGuests.map((guest) => (
              <article 
                key={guest.id}
                className="relative bg-background border border-border p-6 md:p-8 group hover:border-primary/50 transition-colors"
              >
                {/* Status badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs uppercase tracking-wider">
                    Upcoming
                  </span>
                </div>

                <div className="flex gap-6">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-secondary shrink-0 overflow-hidden border border-border">
                    <Image
                      src={guest.profileImage}
                      alt={`${guest.name}, guest tattoo artist visiting ZUMBIDO TATTOO Tokyo`}
                      fill
                      sizes="96px"
                      className="object-cover gritty-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {guest.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{guest.city}, {guest.country}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{guest.visitingDates}</span>
                    </div>

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
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{guest.instagram}</span>
                  </div>
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

        {/* CTA for guest artists */}
        <div className="mt-16 p-8 md:p-12 bg-secondary/50 border border-border text-center">
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
            <Link href="mailto:guests@zumbidotattoo.com">
              Apply for Guest Spot
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
