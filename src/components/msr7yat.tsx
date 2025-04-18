import ContentGrid from "./content-grid"
  
  const programs = [
    {
      id: 1436,
      title: "يا مسافر وحدك",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1436/xXpz9RZcNKx6axl.png"
    },
    {
      id: 1434,
      title: "مصيدة المجانين",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1434/L3BLvE76QazAXOu.png"
    },
    {
      id: 1435,
      title: "المحظوظ وأنا",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1435/eeXCwUJVIgkkcOr.png"
    },
    {
      id: 1433,
      title: "البعبع",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1433/pi4ZzqLb1RWBoHy.png"
    },
    {
      id: 1032,
      title: "مسرحية العيال كبرت",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1032/seJiBuRyQplZHKf.png"
    },
    {
      id: 1033,
      title: "مسرحية ريا وسكينة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1033/X0rNfkko5yX5Qdx.png"
    },
    {
      id: 1035,
      title: "مسرحية مدرسة المشاغبين",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1035/380tmrquavC02yi.png"
    },
    {
      id: 1095,
      title: "مسرحية كده أوكيه",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1095/xfrkumcuKC9zm1s.png"
    },
    {
      id: 1031,
      title: "شاهد ما شفش حاجة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1031/NcZPs8GFDXoGBif.png"
    }
  ];
  
    
    
  
  interface SeriesGridProps {
    title: string
  }
  
  
  export default function Msr7yat({ title }: SeriesGridProps) {
  
    return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />
  
  }
  