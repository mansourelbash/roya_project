import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import NewsHeader from "@/components/news/news-header"
import RelatedNews from "@/components/news/related-news"
import NewsFooter from "@/components/news/news-footer"
import SocialShare from "@/components/news/social-share"
import AdBanner from "@/components/ad-banner"

// This would normally come from an API or database
const getNewsById = (id: string) => {
  const allNews = [
    {
      id: "1",
      title: 'هكذا ردت سيلاف فواخرجي على قرار فصلها من "الفنانين السوريين"',
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=400&width=600&text=News 1",
      content:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "سوريا", "فن"],
    },
    {
      id: "2",
      title: "إحنا رايحين على فين.. علاء مبارك يهاجم محمد رمضان بعد إطلالته بأمريكا",
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=400&width=600&text=News 2",
      content:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "مصر", "محمد رمضان"],
    },
    {
      id: "3",
      title: 'شيرين بيري، عن خاتم ألماس بالزين: "الخواتم"- فيديو',
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=400&width=600&text=News 3",
      content:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "فيديو", "مجوهرات"],
    },
    {
      id: "4",
      title: 'حمزة نمرة يشوق جمهوره لـ"النومة السابعة"',
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=400&width=600&text=News 4",
      content:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "موسيقى", "مصر"],
    },
    {
      id: "5",
      title: "نجاة علياء صبحي وابنتها من حادث مروع - صور",
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=400&width=600&text=News 5",
      content:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "حوادث", "صور"],
    },
    {
      id: "6",
      title: 'محمد فضل شاكر: "والدي بريء وبواجه اتهامات جديدة"- فيديو',
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=400&width=600&text=News 6",
      content:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "لبنان", "فيديو"],
    },
    {
      id: "7",
      title: "شيرين رضا: من نجمة إعلانات إلى نجمة سينما",
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=400&width=600&text=News 7",
      content:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "مصر", "سينما"],
    },
  ]

  return allNews.find((news) => news.id === id)
}

const getRelatedNews = (currentId: string) => {
  const allNews = [
    {
      id: "1",
      title: 'هكذا ردت سيلاف فواخرجي على قرار فصلها من "الفنانين السوريين"',
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 1",
    },
    {
      id: "2",
      title: "إحنا رايحين على فين.. علاء مبارك يهاجم محمد رمضان بعد إطلالته بأمريكا",
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 2",
    },
    {
      id: "3",
      title: 'شيرين بيري، عن خاتم ألماس بالزين: "الخواتم"- فيديو',
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 3",
    },
    {
      id: "4",
      title: 'حمزة نمرة يشوق جمهوره لـ"النومة السابعة"',
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 4",
    },
    {
      id: "5",
      title: "نجاة علياء صبحي وابنتها من حادث مروع - صور",
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 5",
    },
    {
      id: "6",
      title: 'محمد فضل شاكر: "والدي بريء وبواجه اتهامات جديدة"- فيديو',
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 6",
    },
    {
      id: "7",
      title: "شيرين رضا: من نجمة إعلانات إلى نجمة سينما",
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 7",
    },
    {
      id: "8",
      title: "أنتم البشر.. يُجاهدون في جحيمهم المحفوف بالموت",
      category: "Trending",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 8",
    },
    {
      id: "9",
      title: "كاظم الساهر يحيي حفلاً في الأردن الشهر المقبل",
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 9",
    },
    {
      id: "10",
      title: "نانسي عجرم تطلق أغنيتها الجديدة 'حبيبي'",
      category: "في مشاهير",
      date: "17/04/25",
      image: "/placeholder.svg?height=100&width=150&text=Related 10",
    },
  ]

  return allNews.filter((news) => news.id !== currentId)
}

export default async function NewsPage({ params }: { params: Promise<{ id: string }> })  {


  const { id } = await params;
  const news = getNewsById(id)
  const relatedNews = getRelatedNews(id)

  if (!news) {
    return (
      <div
        className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
        dir="rtl"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الخبر غير موجود</h1>
          <Link
            href="/"
            className="text-pink-500 hover:text-pink-400 flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4 ml-1" />
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <NewsHeader />

      {/* Ad Banner */}
      <AdBanner
        text="بنزينك شو ما يكون - حط لي وإزالة"
        image="/placeholder.svg?height=100&width=1200&text=Ad Banner"
      />

      <main className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <Link
                  href="/"
                  className="flex items-center text-gray-400 hover:text-pink-500 text-sm"
                >
                  <ChevronLeft className="h-4 w-4 ml-1" />
                  <span>العودة للصفحة الرئيسية</span>
                </Link>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-sm">
                  <Link
                    href="/news"
                    className="text-pink-500 hover:text-pink-400"
                  >
                    في مشاهير
                  </Link>
                  <span className="mx-2 text-gray-500">|</span>
                  <span className="text-gray-400">{news.date}</span>
                </div>
                <div className="flex items-center">
                  <Link
                    href="/top10"
                    className="text-gray-400 hover:text-pink-400 text-sm flex items-center"
                  >
                    <span>Top 10</span>
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-6">{news.title}</h1>

              <div className="flex items-center text-sm text-gray-400 mb-4">
                <span>{news.author}</span>
                <span className="mx-2">|</span>
                <span>{news.date}</span>
              </div>
            </div>

            <div className="relative h-[400px] w-full mb-8">
              <Image
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <SocialShare />

            <div className="space-y-4 text-lg leading-relaxed my-6">
              <p>{news.content}</p>
              <p>{news.content}</p>
              <p>{news.content}</p>
            </div>

            <div className="flex flex-wrap gap-2 my-6">
              {news.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/tags/${tag}`}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            <SocialShare />

            {/* Ad Banner */}
            <div className="my-8">
              <AdBanner
                text="بنزينك شو ما يكون - حط لي وإزالة"
                image="/placeholder.svg?height=100&width=800&text=Ad Banner"
              />
            </div>

            {/* More News Section */}
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6">أخبار أكثر قراءة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedNews.slice(0, 4).map((item) => (
                  <Link
                    href={`/news/${item.id}`}
                    key={item.id}
                    className="flex gap-4 group"
                  >
                    <div className="relative h-24 w-32 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-pink-500 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-400 mt-2">
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <RelatedNews relatedNews={relatedNews} />

            {/* Ad Banner Sidebar */}
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=600&width=300&text=Ad Banner"
                alt="Advertisement"
                width={300}
                height={600}
                className="rounded-md"
              />
            </div>

            {/* Instagram Widget */}
            <div className="bg-gray-800 rounded-md p-4 mb-8">
              <h3 className="text-lg font-bold mb-4">
                تابعنا على Instagram
              </h3>
              <div className="relative h-[300px] w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Instagram Feed"
                  alt="Instagram Feed"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex justify-center mt-4">
                <Link href="#" className="text-pink-500 hover:text-pink-400">
                  @royatv
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <NewsFooter />
    </div>
  )
}
