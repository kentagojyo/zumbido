'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navigation = [
  { name: 'Artists', href: '/#artists' },
  { name: 'Guest Artists', href: '/guest-artists' },
  { name: 'Works', href: '/#works' },
  { name: 'Booking', href: '/#booking' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Access', href: '/#access' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-xl md:text-2xl font-serif font-bold text-primary tracking-wider">
                ZUMBIDO
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
            <span className="text-xs text-muted-foreground tracking-widest uppercase hidden sm:block">
              Tattoo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide uppercase"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://instagram.com/zumbido_tattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs px-6">
              <Link href="/#booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-background border-border">
              <SheetTitle className="text-xl font-serif font-bold text-primary tracking-wider mb-8">
                ZUMBIDO
              </SheetTitle>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2 tracking-wide uppercase border-b border-border/30"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8 flex flex-col gap-4">
                  <Link
                    href="https://instagram.com/zumbido_tattoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>@zumbido_tattoo</span>
                  </Link>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider">
                    <Link href="/#booking" onClick={() => setIsOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
