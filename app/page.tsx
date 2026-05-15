import { Hero } from "@/components/sections/hero";
import { LEDMarquee } from "@/components/ui/led-marquee";
import { Transformation } from "@/components/sections/transformation";
import { Portfolio } from "@/components/sections/portfolio";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Transformation />
      <Portfolio />
      <FAQ />
      <FinalCTA />
      <LEDMarquee />
    </div>
  );
}
