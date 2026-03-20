"use client";

import type { FormEvent } from "react";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const message = String(fd.get("message") ?? "");
    const subject = encodeURIComponent("Quote request: Done-Right Cleaning");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:hello@donerightcleaning.example?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "mt-1.5 min-h-[46px] w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-[0.9375rem] text-neutral-900 shadow-[inset_0_1px_1px_rgba(0,0,0,0.04)] transition placeholder:text-neutral-400 hover:border-neutral-400 focus:border-[#b8923f] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/25";

  const labelClass = "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-neutral-500";

  return (
    <section id="contact" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_50px_-24px_rgba(0,0,0,0.12)] sm:rounded-3xl">
          <div className="h-1 bg-gradient-to-r from-[#c5a059] via-[#d4b76a] to-[#c5a059]" aria-hidden />
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="border-b border-neutral-200 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[#b8923f]">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Request a quote
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]">
                Leave your details. We will respond with availability and a rough price range when we can.
              </p>
              <ul className="mt-10 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-[#b8923f]">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                      Phone
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="mt-0.5 block text-base font-semibold text-neutral-900 hover:text-[#b8923f]"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-[#b8923f]">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                      Email
                    </p>
                    <a
                      href="mailto:hello@donerightcleaning.example"
                      className="mt-0.5 block break-all text-base font-semibold text-neutral-900 hover:text-[#b8923f]"
                    >
                      hello@donerightcleaning.example
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-[#b8923f]">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                      Hours
                    </p>
                    <p className="mt-0.5 text-base font-semibold text-neutral-900">Mon–Sat · 8am–6pm</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[linear-gradient(180deg,#fff_0%,#fafafa_100%)] p-6 sm:p-10 lg:p-12">
              <div className="mb-6 border-b border-neutral-200/80 pb-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Quote form
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  <span className="text-[#b8923f]">*</span> Required to send.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full name <span className="text-[#b8923f]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    className={fieldClass}
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Job details
                  </label>
                  <p className="mt-1 text-xs text-neutral-500">Property type, size, and preferred times to reach you.</p>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${fieldClass} min-h-[128px] resize-y py-3`}
                    placeholder="Example: 2 bed condo downtown, monthly clean, weekday mornings…"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full touch-manipulation rounded-md bg-[#c5a059] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900 shadow-sm transition hover:bg-[#d4b76a] active:bg-[#b8954f]"
                >
                  Submit request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
