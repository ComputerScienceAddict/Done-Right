import Image from "next/image";
import { galleryItems } from "@/lib/gallery";

const idx = [0, 3, 7, 10, 14, 18];

export function ServicePhotos() {
  const photos = idx.map((i) => galleryItems[i]).filter(Boolean);

  return (
    <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {photos.map((item) => (
        <figure
          key={item.src}
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
