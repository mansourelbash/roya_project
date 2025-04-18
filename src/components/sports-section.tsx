import Image from "next/image"
import Link from "next/link"

const sportsTeams = [
  { id: "1", name: "تشيلسي", logo: "/placeholder.svg?height=60&width=60&text=Chelsea" },
  { id: "2", name: "ميلان", logo: "/placeholder.svg?height=60&width=60&text=Milan" },
  { id: "3", name: "بايرن ميونخ", logo: "/placeholder.svg?height=60&width=60&text=Bayern" },
  { id: "4", name: "ريال مدريد", logo: "/placeholder.svg?height=60&width=60&text=Real" },
  { id: "5", name: "مانشستر سيتي", logo: "/placeholder.svg?height=60&width=60&text=City" },
]

export default function SportsSection() {
  return (
    <section className="py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">الرياضة</h2>

        <div className="flex justify-between items-center mb-8">
          {sportsTeams.map((team) => (
            <Link href={`/sports/teams/${team.id}`} key={team.id} className="flex flex-col items-center group">
              <div className="relative w-16 h-16 mb-2">
                <Image src={team.logo || "/placeholder.svg"} alt={team.name} fill className="object-contain" />
              </div>
              <span className="text-sm text-center group-hover:text-pink-500">{team.name}</span>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Array.from({ length: 5 }, (_, i) => (
            <Link href={`/sports/${i + 1}`} key={i} className="block group">
              <div className="relative h-40 rounded-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=160&width=280&text=Sports ${i + 1}`}
                  alt={`Sports content ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white opacity-80"
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
                </div>
              </div>
              <h3 className="mt-2 text-sm font-medium group-hover:text-pink-500 transition-colors">
                {i % 2 === 0 ? "مباراة الأسبوع" : "أهداف الجولة"} {i + 1}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
