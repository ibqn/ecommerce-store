import { ImageType } from '@/types/image'
import { cn } from '@/utils'
import Image from 'next/image'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react'

type Props = {
  image: ImageType
  selected: string
} & ComponentPropsWithoutRef<'div'>

type Ref = ElementRef<'div'>

export const GalleryTab = forwardRef<Ref, Props>(
  ({ image, selected, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white',
          className
        )}
      >
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image
              src={image.url}
              fill
              alt="gallery image"
              className="object-cover object-center"
            />
          </span>

          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected === image.id ? 'ring-black' : 'ring-transparent'
            )}
          ></span>
        </div>
      </div>
    )
  }
)

GalleryTab.displayName = 'GalleryTab'
