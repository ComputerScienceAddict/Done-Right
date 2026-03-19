"use client";

import type { FormEvent } from "react";

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const message = String(fd.get("message") ?? "");
    const subject = encodeURIComponent("Quote request — Done-Right Cleaning");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:hello@donerightcleaning.example?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-[#c5a059]/12 bg-[#14171f] shadow-2xl shadow-black/50 sm:rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-10 lg:p-12">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
                Get in touch
              </h2>
              <p className="mt-3 text-2xl font-semibold leading-tight text-[#f0ebe3] sm:text-4xl">
                Ready for a cleaner space?
              </p>
              <p className="mt-4 text-[#9a918a]">
                Tell us about your property and we&apos;ll follow up with availability and pricing.
              </p>
              <ul className="mt-8 space-y-4 text-[#c8c0b4]">
                <li>
                  <span className="text-[#5e5850]">Phone · </span>
                  <a href="tel:+15551234567" className="font-medium text-[#c5a059] hover:underline">
                    (555) 123-4567
                  </a>
                </li>
                <li>
                  <span className="text-[#5e5850]">Email · </span>
                  <a
                    href="mailto:hello@donerightcleaning.example"
                    className="font-medium text-[#c5a059] hover:underline"
                  >
                    hello@donerightcleaning.example
                  </a>
                </li>
                <li className="text-[#5e5850]">Hours · Mon–Sat, 8am–6pm</li>
              </ul>
            </div>
            <div className="border-t border-[#c5a059]/10 bg-[#0d1017]/60 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#c8c0b4]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-[#c5a059]/15 bg-[#08090c]/80 px-4 py-3 text-base text-[#f0ebe3] placeholder:text-[#5e5850] focus:border-[#c5a059]/40 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/15"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#c8c0b4]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-[#c5a059]/15 bg-[#08090c]/80 px-4 py-3 text-base text-[#f0ebe3] placeholder:text-[#5e5850] focus:border-[#c5a059]/40 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/15"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#c8c0b4]">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 min-h-[120px] w-full resize-y rounded-xl border border-[#c5a059]/15 bg-[#08090c]/80 px-4 py-3 text-base text-[#f0ebe3] placeholder:text-[#5e5850] focus:border-[#c5a059]/40 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/15"
                    placeholder="Property type, size, preferred schedule…"
                  />
                </div>
                <button
                  type="submit"
                  className="min-h-[48px] w-full touch-manipulation rounded-full bg-[#c5a059] py-3.5 text-base font-semibold text-[#08090c] transition active:bg-[#b8954f] sm:hover:bg-[#d4b76a]"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
