import { getCategory, getProducts, getColors, getSizes } from '@/actions'
import { Container } from '@/components'
import { Billboard } from '@/components/billboard'

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
      </Container>
    </div>
  )
}
