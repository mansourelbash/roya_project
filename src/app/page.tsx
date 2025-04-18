"use client"
import HeroSlider from "@/components/hero-slider"
import Header from "@/components/header"
import LiveChannels from "@/components/live-channels"
import NewEpisodes from "@/components/new-episodes"
import LivePrograms from "@/components/live-programs"
import NewsSection from "@/components/news-section"
import SeriesGrid from "@/components/series-grid"
import SportsSection from "@/components/sports-section"
import MoviesSection from "@/components/movies-section"
import AdBanner from "@/components/ad-banner"
import PopularShows from "@/components/popular-shows"
import Footer from "@/components/footer"

// Sample hero slider data
// export const heroSlides = [
//   {
//     id: 1,
//     title: "دنيا يا دنيا",
//     subtitle: "برنامج المنوعات",
//     image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1357/Po4tBDzJKqXp4q4.webp",
//   },
//   {
//     id: 2,
//     title: "صباح الخير يا أردن",
//     subtitle: "برنامج صباحي",
//     image: "https://backend.roya-tv.com/imagechanger/Size01Q40R1656/images/programs/80/1oFm8KmkdQuXVkH.jpg",
//   },
//   {
//     id: 3,
//     title: "نبض البلد",
//     subtitle: "برنامج إخباري",
//     image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1344/sLmKbVdjdsj7e3r.webp",
//   },
//   {
//     id: 4,
//     title: "كرفان",
//     subtitle: "برنامج ترفيهي",
//     image: "https://backend.roya-tv.com/imagechanger/Size03Q40R11M/images/programs/1304/nO2vdi3BeDlpv3r.webp",
//   },
// ]

// Sample news data
// export const newsData = [
//   {
//     id: "1",
//     title: 'هكذا ردت سيلاف فواخرجي على قرار فصلها من "الفنانين السوريين"',
//     category: "في مشاهير",
//     date: "17/04/25",
//     image: "/placeholder.svg?height=200&width=300&text=News 1",
//   },
//   {
//     id: "2",
//     title: "إحنا رايحين على فين.. علاء مبارك يهاجم محمد رمضان بعد إطلالته بأمريكا",
//     category: "في مشاهير",
//     date: "17/04/25",
//     image: "/placeholder.svg?height=200&width=300&text=News 2",
//   },
//   {
//     id: "3",
//     title: 'شيرين بيري، عن خاتم ألماس بالزين: "الخواتم"- فيديو',
//     category: "في مشاهير",
//     date: "17/04/25",
//     image: "/placeholder.svg?height=200&width=300&text=News 3",
//   },
//   {
//     id: "4",
//     title: 'حمزة نمرة يشوق جمهوره لـ"النومة السابعة"',
//     category: "في مشاهير",
//     date: "17/04/25",
//     image: "/placeholder.svg?height=200&width=300&text=News 4",
//   },
//   {
//     id: "5",
//     title: "نجاة علياء صبحي وابنتها من حادث مروع - صور",
//     category: "في مشاهير",
//     date: "17/04/25",
//     image: "/placeholder.svg?height=200&width=300&text=News 5",
//   },
//   {
//     id: "6",
//     title: 'محمد فضل شاكر: "والدي بريء وبواجه اتهامات جديدة"- فيديو',
//     category: "في مشاهير",
//     date: "17/04/25",
//     image: "/placeholder.svg?height=200&width=300&text=News 6",
//   },
//   {
//     id: "7",
//     title: "أنتم البشر.. يُجاهدون في جحيمهم المحفوف بالموت",
//     category: "Trending",
//     date: "17/04/25",
//     image: "/placeholder.svg?height=400&width=600&text=News 7",
//   },
// ]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <Header />
      <HeroSlider />
      <div className="max-w-[1530px] mx-auto">
      <LiveChannels />
      <NewEpisodes />
      <LivePrograms />
      <AdBanner
        text="شاهد رؤيا بلس واستمتع بمشاهدة حصرية"
        image="/placeholder.svg?height=100&width=1200&text=Ad Banner"
      />
      <SeriesGrid title="مسلسلات رمضان" />
      
      <AdBanner
        text="استمتع بمشاهدة أفضل المسلسلات العربية"
        image="/placeholder.svg?height=100&width=1200&text=Ad Banner 2"
      />
      <MoviesSection title="أفلام مميزة" />
      <SportsSection />
      <PopularShows title="الأكثر مشاهدة" />
      <AdBanner text="حمّل تطبيق رؤيا الآن" image="/placeholder.svg?height=100&width=1200&text=Ad Banner 3" />
      <SeriesGrid title="مسلسلات تركية" />
      <SeriesGrid title="مسلسلات مصرية" />
      <NewsSection />
      </div>
      
      <Footer />
    </div>
  )
}
