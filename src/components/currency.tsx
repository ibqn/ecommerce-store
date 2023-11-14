import { formatPrice } from '@/utils'

type Props = {
  price: string | number
}

export const Currency = ({ price }: Props) => {
  return <div className="font-semibold">{formatPrice(Number(price))}</div>
}
