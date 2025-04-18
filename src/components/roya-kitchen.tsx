import ContentGrid from "./content-grid"

const programs = [
    {
      id: 174,
      title: "المطبخ الأمريكي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/174/LYjd6snn5JBctvQ.jpg"
    },
    {
      id: 175,
      title: "المطبخ الخليجي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/175/G4bnLLYfbICvyxy.webp"
    },
    {
      id: 176,
      title: "المطبخ التركي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/176/qOHotbjTyUXzHYu.webp"
    },
    {
      id: 177,
      title: "المطبخ المصري",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/177/8BtXakqEkUKgf79.webp"
    },
    {
      id: 179,
      title: "المطبخ المكسيكي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/179/oCeeUXiy7GwwfVV.webp"
    },
    {
      id: 180,
      title: "المطبخ الأوروبي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/180/d1MXI3JzAPb0A4R.jpg"
    },
    {
      id: 184,
      title: "المطبخ الآسيوي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/184/agVYzf2mOnLL7BG.webp"
    },
    {
      id: 185,
      title: "مطبخ بلاد الشام",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/185/Co4TFDVwisjMApg.jpg"
    },
    {
      id: 183,
      title: "حلويات شرقية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/183/1xx7fJNbflJgfB2.jpg"
    },
    {
      id: 182,
      title: "حلويات غربية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/182/YHCsVOySMZuhFxj.jpg"
    }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function RoyaKitchen({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
