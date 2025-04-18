"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, TvMinimalPlay } from 'lucide-react'


export const heroSlides = [
  {
   id: 55,
    title: "نشرة الأخبار",
    subtitle: "مجتمعي",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1311/glZcvYVUj2fM1KQ.webp",
    live_now: true
  },
  {
    id: 1,
    title: "دنيا يا دنيا",
    subtitle: "برنامج المنوعات",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1357/Po4tBDzJKqXp4q4.webp",
    live_now: false

  },
  {
    id: 2,
    title: "صباح الخير يا أردن",
    subtitle: "برنامج صباحي",
    image: "https://backend.roya-tv.com/imagechanger/Size01Q40R1656/images/programs/80/1oFm8KmkdQuXVkH.jpg",
    live_now: false

  },
  {
    id: 3,
    title: "نبض البلد",
    subtitle: "برنامج إخباري",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1344/sLmKbVdjdsj7e3r.webp",
    live_now: false

  },
  {
    id: 4,
    title: "كرفان",
    subtitle: "برنامج ترفيهي",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1304/nO2vdi3BeDlpv3r.webp",
    live_now: false

  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="relative h-[800px] w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          {slide.live_now && (
          <div className="absolute bottom-[120px] right-10 flex items-center space-x-2 space-x-reverse z-20">
        <button className="inline-flex items-center gap-2 text-sm bg-rose-500 hover:bg-rose-600 py-1 px-4 transition-all rounded">
             <TvMinimalPlay />
            <span> تشاهدون الآن</span>
          </button>
        </div>
         )}
            
            <div className="absolute bottom-10 right-10 text-white">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm opacity-80">{slide.subtitle}</p>
            </div>
          </div>
        ))}



        <div className="absolute bottom-4 right-1/2 transform translate-x-1/2 flex items-center space-x-1 space-x-reverse z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/50 rounded-full p-2 z-20 hover:bg-gray-800/80 transition-colors"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/50 rounded-full p-2 z-20 hover:bg-gray-800/80 transition-colors"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
