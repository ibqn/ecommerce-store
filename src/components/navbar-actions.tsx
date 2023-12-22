"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { ShoppingBag } from "lucide-react"

type Props = {}

export const NavbarActions = (props: Props) => {
  const cart = useCart()

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center gap-x-2 rounded-full">
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}
