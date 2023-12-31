import { getProduct, getProducts } from "@/actions"
import { Container } from "@/components"
import { EmptyState } from "@/components/empty-state"
import { Gallery } from "@/components/gallery"
import { Info } from "@/components/info"
import { ProductList } from "@/components/product-list"

type Props = {
  params: {
    productId: string
  }
}

export default async function Page({ params }: Props) {
  const { productId } = params

  const product = await getProduct(productId)
  // console.log('product', product)

  if (!product) {
    return <EmptyState showReset />
  }

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  })

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product?.images ?? []} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info product={product} />
            </div>
          </div>

          <hr className="my-10" />

          <ProductList
            title="Suggested Products"
            products={suggestedProducts}
          />
        </div>
      </Container>
    </div>
  )
}
