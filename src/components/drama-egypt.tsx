import ContentGrid from "./content-grid"

const programs = [
    { title: "جبل الحلال", id: 816, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/816/h5sqTme37SMGXzI.jpg" },
    { title: "حالة عشق", id: 910, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/910/H9cHpJgGnrixei3.jpg" },
    { title: "حدوتة مرة", id: 1004, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1004/KxQZnTzByD83665.jpg" },
    { title: "الخروج", id: 434, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/434/uNImDgsIvgCTer4.jpg" },
    { title: "الحرباية", id: 473, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/473/XF2DO2qAFKemR3Q.jpg" },
    { title: "طايع", id: 1335, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1334/v9tZcjBj1wQR6yn.webp" },
    { title: "طاقة القدر", id: 1021, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1021/idwhEKhXLep7qCU.jpg" },
    { title: "جمع سالم", id: 1081, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1081/0PFt9wdeuq9jx0b.jpg" }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function DramaEgypt({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
