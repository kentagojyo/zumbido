import Link from 'next/link'
import { Instagram, Mail, ArrowRight, MessageCircle, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { artists, studioInfo } from '@/lib/data'

const bookingSteps = [
  {
    number: '01',
    title: 'Choose Your Artist',
    description: 'Browse our artists\' portfolios and find the perfect match for your vision and style.',
  },
  {
    number: '02',
    title: 'Consultation',
    description: 'Tell us your idea, preferred artist, placement, size, and schedule. We can guide you in English or Japanese.',
  },
  {
    number: '03',
    title: 'Book & Confirm',
    description: 'Secure your appointment with a deposit. We\'ll confirm your session and prepare your custom design.',
  },
]

export function BookingSection() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Get Inked
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Start Your Next Piece?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us your idea, preferred artist, placement, size, and schedule.
            Our team will guide you through the consultation process in English or Japanese.
          </p>
        </div>

        <div className="mb-16 overflow-hidden border border-border/70 bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative p-8 md:p-10 lg:p-12">
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/70 via-primary/20 to-transparent" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-5 block">
                Private Consultation
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                Bring the idea. We will shape the session.
              </h3>
              <p className="mt-5 max-w-2xl text-muted-foreground leading-8">
                Share your references, desired scale, placement, artist preference, and dates.
                ZUMBIDO TATTOO welcomes inbound visitors with clear English-friendly support.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs px-8 shadow-[0_0_28px_rgba(159,18,57,0.22)]"
                >
                  <Link href={`mailto:${studioInfo.email}?subject=Tattoo Consultation Request`}>
                    <CalendarCheck className="w-4 h-4 mr-2" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary uppercase tracking-wider text-xs px-8"
                >
                  <Link
                    href={studioInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Instagram DM
                  </Link>
                </Button>
              </div>
            </div>
            <div className="border-t border-border/70 bg-secondary/30 p-8 md:p-10 lg:border-l lg:border-t-0">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
                What to Include
              </p>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {['Tattoo idea and reference images', 'Preferred artist and style direction', 'Placement, approximate size, and available dates'].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-5 shrink-0 bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {bookingSteps.map((step, index) => (
            <div 
              key={step.number}
              className="relative p-8 bg-background border border-border hover:border-primary/30 transition-colors"
            >
              {/* Connector line for desktop */}
              {index < bookingSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
              
              <span className="text-4xl font-serif font-bold text-primary/30">
                {step.number}
              </span>
              <h3 className="text-xl font-serif font-bold text-foreground mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Artists Quick Select */}
        <div className="mb-16">
          <h3 className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Select an Artist to Begin
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {artists.filter(a => a.isResident).map((artist) => (
              <Link
                key={artist.id}
                href={`/artists/${artist.slug}#booking`}
                className="group flex items-center gap-3 px-4 py-3 bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 bg-background flex items-center justify-center">
                  <span className="text-sm font-serif font-bold text-primary/50">
                    {artist.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {artist.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {artist.style[0] ?? 'Resident artist'}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Consultation */}
          <div className="p-8 bg-background border border-border text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Book a Consultation
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Best for custom work, larger pieces, and inbound visitors who want English-friendly guidance before booking.
            </p>
            <Button 
              asChild 
              className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs w-full md:w-auto"
            >
              <Link href={`mailto:${studioInfo.email}?subject=Tattoo Consultation Request`}>
                <Mail className="w-4 h-4 mr-2" />
                Book a Consultation
              </Link>
            </Button>
          </div>

          {/* Instagram DM */}
          <div className="p-8 bg-background border border-border text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              DM Us on Instagram
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fastest for quick questions, flash availability, guest spots, and sending visual references.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="border-border hover:bg-secondary uppercase tracking-wider text-xs w-full md:w-auto"
            >
              <Link 
                href={studioInfo.instagramUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Instagram DM
              </Link>
            </Button>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
          Please include: your tattoo idea, preferred artist, size &amp; placement, 
          reference images, and your available dates. A deposit is required to confirm bookings.
        </p>
      </div>
    </section>
  )
}
