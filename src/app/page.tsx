import { Contact } from "@/components/Contact";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <GalleryPreview />
      <Contact />
    </>
  );
}
