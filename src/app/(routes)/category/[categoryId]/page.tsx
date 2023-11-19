import { getProducts } from '@/actions'

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

  const products = getProducts({
    categoryId,
    colorId,
    sizeId,
  })

  return <div>category</div>
}
