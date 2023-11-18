import Link from 'next/link'
import { Heading } from '@/components/heading'

type Props = {
  title?: string
  subtitle?: string
  showReset?: boolean
}

export const EmptyState = (props: Props) => {
  const { title, subtitle, showReset } = props
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <Heading
        center
        title={title ?? 'Page not found'}
        subtitle={subtitle ?? 'Try to visit another page instead.'}
      />
      {showReset && (
        <Link
          className="text-md rounded-lg border-2 border-black bg-white px-8 py-3 font-semibold text-black transition hover:opacity-80"
          href="/"
        >
          Go to the main page
        </Link>
      )}
    </div>
  )
}
