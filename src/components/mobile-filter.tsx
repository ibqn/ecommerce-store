import { type ColorType, type SizeType } from '@/types'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Filter } from './filter'

type Props = {
  sizes: SizeType[]
  colors: ColorType[]
}

export const MobileFilter = ({ sizes, colors }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-x-2 rounded-full lg:hidden">
          Filters
          <Plus size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Adjust your filters.</SheetDescription>
        </SheetHeader>

        <div className="py-4">
          <Filter valueKey="sizeId" name="Sizes" data={sizes} />
          <Filter valueKey="colorId" name="Colors" data={colors} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
