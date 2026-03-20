import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { getReviewsSorted } from "@/lib/reviews";

type Props = { id?: string };

export function Reviews({ id = "reviews" }: Props) {
  const items = getReviewsSorted();

  return (
    <section
      id={id}
      className="scroll-mt-24 overflow-x-hidden border-y border-neutral-200 bg-white px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#b8923f]">Reviews</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Word of mouth
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Pulled from Google and Facebook. People mention Nicole and the team by name. Swipe on your phone
            or use the arrows below.
          </p>
        </div>
        <ReviewsCarousel items={items} />
      </div>
    </section>
  );
}
