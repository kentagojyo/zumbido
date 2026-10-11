'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { artists, guestArtists, studioInfo } from '@/lib/data'
import { todayInTokyo, validateReferenceImages } from '@/lib/booking-validation'
import { Button } from '@/components/ui/button'

const inputClass = 'mt-2 block w-full min-w-0 rounded-none border border-border bg-background p-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-primary'

export function BookingForm({ returnUrl, preferredArtist = '' }: { returnUrl: string; preferredArtist?: string }) {
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [minDate, setMinDate] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  useEffect(() => {
    setMinDate(todayInTokyo())
    const reset = () => setSubmitting(false)
    window.addEventListener('pageshow', reset)
    return () => window.removeEventListener('pageshow', reset)
  }, [])
  function checkImages(form: HTMLFormElement) {
    const files = Array.from(form.querySelectorAll<HTMLInputElement>('input[type="file"]')).flatMap(input => Array.from(input.files ?? []))
    const message = validateReferenceImages(files)
    setError(message)
    return message
  }
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (submitting || checkImages(event.currentTarget)) { event.preventDefault(); return }
    const date = new FormData(event.currentTarget).get('Preferred Date')?.toString()
    if (date && date < todayInTokyo()) { event.preventDefault(); setError('Please choose today or a future date (Japan time).'); return }
    setError(null)
    setSubmitting(true)
  }
  return <div id="booking-form" className="scroll-mt-36 border border-border bg-background p-6 sm:p-10">
    <h3 className="font-serif text-2xl sm:text-3xl font-bold">Booking Form</h3>
    <p className="mt-3 text-sm leading-7 text-muted-foreground">Tell us about your next piece. Fields marked * are required. We will reply by email to discuss availability and a quote.</p>
    <form ref={formRef} action={`https://formsubmit.co/${studioInfo.email}`} method="POST" encType="multipart/form-data" onSubmit={onSubmit} className="mt-8 space-y-6">
      <input type="hidden" name="_subject" value="ZUMBIDO TATTOO — Booking inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={returnUrl} />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="block min-w-0 text-sm" htmlFor="booking-name">Name *<input id="booking-name" className={inputClass} name="name" autoComplete="name" required maxLength={100} /></label>
        <label className="block min-w-0 text-sm" htmlFor="booking-email">Email *<input id="booking-email" className={inputClass} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label className="block min-w-0 text-sm" htmlFor="booking-instagram">Instagram<input id="booking-instagram" className={inputClass} name="Instagram" placeholder="@yourhandle (optional)" maxLength={100} /></label>
        <label className="block min-w-0 text-sm" htmlFor="booking-artist">Preferred Artist<select id="booking-artist" className={inputClass} name="Preferred Artist" defaultValue={preferredArtist}><option value="">No preference / Please advise</option>{artists.filter(artist => artist.isResident).map(artist => <option key={artist.slug} value={artist.name}>{artist.name}</option>)}{guestArtists.filter(artist => artist.status === 'current' || artist.status === 'upcoming').map(artist => <option key={`guest-${artist.slug}`} value={artist.name}>{artist.name} (Guest Artist)</option>)}</select></label>
      </div>
      <label className="block text-sm" htmlFor="booking-idea">Tattoo Idea *<textarea id="booking-idea" className={inputClass} name="Tattoo Idea" rows={4} required maxLength={4000} placeholder="Describe your idea and preferred style." /></label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="block min-w-0 text-sm" htmlFor="booking-placement">Placement *<input id="booking-placement" className={inputClass} name="Placement" placeholder="e.g. left upper arm" required maxLength={150} /></label>
        <label className="block min-w-0 text-sm" htmlFor="booking-size">Approx. Size *<input id="booking-size" className={inputClass} name="Approx. Size" placeholder="e.g. 5 × 5 cm" required maxLength={100} /></label>
        <label className="block min-w-0 text-sm" htmlFor="booking-date">Preferred Date<input id="booking-date" className={inputClass} name="Preferred Date" type="date" min={minDate || undefined} /><span className="mt-2 block text-xs text-muted-foreground">Optional. Dates are in Japan time; availability will be confirmed by the studio.</span></label>
      </div>
      <label className="block text-sm" htmlFor="booking-message">Message<textarea id="booking-message" className={inputClass} name="Message" rows={4} maxLength={4000} placeholder="Travel dates, scheduling flexibility, or other questions (optional)." /></label>
      <fieldset className="space-y-3 min-w-0"><legend className="text-sm">Reference Images</legend><p id="reference-help" className="text-xs text-muted-foreground">Optional. Up to 3 images, JPG / PNG / WebP, 8 MB total. Please attach only images you have permission to share.</p>
        {[1, 2, 3].map(number => <label key={number} htmlFor={`booking-image-${number}`} className="block text-xs text-muted-foreground">Reference image {number}<input id={`booking-image-${number}`} name={number === 1 ? 'attachment' : `attachment${number}`} type="file" accept="image/jpeg,image/png,image/webp" aria-describedby="reference-help booking-error" className={`${inputClass} file:mr-3 file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-foreground`} onChange={() => formRef.current && checkImages(formRef.current)} /></label>)}
      </fieldset>
      <div className="border-y border-border py-5 text-sm leading-7 text-muted-foreground"><p>Small Tattoo: <strong className="text-foreground">¥10,000〜</strong></p><p>Deposit: <strong className="text-foreground">{studioInfo.deposit}</strong>. {studioInfo.cancellationPolicy}</p><p>Payment: {studioInfo.paymentMethods}.</p><p>This is an inquiry. Your appointment is confirmed only after the studio agrees the details and receives your deposit.</p></div>
      <label className="flex items-start gap-3 text-sm leading-6"><input name="Booking terms acknowledged" type="checkbox" required value="Yes" className="mt-1 h-4 w-4 shrink-0 accent-primary" /><span>I understand the deposit and cancellation terms. I agree to the use of my details and images to handle this inquiry, as described in the <Link href="/privacy" className="text-primary underline">Privacy Notice</Link>. *</span></label>
      <p className="text-xs text-muted-foreground">Your details and images are delivered to the studio via FormSubmit. Continue to the secure verification step to finish sending.</p>
      <p id="booking-error" role="alert" className="text-sm text-red-400">{error}</p>
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto uppercase tracking-wider">{submitting ? 'Opening secure verification…' : 'Send Booking Inquiry'}</Button>
      <p className="text-xs leading-6 text-muted-foreground">If sending fails, your inquiry may not have reached us. Please use <a className="text-primary underline" href={studioInfo.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram DM</a> or <a className="text-primary underline break-all" href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>.</p>
    </form>
  </div>
}
