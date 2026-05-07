'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioImages } from '@/lib/data'

const filters = ['All', 'Japanese', 'Blackwork', 'Geometric', 'Realism', 'Fine Line', 'Dark Art']

export function WorksSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredImages = activeFilter === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => 
        img.style.toLowerCase().includes(activeFilter.toLowerCase())
      )

  return (
    <section id="works" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of tattoos from our Nakameguro studio. 
            Each piece tells a story of collaboration between artist and canvas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Instagram-style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square bg-secondary group cursor-pointer overflow-hidden"
            >
              <Image
                src={image.src}
                alt={`${image.style} tattoo by ${image.artist}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-sm font-medium text-foreground text-center">
                  {image.artist}
                </span>
                <span className="text-xs text-primary uppercase tracking-wider mt-1">
                  {image.style}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            See more of our work on Instagram
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
