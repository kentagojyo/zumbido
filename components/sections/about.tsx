import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/about-1.jpg"
                  alt="Tattoo artist at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden mt-8">
                <Image
                  src="/images/about-2.jpg"
                  alt="ZUMBIDO studio interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Where Art Meets
              <span className="text-primary block">Skin</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ZUMBIDO TATTOO is an underground tattoo studio located in the artistic 
                neighborhood of Nakameguro, Tokyo. Founded in 2010, we have built a 
                reputation for bold, uncompromising tattoo art that pushes creative 
                boundaries while honoring traditional techniques.
              </p>
              <p>
                Our collective of artists brings diverse backgrounds and specializations—from 
                Japanese traditional and neo-Japanese to blackwork, geometric, realism, and 
                fine line. What unites us is a commitment to craftsmanship, a passion for dark 
                aesthetics, and a dedication to creating meaningful, lasting art.
              </p>
              <p>
                We welcome clients from around the world. Whether you&apos;re a Tokyo local or a 
                visitor seeking authentic Japanese tattoo artistry, our English-speaking team 
                is ready to bring your vision to life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <span className="text-3xl md:text-4xl font-serif font-bold text-primary">15+</span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Years Active
                </span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-serif font-bold text-primary">4</span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Resident Artists
                </span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-serif font-bold text-primary">10K+</span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Tattoos Done
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
