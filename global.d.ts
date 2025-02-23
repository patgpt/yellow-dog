// global.d.ts

import en from '@/i18n/messages/en'
import { formats } from '@/i18n/request'
import { routing } from '@/i18n/routing'

type Locale = (typeof routing.locales)[number]
type Messages = typeof en
type Formats = typeof formats

declare module 'next-intl' {
  interface AppConfig {
    Messages: Messages
    Formats: Formats
    Locale: Locale
  }
}
