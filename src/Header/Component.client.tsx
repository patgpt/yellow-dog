import type { Header } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import './../app/(frontend)/globals.css'

import Logo from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="container relative z-20 shadow-lg w-full rounded-2xl bg-foreground text-background mx-auto">
      <div className="p-4 flex justify-between m-4">
        <Link href="/">
          <Logo loading="eager" priority="high" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
