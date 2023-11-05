'use client'

import { type Category } from '@/types'
import { usePathname } from 'next/navigation'

type Props = {
  data: Category[]
}

export const MainNav = (props: Props) => {
  const { data } = props

  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
  }))

  return <nav>nav</nav>
}
