/**
 * @module Messages
 * @description Message loading and management utilities
 */

import { log } from '@/utils/logger'

// Import dictionaries
import cn from './cn.json'
import en from './en.json'
import fr from './fr.json'
import { Messages } from '@/app/types'

/**
 * Message cache to avoid repeated imports
 */
const dictionaries: Messages = {
  en,
  fr,
  'zh-CN': cn
}

/**
 * Get Message for a specific locale
 *
 * @description
 * Loads and returns the Message for the specified locale.
 * Falls back to English if the requested locale is not available.
 *
 * @param {Locale} locale - The locale to load
 * @returns {Message} The loaded Message
 *
 * @example
 * ```typescript
 * const dict = getMessage('fr')
 * console.log(dict.common.loading) // "Chargement..."
 * ```
 */
export async function getMessage(locale: Locale): Promise<Messages> {
  try {
    return dictionaries[locale]
  } catch (error) {
    log.error('Failed to load Message', error as Error, { locale })
    return dictionaries.en // Fallback to English
  }
}

/**
 * Get all available locales
 *
 * @returns {Locale[]} Array of available locale codes
 */
export function getAvailableLocales(): Locale[] {
  return Object.keys(dictionaries) as Locale[]
}

/**
 * Check if a locale is valid
 *
 * @param {string} locale - The locale to check
 * @returns {boolean} True if the locale is valid
 */
export function isValidLocale(locale: string): locale is Locale {
  return locale in dictionaries
}
