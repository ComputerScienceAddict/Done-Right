import { greatVibes } from "@/lib/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080f14] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-14 lg:grid-cols-3">
        <div>
          <p className={`${greatVibes.className} text-3xl text-[#c5a059]`}>
            Done <span className="text-[#7dc3cc]">Right</span>
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#c5a059]/80">
            Cleaning Services
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Residential and commercial cleaning with attention to detail. Licensed, insured, and
            committed to a spotless finish.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/services" className="inline-block py-1.5 hover:text-[#7dc3cc]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="inline-block py-1.5 hover:text-[#7dc3cc]">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="inline-block py-1.5 hover:text-[#7dc3cc]">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="inline-block py-1.5 hover:text-[#7dc3cc]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <a href="tel:+15551234567" className="inline-block py-1.5 break-all hover:text-[#c5a059]">
                (555) 123-4567
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@donerightcleaning.example"
                className="inline-block py-1.5 break-all hover:text-[#c5a059]"
              >
                hello@donerightcleaning.example
              </a>
            </li>
            <li className="pt-2 text-slate-500">Mon–Sat · 8am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Done-Right Cleaning Services. All rights reserved.
      </div>
    </footer>
  );
}
