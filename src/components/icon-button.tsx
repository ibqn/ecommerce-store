import { cn } from '@/utils'
import { type ComponentProps, type ReactElement } from 'react'

type Props = {
  icon: ReactElement
} & ComponentProps<'button'>

export const IconButton = ({ className, icon, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center justify-center rounded-full border bg-white p-2 shadow-md',
        'transition hover:scale-110',
        className
      )}
    >
      {icon}
    </button>
  )
}
