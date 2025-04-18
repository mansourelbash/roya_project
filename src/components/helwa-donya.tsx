import ContentGrid from "./content-grid"

const programData = [
    {
      id: 105,
      title: "مشوار الأردن",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/105/toMy1dpM7yNgW1b.webp"
    },
    {
      id: 1342,
      title: "مشوار العالم",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1341/6hck99I31kR81p2.webp"
    },
    {
      id: 104,
      title: "مشوار  فلسطين",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/104/r74nRKPQ4Tp4Me4.webp"
    },
    {
      id: 226,
      title: "تقارير حلوة يا دنيا",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/226/q6bsNXQgYVz0Q30.webp"
    },
    {
      id: 106,
      title: "الاستضافات",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/106/ykqKyBTviaYsBvn.webp"
    },
    {
      id: 107,
      title: "فقرات فنية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/107/bFaMaLHcE97zEVl.webp"
    }
  ];
  
  

interface SeriesGridProps {
  title: string
}


export default function HelwaDonya({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programData} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
