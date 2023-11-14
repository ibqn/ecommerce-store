import { ProductType } from '@/types'
import Image from 'next/image'

type Props = {
  product: ProductType
}

export const ProductCard = ({ product }: Props) => {
  const { images } = product

  return (
    <div className="cursor-pointer space-y-4 rounded-xl border bg-white p-3">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={images?.[0]?.url}
          alt="Product image"
          fill
          className="aspect-square object-cover"
        />
      </div>
    </div>
  )
}
