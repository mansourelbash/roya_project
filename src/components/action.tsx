import ContentGrid from "./content-grid"

const programs = [
    {
      id: 1514,
      title: "نقطة انتهى",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1514/7ZbyyV11bqpGx7y.jpg"
    },
    {
      id: 1067,
      title: "الهيبة الرد",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1067/0TJ5OXElrUaVEHV.jpg"
    },
    {
      id: 223,
      title: "القيصر",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/223/H4PH4ZBjpmT9TOA.jpg"
    },
    {
      id: 1297,
      title: "ظل",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1296/xTme6NMySHVWjMg.webp"
    },
    {
      id: 1284,
      title: "القصة الأولى",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1120/0FjwMtk9Qtsyk88.jpg",
    },
    {
      id: 1285,
      title: "القصة الثانية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/717/6r8wRS6EVaytqAN.jpg",}
  ];
  

interface SeriesGridProps {
  title: string
}


export default function Action({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
