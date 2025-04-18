import ContentGrid from "./content-grid"

interface SeriesGridProps {
  title: string
}

const movies = [
    {
      id: 1524,
      title: "فيلم مرجان أحمد مرجان",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1524/vDIFsii7juem0dL.webp"
    },
    {
      id: 1526,
      title: "فيلم حسن ومرقص",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1526/X1GjAALbCb3BcZw.webp"
    },
    {
      id: 1527,
      title: "فيلم حب في الزنزانة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1527/9Mudihz1IMU7x1h.webp"
    },
    {
      id: 1525,
      title: "فيلم المشبوه",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1525/u96UaMXYH3rmekd.webp"
    },
    {
      id: 1529,
      title: "فيلم الغول",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1529/KO9hfmfmbcvOBg5.webp"
    },
    {
      id: 1528,
      title: "فيلم المتسول",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1528/iAHSEVAiIDZ5vO3.webp"
    },
    {
      id: 1560,
      title: "فيلم شعبان تحت الصفر",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1560/2ucXEQ3RaTzLUF0.webp"
    }
  ];  

export default function MoviesSelection({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={movies} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
