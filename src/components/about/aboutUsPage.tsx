import { Nav } from "../landing";
import AboutCTA from "./aboutCTA";
import AboutHero from "./aboutHero";
import DigitalFoundation from "./digitalFondation";
import WhyTeras from "./whyUs";

export default function AboutUs() {
  return (
    <main>
      <Nav />

      <AboutHero />

      <DigitalFoundation />

      <WhyTeras />

      <AboutCTA />
    </main>
  );
}
