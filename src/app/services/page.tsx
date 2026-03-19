import { ServicePhotos } from "@/components/ServicePhotos";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Homes, offices, and deep cleans—weekly visits, after-hours commercial, move-outs, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-[#b8923f]">Services</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">What we offer</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            This is how we usually group the work. Your quote still starts with a quick call—tell us size,
            pets, and what you’re tired of cleaning yourself.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[48px] touch-manipulation items-center justify-center rounded-full bg-[#c5a059] px-6 py-3 text-sm font-semibold text-neutral-900 transition active:bg-[#b8954f] sm:hover:bg-[#d4b76a]"
          >
            Get a quote
          </Link>
        </div>
      </section>
      <Services />
      <section className="bg-white px-4 pb-14 pt-4 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-[#b8923f]">Photos</p>
          <h2 className="mt-2 text-xl font-semibold text-neutral-900 sm:text-2xl">Recent work</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            A handful of kitchens, baths, and floors from jobs like yours.
          </p>
          <ServicePhotos />
        </div>
      </section>
      <WhyUs />
    </>
  );
}
