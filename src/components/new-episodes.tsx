import ContentGrid from "./content-grid"

interface Episode {
  id?: string;
  title?: string;
  image?: string;
  href?: string;
  ref?: string;
}

interface NewEpisodesProps {
  data: Episode[];
  title: string;
}

export default function NewEpisodes({ data, title }: NewEpisodesProps) {
  return (
    <ContentGrid
      title={title}
      items={data}
      showEpisodeNumber={true}
      linkPrefix="/episodes"
    />
  )
}
