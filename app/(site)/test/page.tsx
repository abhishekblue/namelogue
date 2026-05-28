import { client } from '@/sanity/lib/client'
import { allArticlesQuery } from '@/sanity/lib/queries'

export const dynamic = 'force-dynamic'

export default async function TestPage() {
  const articles = await client.fetch(allArticlesQuery)

  return (
    <main>
      <h1>Sanity ↔ Next.js test</h1>
      <p>Found {articles.length} article(s).</p>
      <ul>
        {articles.map((a) => (
          <li key={a._id}>
            {a.title ?? '(untitled)'} — slug: {a.slug ?? '(no slug)'}
          </li>
        ))}
      </ul>
    </main>
  )
}
