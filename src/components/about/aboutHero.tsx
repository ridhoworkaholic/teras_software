const principles = [
  {
    number: "01",
    title: "Business First",
    description: "We start with your goals, not templates.",
  },
  {
    number: "02",
    title: "Built for Growth",
    description: "Flexible foundations that can grow with you.",
  },
  {
    number: "03",
    title: "Performance Driven",
    description: "Fast, secure, and reliable digital experiences.",
  },
  {
    number: "04",
    title: "Long-term Partner",
    description: "We support and improve as your business grows.",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-[#d9c1a0]/[0.035] blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-white/[0.025] blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8 lg:pb-24">
        <div className="grid w-full items-end gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
          {/* Main content */}
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#d9c1a0]">
              About Teras Software
            </p>

            <h1 className="max-w-4xl font-serif text-[48px] leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              We Build Digital Foundations That Help Businesses{" "}
              <span className="text-[#d9c1a0]">Grow.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              We help businesses build a strong digital presence through
              strategy, design, technology, and continuous growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-4 rounded-lg bg-[#d9c1a0] px-6 py-3.5 text-sm font-medium text-[#111] transition-transform hover:-translate-y-0.5"
              >
                Let's Build Your Digital Foundation
                <ArrowIcon />
              </a>

              <a
                href="/work"
                className="inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3.5 text-sm text-white/75 transition-colors hover:text-white"
              >
                See Our Work
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Principles */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm lg:p-7">
            {principles.map((item, index) => (
              <div
                key={item.number}
                className={`flex gap-5 py-5 ${
                  index !== principles.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <span className="pt-0.5 text-xs text-white/35">
                  {item.number}
                </span>

                <div>
                  <h2 className="text-sm font-medium text-white">
                    {item.title}
                  </h2>

                  <p className="mt-1.5 text-sm leading-6 text-white/45">
                    {item.description}
                  </p>
                </div>
              </div>
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
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5H13.5M9.5 4.5L13.5 8.5L9.5 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
