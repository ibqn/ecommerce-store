import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>

export const Container = (props: Props) => {
  const { children } = props
  return <div className="mx-auto max-w-7xl">{children}</div>
}
