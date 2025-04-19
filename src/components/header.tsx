'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tv, Search, CircleArrowRight, Menu, X } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 py-4 px-4 sticky top-0 z-50" dir="rtl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="https://roya.tv/images/logo-svg.svg"
            alt="Roya Logo"
            width={40}
            height={40}
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex ml-6 space-x-4 space-x-reverse">
            <Link href="#" className="text-white hover:text-[#8d0164] pb-[6px] border-b-2 border-[#8d0164]">الرئيسية</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">مسلسلات</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">رياضة</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">برامج</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">أخبار</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">فيديو</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">طقس</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">عربية</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">تقديم البرامج</Link>
            <Link href="#" className="text-white hover:text-pink-400 px-2">البرامج</Link>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="bg-white text-black text-xs font-bold rounded-sm h-7 px-3">
            FREE
          </Button>
          <Button variant="ghost" className="hidden lg:flex gap-2 items-center bg-black p-2 rounded">
            <CircleArrowRight className="h-5 w-5" />
            <span className="text-sm">تسجيل دخول</span>
          </Button>
          <Button className="hidden lg:flex gap-2 items-center bg-[#8d0164] hover:bg-primary/70 p-2 rounded">
            <Tv className="h-5 w-5" />
            <span className="text-sm">البث المباشر</span>
          </Button>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden bg-gray-900 text-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${
    menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
  }`}
>
  <div className={`space-y-4 mt-2 ${menuOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300 `}>
    <Link href="#" className="block hover:text-pink-400">الرئيسية</Link>
    <Link href="#" className="block hover:text-pink-400">مسلسلات</Link>
    <Link href="#" className="block hover:text-pink-400">رياضة</Link>
    <Link href="#" className="block hover:text-pink-400">برامج</Link>
    <Link href="#" className="block hover:text-pink-400">أخبار</Link>
    <Link href="#" className="block hover:text-pink-400">فيديو</Link>
    <Link href="#" className="block hover:text-pink-400">طقس</Link>
    <Link href="#" className="block hover:text-pink-400">عربية</Link>
    <Link href="#" className="block hover:text-pink-400">تقديم البرامج</Link>
    <Link href="#" className="block hover:text-pink-400">البرامج</Link>
  </div>
</div>
    </header>
  )
}
