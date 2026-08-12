import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { CONTACT } from "../../lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
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
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.09]
            bg-[#080d14]
            px-7
            py-14
            md:px-12
            md:py-16
            lg:px-20
            lg:py-20
          "
        >
          {/* Subtle background detail */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-64
              w-64
              translate-x-1/3
              -translate-y-1/3
              rounded-full
              bg-[#d8b47a]/[0.035]
              blur-3xl
            "
            aria-hidden="true"
          />

          <div className="relative max-w-3xl">
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
              Start a conversation
            </p>

            <h2
              id="contact-title"
              className="
                mt-6
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Have a business
              <span className="text-white/35"> to build?</span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-6
                text-white/40
                md:text-base
                md:leading-7
              "
            >
              Tell us what you are building, what you need, and where you want
              your business to go. We will help you find the right digital
              solution.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  bg-[#d8b47a]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-[#11151b]
                  transition-transform
                  hover:-translate-y-0.5
                "
              >
                <MessageCircle size={17} strokeWidth={1.6} aria-hidden="true" />
                Start on WhatsApp
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  border
                  border-white/[0.1]
                  bg-white/[0.02]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white/65
                  transition-all
                  hover:border-white/[0.2]
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                <Mail size={17} strokeWidth={1.6} aria-hidden="true" />
                Send an email
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  text-white/30
                  transition-colors
                  hover:text-white/60
                "
              >
                {CONTACT.email}

                <ArrowUpRight size={12} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
