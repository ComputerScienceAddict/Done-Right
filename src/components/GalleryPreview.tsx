import Image from "next/image";
import Link from "next/link";
import { galleryItems, previewIndices } from "@/lib/gallery";

export function GalleryPreview() {
  const items = previewIndices.map((i) => galleryItems[i]).filter(Boolean);

  return (
    <section className="border-y border-neutral-200 bg-neutral-50 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#b8923f]">Gallery</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Jobs we’ve photographed
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              A few kitchens, baths, and floors from real visits—not stock images.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex min-h-[48px] shrink-0 touch-manipulation items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            All photos
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 bg-white sm:rounded-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover sm:transition sm:duration-500 sm:hover:scale-[1.02]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
