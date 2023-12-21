import { useMemo } from 'react'

type Props = {}

export const Footer = (props: Props) => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-center text-sm text-black">
          &copy; {currentYear} Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
