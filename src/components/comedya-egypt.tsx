import ContentGrid from "./content-grid"

const programs = [
    { title: "ريح المدام", id: 651, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/651/pba5CWEcKDfrL7S.jpg" },
    { title: "مأمون وشركاه", id: 823, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/823/NT89XN6yOu0KrGm.jpg" },
    { title: "عوالم خفية", id: 1310, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1309/egQH1Ig49vjwaGE.webp" },
    { title: "فلانتينو", id: 1346, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1345/UuMJ4xzZMkmG1XH.webp" },
    { title: "يوميات زوجة مفروسة أوي", id: 603, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/603/Zf8tdN8Umj64PlT.jpg" },
    { title: "نيللي وشريهان", id: 279, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/279/xa5QD8mA9RQHoSP.jpg" }
  ];
  
  

interface SeriesGridProps {
  title: string
}


export default function ComedyaEgypt({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
