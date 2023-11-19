import { type BillboardType } from '@/types'

const API_BILLBOARD_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/billboard`

export const getBillboards = async (): Promise<BillboardType[]> => {
  try {
    const response = await fetch(API_BILLBOARD_URL)

    if (response.status !== 200) {
      console.error("Couldn't get billboards")
      console.error(await response.json())
      return []
    }

    return await response.json()
  } catch (error) {
    console.error('Error on getting billboards', error)
    return []
  }
}
