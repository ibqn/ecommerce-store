import React from 'react'

type Props = {}

export const NoResults = (props: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center text-neutral-500">
      No results found.
    </div>
  )
}
