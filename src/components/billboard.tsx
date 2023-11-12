import { BillboardType } from '@/types'
import Image from 'next/image'

type Props = {
  billboard: BillboardType
}

export const Billboard = ({ billboard }: Props) => {
  const { label, imageUrl } = billboard

  return (
    <div className="relative m-4 flex h-[300px] overflow-hidden rounded-xl sm:m-6 lg:m-8">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
        <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
          {label}
        </div>
      </div>

      <Image
        fill
        src={imageUrl}
        alt="Billboard"
        className="-z-10 aspect-square overflow-hidden rounded-xl object-cover"
      />
    </div>
  )
}
