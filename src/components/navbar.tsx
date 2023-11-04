import Link from 'next/link'
import { Container } from './container'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <div className="border-b">
      <Container>
        <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
          <p className="text-xl font-bold uppercase">Store</p>
        </Link>
      </Container>
    </div>
  )
}
