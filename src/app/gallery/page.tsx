import { GalleryGrid } from "@/components/GalleryGrid";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from real residential and commercial cleaning jobs.",
};

export default function GalleryPage() {
  return (
    <div className="bg-white px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-[#b8923f]">Gallery</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">Photos</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Real jobs—kitchens, appliances, bathrooms, floors. Not stock photography.
        </p>
        <p className="mt-6">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#b8923f] underline-offset-4 hover:underline"
          >
            Request a quote →
          </Link>
        </p>
        <div className="mt-10 sm:mt-12">
          <GalleryGrid />
        </div>
      </div>
    </div>
  );
}
