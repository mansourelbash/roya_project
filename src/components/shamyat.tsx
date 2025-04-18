import ContentGrid from "./content-grid"

const programs = [
    {
      id: 1513,
      title: 'الجزء الثاني',
      href: '/program/1513',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1513/S5scStkRidr2D9f.jpg',
      badge: false,
    },
    {
      id: 1512,
      title: 'الجزء الأول',
      href: '/program/1512',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1511/2du8FlygPajdX1G.webp',
      badge: true,
    },
    {
      id: 1457,
      title: 'مرايا 98',
      href: '/program/1457',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1457/gRpax0QAbIrph23.jpg',
      badge: false,
    },
    {
      id: 1446,
      title: 'مرايا 97',
      href: '/program/1446',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1445/zp4njgSenaddf17.webp',
      badge: false,
    },
    {
      id: 121,
      title: 'طوق البنات',
      href: '/program/121',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/121/lDInHCh5ntuBAmy.jpg',
      badge: false,
    },
    {
      id: 517,
      title: 'الخربة',
      href: '/program/517',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/517/d7QEzM6qWw4SujE.jpg',
      badge: false,
    },
    {
      id: 899,
      title: 'عيلة 7 نجوم',
      href: '/program/899',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/899/NmaXZyGV0rBs0d6.jpg',
      badge: false,
    },
    {
      id: 965,
      title: 'إنت عمري',
      href: '/program/965',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/965/RHoxnn3N7ejiYj7.jpg',
      badge: false,
    },
    {
      id: 1698,
      title: 'أبناء القهر',
      href: '/program/1698',
      image: 'https://backend.roya-tv.com/imagechanger/Size03Q40R9134/images/programs/1697/ReHbkBEg5BA7KyH.webp',
      badge: false,
    },
  ];
  
  

interface SeriesGridProps {
  title: string
}


export default function Shamyat({ title }: SeriesGridProps) {

  return <ContentGrid title={title} items={programs} showEpisodeNumber={true} height={true} playVideo={true} hideTitle={false} linkPrefix="/series" />

}
