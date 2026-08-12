import { ArrowUpRight, ChevronLeft, ChevronRight, Layers3 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { PROJECTS, type ProjectCategory } from "../../lib/content";
import { Nav } from "../landing";

const TABS: {
  id: ProjectCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "web",
    label: "Websites",
    description: "Digital experiences designed for modern businesses.",
  },
  {
    id: "app",
    label: "Apps",
    description: "Mobile products built around real user needs.",
  },
];

function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center bg-[#080d14]">
        <Layers3
          size={32}
          strokeWidth={1}
          className="text-white/20"
          aria-hidden="true"
        />
      </div>
    );
  }

  const showPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="group relative overflow-hidden border-b border-white/8 bg-[#080d14]">
      <div className="aspect-16/10 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${title} project preview by Teras Software`}
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-top
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label={`Previous ${title} project image`}
            className="
              absolute
              left-4
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/50
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-black/70
              group-hover:opacity-100
            "
          >
            <ChevronLeft size={17} strokeWidth={1.5} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label={`Next ${title} project image`}
            className="
              absolute
              right-4
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/50
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-black/70
              group-hover:opacity-100
            "
          >
            <ChevronRight size={17} strokeWidth={1.5} aria-hidden="true" />
          </button>

          <div
            className="
              absolute
              bottom-4
              left-0
              right-0
              flex
              justify-center
              gap-1.5
            "
            aria-label={`${title} project images`}
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`View ${title} project image ${index + 1}`}
                aria-current={index === currentIndex}
                className={`
                  h-1
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === currentIndex
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }
                `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const categoryLabel =
    project.category === "web"
      ? "Website"
      : project.category === "app"
        ? "Mobile App"
        : "Digital Product";

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-white/[0.08]
        bg-[#080d14]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/[0.15]
        hover:shadow-[0_24px_80px_rgba(0,0,0,0.25)]
      "
    >
      <ProjectGallery images={project.images ?? []} title={project.title} />

      <div className="p-6 md:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d8b47a]
            "
          >
            {categoryLabel}
          </span>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white/50
                transition-all
                hover:border-white/25
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </a>
          )}
        </div>

        <h2
          className="
            text-xl
            font-medium
            tracking-[-0.02em]
            text-white
            md:text-[22px]
          "
        >
          {project.title}
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
          {project.description}
        </p>

        {project.stack.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-white/[0.08]
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  text-white/50
                "
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 border-t border-white/[0.07] pt-5">
          <span className="text-xs text-white/30">{project.role}</span>
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("web");

  const filteredProjects = PROJECTS.filter(
    (project) => project.category === activeTab,
  );

  const activeCategory = TABS.find((tab) => tab.id === activeTab);

  return (
    <main className="min-h-screen bg-[#03070d] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <Nav/>
      <section
        aria-labelledby="work-page-title"
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
          <div className="max-w-4xl">
            <p
              className="
                mb-6
                flex
                items-center
                gap-4
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#d8b47a]
              "
            >
              <span className="h-px w-10 bg-[#d8b47a]" aria-hidden="true" />
              Our Work
            </p>

            <h1
              id="work-page-title"
              className="
                text-5xl
                font-medium
                leading-[1.02]
                tracking-[-0.05em]
                text-white
                sm:text-6xl
                lg:text-[76px]
              "
            >
              Digital products built
              <span className="text-white/35">
                {" "}
                to move businesses forward.
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
              Explore selected websites and digital products built by Teras
              Software for businesses, startups, and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO
      ========================================================= */}
      <section
        aria-labelledby="selected-work-title"
        className="
          px-6
          pb-28
          md:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 id="selected-work-title" className="sr-only">
            Selected websites and digital products
          </h2>

          {/* Category tabs */}
          <div className="border-y border-white/[0.08]">
            <div
              className="flex overflow-x-auto"
              role="tablist"
              aria-label="Portfolio categories"
            >
              {TABS.map((tab) => {
                const count = PROJECTS.filter(
                  (project) => project.category === tab.id,
                ).length;

                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative
                      shrink-0
                      px-6
                      py-5
                      text-left
                      transition-colors
                      md:px-8
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/35 hover:text-white/70"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">{tab.label}</span>

                      <span
                        className={`
                          text-[10px]
                          ${isActive ? "text-[#d8b47a]" : "text-white/25"}
                        `}
                      >
                        {String(count).padStart(2, "0")}
                      </span>
                    </div>

                    {isActive && (
                      <span
                        className="
                          absolute
                          bottom-0
                          left-6
                          right-6
                          h-px
                          bg-[#d8b47a]
                          md:left-8
                          md:right-8
                        "
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category information */}
          <div className="mt-8 flex items-center justify-between gap-6">
            <p className="text-sm text-white/35">
              {activeCategory?.description}
            </p>

            <span className="hidden shrink-0 text-xs text-white/25 sm:block">
              {String(filteredProjects.length).padStart(2, "0")} projects
            </span>
          </div>

          {/* Project grid */}
          {filteredProjects.length > 0 ? (
            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
              "
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div
              className="
                mt-8
                flex
                min-h-[320px]
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-[#080d14]
              "
            >
              <p className="text-sm text-white/35">
                More projects coming soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          VALUE SECTION
      ========================================================= */}
      <section
        aria-labelledby="work-value-title"
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
            md:grid-cols-[0.8fr_1.2fr]
            md:gap-20
          "
        >
          <div>
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#d8b47a]
              "
            >
              More than a portfolio
            </p>

            <h2
              id="work-value-title"
              className="
                mt-5
                text-3xl
                font-medium
                leading-tight
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              We build digital
              <span className="text-white/35"> foundations.</span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-7 text-white/50 md:text-lg md:leading-8">
              A website or application should do more than look good. It should
              help your business communicate, build trust, reach new customers,
              and create a stronger digital presence.
            </p>

            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-px
                overflow-hidden
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.08]
                sm:grid-cols-3
              "
            >
              <div className="bg-[#080d14] p-5">
                <span className="text-sm font-medium text-white">Strategy</span>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Built around your business goals.
                </p>
              </div>

              <div className="bg-[#080d14] p-5">
                <span className="text-sm font-medium text-white">
                  Experience
                </span>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Designed to be clear and easy to use.
                </p>
              </div>

              <div className="bg-[#080d14] p-5">
                <span className="text-sm font-medium text-white">
                  Foundation
                </span>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Ready to grow with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        aria-labelledby="work-cta-title"
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
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d8b47a]
            "
          >
            Have a project in mind?
          </p>

          <h2
            id="work-cta-title"
            className="
              mt-5
              text-4xl
              font-medium
              leading-tight
              tracking-[-0.04em]
              text-white
              sm:text-5xl
            "
          >
            Let's build something
            <span className="text-white/35"> meaningful.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-6
              text-white/45
            "
          >
            Tell us what you're building and where you want your business to go.
          </p>

          <Link
            to="/contact"
            className="
              mt-8
              inline-flex
              items-center
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
            <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
