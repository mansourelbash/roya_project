import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function NewsFooter() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Image
              src="/placeholder.svg?height=60&width=200&text=ROYA TV PLUS"
              alt="Roya TV Plus"
              width={200}
              height={60}
              className="mb-4"
            />
            <div className="text-gray-400 text-sm">
              <p>تردد قناة رؤيا الآن بات HD 11957 H</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-white mb-4">حمّل تطبيق رؤيا وتحكم بمشاهدة ما تريد أينما تريد على جهاز سفر رؤيا</p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="#"
                className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="App Store"
                  width={20}
                  height={20}
                  className="ml-2"
                />
                App Store
              </Link>
              <Link
                href="#"
                className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Play Store"
                  width={20}
                  height={20}
                  className="ml-2"
                />
                Play Store
              </Link>
              <Link
                href="#"
                className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              >
                <Image src="/placeholder.svg?height=20&width=20" alt="Roku" width={20} height={20} className="ml-2" />
                Roku
              </Link>
              <Link
                href="#"
                className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="App Gallery"
                  width={20}
                  height={20}
                  className="ml-2"
                />
                App Gallery
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">برامج</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-pink-500">
                  أعلن معنا
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-pink-500">
                  عن رؤيا
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-pink-500">
                  مقدمو البرامج
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-pink-500">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">أخبار</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-pink-500">
                  محلية
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-pink-500">
                  عربية
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-pink-500">
                  دولية
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-pink-500">
                  اقتصاد
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-gray-400 hover:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/placeholder.svg?height=100&width=100&text=ROYA"
              alt="Roya Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لرؤيا للإعلام المرئي</p>
          <div className="flex justify-center mt-2 space-x-4 space-x-reverse">
            <Link href="/" className="hover:text-pink-500 flex items-center justify-center">
              <ChevronLeft className="h-4 w-4 ml-1" />
              <span>العودة للصفحة الرئيسية</span>
            </Link>
            <Link href="#" className="hover:text-pink-500">
              الشروط والأحكام
            </Link>
            <Link href="#" className="hover:text-pink-500">
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
