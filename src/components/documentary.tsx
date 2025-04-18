import ContentGrid from "./content-grid"

const programItems = [
    {
      id: 1403,
      title: "فيلم كفر عصيون",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1402/csrrxExaag92kuX.webp"
    },
    {
      id: 1263,
      title: "العالم الكبير",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1263/jZX2zFhShCpQIW5.webp"
    },
    {
      id: 912,
      title: "الفيلم الوثائقي - عمان جارة العين",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/912/FNMn7mv4z1KuNwB.webp"
    },
    {
      id: 713,
      title: "القدس جوهر الصراع والمواجهة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/713/gYSGCa9idMiY88D.webp"
    },
    {
      id: 1077,
      title: "فيلم الهدف صفر",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1077/lSrIBhTQcxGXz4y.webp"
    },
    {
      id: 829,
      title: "عبدالله الاول بن الحسين | الملك الشهيد",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/829/lxvrexHhB11O2yE.webp"
    },
    {
      id: 421,
      title: "فيلم أصل الشرور",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/421/NbmSDRo7dVrIzEx.webp"
    },
    {
      id: 585,
      title: "إندونيسيا واكتشاف المجهول",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/585/sPA7T7CsXzjflbC.webp"
    },
    {
      id: 919,
      title: "فيلم الجدار العنصري",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/919/79gywGdhocWxh7U.webp"
    },
    {
      id: 634,
      title: "فيلم ماء زمزم",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/634/zEbW7FTaE0B19sM.webp"
    }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function Documentary({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programItems} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
