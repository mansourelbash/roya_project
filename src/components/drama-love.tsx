import ContentGrid from "./content-grid"

const programs = [
    { title: "أغمض عينيك", id: 1515, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1515/4474unRAuBLNHuT.jpg" },
    { title: "جوقة عزيزة", id: 1366, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1366/SvHCxlFQJvXMpmU.jpg" },
    { title: "تانغو", id: 715, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/715/RWiyk4mNHDh6HjD.jpg" },
    { title: "طريق", id: 616, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/616/58Lv8cnTVmkjN3G.jpg" },
    { title: "كارما", id: 1220, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1220/k66mo0vqmrN8w1i.webp" },
    { title: "عشرين عشرين", id: 1132, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1132/7qMu52VsvZ6SZzo.jpg" },
    { title: "الموسم الثاني", id: 1236, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1236/mq4k01eGKC16jpx.webp" },
    { title: "من الآخر", id: 1054, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1054/2CZRbdjI6WWnKXQ.jpg" }
  ];
  

interface SeriesGridProps {
  title: string
}



export default function DramaLove({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
