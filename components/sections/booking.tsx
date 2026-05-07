import Link from 'next/link'
import { Instagram, Mail, ArrowRight, MessageCircle } from 'lucide-react'
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
    description: 'Contact us with your idea, reference images, size, and placement. We\'ll discuss details and provide a quote.',
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
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your tattoo journey at ZUMBIDO TATTOO in Nakameguro, Tokyo? 
            Follow these steps to book your session.
          </p>
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
                    {artist.style[0]}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram DM */}
          <div className="p-8 bg-background border border-border text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Instagram DM
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              The quickest way to reach us. Send us your ideas and we&apos;ll respond within 24-48 hours.
            </p>
            <Button 
              asChild 
              className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs w-full md:w-auto"
            >
              <Link 
                href={studioInfo.instagramUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Send DM on Instagram
              </Link>
            </Button>
          </div>

          {/* Email */}
          <div className="p-8 bg-background border border-border text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Email Inquiry
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              For detailed inquiries, larger projects, or if you prefer email communication.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="border-border hover:bg-secondary uppercase tracking-wider text-xs w-full md:w-auto"
            >
              <Link href={`mailto:${studioInfo.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                {studioInfo.email}
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
