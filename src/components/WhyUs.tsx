const points = [
  {
    title: "We don’t wing it",
    body:
      "Written checklist each visit—kitchen, baths, floors, high-touch spots. If you want baseboards or the inside of the microwave every time, it goes on the list so we’re not guessing what “clean” means at your place.",
  },
  {
    title: "Same people you’re okay giving a key to",
    body:
      "Vetted, trained in-house—not a random gig app rotation. Alarm codes, gate clickers, “the dog sounds mean but he’s a marshmallow”—we listen once and remember.",
  },
  {
    title: "Early, late, or weekend",
    body:
      "Shops after close, apartments before work, Saturdays when that’s what fits. If we have to slide a day, we tell you—we don’t go quiet on text.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 border-y border-white/10 bg-[#0c1419] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[#7dc3cc]">Why hire us</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              No speeches—just a clean space
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              We’re not here to sell you a “wellness journey.” We’re on time, we bring supplies unless you
              want ours put away, and we leave the place smelling like nothing weird—just clean. Missed a
              spot? Tell us and we fix it.
            </p>
          </div>
          <ul className="space-y-7 sm:space-y-8">
            {points.map((p) => (
              <li key={p.title} className="border-l-2 border-[#c5a059]/50 pl-4 sm:pl-5">
                <h3 className="text-[0.95rem] font-semibold leading-snug text-white sm:text-base">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
