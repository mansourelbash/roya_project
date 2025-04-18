import ContentGrid from "./content-grid"

const programItems = [
    {
      id: 1485,
      title: "ليلة رأس السنة 2024",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1484/qIlzaTJfgg0FoWt.webp"
    },
    {
      id: 1483,
      title: "بانوراما الأخبار 2023",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1482/Pliuhsjdv99Eskj.webp"
    },
    {
      id: 1373,
      title: "بانوراما نبض البلد 2023",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1373/Br5T7gN8sg5QFXo.webp"
    },
    {
      id: 1490,
      title: "كورال تناغم",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1489/MlDiYjoMW3OWvtN.webp"
    },
    {
      id: 1486,
      title: "بانوراما مطبخ رؤيا 2023",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1485/kzyhehS5pFbtydK.webp"
    },
    {
      id: 1484,
      title: "توقعات الأبراج 2024",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1483/7KaJFDDb8v5m896.webp"
    },
    {
      id: 1487,
      title: "بانوراما حلوة يا دنيا",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1487/VM9pp1jyaeY6tFK.webp"
    },
    {
      id: 1488,
      title: "بانوراما دنيا يا دنيا 2023",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1488/21UfRTdjZ8xV5RO.webp"
    }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function Panorama({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programItems} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
