import { greatVibes } from "@/lib/fonts";
import { heroImage, heroImageAlt } from "@/lib/gallery";
import Image from "next/image";
import Link from "next/link";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0l1.8 8.2L22 10l-8.2 1.8L12 20l-1.8-8.2L2 10l8.2-1.8L12 0z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[min(100svh,56rem)] overflow-hidden px-4 py-16 sm:min-h-[78vh] sm:px-6 sm:py-28">
      <Image
        src={heroImage}
        alt={heroImageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090c]/95 via-[#0d1017]/90 to-[#08090c]/97" />
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#c5a059]/30 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-[#c5a059]/15 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden>
        <Sparkle className="absolute right-[12%] top-[18%] h-4 w-4 text-[#c5a059]/70" />
        <Sparkle className="absolute right-[8%] top-[28%] h-3 w-3 text-[#c5a059]/50" />
        <Sparkle className="absolute right-[18%] top-[36%] h-2.5 w-2.5 text-[#c5a059]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#c5a059] sm:text-sm sm:tracking-[0.3em]">
          Residential & commercial
        </p>
        <h1 className="mt-3 max-w-3xl text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-[#f0ebe3] sm:mt-4 sm:text-5xl sm:leading-tight lg:text-6xl">
          A cleaner space,{" "}
          <span
            className={`${greatVibes.className} block pt-1 text-[2.1rem] font-normal leading-none text-[#c5a059] sm:inline sm:pt-0 sm:text-6xl lg:text-7xl`}
          >
            done right
          </span>
          <span className="text-[#9a918a]">.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#c8c0b4] sm:mt-6 sm:text-lg">
          Trusted cleaning for homes and businesses. Flexible scheduling, eco-conscious options,
          and results you can see—and feel.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full bg-[#c5a059] px-8 py-3.5 text-base font-semibold text-[#08090c] shadow-xl shadow-[#c5a059]/20 transition active:bg-[#b8954f] sm:w-auto sm:hover:bg-[#d4b76a]"
          >
            Request a free quote
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full border border-[#c5a059]/30 px-8 py-3.5 text-base font-medium text-[#e8d5b5] transition active:bg-[#c5a059]/10 sm:w-auto sm:hover:border-[#c5a059]/50 sm:hover:bg-[#c5a059]/10"
          >
            Explore services
          </Link>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-[#c5a059]/15 pt-8 sm:mt-16 sm:gap-10 sm:pt-10">
          <div className="min-w-0">
            <dt className="text-[0.65rem] uppercase tracking-wider text-[#5e5850] sm:text-xs">Experience</dt>
            <dd className="mt-1 truncate text-lg font-semibold text-[#f0ebe3] sm:text-2xl">10+ yrs</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[0.65rem] uppercase tracking-wider text-[#5e5850] sm:text-xs">Satisfaction</dt>
            <dd className="mt-1 truncate text-lg font-semibold text-[#c5a059] sm:text-2xl">100%</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[0.65rem] uppercase tracking-wider text-[#5e5850] sm:text-xs">Coverage</dt>
            <dd className="mt-1 truncate text-lg font-semibold text-[#e8d5b5] sm:text-2xl">Local</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
