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
      id: 108806,
      title: "طايع",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1334/v9tZcjBj1wQR6yn.webp"
    },
    {
      id: 108807,
      title: "نبض البلد",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/59/OSmndPcjFL7ywDS.webp"
    },
    {
      id: 108808,
      title: "دنيا يا دنيا",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/56/YLz2eNNpo47eVUJ.webp"
    },
    {
      id: 108809,
      title: "مطبخ رؤيا",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/171/duGRTDcnzcuf6lr.webp"
    }
  ];
  

export default function LiveNow({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={videos} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
