import { type CategoryType } from '@/types'

const API_CATEGORY_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/category`

export const getCategories = async (): Promise<CategoryType[]> => {
  try {
    const response = await fetch(API_CATEGORY_URL)
    return await response.json()
  } catch (error) {
    console.error('Error on getting categories.', error)
    return []
  }
}
