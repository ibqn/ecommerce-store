import { cn } from '@/utils'
import { type ComponentProps } from 'react'

type Props = {
  color: string
} & ComponentProps<'div'>

export const ColorCircle = ({ color, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn('rounded-full border p-4', className)}
      style={{ backgroundColor: color }}
    />
  )
}
