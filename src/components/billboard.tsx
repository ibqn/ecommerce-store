import { type BillboardType } from '@/types'
import Image from 'next/image'

type Props = {
  billboard: BillboardType
}

export const Billboard = ({ billboard }: Props) => {
  const { label, imageUrl } = billboard

  return (
    <div className="relative m-4 flex h-[300px] overflow-hidden rounded-xl sm:m-6 lg:m-8">
      <Image
        fill
        src={imageUrl}
        alt="Billboard"
        className="aspect-square overflow-hidden rounded-xl object-cover"
      />

      <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
        <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
          {label}
        </div>
      </div>
    </div>
  )
}
