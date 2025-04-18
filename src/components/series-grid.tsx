import ContentGrid from "./content-grid"

interface SeriesGridProps {
  title: string
}

const videos = [
  {
    id: 107301,
    title: "السبع",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1713/2oD1Insg4aGgW8I.webp"
  
  },
  {
    id: 108802,
    title: "تحت سابع أرض",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1712/cYkX3NVpIqEGyOk.webp"
 
  },
  {
    id: 108794,
    title: "حكيم باشا",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1714/84YK7XZLFBHNyqY.webp"
 
  },
  {
    id: 108801,
    title: "العهد",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1715/A6o56WHSmykO697.webp"
 
  },
  {
    id: 108800,
    title: "يا أنا يا هي",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1702/aYAlYRUidHDgyUP.jpg"
 
  },
  {
    id: 108799,
    title: "فرج",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1707/7wcXxh5pK7tFqqt.webp"
 
  },
  {
    id: 108798,
    title: "الجزء الثاني",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1701/vEvddYKJ4KS24Zr.jpg"
 
  },
  {
    id: 108797,
    title: "حارتنا ضيقة",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1703/2GngD8I08N4jPyD.jpg"
 
  },
  {
    id: 108796,
    title: "الموسم الثاني",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1706/owA2r0cpTGQoFtm.webp"
 
  },
  {
    id: 108795,
    title: "حبيبنا اللزم",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1710/7bNnTih35vBE11B.webp"
 
  }
];


export default function SeriesGrid({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={videos} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
