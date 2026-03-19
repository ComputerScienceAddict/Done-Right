import { greatVibes } from "@/lib/fonts";
import { heroImage, heroImageAlt } from "@/lib/gallery";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[min(100svh,56rem)] overflow-hidden bg-white px-4 py-16 sm:min-h-[78vh] sm:px-6 sm:py-28">
      <Image
        src={heroImage}
        alt={heroImageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/78 to-white" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-sm sm:tracking-[0.24em]">
          Homes & businesses
        </p>
        <h1 className="mt-3 max-w-3xl text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:mt-4 sm:text-5xl sm:leading-tight lg:text-6xl">
          A cleaner space,{" "}
          <span
            className={`${greatVibes.className} block pt-1 text-[2.1rem] font-normal leading-none text-[#c5a059] sm:inline sm:pt-0 sm:text-6xl lg:text-7xl`}
          >
            done right
          </span>
          <span className="text-neutral-400">.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg">
          We clean houses and small commercial spaces. You pick the day; we show up with our own supplies
          unless you want us to use yours. Ask us anything before we start.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full bg-[#c5a059] px-8 py-3.5 text-base font-semibold text-neutral-900 shadow-sm transition active:bg-[#b8954f] sm:w-auto sm:hover:bg-[#d4b76a]"
          >
            Get a quote
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full border border-neutral-300 bg-white/80 px-8 py-3.5 text-base font-medium text-neutral-800 backdrop-blur-sm transition active:bg-neutral-50 sm:w-auto sm:hover:border-neutral-400"
          >
            See what we do
          </Link>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-neutral-200 pt-8 sm:mt-16 sm:gap-10 sm:pt-10">
          <div className="min-w-0">
            <dt className="text-[0.65rem] uppercase tracking-wider text-neutral-500 sm:text-xs">In business</dt>
            <dd className="mt-1 truncate text-lg font-semibold text-neutral-900 sm:text-2xl">10+ yrs</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[0.65rem] uppercase tracking-wider text-neutral-500 sm:text-xs">Area</dt>
            <dd className="mt-1 truncate text-lg font-semibold text-[#c5a059] sm:text-2xl">Local</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[0.65rem] uppercase tracking-wider text-neutral-500 sm:text-xs">Insured</dt>
            <dd className="mt-1 truncate text-lg font-semibold text-neutral-900 sm:text-2xl">Yes</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
