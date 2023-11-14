import { type ProductType } from '@/types'
import qs from 'query-string'

const API_PRODUCT_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/product`

type Query = {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

export const getProducts = async (query: Query): Promise<ProductType[]> => {
  const { categoryId, colorId, sizeId, isFeatured } = query

  try {
    const url = qs.stringifyUrl(
      {
        url: API_PRODUCT_URL,
        query: {
          colorId,
          sizeId,
          categoryId,
          isFeatured,
        },
      },
      { skipNull: true }
    )

    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error('Error on getting products.', error)
    return []
  }
}
