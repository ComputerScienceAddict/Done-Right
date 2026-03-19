import { GalleryGrid } from "@/components/GalleryGrid";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from real residential and commercial cleaning jobs.",
};

export default function GalleryPage() {
  return (
    <div className="bg-[#08090c] px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-[#c5a059]">Portfolio</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#f0ebe3] sm:text-5xl">Gallery</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9a918a] sm:text-lg">
          Actual results—kitchens, appliances, bathrooms, floors, and whole rooms. Nothing stock; this is
          the kind of clean we deliver on site.
        </p>
        <p className="mt-6">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#c5a059] underline-offset-4 hover:underline"
          >
            Get a quote →
          </Link>
        </p>
        <div className="mt-10 sm:mt-12">
          <GalleryGrid />
        </div>
      </div>
    </div>
  );
}
