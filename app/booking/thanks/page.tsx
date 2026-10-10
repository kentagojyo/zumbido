import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { studioInfo } from '@/lib/data'
export const metadata = { title: 'Booking Inquiry', robots: { index: false, follow: false } }
export default function BookingThanksPage() {
  return <><Header /><main className="mx-auto max-w-2xl px-6 pt-40 pb-28 text-center">
    <p className="text-primary uppercase tracking-widest text-xs">ZUMBIDO TATTOO</p>
    <h1 className="mt-5 font-serif text-4xl">Thank you for your inquiry</h1>
    <p className="mt-6 leading-8 text-muted-foreground">After completing the form verification, your inquiry is sent to the studio. We will contact you by email to discuss your idea, availability and pricing. Please check your spam folder as well.</p>
    <p className="mt-4 leading-8 text-muted-foreground">This is not a booking confirmation. A deposit of {studioInfo.deposit} is required once the details are agreed. {studioInfo.cancellationPolicy}</p>
    <p className="mt-4 text-sm text-muted-foreground">For follow-up, contact <a href={studioInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Instagram DM</a>.</p>
    <Link href="/" className="mt-10 inline-block text-primary underline">Back to the studio</Link>
  </main><Footer /></>
}
