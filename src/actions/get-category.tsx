import { type CategoryType } from '@/types'

const API_CATEGORY_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/category`

export const getCategory = async (
  categoryId: string
): Promise<CategoryType | null> => {
  try {
    const response = await fetch(`${API_CATEGORY_URL}/${categoryId}`)

    if (response.status !== 200) {
      console.error('category not found')
      console.error(await response.json())
      return null
    }

    return await response.json()
  } catch (error) {
    console.error('Error on getting product.', error)
    return null
  }
}
