import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] bg-secondary overflow-hidden border border-border">
              <Image
                src="/images/studio-01.jpg"
                alt="Inside ZUMBIDO TATTOO, an English-friendly tattoo studio in Nakameguro, Tokyo"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover gritty-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/50" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                  Nakameguro Tattoo / Tokyo Tattoo Studio
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-6 hidden w-44 overflow-hidden border border-border bg-background shadow-2xl md:block lg:-right-8">
              <div className="relative aspect-square">
                <Image
                  src="/images/artists/Megu.png"
                  alt="Tattoo studio detail at ZUMBIDO TATTOO Tokyo"
                  fill
                  sizes="176px"
                  className="object-cover gritty-image"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Where Art Meets
              <span className="text-primary block">Skin</span>
            </h2>
            <div className="max-w-xl space-y-7 text-muted-foreground leading-8">
              <p>
                ZUMBIDO TATTOO is an underground tattoo studio located in the artistic
                neighborhood of Nakameguro, Tokyo. Founded in 2010, we have built a
                reputation for bold, uncompromising tattoo art that pushes creative
                boundaries while honoring traditional techniques.
              </p>
              <p>
                Our collective of artists brings diverse backgrounds and specializations from
                Japanese traditional and neo-Japanese to blackwork, realism, and fine line.
                We welcome Tokyo locals and international clients with an English-speaking
                team ready to shape meaningful, lasting work.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-14 pt-9 border-t border-border">
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
