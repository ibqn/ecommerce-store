import { type ColorType } from '@/types'

const API_COLOR_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/color`

export const getColors = async (): Promise<ColorType[]> => {
  try {
    const response = await fetch(API_COLOR_URL)

    if (response.status !== 200) {
      console.error("Couldn't get colors")
      console.error(await response.json())
      return []
    }

    return await response.json()
  } catch (error) {
    console.error('Error on getting colors', error)
    return []
  }
}
