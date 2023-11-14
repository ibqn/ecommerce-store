import { CategoryType } from './category'
import { ColorType } from './color'
import { ImageType } from './image'
import { SizeType } from './size'

export type ProductType = {
  id: string
  category: CategoryType
  name: string
  price: string
  isFeatured: boolean
  size: SizeType
  color: ColorType
  images: ImageType[]
}
