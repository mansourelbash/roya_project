import ContentGrid from "./content-grid"

const episodesData = [
  {
    id: "108805",
    title: "سنبل السعيد",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/105/FPVxZ49DR48Bx97zRYfrwwNh8SxamCULmHpLee1i.jpg",
    height: 224,
    width: 400,
    category: "دراما"
  },
  {
    id: "108804",
    title: "الحياة الاجتماعية من الأغوار الشمالية",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/104/al4SjiiwKltWvuaBQ9CjZ6nuvZdDQM2L6fjDoDvE.jpg",
    height: 224,
    width: 400,
    category: "وثائقي"
  },
  {
    id: "107301",
    title: "الحلقة العاشرة",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1698/16xwZTe0VZyZ9VB1I3GzjLx1Xhd3VR9ZZ3mJ15f1.jpg",
    height: 224,
    width: 400,
    episodeNumber: "الحلقة 10"
  },
  {
    id: "108802",
    title: "الحلقة العاشرة",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1833/IMhcYNQWLAXpQYMsenYon01MvKNVBD78oswQdXvD.jpg",
    height: 224,
    width: 400,
    episodeNumber: "الحلقة 10"
  },
  {
    id: "108794",
    title: "محمود عبدالمغني",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1458/odyk8SZQnD5rRdrIwYbXBZVSTmwGQkBlGMVW9TKT.jpg",
    height: 224,
    width: 400,
    category: "توك شو"
  },
  {
    id: "108801",
    title: "اكتظاظ وتهالك البِنية التحتية لسوق المدينة المركزي",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1450/1ZQbnYXDL043TjRUUSQvD8sp5J5jN8Lpd7X0fwrh.jpg",
    height: 224,
    width: 400,
    category: "أخبار"
  },
  {
    id: "108800",
    title: "الواقع المائي في المملكة بعد موسم مطري ضعيف",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1450/P1MHjQCFwSge1fBQJGJsZM9Q6L9SuFiO4m4y53OE.jpg",
    height: 224,
    width: 400,
    category: "أخبار"
  },
  {
    id: "108799",
    title: "هل تُبعث محطة العقبة للعلوم البحرية من جديد؟",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1450/OAmXjNGmJ6MH1lOdAPsNOmvNo7Lu3YMykrr3PXHB.jpg",
    height: 224,
    width: 400,
    category: "تقرير"
  },
  {
    id: "108798",
    title: "دعم حكومي لبرامج الفئات المحتاجة وتعزيز فرص عمل النساء",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1450/YZ4BfPs4LXTgROFm68h2QsIxD7gsIxdOvSLeKK7t.jpg",
    height: 224,
    width: 400,
    category: "أخبار"
  },
  {
    id: "108797",
    title: "ميلفاي كسترد الشوكولاته السريع",
    image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/182/v5e9oOYHPJ6Drc9fNCzWJ2jy3ud3pqZkRBOFa91d.jpg",
    height: 224,
    width: 400,
    category: "طبخ"
  }
]

export default function NewEpisodes() {
  return (
    <ContentGrid
      title="حلقات جديدة"
      items={episodesData}
      showEpisodeNumber={true}
      linkPrefix="/episodes"
    />
  )
}
