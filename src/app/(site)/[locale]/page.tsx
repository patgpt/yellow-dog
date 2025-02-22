import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
export default function Page() {
  const t = useTranslations('common')
  return <Link href="/">{t('home')}</Link>
}
