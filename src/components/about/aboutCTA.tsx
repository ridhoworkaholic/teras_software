export default function AboutCTA() {
  return (
    <section className="px-6 pb-6 sm:px-8 sm:pb-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#0c0c0c]">
        <div className="relative px-7 py-16 sm:px-12 sm:py-20 lg:px-16">
          {/* subtle ambient light */}
          <div
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#d9c1a0]/[0.05] blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d9c1a0]">
                Ready to Grow?
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl">
                Let's Build Your{" "}
                <span className="text-[#d9c1a0]">Digital Foundation.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
                Not just a website. A digital presence that helps your business
                get found, trusted, and chosen.
              </p>
            </div>

            <div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-4 rounded-lg bg-[#d9c1a0] px-6 py-3.5 text-sm font-medium text-[#111] transition-transform hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowIcon />
              </a>

              <p className="mt-4 text-center text-xs text-white/35">
                Free consultation · No obligation
              </p>
            </div>
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
