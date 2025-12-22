import BannerSection from "@/components/BannerSection ";
import HolidayPackages from "@/components/HolidayPackages";
import HowItWorks from "@/components/HowItWorks";
import PopularDestinations from "@/components/PopularDestinations";
import CallToBookHeader from "@/components/shared/CallToBookHeader";
import Navbar from "@/components/shared/Navbar";
import SimplifyingTravel from "@/components/SimplifyingTravel";

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
    </div>
  );
}
