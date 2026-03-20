/** Real job photos: `01.png` is the brand logo and is excluded; we use `02.png` … `22.png` only. */
export type GalleryItem = { src: string; alt: string };

const ALT: string[] = [
  "Bright residential kitchen with tile floors and island sink",
  "Stainless French-door refrigerator and white cabinetry",
  "Professional gas range, blue tile backsplash, and black countertops",
  "Spotless built-in oven with door open and glass shining",
  "Open oven interior with racks after a deep clean",
  "Another angle of a clean oven and white kitchen cabinets",
  "Wide view of a modern kitchen with under-cabinet lighting",
  "Luxury shower with glass door and marble-look tile",
  "White tiled shower base and chrome fixtures",
  "Freestanding soaking tub and white wall tile",
  "Modern bathroom vanity with patterned floor tile",
  "Bathroom with wood vanity, tub, and striped shower curtain",
  "Laundry room with patterned floor tile and washer",
  "Clean bedroom loft bed, desk, and vacuumed carpet",
  "Empty room with glossy hardwood floors and natural light",
  "Warm wood-look floors reflecting sunlight after cleaning",
  "Kitchen with light wood cabinets and tiled island sink",
  "Bathroom detail with toilet, vanity, and clean surfaces",
  "Residential kitchen and view toward a clean bathroom",
  "Another pristine kitchen angle with appliances",
  "Polished floors and bright trim in a finished room",
];

/** Files 02–22 (21 photos). Index 0 = 02.png … index 20 = 22.png */
export const galleryItems: GalleryItem[] = ALT.map((alt, i) => ({
  src: `/images/gallery/${String(i + 2).padStart(2, "0")}.png`,
  alt,
}));

/** Hero: `08.png` (kitchen wide shot) */
export const heroImage = "/images/gallery/08.png";
export const heroImageAlt =
  "Wide view of a modern kitchen with under-cabinet lighting after cleaning";

/** Home preview: six shots spread across the set */
export const previewIndices = [0, 3, 7, 11, 15, 19];
