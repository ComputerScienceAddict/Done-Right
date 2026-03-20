"use client";

import { greatVibes } from "@/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

function linkClass(active: boolean) {
  return active
    ? "text-[#b8923f]"
    : "text-neutral-600 transition hover:text-neutral-900";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:gap-6 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-4 sm:pr-2"
        >
          <span
            className={`${greatVibes.className} flex shrink-0 items-baseline gap-1.5 text-[clamp(1.85rem,5vw,2.75rem)] leading-none text-[#c5a059] transition group-hover:text-[#b8923f] sm:gap-2`}
          >
            <span>Done</span>
            <span className={`${greatVibes.className} text-neutral-900`}>Right</span>
          </span>
          <span className="hidden h-9 w-px shrink-0 self-center bg-neutral-200 sm:block" aria-hidden />
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:whitespace-nowrap">
            Cleaning Services
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:gap-2 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${linkClass(active)} ${
                  active ? "bg-neutral-100" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-[#c5a059] px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-[#d4b76a] lg:ml-3"
          >
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center rounded-lg border border-neutral-200 p-2 text-neutral-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[min(70vh,calc(100dvh-3.5rem))] overflow-y-auto border-t border-neutral-200 bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-2 py-3 text-base font-medium touch-manipulation ${linkClass(active)}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-3 min-h-[48px] rounded-full bg-[#c5a059] py-3 text-center text-base font-semibold text-neutral-900 touch-manipulation"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
