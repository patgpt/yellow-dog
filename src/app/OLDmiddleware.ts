import { hasLocale } from '@/i18n/request'
import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from '../i18n/routing'

/**
 * Middleware for handling internationalization and locale routing
 */
const handleI18nRouting = createMiddleware({
  // Configure internationalization routing
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: 'always'
})
const handleLocaleRedirect = (request: NextRequest) => {
  const response = handleI18nRouting(request)
  if (!hasLocale(routing.locales, request.nextUrl.locale)) {
    return NextResponse.redirect(new URL(`/${routing.defaultLocale}${request.nextUrl.pathname}`, request.url))
  }
  return response
}

export default function middleware(request: NextRequest) {
  const response = handleLocaleRedirect(request)
  console.log(response)
  return response
}

/**
 * Middleware matcher configuration
 * Matches all paths except those starting with:
 * - api (API routes)
 * - _next (Next.js internals)
 * - images, media, or other static files
 */
export const config = {
  matcher: ['/', '/(fr|en)/:path*']
}
