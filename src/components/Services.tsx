const services = [
  {
    title: "Homes",
    kicker: "Weekly, biweekly, or one-off",
    description:
      "Kitchens, baths, floors, and the stuff that collects dust on baseboards. Same team when you want it so we learn your house—not a random rotation every time.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Offices & shops",
    kicker: "After hours if you need it",
    description:
      "Desks, break rooms, restrooms, trash, floors—whatever keeps your place presentable for staff and customers. We’ll match the rhythm of your week, not the other way around.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Deep cleans & resets",
    kicker: "When “tidy” isn’t enough",
    description:
      "Move-in or move-out, post-renovation dust, or that spring clean you keep putting off. We hit ovens, grout, inside of fridges—wherever needs elbow grease, not a quick pass.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#0f172a] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#c5a059]">Services</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Three ways we show up
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            No packages named “Premium Elite.” Tell us what the space is and what’s driving you nuts—we’ll
            quote it plain.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-5">
          {services.map((s) => (
            <li
              key={s.title}
              className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#162e38]/90 to-[#13252e]/95 p-5 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition sm:rounded-2xl sm:p-7 md:hover:border-[#7dc3cc]/25"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0c1419] text-[#7dc3cc] ring-1 ring-white/10">
                {s.icon}
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-500">{s.kicker}</p>
              <h3 className="mt-1.5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
