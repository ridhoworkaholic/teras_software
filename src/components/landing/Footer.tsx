import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { CONTACT } from "../../lib/content";

const FOOTER_SERVICES = [
  {
    label: "Website Development",
    href: "/service",
  },
  {
    label: "UI/UX Design",
    href: "/service",
  },
  {
    label: "App Development",
    href: "/service",
  },
];

const FOOTER_NAVIGATION = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        border-t
        border-white/[0.08]
        bg-[#02050a]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          md:px-10
          lg:px-16
        "
      >
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div
          className="
            grid
            gap-12
            py-16
            md:grid-cols-[1.5fr_1fr_1fr_1fr]
            md:gap-10
            lg:py-20
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="/"
              aria-label="Teras Software home"
              className="
                inline-flex
                items-baseline
                gap-2
              "
            >
              <span
                className="
                  text-[20px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white
                "
              >
                TERAS
              </span>

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-white/40
                "
              >
                SOFTWARE
              </span>
            </a>

            <p
              className="
                mt-6
                text-sm
                leading-6
                text-white/40
              "
            >
              We build digital infrastructure that helps businesses establish a
              stronger online presence, earn trust, and grow.
            </p>

            <p
              className="
                mt-5
                text-xs
                leading-5
                text-white/25
              "
            >
              Websites, digital products, SEO, performance, security, and
              long-term digital support.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col gap-3"
            >
              {FOOTER_NAVIGATION.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    w-fit
                    text-sm
                    text-white/50
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Services
            </h2>

            <nav
              aria-label="Footer services"
              className="mt-5 flex flex-col gap-3"
            >
              {FOOTER_SERVICES.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="
                    w-fit
                    text-sm
                    text-white/50
                    transition-colors
                    hover:text-white
                  "
                >
                  {service.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Contact
            </h2>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-white/50
                  transition-colors
                  hover:text-white
                "
              >
                <Mail size={14} strokeWidth={1.5} aria-hidden="true" />

                {CONTACT.email}

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="
                    opacity-0
                    transition-opacity
                    group-hover:opacity-100
                  "
                  aria-hidden="true"
                />
              </a>

              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  text-white/50
                  transition-colors
                  hover:text-white
                "
              >
                <MessageCircle size={14} strokeWidth={1.5} aria-hidden="true" />
                WhatsApp
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="
                  mt-2
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-[#d8b47a]
                  transition-colors
                  hover:text-white
                "
              >
                Start a project
                <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER BOTTOM
        ===================================================== */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.08]
            py-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-xs text-white/25">
            © {currentYear} Teras Software. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-white/20">
              Digital Growth Infrastructure
            </span>

            <span className="h-3 w-px bg-white/10" aria-hidden="true" />

            <span className="text-xs text-white/20">Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
