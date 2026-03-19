import { ServicePhotos } from "@/components/ServicePhotos";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Homes, offices, and deep cleans—weekly visits, after-hours commercial, ovens, grout, move-outs, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#0f172a] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-[#c5a059]">What we offer</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Services</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Below is how we usually split the work—still, every quote starts with a conversation. Tell us
            the square footage, pets, and what you want off your plate.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[48px] touch-manipulation items-center justify-center rounded-full bg-[#c5a059] px-6 py-3 text-sm font-semibold text-[#0c1419] transition active:bg-[#b8954f] sm:hover:bg-[#d4b76a]"
          >
            Request a quote
          </Link>
        </div>
      </section>
      <Services />
      <section className="bg-[#0f172a] px-4 pb-14 pt-4 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-[#7dc3cc]">From recent jobs</p>
          <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Kitchens, baths & floors</h2>
          <p className="mt-2 max-w-2xl text-slate-400">
            A few real spaces we&apos;ve finished—same attention to detail on every booking.
          </p>
          <ServicePhotos />
        </div>
      </section>
      <WhyUs />
    </>
  );
}
