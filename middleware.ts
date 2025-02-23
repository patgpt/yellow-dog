import { routing } from '@/i18n/routing'
import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intl = (request: NextRequest): NextResponse =>
  createMiddleware({
    ...routing,
    localeDetection: true,
    localeCookie: true,
    localePrefix: 'always'
  })(request)

export default function middleware(request: NextRequest) {
  console.log('middleware !!!!!!!!!!!!!!!, request', request)

  console.log('intl', intl)
  const response = intl(request)
  console.log('response', response)

  return response
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
}
