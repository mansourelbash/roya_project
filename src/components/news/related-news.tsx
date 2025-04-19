import Link from "next/link"

interface NewsItem {
  id: string
  title: string
  category: string
  date: string
  image: string
}

interface RelatedNewsProps {
  relatedNews: NewsItem[]
}

export default function RelatedNews({ relatedNews }: RelatedNewsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-4">Top 10</h3>
      <div className="space-y-4 bg-slate-800 p-6">
        {relatedNews.slice(0, 10).map((news) => (
          <Link href={`/news/${news.id}`} key={news.id} className="flex gap-3 group border-dashed border-slate-600 pb-6 mb-6 border-b-1">
            <div>
              <h4 className="text-sm font-medium transition-colors line-clamp-2">
                {news.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
