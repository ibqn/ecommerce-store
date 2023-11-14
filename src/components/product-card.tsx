'use client'

import { type ProductType } from '@/types'
import Image from 'next/image'
import { IconButton } from './icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import { Currency } from './currency'
import { useRouter } from 'next/navigation'

type Props = {
  product: ProductType
}

export const ProductCard = ({ product }: Props) => {
  const { id, images, name, category, price } = product

  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={images?.[0]?.url}
          alt="Product image"
          fill
          className="aspect-square object-cover"
        />

        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{category.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency price={price} />
      </div>
    </div>
  )
}
