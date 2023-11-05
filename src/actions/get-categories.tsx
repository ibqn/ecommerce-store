import { type Category } from '@/types'

const API_CATEGORIES_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/category`

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(API_CATEGORIES_URL)
    return await response.json()
  } catch (error) {
    console.error('Error on getting categories.', error)
    return []
  }
}
