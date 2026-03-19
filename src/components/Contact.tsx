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
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#13252e] to-[#0c1419] shadow-2xl shadow-black/40 sm:rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-10 lg:p-12">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
                Get in touch
              </h2>
              <p className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-4xl">
                Ready for a cleaner space?
              </p>
              <p className="mt-4 text-slate-400">
                Tell us about your property and we&apos;ll follow up with availability and pricing.
              </p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li>
                  <span className="text-slate-500">Phone · </span>
                  <a href="tel:+15551234567" className="font-medium text-[#7dc3cc] hover:underline">
                    (555) 123-4567
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">Email · </span>
                  <a
                    href="mailto:hello@donerightcleaning.example"
                    className="font-medium text-[#7dc3cc] hover:underline"
                  >
                    hello@donerightcleaning.example
                  </a>
                </li>
                <li className="text-slate-500">Hours · Mon–Sat, 8am–6pm</li>
              </ul>
            </div>
            <div className="border-t border-white/10 bg-black/20 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-white/15 bg-[#0c1419]/80 px-4 py-3 text-base text-slate-100 placeholder:text-slate-600 focus:border-[#7dc3cc]/50 focus:outline-none focus:ring-2 focus:ring-[#7dc3cc]/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-white/15 bg-[#0c1419]/80 px-4 py-3 text-base text-slate-100 placeholder:text-slate-600 focus:border-[#7dc3cc]/50 focus:outline-none focus:ring-2 focus:ring-[#7dc3cc]/20"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 min-h-[120px] w-full resize-y rounded-xl border border-white/15 bg-[#0c1419]/80 px-4 py-3 text-base text-slate-100 placeholder:text-slate-600 focus:border-[#7dc3cc]/50 focus:outline-none focus:ring-2 focus:ring-[#7dc3cc]/20"
                    placeholder="Property type, size, preferred schedule…"
                  />
                </div>
                <button
                  type="submit"
                  className="min-h-[48px] w-full touch-manipulation rounded-full bg-[#c5a059] py-3.5 text-base font-semibold text-[#0c1419] transition active:bg-[#b8954f] sm:hover:bg-[#d4b76a]"
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
