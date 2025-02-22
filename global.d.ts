import en from '@/dictionaries/en'
import { formats } from '@/i18n/request'
import 'next-intl'

declare global {
  type Locale = (typeof routing.locales)[number]

  /**
   * Type definition for date, number, and other formatting options
   * @type {Object}
   */
  type Formats = typeof formats

  /**
   * Type definition for the application's translation messages
   * Based on the English locale dictionary structure
   * @type {Object}
   */
  type Messages = typeof en

  /**
   * Module augmentation for next-intl package
   * Extends the default configuration with our custom types
   *
   * @module next-intl
   * @description
   * Provides type safety for:
   * - Translation messages based on English dictionary
   * - Formatting options for dates, numbers, and other localized content
   */
  declare module 'next-intl' {
    interface AppConfig {
      Messages: typeof en
      Formats: typeof formats
    }
  }
}
