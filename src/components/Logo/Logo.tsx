import clsx from 'clsx'
import Image from 'next/image'
interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="YellowDog Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      // decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px] m-auto', className)}
      src="/logo_beta.png"
    />
  )
}

export default Logo
