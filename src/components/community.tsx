import ContentGrid from "./content-grid"

const programs = [
    {
      id: 1456,
      title: "الموسم الخامس",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1456/qetMt7QRHqcf0Gr.webp"
    },
    {
      id: 1358,
      title: "برنامج أهل الحي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1357/gXtTcHG4dHZJQt8.webp"
    },
    {
      id: 1305,
      title: "الموسم الخامس عشر",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1304/WwZVnrYqnWCiXIF.webp"
    },
    {
      id: 1336,
      title: "ما بعد الأسر",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1336/BHvd0eaXMwASNaq.webp"
    },
    {
      id: 225,
      title: "نشمي 911",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/225/EEzyEVrEiCIg8PA.jpg"
    },
    {
      id: 1109,
      title: "ما بعد الجريمة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1109/HXyH2xVo5qGlZID.webp"
    },
    {
      id: 1065,
      title: "تحقيق أمني",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1065/ULB7xfSUoDAwXSR.webp"
    },
    {
      id: 290,
      title: "ساعة الصفر",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/290/yJ4NUcV9JhB69Ek.webp"
    },
    {
      id: 1306,
      title: "أمن 911",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1306/8wZTG71hCjUPytx.webp"
    },
    {
      id: 858,
      title: "الموسم الثاني",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/858/qCL078XGFipJzCM.jpg"
    }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function Community({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
