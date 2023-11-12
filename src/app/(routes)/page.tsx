import { getBillboards } from '@/actions'
import { Container } from '@/components'
import { Billboard } from '@/components/billboard'

type Props = {}

export default async function Home(props: Props) {
  const [billboard] = await getBillboards()

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} />
      </div>
    </Container>
  )
}
