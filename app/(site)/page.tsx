import Hero from "../components/Hero";
import Thesis from "../components/Thesis";
import CoreServices from "../components/CoreServices";
import Sectors from "../components/Sectors";
import PitchIntro from "../components/PitchIntro";

export default function Home() {
  return (
    <div>
      <Hero />
      <hr className="section-divider" />
      <Thesis />
      <hr className="section-divider" />
      <CoreServices />
      <hr className="section-divider" />
      <Sectors />
      <hr className="section-divider" />
      <PitchIntro />
    </div>
  );
}
