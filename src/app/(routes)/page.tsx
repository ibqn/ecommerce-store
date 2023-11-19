import { getBillboards, getProducts } from '@/actions'
import { Container } from '@/components'
import { Billboard } from '@/components/billboard'
import { ProductList } from '@/components/product-list'

type Props = {}

export default async function Home(props: Props) {
  const [billboard] = await getBillboards()
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard && <Billboard billboard={billboard} />}

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList products={products} title="Featured Products" />
        </div>
      </div>
    </Container>
  )
}
