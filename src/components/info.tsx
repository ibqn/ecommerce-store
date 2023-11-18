import { ProductType } from '@/types'
import { Currency } from '@/components/currency'
import { ColorCircle } from '@/components/color-circle'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

type Props = {
  product: ProductType
}

export const Info = ({ product }: Props) => {
  const { name, price, size, color } = product

  return (
    <div>
      <h1 className="lead text-3xl font-bold text-gray-900">{name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency price={price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{size.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <ColorCircle color={color.value} />
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 rounded-full">
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}
