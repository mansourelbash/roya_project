import ContentGrid from "./content-grid"

const programsData = [
  {
    id: "1",
    title: "دنيا يا دنيا",
    image: "/placeholder.svg?height=160&width=280&text=Program 1",
    category: "منوعات",
  },
  {
    id: "2",
    title: "صباح الخير يا أردن",
    image: "/placeholder.svg?height=160&width=280&text=Program 2",
    category: "صباحي",
  },
  {
    id: "3",
    title: "كرفان",
    image: "/placeholder.svg?height=160&width=280&text=Program 3",
    category: "ترفيهي",
  },
  {
    id: "4",
    title: "نبض البلد",
    image: "/placeholder.svg?height=160&width=280&text=Program 4",
    category: "إخباري",
  },
  {
    id: "5",
    title: "رؤيا الإخبارية",
    image: "/placeholder.svg?height=160&width=280&text=Program 5",
    category: "إخباري",
  },
]

export default function LivePrograms() {
  return (
    <ContentGrid
      title="برامجنا المباشرة"
      items={programsData}
      showCategory={true}
      linkPrefix="/programs"
    />
  )
}
