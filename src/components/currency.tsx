import { cn, formatPrice } from '@/utils'
import { ComponentProps } from 'react'

type Props = {
  price: string | number
} & ComponentProps<'span'>

export const Currency = ({ price, className, ...props }: Props) => {
  return (
    <span {...props} className={cn('font-semibold', className)}>
      {formatPrice(Number(price))}
    </span>
  )
}
