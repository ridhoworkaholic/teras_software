import {
  ArrowRight,
  Layers3,
  Smartphone,
} from "lucide-react";
import { useEffect } from "react";

import { CONTACT } from "../../lib/content";
import { Nav } from "../landing";

type Service = {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Website Development",
    description:
      "A professional website built around your business goals, customers, and long-term growth.",
    features: [
      "Business-focused structure",
      "Responsive experience",
      "SEO-ready architecture",
    ],
    icon: Layers3,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Clear and intuitive digital experiences that help people understand your business and take action.",
    features: [
      "Clear information architecture",
      "Intuitive user journeys",
      "Premium visual design",
    ],
    icon: Smartphone,
  },
  {
    number: "03",
    title: "App Development",
    description:
      "We build reliable digital applications that turn business ideas, workflows, and customer needs into useful products.",
    features: [
      "Custom digital products",
      "Mobile & web applications",
      "Scalable & maintainable systems",
    ],
    icon: Smartphone,
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Understand",
    description: "We learn about your business, audience, and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We turn those goals into a clear digital strategy.",
  },
  {
    number: "03",
    title: "Build",
    description: "We design and develop the experience around your needs.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We test, optimize, secure, and deploy your digital product.",
  },
  {
    number: "05",
    title: "Grow",
    description: "We monitor and improve the system as your business evolves.",
  },
];

const AUDIENCE = [
  {
    title: "Growing Businesses",
    description:
      "Establish a professional digital presence and reach more customers.",
  },
  {
    title: "Established Companies",
    description:
      "Modernize an existing digital presence and create a stronger experience.",
  },
  {
    title: "Startups",
    description:
      "Turn an idea into a clear, usable, and scalable digital product.",
  },
  {
    title: "Organizations",
    description:
      "Communicate information clearly through a professional digital platform.",
  },
];

const PRINCIPLES = [
  {
    title: "Clarity",
    description: "We make complex digital problems easier to understand.",
  },
  {
    title: "Craft",
    description: "Every detail is designed with purpose, not decoration.",
  },
  {
    title: "Foundation",
    description: "We build systems that can evolve with your business.",
  },
  {
    title: "Long-term",
    description: "Launch day is the beginning, not the finish line.",
  },
];

const FAQS = [
  {
    question: "How much does a website cost?",
    answer:
      "The investment depends on the scope, complexity, and goals of the project. We recommend starting with your business requirements before defining the right solution.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "Project timelines depend on the scope and required features. After understanding your requirements, we can provide a realistic timeline for your project.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can improve an existing website's structure, user experience, visual design, performance, SEO foundation, and overall digital presence.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Yes. SEO is considered as part of the digital foundation, including technical structure, semantic HTML, metadata, content architecture, performance, and search discoverability.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We can continue maintaining, monitoring, improving, and evolving your digital presence after launch.",
  },
  {
    question: "Can you work with an existing brand identity?",
    answer:
      "Yes. We can work within an existing brand system or help improve how your brand is translated into the digital experience.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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

      {children}
    </p>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/[0.08]
        bg-[#080d14]
        p-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/[0.15]
        hover:bg-[#0a1018]
        md:p-8
      "
    >
      <div className="flex items-start justify-between gap-6">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-lg
            border
            border-white/[0.08]
            bg-white/[0.025]
            text-white/55
            transition-colors
            duration-300
            group-hover:border-[#d8b47a]/30
            group-hover:text-[#d8b47a]
          "
        >
          <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
        </div>

        <span className="text-[10px] font-medium tracking-[0.2em] text-white/20">
          {service.number}
        </span>
      </div>

      <h2
        className="
          mt-8
          text-xl
          font-medium
          tracking-[-0.025em]
          text-white
          md:text-[22px]
        "
      >
        {service.title}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
        {service.description}
      </p>

      <ul className="mt-7 space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-xs text-white/55"
          >
            <span
              className="h-1 w-1 shrink-0 rounded-full bg-[#d8b47a]"
              aria-hidden="true"
            />

            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ProcessItem({ item }: { item: (typeof PROCESS)[number] }) {
  return (
    <article className="relative border-t border-white/[0.08] py-7">
      <div className="grid gap-4 md:grid-cols-[80px_180px_1fr] md:items-start md:gap-8">
        <span className="text-[10px] font-medium tracking-[0.2em] text-[#d8b47a]">
          {item.number}
        </span>

        <h3 className="text-lg font-medium text-white">{item.title}</h3>

        <p className="max-w-xl text-sm leading-6 text-white/40">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function AudienceCard({ item }: { item: (typeof AUDIENCE)[number] }) {
  return (
    <article
      className="
        border-t
        border-white/[0.08]
        py-6
      "
    >
      <h3 className="text-base font-medium text-white">{item.title}</h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-white/40">
        {item.description}
      </p>
    </article>
  );
}

function Principle({ item }: { item: (typeof PRINCIPLES)[number] }) {
  return (
    <article>
      <h3 className="text-base font-medium text-white">{item.title}</h3>

      <p className="mt-2 text-sm leading-6 text-white/40">{item.description}</p>
    </article>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Digital Services for Business Growth | Teras Software";

    const description =
      "Teras Software builds digital infrastructure for businesses through website development, UI/UX design, SEO, performance, security, analytics, and maintenance.";

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", `${window.location.origin}/services`);

    return () => {
      document.title = "Teras Software — Digital Growth Infrastructure";
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#03070d] text-white">
        <Nav/>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        aria-labelledby="services-title"
        className="
          px-6
          pb-20
          pt-32
          md:px-10
          md:pb-24
          lg:px-16
          lg:pb-32
          lg:pt-40
        "
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-5xl">
            <SectionLabel>Digital Services</SectionLabel>

            <h1
              id="services-title"
              className="
                mt-7
                max-w-5xl
                text-5xl
                font-medium
                leading-[1.02]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                lg:text-[76px]
              "
            >
              Digital infrastructure
              <span className="text-white/35">
                {" "}
                for businesses ready to grow.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-white/50
                md:text-lg
                md:leading-8
              "
            >
              We design and build the digital systems your business needs to be
              visible, trusted, and ready to grow.
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
                Start a project
                <ArrowRight size={16} strokeWidth={1.7} aria-hidden="true" />
              </a>

              <a
                href="/work"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  border
                  border-white/[0.1]
                  bg-white/[0.025]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white/70
                  transition-all
                  hover:border-white/[0.2]
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                See our work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE OVERVIEW
      ===================================================== */}
      <section
        aria-labelledby="services-overview-title"
        className="px-6 pb-28 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl">
            <SectionLabel>What We Build</SectionLabel>

            <h2
              id="services-overview-title"
              className="
                mt-5
                text-3xl
                font-medium
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              Everything your digital presence needs.
            </h2>

            <p className="mt-5 text-sm leading-6 text-white/40">
              From the first impression to the infrastructure behind it, we
              build digital experiences with business goals in mind.
            </p>
          </div>

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DIGITAL GROWTH INFRASTRUCTURE
      ===================================================== */}
      <section
        aria-labelledby="infrastructure-title"
        className="
          border-y
          border-white/[0.08]
          px-6
          py-24
          md:px-10
          lg:px-16
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            gap-14
            md:grid-cols-[0.8fr_1.2fr]
            md:gap-20
          "
        >
          <div>
            <SectionLabel>Digital Growth Infrastructure</SectionLabel>

            <h2
              id="infrastructure-title"
              className="
                mt-6
                text-3xl
                font-medium
                leading-tight
                tracking-[-0.045em]
                text-white
                sm:text-4xl
              "
            >
              More than a website.
              <span className="text-white/35"> A foundation for growth.</span>
            </h2>
          </div>

          <div>
            <p
              className="
                max-w-2xl
                text-base
                leading-7
                text-white/50
                md:text-lg
                md:leading-8
              "
            >
              Your digital presence should work as one connected system.
              Strategy, design, development, SEO, performance, security, and
              analytics should support the same business goal.
            </p>

            <div
              className="
                mt-10
                overflow-hidden
                rounded-xl
                border
                border-white/[0.08]
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="border-b border-white/[0.08] p-6 sm:border-r">
                  <span className="text-sm font-medium text-white">
                    Strategy
                  </span>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Understand the business before building.
                  </p>
                </div>

                <div className="border-b border-white/[0.08] p-6">
                  <span className="text-sm font-medium text-white">
                    Experience
                  </span>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Make the digital experience clear and useful.
                  </p>
                </div>

                <div className="border-b border-white/[0.08] p-6 sm:border-b-0 sm:border-r">
                  <span className="text-sm font-medium text-white">
                    Technology
                  </span>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Build reliable and scalable infrastructure.
                  </p>
                </div>

                <div className="p-6">
                  <span className="text-sm font-medium text-white">Growth</span>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Measure, improve, and evolve over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section
        aria-labelledby="process-title"
        className="
          px-6
          py-24
          md:px-10
          lg:px-16
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <SectionLabel>How We Work</SectionLabel>

            <h2
              id="process-title"
              className="
                mt-5
                text-3xl
                font-medium
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              A clear process from idea to growth.
            </h2>
          </div>

          <div className="mt-12">
            {PROCESS.map((item) => (
              <ProcessItem key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE HELP
      ===================================================== */}
      <section
        aria-labelledby="audience-title"
        className="
          border-y
          border-white/[0.08]
          px-6
          py-24
          md:px-10
          lg:px-16
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <SectionLabel>Who We Help</SectionLabel>

            <h2
              id="audience-title"
              className="
                mt-5
                text-3xl
                font-medium
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              Built for businesses that want to grow digitally.
            </h2>
          </div>

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-x-10
              md:grid-cols-2
            "
          >
            {AUDIENCE.map((item) => (
              <AudienceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY TERAS SOFTWARE
      ===================================================== */}
      <section
        aria-labelledby="why-title"
        className="
          px-6
          py-24
          md:px-10
          lg:px-16
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <SectionLabel>Why Teras Software</SectionLabel>

            <h2
              id="why-title"
              className="
                mt-5
                text-3xl
                font-medium
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              Business first.
              <span className="text-white/35"> Technology second.</span>
            </h2>
          </div>

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {PRINCIPLES.map((item) => (
              <Principle key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section
        aria-labelledby="faq-title"
        className="
          border-t
          border-white/[0.08]
          px-6
          py-24
          md:px-10
          lg:px-16
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            gap-12
            md:grid-cols-[0.65fr_1.35fr]
            md:gap-20
          "
        >
          <div>
            <SectionLabel>Frequently Asked Questions</SectionLabel>

            <h2
              id="faq-title"
              className="
                mt-5
                text-3xl
                font-medium
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              Things you may want to know.
            </h2>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-6
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  {faq.question}

                  <span
                    className="
                      text-lg
                      font-light
                      text-white/30
                      transition-transform
                      duration-300
                      group-open:rotate-45
                    "
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-2xl pt-4 text-sm leading-6 text-white/40">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        aria-labelledby="services-cta-title"
        className="
          border-t
          border-white/[0.08]
          px-6
          py-24
          md:px-10
          lg:px-16
          lg:py-32
        "
      >
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Start a Conversation</SectionLabel>

          <h2
            id="services-cta-title"
            className="
              mt-6
              text-4xl
              font-medium
              leading-tight
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Your business deserves
            <span className="text-white/35">
              {" "}
              a stronger digital foundation.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-6
              text-white/40
              md:text-base
              md:leading-7
            "
          >
            Tell us where your business is today and where you want it to go.
          </p>

          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-md
              bg-[#d8b47a]
              px-7
              py-3.5
              text-sm
              font-medium
              text-[#11151b]
              transition-transform
              hover:-translate-y-0.5
            "
          >
            Start a project
            <ArrowRight size={16} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
