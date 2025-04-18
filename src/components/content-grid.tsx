import Image from "next/image"
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { useState, useRef } from 'react'

interface ContentItem {
  id: string | number; 
  title?: string
  image?: string
  episodeNumber?: string
  category?: string
}

interface ContentGridProps {
  title: string
  items: ContentItem[]
  showEpisodeNumber?: boolean
  showCategory?: boolean
  linkPrefix?: string
  columns?: number;
}

export default function ContentGrid({
  title,
  items,
  showEpisodeNumber = false,
  showCategory = false,
  linkPrefix = "",
}: ContentGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const itemsPerPage = 5

  const nextSlide = () => {
    setCurrentIndex(prev => 
      Math.min(prev + itemsPerPage, items.length - itemsPerPage)
    )
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - itemsPerPage, 0))
  }

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-6 px-4 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      
      <div className="relative">
        {currentIndex > 0 && (
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
        )}

        <div 
          ref={sliderRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-transform duration-300"
        >
          {visibleItems.map((item) => (
            <Link 
              href={`${linkPrefix}/${item.id}`} 
              key={item.id} 
              className="block group"
            >
              <div className="relative h-40 rounded-md overflow-hidden">
                <Image 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.title || ''} 
                  fill 
                  className="object-cover" 
                />
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
              <h3 className="mt-2 text-sm font-medium group-hover:text-pink-500 transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

        {currentIndex < items.length - itemsPerPage && (
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        )}
      </div>
    </section>
  )
}