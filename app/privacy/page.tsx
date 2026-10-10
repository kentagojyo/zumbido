import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { studioInfo } from '@/lib/data'
import { siteUrl } from '@/lib/seo'
export const metadata = { title: 'Privacy Notice', alternates: { canonical: `${siteUrl}/privacy` } }
export default function PrivacyPage() {
  return <><Header /><main className="mx-auto max-w-3xl px-6 pt-40 pb-24 space-y-6 text-muted-foreground leading-8">
    <h1 className="font-serif text-4xl text-foreground">Privacy Notice</h1>
    <p>ZUMBIDO TATTOO uses the name, email address, Instagram handle, tattoo details, preferred dates, messages and reference images you submit to respond to your inquiry and arrange your consultation.</p>
    <p>The booking form is processed by FormSubmit and delivered to our studio inbox at {studioInfo.email}. FormSubmit provides spam verification and processes uploaded reference images. Please review <a className="text-primary underline" href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">FormSubmit’s privacy policy</a> before submitting. Please do not include identity documents, payment card details or sensitive medical information.</p>
    <p>Our website also uses Google Maps, Instagram embeds, Google Analytics and Vercel Analytics. These providers may receive technical information when you use their features. External links are subject to the relevant provider’s own privacy policies.</p>
    <p>For questions about your inquiry data or to request its deletion from our studio records, contact <a className="text-primary underline break-all" href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>.</p>
    <Link className="inline-block text-primary underline" href="/#booking-form">Back to Booking Form</Link>
  </main><Footer /></>
}
