import type { MetadataRoute } from 'next'
import { artists, guestArtists } from '@/lib/data'
import { siteUrl } from '@/lib/seo'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/guest-artists', '/privacy', ...artists.map(artist => `/artists/${artist.slug}`), ...guestArtists.map(artist => `/guest-artists/${artist.slug}`)].map(path => ({ url: `${siteUrl}${path}`, changeFrequency: 'monthly', priority: path ? 0.7 : 1 }))
}
