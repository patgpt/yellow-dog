/**
 * @fileoverview Internationalization (i18n) configuration for Next.js application
 * @module i18n/config
 */
import logger from '@/utils/logger'
import { getRequestConfig, type RequestConfig } from 'next-intl/server'
import { routing } from './routing'

// Define supported locales type
export type Locale = 'en' | 'fr'

/**
 * Get Message for a specific locale
 *
 * @param {Locale} locale - The locale to load
 * @returns {Promise<Message | undefined>} The Message for the locale
 */
const getMessages = async (locale: Locale) => {
  const messages = await import(`./${locale}.ts`)
    .then((module) => module.default)
    .catch((error) => {
      logger.error('Error loading messages', { error })
      return {}
    })
  return messages
}

/**
 * Check if a locale is valid
 *
 * @param {readonly string[]} locales - The list of valid locales
 * @param {string} locale - The locale to check
 * @returns {boolean} True if the locale is valid, false otherwise
 */
export const hasLocale = (locales: readonly string[], locale: string): locale is Locale => {
  return locales.includes(locale)
}

/**
 * Request configuration for next-intl
 * Handles locale detection and message loading
 *
 * @param {Object} params - Configuration parameters
 * @param {Promise<string>} params.requestLocale - The requested locale from the client
 * @returns {Promise<RequestConfig>} The configuration for next-intl
 */
export default getRequestConfig(async ({ requestLocale }): Promise<RequestConfig> => {
  const requested =
    (await requestLocale
      .then((locale) => locale)
      .catch((error) => {
        logger.error('Error loading locale', { error })
        return routing.defaultLocale
      })) ?? routing.defaultLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  return {
    locale,
    messages: await getMessages(locale)
      .then((messages) => messages)
      .catch((error) => {
        logger.error('Error loading messages', { error })
        return {}
      })
  }
})
