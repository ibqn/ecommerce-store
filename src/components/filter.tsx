'use client'

import { type ColorType, type SizeType } from '@/types'
import { cn } from '@/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import { useMemo } from 'react'
import { Button } from './ui/button'

type DataType = ColorType | SizeType

type Props = {
  valueKey: string
  name: string
  data: DataType[]
}

export const Filter = (props: Props) => {
  const { valueKey, name, data } = props

  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedValue = searchParams.get(valueKey)

  const current = useMemo(
    () => qs.parse(searchParams.toString()),
    [searchParams]
  )

  const onSelect = (id: string) => {
    const query = {
      ...current,
      [valueKey]: current[valueKey] === id ? null : id,
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    )

    router.push(url)
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />

      <div className="flex flex-wrap gap-2">
        {data?.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'hover:text-white',
                'rounded-md border border-gray-300 bg-white p-2 text-sm text-gray-800',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => onSelect(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
