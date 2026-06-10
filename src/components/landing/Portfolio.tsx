import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, type ProjectCategory } from '../../lib/content';

const TABS: { id: ProjectCategory; label: string; count: number }[] = [
  { id: 'web', label: 'Web', count: PROJECTS.filter((p) => p.category === 'web').length },
  { id: 'app', label: 'Aplikasi', count: PROJECTS.filter((p) => p.category === 'app').length },
];

function ProjectImages({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  if (images.length === 0) return null;

  const isPortrait = images[current].includes('Screenshot');

  return (
    <div className="relative overflow-hidden rounded-t bg-surface border-b border-border">
      <div className={`flex items-center justify-center ${isPortrait ? 'h-48' : 'h-44'} bg-surface`}>
        <img
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className={`object-contain ${isPortrait ? 'h-full w-auto' : 'w-full h-full object-cover'}`}
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-background/90 border border-border rounded-full flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-background/90 border border-border rounded-full flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={14} />
          </button>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-border'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('web');

  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="section-surface">
      <div className="container-max section-padding">
        <h2 className="text-2xl md:text-3xl font-semibold text-text mb-8">
          Portofolio
        </h2>

        <div className="flex gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm rounded transition-colors ${
                activeTab === tab.id
                  ? 'bg-text text-white'
                  : 'bg-background text-text-secondary hover:bg-border'
              }`}
            >
              {tab.label} <span className="text-xs opacity-70">({tab.count})</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-background border border-border rounded overflow-hidden hover:shadow-sm transition-shadow"
            >
              {project.images && project.images.length > 0 && (
                <ProjectImages images={project.images} title={project.title} />
              )}

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-medium text-text">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-primary transition-colors"
                      aria-label={`Lihat ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-surface text-text-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-text-secondary">{project.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
