import Image from "next/image"
import Link from "next/link"

interface AdBannerProps {
  text: string
  image: string
  link?: string
}

export default function AdBanner({ text, image, link = "#" }: AdBannerProps) {
  return (
    <section className="py-4 px-4">
      <Link href={link} className="block relative container mx-auto">
        <div className="relative h-[100px] w-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={text} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center">
            <div className="px-8">
              <h3 className="text-xl font-bold text-white">{text}</h3>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
