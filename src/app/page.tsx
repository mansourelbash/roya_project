"use client";
import HeroSlider from "@/components/hero-slider";
import Header from "@/components/header";
import LiveChannels from "@/components/live-channels";
import NewEpisodes from "@/components/new-episodes";
import LivePrograms from "@/components/live-programs";
import NewsSection from "@/components/news-section";
import SeriesGrid from "@/components/series-grid";
import Footer from "@/components/footer";
import RoyaTVPromo from "@/components/roya-tv-promo";
import LiveNow from "@/components/live-now";
import AddNewItems from "@/components/add-new-items";
import MoviesSelection from "@/components/movies-selection";
import Caravan from "@/components/caravan";
import Action from "@/components/action";
import MyProductions from "@/components/my-productions";
import DramaEgypt from "@/components/drama-egypt";
import ComedyaEgypt from "@/components/comedya-egypt";
import DramaLove from "@/components/drama-love";
import Music from "@/components/music";
import NewDubaiTeams from "@/components/new-dubai-teams";
import Community from "@/components/community";
import RedBull from "@/components/redbull";
import Documentary from "@/components/documentary";
import WordsDifferent from "@/components/words-different";
import Panorama from "@/components/panorama";
import Donya from "@/components/donya";
import RoyaKitchen from "@/components/roya-kitchen";
import Msr7yat from "@/components/msr7yat";
import HelwaDonya from "@/components/helwa-donya";
import Shamyat from "@/components/shamyat";
export default function Home() {

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
  const videoItems = [
    {
      title: "الخشبة أداة المقاومة: فنان فلسطيني يتحدّى الحدود",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/206/rAqQWrUzBIfpf3BO4EytHAZhbrRT2IJp0SZ13JoZ.jpg",
      href: "/videos/108793",
    },
    {
      title: "كيف تتخلص من رطوبة الجدران بشكل دائم؟",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/197/ZZOTIYaaYOUZ5pVrAojX1PkKuj3Rci7mmf7aM2b1.jpg",
      href: "/videos/108792",
    },
    {
      title: "مهرجان الياسمين - حناجر فلسطينية تغني لأطفال غزة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/889/ttdxCSazAS8IjQGCSwJ0YPZTqwcyz0sMRzOP6cVd.jpg",
      href: "/videos/108791",
    },
    {
      title: "هل يمكن تأخير الشيخوخة؟ إليكِ أسرار الشباب الدائم",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/201/tfNgW6yiNBcmuqApzw6oHWihtgvIcqa2CdAlaEAN.jpg",
      href: "/videos/108790",
    },
    {
      title: "من بيروت إلى العالم: بارعة علم الدين في حوار إنساني مع دانا أبو خضر",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/878/4l1UzMno3mRGeZvoG5MzygUAywHJctIJ44JGhntn.jpg",
      href: "/videos/108789",
    },
    {
      title: "كبت المشاعر عند الرجال: عندما يصبح الصمت تهديدًا للعلاقة الزوجية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1011/22QDjdG8Bv7b5LtcDTfp3Tsj9T1gIJcDcFw6mAaj.jpg",
      href: "/videos/108788",
    },
    {
      title: "ما هو مرض الهيموفيليا؟ وكيف نتعامل معه؟",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/103/PmDWDzbNMXzovGXP8ub1NvOw5ZsQ7xmKENsuhlwi.jpg",
      href: "/videos/108787",
    },
    {
      title: "كيف تتقن فن الإتيكيت في الأماكن العامة؟ خطوات بسيطة تترك انطباعًا راقيًا",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1361/ErG5VD2L05C406fHCbXdlj4w2h3HgPen0vYyblpH.jpg",
      href: "/videos/108785",
    },
    {
      title: "العلم الأردني في وجدان الأردنيين.. قصة فخر لا تنتهي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1361/utbpvIewSOMimorxcSYBpweVWEfNt7oz4SB8NmKA.jpg",
      href: "/videos/108754",
    },
    {
      title: "شوارعنا مملوءة بالفخر: رفع العلم الأردني بكل عزة وكرامة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/878/7HuauEr5wyUfTTwuCYdCg3KQpqU2x7JZdV5bq1Kq.jpg",
      href: "/videos/108753",
    },
  ];

  const videoItems2 = [
    {
      title: "سر الكراج المظلم !",
      href: "/videos/108757",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1600/7YaQyGaHI8MQTJTG83IMqeugQk1tARWEG9wvquaI.jpg",
      alt: "سر الكراج المظلم !"
    },
    {
      title: "استقبال يبيض الوجه من الشيخ عواد",
      href: "/videos/108771",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1596/8E21Ok3rhsKKIdgS3ED0TaFFUFFQ9avyigDQSvs4.jpg",
      alt: "استقبال يبيض الوجه من الشيخ عواد"
    },
    {
      title: "قصة الأم القاتلة",
      href: "/videos/108756",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1594/tcChj42Uksv7AanomChdegYLhh7wxuJ78FlWNxTL.jpg",
      alt: "قصة الأم القاتلة"
    },
    {
      title: "تعامل بطريقة سيئة مع حداد",
      href: "/videos/108758",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1686/txWvkqiLP5qS5Cx3YKbGVqSt6eFgLaEXbxfXbXln.jpg",
      alt: "تعامل بطريقة سيئة مع حداد"
    },
    {
      title: "السفينة التي لم تعد",
      href: "/videos/108636",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1600/Qhu9Yk15v7pNhTgoYiToYxa0kjIRM8HkVRfwNvvw.jpg",
      alt: "السفينة التي لم تعد"
    },
    {
      title: "جربت اعيش بدون بصر ! و الناس صدموني",
      href: "/videos/108708",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1837/5PQBcil3lOYpqaED9bmJxe2T4FULJctOlv6kiaVJ.jpg",
      alt: "جربت اعيش بدون بصر ! و الناس صدموني"
    },
    {
      title: "اكثر 5 العاب منتظرة لعام 2025 !",
      href: "/videos/107807",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1685/6bS5ObRCmtpgIl8x15TenRnAwp1d30BFr54FGDme.jpg",
      alt: "اكثر 5 العاب منتظرة لعام 2025 !"
    },
    {
      title: "ردود فعل النشامى: الأردني ما بقبل الاساءة لأحد!",
      href: "/videos/107805",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1686/lk2dyr0PfCN40yukuQd1wwTx7cxsePg2xISVrq8E.jpg",
      alt: "ردود فعل النشامى: الأردني ما بقبل الاساءة لأحد!"
    },
    {
      title: "آخر تطورات Deep Seek : يواجه ChatGPT في حرب الذكاء الإصطناعي !",
      href: "/videos/107804",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1682/R48Ay4xPZMQjDzDsiXuXE9MrXDBfN3E4Z3wA0q1w.jpg",
      alt: "آخر تطورات Deep Seek : يواجه ChatGPT في حرب الذكاء الإصطناعي !"
    },
    {
      title: "لعبة ENSHROUDED : كل ما تحتاج معرفته",
      href: "/videos/107896",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1685/mSIbLrkX5VnHM7clHSYFcjDFocNex0qkvE7Y39Wc.jpg",
      alt: "لعبة ENSHROUDED : كل ما تحتاج معرفته"
    }
  ];
  
  const dubaiTeams = [
    {
      title: "RC CELTA VS Al JAZIRA SC Highlights",
      id: "108090",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1728/j5LQk66nDAKkLTxfARSWGnOl7Z3RznZOv3HpnoEi.jpg"
    },
    {
      title: "Real Madrid FC VS FC RODINA",
      id: "108086",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1731/q73cB0QqDm3LEwJ97gp5upQ07y9gbPMx7sTQXBbn.jpg"
    },
    {
      title: "ZED FC VS IRIS Sports ISA",
      id: "108080",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1723/rvKmNubUt3OrnyCB1vT0svRVQwczuqRBZ3xQzl7n.jpg"
    },
    {
      title: "Fursan Hispania FC VS ITTIHAD FC",
      id: "108072",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1732/V4lv0PWFBQvaInuxYfSYin5GXqeDg2Mdr8LFdYYX.jpg"
    },
    {
      title: "Chelsea VS Joga Bonito Fa",
      id: "108068",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1727/CNdiWU5H3f7MatqFTS1msv3RcjiZXagjDkoOKpSu.jpg"
    },
    {
      title: "FC Bayern Munich VS SHARJAH FC",
      id: "108064",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1783/Iwjmd7CsZkhFAO6iz1purF5hg9pH3IbjDXjZYyvI.jpg"
    },
    {
      title: "Real Madrid FC VS FC RODINA",
      id: "108052",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1725/jXMfQ3BuUaTDWDjjYft8e54AsgGWbI455yWZaA1M.jpg"
    },
    {
      title: "HATTA C VS IRIS Sports ISA",
      id: "108048",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1784/Bc6XbRfXbzJiScSLnkMjHURhJWEq5oPKbRnTn2b2.jpg"
    },
    {
      title: "RC CELTA VS Al JAZIRA SC",
      id: "108044",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1722/FoiVakVy8mAeHGUv5LKZxocm25Dq5Eu2KEEhtHZA.jpg"
    },
    {
      title: "CHELSEA FC VS Al NASR SC",
      id: "108040",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/1721/q4QVEBMzJ8r0SMIxHdbCOVcDIAPgvQMVUUEFPkrw.jpg"
    }
  ];
  

  const wsfat = [
    {
      id: "108797",
      title: "ميلفاي كسترد الشوكولاته السريع",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/182/v5e9oOYHPJ6Drc9fNCzWJ2jy3ud3pqZkRBOFa91d.jpg"
    },
    {
      id: "108796",
      title: "لحم بالصلصة البنية مع البطاطا المهروسة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/180/0wkiM6SgtPd8hR9fu3UIQ4UdWvUFXocyVnCFk4kC.jpg"
    },
    {
      id: "108795",
      title: "كيكة الشوكولاته بحشوة جوز الهند",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/182/Btwtl0BkCTACopQlFWB84FLVvDpMcVtjiJvmIa5c.jpg"
    },
    {
      id: "108761",
      title: "بسبوسة الفناجين",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/183/1qiQxKy41XJ3E8CPZXnwi28mGUR4A9AIvfSf2WgE.jpg"
    },
    {
      id: "108760",
      title: "المكمورة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/185/OTWLl4y1hLr2uRXXrgslEH8srCuOJXAiXszOSwop.jpg"
    },
    {
      id: "108759",
      title: "بخاري معاني",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/185/t6BzWQxIJdIZHayNaXnwMVnHSOVLNNotEOwBhd1W.jpg"
    },
    {
      id: "108721",
      title: "سلطة الكينوا والحلوم المشوي",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/181/4jB9LUESeKWPYt72mqbheGR4FF8tpi7Nl2N5NoNq.jpg"
    },
    {
      id: "108720",
      title: "فطيرة الدجاج الكريمية بالفخارة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/185/hsfr9UtgIkBiYE0CeJ4CwGhJ4oLaazgQsZCrrgWp.jpg"
    },
    {
      id: "108719",
      title: "كيكة البسكوت السهلة",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/183/5vuNPNgQMtlw6CXmjEsOjVVvKYBYQNoUT8AYKYJf.jpg"
    },
    {
      id: "108700",
      title: "مهلبية الحليب والفراولة والتوت",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/183/mB9eqBgEBBKMNyT4KwU7fUw3yC7uSGMFXD43sfmh.jpg"
    }
  ];
  
  const newHelwaDonya = [
    {
      id: "108811",
      title: "وصال فريحات - منسقة مؤسسة الأميرة تغريد للتنمية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/106/MndOnorcnJlCgtkKlKznHFV4HbrkUjN1ye81uvoe.jpg"
    },
    {
      id: "108810",
      title: "عمر المومني - رئيس مجلس محافظة عجلون",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/106/fnt0Ma9lry3jr6mAmqqsbftCIceqiOLKIEQj2h45.jpg"
    },
    {
      id: "108809",
      title: "الدكتورة أغادير جويحان - مديرة مؤسسة الأميرة تغريد للتنمية والتدريب",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/106/PUv4UhmBZreWBccT5NvXDMS2MlMZaDF37GKwnGHB.jpg"
    },
    {
      id: "108808",
      title: "قصص نجاح فجر ووعد",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/106/XYqtaipzP43SpmQgnxeRXJb6czg675qnaPDMvOUN.jpg"
    },
    {
      id: "108807",
      title: "مؤسسة الأميرة تغريد للتنمية والتدريب",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/226/znF5Wegfc0ERMyTg2BURxNlOzl5GdB1isR4Dkyy8.jpg"
    },
    {
      id: "108806",
      title: "حال مدينة القدس في عيد الفصح",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/226/EE7hNFUGQY6PKxWnyg7kfnpbyH0Rvd9Xnn2imOzb.jpg"
    },
    {
      id: "108805",
      title: "سنبل السعيد",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/105/FPVxZ49DR48Bx97zRYfrwwNh8SxamCULmHpLee1i.jpg"
    },
    {
      id: "108804",
      title: "الحياة الاجتماعية من الأغوار الشمالية",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/104/al4SjiiwKltWvuaBQ9CjZ6nuvZdDQM2L6fjDoDvE.jpg"
    },
    {
      id: "108668",
      title: "قرية عرب المليحات",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/104/D9YWtpOEPUmuPQm7OTI03NINpjMKuZwTaHcbOtqO.jpg"
    },
    {
      id: "108667",
      title: "القاضي العشائري الشيخ طراد الفايز",
      image: "https://backend.roya-tv.com/imagechanger/Size03Q40R169//episodes/stream/106/oJrgMByKWzeEn9EO4QjsCPHxr3XdYm6IxLnF3VZN.jpg"
    }
  ];
  
  
  
  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <Header />
      <HeroSlider />
      <div className="container mx-auto">
        <LiveChannels />
        <NewEpisodes data={episodesData } title="حلقات جديدة" />
        <LivePrograms />
        {/* <AdBanner
          text="شاهد رؤيا بلس واستمتع بمشاهدة حصرية"
          image="/placeholder.svg?height=100&width=1200&text=Ad Banner"
        /> */}
        <SeriesGrid title="رمضان 2025" />
        <LiveNow title="يعرض على شاشة رؤيا" />
        <AddNewItems title="مُضاف حديثاً" />
        <MoviesSelection title="افلام الزعيم" />
        <NewEpisodes data={videoItems } title="جديد دنيا يا دنيا" />
        <NewEpisodes data={videoItems2 } title="جديد كرفان" />
        <Caravan  title="كرفان"/>
        <Shamyat title="شاميات" />
        <Action title="اكشن" />
        <MyProductions title="إنتاجاتنا الكوميدية" />
        <DramaEgypt title="دراما مصرية" />
        <ComedyaEgypt title="كوميديا مصرية" />
        <DramaLove title="دراما الحب" />
        <Music title="موسيقى" />
        <NewEpisodes data={dubaiTeams } title="جديد كأس دبي للقارّات الثامن لكرة القدم تحت 13 عامًا" />
        <NewDubaiTeams title="أندية كأس دبي للقارّات الثامن لكرة القدم تحت 13 عامًا" />
        <Community title="مجتمعي" />
        <RedBull title="ريدبول" />
        <Documentary title="وثائقي" />
        <WordsDifferent title="حكي منوع" />
        <Panorama title="بانوراما" />
        <Donya title="دنيا يا دنيا" />
        <NewEpisodes data={wsfat } title="وصفات من مطبخنا" />
        <RoyaKitchen title="مطبخ رؤيا" />
        <Msr7yat title=" مسرحيات" />
        <NewEpisodes data={newHelwaDonya } title="جديد حلوة يا دنيا" />
        <HelwaDonya title="حلوة يا دنيا" />
      </div>
      <RoyaTVPromo />
      <NewsSection />

      <Footer />
    </div>
  );
}
