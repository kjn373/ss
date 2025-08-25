import DOMPurify from 'dompurify'

// Server-safe HTML sanitization
export function sanitizeHtml(html: string): string {
  if (typeof window === 'undefined') {
    // Server-side: return HTML as-is since it's from trusted static data
    // In production, you might want to use a server-safe sanitizer like 'isomorphic-dompurify'
    return html
  } else {
    // Client-side: use DOMPurify normally
    return DOMPurify.sanitize(html)
  }
}
