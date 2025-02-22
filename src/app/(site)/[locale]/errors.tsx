'use client'

import { useTranslations } from 'next-intl'

export default function Error() {
  const t = useTranslations('common')
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1>{t('error')}</h1>
    </div>
  )
}
