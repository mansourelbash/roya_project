import ContentGrid from "./content-grid"

const programs = [
    { title: "حفل الفنان فهد الكبيسي وأحبابه", id: 1499, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1498/X2woc0hOYBhOXJb.webp" },
    { title: "ليلة البرنس والعمالقة", id: 1493, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1492/5GJNFIlkGcNpIHh.webp" },
    { title: "حفل كاسيت 90s", id: 1492, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1491/WGBYjkJU3NhzuJE.webp" },
    { title: "ليلة نجمات العرب", id: 1491, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1490/tuwiVOAJEUK1RqB.webp" },
    { title: "كورال تناغم", id: 1490, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1489/MlDiYjoMW3OWvtN.webp" },
    { title: "محمد عبده.. اليوبيل الماسي", id: 1489, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1489/vyRs4dAWZqIKt6R.webp" },
    { title: "الموسم الخامس", id: 1458, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1457/Gsnqi5hSxPXj2FI.webp" },
    { title: "ليلة طرب مع نداء شرارة", id: 1451, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1450/yi17BZRyFjjxIaJ.webp" },
    { title: "طرب مع مروان خوري", id: 710, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/710/EYHO7W46MbggTlO.webp" }
  ];
  

interface SeriesGridProps {
  title: string
}



export default function Music({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
