import ContentGrid from "./content-grid"

interface SeriesGridProps {
  title: string
}

// Generate sample series data
const generateSeriesData = (count: number, prefix: string) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `مسلسل ${prefix} ${i + 1}`,
    image: `/placeholder.svg?height=160&width=280&text=${prefix} ${i + 1}`,
    episodeNumber: `الحلقة (${Math.floor(Math.random() * 30) + 1})`,
  }))
}

export default function SeriesGrid({ title }: SeriesGridProps) {
  // Generate different data based on the title to simulate different series categories
  const seriesData = generateSeriesData(
    10,
    title.includes("رمضان") ? "رمضان" : title.includes("تركية") ? "تركي" : "مصري",
  )

  return <ContentGrid title={title} items={seriesData} showEpisodeNumber={true} linkPrefix="/series" />
}
