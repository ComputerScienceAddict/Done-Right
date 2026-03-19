import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { getReviewsSorted } from "@/lib/reviews";

type Props = { id?: string };

export function Reviews({ id = "reviews" }: Props) {
  const items = getReviewsSorted();

  return (
    <section
      id={id}
      className="scroll-mt-24 overflow-x-hidden border-y border-[#c5a059]/10 bg-[#0d1017] px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#c5a059]">Reviews</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f0ebe3] sm:text-4xl">
            What clients say
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#9a918a] sm:text-base">
            Real feedback from Facebook recommendations and Google reviews—Nicole and the team are
            mentioned by name for thorough work, flexible scheduling, and homes that feel (and smell)
            genuinely clean. Swipe or use the arrows to browse.
          </p>
        </div>
        <ReviewsCarousel items={items} />
      </div>
    </section>
  );
}
