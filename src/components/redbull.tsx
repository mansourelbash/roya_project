import ContentGrid from "./content-grid"

const programItems = [
    {
      id: 1461,
      title: "Redbull - Soapbox 2023",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1460/R1GOoUZvjQe5ZYq.webp"
    },
    {
      id: 1437,
      title: "RedBull Jukebox",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1437/9XlAMhwjy8TZu0U.webp"
    },
    {
      id: 1438,
      title: "RedBull Symphonic",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1438/mmXs1xW1ZENDHjk.webp"
    },
    {
      id: 1452,
      title: "Redbull CarPark Drift 2023",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1452/CjzDf7niAygsO9v.webp"
    },
    {
      id: 1173,
      title: "Redbull - Ultimate Rush",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1173/yhF6tkHAtjVHckD.webp"
    },
    {
      id: 1172,
      title: "redbull- Worldies",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1172/Yho2UfuGrm3c2uB.webp"
    },
    {
      id: 1156,
      title: "Red Bull - Wild Rides",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1156/5BbouvjRs2fN9ln.webp"
    },
    {
      id: 1155,
      title: "Red Bull - The Inca Trail",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1155/oDDuh6UPFIZP5mB.webp"
    },
    {
      id: 1153,
      title: "Red Bull - Reel Rock",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1153/P9afKcKm7g94Jnu.webp"
    },
    {
      id: 1152,
      title: "Red Bull - Fast Life Volume",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1152/d3sZ9KZ02WVMozT.webp"
    }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function RedBull({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programItems} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
