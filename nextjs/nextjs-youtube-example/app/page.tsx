import Link from 'next/link'

export default function Home() {
  const post = { id: '12345', title: 'This is a description' }
  return (
    <div className="flex flex-col">
      <Link href="/testroute">default link</Link>
      <Link
        href={{
          pathname: '/testroute',
          query: { name: '123' },
        }}
      >
        default link with object
      </Link>

      <Link href="/testroute" replace>
        default link with replace
      </Link>

      <Link href="/testroute" scroll={true}>
        Standard Link with scroll
      </Link>

      <Link href="/testroute" prefetch={true}>
        default link with prefetch
      </Link>

      <Link href={`/blog/${post.id}`}>{post.title}</Link>
    </div>
  )
}
