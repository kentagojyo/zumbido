import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Phone, ExternalLink, Train } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { studioInfo } from '@/lib/data'

export function LocationSection() {
  return (
    <section id="access" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Location & Access
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located in the artistic neighborhood of Nakameguro, Tokyo — 
            easily accessible and surrounded by cafés, galleries, and creative spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Studio Image */}
          <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden">
            <Image
              src="/images/studio.jpg"
              alt="ZUMBIDO TATTOO Studio exterior in Nakameguro"
              fill
              className="object-cover"
            />
            {/* Map overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            
            {/* Open in maps button */}
            <div className="absolute bottom-6 left-6 right-6">
              <Button 
                asChild 
                variant="outline" 
                className="w-full bg-background/80 backdrop-blur-sm border-border hover:bg-background uppercase tracking-wider text-xs"
              >
                <Link 
                  href={studioInfo.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            {/* Address */}
            <div className="mb-8 pb-8 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Address
                  </h3>
                  <p className="text-lg font-medium text-foreground">
                    {studioInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Access */}
            <div className="mb-8 pb-8 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Train className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Access
                  </h3>
                  <p className="text-foreground">
                    5-minute walk from <span className="text-primary">Nakameguro Station</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tokyu Toyoko Line / Tokyo Metro Hibiya Line
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-8 pb-8 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Hours
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex justify-between max-w-xs">
                      <span className="text-muted-foreground">Tue - Fri</span>
                      <span className="text-foreground">{studioInfo.hours.weekdays}</span>
                    </li>
                    <li className="flex justify-between max-w-xs">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">{studioInfo.hours.saturday}</span>
                    </li>
                    <li className="flex justify-between max-w-xs">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">{studioInfo.hours.sunday}</span>
                    </li>
                    <li className="flex justify-between max-w-xs">
                      <span className="text-muted-foreground">Monday</span>
                      <span className="text-primary">{studioInfo.hours.monday}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Contact
                  </h3>
                  <p className="text-foreground">{studioInfo.phone}</p>
                  <p className="text-muted-foreground text-sm mt-1">{studioInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
