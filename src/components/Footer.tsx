import { greatVibes } from "@/lib/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-14 lg:grid-cols-3">
        <div>
          <p className={`${greatVibes.className} text-3xl text-[#c5a059]`}>
            Done <span className="text-neutral-800">Right</span>
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Cleaning Services
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
            Local cleaning for homes and small businesses. Licensed and insured; ask when you call.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-800">Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li>
              <Link href="/services" className="inline-block py-1.5 hover:text-neutral-900">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="inline-block py-1.5 hover:text-neutral-900">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="inline-block py-1.5 hover:text-neutral-900">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="inline-block py-1.5 hover:text-neutral-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-800">Reach us</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li>
              <a href="tel:+15551234567" className="inline-block py-1.5 break-all hover:text-[#b8923f]">
                (555) 123-4567
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@donerightcleaning.example"
                className="inline-block py-1.5 break-all hover:text-[#b8923f]"
              >
                hello@donerightcleaning.example
              </a>
            </li>
            <li className="pt-2 text-neutral-500">Mon–Sat · 8am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-100 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Done-Right Cleaning Services
      </div>
    </footer>
  );
}
