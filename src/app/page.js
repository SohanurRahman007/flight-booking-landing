import BannerSection from "@/components/BannerSection ";
import HolidayPackages from "@/components/HolidayPackages";
import HowItWorks from "@/components/HowItWorks";
import ImageSliderSection from "@/components/ImageSliderSection";
import LatestInsights from "@/components/LatestInsights";
import PopularDestinations from "@/components/PopularDestinations";
import ServicesGrid from "@/components/ServicesGrid";
import CallToBookHeader from "@/components/shared/CallToBookHeader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SimplifyingTravel from "@/components/SimplifyingTravel";
import TopAirlines from "@/components/TopAirlines";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <CallToBookHeader />
      <Navbar />
      <BannerSection />
      <HolidayPackages />
      <HowItWorks />
      <PopularDestinations />
      <SimplifyingTravel />
      <TopAirlines />
      <WhyChooseUs />
      <ServicesGrid />
      <LatestInsights />
      <ImageSliderSection />
      <Footer />
    </div>
  );
}
