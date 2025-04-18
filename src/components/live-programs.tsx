import ContentGrid from "./content-grid"

const programsData = [
  {
    id: "56",
    title: "دنيا يا دنيا",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/56/YLz2eNNpo47eVUJ.webp",
    category: "منوعات"
  },
  {
    id: "65",
    title: "حلوة يا دنيا",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/65/gM02XHZQofsojjo.webp",
    category: "منوعات"
  },
  {
    id: "59",
    title: "نبض البلد",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/59/OSmndPcjFL7ywDS.webp",
    category: "إخباري"
  },
  {
    id: "1450",
    title: "من هنا نبدأ",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1450/j5uBy76bfhB2Eke.webp",
    category: "منوعات"
  },
  {
    id: "171",
    title: "مطبخ رؤيا",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/171/duGRTDcnzcuf6lr.webp",
    category: "طبخ"
  },
  {
    id: "1228",
    title: "أخبار السابعة",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1228/lYFhi8NZalfAjQz.webp",
    category: "إخباري"
  },
  {
    id: "76",
    title: "كرفان",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/76/HGJT8xeNqo3LSht.webp",
    category: "ترفيهي"
  }
]

export default function LivePrograms() {
  return (
    <ContentGrid
      title="برامجنا المباشرة"
      items={programsData}
      showCategory={true}
      linkPrefix="/programs"
    />
  )
}
