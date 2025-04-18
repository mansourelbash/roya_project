import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://roya.tv/images/logo-svg.svg"
            alt="Roya Logo"
            width={40}
            height={40}
            className=""
          />
          <nav className="hidden md:flex ml-6 space-x-4 space-x-reverse">
          <Link
    href="#"
    className="text-white hover:text-[#8d0164] pb-[6px] block border-b-2 border-[#8d0164]"
  >
    الرئيسية
  </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              مسلسلات
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              رياضة
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              برامج
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              أخبار
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              فيديو
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              طقس
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              عربية
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              تقديم البرامج
            </Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">
              البرامج
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4 space-x-reverse">
          <button className="bg-white text-black px-3 py-1 text-xs rounded">بث</button>
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
          <button className="flex items-center text-white hover:text-pink-400 text-sm">
            <span>شاهد الآن</span>
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
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
