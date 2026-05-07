import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Image
        src="/images/hero-01.jpg"
        alt="Dark cinematic interior of ZUMBIDO TATTOO, an underground tattoo studio in Nakameguro, Tokyo"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 gritty-image"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,transparent_0%,rgba(0,0,0,0.3)_34%,rgba(0,0,0,0.88)_78%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/45 to-background/80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.5 0.2 25) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.5 0.2 25) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />
      <div className="absolute left-0 top-20 hidden h-px w-1/3 bg-gradient-to-r from-primary/70 to-transparent lg:block" />
      <div className="absolute right-0 bottom-24 hidden h-px w-1/3 bg-gradient-to-l from-primary/60 to-transparent lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <svg
            className="w-12 h-12 text-primary opacity-80 drop-shadow-[0_0_28px_rgba(159,18,57,0.65)]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M11 2h2v8h8v2h-8v8h-2v-8H3v-2h8z" />
          </svg>
        </div>

        <h1 className="sr-only">ZUMBIDO TATTOO</h1>
        <div className="relative mx-auto mb-7 h-44 w-32 sm:h-56 sm:w-40 md:h-64 md:w-48 lg:h-72 lg:w-52">
          <Image
            src="/images/zumbido-logo.png"
            alt="ZUMBIDO TATTOO"
            fill
            priority
            sizes="(min-width: 1024px) 216px, (min-width: 768px) 192px, 160px"
            className="object-contain drop-shadow-[0_0_52px_rgba(190,18,60,0.62)]"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-12 bg-primary/60" />
          <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-foreground/80">
            Tattoo Studio
          </span>
          <span className="h-px w-12 bg-primary/60" />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-4 tracking-wide">
          Underground Tattoo Studio in Nakameguro, Tokyo
        </p>
        <p className="text-sm sm:text-base text-primary/90 uppercase tracking-[0.2em] mb-12">
          Bold lines. Dark culture. Tokyo ink.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-sm px-8 py-6 min-w-[200px] shadow-[0_0_35px_rgba(159,18,57,0.28)]"
          >
            <Link href="/#booking">Book Appointment</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-foreground/25 bg-background/30 hover:bg-secondary uppercase tracking-wider text-sm px-8 py-6 min-w-[200px] backdrop-blur-sm"
          >
            <Link href="/#works">View Our Work</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-xs uppercase tracking-widest text-foreground/60">Scroll</span>
        <ChevronDown className="w-5 h-5 text-foreground/60" />
      </div>

      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span className="text-xs tracking-[0.3em] uppercase text-foreground/50">
          Est. 2010 - Nakameguro
        </span>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center">
        <span className="text-xs tracking-[0.3em] uppercase text-foreground/50">
          Tokyo, Japan
        </span>
      </div>
    </section>
  )
}
