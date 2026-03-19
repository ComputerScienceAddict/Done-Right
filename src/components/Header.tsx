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
    ? "text-[#c5a059]"
    : "text-slate-300 transition hover:text-[#c5a059]";
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c1419]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#0c1419]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <Link href="/" className="group flex min-w-0 shrink-0 flex-col leading-none">
          <span className={`${greatVibes.className} text-[clamp(1.75rem,6vw,2.5rem)] text-[#c5a059] sm:text-4xl`}>
            Done
            <span className={`${greatVibes.className} text-[#7dc3cc]`}> Right</span>
          </span>
          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-[#c5a059]/90">
            Cleaning Services
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`text-sm font-medium ${linkClass(active)}`}>
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-[#c5a059] px-5 py-2.5 text-sm font-semibold text-[#0c1419] shadow-lg shadow-[#c5a059]/20 transition hover:bg-[#d4b76a]"
          >
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center rounded-lg border border-white/15 p-2 text-slate-200 md:hidden"
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
          className="max-h-[min(70vh,calc(100dvh-3.5rem))] overflow-y-auto border-t border-white/10 bg-[#0c1419] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 md:hidden"
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
              className="mt-3 min-h-[48px] rounded-full bg-[#c5a059] py-3 text-center text-base font-semibold text-[#0c1419] touch-manipulation"
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
