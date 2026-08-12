import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "../../lib/content";

const NAV_LINKS = [
  { label: "Services", href: "/service" },
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="
          h-22
          border-b border-white/8
          bg-[#03070d]/80
          backdrop-blur-xl
        "
      >
        <div className="mx-auto flex h-full w-full max-w-360 items-center px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <a
            href="/"
            aria-label="Teras Software"
            className="flex items-baseline gap-2"
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
                text-[11px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/50
              "
            >
              SOFTWARE
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="ml-auto hidden items-center md:flex">
            <div className="flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    text-sm
                    font-normal
                    text-white/65
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-10
                inline-flex
                h-12.5
                items-center
                rounded-md
                border
                border-white/10
                bg-white/6
                px-7
                text-sm
                font-medium
                text-white
                transition-all
                duration-200
                hover:border-white/18
                hover:bg-white/10
              "
            >
              Start a project
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              ml-auto
              rounded-md
              border
              border-white/10
              bg-white/5
              p-2.5
              text-white
              md:hidden
            "
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={1.7} />
            ) : (
              <Menu size={20} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="
              border-b
              border-white/8
              bg-[#03070d]/95
              px-6
              py-5
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    rounded-md
                    px-3
                    py-3
                    text-sm
                    text-white/65
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              ))}

              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="
                  mt-3
                  rounded-md
                  bg-[#d9b77e]
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-[#11151b]
                "
              >
                Start a project
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
