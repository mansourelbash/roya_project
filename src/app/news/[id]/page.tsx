import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon, ChevronLeft, Goal } from "lucide-react"
import RelatedNews from "@/components/news/related-news"
import NewsFooter from "@/components/news/news-footer"
import SocialShare from "@/components/news/social-share"
import AdBanner from "@/components/ad-banner"
import Header from "@/components/header"
// import { Metadata, ResolvingMetadata } from 'next'

interface NewsItem {
  id: string
  title: string
  category: string
  date: string
  image: string
  content: string
  author: string
  tags: string[]
}

interface RelatedNewsItem {
  id: string
  title: string
  category: string
  date: string
  image: string
}

// interface PageProps {
//   params: { id: string }
//   searchParams?: { [key: string]: string | string[] | undefined }
// }

const getNewsById = (id: string): NewsItem | undefined => {
  const allNews: NewsItem[] = [
    {
      id: "1",
      title: 'هكذا ردت سيلاف فواخرجي على قرار فصلها من "الفنانين السوريين"',
      category: "في مشاهير",
      date: "17/04/25",
      image: "https://backend.roya-tv.com/imagechanger/Size02Q40R169//images/articles/1744891965.png",
      content: "في أول تعليق لها على قرار فصلها من نقابة الفنانين السوريين، عبّرت الفنانة سلاف فواخرجي عن استغرابها مما حدث، مؤكدة أن القرار جاء مفاجئاً ودون سابق إنذار. وأضافت أنها ستقوم باتخاذ الخطوات القانونية المناسبة، مشددة على احترامها للنقابة ومكانتها رغم ما وصفته بـ\"الظلم\" الذي طالها.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "سوريا", "فن"],
    },
    {
      id: "2",
      title: "إحنا رايحين على فين.. علاء مبارك يهاجم محمد رمضان بعد إطلالته بأمريكا",
      category: "في مشاهير",
      date: "17/04/25",
      image: "https://backend.roya-tv.com/imagechanger/Size02Q40R169//images/articles/1744886311.png",
      content: "هاجم علاء مبارك، نجل الرئيس المصري الأسبق حسني مبارك، الفنان محمد رمضان بعد ظهوره الأخير في أحد العروض بأمريكا بإطلالة أثارت الجدل. وكتب مبارك في منشور عبر \"إكس\": \"إحنا رايحين على فين؟\"، في إشارة إلى ما وصفه بانحدار الذوق العام، مطالباً الفنانين بتحمل مسؤولياتهم تجاه صورة الفن المصري.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "مصر", "محمد رمضان"],
    },
    {
      id: "3",
      title: 'شيرين بيري، عن خاتم ألماس بالزين: "الخواتم"- فيديو',
      category: "في مشاهير",
      date: "17/04/25",
      image: "https://backend.roya-tv.com/imagechanger/Size02Q40R169//images/articles/1744896438.png",
      content: "أثارت المؤثرة شيرين بيري الجدل عبر مواقع التواصل الاجتماعي بعد ظهورها بخاتم ألماس فاخر خلال فيديو ظهرت فيه وهي تستعرض مجوهراتها. وقالت مازحة: \"الخواتم مش أي خواتم\"، ما دفع المتابعين للتفاعل مع الفيديو بين معجبين ومشككين في قيمة الخاتم الحقيقية.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "فيديو", "مجوهرات"],
    },
    {
      id: "4",
      title: 'حمزة نمرة يشوق جمهوره لـ"النومة السابعة"',
      category: "في مشاهير",
      date: "17/04/25",
      image: "https://backend.roya-tv.com/imagechanger/Size02Q40R169//images/articles/1744884530.png",
      content: "شارك الفنان حمزة نمرة جمهوره عبر حساباته على مواقع التواصل الاجتماعي مقطعاً موسيقياً من ألبومه القادم \"النومة السابعة\"، معلقاً: \"قريباً\". وتفاعل الجمهور بشكل واسع مع المقطع، وسط حالة من الترقب لإطلاق الأغنية الكاملة، والتي يقال إنها تحمل طابعاً موسيقياً مختلفاً عن أعماله السابقة.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "موسيقى", "مصر"],
    },
    {
      id: "5",
      title: "نجاة علياء صبحي وابنتها من حادث مروع - صور",
      category: "في مشاهير",
      date: "17/04/25",
      image: "https://backend.roya-tv.com/imagechanger/Size02Q40R169//images/articles/1744881572.png",
      content: "تعرضت الفنانة علياء صبحي لحادث سير مروع أثناء تواجدها برفقة ابنتها على أحد الطرق السريعة. وأكدت صبحي عبر حسابها على إنستغرام أنها وابنتها بخير، شاكرة كل من تواصل معها للاطمئنان. ونشرت صوراً من موقع الحادث تُظهر الأضرار التي لحقت بالسيارة.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "حوادث", "صور"],
    },
    {
      id: "6",
      title: 'محمد فضل شاكر: "والدي بريء وبواجه اتهامات جديدة"- فيديو',
      category: "في مشاهير",
      date: "17/04/25",
      image: "https://backend.roya-tv.com/imagechanger/Size02Q40R169//images/articles/1744894090.png",
      content: "في ظهور إعلامي جديد، دافع محمد فضل شاكر عن والده الفنان فضل شاكر، مؤكداً أن الأخير بريء من الاتهامات الموجهة له، مشيراً إلى أن هناك حملة ممنهجة لتشويه صورته. ونشر شاكر مقطع فيديو عبر صفحته الشخصية تحدث فيه عن تفاصيل ما وصفه بـ\"الظلم الإعلامي\" الذي يطال والده.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "لبنان", "فيديو"],
    },
    {
      id: "7",
      title: '"سنو وايت" سواد في التقييم وممثلة "إسرائيلية" تضع ديزني بين فكي الفشل"',
      category: "في مشاهير",
      date: "17/04/25",
      image: "https://backend.roya-tv.com/imagechanger/Size02Q40R169//images/articles/1743150119.png",
      content: "واجه فيلم \"سنو وايت\" الجديد من إنتاج ديزني موجة من الانتقادات بسبب اختياراته الجريئة في الطاقم التمثيلي والتغييرات الكبيرة في القصة الكلاسيكية. وزاد الجدل بعد الكشف عن مشاركة ممثلة \"إسرائيلية\" في دور البطولة، ما أثار غضب العديد من المتابعين ودفعهم لمقاطعة الفيلم، في وقت تشير فيه التقييمات الأولية إلى تراجع كبير في شعبية العمل.",
      author: "رؤيا الإخبارية",
      tags: ["مشاهير", "مصر", "سينما"],
    },
  ];

  return allNews.find((news) => news.id === id);
}

const getRelatedNews = (currentId: string): RelatedNewsItem[] => {
  const allNews: RelatedNewsItem[] = [
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
  ];

  return allNews.filter((news) => news.id !== currentId);
}

// export async function generateMetadata(
//   { params }: { params: { id: string } },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const news = getNewsById(params.id)

//   if (!news) {
//     return {
//       title: "الخبر غير موجود | رؤيا",
//       description: "هذا الخبر غير موجود أو قد تم حذفه.",
//       icons: {
//         icon: "/favicon.ico",
//       },
//     }
//   }

//   return {
//     title: `${news.title} | رؤيا`,
//     description: news.content.slice(0, 150) + "...",
//     icons: {
//       icon: "/favicon.ico",
//     },
//     openGraph: {
//       title: `${news.title} | رؤيا`,
//       description: news.content.slice(0, 150) + "...",
//       images: [news.image],
//     },
//   }
// }



export default async function NewsPage({ params }: { params: Promise<{ id: string }> })  {
  const { id } = await params;

  const news = getNewsById(id)
  const relatedNews = getRelatedNews(id)

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الخبر غير موجود</h1>
          {/* <Link
  href="/"
  className="inline-flex items-center gap-2 text-base text-gray-300 hover:text-pink-500 transition-colors"
>
  <ChevronLeft className="h-5 w-5" />
  <span className="underline underline-offset-4">العودة للصفحة الرئيسية</span>
</Link> */}

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <Header />

      <AdBanner
        text="بنزينك شو ما يكون - حط لي وإزالة"
        image="https://tpc.googlesyndication.com/simgad/5344054513506351836"
      />

      <main className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-3/4">
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <Link
                  href="/"
                  className="flex items-center text-black-400 hover:text-pink-500 text-md bg-gray-200 p-1 rounded-md"
                >
                  <ArrowUpRightIcon className="h-4 w-4 ml-1 text-black" />
                  <span className="text-black">العودة للصفحة الرئيسية</span>
                </Link>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-sm">
                  <Link
                    href="/news"
                    className="text-pink-500 hover:text-pink-400"
                  >
                    {news.category}
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
                src={news.image}
                alt={news.title}
                fill
                className="object-cover rounded-lg"
                priority
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

            <div className="my-8">
              <AdBanner
                text="بنزينك شو ما يكون - حط لي وإزالة"
                image="/placeholder.svg?height=100&width=800&text=Ad Banner"
              />
            </div>

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
                        src={item.image}
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

          <div className="w-full md:w-1/4">
            <RelatedNews relatedNews={relatedNews} />

            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=600&width=300&text=Ad Banner"
                alt="Advertisement"
                width={300}
                height={600}
                className="rounded-md"
              />
            </div>

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
  );
}