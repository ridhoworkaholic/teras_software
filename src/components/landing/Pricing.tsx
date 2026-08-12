import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { SERVICES, CONTACT } from "../../lib/content";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="
        border-t
        border-white/[0.08]
        bg-[#03070d]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          py-24
          md:px-10
          lg:px-16
          lg:py-32
        "
      >
        {/* Header */}
        <div className="max-w-2xl">
          <p
            className="
              flex
              items-center
              gap-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.24em]
              text-[#d8b47a]
            "
          >
            <span className="h-px w-8 bg-[#d8b47a]" aria-hidden="true" />
            Investment
          </p>

          <h2
            id="pricing-title"
            className="
              mt-5
              text-3xl
              font-medium
              tracking-[-0.045em]
              text-white
              sm:text-4xl
            "
          >
            Simple pricing.
            <span className="text-white/35"> Built around your needs.</span>
          </h2>

          <p className="mt-5 text-sm leading-6 text-white/40 md:text-base md:leading-7">
            Every business is different. Our pricing starts with the scope and
            goals of your project, so you only pay for what your business
            actually needs.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            md:grid-cols-3
          "
        >
          {SERVICES.map((service, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={service.id}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-xl
                  border
                  p-7
                  transition-all
                  duration-500
                  md:p-8
                  ${
                    isFeatured
                      ? "border-[#d8b47a]/30 bg-[#0a1018]"
                      : "border-white/[0.08] bg-[#080d14] hover:border-white/[0.15]"
                  }
                `}
              >
                {/* Featured indicator */}
                {isFeatured && (
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-[#d8b47a]/20
                      bg-[#d8b47a]/[0.06]
                      px-2.5
                      py-1
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-[#d8b47a]
                    "
                  >
                    <Sparkles size={11} strokeWidth={1.5} aria-hidden="true" />
                    Recommended
                  </div>
                )}

                {/* Number */}
                <span
                  className="
                    text-[10px]
                    font-medium
                    tracking-[0.2em]
                    text-white/20
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3
                  className="
                    mt-8
                    text-xl
                    font-medium
                    tracking-[-0.025em]
                    text-white
                  "
                >
                  {service.title}
                </h3>

                {/* Price */}
                <p
                  className="
                    mt-4
                    text-2xl
                    font-medium
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  {service.price}
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-white/[0.08]" />

                {/* Features */}
                <ul className="flex-grow space-y-3.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        leading-5
                        text-white/45
                      "
                    >
                      <Check
                        size={15}
                        strokeWidth={1.7}
                        className="
                          mt-0.5
                          shrink-0
                          text-[#d8b47a]
                        "
                        aria-hidden="true"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                {service.note && (
                  <p
                    className="
                      mt-7
                      border-t
                      border-white/[0.07]
                      pt-5
                      text-xs
                      leading-5
                      text-white/30
                    "
                  >
                    {service.note}
                  </p>
                )}

                {/* CTA */}
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.08]
                    pt-5
                    text-xs
                    font-medium
                    text-white/50
                    transition-colors
                    hover:text-white
                  "
                >
                  Discuss this solution
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* Bottom clarification */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.08]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs leading-5 text-white/30">
            Final pricing depends on project scope, requirements, and
            complexity.
          </p>

          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-medium
              text-[#d8b47a]
              transition-colors
              hover:text-white
            "
          >
            Get a project estimate
            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
