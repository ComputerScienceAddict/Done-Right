import Image from "next/image";
import Link from "next/link";
import { galleryItems, previewIndices } from "@/lib/gallery";

export function GalleryPreview() {
  const items = previewIndices.map((i) => galleryItems[i]).filter(Boolean);

  return (
    <section className="border-y border-[#c5a059]/10 bg-[#08090c] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#c5a059]">Real work</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f0ebe3] sm:text-4xl">
              Photos from actual cleans
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#9a918a] sm:text-base">
              Kitchens, baths, floors, appliances—the kind of finished look we leave behind.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex min-h-[48px] shrink-0 touch-manipulation items-center justify-center rounded-full border border-[#c5a059]/30 px-6 py-3 text-sm font-semibold text-[#c5a059] transition active:bg-[#c5a059]/10 sm:hover:bg-[#c5a059]/10"
          >
            View full gallery
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#c5a059]/10 bg-[#14171f] sm:rounded-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover sm:transition sm:duration-500 sm:hover:scale-[1.03]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
