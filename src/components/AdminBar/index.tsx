'use client'
import type { PayloadAdminBarProps, PayloadMeUser } from 'payload-admin-bar'
import './../../app/(frontend)/globals.css'

import { cn } from '@/utilities/ui'
import { useRouter, useSelectedLayoutSegments } from 'next/navigation'
import { PayloadAdminBar } from 'payload-admin-bar'
import React, { useState } from 'react'

import { getClientSideURL } from '@/utilities/getURL'

const collectionLabels = {
  pages: {
    plural: 'Pages',
    singular: 'Page',
  },
  posts: {
    plural: 'Posts',
    singular: 'Post',
  },
  projects: {
    plural: 'Projects',
    singular: 'Project',
  },
}

const Title: React.FC = () => <span className="text-foreground">Dashboard</span>

export const AdminBar: React.FC<{
  adminBarProps?: PayloadAdminBarProps
}> = (props) => {
  const { adminBarProps } = props || {}
  const segments = useSelectedLayoutSegments()
  const [show, setShow] = useState(false)
  const collection = (
    collectionLabels[segments?.[1] as keyof typeof collectionLabels] ? segments[1] : 'pages'
  ) as keyof typeof collectionLabels
  const router = useRouter()

  const onAuthChange = React.useCallback((user: PayloadMeUser) => {
    setShow(Boolean(user?.id))
  }, [])

  return (
    <div
      className={cn(
        show ? 'p-4 bg-primary shadow-2xl shadow-accent hidden md:block z-50' : '',
      )}
    >
      <div className="container">
        <PayloadAdminBar
          {...adminBarProps}
          classNames={{
            controls: 'font-medium text-background ',
            logo: 'shadow-lg text-background p-4 rounded-lg bg-accent hover:text-black',
            user: 'bg-accent p-2 text-background rounded hover:text-accent-hover',
          }}
          cmsURL={getClientSideURL()}
          collection={collection}
          collectionLabels={{
            plural: collectionLabels[collection]?.plural || 'Pages',
            singular: collectionLabels[collection]?.singular || 'Page',
          }}
          logo={<Title />}
          onAuthChange={onAuthChange}
          onPreviewExit={() => {
            fetch('/next/exit-preview').then(() => {
              router.push('/')
              router.refresh()
            })
          }}
        />
      </div>
    </div>
  )
}
