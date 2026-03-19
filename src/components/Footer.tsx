import { greatVibes } from "@/lib/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#c5a059]/10 bg-[#08090c] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-14 lg:grid-cols-3">
        <div>
          <p className={`${greatVibes.className} text-3xl text-[#c5a059]`}>
            Done <span className="text-[#e8d5b5]">Right</span>
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#c5a059]/60">
            Cleaning Services
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9a918a]">
            Residential and commercial cleaning with attention to detail. Licensed, insured, and
            committed to a spotless finish.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e8d5b5]">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#9a918a]">
            <li>
              <Link href="/services" className="inline-block py-1.5 hover:text-[#c5a059]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="inline-block py-1.5 hover:text-[#c5a059]">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="inline-block py-1.5 hover:text-[#c5a059]">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="inline-block py-1.5 hover:text-[#c5a059]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e8d5b5]">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#9a918a]">
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
            <li className="pt-2 text-[#5e5850]">Mon–Sat · 8am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#c5a059]/5 py-6 text-center text-xs text-[#5e5850]">
        © {new Date().getFullYear()} Done-Right Cleaning Services. All rights reserved.
      </div>
    </footer>
  );
}
