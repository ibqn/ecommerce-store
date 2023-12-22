"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"

type Props = {}

export const NavbarActions = (props: Props) => {
  const cart = useCart()

  const router = useRouter()

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center gap-x-2 rounded-full"
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}
