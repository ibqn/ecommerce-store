'use client'

import { type CategoryType } from '@/types'
import { cn } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  data: CategoryType[]
}

export const MainNav = (props: Props) => {
  const { data } = props

  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
  }))

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => {
        const { href, label } = route

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'text-sm font-medium capitalize transition-colors hover:text-black',
              pathname === href ? 'text-black' : 'text-neutral-500'
            )}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
