'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioImages } from '@/lib/data'

const filters = ['All', 'Blackwork', 'Lettering']

export function WorksSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredImages = activeFilter === 'All'
    ? portfolioImages
    : portfolioImages.filter((image) => image.style === activeFilter)

  return (
    <section id="works" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Ink, Framed Like Nightlife
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl lg:ml-auto">
            A curated selection of tattoos from our Nakameguro studio. Each piece is
            photographed with the same underground Tokyo energy we bring to the work:
            intimate, sharp, and built to last.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-[0_0_24px_rgba(159,18,57,0.22)]'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-4 lg:auto-rows-[220px]">
          {filteredImages.map((image, index) => (
            <article
              key={image.id}
              className={`group relative overflow-hidden border border-border bg-secondary ${
                index === 0 ? 'sm:col-span-2 lg:row-span-2' : ''
              } ${index === 2 ? 'lg:col-span-2' : ''}`}
            >
              <Image
                src={image.src}
                alt={`${image.style} tattoo by ${image.artist} at ZUMBIDO TATTOO in Nakameguro, Tokyo`}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover gritty-image transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/20 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-primary/10" />
              <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {image.artist}
                  </p>
                  <p className="text-xs text-primary uppercase tracking-wider mt-1">
                    {image.style}
                  </p>
                </div>
                <span className="font-serif text-4xl text-foreground/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-muted-foreground">
            See more Tokyo tattoo studio work and fresh flashes on Instagram.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-border hover:bg-secondary uppercase tracking-wider text-xs"
          >
            <Link
              href="https://instagram.com/zumbido_tattoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 mr-2" />
              @zumbido_tattoo
              <ExternalLink className="w-3 h-3 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
