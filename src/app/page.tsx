import Slider from "@/components/slider/Slider";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import Counting from "@/components/counting/Counting";
import JewelleryCourse from "@/components/jewelleryCourse/JewelleryCourse";
import Gallery from "@/components/gallery/Gallery";
import Videos from "@/components/videos/Videos";
import { TestimonialSection } from "@/components/testimonials/testimonial";
import { OutcomesSection } from "@/components/afterLearning/outcomes";

export const metadata = {
  title: "Param Jewellery CAD Center | Rajkot",
  description:
    "Param Jewellery CAD Center is a complete solution of jewellery design, Accounting and computer courses in Rajkot. like JewelCAD 5.1, Rhinoceros, CorelDRAW CNC, CCC, Tally Prime and Miracle.",
  keywords:
    "Param Jewellery CAD Center, computer classes near me, jewellery design courses near me, JewelCAD 5.1, Rhinoceros, CCC, tally prime, miracle, coreldraw cnc, jewellery design courses in rajkot",
};

export default async function Home() {
  return (
    <main>
      {/* Slider section START */}
      <Slider />
      {/* Slider section END */}

      {/* Why Choose Us section START */}
      <WhyChooseUs />
      {/* Why Choose Us section END */}

      {/* Counting section START */}
      <Counting />
      {/* Counting section END */}

      {/* Jewellery Course section START */}
      <JewelleryCourse />
      {/* Jewellery Course section END */}

      <OutcomesSection />

      {/* Testimonials section START */}
      <TestimonialSection />
      {/* Testimonials section END */}

      {/* Gallery section START */}
      <Videos />
      {/* Gallery section END */}

      {/* Gallery section START */}
      <Gallery />
      {/* Gallery section END */}
    </main>
  );
}
