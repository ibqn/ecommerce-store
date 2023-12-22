import Link from "next/link"
import { Container } from "./container"
import { MainNav } from "./main-nav"
import { getCategories } from "@/actions/get-categories"
import dynamic from "next/dynamic"

const NavbarActions = dynamic(
  async () => {
    const { NavbarActions } = await import("@/components/navbar-actions")
    return { default: NavbarActions }
  },
  {
    ssr: false,
    loading: () => (
      <div className="ml-auto flex animate-pulse">
        <div className="flex h-10 w-[64px] rounded-full bg-slate-200" />
      </div>
    ),
  }
)

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
