"use client"

import { type ProductType } from "@/types"
import Image from "next/image"
import { IconButton } from "./icon-button"
import { X } from "lucide-react"
import { Currency } from "./currency"
import { useCart } from "@/hooks/use-cart"

type Props = {
  product: ProductType
}

export const CartItem = ({ product }: Props) => {
  const cart = useCart()

  const onRemoveFromCart = () => {
    cart.removeItem(product.id)
  }

  return (
    <li className="flex border-b py-6">
      <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          src={product.images[0].url}
          alt="Product"
          className="object-cover object-center"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton icon={<X size={15} />} onClick={onRemoveFromCart} />
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{product.name}</p>
          </div>

          <div className="mt-1 flex divide-x text-sm text-gray-500">
            <p className="px-4">{product.color?.name}</p>
            <p className="px-4">{product.size?.name}</p>
          </div>

          <Currency price={product.price} />
        </div>
      </div>
    </li>
  )
}
