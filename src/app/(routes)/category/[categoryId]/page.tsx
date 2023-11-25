import { getCategory, getProducts, getColors, getSizes } from '@/actions'
import { Container } from '@/components'
import { Billboard } from '@/components/billboard'
import { Filter } from '@/components/filter'
import { MobileFilter } from '@/components/mobile-filter'
import { NoResults } from '@/components/no-results'
import { ProductCard } from '@/components/product-card'

type Props = {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

export default async function Page({ params, searchParams }: Props) {
  const { categoryId } = params

  const { colorId, sizeId } = searchParams

  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  })

  const sizes = await getSizes()
  const colors = await getColors()

  const category = await getCategory(categoryId)

  return (
    <div className="bg-white">
      <Container>
        <div className="space-y-10 pb-10">
          {category?.billboard && <Billboard billboard={category.billboard} />}
        </div>

        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* <MobileFilter sizes={sizes} colors={colors} /> */}

            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products?.length === 0 && <NoResults />}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
