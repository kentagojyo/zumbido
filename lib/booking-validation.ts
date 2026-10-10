export const MAX_REFERENCE_BYTES = 8 * 1024 * 1024
export function validateReferenceImages(files: { size: number; type: string }[]) {
  if (files.some(file => !['image/jpeg', 'image/png', 'image/webp'].includes(file.type))) return 'Please use JPG, PNG or WebP images.'
  if (files.reduce((total, file) => total + file.size, 0) > MAX_REFERENCE_BYTES) return 'Your reference images must total 8 MB or less.'
  return null
}
export function todayInTokyo() {
  return new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' })
}
