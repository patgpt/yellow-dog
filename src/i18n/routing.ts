import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

/**
 * Routing configuration for internationalization
 * Defines supported locales and fallback behavior
 *
 * @see https://next-intl-docs.vercel.app/docs/routing/middleware
 */
export const routing = defineRouting({
  locales: ['en', 'fr'] as const,
  defaultLocale: 'en' as const,
  localePrefix: 'always' as const,
  localeCookie: true as const,
  localeDetection: true as const
})
//  * Navigation utilities with i18n support
export const { useRouter, usePathname, Link, getPathname, permanentRedirect, redirect } = createNavigation(routing)
