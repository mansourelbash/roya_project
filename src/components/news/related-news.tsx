import Image from "next/image"
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
      <h3 className="text-lg font-bold mb-4">أخبار ذات صلة</h3>
      <div className="space-y-4">
        {relatedNews.slice(0, 10).map((news) => (
          <Link href={`/news/${news.id}`} key={news.id} className="flex gap-3 group">
            <div className="relative h-16 w-24 flex-shrink-0">
              <Image
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                fill
                className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium group-hover:text-pink-500 transition-colors line-clamp-2">
                {news.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
