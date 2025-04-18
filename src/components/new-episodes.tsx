import ContentGrid from "./content-grid"

const episodesData = [
  {
    id: "1",
    title: "دنيا يا دنيا - الحلقة 10",
    image: "/placeholder.svg?height=160&width=280&text=Episode 1",
    episodeNumber: "الحلقة (10)",
  },
  {
    id: "2",
    title: "صباح الخير يا أردن - الحلقة 15",
    image: "/placeholder.svg?height=160&width=280&text=Episode 2",
    episodeNumber: "الحلقة (15)",
  },
  {
    id: "3",
    title: "كرفان - الحلقة 8",
    image: "/placeholder.svg?height=160&width=280&text=Episode 3",
    episodeNumber: "الحلقة (8)",
  },
  {
    id: "4",
    title: "نبض البلد - الحلقة 22",
    image: "/placeholder.svg?height=160&width=280&text=Episode 4",
    episodeNumber: "الحلقة (22)",
  },
  {
    id: "5",
    title: "رؤيا الإخبارية - الحلقة 5",
    image: "/placeholder.svg?height=160&width=280&text=Episode 5",
    episodeNumber: "الحلقة (5)",
  },
]

export default function NewEpisodes() {
  return (
    <ContentGrid
      title="حلقات جديدة"
      items={episodesData}
      showEpisodeNumber={true}
      linkPrefix="/episodes"
    />
  )
}
