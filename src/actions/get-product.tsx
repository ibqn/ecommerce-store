import { type ProductType } from '@/types'

const API_PRODUCT_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/product`

export const getProduct = async (
  productId: string
): Promise<ProductType | null> => {
  try {
    const response = await fetch(`${API_PRODUCT_URL}/${productId}`)
    return await response.json()
  } catch (error) {
    console.error('Error on getting products.', error)
    return null
  }
}
