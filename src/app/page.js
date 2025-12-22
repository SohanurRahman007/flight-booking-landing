import BannerSection from "@/components/BannerSection ";
import HolidayPackages from "@/components/HolidayPackages";
import HowItWorks from "@/components/HowItWorks";
import LatestInsights from "@/components/LatestInsights";
import PopularDestinations from "@/components/PopularDestinations";
import ServicesGrid from "@/components/ServicesGrid";
import CallToBookHeader from "@/components/shared/CallToBookHeader";
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
    </div>
  );
}
