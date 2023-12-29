import { cn } from '@/utils'
import { forwardRef, type ComponentProps, type ReactElement } from 'react'

type Props = {
  icon: ReactElement
} & ComponentProps<'button'>

export const IconButton = forwardRef<HTMLButtonElement, Props>(({ className, icon, ...props }, ref) => {
  return (
    <button
      ref={ref}
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
})

IconButton.displayName = "IconButton"
