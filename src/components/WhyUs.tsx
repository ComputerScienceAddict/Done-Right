const points = [
  {
    title: "We don\u2019t wing it",
    body:
      "Written checklist each visit\u2014kitchen, baths, floors, high-touch spots. If you want baseboards or the inside of the microwave every time, it goes on the list so we\u2019re not guessing what \u201Cclean\u201D means at your place.",
  },
  {
    title: "Same people you\u2019re okay giving a key to",
    body:
      "Vetted, trained in-house\u2014not a random gig app rotation. Alarm codes, gate clickers, \u201Cthe dog sounds mean but he\u2019s a marshmallow\u201D\u2014we listen once and remember.",
  },
  {
    title: "Early, late, or weekend",
    body:
      "Shops after close, apartments before work, Saturdays when that\u2019s what fits. If we have to slide a day, we tell you\u2014we don\u2019t go quiet on text.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 border-y border-[#c5a059]/10 bg-[#08090c] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[#c5a059]">Why hire us</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f0ebe3] sm:text-4xl">
              No speeches—just a clean space
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#9a918a] sm:text-base">
              We&apos;re not here to sell you a &ldquo;wellness journey.&rdquo; We&apos;re on time, we bring supplies unless you
              want ours put away, and we leave the place smelling like nothing weird—just clean. Missed a
              spot? Tell us and we fix it.
            </p>
          </div>
          <ul className="space-y-7 sm:space-y-8">
            {points.map((p) => (
              <li key={p.title} className="border-l-2 border-[#c5a059]/40 pl-4 sm:pl-5">
                <h3 className="text-[0.95rem] font-semibold leading-snug text-[#f0ebe3] sm:text-base">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9a918a]">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
