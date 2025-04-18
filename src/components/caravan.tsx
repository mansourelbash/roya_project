import ContentGrid from "./content-grid"

const programItems = [
    {
      id: "1598",
      title: "بالفلسطيني",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1597/soT7Ie1RNzUpwSk.webp"
    },
    {
      id: "1595",
      title: "الموسم الثالث",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1595/7aVggewN8YhtNHi.webp"
    },
    {
      id: "1599",
      title: "محرك بحث",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1598/9dhuyWvh2eWqIkx.webp"
    },
    {
      id: "1594",
      title: "الموسم الثالث",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1593/BzChZu0oSkVJCFJ.webp"
    },
    {
      id: "1600",
      title: "صوت السرداب",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1599/B2clQiFzni6EzSZ.webp"
    },
    {
      id: "1596",
      title: "الموسم الثاني",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1595/0EEDWaB5addYwTX.webp"
    },
    {
      id: "1601",
      title: "عمرك عرفت",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1600/oc3QTcfqjzNJOxi.webp"
    },
    {
      id: "1597",
      title: "من الأردن الموسم الثاني",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1597/GdtVF7M8qRUxI52.webp"
    },
    {
      id: "1531",
      title: "Z - Trips",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1530/69fQFPaJ8wLEOHX.webp"
    },
    {
      id: "1537",
      title: "الأصوات الشعبية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1537/Da6474bqmrOdZ5Y.webp"
    }
  ];
  

interface SeriesGridProps {
  title: string
}


export default function Caravan({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programItems} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
