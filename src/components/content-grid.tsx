import Image from "next/image"
import { Play } from 'lucide-react'
import Link from "next/link"

interface ContentItem {
  id: string
  title: string
  image: string
  episodeNumber?: string
  category?: string
}

interface ContentGridProps {
  title: string
  items: ContentItem[]
  showEpisodeNumber?: boolean
  showCategory?: boolean
  columns?: number
  linkPrefix?: string
}

export default function ContentGrid({
  title,
  items,
  showEpisodeNumber = false,
  showCategory = false,
  columns = 5,
  linkPrefix = "",
}: ContentGridProps) {
  return (
    <section className="py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <Link href="#" className="text-pink-500 hover:text-pink-400 text-sm">
          عرض المزيد
        </Link>
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-4`}>
        {items.map((item) => (
          <Link href={`${linkPrefix}/${item.id}`} key={item.id} className="block group">
            <div className="relative h-40 rounded-md overflow-hidden">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="h-10 w-10 text-white opacity-80" />
              </div>
              {showEpisodeNumber && item.episodeNumber && (
                <div className="absolute bottom-0 right-0 bg-gray-900 bg-opacity-80 px-2 py-1 text-sm">
                  {item.episodeNumber}
                </div>
              )}
              {showCategory && item.category && (
                <div className="absolute top-0 right-0 bg-pink-600 px-2 py-1 text-xs">
                  {item.category}
                </div>
              )}
            </div>
            <h3 className="mt-2 text-sm font-medium group-hover:text-pink-500 transition-colors">{item.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
