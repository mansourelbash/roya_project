"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const channels = [
  {
    name: "Roya Kids Songs",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/bhcFxtJzaiiKclJ.png",
    color: "bg-orange-600",
  },
  {
    name: "Roya Kids",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/VSROVRDy7vqATP2.png",
    color: "bg-yellow-500",
  },
  {
    name: "رؤيا فلسطين",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/xxfDsR7ZbjFOzp6.png",
    color: "bg-purple-600",
  },
  {
    name: "Roya Music",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/NH7iEqT9rXHmwxl.png",
    color: "bg-pink-600",
  },
  {
    name: "Roya Kitchen",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/y2AB2KZz3UMXtyK.png",
    color: "bg-green-600",
  },
  {
    name: "Roya Sport",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/D0WIXZSSmg1BNJQ.png",
    color: "bg-teal-500",
  },
  {
    name: "Roya Comedy",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/GACtHgmN6t9X6RO.png",
    color: "bg-red-600",
  },
  {
    name: "Roya Drama",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/VxKuzwvG5TBvqXI.png",
    color: "bg-blue-600",
  },
  {
    name: "Roya TV",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/iMoPuU3u5qnqMsL.png",
    color: "bg-purple-800",
  },
  {
    name: "Roya Kids Original",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/MuPjI0GxrmqGvzo.png",
    color: "bg-indigo-600",
  },
  {
    name: "Roya News",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/UdKZBqQO4ODgcN2.png",
    color: "bg-cyan-600",
  },
  {
    name: "إنتاجات رؤيا",
    logo: "https://backend.roya-tv.com/imagechanger/Size01Q40R11/images/channels/tLCS5pA4B8QgF5u.png",
    color: "bg-amber-600",
  },
]

export default function LiveChannels() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 300

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-8 px-4 bg-[#111827] text-white relative">
      <div className="flex justify-end mb-6">
        <h2 className="text-xl font-bold">قنواتنا المباشرة</h2>
      </div>

      <div className="relative">
        {/* Left Arrow - Positioned absolutely */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 rounded-full p-2 hover:bg-gray-700"
          onClick={scrollRight}
          aria-label="Previous channels"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Arrow - Positioned absolutely */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 rounded-full p-2 hover:bg-gray-700"
          onClick={scrollLeft}
          aria-label="Next channels"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div
          ref={containerRef}
          className="flex overflow-x-auto pb-4 hide-scrollbar scroll-smooth px-12"
          style={{
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For IE
          }}
        >
          <div className="flex space-x-8 space-x-reverse rtl">
            {channels.map((channel, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0" style={{ width: "140px" }}>
                <div
                  className="rounded-full mb-2 flex items-center justify-center"
                  style={{ width: "120px", height: "120px" }}
                >
                  <Image
                    src={channel.logo || "/placeholder.svg"}
                    alt={channel.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-center whitespace-nowrap">{channel.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS to hide scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .rtl {
          direction: rtl;
        }
      `}</style>
    </section>
  )
}
