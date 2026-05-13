import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { studioEvents } from '@/lib/data'

export function EventsSection() {
  return (
    <section id="events" className="relative overflow-hidden border-y border-border/60 bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(159,18,57,0.16),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.68))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-primary">
              Studio Calendar
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Events
            </h2>
          </div>
          <p className="max-w-2xl text-muted-foreground lg:ml-auto">
            Pop up events, tattoo conventions, guest sessions, and limited booking
            windows from the ZUMBIDO TATTOO collective.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {studioEvents.map((event, index) => (
            <article
              key={event.id}
              className={`group grid overflow-hidden border border-border/70 bg-card/70 transition duration-500 hover:border-primary/45 hover:bg-card md:grid-cols-[0.96fr_1.04fr] ${
                index % 2 === 1 ? 'md:grid-cols-[1.04fr_0.96fr]' : ''
              }`}
            >
              <div className={`relative min-h-[300px] overflow-hidden bg-secondary ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={event.image}
                  alt={`${event.title} announcement for ZUMBIDO TATTOO in Tokyo`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover [filter:contrast(1.06)_saturate(0.78)_brightness(0.78)] transition duration-700 group-hover:scale-105 group-hover:[filter:contrast(1.08)_saturate(0.84)_brightness(0.88)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/20 to-transparent" />
                <div className="absolute left-5 top-5 border border-primary/35 bg-background/70 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-primary backdrop-blur">
                  {event.type}
                </div>
                <div className="absolute bottom-5 left-5 font-serif text-6xl text-foreground/10">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="flex flex-col p-7 md:p-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {event.title}
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p className="flex items-center gap-3">
                      <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                      <span>{event.date}</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 shrink-0 text-primary" />
                      <span>{event.location}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-7 text-sm leading-7 text-muted-foreground">
                  {event.description}
                </p>

                <div className="mt-auto pt-8">
                  <div className="border-t border-border/70 pt-5">
                    <Link
                      href={event.href}
                      target={event.href.startsWith('http') ? '_blank' : undefined}
                      rel={event.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary transition-all hover:gap-3"
                    >
                      {event.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
