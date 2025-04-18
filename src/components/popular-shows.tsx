import ContentGrid from "./content-grid"

interface PopularShowsProps {
  title: string
}

const generatePopularShowsData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `popular-${i + 1}`,
    title: `العرض الشهير ${i + 1}`,
    image: `/placeholder.svg?height=160&width=280&text=Popular ${i + 1}`,
  }))
}

export default function PopularShows({ title }: PopularShowsProps) {
  const showsData = generatePopularShowsData(10)

  return <ContentGrid title={title} items={showsData} columns={5} linkPrefix="/shows" />
}
