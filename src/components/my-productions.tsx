import ContentGrid from "./content-grid"

const programs = [
    { title: "أختي وخلفتها", id: 1507, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1507/ru5mV3zJePsmESd.jpg" },
    { title: "آخر دُرج", id: 1502, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1502/I3RoLFUoeRifjC8.jpg" },
    { title: "مسلسل دو", id: 1503, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1503/fnO1m2E5Q7M0NeS.jpg" },
    { title: "2 فاز", id: 1504, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1504/AvsqNtz2yaPLswx.jpg" },
    { title: "رأيين بوجه", id: 1459, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1458/bVwNZd6L1qQrxnZ.webp" },
    { title: "كبرت العيلة", id: 1391, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1391/PRJvugakEismegB.jpg" },
    { title: "مجمع السعادة", id: 1392, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1392/eTeoLa7Hd2taXcT.jpg" },
    { title: "وطن ع وتر", id: 798, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/798/qcCoLjUUMfnHeOK.webp" },
    { title: "صدفة", id: 1284, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1284/5V43JMteBDYoMsN.webp" },
    { title: "الحب الحب", id: 162, image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/162/vYNkoXd2noMI7uq.webp" }
  ];
  
  
  

interface SeriesGridProps {
  title: string
}


export default function MyProductions({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
