import ContentGrid from "./content-grid"

const programItems = [
    {
      id: 513,
      title: "مال و أعمال",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/513/7G5EGNpVF6FHVkg.jpg"
    },
    {
      id: 311,
      title: "علوم إنسانية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/311/wFqc7DE33fWWrv9.jpg"
    },
    {
      id: 1361,
      title: "ضيف دنيا",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1361/KjFu9BsAXIUpuZh.webp"
    },
    {
      id: 1362,
      title: "موضوع اليوم",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1361/CEVumduN9Wik0x2.webp"
    },
    {
      id: 856,
      title: "هلا بالنشامى",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/856/svwAXch96Y4PuCI.jpg"
    },
    {
      id: 99,
      title: "قانون",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/99/fo3GdgltiYXEUPa.jpg"
    },
    {
      id: 102,
      title: "استضافات",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/102/q4iJND8k6nc2Dpl.webp"
    },
    {
      id: 103,
      title: "طب وصحة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/103/JDuEYbMUbh2Trci.jpg"
    },
    {
      id: 100,
      title: "شو أخبارهم",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/100/dsPhhoq2WcF5g1z.jpg"
    },
    {
      id: 868,
      title: "احزرها",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/868/k1pn0nYYJrn9Wz0.jpg"
    }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function Donya({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programItems} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
