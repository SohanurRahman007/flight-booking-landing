import BannerSection from "@/components/BannerSection ";
import CallToBookHeader from "@/components/shared/CallToBookHeader";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <CallToBookHeader />
      <Navbar />
      <BannerSection />
    </div>
  );
}
