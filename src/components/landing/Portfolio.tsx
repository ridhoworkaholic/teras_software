import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers3 } from "lucide-react";
import { PROJECTS, type ProjectCategory } from "../../lib/content";

const TABS: {
  id: ProjectCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "web",
    label: "Websites",
    description: "Digital experiences for modern businesses",
  },
  {
    id: "app",
    label: "Apps",
    description: "Mobile products built for real users",
  },
  // {
  //   id: "ui",
  //   label: "UI Design",
  //   description: "Interfaces designed with purpose",
  // },
];

function ProjectImages({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center bg-[#080d14]">
        <Layers3 size={32} strokeWidth={1} className="text-white/20" />
      </div>
    );
  }

  const prev = () => {
    setCurrent((value) => (value === 0 ? images.length - 1 : value - 1));
  };

  const next = () => {
    setCurrent((value) => (value === images.length - 1 ? 0 : value + 1));
  };

  const image = images[current];

  return (
    <div className="group relative overflow-hidden border-b border-white/[0.08] bg-[#080d14]">
      {/* Image */}
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>

      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
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
            <ChevronLeft size={17} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={next}
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
            <ChevronRight size={17} strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`View ${title} image ${index + 1}`}
                className={`
                  h-1
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === current
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
      {/* Project image */}
      {project.images && project.images.length > 0 && (
        <ProjectImages images={project.images} title={project.title} />
      )}

      {/* Project information */}
      <div className="p-6 md:p-7">
        {/* Category + external link */}
        <div className="mb-5 flex items-center justify-between">
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d8b47a]
            "
          >
            {project.category === "web"
              ? "Website"
              : project.category === "app"
                ? "Mobile App"
                : "UI Design"}
          </span>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white/50
                transition-all
                duration-300
                hover:border-white/25
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>

        {/* Title */}
        <h3
          className="
            text-xl
            font-medium
            tracking-[-0.02em]
            text-white
            md:text-[22px]
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            max-w-xl
            text-sm
            leading-6
            text-white/50
          "
        >
          {project.description}
        </p>

        {/* Stack */}
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

        {/* Role */}
        <div className="mt-6 border-t border-white/[0.07] pt-5">
          <span className="text-xs text-white/30">{project.role}</span>
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("web");

  const filteredProjects = PROJECTS.filter(
    (project) => project.category === activeTab,
  );

  const activeCategory = TABS.find((tab) => tab.id === activeTab);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="
        relative
        overflow-hidden
        bg-[#03070d]
        py-24
        text-white
        md:py-32
        lg:py-36
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#d8b47a]/[0.025]
          blur-[140px]
        "
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span
              className="
                h-px
                w-10
                bg-[#d8b47a]
              "
            />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#d8b47a]
              "
            >
              Selected Work
            </span>
          </div>

          <h2
            id="portfolio-title"
            className="
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
            Digital products built
            <span className="text-white/35"> to move businesses forward.</span>
          </h2>

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
            Explore selected websites, mobile applications, and digital
            interfaces developed by Teras Software for businesses, startups, and
            organizations.
          </p>
        </div>

        {/* Category navigation */}
        <div className="mt-14 border-y border-white/[0.08]">
          <div
            className="
              flex
              overflow-x-auto
              scrollbar-none
            "
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
                  aria-controls={`portfolio-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative
                    shrink-0
                    px-6
                    py-5
                    text-left
                    transition-colors
                    duration-300
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
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active category description */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-white/35">{activeCategory?.description}</p>

          <span className="hidden text-xs text-white/25 sm:block">
            {String(filteredProjects.length).padStart(2, "0")} projects
          </span>
        </div>

        {/* Projects */}
        <div
          id={`portfolio-${activeTab}`}
          role="tabpanel"
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

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div
            className="
              mt-8
              flex
              min-h-[280px]
              items-center
              justify-center
              rounded-xl
              border
              border-dashed
              border-white/[0.08]
              bg-white/[0.015]
            "
          >
            <div className="text-center">
              <Layers3
                size={28}
                strokeWidth={1}
                className="mx-auto text-white/20"
              />

              <p className="mt-4 text-sm text-white/40">
                UI design projects will be showcased here.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
