import { getRequestConfig } from 'next-intl/server'

import { Locale } from 'next-intl'
import { routing } from './routing'

export default getRequestConfig(async ({ locale: requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = (await requestLocale) as Locale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale
  const messages = await import(`./messages/${locale}.ts`).then((module) => module.default)
  return {
    locale,
    messages
  }
})

function hasLocale(locales: readonly Locale[], requested: Locale) {
  return locales.includes(requested)
}
