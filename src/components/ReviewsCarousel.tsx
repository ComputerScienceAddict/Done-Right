"use client";

import type { Review } from "@/lib/reviews";
import { useCallback, useEffect, useRef, useState } from "react";

function Stars() {
  return (
    <span className="text-sm tracking-tight text-[#c5a059]" aria-hidden>
      ★★★★★
    </span>
  );
}

function SourceBadge({ source }: { source: Review["source"] }) {
  const label = source === "google" ? "Google" : "Facebook";
  return (
    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-300">
      {label}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-[#162e38]/90 to-[#13252e]/95 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:min-h-[260px] sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-2">
        <div className="min-w-0">
          <p className="text-base font-semibold leading-tight text-white sm:text-[1.05rem]">{review.name}</p>
          <p className="mt-1 text-xs text-slate-500">{review.dateLabel}</p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <SourceBadge source={review.source} />
          {review.rating === 5 && <Stars />}
          {review.verified && (
            <span className="rounded-full bg-[#7dc3cc]/15 px-2 py-0.5 text-[0.65rem] font-semibold text-[#7dc3cc]">
              Verified
            </span>
          )}
        </div>
      </div>
      <blockquote className="mt-4 flex-1 border-l-2 border-[#c5a059]/40 pl-3 text-[0.9375rem] leading-relaxed text-slate-300 sm:pl-4 sm:text-sm">
        <p className="text-pretty [overflow-wrap:anywhere]">&ldquo;{review.text}&rdquo;</p>
      </blockquote>
    </article>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

type Props = { items: Review[] };

export function ReviewsCarousel({ items }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = items.length;

  const scrollToIndex = useCallback(
    (i: number) => {
      const root = scrollerRef.current;
      if (!root || !total) return;
      const clamped = Math.max(0, Math.min(i, total - 1));
      const slide = root.children[clamped] as HTMLElement | undefined;
      slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setIndex(clamped);
    },
    [total],
  );

  const syncIndexFromScroll = useCallback(() => {
    const root = scrollerRef.current;
    if (!root || !total) return;
    const center = root.scrollLeft + root.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < root.children.length; i++) {
      const el = root.children[i] as HTMLElement;
      const mid = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(mid - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    setIndex(best);
  }, [total]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    let t: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(syncIndexFromScroll, 60);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      root.removeEventListener("scroll", onScroll);
    };
  }, [syncIndexFromScroll, total]);

  if (!total) return null;

  return (
    <div className="relative mt-8 sm:mt-12">
      {/* Bleed carousel to screen edges on small phones for easier swipe */}
      <div className="relative -mx-4 sm:mx-0">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#0f172a] to-transparent sm:w-12 md:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#0f172a] to-transparent sm:w-12 md:w-16"
          aria-hidden
        />

        <div
          ref={scrollerRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              scrollToIndex(index - 1);
            }
            if (e.key === "ArrowRight") {
              e.preventDefault();
              scrollToIndex(index + 1);
            }
          }}
          className="reviews-scroller touch-pan-x flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden scroll-smooth scroll-pl-[max(1rem,env(safe-area-inset-left))] scroll-pr-[max(1rem,env(safe-area-inset-right))] pb-3 pl-4 pr-4 pt-1 outline-none focus-visible:ring-2 focus-visible:ring-[#7dc3cc]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 sm:pb-4 sm:pt-2 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((review, i) => (
            <div
              key={review.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Review ${i + 1} of ${total}`}
              className="w-[min(22rem,calc(100vw-2.5rem))] shrink-0 snap-center sm:w-[min(100%,24rem)] md:w-[min(100%,26rem)]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Review {index + 1} of {total}
      </p>

      <div className="mt-5 flex flex-col items-center gap-4 pb-[env(safe-area-inset-bottom)] sm:mt-6">
        <div className="flex w-full max-w-md items-center justify-between gap-2 px-1 sm:max-w-lg sm:gap-3">
          <button
            type="button"
            onClick={() => scrollToIndex(index - 1)}
            disabled={index <= 0}
            className="inline-flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center rounded-full border border-white/15 bg-[#13252e]/90 text-[#c5a059] shadow-lg transition enabled:active:scale-95 enabled:hover:border-[#c5a059]/40 enabled:hover:bg-[#1a3a45] disabled:cursor-not-allowed disabled:opacity-35 sm:h-11 sm:w-11"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6 sm:h-5 sm:w-5" />
          </button>
          <p className="min-w-0 flex-1 text-center text-base tabular-nums text-slate-400 sm:text-sm">
            <span className="font-semibold text-[#c5a059]">{index + 1}</span>
            <span className="text-slate-500"> / {total}</span>
          </p>
          <button
            type="button"
            onClick={() => scrollToIndex(index + 1)}
            disabled={index >= total - 1}
            className="inline-flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center rounded-full border border-white/15 bg-[#13252e]/90 text-[#c5a059] shadow-lg transition enabled:active:scale-95 enabled:hover:border-[#c5a059]/40 enabled:hover:bg-[#1a3a45] disabled:cursor-not-allowed disabled:opacity-35 sm:h-11 sm:w-11"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6 sm:h-5 sm:w-5" />
          </button>
        </div>

        <div
          className="flex max-w-full justify-center gap-0.5 overflow-x-auto overflow-y-hidden px-3 py-2 [scrollbar-width:none] sm:justify-start sm:px-2 [&::-webkit-scrollbar]:hidden"
          aria-label="Jump to a review"
        >
          {items.map((r, i) => (
            <button
              key={r.id}
              type="button"
              aria-current={i === index ? "true" : undefined}
              aria-label={`Go to review ${i + 1} of ${total}`}
              onClick={() => scrollToIndex(i)}
              className={`flex min-h-[44px] min-w-[44px] shrink-0 touch-manipulation items-center justify-center rounded-full p-3 transition active:bg-white/5 ${
                i === index ? "bg-[#c5a059]/15" : ""
              }`}
            >
              <span
                className={`block rounded-full transition ${
                  i === index
                    ? "h-2 w-8 bg-[#c5a059] shadow-[0_0_12px_rgba(197,160,89,0.45)]"
                    : "h-2 w-2 bg-white/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
