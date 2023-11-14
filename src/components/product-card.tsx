import { ProductType } from '@/types'

type Props = {
  product: ProductType
}

export const ProductCard = (props: Props) => {
  const { product } = props

  return <div>{product.name}</div>
}
