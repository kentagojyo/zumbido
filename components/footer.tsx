import Link from 'next/link'
import { Instagram, Mail, MapPin } from 'lucide-react'
import { studioInfo } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h3 className="text-3xl font-serif font-bold text-primary tracking-wider mb-4">
                ZUMBIDO TATTOO
              </h3>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Underground tattoo studio in the heart of Nakameguro, Tokyo. 
              Crafting bold, dark, and artistic ink since 2010.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href={`https://instagram.com/${studioInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={`mailto:${studioInfo.email}`}
                className="w-10 h-10 bg-secondary rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Artists', href: '/#artists' },
                { name: 'Guest Artists', href: '/guest-artists' },
                { name: 'Works', href: '/#works' },
                { name: 'Booking', href: '/#booking' },
                { name: 'FAQ', href: '/#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{studioInfo.address}</span>
              </li>
              <li>
                <span className="block font-medium text-foreground">Hours</span>
                <span className="block">Tue-Fri: {studioInfo.hours.weekdays}</span>
                <span className="block">Sat: {studioInfo.hours.saturday}</span>
                <span className="block">Sun: {studioInfo.hours.sunday}</span>
                <span className="block text-primary">Mon: {studioInfo.hours.monday}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} ZUMBIDO TATTOO. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Nakameguro, Tokyo</span>
              <span className="text-primary">•</span>
              <span>Est. 2010</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
