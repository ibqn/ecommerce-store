import { type BillboardType } from '@/types'

const API_BILLBOARD_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/billboard`

export const getBillboards = async (): Promise<BillboardType[]> => {
  try {
    const response = await fetch(API_BILLBOARD_URL)
    return await response.json()
  } catch (error) {
    console.error('Error on getting billboards.', error)
    return []
  }
}
