const services = [
  {
    title: "Homes",
    kicker: "Regular or one-time",
    description:
      "Kitchens, baths, floors, baseboards. If you want the same people when we can staff it that way, say so. It helps when we already know the layout (and where the pets hide).",
  },
  {
    title: "Offices and retail",
    kicker: "Nights or weekends if you need it",
    description:
      "Trash, restrooms, break rooms, floors, and whatever else keeps the place presentable. We schedule around your hours instead of insisting on a 9-to-5 window.",
  },
  {
    title: "Deep cleans",
    kicker: "More than a quick tidy",
    description:
      "Move-in, move-out, dust after construction, or the full clean you keep postponing. Ovens, grout, inside the fridge. The kind of work that needs real time, not a fast once-over.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#b8923f]">Services</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Call or email with rough size, pets, and what you are tired of doing yourself. We will quote it
            in normal language. No good/better/best packages.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-6">
          {services.map((s) => (
            <li
              key={s.title}
              className="flex h-full flex-col rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 sm:rounded-2xl sm:p-6"
            >
              <div className="border-l-[3px] border-[#c5a059] pl-4">
                <p className="text-sm text-neutral-500">{s.kicker}</p>
                <h3 className="mt-1 text-lg font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
