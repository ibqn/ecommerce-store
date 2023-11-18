import { type SizeType } from '@/types'

const API_SIZE_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/size`

export const getSizes = async (): Promise<SizeType[]> => {
  try {
    const response = await fetch(API_SIZE_URL)

    if (response.status !== 200) {
      console.error("Couldn't get sizes")
      console.error(await response.json())
      return []
    }

    return await response.json()
  } catch (error) {
    console.error('Error on getting sizes.', error)
    return []
  }
}
