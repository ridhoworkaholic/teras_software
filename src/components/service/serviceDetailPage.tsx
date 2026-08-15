import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
} from "lucide-react";

import { SERVICES } from "./contentService";
import { CONTACT } from "../../lib/content";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES.find((item) => item.slug === slug);

  useEffect(() => {
    if (!service) return;

    document.title = service.seo.title;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", service.seo.description);

    // Optional: canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/service/${service.slug}`,
    );

    // Open Graph
    setMetaTag("property", "og:title", service.seo.title);

    setMetaTag("property", "og:description", service.seo.description);

    setMetaTag(
      "property",
      "og:url",
      `${window.location.origin}/service/${service.slug}`,
    );

    setMetaTag("property", "og:type", "website");
  }, [service]);

  if (!service) {
    return <Navigate to="/service" replace />;
  }

  return (
    <main className="min-h-screen bg-[#05090f] text-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#d8b47a]/[0.04]
            blur-[120px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            pb-24
            pt-20
            md:px-8
            md:pb-32
            md:pt-28
            lg:px-10
          "
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-xs text-white/30">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>

              <li>/</li>

              <li>
                <Link
                  to="/service"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>/</li>

              <li className="text-white/55">{service.title}</li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1fr_360px] lg:items-end">
            {/* Hero content */}
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d8b47a]" />

                <span className="text-[11px] font-medium tracking-[0.22em] text-[#d8b47a]">
                  {service.hero.eyebrow}
                </span>
              </div>

              <h1
                className="
                  max-w-4xl
                  text-4xl
                  font-medium
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[68px]
                "
              >
                {service.hero.title}
              </h1>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-7
                  text-white/45
                  md:text-lg
                  md:leading-8
                "
              >
                {service.hero.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to={CONTACT.whatsappLink}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-lg
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-[#05090f]
                    transition-all
                    hover:bg-[#d8b47a]
                  "
                >
                  {service.cta.button}

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="#overview"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/[0.08]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white/60
                    transition-all
                    hover:border-white/[0.16]
                    hover:text-white
                  "
                >
                  Explore service
                </a>
              </div>
            </div>

            {/* Service number */}
            <div className="hidden lg:block">
              <div className="border-l border-white/[0.08] pl-8">
                <span className="text-[10px] font-medium tracking-[0.25em] text-white/25">
                  SERVICE
                </span>

                <div className="mt-3 text-7xl font-light tracking-[-0.05em] text-white/[0.08]">
                  {service.number}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section id="overview" className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            <SectionLabel number="01" label="OVERVIEW" />

            <div className="max-w-3xl">
              <h2
                className="
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-[-0.035em]
                  text-white
                  md:text-4xl
                "
              >
                {service.introduction.title}
              </h2>

              <div className="mt-7 space-y-5">
                {service.introduction.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="
                        text-sm
                        leading-7
                        text-white/45
                        md:text-base
                        md:leading-8
                      "
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEMS
      ===================================================== */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <SectionHeading
            number="02"
            eyebrow="THE CHALLENGE"
            title="Masalah yang Kami Bantu Selesaikan"
            description="Kami memahami bahwa setiap bisnis memiliki tantangan digital yang berbeda. Karena itu, solusi yang dibangun harus berangkat dari masalah yang benar-benar ingin diselesaikan."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
            {service.problems.map((problem, index) => (
              <article
                key={problem.title}
                className="
                  bg-[#080d14]
                  p-7
                  md:p-8
                "
              >
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#d8b47a]/60">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-white">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {problem.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <SectionHeading
            number="03"
            eyebrow="OUR APPROACH"
            title="Bagaimana Kami Membantu"
            description="Kami menggabungkan strategi, design, technology, dan business understanding untuk menghasilkan solusi digital yang relevan."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.solutions.map((solution, index) => (
              <article
                key={solution.title}
                className="
                  group
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-[#080d14]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/[0.13]
                  hover:bg-[#0a1018]
                "
              >
                <div className="flex items-center justify-between">
                  <CircleCheck
                    size={18}
                    strokeWidth={1.4}
                    className="text-[#d8b47a]"
                  />

                  <span className="text-[10px] tracking-[0.2em] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-medium text-white">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <SectionHeading
            number="04"
            eyebrow="CAPABILITIES"
            title={`Apa yang Termasuk dalam ${service.title}`}
            description={service.description}
          />

          <div className="mt-14 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {service.featuresDetail.map((feature, index) => (
              <article
                key={feature.title}
                className="
                    grid
                    gap-5
                    py-7
                    md:grid-cols-[80px_280px_1fr]
                    md:items-start
                    md:gap-8
                  "
              >
                <span className="text-xs font-medium tracking-[0.15em] text-[#d8b47a]/60">
                  0{index + 1}
                </span>

                <h3 className="text-lg font-medium text-white">
                  {feature.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-white/40">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <SectionHeading
            number="05"
            eyebrow="PROCESS"
            title="Proses Pengerjaan"
            description="Kami menggunakan proses yang terstruktur agar setiap tahap proyek memiliki tujuan dan output yang jelas."
          />

          <div className="mt-14">
            {service.process.map((step) => (
              <article
                key={step.number}
                className="
                  group
                  grid
                  gap-6
                  border-t
                  border-white/[0.06]
                  py-8
                  md:grid-cols-[100px_280px_1fr]
                  md:items-start
                  md:gap-8
                "
              >
                <span className="text-sm font-medium text-[#d8b47a]">
                  {step.number}
                </span>

                <h3 className="text-xl font-medium tracking-[-0.02em] text-white">
                  {step.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-white/40">
                  {step.description}
                </p>
              </article>
            ))}

            <div className="border-t border-white/[0.06]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            <SectionLabel number="06" label="TECHNOLOGY" />

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-4xl">
                Technology yang Kami Gunakan
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                Pemilihan teknologi disesuaikan dengan kebutuhan, tingkat
                kompleksitas, maintainability, dan tujuan jangka panjang produk.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      px-4
                      py-2.5
                      text-xs
                      text-white/55
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IDEAL FOR
      ===================================================== */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <SectionHeading
            number="07"
            eyebrow="WHO IT'S FOR"
            title="Apakah Service Ini Cocok untuk Bisnis Anda?"
            description="Solusi dapat disesuaikan dengan ukuran bisnis, kebutuhan operasional, target pengguna, dan tingkat kompleksitas proyek."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {service.idealFor.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-start
                  gap-4
                  rounded-lg
                  border
                  border-white/[0.06]
                  bg-[#080d14]
                  p-5
                "
              >
                <Check
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#d8b47a]"
                />

                <span className="text-sm leading-6 text-white/55">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <div className="text-center">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#d8b47a]">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-white md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40">
              Beberapa pertanyaan yang sering muncul mengenai{" "}
              {service.title.toLowerCase()}.
            </p>
          </div>

          <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {service.faq.map((item) => (
              <details key={item.question} className="group">
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-6
                    py-6
                    text-left
                  "
                >
                  <h3 className="text-sm font-medium leading-6 text-white/75">
                    {item.question}
                  </h3>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.4}
                    className="
                      shrink-0
                      text-white/30
                      transition-transform
                      duration-300
                      group-open:rotate-180
                    "
                  />
                </summary>

                <div className="pb-6 pr-8">
                  <p className="text-sm leading-7 text-white/40">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-32 lg:px-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#080d14]
              px-7
              py-12
              md:px-12
              md:py-16
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-64
                w-64
                rounded-full
                bg-[#d8b47a]/[0.05]
                blur-[90px]
              "
            />

            <div className="relative max-w-3xl">
              <span className="text-[10px] font-medium tracking-[0.25em] text-[#d8b47a]">
                LET'S WORK TOGETHER
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-[-0.035em]
                  text-white
                  md:text-5xl
                "
              >
                {service.cta.title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                {service.cta.description}
              </p>

              <Link
                to="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-lg
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-[#05090f]
                  transition-all
                  hover:bg-[#d8b47a]
                "
              >
                {service.cta.button}

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STRUCTURED DATA
          FAQ + Service
      ===================================================== */}
      <JsonLd service={service} />
    </main>
  );
}

/* ============================================================
   SECTION LABEL
============================================================ */

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-[#d8b47a]">{number}</span>

        <span className="h-px w-8 bg-white/[0.12]" />
      </div>

      <span className="mt-3 block text-[10px] font-medium tracking-[0.22em] text-white/25">
        {label}
      </span>
    </div>
  );
}

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <SectionLabel number={number} label={eyebrow} />

      <div className="max-w-3xl">
        <h2
          className="
            text-3xl
            font-medium
            leading-tight
            tracking-[-0.035em]
            text-white
            md:text-4xl
          "
        >
          {title}
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   META TAG HELPER
============================================================ */

function setMetaTag(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

/* ============================================================
   JSON-LD
============================================================ */

function JsonLd({ service }: { service: (typeof SERVICES)[number] }) {
  useEffect(() => {
    const id = "service-json-ld";

    const existing = document.getElementById(id);

    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");

    script.id = id;
    script.type = "application/ld+json";

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",

      name: service.title,

      description: service.seo.description,

      url: `${window.location.origin}/service/${service.slug}`,

      provider: {
        "@type": "Organization",
        name: "Teras Software",
        url: window.location.origin,
      },

      serviceType: service.title,

      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },

      audience: {
        "@type": "Audience",
        audienceType: "UMKM, startup, dan perusahaan",
      },
    };

    script.textContent = JSON.stringify(jsonLd);

    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [service]);

  return null;
}
