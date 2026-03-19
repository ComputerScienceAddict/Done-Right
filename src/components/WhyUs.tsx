const points = [
  {
    title: "We use a list",
    body:
      "Each visit hits the same rough checklist—kitchen, baths, floors, handles. If you want the microwave inside every time, we write it down so nobody’s guessing.",
  },
  {
    title: "Same crew when we can",
    body:
      "We hire and train our own people—not whoever’s closest on an app. Codes, keys, weird parking—we note it once.",
  },
  {
    title: "We’ll move the day if we have to",
    body:
      "Shops after close, apartments early, Saturdays if that’s what works. If we need to reschedule, we tell you. We don’t disappear on text.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 border-y border-neutral-200 bg-neutral-50 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[#b8923f]">Why us</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Straightforward cleaning
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
              On time, supplies in the truck unless you want otherwise. When we leave, it should smell like
              clean—not perfume. Something missed? Say so and we’ll fix it on the next visit or come back if
              it’s on us.
            </p>
          </div>
          <ul className="space-y-7 sm:space-y-8">
            {points.map((p) => (
              <li key={p.title} className="border-l-2 border-[#c5a059]/50 pl-4 sm:pl-5">
                <h3 className="text-[0.95rem] font-semibold leading-snug text-neutral-900 sm:text-base">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
