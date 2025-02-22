// 'use client';

// import { useSelectedLayoutSegment } from 'next/navigation'
// import { ComponentProps } from 'react'

// import type { Link as LinkComponent } from '@/i18n/config'
// import { Link as NavLink } from '@/i18n/config'
// export default function NavigationLink({
//   href,
//   children,
//   ...rest
// }: ComponentProps<typeof LinkComponent>) {
//   const selectedLayoutSegment = useSelectedLayoutSegment()
//   const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
//   const isActive = pathname === href

//   return (
//     <NavLink href={href} {...rest}>
//       {children}
//     </NavLink>
//   )
// }
