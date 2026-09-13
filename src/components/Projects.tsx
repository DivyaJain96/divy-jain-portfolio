import { useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { goHomeHash } from '@/lib/motion';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const filters = ['All', 'Systems', 'Integrations', 'Performance', 'Reliability'] as const;

const visualTone: Record<string, string> = {
  commerce: 'from-champagne-400/20 via-ink-850 to-ink-900',
  people: 'from-signal-400/20 via-ink-850 to-ink-900',
  api: 'from-champagne-300/15 via-ink-850 to-ink-900',
  tasks: 'from-white/10 via-ink-850 to-ink-900',
  gateway: 'from-signal-500/20 via-ink-850 to-ink-900',
  inventory: 'from-champagne-500/15 via-ink-850 to-ink-900',
};

function ProjectCard({
  project,
  featured,
  delay,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
  delay: number;
}) {
  const hasLive = Boolean(project.liveDemo);
  const hasGit = Boolean(project.github);
  const [open, setOpen] = useState(Boolean(featured));
  const cardRef = useRef<HTMLElement>(null);
  const metrics = 'metrics' in project ? project.metrics : undefined;

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    const rx = ((y - rect.height / 2) / rect.height) * -4;
    const ry = ((x - rect.width / 2) / rect.width) * 4;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <Reveal delay={delay} className={featured ? 'lg:col-span-2' : ''}>
      <article
        ref={cardRef}
        data-cursor-card
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`project-card panel group relative overflow-hidden rounded-[1.6rem] ${
          featured ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr] featured-card' : ''
        }`}
      >
        <div className={`relative overflow-hidden ${featured ? 'min-h-[240px]' : 'h-44'}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${visualTone[project.visual] || visualTone.api} transition-transform duration-700 group-hover:scale-105`} />
          <div className="absolute inset-0 bg-grid-fine bg-[size:28px_28px] opacity-40 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {project.featured && (
              <span className="rounded-full border border-champagne-400/30 bg-champagne-400/10 px-2.5 py-1 text-xs text-champagne-200">
                Featured
              </span>
            )}
            <span className="rounded-full border border-white/10 bg-void/40 px-2.5 py-1 text-xs text-ink-200">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-5 left-5 font-display text-5xl italic text-white/10 transition-transform duration-500 group-hover:scale-110">
            {project.title.charAt(0)}
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <h3 className="text-2xl text-ink-100 transition-colors duration-300 group-hover:text-champagne-200 sm:text-3xl">
            {project.title}
          </h3>

          {metrics && metrics.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-champagne-400/20 bg-champagne-400/8 px-3 py-3"
                >
                  <p className="font-display text-2xl text-champagne-200 sm:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs text-ink-300">{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          <dl className="mt-4 space-y-3 text-sm leading-relaxed">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-champagne-400">Challenge</dt>
              <dd className="mt-1 text-ink-300">{project.problem}</dd>
            </div>
            {(open || featured) && (
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-champagne-400">Solution</dt>
                <dd className="mt-1 text-ink-200">{project.solution}</dd>
              </div>
            )}
            <div className="rounded-2xl border-l-2 border-champagne-400/50 bg-white/[0.02] px-3 py-2.5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-champagne-400">Impact</dt>
              <dd className="mt-1 text-ink-100">{project.impact}</dd>
            </div>
          </dl>

          {!featured && (
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm text-champagne-200 transition-colors hover:text-champagne-100"
              aria-expanded={open}
            >
              {open ? 'Hide details' : 'View details'}
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
          )}

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-champagne-400">Technologies</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="rounded-md border border-white/8 px-2 py-1 font-mono text-[11px] text-ink-300 transition-colors duration-300 group-hover:border-champagne-400/25 group-hover:text-ink-100"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
          {(hasLive || hasGit) && (
            <div className="mt-5 flex items-center gap-4 text-sm">
              {hasLive && (
                <a href={project.liveDemo} className="group/link inline-flex items-center gap-1.5 text-champagne-200 hover:text-champagne-100">
                  Live <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
              {hasGit && (
                <a href={project.github} className="inline-flex items-center gap-1.5 text-ink-300 hover:text-ink-100">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          index="05"
          kicker="Selected work"
          title="Case studies from"
          italic="systems I have owned."
          copy="Five pieces of work, written so a client or recruiter can see the problem, the approach, and the result — without confidential internals."
        />

        <Reveal className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`min-h-11 rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                filter === item
                  ? 'bg-champagne-400 text-void shadow-glow'
                  : 'border border-white/10 text-ink-200 hover:border-champagne-400/40 hover:text-ink-100'
              }`}
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={`${filter}-${project.title}`} project={project} featured delay={i * 0.07} />
          ))}
        </div>
        {rest.length > 0 && (
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <ProjectCard key={`${filter}-${project.title}`} project={project} delay={0.08 + i * 0.06} />
            ))}
          </div>
        )}

        <Reveal className="mt-10 flex justify-center" delay={0.12}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goHomeHash('#contact');
            }}
            className="btn-secondary"
          >
            Discuss a similar project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
