function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, '')
}

const temporaryProductionUrl = 'https://v0-zombido.vercel.app'

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : temporaryProductionUrl)
)

export const ogImagePath = '/images/og-zumbido.png'
export const ogImageUrl = new URL(ogImagePath, siteUrl).toString()
