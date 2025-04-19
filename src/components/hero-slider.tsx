"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MonitorPlayIcon as TvMinimalPlay } from "lucide-react"

export const heroSlides = [
  {
    id: 55,
    title: "نشرة الأخبار",
    subtitle: "مجتمعي",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1311/glZcvYVUj2fM1KQ.webp",
    live_now: true,
    rating: 4.4,
  },
  {
    id: 1,
    title: "دنيا يا دنيا",
    subtitle: "برنامج المنوعات",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1357/Po4tBDzJKqXp4q4.webp",
    live_now: false,
    rating: 4.2,
  },
  {
    id: 2,
    title: "صباح الخير يا أردن",
    subtitle: "برنامج صباحي",
    image: "https://backend.roya-tv.com/imagechanger/Size01Q40R1656/images/programs/80/1oFm8KmkdQuXVkH.jpg",
    live_now: false,
    rating: 4.7,
  },
  {
    id: 3,
    title: "نبض البلد",
    subtitle: "برنامج إخباري",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1344/sLmKbVdjdsj7e3r.webp",
    live_now: false,
    rating: 4.5,
  },
  {
    id: 4,
    title: "كرفان",
    subtitle: "برنامج ترفيهي",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1304/nO2vdi3BeDlpv3r.webp",
    live_now: false,
    rating: 4.3,
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
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-lg shadow-md">
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
              className="object-cover object-center"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {slide.live_now && (
              <div className="absolute bottom-[140px] right-6 md:right-10 flex items-center space-x-2 space-x-reverse z-20">
                <button className="inline-flex items-center gap-2 text-sm bg-rose-600 hover:bg-rose-700 py-1.5 px-4 transition-all rounded-full shadow-lg">
                  <TvMinimalPlay className="w-4 h-4" />
                  <span>تشاهدون الآن</span>
                </button>
              </div>
            )}

            <div className="absolute bottom-8 right-6 md:right-10 text-white max-w-[90%] md:max-w-md z-10">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-1">{slide.title}</h2>
              <p className="text-sm md:text-base text-gray-200">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-0 flex flex-row-reverse items-center px-6 z-20">
          <div className="text-white font-bold text-lg mr-3">
  {currentSlide + 1} . {heroSlides.length}
</div>

          <div className="flex items-center gap-2 mr-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 ${
                  index === currentSlide ? "w-8 bg-white" : "w-4 bg-gray-500/50"
                } rounded-full transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-row-reverse items-center gap-2">
            <button
              className="bg-white hover:bg-gray-600/80 text-black rounded-full p-1.5 transition"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <button
              className="bg-white hover:bg-gray-600/80 text-black rounded-full p-1.5 transition"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
