import { ProductType } from '@/types'
import { NoResults } from './no-results'
import { ProductCard } from './product-card'

type Props = {
  products: ProductType[]
  title: string
}

export const ProductList = (props: Props) => {
  const { title, products } = props
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>

      {products.length === 0 && <NoResults />}

      <div className="lg:grid-flow-col-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => {
          const { id } = product

          return <ProductCard key={id} product={product} />
        })}
      </div>
    </div>
  )
}
