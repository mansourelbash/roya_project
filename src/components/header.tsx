import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tv, Search, CircleArrowRight } from "lucide-react"
export default function Header() {
  return (
    <header className="bg-gray-800 py-6 px-4 sticky top-0 z-50">
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
         <div className="flex items-center space-x-3 space-x-reverse gap-2">
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="bg-white text-black text-xs font-bold rounded-sm h-7 px-3">
            FREE
          </Button>
          <Button variant="ghost" className="hidden lg:flex gap-2 items-center bg-black p-2 transition-all rounded">
            <CircleArrowRight className="h-5 w-5" />
            <span className="text-sm">تسجيل دخول</span>
          </Button>
          <Button className="hidden lg:flex gap-2 items-center bg-[#8d0164] hover:bg-primary/70 p-2 transition-all rounded">
            <Tv className="h-5 w-5" />
            <span className="text-sm">البث المباشر</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
