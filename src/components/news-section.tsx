import Image from "next/image"
import Link from "next/link"

export const newsData = [
  {
    id: "1",
    title: 'هكذا ردت سيلاف فواخرجي على قرار فصلها من "الفنانين السوريين"',
    category: "في مشاهير",
    date: "17/04/25",
    image: "/placeholder.svg?height=200&width=300&text=News 1",
  },
  {
    id: "2",
    title: "إحنا رايحين على فين.. علاء مبارك يهاجم محمد رمضان بعد إطلالته بأمريكا",
    category: "في مشاهير",
    date: "17/04/25",
    image: "/placeholder.svg?height=200&width=300&text=News 2",
  },
  {
    id: "3",
    title: 'شيرين بيري، عن خاتم ألماس بالزين: "الخواتم"- فيديو',
    category: "في مشاهير",
    date: "17/04/25",
    image: "/placeholder.svg?height=200&width=300&text=News 3",
  },
  {
    id: "4",
    title: 'حمزة نمرة يشوق جمهوره لـ"النومة السابعة"',
    category: "في مشاهير",
    date: "17/04/25",
    image: "/placeholder.svg?height=200&width=300&text=News 4",
  },
  {
    id: "5",
    title: "نجاة علياء صبحي وابنتها من حادث مروع - صور",
    category: "في مشاهير",
    date: "17/04/25",
    image: "/placeholder.svg?height=200&width=300&text=News 5",
  },
  {
    id: "6",
    title: 'محمد فضل شاكر: "والدي بريء وبواجه اتهامات جديدة"- فيديو',
    category: "في مشاهير",
    date: "17/04/25",
    image: "/placeholder.svg?height=200&width=300&text=News 6",
  },
  {
    id: "7",
    title: "أنتم البشر.. يُجاهدون في جحيمهم المحفوف بالموت",
    category: "Trending",
    date: "17/04/25",
    image: "/placeholder.svg?height=400&width=600&text=News 7",
  },
]
export default function NewsSection() {
  return (
    <section className="py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">أخبار منوعة</h2>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link href="#" className="text-white hover:text-pink-400 text-sm">
              شاهد على رؤيا
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 text-sm">
              في وشوشة
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 text-sm">
              دراما رؤيا
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 text-sm">
              Top 5
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 text-sm">
              مونديال
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 text-sm">
              Trending
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured News - Right Side */}
          <div className="space-y-6">
            {newsData.slice(0, 3).map((newsItem) => (
              <Link href={`/news/${newsItem.id}`} key={newsItem.id} className="flex flex-col space-y-2 group">
                <div className="flex items-center text-xs text-gray-400 mb-1">
                  <span className="ml-2">{newsItem.date}</span>
                  <span className="text-pink-500">{newsItem.category}</span>
                </div>
                <h3 className="text-lg font-medium group-hover:text-pink-500 transition-colors">{newsItem.title}</h3>
              </Link>
            ))}
          </div>

          {/* Featured News - Left Side with Image */}
          <div className="space-y-6">
            <Link href={`/news/7`} className="block group">
              <div className="relative h-64 rounded-md overflow-hidden mb-3">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Featured News"
                  alt="Featured News"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center text-xs text-gray-400 mb-1">
                <span className="ml-2">17/04/25</span>
                <span className="text-pink-500">Trending</span>
              </div>
              <h3 className="text-xl font-medium group-hover:text-pink-500 transition-colors">
                أنتم البشر.. يُجاهدون في جحيمهم المحفوف بالموت
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                الجوع وتواصل مأساة غزة وسط كارثة إنسانية، الفرنسي يصفه عقوبة من القصف، كما أن المخيمات من أجل إطعام
                الناس
              </p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {newsData.slice(3, 6).map((newsItem) => (
            <Link href={`/news/${newsItem.id}`} key={newsItem.id} className="block group">
              <div className="relative h-48 rounded-md overflow-hidden mb-3">
                <Image
                  src={newsItem.image || "/placeholder.svg"}
                  alt={newsItem.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center text-xs text-gray-400 mb-1">
                <span className="ml-2">{newsItem.date}</span>
                <span className="text-pink-500">{newsItem.category}</span>
              </div>
              <h3 className="text-lg font-medium group-hover:text-pink-500 transition-colors">{newsItem.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
