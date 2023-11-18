import { ProductType } from '@/types'
import { Currency } from '@/components/currency'

type Props = {
  product: ProductType
}

export const Info = ({ product }: Props) => {
  const { name, price, size } = product
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency price={price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Size: {size?.name}</h3>
      </div>
    </div>
  )
}
