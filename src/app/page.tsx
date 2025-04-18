"use client";
import HeroSlider from "@/components/hero-slider";
import Header from "@/components/header";
import LiveChannels from "@/components/live-channels";
import NewEpisodes from "@/components/new-episodes";
import LivePrograms from "@/components/live-programs";
import NewsSection from "@/components/news-section";
import SeriesGrid from "@/components/series-grid";
import SportsSection from "@/components/sports-section";
import AdBanner from "@/components/ad-banner";
import PopularShows from "@/components/popular-shows";
import Footer from "@/components/footer";
import RoyaTVPromo from "@/components/roya-tv-promo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <Header />
      <HeroSlider />
      <div className="container mx-auto">
        <LiveChannels />
        <NewEpisodes />
        <LivePrograms />
        <AdBanner
          text="شاهد رؤيا بلس واستمتع بمشاهدة حصرية"
          image="/placeholder.svg?height=100&width=1200&text=Ad Banner"
        />
        <SeriesGrid title="مسلسلات رمضان" />

        <AdBanner
          text="استمتع بمشاهدة أفضل المسلسلات العربية"
          image="/placeholder.svg?height=100&width=1200&text=Ad Banner 2"
        />
        <SportsSection />
        <PopularShows title="الأكثر مشاهدة" />
        <AdBanner
          text="حمّل تطبيق رؤيا الآن"
          image="/placeholder.svg?height=100&width=1200&text=Ad Banner 3"
        />
        <SeriesGrid title="مسلسلات تركية" />
        <SeriesGrid title="مسلسلات مصرية" />
      </div>
      <RoyaTVPromo />
      <NewsSection />

      <Footer />
    </div>
  );
}
