import ContentGrid from "./content-grid"

interface SeriesGridProps {
  title: string
}

const videos = [
    {
      id: 108803,
      title: "ولاد سلطان",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1832/JtbofnS4TuKpa6y.webp"
    },
    {
      id: 108804,
      title: "حكايا المرايا",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1834/SwwOMoCy3bcPD45.jpg"
    },
    {
      id: 108805,
      title: "أبناء القهر",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1697/ReHbkBEg5BA7KyH.webp"
    },
    {
      id: 108810,
      title: "نشمي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1685/jMoP27Gk2AmvrxH.webp"
    },
    {
      id: 108811,
      title: "Last Update",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1681/P1PFvJTTZnnDWn5.webp"
    },
    {
      id: 108812,
      title: "الموسم الثالث",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1680/ivc4Uvll8D7WiUN.webp"
    }
  ];




export default function AddNewItems({ title }: SeriesGridProps) {
  return <ContentGrid title={title} items={videos} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
