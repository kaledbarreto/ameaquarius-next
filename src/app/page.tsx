import AboutTransformation from "@/components/home/AboutTransformation";
import Achievements from "@/components/home/Achievements";
import Footer from "@/components/home/Footer";
import Governance from "@/components/home/Governance";
import Hero from "@/components/home/Hero";
import JoinUs from "@/components/home/JoinUs";
import Location from "@/components/home/Location";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutTransformation />
      <WhoWeAre />
      <Governance />
      <Achievements />
      <Location />
      <JoinUs />
      <Footer />
    </main>
  );
}
