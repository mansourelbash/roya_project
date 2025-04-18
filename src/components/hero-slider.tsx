"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'


export const heroSlides = [
  {
    id: 1,
    title: "دنيا يا دنيا",
    subtitle: "برنامج المنوعات",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1357/Po4tBDzJKqXp4q4.webp",
  },
  {
    id: 2,
    title: "صباح الخير يا أردن",
    subtitle: "برنامج صباحي",
    image: "https://backend.roya-tv.com/imagechanger/Size01Q40R1656/images/programs/80/1oFm8KmkdQuXVkH.jpg",
  },
  {
    id: 3,
    title: "نبض البلد",
    subtitle: "برنامج إخباري",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1344/sLmKbVdjdsj7e3r.webp",
  },
  {
    id: 4,
    title: "كرفان",
    subtitle: "برنامج ترفيهي",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1304/nO2vdi3BeDlpv3r.webp",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
  }

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-rotate slides every 5 seconds
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
            <div className="absolute bottom-10 right-10 text-white">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm opacity-80">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-4 flex items-center space-x-2 space-x-reverse z-20">
          <button className="bg-pink-600 text-white px-3 py-1 rounded-md text-sm flex items-center">
            <span>مشاهدة الآن</span>
            <Play className="h-4 w-4 mr-1" />
          </button>
        </div>

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
