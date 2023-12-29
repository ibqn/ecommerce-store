'use client'

import { ImageType } from '@/types/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { GalleryTab } from './gallery-tab'
import { useState } from 'react'

type Props = {
  images: ImageType[]
}

export const Gallery = ({ images }: Props) => {
  const [selected, setSelected] = useState<string>(images?.[0]?.id)

  return (
    <Tabs
      value={selected}
      onValueChange={(value) => setSelected(value)}
      defaultValue="account"
    >
      <div className="mx-auto hidden w-full max-w-2xl sm:block lg:max-h-none">
        {images.map((image) => {
          return (
            <TabsContent key={image.id} value={image.id} className="mt-0">
              <div className="relative flex aspect-square h-full w-full overflow-hidden sm:rounded-lg">
                <Image
                  src={image.url}
                  fill
                  alt="gallery image"
                  className="object-cover object-center"
                />
              </div>
            </TabsContent>
          )
        })}

        <TabsList className="mt-4 grid h-auto grid-cols-4 gap-6 bg-transparent">
          {images.map((image) => {
            return (
              <TabsTrigger asChild key={image.id} value={image.id}>
                <GalleryTab selected={selected} image={image} />
              </TabsTrigger>
            )
          })}
        </TabsList>
      </div>
    </Tabs>
  )
}
