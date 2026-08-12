const reasons = [
  {
    number: "01",
    title: "Business First",
    description:
      "We understand your business and goals before we start designing.",
  },
  {
    number: "02",
    title: "Built to Build Trust",
    description:
      "Every detail is designed to make your company look credible and professional.",
  },
  {
    number: "03",
    title: "SEO Ready",
    description:
      "Search visibility is considered from the foundation, not added later.",
  },
  {
    number: "04",
    title: "High Performance",
    description:
      "We focus on speed, responsiveness, and a smooth user experience.",
  },
  {
    number: "05",
    title: "Secure & Reliable",
    description:
      "Your digital presence is built with security and reliability in mind.",
  },
  {
    number: "06",
    title: "Ready to Grow",
    description:
      "Your digital foundation can evolve as your business and goals change.",
  },
];

export default function WhyTeras() {
  return (
    <section className="bg-[#f7f6f3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Intro */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#9b8061]">
              Why Teras Software?
            </p>

            <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.045em] text-[#151515] sm:text-5xl">
              We Think <span className="text-[#9b8061]">Beyond</span> the
              Launch.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#666]">
              We don't just build something that looks good. We build a digital
              foundation designed to support your business.
            </p>

            <a
              href="/services"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#151515] transition-colors hover:text-[#9b8061]"
            >
              Explore Our Services
              <ArrowIcon />
            </a>
          </div>

          {/* Reasons */}
          <div className="grid border-t border-[#dedbd5] sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="border-b border-[#dedbd5] py-8 sm:px-7 sm:first:pl-0"
              >
                <span className="font-serif text-3xl text-[#b69b7a]">
                  {reason.number}
                </span>

                <h3 className="mt-6 text-base font-medium text-[#151515]">
                  {reason.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-[#686868]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M9 4L13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
