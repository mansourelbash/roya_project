import ContentGrid from "./content-grid"

interface SeriesGridProps {
  title: string
}

const videos = [
  {
    id: 107301,
    title: "الحلقة العاشرة",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1698/16xwZTe0VZyZ9VB1I3GzjLx1Xhd3VR9ZZ3mJ15f1.jpg"
  },
  {
    id: 108802,
    title: "الحلقة العاشرة",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1833/IMhcYNQWLAXpQYMsenYon01MvKNVBD78oswQdXvD.jpg"
  },
  {
    id: 108794,
    title: "محمود عبدالمغني",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1458/odyk8SZQnD5rRdrIwYbXBZVSTmwGQkBlGMVW9TKT.jpg"
  },
  {
    id: 108801,
    title: "اكتظاظ وتهالك البِنية التحتية لسوق المدينة المركزي",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1450/1ZQbnYXDL043TjRUUSQvD8sp5J5jN8Lpd7X0fwrh.jpg"
  },
  {
    id: 108800,
    title: "الواقع المائي في المملكة بعد موسم مطري ضعيف",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1450/P1MHjQCFwSge1fBQJGJsZM9Q6L9SuFiO4m4y53OE.jpg"
  },
  {
    id: 108799,
    title: "هل تُبعث محطة العقبة للعلوم البحرية من جديد؟",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1450/OAmXjNGmJ6MH1lOdAPsNOmvNo7Lu3YMykrr3PXHB.jpg"
  },
  {
    id: 108798,
    title: "دعم حكومي لبرامج الفئات المحتاجة وتعزيز فرص عمل النساء",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1450/YZ4BfPs4LXTgROFm68h2QsIxD7gsIxdOvSLeKK7t.jpg"
  },
  {
    id: 108797,
    title: "ميلفاي كسترد الشوكولاته السريع",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/182/v5e9oOYHPJ6Drc9fNCzWJ2jy3ud3pqZkRBOFa91d.jpg"
  },
  {
    id: 108796,
    title: "لحم بالصلصة البنية مع البطاطا المهروسة",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/180/0wkiM6SgtPd8hR9fu3UIQ4UdWvUFXocyVnCFk4kC.jpg"
  },
  {
    id: 108795,
    title: "كيكة الشوكولاته بحشوة جوز الهند",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/182/Btwtl0BkCTACopQlFWB84FLVvDpMcVtjiJvmIa5c.jpg"
  }
];


export default function SeriesGrid({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={videos} showEpisodeNumber={true} linkPrefix="/series" />
}
