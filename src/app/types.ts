/**
 * Props interface for the RootLayout component
 *
 * @interface RootLayoutProps
 * @property {React.ReactNode} children - The child components to be rendered
 * @property {Promise<{ locale: Locale }>} params - The route parameters containing the locale
 */
export type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}
/**
 * Language names
 * @description Maps language codes to their display names
 */
export const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  'zh-CN': '中文'
} as const

/**
 * Messages type
 *
 * @type {Messages}
 */
export type Messages = Record<Locale, () => Promise<Messages>>

/**
 * Page props type
 *
 * @type {PageProps}
 */
export type PageProps = {
  params: Promise<{ locale: Locale; slug: string }>
}
