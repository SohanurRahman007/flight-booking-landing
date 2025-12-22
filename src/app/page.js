import BannerSection from "@/components/BannerSection ";
import HolidayPackages from "@/components/HolidayPackages";
import HowItWorks from "@/components/HowItWorks";
import CallToBookHeader from "@/components/shared/CallToBookHeader";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <CallToBookHeader />
      <Navbar />
      <BannerSection />
      <HolidayPackages />
      <HowItWorks />
    </div>
  );
}
