import Link from 'next/link'
import { Container } from './container'
import { MainNav } from './main-nav'
import { getCategories } from '@/actions/get-categories'
import { NavbarActions } from './navbar-actions'

type Props = {}

export const Navbar = async (props: Props) => {
  const categories = await getCategories()

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex gap-x-2">
            <p className="text-xl font-bold uppercase">Store</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}
