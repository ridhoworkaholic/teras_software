import { ArrowRight, ShieldCheck, Gauge, Layers3, Code2 } from "lucide-react";
import { CONTACT } from "../../lib/content";

const HERO_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description: "Keamanan sebagai prioritas",
  },
  {
    icon: Gauge,
    title: "Performance Driven",
    description: "Cepat, stabil, dan efisien",
  },
  {
    icon: Layers3,
    title: "Scalable Solutions",
    description: "Siap tumbuh bersama bisnis",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description: "Menggunakan teknologi terbaru",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#03070d]
        text-white
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/hero-banner.png')",
        }}
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[#03070d]/20
        "
      />

      {/* Left readability gradient */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-[#03070d]/30
          via-transparent
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-360
          flex-col
          px-6
          pt-22
          md:px-10
          lg:px-16
        "
      >
        {/* Hero content */}
        <div className="flex flex-1 items-center">
          <div
            className="
              w-full
              max-w-190
              pb-28
              pt-20
              md:pt-24
              lg:pb-32
            "
          >
            {/* Eyebrow */}
            <p
              className="
                mb-6
                text-xs
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#d8b47a]
                md:text-sm
              "
            >
              Build · Solve · Grow
            </p>

            {/* H1 */}
            <h1
              id="hero-title"
              className="
                max-w-212.5
                text-[44px]
                font-medium
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-[52px]
                md:text-[62px]
                lg:text-[70px]
                xl:text-[76px]
              "
            >
              Build a Digital Presence That Moves Your Business Forward.
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-162.5
                text-base
                leading-7
                text-white/70
                md:text-lg
                md:leading-8
              "
            >
              Teras Software membantu UMKM, startup, dan perusahaan membangun
              website, digital products, dan sistem digital yang cepat, aman,
              scalable, dan siap mendukung pertumbuhan bisnis.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start a project with Teras Software"
                className="
                  group
                  inline-flex
                  h-14
                  items-center
                  gap-8
                  rounded-md
                  bg-[#d9b77e]
                  px-7
                  text-sm
                  font-medium
                  text-[#11151b]
                  transition-all
                  duration-300
                  hover:bg-[#e5c58f]
                  hover:shadow-[0_15px_40px_rgba(217,183,126,0.15)]
                "
              >
                <span>Start a project</span>

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>
        </div>

        {/* Features */}
        <div
          className="
            border-t
            border-white/8
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {HERO_FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`
                    flex
                    items-center
                    gap-4
                    py-5
                    lg:py-6
                    lg:px-6
                    ${index === 0 ? "lg:pl-0" : ""}
                    ${
                      index !== 0
                        ? "border-t border-white/8 sm:border-t-0 sm:border-l"
                        : ""
                    }
                  `}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.4}
                    className="shrink-0 text-[#d8b47a]"
                  />

                  <div>
                    <p className="text-sm font-medium text-white/85">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
