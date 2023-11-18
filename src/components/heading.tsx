import { cn } from '@/utils/class-names'

type Props = {
  title: string
  subtitle?: string
  center?: boolean
}

export const Heading = (props: Props) => {
  const { title, subtitle, center } = props
  return (
    <div className={cn(center ? 'text-center' : 'text-start')}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
    </div>
  )
}
