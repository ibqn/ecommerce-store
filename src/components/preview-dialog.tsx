import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { IconButton } from '@/components/icon-button'
import { Expand } from 'lucide-react'
import { Gallery } from '@/components/gallery'
import { Info } from '@/components/info'
import { ProductType } from '@/types'

type Props = {
  product: ProductType
}

export const PreviewDialog = ({ product }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton icon={<Expand size={20} className="text-gray-600" />} />
      </DialogTrigger>
      <DialogContent className="w-full max-w-3xl">
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <Gallery images={product.images} />
          </div>

          <div className="sm:col-span-8 lg:col-span-7">
            <Info product={product} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
