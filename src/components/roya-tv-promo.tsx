import Image from "next/image";
import Link from "next/link";
import { AppStoreIcon, PlayStoreIcon } from "./icons";

export default function RoyaTVPromo() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/slider.png"
          alt="Background"
          style={{ objectPosition: "top" }}
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-5 bg-purple-920/80"></div> */}
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row md:justify-between md:px-6 lg:px-8">
        <div className="md:w-1/2 lg:w-2/5">
          <div className="relative mx-auto w-64 md:w-80 lg:w-96">
            <Image
              src="/mock-mobile.webp"
              alt="Roya TV App"
              width={300}
              height={600}
              className="relative z-10"
            />
          </div>
        </div>
        <div className="mb-10 md:mb-0 md:w-1/2">
          <div className="max-w-xs flex flex-col items-center md:items-end">
            <h4
              className="text-3xl leading-relaxed text-center md:text-right text-white"
              style={{ direction: "rtl" }}
            >
              خلي مشاهدتك مختلفة وحمل تطبيق Roya TV
            </h4>
            <div className="flex gap-4 mt-6">
  <Link
    href="https://apps.apple.com/jo/app/roya/id683520774"
    target="_blank"
    title="Download Roya TV from App Store"
    className="flex items-center gap-2 bg-white text-black rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors min-w-[180px]"
  >
    <AppStoreIcon className="w-6 h-6" />
    <div className="flex flex-col text-left">
      <span className="text-xs leading-tight">Download on the</span>
      <span className="font-bold leading-tight">App Store</span>
    </div>
  </Link>

  <Link
    href="https://play.google.com/store/apps/details?id=tv.roya.app&hl=ar&gl=US"
    target="_blank"
    title="Download Roya TV from Google Play"
    className="flex items-center gap-2 bg-white text-black rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors min-w-[180px]"
  >
    <PlayStoreIcon className="w-6 h-6" />
    <div className="flex flex-col text-left">
      <span className="text-xs leading-tight">Android App on</span>
      <span className="font-bold leading-tight">Play Store</span>
    </div>
  </Link>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
