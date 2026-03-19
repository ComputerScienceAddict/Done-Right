import { Contact } from "@/components/Contact";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
      <GalleryPreview />
      <Contact />
    </>
  );
}
