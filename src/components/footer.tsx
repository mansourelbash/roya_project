import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e2329] text-right" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Top scroll button */}
        <div className="flex justify-center -mt-12 mb-8">
          <button
            className="bg-white rounded-full p-2 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Right column - Navigation and social links */}
          <div className="col-span-1 grid grid-cols-1 gap-6">
            <div className="flex justify-between">
              <div className="text-center">
                <Link href="#" className="inline-block">
                  <Image
                    src="https://roya.tv/images/roya-footer.svg"
                    alt="Roya Logo"
                    width={80}
                    height={80}
                    className="rounded-lg mb-2"
                  />
                </Link>
                <Link href="/live-stream">
                  <div
                    title="البث المباشر"
                    aria-label="البث المباشر"
                    className="pe-4 flex gap-2 items-center bg-primary hover:bg-primary/70 p-2 transition-all rounded cursor-pointer"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19.921 19.389"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#FFF"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    >
                      <g>
                        <rect
                          width="19.921"
                          height="13.5"
                          rx="3"
                          y="5.5"
                          x="0"
                        />
                        <rect
                          x="1"
                          y="6.5"
                          width="17.921"
                          height="11.5"
                          rx="2"
                          fill="none"
                        />
                      </g>
                      <path
                        d="m9.96,5.479l-3.031,-4.479"
                        strokeLinecap="round"
                      />
                      <path
                        d="m10.394,5.479l2.165,-2.946"
                        strokeLinecap="round"
                      />
                      <ellipse
                        cx="10.225"
                        cy="11.8"
                        rx="1.739"
                        ry="1.8"
                        fill="#FFF"
                      />
                    </svg>
                    <span className="text-sm">البث المباشر</span>
                  </div>
                </Link>{" "}
              </div>
              <div>
                <div className="flex flex-col items-end">
                  <Link
                    href="#"
                    className="text-white hover:text-pink-500 mb-2"
                  >
                    برامج
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-pink-500 mb-2"
                  >
                    أخبار
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-pink-500 mb-2"
                  >
                    أعلن معنا
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-pink-500 mb-2"
                  >
                    عن رؤيا
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-pink-500 mb-2"
                  >
                    مقدمو البرامج
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-pink-500 mb-2"
                  >
                    اتصل بنا
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-pink-500 mb-2"
                  >
                    خريطة الموقع
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 text-right">
                تابعنا عبر وسائل التواصل الاجتماعي
              </h3>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <Link href="#" className="text-white hover:text-pink-500">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-white hover:text-pink-500">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-white hover:text-pink-500">
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-white hover:text-pink-500">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Link href="#" className="text-white hover:text-pink-500">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-pink-500">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.78 18.65L10.06 14.42L17.74 7.5C18.08 7.19 17.67 7.04 17.22 7.31L7.74 13.3L3.64 12C2.76 11.75 2.75 11.14 3.84 10.7L19.81 4.54C20.54 4.21 21.24 4.72 20.96 5.84L18.24 18.65C18.05 19.56 17.5 19.78 16.74 19.36L12.6 16.3L10.61 18.23C10.38 18.46 10.19 18.65 9.78 18.65Z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-pink-500">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 8.65C16.5 8.9 16.33 9.15 16.1 9.37C15.88 9.59 15.63 9.68 15.38 9.68C15.13 9.68 14.88 9.59 14.66 9.37C14.43 9.15 14.32 8.9 14.32 8.65C14.32 8.4 14.43 8.15 14.66 7.93C14.88 7.71 15.13 7.6 15.38 7.6C15.63 7.6 15.88 7.71 16.1 7.93C16.33 8.15 16.5 8.4 16.5 8.65ZM14.75 10.15V15.38C14.75 15.63 14.62 15.75 14.38 15.75H13.38C13.13 15.75 13 15.63 13 15.38V10.15C13 9.9 13.13 9.78 13.38 9.78H14.38C14.62 9.78 14.75 9.9 14.75 10.15ZM20.25 15.38C20.25 16.5 19.5 17 18.38 17H8.88C7.75 17 7 16.5 7 15.38V11.88C7 11.63 7.13 11.5 7.38 11.5H8.38C8.63 11.5 8.75 11.63 8.75 11.88V15C8.75 15.25 8.88 15.38 9.13 15.38H18.13C18.38 15.38 18.5 15.25 18.5 15V11.88C18.5 11.63 18.63 11.5 18.88 11.5H19.88C20.13 11.5 20.25 11.63 20.25 11.88V15.38Z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-pink-500">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM12 20C9.33 20 7 18.67 7 16C7 13.33 9.33 12 12 12C14.67 12 17 13.33 17 16C17 18.67 14.67 20 12 20Z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Link href="#" className="flex justify-center">
                <Image
                  src="https://roya.tv/_next/image?url=%2Fimages%2Froya-news.png&w=48&q=75"
                  alt="Roya News"
                  width={120}
                  height={50}
                />
              </Link>
              <Link href="#" className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=50&width=120&text=دنيا+يا+دنيا"
                  alt="Dunya Ya Dunya"
                  width={120}
                  height={50}
                />
              </Link>
              <Link href="#" className="flex justify-center">
                <Image
                  src="https://roya.tv/_next/image?url=%2Fimages%2Froyatalents-logo.png&w=48&q=75"
                  alt="Roya Talents"
                  width={120}
                  height={50}
                />
              </Link>
              <Link href="#" className="flex justify-center">
                <Image
                  src="https://roya.tv/_next/image?url=%2Fimages%2Ftheshow-logo.png&w=48&q=75"
                  alt="The Show"
                  width={120}
                  height={50}
                />
              </Link>
            </div>
          </div>
          {/* Middle column - App downloads and channel info */}
          <div className="col-span-1">
            <div className="flex justify-end mb-4">
              <div className="flex items-center gap-2">
                <span className="text-white">ترددات قناة رؤيا نايل سات</span>
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-[#2c3138] rounded-md px-3 py-1 inline-block mb-4">
              <span className="text-white">HD 11957 H</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-end mb-4">
                <span className="text-white ml-2">
                  حمّل تطبيق رؤيا وتحكم بمشاهدة ما تريد أينما تريد على جهاز خدمة
                  رؤيا
                </span>
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 18V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 15L12 18L9 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
                >
                  <span className="ml-2">App Store</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20&text=🍎"
                    alt="App Store"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
                >
                  <span className="ml-2">Play Store</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20&text=🎮"
                    alt="Play Store"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
                >
                  <span className="ml-2">Roku</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20&text=📺"
                    alt="Roku"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
                >
                  <span className="ml-2">App Gallery</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20&text=📱"
                    alt="App Gallery"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-end mb-4">
                <span className="text-white">
                  لمشاهدينا في الإمارات العربية المتحدة، تجدونا عبر القنوات
                  التالية
                </span>
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12H22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex gap-2">
                <div className="bg-white rounded-md px-4 py-2 flex items-center">
                  <span className="text-black ml-2">قناة رقم 166</span>
                  <Image
                    src="/placeholder.svg?height=24&width=24&text=du"
                    alt="du"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="bg-white rounded-md px-4 py-2 flex items-center">
                  <span className="text-black ml-2">قناة رقم 691</span>
                  <Image
                    src="/placeholder.svg?height=24&width=24&text=eLife"
                    alt="eLife"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left column - Logo and subscription */}
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex-1">
              <div className="bg-slate-950 w-full flex flex-col gap-4 self-stretch h-full items-center justify-center p-6">
                <Image
                  alt="Roya Plus"
                  src="https://roya.tv/images/royaplus-box.svg"
                  width={352}
                  height={40}
                  className="max-w-full"
                  style={{ color: "transparent" }}
                  priority
                />
                <p className="text-white text-center">
                  شاهد العروض و المسلسلات و الأفلام في اي وقت وفي اي مكان بدون
                  الفواصل الاعلانية
                </p>
                <a title="اشتراك" href="/subscriptions/plans">
                  <Image
                    alt="اشتراك في Roya Plus"
                    src="https://roya.tv/images/tx_roya_plus.svg"
                    width={394}
                    height={60}
                    className="max-w-full"
                    style={{ color: "transparent" }}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} جميع الحقوق محفوظة لرؤيا للإعلام المرئي
            والمسموع والإلكتروني والخدمات الإعلامية
          </p>
        </div>
      </div>
    </footer>
  );
}
