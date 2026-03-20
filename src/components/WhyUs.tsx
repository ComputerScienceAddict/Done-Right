const points = [
  {
    title: "We use a list",
    body:
      "Every visit covers the same basics: kitchen, bathrooms, floors, and handles. If you want something every time (like the inside of the microwave), we put it on paper so no one has to remember it from memory.",
  },
  {
    title: "Same crew when we can",
    body:
      "Our people work for us, not off a random app. Gate codes, keys, where to park: you tell us once and we keep it on file.",
  },
  {
    title: "Flexible scheduling",
    body:
      "Stores after closing, apartments before work, Saturdays when that fits. If we have to move a day, we call or text. We do not go silent.",
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
              We show up when we say we will, with our own supplies unless you would rather we use yours.
              When we are done, the place should smell like nothing fancy, just clean. If we miss something,
              say so and we will make it right on the next visit or swing back if it was our oversight.
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
