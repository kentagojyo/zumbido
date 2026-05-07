import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="ZUMBIDO TATTOO Studio"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        {/* Dark cinematic overlay pattern */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 30%, oklch(0.5 0.2 25 / 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, oklch(0.3 0.1 25 / 0.1) 0%, transparent 50%)
            `
          }}
        />
        {/* Subtle cross pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(0.5 0.2 25) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(0.5 0.2 25) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Cross Motif */}
        <div className="mb-8 flex justify-center">
          <svg 
            className="w-12 h-12 text-primary opacity-80" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M11 2h2v8h8v2h-8v8h-2v-8H3v-2h8z" />
          </svg>
        </div>

        {/* Logo Text */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-primary text-shadow-gothic mb-6">
          ZUMBIDO
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-12 bg-primary/50" />
          <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Tattoo Studio
          </span>
          <span className="h-px w-12 bg-primary/50" />
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 tracking-wide">
          Underground Tattoo Studio in Nakameguro, Tokyo
        </p>
        <p className="text-sm sm:text-base text-primary/80 uppercase tracking-[0.2em] mb-12">
          Bold lines. Dark culture. Tokyo ink.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-sm px-8 py-6 min-w-[200px]"
          >
            <Link href="/#booking">Book Appointment</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary uppercase tracking-wider text-sm px-8 py-6 min-w-[200px]"
          >
            <Link href="/#works">View Our Work</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Side text */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/50">
          Est. 2010 • Nakameguro
        </span>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/50">
          Tokyo, Japan
        </span>
      </div>
    </section>
  )
}
