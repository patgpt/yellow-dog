import { routing } from '@/i18n/routing'
import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  console.log('middleware !!!!!!!!!!!!!!!, request', request)

  // const handleI18nRouting = createMiddleware({
  //   locales: routing.locales,
  //   defaultLocale: routing.defaultLocale,
  //   localeDetection: true,
  //   localeCookie: true
  // })

  const intl = createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale,
    localeDetection: true,
    localeCookie: true
  })
  console.log('intl', intl)
  const response = intl(request)
  console.log('response', response)

  return response
}

export const config = {
  // Match only internationalized pathnames
  matcher: '/(fr|en)/:path*'
}
