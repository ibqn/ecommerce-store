import Link from 'next/link'
import { Container } from './container'
import { MainNav } from './main-nav'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-xl font-bold uppercase">Store</p>
          </Link>

          <MainNav data={[]} />
        </div>
      </Container>
    </div>
  )
}
