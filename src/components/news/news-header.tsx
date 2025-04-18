import Image from "next/image"
import Link from "next/link"

export default function NewsHeader() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=40&width=100&text=ROYA"
                alt="Roya Logo"
                width={100}
                height={40}
                className="mr-6"
              />
              <span className="sr-only">العودة للصفحة الرئيسية</span>
            </Link>
            <nav className="hidden md:flex space-x-4 space-x-reverse">
              <Link href="/" className="text-white hover:text-pink-400 px-2">
                الرئيسية
              </Link>
              <Link href="/news" className="text-white hover:text-pink-400 px-2">
                أخبار
              </Link>
              <Link href="/programs" className="text-white hover:text-pink-400 px-2">
                برامج
              </Link>
              <Link href="/series" className="text-white hover:text-pink-400 px-2">
                مسلسلات
              </Link>
              <Link href="/sports" className="text-white hover:text-pink-400 px-2">
                رياضة
              </Link>
              <Link href="/videos" className="text-white hover:text-pink-400 px-2">
                فيديو
              </Link>
              <Link href="/weather" className="text-white hover:text-pink-400 px-2">
                طقس
              </Link>
              <Link href="/trending" className="text-white hover:text-pink-400 px-2">
                ترندينج
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="bg-pink-600 text-white px-3 py-1 text-xs rounded">بث مباشر</button>
            <button className="flex items-center text-white hover:text-pink-400 text-sm">
              <span>تسجيل دخول</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* News Categories Navigation */}
      <div className="bg-black">
        <div className="container mx-auto py-2 px-4">
          <div className="flex items-center justify-between overflow-x-auto hide-scrollbar">
            <Link href="/news/local" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              أخبار محلية
            </Link>
            <Link href="/news/arab" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              أخبار عربية
            </Link>
            <Link href="/news/international" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              أخبار دولية
            </Link>
            <Link href="/news/economy" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              اقتصاد
            </Link>
            <Link href="/news/technology" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              تكنولوجيا
            </Link>
            <Link href="/news/sports" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              رياضة
            </Link>
            <Link href="/news/celebrities" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              مشاهير
            </Link>
            <Link href="/news/lifestyle" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              لايف ستايل
            </Link>
            <Link href="/news/health" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              صحة
            </Link>
            <Link href="/news/travel" className="text-white hover:text-pink-400 text-sm whitespace-nowrap px-2">
              سفر
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
