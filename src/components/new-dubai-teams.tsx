import ContentGrid from "./content-grid"

const programs = [
    {
      title: "IRIS Sports ISA",
      id: 1720,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1719/CK2DpJivEsGwNaq.webp"
    },
    {
      title: "Real Madrid FC",
      id: 1750,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1750/c7jcfHlZyhxdDux.webp"
    },
    {
      title: "FC Bayern Munich",
      id: 1738,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1737/8X41IUYW0ppcseD.webp"
    },
    {
      title: "AC MILAN",
      id: 1733,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1732/tV3tIt9niH9pv66.webp"
    },
    {
      title: "CHELSEA FC",
      id: 1740,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1739/t8wCSrGyeXSAseT.webp"
    },
    {
      title: "RC CELTA",
      id: 1739,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1738/JbhNMsew0BMkzsl.webp"
    },
    {
      title: "DOFA PFK CSKA",
      id: 1749,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1749/o6s5nObPVVVzhUd.webp"
    },
    {
      title: "Joga Bonito FA",
      id: 1747,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1746/xKT1OSwTlqVBV6r.webp"
    },
    {
      title: "SSD Levante Azzurro",
      id: 1754,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1753/NnLEfbJlcrwqRjA.webp"
    },
    {
      title: "Al JAZIRA SC",
      id: 1734,
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1734/nipXBn7dNCKW335.webp"
    }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function NewDubaiTeams({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
