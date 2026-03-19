import Image from "next/image";
import { galleryItems } from "@/lib/gallery";

export function GalleryGrid() {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {galleryItems.map((item) => (
        <li
          key={item.src}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#13252e] shadow-lg shadow-black/30 sm:rounded-xl"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
