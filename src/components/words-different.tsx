import ContentGrid from "./content-grid"

const programItems = [
    {
      id: 1532,
      title: "الموسم الثالث",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1531/qd9idMtheqR3i1p.webp"
    },
    {
      id: 1535,
      title: "الموسم الثاني",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1535/RqcfP5WD3CgZA02.webp"
    },
    {
      id: 1354,
      title: "حجي تاني من العراق",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1354/CGlusc5YJsd0SBm.webp"
    },
    {
      id: 1431,
      title: "حكي تيينز",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1431/QXoXixnF5D0Pjz1.webp"
    },
    {
      id: 1151,
      title: "كلام تاني",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1151/kaWxK4Z8pmK4yMm.webp"
    }
  ];
  
  

interface SeriesGridProps {
  title: string
}


export default function WordsDifferent({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programItems} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
